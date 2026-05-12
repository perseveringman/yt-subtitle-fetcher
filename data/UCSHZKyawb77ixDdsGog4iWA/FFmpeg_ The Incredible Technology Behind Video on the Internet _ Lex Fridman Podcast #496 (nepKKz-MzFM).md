---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "nepKKz-MzFM"
title: "FFmpeg: The Incredible Technology Behind Video on the Internet | Lex Fridman Podcast #496"
video_url: "https://www.youtube.com/watch?v=nepKKz-MzFM"
thumbnail_url: "https://i.ytimg.com/vi/nepKKz-MzFM/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=nepKKz-MzFM"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2026-05-06T22:03:16.000Z"
upload_date: "2026-05-06"
duration_seconds: 15502
duration_human: "4:18:22"
view_count: 169712
like_count: 4862
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-05-12T03:10:31.173Z"
---

# FFmpeg: The Incredible Technology Behind Video on the Internet | Lex Fridman Podcast #496

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=nepKKz-MzFM
- video_id: nepKKz-MzFM
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2026-05-06T22:03:16.000Z
- upload_date: 2026-05-06
- duration: 4:18:22
- view_count: 169712
- like_count: 4862
- has_subtitle: true
- language: en
- availability: public
- tags: FFmpeg & VLC, alex friedman, lex ai, lex debate, lex freedman, lex fridman, lex friedman, lex interview, lex lecture, lex mit, lex podcast, lex transcript
- categories: Science & Technology

## Description

Jean-Baptiste Kempf is lead developer of VLC and president of VideoLAN. Kieran Kunhya is a longtime FFmpeg contributor, codec engineer, and the person behind the now-infamous FFmpeg account on X.
Thank you for listening ❤ Check out our sponsors: https://lexfridman.com/sponsors/ep496-sb
See below for timestamps, transcript, and to give feedback, submit questions, contact Lex, etc.

*Transcript:*
https://lexfridman.com/ffmpeg-transcript

*CONTACT LEX:*
*Feedback* - give feedback to Lex: https://lexfridman.com/survey
*AMA* - submit questions, videos or call-in: https://lexfridman.com/ama
*Hiring* - join our team: https://lexfridman.com/hiring
*Other* - other ways to get in touch: https://lexfridman.com/contact

*EPISODE LINKS:*
FFmpeg on X: https://x.com/FFmpeg
FFmpeg: https://ffmpeg.org/
VideoLAN (VLC): https://www.videolan.org/
VideoLAN on X: https://x.com/videolan
Jean-Baptiste's Website: https://jbkempf.com/
Jean-Baptiste's LinkedIn: https://www.linkedin.com/in/jbkempf/
Jean-Baptiste's GitHub: https://github.com/jbkempf
Kieran's X: https://x.com/kierank_
Kieran's LinkedIn: https://bit.ly/3OORhmC
Kieran's GitHub: https://github.com/kierank

*SPONSORS:*
To support this podcast, check out our sponsors & get discounts:
*Larridin:* Measure AI adoption in your business.
Go to https://lexfridman.com/s/larridin-ep496-sb
*Blitzy:* AI agent for large enterprise codebases.
Go to https://lexfridman.com/s/blitzy-ep496-sb
*BetterHelp:* Online therapy and counseling.
Go to https://lexfridman.com/s/betterhelp-ep496-sb
*Fin:* AI agent for customer service.
Go to https://lexfridman.com/s/fin-ep496-sb
*LMNT:* Zero-sugar electrolyte drink mix.
Go to https://lexfridman.com/s/lmnt-ep496-sb
*Perplexity:* AI-powered answer engine.
Go to https://lexfridman.com/s/perplexity-ep496-sb

*OUTLINE:*
0:00 - Episode highlight
2:17 - Introduction
5:35 - Weirdest things VLC opens
9:59 - How video playback works
19:20 - Video codecs and containers
30:07 - FFmpeg explained
51:07 - Linus Torvalds
55:46 - Turning down millions to keep VLC ad-free
1:10:04 - FFmpeg & Google drama
1:29:18 - FFmpeg developers
1:35:55 - VLC and FFmpeg
1:40:29 - History of FFmpeg
1:43:46 - Reverse engineering codecs
1:57:01 - FFmpeg testing
2:01:08 - Assembly code (handwritten)
2:25:26 - Rust programming language
2:34:42 - FFmpeg and Libav fork
2:43:04 - Open source burnout
2:50:51 - x264 and internet video
3:04:07 - Video compression basics
3:11:04 - CIA and fake VLC
3:21:39 - Ultra low latency streaming
3:39:07 - AV2 codec and video patents
3:48:59 - VLC backdoors
3:59:14 - Video archiving
4:05:51 - Future of FFmpeg and VLC

*PODCAST LINKS:*
- Podcast Website: https://lexfridman.com/podcast
- Apple Podcasts: https://apple.co/2lwqZIr
- Spotify: https://spoti.fi/2nEwCF8
- RSS: https://lexfridman.com/feed/podcast/
- Podcast Playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
- Clips Channel: https://www.youtube.com/lexclips

*SOCIAL LINKS:*
- X: https://x.com/lexfridman
- Instagram: https://instagram.com/lexfridman
- TikTok: https://tiktok.com/@lexfridman
- LinkedIn: https://linkedin.com/in/lexfridman
- Facebook: https://facebook.com/lexfridman
- Patreon: https://patreon.com/lexfridman
- Telegram: https://t.me/lexfridman
- Reddit: https://reddit.com/r/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
- The important is, is your code good? We care about

00:00:03 --> 00:00:08
excellent code. We don't care who you are. Like maybe you're a dog. I don't

00:00:07 --> 00:00:12
care, right? I don't care where you come from. I need to look at your code.

00:00:11 --> 00:00:16
Oh, yeah, but I'm an engineer at this very large company in

00:00:15 --> 00:00:20
Italy, in Germany, in the US. We don't care. We care about the

00:00:19 --> 00:00:23
quality of your code because this is what defines our community

00:00:23 --> 00:00:28
and which means that we have a lot of people who contribute who are some very different

00:00:27 --> 00:00:32
backgrounds and very introverted. Sure. But that's okay, right?

00:00:31 --> 00:00:36
- FFmpeg is probably one of the biggest CPU users in the world. Everything we've just

00:00:35 --> 00:00:40
said in the past couple of minutes, every sentence is someone's

00:00:39 --> 00:00:44
lifetime's work. There are books about every sentence. So the level of complexity

00:00:44 --> 00:00:46
in many cases is inordinate.

00:00:45 --> 00:00:50
- FFmpeg has one hundred thousand lines of assembly for all the codecs.

00:00:50 --> 00:00:51
- For all codecs. Mm-hmm.

00:00:50 --> 00:00:55
- And just this one has two hundred and forty thousand. Every cycle

00:00:55 --> 00:00:59
matters. We are talking about probably three billion

00:00:58 --> 00:01:03
devices which are going to decode video nonstop because, for

00:01:02 --> 00:01:07
example, thirty percent of the video from Netflix is now in AV1,

00:01:06 --> 00:01:08
fifty percent of YouTube.

00:01:07 --> 00:01:11
- This is what peak video codecs should look like.

00:01:11 --> 00:01:16
Seventy-nine point nine percent assembly, nineteen point six percent C,

00:01:15 --> 00:01:19
and zero point five percent other.

00:01:18 --> 00:01:26
- And what's incredible is with those tweets, which is factual, people get crazy.

00:01:25 --> 00:01:29
- For the last two years, they go crazy. No, intrinsics is fine. The compiler-

00:01:28 --> 00:01:33
You can optimize your compiler. Auto-vectorization, it's your fault. You don't

00:01:32 --> 00:01:36
understand. And we've tried that forever, right?

00:01:35 --> 00:01:40
- For two years, and two years later, showing hundreds of examples

00:01:40 --> 00:01:44
of handwritten assembly. No, no, no, you're doing it wrong. The compiler can do this.

00:01:43 --> 00:01:49
The intelligence agencies tried to, like, say, "Can you put a backdoor in VLC?"

00:01:48 --> 00:01:50
- Yes. Two of them.

00:01:50 --> 00:01:51
- Well, what did you say?

00:01:51 --> 00:01:55
- No. Well, I was a lot less polite.

00:01:54 --> 00:01:57
- Basically saying, "Hell no."

00:01:56 --> 00:02:01
- Like, if we had to compromise our software, we would shut it down. This is clear.

00:02:00 --> 00:02:03
- Any tweets Kieran, you regret?

00:02:04 --> 00:02:05
- Tweets I regret?

00:02:05 --> 00:02:09
- Or is it like that, how does the French song go? Regret nothing.

00:02:08 --> 00:02:15
- Don't regret anything. No, it's because regrets are attacks on your mind.

00:02:17 --> 00:02:21
- The following is a conversation all about FFmpeg and VLC

00:02:21 --> 00:02:26
with Jean-Baptiste Kempf and Kieran Kunhya.

00:02:25 --> 00:02:30
FFmpeg is an open source software system that is

00:02:30 --> 00:02:34
the invisible backbone behind YouTube, Netflix, Chrome,

00:02:33 --> 00:02:38
VLC, Discord, and basically every platform that

00:02:37 --> 00:02:41
ouches video or audio on the internet.

00:02:41 --> 00:02:46
It can decode, encode, transcode, stream, and

00:02:45 --> 00:02:50
play almost any video or audio format ever

00:02:49 --> 00:02:54
created. To me, it is one of the most incredible software

00:02:53 --> 00:02:59
systems ever developed, and it's all done by volunteers.

00:02:59 --> 00:03:04
VLC is also a legendary piece of software. It is an

00:03:03 --> 00:03:08
open source media player that plays basically anything you throw at

00:03:07 --> 00:03:12
it, any format, any platform, no ads, no tracking.

00:03:11 --> 00:03:15
It has been downloaded over six billion times, and

00:03:15 --> 00:03:19
again, for me, it has been one of my favorite pieces of

00:03:18 --> 00:03:23
software ever, with the most legendary logo, which I,

00:03:22 --> 00:03:27
of course, had to honor in this conversation by wearing the

00:03:27 --> 00:03:31
VLC traffic cone hat the whole time.

00:03:31 --> 00:03:36
So again, above all else, thank you to the incredible volunteer

00:03:35 --> 00:03:40
engineers who put their heart and soul into this code that has been

00:03:39 --> 00:03:43
used and loved by billions of people. Thank you.

00:03:43 --> 00:03:50
And about the two great engineers and human beings I'm talking to in this episode,

00:03:50 --> 00:03:55
Jean-Baptiste is the president of VideoLAN and

00:03:54 --> 00:04:02
is a key figure behind VLC and FFmpeg. Kieran is a longtime codec engineer, FFmpeg

00:04:01 --> 00:04:06
contributor, and the man behind the now infamous

00:04:05 --> 00:04:10
FFmpeg account on Twitter/X that I recommend

00:04:09 --> 00:04:13
everybody follow for the memes and for the

00:04:13 --> 00:04:20
unapologetic celebration of open source and great low-level software engineering.

00:04:20 --> 00:04:24
Let me also say that it's inspiring and humbling that

00:04:24 --> 00:04:28
so much of modern civilization rests on software built by

00:04:28 --> 00:04:32
people who are not chasing fame or money, but are

00:04:31 --> 00:04:34
obsessed with the craft of engineering.

00:04:34 --> 00:04:39
We live in a world where billions of people consume video every day without

00:04:38 --> 00:04:43
ever thinking about the invisible machinery underneath it. But that

00:04:42 --> 00:04:46
machinery matters. Open source infrastructure matters.

00:04:46 --> 00:04:51
It is one of the great examples of human beings quietly collaborating

00:04:50 --> 00:04:57
across borders to build something useful, durable, and elegant for the rest of us.

00:04:57 --> 00:05:02
And so this conversation is not just about codecs and

00:05:01 --> 00:05:06
media pipelines. It is also about the deeper spirit of

00:05:05 --> 00:05:11
engineering and generosity that makes projects like FFmpeg possible.

00:05:11 --> 00:05:15
Again, I can never say it enough. Thank you.

00:05:16 --> 00:05:21
This is the Lex Fridman Podcast. To support it, please check out our

00:05:20 --> 00:05:24
sponsors in the description, where you can also find links

00:05:23 --> 00:05:28
to contact me, ask questions, give feedback, and so on.

00:05:28 --> 00:05:35
And now, dear friends, here's Jean-Baptiste Kempf and Kieran Kunhya.

00:05:35 --> 00:05:40
So the legend goes VLC can open everything. What's the

00:05:39 --> 00:05:43
weirdest thing that you know that it can open?

00:05:43 --> 00:05:47
- You know, there is a ton of people who are using VLC to record VHS

00:05:46 --> 00:05:51
videos, right? Like, it's just like you plug it with a capture card and you

00:05:50 --> 00:05:53
can basically record VHS video.

00:05:52 --> 00:05:54
- Well, how does that work?

00:05:53 --> 00:05:58
- Basically, it's, you know, those type of capture card where you can put a Peritel

00:05:57 --> 00:06:03
in or- ... or RCA, and you put that, and actually VLC can play those type of cards,

00:06:02 --> 00:06:07
and there is a module which allows to control directly some of those

00:06:06 --> 00:06:11
VCR camcorders. We support DVD audios lately, right? We spent

00:06:10 --> 00:06:14
he summer working on DVD-Audio support, and

00:06:14 --> 00:06:18
like there is no, no one's making any DVD audio support. There is a custom

00:06:17 --> 00:06:19
encryption schemes.

00:06:19 --> 00:06:21
- What about Lucasfilm?

00:06:20 --> 00:06:24
- Oh, yeah, and there is of course all the weird codecs support, game codecs supported

00:06:23 --> 00:06:26
by FFmpeg.

00:06:25 --> 00:06:30
- The one Star Wars video game, the first ten- second opening sequence, someone has gone and

00:06:29 --> 00:06:34
implemented that and made sure that's bit exact on one disc that existed at

00:06:33 --> 00:06:36
one time of one little sequence in the game.

00:06:36 --> 00:06:41
- And then funnily, there was a... At one VideoLAN conference, we made a

00:06:40 --> 00:06:45
competition to make the weirdest and most horrible file ever

00:06:44 --> 00:06:46
... and see if VLC could play it.

00:06:46 --> 00:06:48
- What did it end up being? What's the file?

00:06:48 --> 00:06:53
- It was an MKV file made by Derek-

00:06:52 --> 00:06:57
... which each of the frame was changing resolution, aspect

00:06:56 --> 00:06:59
ratio- ... rotation and it was like-

00:06:59 --> 00:07:00
Did it work?

00:07:00 --> 00:07:03
- Yes. And there was another one where

00:07:03 --> 00:07:09
the whole video was actually animated subtitles, right? SSA, right? So-

00:07:08 --> 00:07:09
Yeah. I remember that, yeah

00:07:08 --> 00:07:11
- ... each, this one was-

00:07:10 --> 00:07:15
And so each frame was a black frame, but on top of that there was a,

00:07:14 --> 00:07:17
a subtitle that was animated for each frame.

00:07:16 --> 00:07:21
- There was a file that's a valid ZIP and a valid MP3 at the same time or something like that,

00:07:20 --> 00:07:21
so.

00:07:20 --> 00:07:23
- So yeah, we'd made a competition of stupid files.

00:07:23 --> 00:07:28
- And it worked. It opened all of the stupid files.

00:07:27 --> 00:07:28
- Yes.

00:07:27 --> 00:07:28
- By the way,

00:07:28 --> 00:07:33
For people who are not familiar, I am wearing a hat. Would it be fair to say this

00:07:32 --> 00:07:37
the best worst logo of all time, the cone?

00:07:36 --> 00:07:41
- Yeah, by far, right? The logo of VLC is so iconic, right?

00:07:40 --> 00:07:45
Like we are a team with a small number of people and the icon

00:07:44 --> 00:07:48
is known everywhere. I go to middle of nowhere in India or in

00:07:47 --> 00:07:52
China, people know the cone, right? And 25% of

00:07:51 --> 00:07:56
the website traffic that comes to our main website is

00:07:55 --> 00:08:00
cone player, right? So, so many people don't know VLC, right? They know the cone player.

00:07:59 --> 00:08:02
- That's the thing they Google for is cone player.

00:08:01 --> 00:08:06
- Yeah. They go on Google and they put cone player and they download VLC, right?

00:08:05 --> 00:08:10
So that's iconic. And once we tried to change it as a joke, right? We said

00:08:09 --> 00:08:12
it was going to be a type of uh,

00:08:12 --> 00:08:18
caterpillar construction and we said that during April 1st-

00:08:18 --> 00:08:22
... and we had around 10,000 emails saying, "No, don't change the logo," and so on, right?

00:08:21 --> 00:08:26
So it's so iconic, right? It's so distinctive, right? If you want to do a

00:08:25 --> 00:08:30
video player, you're going to put a play button on a TV, right? And that's a YouTube,

00:08:29 --> 00:08:34
YouTube logo, right? It's unoriginal. This one is orange, right?

00:08:33 --> 00:08:34
- Yeah.

00:08:33 --> 00:08:38
- It's very bright and it's weird.

00:08:37 --> 00:08:42
- And it's ridiculous and it's absurd and it's hilarious. It becomes meme and meme becomes

00:08:41 --> 00:08:42
culture. Yeah.

00:08:41 --> 00:08:46
- And you keep it and you know about it and you know that in 20 years, like you

00:08:45 --> 00:08:50
still have, going to have the cones and remember, oh yeah, that was a video player.

00:08:49 --> 00:08:54
- Yeah. And we'll talk about, you know, the mission of FFmpeg being

00:08:53 --> 00:08:58
a kinda the archival aspect of it. So you can think about 1,000 years from

00:08:57 --> 00:09:02
now we'll have all these videos that only VLC can open. Humans,

00:09:01 --> 00:09:06
human civilization has already destroyed itself multiple times and the

00:09:05 --> 00:09:10
only thing that will remain is this like, you know, the cockroaches will be

00:09:09 --> 00:09:14
crawling around and it'll be the VLC logo- ... with some of the archival

00:09:13 --> 00:09:18
footage that VLC can open. And the aliens will show up and they'll press

00:09:17 --> 00:09:19
play and they'll get to see it all 'cause-

00:09:18 --> 00:09:23
Well, really, really hope so, right? But there is also so many memes where people say, "Well, I'm sure I can put

00:09:22 --> 00:09:26
a pancake inside my DVD drive and VLC will play it." Like-

00:09:25 --> 00:09:26
Can they?

00:09:26 --> 00:09:28
- No, we tried. It doesn't. Um-

00:09:27 --> 00:09:28
Doesn't.

00:09:28 --> 00:09:32
- ... but we actually have a video of us trying that. Didn't work.

00:09:31 --> 00:09:35
- A codec for physical reality, I don't know what that would even look like.

00:09:34 --> 00:09:38
- There was a guy who did that, right? He printed a small cone, right?

00:09:38 --> 00:09:42
Like the ones we distribute as goodies and inside he put an

00:09:41 --> 00:09:47
RFID chip which was his way of playing a movie, right? And so he-

00:09:46 --> 00:09:51
... put this on a RFID player and when he put that it was playing like The

00:09:50 --> 00:09:55
Last Star Wars and so on. So instead of having like DVD boxes, he had like

00:09:54 --> 00:09:59
VLC cones all around and he plugged that and that was like physical objects.

00:09:59 --> 00:10:04
- So the thing that we're talking about is everything around video

00:10:03 --> 00:10:08
codecs, video encoding, video decoding, video streaming, video

00:10:07 --> 00:10:11
player client that I'm wearing on my head, the entire

00:10:10 --> 00:10:15
cosystem enabling free media. We'll talk about FFmpeg, we'll talk

00:10:14 --> 00:10:19
about VideoLAN, VLC and all the other incredible video

00:10:18 --> 00:10:25
technology that is used probably by billions of people. So JB,

00:10:25 --> 00:10:30
you're the lead developer behind the legendary VLC player.

00:10:29 --> 00:10:34
Kieran, amongst many other things, you're lead developer behind the legendary

00:10:33 --> 00:10:40
FFmpeg handle on Twitter. And both of you have spicy opinions I would say.

00:10:40 --> 00:10:45
So today we wanna talk about FFmpeg and VLC.

00:10:45 --> 00:10:49
For context for people who are not aware and I'm sure

00:10:49 --> 00:10:54
basically everybody listening to this have used these two

00:10:53 --> 00:10:58
technologies probably regularly without knowing it.

00:10:57 --> 00:11:02
So FFmpeg underlies basically most video on the internet

00:11:01 --> 00:11:05
including YouTube, Netflix, Chrome, Firefox, of course

00:11:05 --> 00:11:09
VLC and countless other video platforms. It

00:11:08 --> 00:11:13
is estimated that over 90% of video processing workflows online and

00:11:12 --> 00:11:23
offline involve FFmpeg. VLC has been downloaded at least 6.5 billion times. But

00:11:22 --> 00:11:27
likely that number, 'cause it's impossible to really count the number

00:11:26 --> 00:11:31
is much higher than that. Virtually any operating system

00:11:30 --> 00:11:35
supports virtually any media format.

00:11:35 --> 00:11:39
The limitation being it can't open pancakes. So,

00:11:39 --> 00:11:44
Can we just lay out some of the basics to help people

00:11:43 --> 00:11:48
understand what's involved in all of this? So when we press

00:11:47 --> 00:11:52
play on a video player like VLC, what happens? What--

00:11:52 --> 00:11:57
How does it go from the file or the stream to the

00:11:56 --> 00:12:00
pixels on the screen and the sound on the speaker? What are the big

00:11:59 --> 00:12:02
stages to be aware of?

00:12:01 --> 00:12:06
- So there are several stages, right? The first stage is to get from

00:12:05 --> 00:12:10
an address, right, which is the type of URL, to

00:12:09 --> 00:12:14
give you a byte of streams, right? So this would be, for example, HTTP,

00:12:14 --> 00:12:18
file, DVD, right? You give the path to the media, and it gives

00:12:17 --> 00:12:20
you a stream of data.

00:12:19 --> 00:12:24
- The stream needs to be cut up by what's known as the container, the demultiplexer or

00:12:23 --> 00:12:28
demux. We'll try and keep the jargon light throughout this, but it

00:12:27 --> 00:12:32
needs to go and start demarcating video and audio frames. So it just gets data from the

00:12:31 --> 00:12:36
operating system blocks at a time and needs to start cutting these frames up

00:12:35 --> 00:12:40
into compressed data. It then needs to start doing simple

00:12:39 --> 00:12:45
parsing of the video frames- ... mainly to figure out whether that codec is GPU

00:12:44 --> 00:12:49
decodable or needs to fall back to software. We're very sort

00:12:48 --> 00:12:53
of used to assuming the GPU will play all of these things. There'll be hardware

00:12:52 --> 00:12:56
acceleration. I think it's up to forty- five percent of files are not GPU

00:12:55 --> 00:13:00
decodable. So these need to be probed. They need to be detected. There can

00:12:59 --> 00:13:04
be variants of a given codec, some of which are decodable on the

00:13:03 --> 00:13:08
GPU. Different vendors of GPU might have different capabilities,

00:13:07 --> 00:13:12
so those need to be detected. So if it's GPU capable, you pass it through

00:13:11 --> 00:13:15
to the GPU black box. So now if there's a software fallback,

00:13:15 --> 00:13:20
that means in the beginning is to first do deentropy

00:13:19 --> 00:13:23
coding, so removing the mathematical coding of the bit stream. So this

00:13:22 --> 00:13:26
uses capabilities such as Huffman coding or arithmetic

00:13:25 --> 00:13:31
oding to actually decompress the mathematical layer of the bit stream.

00:13:30 --> 00:13:35
We then need to start reading the syntax elements for intra prediction. So intra

00:13:34 --> 00:13:39
prediction are like still images of the video, so your I-frames.

00:13:40 --> 00:13:44
So this works and operates in the spatial domain. So you do your intra prediction in spatial

00:13:44 --> 00:13:48
domain. You have a residual because your prediction isn't quite

00:13:47 --> 00:13:52
matching that of reality. So you've made a prediction, but then there's a little bit

00:13:51 --> 00:13:56
left, and that's what's known as the residual. This is stored in the frequency

00:13:55 --> 00:13:59
domain, and these are quantized to decompact their space.

00:13:59 --> 00:14:04
We then need to do the inverse transform to bring them back to the

00:14:03 --> 00:14:06
spatial domain and apply these residuals.

00:14:05 --> 00:14:11
- So a lot of the process of the decoding is this thing is compressed.

00:14:10 --> 00:14:15
And you have to predict the highest quality thing that's

00:14:14 --> 00:14:20
upposed to go there. I-frame- ... is the best representation you have spatially.

00:14:19 --> 00:14:23
And then there's a lot of temporal compression that can happen

00:14:23 --> 00:14:27
depending on the codec, and then you're predicting. You're predicting what

00:14:26 --> 00:14:30
he reality that was captured in this rawest form.

00:14:29 --> 00:14:34
- Yeah, because what people don't realize is that the compression on

00:14:33 --> 00:14:36
video and audio is

00:14:36 --> 00:14:41
one hundred times, right? Like, people don't realize how compressed we, we

00:14:40 --> 00:14:44
do, right? For audio, you move, you compress by, when you go from

00:14:44 --> 00:14:48
normal audio to MP3, you compress by ten times, right? When, when you

00:14:48 --> 00:14:52
move to video, you need one hundred times, two hundred times, right? So you need

00:14:51 --> 00:14:56
to remove all the details, but that you don't care about

00:14:56 --> 00:15:00
because all the compressions that we do, and that's very important, people forget about

00:14:59 --> 00:15:03
hat, is to be viewed by humans, right?

00:15:02 --> 00:15:07
So all the codecs, either for audio, mimic basically how your

00:15:06 --> 00:15:10
ear works, right? And a lot of things about, like, the

00:15:09 --> 00:15:14
response on the ear and same for your eyes, right? And so, for

00:15:14 --> 00:15:18
example, on video, we don't work on RGB, right? Everyone expects

00:15:18 --> 00:15:23
to work in RGB. We don't, right? We move to YUV, which is

00:15:22 --> 00:15:27
basically one is luminance, brightness, and the other are colors.

00:15:26 --> 00:15:31
And this matches your eyes, where inside your eyes you have the cones and the buttons, right?

00:15:30 --> 00:15:35
With some of them look on brightness and more on, on the other on colors, right? So

00:15:34 --> 00:15:39
we need to compress a lot, and so we need to degrade. But in order to

00:15:38 --> 00:15:43
degrade, we need to match the human perception, and this is why it's so

00:15:42 --> 00:15:46
difficult. And then we need to use the maximum power,

00:15:46 --> 00:15:50
mathematical power, very complex technologies. We move to the

00:15:49 --> 00:15:54
frequency domain, as Kieran said. We do a ton of

00:15:53 --> 00:15:59
dequantizing, in order to get the best compression, but it still looks good.

00:15:58 --> 00:16:03
- You're trying to compress in order to maximize the highest

00:16:02 --> 00:16:05
quality thing for human perception.

00:16:04 --> 00:16:09
- That is correct. And this is very important, right? Compression is not like

00:16:08 --> 00:16:13
a ZIP, right? A ZIP, you have data in, you get data out,

00:16:12 --> 00:16:17
right? And you try with all the ZIP compression to arrive with

00:16:17 --> 00:16:21
e limit. Here we are degrading the signal, right? And so we

00:16:20 --> 00:16:25
need to degrade both the audio and the video signal in the best way

00:16:24 --> 00:16:29
possible. And we can do that, but it involves, first,

00:16:28 --> 00:16:33
a lot of theoretical knowledge about how the eye works, but

00:16:32 --> 00:16:37
it, a lot of mathematical change, a lot of mathematical tricks,

00:16:36 --> 00:16:41
right? For example, when you move to RGB and you do go to

00:16:40 --> 00:16:44
YUV, for example, what we do very often is that

00:16:44 --> 00:16:48
we scale down the resolution of the color compared to the brightness.

00:16:48 --> 00:16:52
And most of the time, just this without compression, it

00:16:51 --> 00:16:56
divides the size by two, but most people don't see it,

00:16:55 --> 00:17:00
right? And so on and so on, right? And then you go

00:16:59 --> 00:17:04
to very complex mathematical change. So of course

00:17:04 --> 00:17:08
Fourier transforms, which de facto are not Fourier transforms, they are like

00:17:07 --> 00:17:12
discrete cosine transform, but that's the same idea. So frequency domain

00:17:11 --> 00:17:16
we split the video by blocks, right? So that's why when it's

00:17:15 --> 00:17:20
wrongly decoded, you see those blocks and badly encoded, you see those blocks,

00:17:19 --> 00:17:23
and so on, to arrive to compression states that are

00:17:23 --> 00:17:30
insanely high, right? And each generation of the codec is like thirty percent less-

00:17:29 --> 00:17:33
... for the same quality, right? And this requires amount of

00:17:32 --> 00:17:36
power of computational power that is huge.

00:17:35 --> 00:17:40
- No, no, but you should elaborate. It's thirty percent better, but an order of

00:17:39 --> 00:17:43
magnitude, perhaps, perhaps even two orders of magnitude more

00:17:42 --> 00:17:46
compression power. That's the big difference.

00:17:45 --> 00:17:47
- What do you mean by compression power?

00:17:47 --> 00:17:50
- Sorry, CPU power to achieve that level of compression.

00:17:49 --> 00:17:54
- Oh, yeah. So you have to be able to leverage the CPU and sometimes GPU, like

00:17:53 --> 00:17:57
you mentioned. And then we should mention that a lot of this

00:17:56 --> 00:18:02
programming is done at the lowest possible-

00:18:01 --> 00:18:06
... stack, whether it's C and of course, as the legendary—

00:18:05 --> 00:18:11
... Twitter handle re-emphasizes over and over, a lot of assembly.

00:18:10 --> 00:18:14
- So what happens globally is that you have an address, right? Which gives you

00:18:14 --> 00:18:19
with the operating system, a stream of bytes, a stream of data, right? And this is the first step.

00:18:18 --> 00:18:23
And the second step arises with demuxing, where you're going to separate audio,

00:18:22 --> 00:18:27
video, subtitle in type of different tracks. And then on each of those

00:18:26 --> 00:18:31
tracks, you're going to decompress them, decode them, either audio with an

00:18:30 --> 00:18:34
audio codec, video to video codec, and subtitle to subtitle codec.

00:18:34 --> 00:18:39
And once you've decompressed those type of things, you have raw images,

00:18:38 --> 00:18:43
raw, and then you're going to talk with your graphics card and your screen and

00:18:42 --> 00:18:47
isplay that. And same for the audio, you're going to talk to your audio card, which

00:18:46 --> 00:18:51
then is going to go in analog to your audio speakers.

00:18:50 --> 00:18:53
- And everything we've just said in the past couple of minutes,

00:18:53 --> 00:18:57
every sentence is someone's lifetime's work. There are books about-

00:18:56 --> 00:18:59
... every sentence. So the level of complexity

00:18:59 --> 00:19:04
in many cases is inordinate. You know, it's, it's... Every sentence

00:19:03 --> 00:19:07
has thousands of people working on this-

00:19:06 --> 00:19:11
... in industry as a whole, books written about

00:19:10 --> 00:19:15
it. So there's a lot of detail, there's a lot of subtleties, there's a

00:19:14 --> 00:19:21
lot of both academic and practical realities, both of which matter.

00:19:20 --> 00:19:25
- Uh, we mentioned codecs, but I don't think you mentioned containers.

00:19:24 --> 00:19:28
So what, what are the actual containers

00:19:28 --> 00:19:33
for some of the stuff we're talking about? So people are familiar with MP4,

00:19:33 --> 00:19:41
uh, MOV, MKV. So anyway, what are containers versus the thing that goes inside?

00:19:41 --> 00:19:46
- So the container is what we call also the muxer, right? When I say demuxing, it

00:19:45 --> 00:19:49
means decontainerizing, right? So actually, if you look,

00:19:49 --> 00:19:53
mux means multiplexer and demultiplexer, right?

00:19:53 --> 00:19:59
Mux and demux are those. And same, a codec is actually coder, decoder, right?

00:19:58 --> 00:20:03
Um, and so containers are this collection

00:20:02 --> 00:20:07
of multiple tracks, right? So it's a, what normal people call the file

00:20:06 --> 00:20:11
format, but it's a bit more, um, subtle than that.

00:20:10 --> 00:20:15
But the most known one, of course, is MP4, but when I started,

00:20:14 --> 00:20:18
it was AVI, right? AVI was the, the video format from-

00:20:17 --> 00:20:22
... from Microsoft, and MOV, M-O-V, which became

00:20:21 --> 00:20:26
MP4, was a format from Apple. In the open source community

00:20:25 --> 00:20:30
one of the person that is still active on VideoLAN is called Steve Lhomme and started,

00:20:29 --> 00:20:34
This Matroska format, which is, like, a bit more complex and

00:20:33 --> 00:20:39
more future-proof. And there are so many others.

00:20:38 --> 00:20:43
- So, I mean, there's a, it's a pretty common thing, and maybe it'll even happen in

00:20:42 --> 00:20:45
this conversation, that people confuse container

00:20:45 --> 00:20:50
and the codec, right? So confuse MP4 and H.264, for

00:20:49 --> 00:20:52
example. Is that a horrible violation?

00:20:51 --> 00:21:00
- No, it's not, because technically the name of H.264 is MPEG-4 Part 10. Because

00:20:59 --> 00:21:04
MPEG-4 is actually a meta specification which has

00:21:03 --> 00:21:08
everal things in it, right? There is the Part 2.

00:21:07 --> 00:21:12
so there is, like, audio codecs, right? AAC de facto is MP4 audio-

00:21:11 --> 00:21:16
... something. There are actually several video codecs, right, inside the

00:21:15 --> 00:21:20
MPEG-4 specification. One of them is MPEG-4 Part 10,

00:21:19 --> 00:21:24
called also AVC, called also H.264. Right? So

00:21:24 --> 00:21:29
it's completely the fault of the industry to make things difficult

00:21:28 --> 00:21:31
o understand. So that's very difficult so that people

00:21:31 --> 00:21:36
then don't understand why sometimes you talk about MPEG-4 Part 10,

00:21:35 --> 00:21:39
where you mean H.264, and why it's not MP4.

00:21:38 --> 00:21:43
- So you can technically shove in all kinds of different codecs inside

00:21:42 --> 00:21:45
containers and horribly so.

00:21:44 --> 00:21:49
- But broadly speaking, though, MP4 is understood to generally

00:21:48 --> 00:21:54
be H.264 plus AAC audio. 99% of the time that's that, and that,

00:21:55 --> 00:21:59
the rest are de minimis, the small effects, you know, edge effects really compared to that.

00:21:58 --> 00:22:02
So it's not the end of the world. There, there are people

00:22:02 --> 00:22:07
who do get annoyed by that. But also in reality, something like VLC, just to point out,

00:22:06 --> 00:22:11
the file may say .MP4, but it may be something completely different, and that's

00:22:10 --> 00:22:15
one of the challenges both FFmpeg and VLC have is the real world is a

00:22:14 --> 00:22:18
completely different place to a three- letter file format.

00:22:17 --> 00:22:22
- And this is very important to say, right? Like, for example, in VLC and in FFmpeg,

00:22:21 --> 00:22:26
we discard the file format, right? We look

00:22:25 --> 00:22:29
into the file to understand what's in it because so many

00:22:28 --> 00:22:33
people, like, they say, "Oh, it's a video, it should must be MP4," but technically it's

00:22:32 --> 00:22:37
an MOV or maybe it's a MKV, right? So we

00:22:36 --> 00:22:43
analyze in real time everything that we have, and we don't trust- ... the format.

00:22:42 --> 00:22:46
- So what information does the fact that it's .MP4 give you?

00:22:45 --> 00:22:50
- It helps, right? It gives you a hint, right? Just like, oh, it's

00:22:49 --> 00:22:54
finished by .MP4. I will start first by opening,

00:22:54 --> 00:22:58
probing it with the MP4 container demuxer

00:22:58 --> 00:23:02
to see, well, it should be that. But I don't trust it, and if I'm lost, I say, "Okay,

00:23:02 --> 00:23:07
maybe I'm going to try it." So it bumps the priority of the module.

00:23:06 --> 00:23:11
- So how do you get to... just to take a bit of a tangent there.

00:23:11 --> 00:23:16
You know, the dumb thing is if you try the MP4,

00:23:15 --> 00:23:18
but it turns out it's a different codec than you would have expected,

00:23:19 --> 00:23:22
Most players just break there.

00:23:21 --> 00:23:23
- Yes.

00:23:22 --> 00:23:27
- And so how do you not break? There's just philosophically, I'm sure

00:23:26 --> 00:23:31
there's a bunch of stumbling blocks along the way where it's

00:23:30 --> 00:23:35
easy to just break and stop, freak out. That's it. How does VLC not?

00:23:34 --> 00:23:39
- This is why VLC is popular. But the reason is because

00:23:38 --> 00:23:43
actually VLC was, is just a client of a streaming

00:23:42 --> 00:23:47
solution called VideoLAN from a very long time

00:23:46 --> 00:23:51
ago, from the late '90s. And when you're playing video

00:23:50 --> 00:23:55
which are on UDP, right, in network, they might be damaged, right?

00:23:54 --> 00:23:59
So you don't trust your inputs, and this is very important into the security is that you

00:23:58 --> 00:24:07
don't trust your inputs. So everything in VLC is prepared to work with broken files.

00:24:06 --> 00:24:11
And it's a philosophical idea from the beginning, and everything

00:24:10 --> 00:24:15
is engineered into that. And it's a culture, right? And so,

00:24:14 --> 00:24:19
for example... And VLC became very popular on that because a long time ago when people

00:24:18 --> 00:24:24
were pirating content which they do a lot less today-

00:24:23 --> 00:24:25
And none of us ever have-

00:24:24 --> 00:24:31
No, of course not. Um— ... the metadata to play some files like AVI is at,

00:24:30 --> 00:24:35
at the end of the file, right? And when you're downloading, you don't have that, right?

00:24:34 --> 00:24:39
So VLC was just like, "Hey, this file is broken, but I'm still going to try to

00:24:38 --> 00:24:41
interpret it," and this was very useful.

00:24:41 --> 00:24:45
- We hinted at the awesomeness of the various different stages.

00:24:45 --> 00:24:50
We hinted at the awesomeness of codecs, the depth and the richness and the complexity

00:24:49 --> 00:24:54
of everything involved there. What— Let's try to define

00:24:53 --> 00:24:58
what is a video codec? What's involved there? What does it mean to

00:24:57 --> 00:25:00
compress something? You already started to hint at it—

00:24:59 --> 00:25:02
... but can we elaborate a little bit more?

00:25:01 --> 00:25:06
- So there's a huge amount of redundancy in any video both

00:25:05 --> 00:25:10
spatial and temporal, and the point of any video codec is to remove

00:25:09 --> 00:25:14
this redundant data, use mathematical properties as part of this reduction

00:25:13 --> 00:25:18
process. So more often than not, using several orders of magnitude more

00:25:17 --> 00:25:22
compute to compress because that's more costly versus both costly

00:25:21 --> 00:25:24
both financially and in CPU resources—

00:25:23 --> 00:25:28
... versus the decompression. So it's asymmetric in that respect. Uh,

00:25:27 --> 00:25:32
often the case because compression is done once, but there could be lots of viewers of

00:25:31 --> 00:25:36
another file. So to take that information and compress it by

00:25:36 --> 00:25:41
100x, 200x, removing redundant information and

00:25:40 --> 00:25:45
using mathematical properties to make that small, but also have properties

00:25:44 --> 00:25:48
uch as error resilience. So as, as JB suggested,

00:25:48 --> 00:25:52
VLC in the beginning was, was used to play UDP network feeds, and UDP

00:25:51 --> 00:25:55
network feeds lose packets. And so some of the design goals of a

00:25:55 --> 00:25:58
codec is also to be recoverable.

00:25:58 --> 00:26:03
You need to actually be able to join a stream. It's not necessarily a file. You need to join,

00:26:03 --> 00:26:07
get on the decoding process, and start decoding.

00:26:06 --> 00:26:11
- And, and to give a more image to people

00:26:10 --> 00:26:15
who are not familiar, right? Like, when you're going to see any type of movie, right?

00:26:14 --> 00:26:19
You're going to see the camera is going to pan, right, and travel. And

00:26:18 --> 00:26:23
you realize that, for example, all the background is the same from, for, like,

00:26:22 --> 00:26:24
a minute, right? Or—

00:26:23 --> 00:26:28
... thirty seconds, right? So you can reuse the cloud that you see uh, on

00:26:27 --> 00:26:32
the background, you can reuse that from a frame to another, right?

00:26:31 --> 00:26:35
And so it's, gets the more, the more

00:26:35 --> 00:26:39
memory you have, the more power, the more comparisons you can make, right? And so

00:26:39 --> 00:26:44
the more compressed you can be. And most of the modern codecs are

00:26:43 --> 00:26:45
basically doing that.

00:26:44 --> 00:26:51
- So just to make it even more explicit. So what is video? Video is a

00:26:50 --> 00:26:54
bunch of pixels often RGB.

00:26:54 --> 00:26:59
You have three values, and you have a grid of pixels, and you have,

00:26:58 --> 00:27:02
let's say, twenty-four or thirty or sixty,

00:27:02 --> 00:27:06
frames a second, and you just have all these pixels

00:27:05 --> 00:27:09
repeating and showing different stuff-

00:27:08 --> 00:27:13
... thirty times a second. And so the question, the philosophical,

00:27:12 --> 00:27:17
the technical question is, how can I compress all of that,

00:27:17 --> 00:27:21
store all of that at 100x?

00:27:20 --> 00:27:22
- Yep. Or 1,000x, right?

00:27:22 --> 00:27:23
- 1,000x.

00:27:22 --> 00:27:25
- The target is 1,000x, right?

00:27:24 --> 00:27:33
- And the goal is when you say redundancy, what is redundant? Meaning stuff at best

00:27:32 --> 00:27:36
hat humans wouldn't notice if it was missing.

00:27:35 --> 00:27:40
- So for example, you have a picture of a cloud, right? And from the

00:27:39 --> 00:27:44
next frame, they're still going to be the same cloud, so it's redundant. You could just put it once and

00:27:43 --> 00:27:48
not do it, right? Or you have a black background behind me, for

00:27:47 --> 00:27:51
example. The black is the same on the whole picture, right? So you can say, "Well, you know, in

00:27:51 --> 00:27:55
this picture, take the pixels that you have on the top left and the one

00:27:55 --> 00:27:59
on the top right. I'm not going to give the value. I'm just going to tell you it's the same at the top

00:27:58 --> 00:28:03
left." And then you can say for frame one reuse

00:28:02 --> 00:28:07
something from the previous frame or the previous, previous frame, and so on and

00:28:06 --> 00:28:11
so on, right? So you could... Basically, it's

00:28:10 --> 00:28:15
unlimited, but then it's limited in terms of memory or in terms

00:28:14 --> 00:28:18
of compute power. Because, for example, if you need to compare pixels

00:28:17 --> 00:28:26
on two hundred frames in the past on 4K resolutions, it's a huge amount of compute.

00:28:26 --> 00:28:30
- And then when you're showing it, you have to do the decompress of all of that.

00:28:30 --> 00:28:34
So is it the codec, the, has the

00:28:33 --> 00:28:38
ncoding and the decoding is a coupled process that you're developing?

00:28:37 --> 00:28:42
- Yes, exactly, right. And those are two different

00:28:41 --> 00:28:46
rade-offs, right? Are you going to compress more? But then it might be

00:28:45 --> 00:28:50
more difficult to decode. Are you going to

00:28:49 --> 00:28:53
comp- to make it a codec that is more complex to encode and easier to

00:28:53 --> 00:28:57
decode? Are you going to make a codec that is easier to encode because you need to be

00:28:56 --> 00:29:01
fast, but then the, the client side, the, the player is going to spend more

00:29:00 --> 00:29:05
time? That's why you have so many different type of codecs, is that it's not

00:29:05 --> 00:29:09
always easy. And to make it even more complex, modern codecs

00:29:09 --> 00:29:13
like AV1, AV2, or VVC are actually not codecs. They are

00:29:12 --> 00:29:17
a collection of tools, right? There are multiple tools, multiple

00:29:16 --> 00:29:22
codecs in the same codec to, depending on the image, get the more compression.

00:29:21 --> 00:29:26
- So just to elaborate, codecs like AV1, VVC

00:29:26 --> 00:29:31
have a much wider, have a wide audience. It could be a screen share

00:29:30 --> 00:29:35
content, it could be video, it could be animation. All of these

00:29:34 --> 00:29:39
require different coding tools. So

00:29:38 --> 00:29:43
what happens these days is a collection of tools are put in and called

00:29:42 --> 00:29:46
AV1 and called AV2, called VVC to allow for different use

00:29:45 --> 00:29:50
cases. So you may be on Zoom and sharing your PowerPoint,

00:29:49 --> 00:29:54
and then you need to show the audience a video. That codec needs to

00:29:53 --> 00:29:59
start changing its tool set depending on the content to compress in a different way.

00:29:59 --> 00:30:04
- And like you said, there's a bunch of incredible engineers behind each part of

00:30:03 --> 00:30:07
that, each part of the tools that make up AV1, for example.

00:30:06 --> 00:30:11
Uh, so we've kind of danced around it. We talked about VLC,

00:30:10 --> 00:30:18
the logo, the hat. Let's talk about FFmpeg. What, what is FFmpeg exactly?

00:30:17 --> 00:30:26
- FFmpeg is basically the low-level libraries for codecs, so compressions

00:30:26 --> 00:30:31
and decompression, muxers and demuxers, and filters. It's—

00:30:30 --> 00:30:35
The core is this, and then you have several tools which allow you to create a

00:30:34 --> 00:30:38
type of pipeline to process any type of video files.

00:30:38 --> 00:30:42
And it's used as a library absolutely inside

00:30:41 --> 00:30:46
verything from VLC to Chrome to your smart TVs, to

00:30:46 --> 00:30:50
basically any video that you see online you usually use

00:30:49 --> 00:30:54
FFmpeg. And FFmpeg in it has all those

00:30:53 --> 00:30:58
type of tools, and sometimes depend on other libraries like

00:30:57 --> 00:31:06
x264, libvpx, and others, right? So it's really now the de facto tool to process

00:31:05 --> 00:31:07
images.

00:31:06 --> 00:31:11
- From a philosophical level, I think it's incredible that your home

00:31:10 --> 00:31:15
videos, your grandmother's home videos and trillion-dollar corporations

00:31:15 --> 00:31:20
effectively are on a level playing field using the same technology stack.

00:31:21 --> 00:31:25
It's— it wouldn't be a surprise, you know, these big companies just have three

00:31:24 --> 00:31:28
thousand-line FFmpeg commands.

00:31:27 --> 00:31:32
There are some that use the API, but there are some that just have long command lines.

00:31:31 --> 00:31:36
- So yeah, there's a bunch of tools, like literally command line tool,

00:31:35 --> 00:31:43
FFmpeg, of course, FFprobe. There's libraries, libavcodec, libavformat, libavfilter.

00:31:43 --> 00:31:48
But the FFmpeg on the command line—

00:31:47 --> 00:31:52
is, like, legendary because you can cut— Like, there's so many

00:31:51 --> 00:31:54
parameters. You can customize everything to hell.

00:31:53 --> 00:31:55
- It's a language. It's an actual language.

00:31:55 --> 00:31:58
- It's an actual— yeah, you could think of it as a programming language.

00:31:57 --> 00:32:02
- Yeah, of course, I'm sure. Because— so most of the people, they're going to take FFmpeg,

00:32:02 --> 00:32:07
file in, file out, and specify the format, right? But you can-- We've seen

00:32:07 --> 00:32:11
thousands of characters, and we've seen also, like, people, like, doing

00:32:11 --> 00:32:15
programming generation of command lines

00:32:14 --> 00:32:19
to make FFmpeg. There is a ton of people who are using AI to generate

00:32:18 --> 00:32:23
command lines for FFmpeg because you have no idea what it is. But you can do- specify so

00:32:22 --> 00:32:27
many filters right on the command line, right? So

00:32:26 --> 00:32:34
FFmpeg is this collection of toolbox for multimedia processing that everyone uses.

00:32:34 --> 00:32:39
And everyone that is watching your videos is also using it, right? You're on

00:32:38 --> 00:32:42
YouTube. Well, it's FFmpeg on the client side. Well, the your

00:32:42 --> 00:32:46
server side, on the server side. The client side is probably Chrome. Well, you're using

00:32:45 --> 00:32:47
FFmpeg also.

00:32:46 --> 00:32:51
And you're using OBS to record. Well, it's FFmpeg, right? You're using a ton

00:32:50 --> 00:32:55
of important, like, big box, professional boxes. Well, it's very

00:32:54 --> 00:32:58
possible that inside some part of FFmpeg is running.

00:32:57 --> 00:33:02
- I mean, there's like so many, just to give people an idea, like I use

00:33:01 --> 00:33:06
FFmpeg a lot on, on everything. Just trivial stuff like,

00:33:06 --> 00:33:10
Take a video, add an intro video and an outro

00:33:09 --> 00:33:14
video, and fade one into the other like what is it

00:33:13 --> 00:33:18
called? Dip to black, like where it dips and then shows

00:33:17 --> 00:33:22
the next video and does the same thing with audio. There's

00:33:21 --> 00:33:26
like a cross dissolve of the audio. It's quiet, it quiets the audio and

00:33:25 --> 00:33:30
makes it loud again. And then there's a bunch of stuff like

00:33:29 --> 00:33:34
showing the captions on screen card, like baking the

00:33:33 --> 00:33:36
captions in. You can customize the font.

00:33:36 --> 00:33:41
You can do all kinds of layering of audio and video. There's a

00:33:40 --> 00:33:45
million things and of course, all of that works

00:33:45 --> 00:33:50
like magically with basically any codec.

00:33:49 --> 00:33:53
Like anything you can shove in on the audio and the video side, it works.

00:33:53 --> 00:33:56
- But it's like if you look at, for example,

00:33:56 --> 00:34:00
you can do things that you would do with Adobe After Effects-

00:33:59 --> 00:34:04
... in command line on FFmpeg, right? It's, and it's very interesting because, for

00:34:03 --> 00:34:08
example, for imaging, there is not such tool.

00:34:07 --> 00:34:11
There is a few tools, but not with the breadth of FFmpeg.

00:34:10 --> 00:34:14
- So ImageMagick has a similar kind of-

00:34:13 --> 00:34:15
Yes, but you will not-

00:34:14 --> 00:34:15
... spirit, but it-

00:34:14 --> 00:34:19
... do some filters, complex filters. You don't have the equivalent of Photoshop-

00:34:18 --> 00:34:23
in command line, right? But for video, you have FFmpeg in command line.

00:34:22 --> 00:34:27
- Yeah. It's incredible. I mean, it's like an example of a thing when a

00:34:26 --> 00:34:30
bunch of great people get together and they get a vision, and they

00:34:29 --> 00:34:34
stick by that vision for many years, which is incredible.

00:34:33 --> 00:34:38
- And the vision behind, and the same for VLC and FFmpeg, is that

00:34:38 --> 00:34:44
we make everything that is very complex easy to use for the normal

00:34:44 --> 00:34:46
people, for everyone.

00:34:45 --> 00:34:50
Right? Our goal is to make something that is insanely complex technically

00:34:49 --> 00:34:54
and make it easy to use, right? And people, they use VLC, they

00:34:53 --> 00:34:58
drop a file. They don't realize how complex the file is, but they

00:34:57 --> 00:35:01
play it. Or, or people put any type of thing inside FFmpeg with

00:35:01 --> 00:35:05
complex filters, and it just works like magically, right? And people-

00:35:05 --> 00:35:08
And this is our mission, right? Make very complex things.

00:35:08 --> 00:35:12
- We wouldn't be here and you wouldn't be here if this

00:35:11 --> 00:35:16
required, you know, a traditional television studio setup.

00:35:16 --> 00:35:20
It's tools like FFmpeg that democratize this. The podcast and

00:35:19 --> 00:35:22
streaming revolution, the YouTube revolution-

00:35:22 --> 00:35:27
was caused. You know, FFmpeg was a big player in that because it

00:35:26 --> 00:35:32
democratized this technology that was once in the nineties, for example, you needed

00:35:32 --> 00:35:37
equipment that cost hundreds of thousands of dollars to do compression. It was the size of a car,

00:35:37 --> 00:35:42
and now everybody has that at almost an exact level playing field, and

00:35:41 --> 00:35:43
that's something that's so remarkable.

00:35:42 --> 00:35:47
- It gave voice to a lot of people. And just to clarify, we say you,

00:35:46 --> 00:35:50
you wouldn't be here, not the human, but the podcast.

00:35:49 --> 00:35:51
- The podcast. Oh, sorry. You as a... Sorry.

00:35:50 --> 00:35:55
- I would still... VLC did not have anything to do on a biological

00:35:55 --> 00:35:57
evel- ... at creating me as a human.

00:35:56 --> 00:36:01
- But, but it's like you realize also everything moved from text to images

00:36:00 --> 00:36:03
and images to video, right?

00:36:02 --> 00:36:06
Look at social networks. Video is everywhere. It's the most

00:36:05 --> 00:36:10
powerful medium there is, right? And when you see

00:36:09 --> 00:36:14
shorts and, and in Reels and in TikTok, right? It's

00:36:13 --> 00:36:18
amazingly powerful to give... Video is amazing for

00:36:17 --> 00:36:21
that, right? But the complexity is important.

00:36:20 --> 00:36:25
- This is what people don't realize. I mean, this is really it

00:36:24 --> 00:36:29
gave power to the individual all across the world. That's real

00:36:28 --> 00:36:33
freedom. And I think, I can't believe it, but we still haven't mentioned the

00:36:32 --> 00:36:36
actual obvious thing for people who are not familiar, which

00:36:35 --> 00:36:40
it's open source, and there's a open source

00:36:39 --> 00:36:44
community of users and developers behind it. So

00:36:43 --> 00:36:48
it's really, it's a movement. So, like, we'll talk a bunch in a

00:36:47 --> 00:36:52
bunch of different ways about the community behind it. But can you speak to the open

00:36:51 --> 00:36:58
source element? So when we say what is FFmpeg, it's an open source project.

00:36:57 --> 00:37:02
- Yeah. So FFmpeg, VLC, x264, VideoLAN, everything

00:37:01 --> 00:37:05
we do is fully open source. And for the people who don't understand how open

00:37:05 --> 00:37:09
source is, my usual analogy is about a chocolate cheesecake, right? Um,

00:37:09 --> 00:37:13
usually for you, when you want to buy your cheesecake, you go to a bakery, they give you the

00:37:12 --> 00:37:17
cheesecake. The other one way of having a cheesecake is have your

00:37:16 --> 00:37:21
grandma give you a recipe of how to make that. When we do open source,

00:37:20 --> 00:37:25
we give you the chocolate cake, and we give you the recipe to

00:37:24 --> 00:37:29
actually remake the same cake, but at the same time tell you how

00:37:28 --> 00:37:33
to build the oven and also how you're allowed to modify

00:37:32 --> 00:37:36
the recipe and resell it to someone else.

00:37:35 --> 00:37:40
And this is because software is just a very long recipe of small

00:37:39 --> 00:37:43
instruction. Computers are not very clever. They go very, very

00:37:43 --> 00:37:47
fast. So a normal program has tens of billions of instructions

00:37:46 --> 00:37:50
instead of the tens when you have your chocolate recipe. So

00:37:50 --> 00:37:55
a lot of the software industry was about selling software, like where you

00:37:54 --> 00:37:59
just have like the final cheesecake. In open source, we

00:37:58 --> 00:38:03
give you everything, and that managed to get a

00:38:02 --> 00:38:07
lot of people work together, right? Because then you decide that you're going to

00:38:06 --> 00:38:11
make the best program, the best recipe for video, and you create

00:38:10 --> 00:38:15
communities. In FFmpeg, since the beginning of FFmpeg, probably

00:38:15 --> 00:38:18
two thousand to three thousand-

00:38:17 --> 00:38:18
In the thousands, yeah

00:38:17 --> 00:38:22
- ... people have contributed from the beginning, right? And then it's exactly like the

00:38:21 --> 00:38:25
Linux kernel, right? The Linux kernel has probably ten thousand people

00:38:24 --> 00:38:29
contributing everywhere, and they get together, well,

00:38:28 --> 00:38:33
mostly online, right? So they virtually get together to create the

00:38:32 --> 00:38:38
best tool for something. And on FFmpeg and VLC, it's just like,

00:38:38 --> 00:38:43
well, this codec doesn't work, so I'm going to work on the codec, and I'm going

00:38:42 --> 00:38:47
to add the support for this file inside FFmpeg, so it will be

00:38:46 --> 00:38:51
neficial to everyone. Because again, we work for the greater good. We work for

00:38:51 --> 00:38:55
everyone, and that is what open source is.

00:38:54 --> 00:38:58
- And we should mention, depending on the licensing,

00:38:57 --> 00:39:04
You could probably build a billion-dollar, maybe even a trillion-dollar company

00:39:04 --> 00:39:08
around basic... as a wrapper to...

00:39:07 --> 00:39:10
- Well, yes- ... people do.

00:39:09 --> 00:39:14
People do, right? There was a lot of problems with mostly,

00:39:13 --> 00:39:18
Cloud providers who are basically running some open source tools,

00:39:17 --> 00:39:22
In the cloud and just give you the API to

00:39:21 --> 00:39:25
access to that. And there was a lot of um,

00:39:25 --> 00:39:30
databases like Mongo or Elastic who changed their license in order

00:39:29 --> 00:39:32
to avoid those type of scenarios.

00:39:31 --> 00:39:36
- This is a question we get a lot in FFmpeg is, "Why don't you do that?"

00:39:35 --> 00:39:41
And you can't. We have, we have thousands of contributors, some of whom aren't even alive anymore.

00:39:40 --> 00:39:45
It would need all of their agreement to do that, and JB will go maybe a bit later

00:39:44 --> 00:39:49
and talk about how challenging that process was in VLC to do the re-licensing.

00:39:49 --> 00:39:54
- The license is a social contract in terms of Rousseau de

00:39:53 --> 00:39:58
facto of the community. The community does

00:39:57 --> 00:40:02
not agree on much beside the license. People go

00:40:01 --> 00:40:05
around, discuss around because of the license, and that

00:40:05 --> 00:40:10
also allow those license fork, right? Sometimes the community splits, but

00:40:09 --> 00:40:12
it's possible because of the license and to merge back.

00:40:12 --> 00:40:16
And we've seen that so many times, right? GCC and GC,

00:40:15 --> 00:40:20
And EGCS in the past. We have seen, for example, all the web

00:40:19 --> 00:40:24
rowsers, right? They started as web, like KHTML, which becomes WebKit and

00:40:23 --> 00:40:27
then which becomes Blink, right? So open source

00:40:26 --> 00:40:31
license is like the core of the community

00:40:30 --> 00:40:38
and people are coming from all around the world, very different type of religion,

00:40:37 --> 00:40:41
Political borders. They work

00:40:41 --> 00:40:46
in the same way on a project to solve a specific problem,

00:40:45 --> 00:40:50
and the specific problem we're working on is to make multimedia easy for everyone.

00:40:50 --> 00:40:54
- Uh, looking it up on Perplexity here, looking at the different open source licenses.

00:40:54 --> 00:40:58
Most major open source licenses fall into two buckets:

00:40:58 --> 00:41:03
permissive, very few conditions, and copyleft, share-alike

00:41:02 --> 00:41:07
requirements for derivatives. Below is a brief practical summary of the

00:41:06 --> 00:41:20
main ones you'll see in the wild. MIT license, BSD, ISC, Apache, GNU GPL, GNU AGPL.

00:41:20 --> 00:41:24
Where's LGPL? Yeah, LGPL. Let's see.

00:41:23 --> 00:41:28
There's the Mozilla Public License. There's Eclipse Public License. It

00:41:27 --> 00:41:32
goes on. There's a lot of variety. I mean, I think the really popular

00:41:31 --> 00:41:35
ones is MIT, GPL, LGPL-

00:41:34 --> 00:41:37
Yeah. And BSD. BSD

00:41:36 --> 00:41:39
- ... and BSD, Apache. Sometimes you'll see-

00:41:38 --> 00:41:39
Apache as well

00:41:38 --> 00:41:43
- ... Apache. Unlicense, that's an option. Attempts to dedicate code to the public domain with a fallback

00:41:42 --> 00:41:44
permissive license.

00:41:43 --> 00:41:48
- There are many licenses for many different things. What people don't understand

00:41:47 --> 00:41:52
that public domain is something that doesn't exist worldwide, right?

00:41:51 --> 00:41:55
So it's all the open source licensing

00:41:55 --> 00:42:00
use the copyright law, right, the international copyright law, in order

00:41:59 --> 00:42:04
to give rights on how you use the software or how you

00:42:03 --> 00:42:07
modify. It's de facto a copyright license

00:42:06 --> 00:42:11
contract that you give to the end user or to the developer. And

00:42:10 --> 00:42:15
so you have like the first one, which are basically very permissive, MIT, BSD.

00:42:14 --> 00:42:19
You give the code and basically you do whatever you want, right?

00:42:19 --> 00:42:24
You take it, you want, you modify, you do what you want. And this

00:42:23 --> 00:42:29
popular for JavaScript and the type of BSD operating system.

00:42:29 --> 00:42:34
- So some of them, one of the parameters is whether they require attribution,

00:42:33 --> 00:42:36
meaning if you use the code, you have to say-

00:42:35 --> 00:42:40
Yes. So in those types of permissive licenses, some you need to say if you

00:42:39 --> 00:42:44
se it, which is called attribution, and some you don't. And then there is

00:42:43 --> 00:42:47
the other part of license which are copyleft,

00:42:46 --> 00:42:51
where you need to give back to the community your

00:42:50 --> 00:42:54
modifications and with different strings attached.

00:42:53 --> 00:42:58
some weak copyleft license, like the Mozilla Public

00:42:57 --> 00:43:02
License, to some which are a bit stronger like a

00:43:01 --> 00:43:06
GPL, or even very strong like AGPL. So all of

00:43:05 --> 00:43:10
those are different types of licensing that depends on what

00:43:09 --> 00:43:13
your goals are and how you want to structure your community, which is why I spoke about

00:43:12 --> 00:43:16
social contract, because this is very important to understand.

00:43:16 --> 00:43:25
FFmpeg and VLC are mostly GPL or LGPL. The Linux kernel is GPL

00:43:24 --> 00:43:32
but Android is Apache. A ton of JavaScript frameworks that are using are mostly MIT.

00:43:32 --> 00:43:39
All the BSD kernels, OpenBSD, NetBSD are of course BSD. And so it's

00:43:39 --> 00:43:45
philosophical change on how you want people to contribute back- ... basically.

00:43:44 --> 00:43:52
- So I think you talked about that, you've moved at one point from GPL to

00:43:52 --> 00:43:56
LGPL on certain parts of the project. What... Can you describe the difference

00:43:55 --> 00:44:00
between the two, and what does it take to move to, I guess, a more permissive...

00:44:00 --> 00:44:04
So that direction is more permissive. LGPL is more permissive than GPL.

00:44:04 --> 00:44:08
- Yeah. So you have to realize that you can always go from

00:44:07 --> 00:44:12
ore permissive to less permissive, right? Because of course,

00:44:12 --> 00:44:17
those licenses are basically statements, and so if you restrict,

00:44:16 --> 00:44:21
you can always restrict more, right? So in a GPL project, you can take

00:44:20 --> 00:44:25
MIT code, but you cannot do the opposite, right? Because they are more

00:44:24 --> 00:44:30
constrained to match. Indeed, in fact, I changed the core

00:44:29 --> 00:44:38
of libVLC, which is the engine of VLC- ... from GPL to LGPL.

00:44:37 --> 00:44:42
And there were two reasons to do that. The first one is that so people can

00:44:41 --> 00:44:46
use the VLC engine, libVLC, into

00:44:45 --> 00:44:49
third-party applications. So a lot of applications which are playing video

00:44:49 --> 00:44:53
n your phone or on your tablet are actually VLC engine in it-

00:44:52 --> 00:44:57
... which is calling FFmpeg in it. Um, so that was

00:44:57 --> 00:45:02
one of the ways to create one of the companies I created, which is doing consulting

00:45:01 --> 00:45:06
and integration of those types of applications where you integrate VLC

00:45:05 --> 00:45:10
into third-party solutions like inside game engines or

00:45:09 --> 00:45:14
stuff like that. With GPL, you couldn't do that because that means you needed to open source

00:45:13 --> 00:45:18
verything, and those are for a lot of, like, commercial companies who don't want

00:45:17 --> 00:45:18
hat.

00:45:18 --> 00:45:23
- So you can create a company with LGPL, you can create a company around it.

00:45:22 --> 00:45:23
- Yes.

00:45:22 --> 00:45:25
- You can do a commercial thing. You don't have to open source it.

00:45:24 --> 00:45:26
So that's a big, big leap.

00:45:25 --> 00:45:27
- So you could play video in your game.

00:45:27 --> 00:45:28
- Yes.

00:45:27 --> 00:45:33
- The problem is I'm a game developer, and I want to play some videos-

00:45:32 --> 00:45:36
... and I don't want to be forced to open source the entire game just to play those videos.

00:45:36 --> 00:45:41
So that's where the consulting business, the libVLC LGPL-

00:45:40 --> 00:45:44
... allows you to do that. The LGPL, the library GPL as it used to be known,

00:45:43 --> 00:45:45
allows you to do that.

00:45:44 --> 00:45:49
- And FFmpeg is exactly the same. It force... LGPL

00:45:48 --> 00:45:53
forces you to give back what you change on this component, this-

00:45:52 --> 00:45:56
... library, which is why it's library GPL.

00:45:55 --> 00:46:00
And so you can use FFmpeg as LGPL into, like,

00:45:59 --> 00:46:03
any type of application, even non-open source, but you need to give back the

00:46:03 --> 00:46:07
modification you did on FFmpeg. Same on libVLC.

00:46:06 --> 00:46:10
- Is it limiting from an open source perspective to go GPL?

00:46:10 --> 00:46:18
Because if you-- if your library, if your code is GPL, it means you're not...

00:46:17 --> 00:46:23
You're basically discouraging companies from building a business-

00:46:22 --> 00:46:23
Yes

00:46:22 --> 00:46:24
- ... around it, right? Is that, is that fair to say?

00:46:23 --> 00:46:28
- It depends on the company, but the company whose business model requires

00:46:27 --> 00:46:32
the source, the application to be closed source, yes, it's limited.

00:46:32 --> 00:46:36
So that's why, for example, I moved to LGPL. The second reason is a,

00:46:35 --> 00:46:40
a bit more obscure, is that the terms and conditions of the,

00:46:39 --> 00:46:44
App Store, the Apple App Store for iOS makes it very

00:46:43 --> 00:46:48
complex to have GPL application on it, while it's easier to have

00:46:47 --> 00:46:52
LGPL applications on it. So VLC on Windows and on Mac,

00:46:52 --> 00:46:56
And on Linux is GPL. The core is LGPL.

00:46:55 --> 00:47:00
But on iOS the iPhone version and the Apple TV

00:46:59 --> 00:47:03
version is a type of different license called the MPL.

00:47:03 --> 00:47:08
And yes, I went and changed the license and it was a long story.

00:47:08 --> 00:47:12
- Yeah. So I think basically to change the license you have to contact all the

00:47:12 --> 00:47:13
contributors.

00:47:12 --> 00:47:17
- Yes. It's very important to understand that open source

00:47:16 --> 00:47:20
projects are what we call in the US copyright law

00:47:20 --> 00:47:24
joint work, or in civil law collective

00:47:23 --> 00:47:28
works or collaborative works, is that you work all

00:47:27 --> 00:47:32
together in terms of the same goal, and then you create one software, which is one release.

00:47:32 --> 00:47:36
But the copyright is kept by all the individuals.

00:47:36 --> 00:47:41
Some open source projects don't do that. They force copyright assignment, but this is not what we do.

00:47:40 --> 00:47:45
We're communities. So everyone has basically copyright on what

00:47:44 --> 00:47:49
hey changed. And this copyright stays even

00:47:48 --> 00:47:52
if at the end your contribution was deleted because the new

00:47:51 --> 00:47:56
contribution was based on your previous one, right? So if you want to properly

00:47:55 --> 00:48:00
re-license, you need to find all the contributors. And at that time, I

00:47:59 --> 00:48:03
had to contact more than three hundred and fifty people. And

00:48:03 --> 00:48:07
sometimes, well, they're just an email, right? So it's... you need to actually track down.

00:48:07 --> 00:48:11
I actually, like, travel to some place to go someone that I

00:48:10 --> 00:48:15
was like, sorry, that I'd found online to see a-- to

00:48:14 --> 00:48:19
go to their job and say, "Well, you licensed that. Can you-- do you

00:48:18 --> 00:48:23
want to change from GPL to LGPL?" Most of the times they don't even care. They wanted to

00:48:22 --> 00:48:27
help VLC. But also it brought me to very complex situation. I

00:48:26 --> 00:48:31
arrived to the work of a person who was a factory worker.

00:48:30 --> 00:48:35
Um, and I said, "Well, I need to you to sign that,"

00:48:35 --> 00:48:41
because it was his son who died who actually wrote the code, right?

00:48:40 --> 00:48:44
So I had to explain all those type of open source meaning,

00:48:43 --> 00:48:48
and no, I was not a company trying to rip out the two line or five

00:48:47 --> 00:48:50
line that that guy did-

00:48:49 --> 00:48:54
... but was useful, and the whole community agreed on that, and he had

00:48:53 --> 00:48:58
no idea I was a factory worker. This com-- And I was a lot younger, right? Like

00:48:57 --> 00:49:02
it was fourteen years ago, and like, like I was

00:49:01 --> 00:49:06
almost in tears, right? It's very difficult, right? We are talking about lives of people and

00:49:05 --> 00:49:09
he explaining, and we went talk about the photo of this guy, right?

00:49:09 --> 00:49:13
So it's important to do it right and to do it correctly.

00:49:13 --> 00:49:19
But yes, that means tracking down everything because every contribution works.

00:49:18 --> 00:49:23
There are some project who don't respect that, and we do re-licensing a bit, like,

00:49:22 --> 00:49:24
aggressively.

00:49:23 --> 00:49:28
But as I said, it destroyed the whole heart of the community because it's-- we

00:49:27 --> 00:49:31
only agree on the, on the license, so that's important.

00:49:31 --> 00:49:36
- I would emphasize the community is such a wide-ranging group of people.

00:49:35 --> 00:49:41
There's people in the Syrian war zone with electricity part-time. There's,

00:49:41 --> 00:49:45
there's all people from all walks of life-

00:49:44 --> 00:49:51
... rich, poor, young, old. So it's quite remarkable to get,

00:49:50 --> 00:49:55
you know, a group of people aligned on something. And that's an

00:49:54 --> 00:49:56
achievement in itself.

00:49:55 --> 00:50:00
- Yeah. It's incredible. And a lot of them are introverts, so you

00:50:00 --> 00:50:04
coming to find them and getting them and getting them to answer an email might

00:50:03 --> 00:50:06
be quite difficult.

00:50:05 --> 00:50:10
- Most of us are introverts, right? You need to be more precise. You have

00:50:09 --> 00:50:13
xtremely introverts, extremely, extremely introverts and introverts, right?

00:50:12 --> 00:50:17
It's just like a whole spectrum of different people. It doesn't matter. The

00:50:16 --> 00:50:20
important is, is your code good?

00:50:19 --> 00:50:24
Is your code great? Is your technology great? We care about excellent code.

00:50:23 --> 00:50:28
We don't care who you are. Sorry, it's just like we have no idea to check.

00:50:28 --> 00:50:32
We cannot check, right? Like, maybe you're a dog. I don't care, right?

00:50:32 --> 00:50:36
I don't care where you come from. I need to look at your code. And this is

00:50:35 --> 00:50:40
important because people don't understand that, and they come to the community and send them some

00:50:39 --> 00:50:44
patches, and they get rejected, and they don't like that because,

00:50:44 --> 00:50:49
I mean, you're just like, "Sorry, it's not up to our standards." "Oh, yeah, but I'm

00:50:48 --> 00:50:53
engineer at this very large company in Italy, in Germany,

00:50:52 --> 00:50:57
in the US." We don't care. We care about the quality of your code

00:50:56 --> 00:51:01
because this is what defines our community, and which means that we have a

00:51:00 --> 00:51:05
lot of people who contribute who are some very different backgrounds and,

00:51:04 --> 00:51:08
and very introverts, sure. But that's okay, right?

00:51:07 --> 00:51:12
- So one of the legends of the community is of course,

00:51:11 --> 00:51:16
Linus Torvalds, who created Linux and is

00:51:15 --> 00:51:20
a longtime maintainer of the Linux kernel. As the

00:51:19 --> 00:51:24
legend goes, he can be pretty harsh on this meritocratic process of

00:51:23 --> 00:51:28
reviewing the code and saying it's not good enough. Can you just speak

00:51:27 --> 00:51:30
to the legend of Linus Torvalds?

00:51:29 --> 00:51:34
- Linus is one of a kind, right? And

00:51:33 --> 00:51:38
I would even go and say that what he did on Git is more interesting than what he

00:51:37 --> 00:51:39
did on the Linux kernel.

00:51:39 --> 00:51:44
He's very harsh, but what people don't see is usually when he's

00:51:43 --> 00:51:48
harsh to, it's people who are maintainer of part of the

00:51:47 --> 00:51:52
kernel, right? So they know him, right? So he's not very harsh like

00:51:51 --> 00:51:55
that to everyone. The thing is, what he created in his room

00:51:55 --> 00:51:59
is basically powering every server online, right? Even

00:51:58 --> 00:52:03
at Microsoft cloud called Azure, I'm quite sure seventy, eighty

00:52:02 --> 00:52:07
percent of the servers are running Linux. All your Android phones are running

00:52:06 --> 00:52:12
Linux. What he did with the power of open source, sure,

00:52:12 --> 00:52:16
is amazing. And yes, the quality of the Linux

00:52:15 --> 00:52:20
kernel is very high, and yes, it's difficult, but

00:52:20 --> 00:52:25
we cannot compromise on that. We cannot compromise on quality

00:52:24 --> 00:52:29
because in the end, and you have to understand that, is the core

00:52:28 --> 00:52:35
community of VLC is five people. The core community of FFmpeg is ten to fifteen,

00:52:34 --> 00:52:38
and we are the ones who are going to maintain your code, right?

00:52:38 --> 00:52:42
Because one thousand contributors in the timeline and just ten staying, it's

00:52:42 --> 00:52:47
one percent chance that someone comes and stays. One percent.

00:52:46 --> 00:52:51
So you will have change of job, change of wives, you have children, you

00:52:50 --> 00:52:55
have accident in life. You're going to change jobs, whatever. You're not going to

00:52:54 --> 00:53:00
come back. It's most likely. So we are the one going to maintain your code.

00:53:00 --> 00:53:05
It needs to be maintainable. It needs to be excellent.

00:53:05 --> 00:53:10
And yes, sometimes that means that you need to rework your work because it was good, but

00:53:09 --> 00:53:13
it's not excellent, and we need excellence because we are very

00:53:12 --> 00:53:16
few to maintain something that is critical for the whole.

00:53:15 --> 00:53:20
- But we should also mention that there is some spiciness, some harshness to the

00:53:19 --> 00:53:26
language that's sometimes used when you're keeping this high bar of excellence.

00:53:25 --> 00:53:28
Is there something to say to that?

00:53:27 --> 00:53:32
- It's, it's true, right? It's also the fact that, for example, what we're doing

00:53:31 --> 00:53:36
is low level. It's extremely technical. You get into this

00:53:35 --> 00:53:39
community. The tone gets very like

00:53:39 --> 00:53:44
a type of-- It's a subculture, right? So people who arrive from the external are

00:53:43 --> 00:53:48
basically not known to the subculture. Most of those people

00:53:47 --> 00:53:52
around FFmpeg and VLC, we do VideoLAN DevDays, VDD every,

00:53:51 --> 00:53:55
every year. They are so fun in real life, and they love it.

00:53:54 --> 00:53:59
But it's true that you're online and sometimes, like, the tone, you

00:53:58 --> 00:54:01
don't realize how it is. But that's okay.

00:54:01 --> 00:54:05
- It's a culture. I mean, you get this in the gaming culture. There's pretty harsh,

00:54:04 --> 00:54:09
intense, the way people communicate, and it's-- everyone

00:54:08 --> 00:54:12
understands that the way you show love and respect just looks different in

00:54:11 --> 00:54:16
different communities. Sometimes people... It depends. If it's a

00:54:15 --> 00:54:21
book club, usually people are going to be much sweeter. If it's an open source

00:54:21 --> 00:54:25
project that's very high stakes and used by millions of people-

00:54:24 --> 00:54:29
But it's very not often insults that you see, for example,

00:54:28 --> 00:54:33
in the gaming, right? And so Linus' tone is a bit unusual

00:54:32 --> 00:54:37
even for the open source community. It's more like it's more harsh on the results,

00:54:36 --> 00:54:41
saying, "No, this is not good. This is crap." Those type of things that you will see.

00:54:40 --> 00:54:43
- Try not to make it about the person, make it about the code.

00:54:42 --> 00:54:43
- Yes.

00:54:43 --> 00:54:48
- It's very, very matter of fact, and I think you've got to look at it in terms of, you know,

00:54:47 --> 00:54:52
the famous FFmpeg is developed almost entirely by volunteers, and that's true, and you've got

00:54:51 --> 00:54:55
o imagine someone's done a hard day's work at their day job. They come home.

00:54:56 --> 00:55:00
You know, terseness might be a thing, you know, it... And that's not something to take

00:54:59 --> 00:55:01
personally.

00:55:01 --> 00:55:06
- You're tired, you're busy, but you still care about this open source stuff.

00:55:05 --> 00:55:10
But you may not be able to explain and handhold someone on every subtle detail.

00:55:10 --> 00:55:12
- And also you have to

00:55:12 --> 00:55:17
realize that most people don't speak English as native language.

00:55:16 --> 00:55:21
And this is especially for open source projects like

00:55:20 --> 00:55:26
FFmpeg and VLC, which are mostly centered out of Europe. Sometimes like

00:55:26 --> 00:55:31
people who are from the US or, or just like are very

00:55:30 --> 00:55:35
not happy about the tone, but most of the time it's also like they don't know better, right?

00:55:34 --> 00:55:38
It's difficult. The language is-- English is a difficult language. There is so many

00:55:37 --> 00:55:41
subtleties and tone and so on that you don't have, right?

00:55:40 --> 00:55:45
So often it's also difficult in those type of community about like

00:55:44 --> 00:55:46
different cultures and languages.

00:55:46 --> 00:55:55
- So as the legend goes, JB, you repeatedly turned down millions of dollars to keep

00:55:54 --> 00:55:59
VLC open source free for everyone without ads.

00:56:00 --> 00:56:04
So take me through the reasoning behind that decision of

00:56:03 --> 00:56:07
leaving millions of dollars on the table.

00:56:06 --> 00:56:10
- Yeah, that's like almost a meme, right, on Reddit or-

00:56:09 --> 00:56:11
There literally is a meme on Reddit.

00:56:11 --> 00:56:14
- 9GAG and yeah, yeah. See, there's-

00:56:14 --> 00:56:21
You looking like a wizard in the, in the VLC hat on Reddit. This

00:56:20 --> 00:56:25
JB, the creator of VLC media player. He refused

00:56:24 --> 00:56:28
tens of millions of dollars in order to keep VLC ads free.

00:56:28 --> 00:56:34
Thanks, Jean-Baptiste Kempf. You can even summon him on Reddit.

00:56:33 --> 00:56:38
- Yeah. And usually if you see, right, it's usually like people tag me, right? And,

00:56:37 --> 00:56:40
and then there is me, and then like I say, "Good morning."

00:56:40 --> 00:56:44
I got twenty-four K upvotes, which is great, right? My karma on Reddit is amazing,

00:56:44 --> 00:56:49
at least on that account. So the question is,

00:56:49 --> 00:56:54
needs to be answered first, what is the story about VLC, right? Because

00:56:54 --> 00:56:57
yes, this is true, I refuse

00:56:57 --> 00:57:01
dozens of millions of dollars, yes, several times. Yes, I could be a

00:57:00 --> 00:57:04
multimillionaire and be somewhere on the beach. Um,

00:57:03 --> 00:57:08
but I did not do it because I thought it was not

00:57:07 --> 00:57:12
moral and it was not the right thing to do. And this is very important for

00:57:11 --> 00:57:15
myself, is to be like, I work for the greater

00:57:14 --> 00:57:19
good, I work for people, and I don't want-- It's not just by myself.

00:57:18 --> 00:57:23
But the reason is also because I did not feel that I'm

00:57:22 --> 00:57:27
completely legitimate to do that, and let me explain you why. VLC

00:57:26 --> 00:57:31
story is a very weird story. In France,

00:57:30 --> 00:57:35
we have university and we have a type of top colleges

00:57:34 --> 00:57:39
and those top of excellency schools are engineering schools,

00:57:38 --> 00:57:43
business schools, and basically lawyers and medical,

00:57:42 --> 00:57:47
right? But they're outside of university, and in order to enter those,

00:57:46 --> 00:57:51
you spend two years working like crazy math, physics to

00:57:50 --> 00:57:53
enter those best engineering schools.

00:57:53 --> 00:57:58
One of the schools is called the École Centrale Paris. It has changed name since, but it was

00:57:57 --> 00:58:02
called the École Centrale Paris. And because it was Centrale, they

00:58:01 --> 00:58:06
had to move it because it was too small after the World War II and, and they moved

00:58:05 --> 00:58:09
it, they wanted to move it to the center of France in a place called Clermont-Ferrand.

00:58:09 --> 00:58:13
And the alumni decided that this was not okay, right? It is

00:58:12 --> 00:58:17
a, the school that Eiffel, right, the, the one who did the Eiffel

00:58:16 --> 00:58:21
Tower, attended to, right? So they said, "No, no, we are amazing, great school. We cannot

00:58:20 --> 00:58:25
do that." And so they bought a piece of land south of Paris very near

00:58:24 --> 00:58:32
Paris. And it was a campus managed by a nonprofit of the alumni, okay?

00:58:32 --> 00:58:37
Because of that, everything on the campus was managed by students. The

00:58:36 --> 00:58:45
university did nothing, right? So radio, TV, supermarket, library defining who was

00:58:44 --> 00:58:49
going into which rooms. Everything was managed by the students.

00:58:48 --> 00:58:53
- That's amazing. That's an amazing experiment, that it all, all

00:58:52 --> 00:58:56
didn't go to hell quickly. It somehow flourished.

00:58:55 --> 00:59:00
- It worked great, and I learned so much in my life

00:58:59 --> 00:59:04
doing those side activities, right? Because you're twenty-two and you need to run your campus,

00:59:03 --> 00:59:06
else you don't have electricity, right?

00:59:05 --> 00:59:10
So you care about that, right? But anyway, in the '80s they

00:59:09 --> 00:59:14
did a full experiment of deploying a network mostly sponsored

00:59:13 --> 00:59:17
by IBM and 3Com, which was a token ring network.

00:59:17 --> 00:59:22
So token ring is something that probably almost no one

00:59:21 --> 00:59:26
knows about anymore. It's a networking technology where

00:59:25 --> 00:59:27
you don't have routers, right?

00:59:26 --> 00:59:31
Everyone is linked. It's type, like really a ring, and when you want to

00:59:30 --> 00:59:35
send a message, you talk to your neighbor who's going to put the message to the next one,

00:59:34 --> 00:59:37
who's going to put the things to the next one,

00:59:37 --> 00:59:42
in terms of ring. The issue with token ring is, of course, is that it's

00:59:41 --> 00:59:45
very slow because every computer on the network needs to

00:59:45 --> 00:59:49
pen the message, see if it's okay. Is it for me? No, it's not, and

00:59:48 --> 00:59:53
then send it back, like a token which is traveling around the ring.

00:59:53 --> 00:59:58
In the '80s, you're doing some Telnet and sending mails as

00:59:57 --> 01:00:01
university. That's okay, right? But starts the '90s,

01:00:01 --> 01:00:06
and the '90s and start video games, and when you have high

01:00:05 --> 01:00:10
latency in video games, basically you die, right? So in nineteen ninety-four, nineteen

01:00:09 --> 01:00:13
inety-five, around Doom and Duke Nukem coming around, they want a faster

01:00:12 --> 01:00:17
network. So the students go and see the university and say, "You know

01:00:16 --> 01:00:21
hat? We want a faster network. We need to work," which, and also play

01:00:20 --> 01:00:25
video games. And the university tells them that basically,

01:00:24 --> 01:00:29
"Oh, I'm sorry, we cannot help you because you understand the

01:00:28 --> 01:00:31
campus is not ours. You manage it, so

01:00:31 --> 01:00:36
do something. And you should see some basically partners of this

01:00:35 --> 01:00:40
university and basically go away." And they go, and they

01:00:39 --> 01:00:44
actually go and see the CIO of

01:00:43 --> 01:00:47
Bouygues, which is a large French company and who's doing some

01:00:46 --> 01:00:51
TVs in France. And he says, "Well, you know what? The future

01:00:50 --> 01:00:55
of video is satellite." Well, today we know it's not, but at least it was

01:00:54 --> 01:00:59
a good idea. In nineteen ninety-five, the first satellite dish, and he says that

01:00:59 --> 01:01:03
instead of having like one satellite dish and a big decoder for

01:01:03 --> 01:01:08
each of the students, which are one thousand and five hundred, what about

01:01:07 --> 01:01:12
you build, like you put an enormous dish and

01:01:11 --> 01:01:16
only one decoder, and you send the video directly on the network.

01:01:15 --> 01:01:20
And that required a very fast network. Today, it's obvious, but at

01:01:19 --> 01:01:24
he time was, like, the first to do video streaming. So they built this project,

01:01:23 --> 01:01:26
which was called Network 2000.

01:01:26 --> 01:01:31
Of course, right, we are in the '90s, right? Everything is- ... futuristic is called 2000,

01:01:30 --> 01:01:31
like—

01:01:30 --> 01:01:32
- Yeah, 2000, yeah.

01:01:32 --> 01:01:37
- And so they do the Network 2000 project. It's completely hacked.

01:01:36 --> 01:01:40
It crashes after 45 seconds. That's okay. The demo is 40 seconds.

01:01:40 --> 01:01:45
It leaks memory. That's okay. They put 64 megabytes of RAM instead of the

01:01:44 --> 01:01:49
8 or 16 you have, and the demo should have stopped there. And that was the Network

01:01:48 --> 01:01:50
2000 project by the students.

01:01:49 --> 01:01:52
- What was the format of the video that they had to work with?

01:01:52 --> 01:01:56
- MPEG-2 because satellite is MPEG-2 TS for transport,

01:01:55 --> 01:02:00
MPEG-2 video, and MPEG-2 audio at that time.

01:01:59 --> 01:02:03
And the project should have stopped there. Everyone was happy. They had, like,

01:02:03 --> 01:02:08
amazing ATM network at 155 megabits per

01:02:07 --> 01:02:12
second. They had probably one of the best network in Europe at that time, and

01:02:11 --> 01:02:16
they stopped the project. Six months or a year later, two students arrive and say,

01:02:15 --> 01:02:20
"Well, you know what? Maybe other people care about video streamed on a

01:02:19 --> 01:02:23
local network," and they create the VideoLAN project,

01:02:23 --> 01:02:28
VideoLAN. And one of them is called Christophe Massiot, that is a good

01:02:27 --> 01:02:31
friend of both Kieran and me, and they start the project. It's not

01:02:30 --> 01:02:35
even open source yet, and they spend around three years

01:02:34 --> 01:02:39
to get the school to agree to make it open source. Because the

01:02:38 --> 01:02:43
university wanted to get some-- because of the IP and copyright of

01:02:42 --> 01:02:47
the students, wanted to basically monetize these MPEG-2 decoders.

01:02:47 --> 01:02:51
- Just to be clear, so what was the main application, streaming on a local network?

01:02:50 --> 01:02:53
- It was streaming on a local network.

01:02:52 --> 01:02:57
- By the way, that's just, like, to state the obvious. This is before YouTube. This is before-

01:02:56 --> 01:03:01
Ten years before YouTube. You have a Pentium 60 or 75, right?

01:03:00 --> 01:03:05
You, the main machine was 486DX at 33 megahertz, right?

01:03:04 --> 01:03:09
- Bear in mind, television was the main form of video at the time. You could

01:03:08 --> 01:03:13
get new channels. In the '90s, having even one new channel when you grew up with four

01:03:12 --> 01:03:16
channels, having a fifth or a sixth was a big deal, and so

01:03:15 --> 01:03:19
having this satellite service with, you know,

01:03:19 --> 01:03:22
dozens, even hundreds of channels was so groundbreaking.

01:03:22 --> 01:03:26
- Especially because this is university where you had a ton of different nationalities, right?

01:03:26 --> 01:03:30
So there was a ton of people who wanted... So the-- in the end, they had, like,

01:03:30 --> 01:03:34
several dishes on different types of satellites, right? Because, for example, a lot of people were

01:03:33 --> 01:03:38
coming from the Maghreb or the Middle East and they, so they went

01:03:37 --> 01:03:43
o different types of satellites. Anyway, the solution worked great,

01:03:43 --> 01:03:48
and they started the VideoLAN project. The VideoLAN project has several

01:03:47 --> 01:03:52
and some are completely crazy solutions, like one how to

01:03:51 --> 01:03:56
create multicast on a unicast network, but let's not come

01:03:55 --> 01:04:03
to that. It's too, too complex. But VideoLAN client part is what became VLC.

01:04:03 --> 01:04:08
Actually, they basically strong-armed the university to force it to open source

01:04:07 --> 01:04:11
because university did not understand that. And in 2001, it's still early.

01:04:11 --> 01:04:15
But basically, yes, the university agreed early 2001

01:04:15 --> 01:04:19
to make it open source. I joined the project in 2003 because that's

01:04:18 --> 01:04:22
when I joined the university. So the first thing is

01:04:22 --> 01:04:27
I'm not the one who created VLC because actually no one did, right?

01:04:26 --> 01:04:31
- Just kind of naturally emerged from the VideoLAN project. And we should mention that, like,

01:04:30 --> 01:04:35
again, you said it just, but to make it clear, VideoLAN,

01:04:35 --> 01:04:39
As what it became was at the time was a set of technologies

01:04:39 --> 01:04:44
around video, and the VLC, what you called the client, that's the thing

01:04:43 --> 01:04:48
that most normies, uh-

01:04:47 --> 01:04:49
That is correct, and

01:04:48 --> 01:04:52
- ... think of, like, as the thing, which is, like, the thing that pops up when you click on a

01:04:52 --> 01:04:54
video and you play it.

01:04:53 --> 01:04:58
- So I arrive in 2003, and then I will create the

01:04:57 --> 01:05:02
open source nonprofit organization called VideoLAN,

01:05:01 --> 01:05:06
and I took everything out of the university to create a nonprofit

01:05:05 --> 01:05:10
project and something sustainable. It's, yes, it's true that I spent

01:05:09 --> 01:05:14
more time than anyone on VLC and VideoLAN. That is sure.

01:05:13 --> 01:05:18
but it's a continuity of a previous project, VideoLAN, the

01:05:17 --> 01:05:22
student project, which is a continuity of the Network 2000 project, which is a

01:05:21 --> 01:05:23
continuity of that and that.

01:05:22 --> 01:05:27
- I'm sure there's moments along the way there you were thinking of, like,

01:05:26 --> 01:05:31
what is the future of this from an open source perspective? 'Cause as,

01:05:30 --> 01:05:35
as the internet is blowing up, and there is companies... I

01:05:34 --> 01:05:38
mean, for people who don't remember, like, there's companies making

01:05:37 --> 01:05:40
huge amounts of money.

01:05:39 --> 01:05:44
- And I can tell you that in 2005, the project should have died,

01:05:44 --> 01:05:49
And I made it to continue the

01:05:48 --> 01:05:53
project. At some point, we were only two active developers.

01:05:52 --> 01:05:57
and I thought it was great technology and was useful,

01:05:56 --> 01:06:01
and it will be useful and I made that my life and my,

01:06:00 --> 01:06:05
my time. And I made that grow from a

01:06:04 --> 01:06:09
few hundreds of thousands of users, millions of users to what we have

01:06:08 --> 01:06:13
now, which is probably billions of version of VLC around the

01:06:12 --> 01:06:16
world and used everywhere. So

01:06:15 --> 01:06:20
that's a bit the story of VLC. There is ton of very funny stories around

01:06:19 --> 01:06:24
that. Many people from around the world working

01:06:23 --> 01:06:28
on it, like you said, in Syria or middle of nowhere in India. But

01:06:27 --> 01:06:32
along the way, I got several offers which were either to

01:06:31 --> 01:06:36
bundle toolbars, right? You remember those horrible toolbars-

01:06:35 --> 01:06:40
... which were basically spyware, or changing your web

01:06:39 --> 01:06:44
rowser or your search engine or even, like,

01:06:43 --> 01:06:48
advertisement inside VLC. And I didn't like that,

01:06:47 --> 01:06:51
right? I am-- and people don't understand that. It's not-- I'm not

01:06:51 --> 01:06:55
against money, right? I'm very happy to make money. I created several

01:06:54 --> 01:06:59
startups and one I hope that is going to work very well.

01:06:58 --> 01:07:03
It's the fact that I believe that you need to win money

01:07:02 --> 01:07:07
ethically. There is a right way of doing that, and doing sneaky

01:07:06 --> 01:07:11
advertisement or stealing data is not the correct way, right?

01:07:10 --> 01:07:15
For example, if Netflix arrived at some point and say, "Well, we want to put Netflix inside

01:07:14 --> 01:07:19
VLC," probably the story would have been different, right? But they didn't. The only

01:07:18 --> 01:07:23
people who came to us were shady ads company.

01:07:22 --> 01:07:27
And if I do that, right, I would have a ton of money, right? And then three years

01:07:26 --> 01:07:32
later, project is gone, right? Someone forks it and something else happens.

01:07:31 --> 01:07:36
- So it's not even necessarily ads or any of that, it's the shadiness of the-

01:07:35 --> 01:07:40
... dishonesty of the-- So you had a good radar, you had a good

01:07:39 --> 01:07:44
threshold of like, "No, this compromises the

01:07:43 --> 01:07:46
spirit of what this is supposed to represent."

01:07:46 --> 01:07:50
- But also it's for me, right? I'm like very selfishly, I

01:07:49 --> 01:07:54
need to go to bed at night and be happy about what I've done, right? Maybe it's

01:07:53 --> 01:07:58
my upbringing, maybe it's my parents' fault or whatever, right? But

01:07:57 --> 01:08:02
I believe there is right and wrong, right?

01:08:01 --> 01:08:06
And this was the right decision at the time.

01:08:05 --> 01:08:09
It still is. I want to be proud of what I've been doing.

01:08:08 --> 01:08:13
And like, if I had sold out, I would have

01:08:12 --> 01:08:14
betrayed so many other people who work here.

01:08:14 --> 01:08:18
- Yeah, well, I should say me and most of the internet

01:08:17 --> 01:08:23
hank you for that decision. It's inspiring for others,

01:08:23 --> 01:08:28
I think that are pushing the open source movement forward,

01:08:28 --> 01:08:33
that it's okay to do these kinds of huge sacrifices

01:08:32 --> 01:08:37
if you believe it's right. And I think in that case it was right and it was the reason that VLC

01:08:36 --> 01:08:43
became as successful as it was, 'cause it's an embodiment, it's a symbol of

01:08:43 --> 01:08:47
like, you know, freedom and what the open source community can create.

01:08:46 --> 01:08:51
- Yeah, and be a service for so many people around the world, and this is important.

01:08:50 --> 01:08:55
- We should emphasize in the 2000s it was really normal to download a program and it

01:08:54 --> 01:09:01
secretly installs some spyware. It was buried in very faint text or in the

01:09:00 --> 01:09:04
license text box that nobody reads that at the bottom-

01:09:03 --> 01:09:05
... "Oh, I will be installing this toolbar-

01:09:04 --> 01:09:09
... and changing all these things," and it was very common to have to, you

01:09:08 --> 01:09:12
know, you install a program to do something at the time of any sort.

01:09:11 --> 01:09:16
- To put yourself in the mind of a developer at that time, I think it's

01:09:15 --> 01:09:20
very easy, to everybody listening to this, it's very easy at that

01:09:19 --> 01:09:25
ime to convince yourself to take a few thousand dollars-

01:09:24 --> 01:09:30
... a few thousand dollars to do it. To say no to much more money—

01:09:30 --> 01:09:34
... takes guts and takes vision.

01:09:34 --> 01:09:38
- The last offer I had was obscene,

01:09:37 --> 01:09:42
and they say, "Yeah, but imagine with all that money you could build

01:09:41 --> 01:09:46
something new, open source," right? It was like the mind trick was,

01:09:46 --> 01:09:48
it was difficult.

01:09:47 --> 01:09:52
But for me it was just like, "No, this doesn't work like that or this is not the right thing,

01:09:51 --> 01:09:54
so I don't do it."

01:09:54 --> 01:09:59
and again, right, it's not that I don't like money or whatever. It's just like

01:09:58 --> 01:10:00
it wasn't right.

01:10:01 --> 01:10:04
- Well, once again, thank you from me and from the rest of the internet.

01:10:04 --> 01:10:09
Let me talk a little bit more about the open source movement, about the

01:10:08 --> 01:10:13
fact that, as you say over and over and over and over, FFmpeg,

01:10:13 --> 01:10:17
is and many open source projects are built by

01:10:16 --> 01:10:21
volunteers. So there's a bit of drama recently,

01:10:20 --> 01:10:25
uh, Kieran, on the interwebs, on Twitter.

01:10:25 --> 01:10:29
You have a spicy style on Twitter that I think

01:10:28 --> 01:10:33
articulates and celebrates all the incredible developers and

01:10:32 --> 01:10:37
evelopment and the code, especially

01:10:36 --> 01:10:41
assembly that's involved in building some of these codecs and building some of this

01:10:40 --> 01:10:45
incredible technology. But that brings us to the, a bit of a

01:10:44 --> 01:10:49
debacle that happened. Tell me the full saga of what happened with

01:10:48 --> 01:10:51
e Google security engineers.

01:10:50 --> 01:10:55
- Just to be clear, Google are one of the biggest supporters of open source out there.

01:10:54 --> 01:10:58
They have been for a long time. It's just I think some things kind

01:10:57 --> 01:11:02
of went a bit overboard this time. So FFmpeg

01:11:01 --> 01:11:05
itself, and this is not like a secret, it's on the homepage, you know, the,

01:11:05 --> 01:11:10
it processes untrusted data. There can be security issues when you parse

01:11:09 --> 01:11:14
untrusted data. That's very normal. But recently what changed was Google started

01:11:13 --> 01:11:18
using AI to create security reports on an open source project, FFmpeg.

01:11:19 --> 01:11:23
Volunteers had to deal with that. They did, they provided very limited

01:11:22 --> 01:11:27
funding, and they even went to the media first announcing how good their AI was

01:11:27 --> 01:11:30
before the issues could be fixed.

01:11:29 --> 01:11:32
- And this is in the public forum.

01:11:31 --> 01:11:33
- Yeah, this is all public.

01:11:32 --> 01:11:36
- So report, reporting an issue, using AI to find an issue in the code,

01:11:36 --> 01:11:41
which is a security vulnerability, and then reporting that publicly before you're able to fix

01:11:40 --> 01:11:41
it.

01:11:40 --> 01:11:45
- Yeah. It's announcing how good their AI is, that they provided a standard

01:11:45 --> 01:11:49
90-day industry deadline without

01:11:48 --> 01:11:53
really understanding the nature of volunteer-driven

01:11:52 --> 01:12:00
development. In addition, this vulnerability was on an obscure 1990s game codec.

01:12:00 --> 01:12:05
the way-- And let's look at it from their standpoint to begin with. Let's you know—

01:12:04 --> 01:12:07
- Yeah. Can you steer me in their case?

01:12:06 --> 01:12:11
- Yeah, sure. They have substantial resources working on the security of open source

01:12:10 --> 01:12:11
projects

01:12:11 --> 01:12:16
that, you know, are ubiquitous, and they've used, you know, a lot of compute to do

01:12:15 --> 01:12:20
that and very expensive and very capable security researchers,

01:12:19 --> 01:12:24
to do that. And that's their viewpoint is they are contributing by

01:12:23 --> 01:12:30
doing that. But I think that's where opinions differ.

01:12:30 --> 01:12:35
it opened up a lot of interesting fissures I would say.

01:12:36 --> 01:12:41
it does seem that there's a portion of the security community that

01:12:41 --> 01:12:45
look at themselves a bit like building architects that never have to go to site.

01:12:44 --> 01:12:49
You know, going to site is something that is a little bit beneath them, the actual

01:12:48 --> 01:12:53
day-to-day construction. They're there to do their security things and it's someone else's

01:12:52 --> 01:12:57
problem. The security industry also kind of has

01:12:57 --> 01:13:02
a very aggressive tone towards things. The, the language they use is extremely

01:13:01 --> 01:13:06
aggressive. They use very strong language like, "You will get popped." So and to,

01:13:05 --> 01:13:07
Joe Public, get popped,

01:13:07 --> 01:13:11
you know, means something quite bad. For them it means to get hacked.

01:13:11 --> 01:13:16
The way I would look at it personally is a little bit like the padlock on your home.

01:13:15 --> 01:13:22
The padlock on your home or, you know, the lock on your home

01:13:21 --> 01:13:29
is there to protect against the capabilities of what it's there to protect.

01:13:28 --> 01:13:33
It's not there to protect nuclear secrets. It's not there to protect Fort Knox. And

01:13:33 --> 01:13:38
it could be looked at that they're using AI at a level of scale to go

01:13:37 --> 01:13:42
and pick those locks and then say, "Hey, your

01:13:41 --> 01:13:45
lock's not secure. You need to deal with this." Whereas actually they're the ones with

01:13:44 --> 01:13:48
resources to be able to

01:13:48 --> 01:13:53
fix this. But that seems to not be something either they'll contribute to in terms of

01:13:52 --> 01:13:57
patches or in terms of financially. And the scale of AI is kind of the issue.

01:13:56 --> 01:14:01
The bug reports are very wordy. They're very,

01:14:00 --> 01:14:05
very-- It's almost a denial of service by AI-generated bug

01:14:04 --> 01:14:08
reports on very niche codecs.

01:14:08 --> 01:14:13
and the other issue the security community has is everything is marked high priority.

01:14:12 --> 01:14:16
You're going to, you know, "This is the most important thing in the world, and you need to deal with this.

01:14:15 --> 01:14:18
High, high, high, vulnerable, scary, scary, scary,"

01:14:18 --> 01:14:25
on a game codec used on one disk in 1993.

01:14:24 --> 01:14:28
And that's where the dichotomy lies. Going around

01:14:28 --> 01:14:33
telling everyone that their padlock's not safe, well, that's a hobby project of

01:14:32 --> 01:14:37
somebody. The safety of that codec is consummate to

01:14:36 --> 01:14:41
what that person thinks. It's their hobby. It's good that they're security analyzing it, but it

01:14:40 --> 01:14:44
doesn't need a big scary warning, "This is a critical vulnerability."

01:14:45 --> 01:14:49
We also may recently also see that there was another

01:14:48 --> 01:14:52
quote-unquote vulnerability. It wasn't at Google in this case, but

01:14:53 --> 01:14:57
a filter could overflow and have an integer overflow, and one of your

01:14:57 --> 01:15:04
pixels could be the wrong color. And this was marked high, 7.5 severity in red.

01:15:05 --> 01:15:10
And at some point, the security industry needs to realize you can't keep crying wolf

01:15:09 --> 01:15:14
like this because this just leads to people, you know, the equivalent thereof of putting

01:15:14 --> 01:15:18
password stickers on their PC. You know, you can't just keep crying wolf every day.

01:15:17 --> 01:15:23
And I appreciate, you know, that's their modus operandi is to create as much

01:15:23 --> 01:15:28
scare and fear. But from the Google standpoint, at the end of the day,

01:15:29 --> 01:15:33
they need to contribute either financially or with patches. Google

01:15:32 --> 01:15:38
uses FFmpeg at a scale probably you or I couldn't even contemplate,

01:15:38 --> 01:15:40
millions of CPU cores.

01:15:40 --> 01:15:47
And yes, they contribute in areas mostly regarding their own products, so VP9, AV1.

01:15:47 --> 01:15:51
But in a wider sense,

01:15:51 --> 01:15:56
there's a disproportionate level of contribution. Yes, they fund students. Yes, they fund Summer

01:15:55 --> 01:16:02
of Code. And I think so Alex Strange is a former FFmpeg developer I think

01:16:01 --> 01:16:03
posting in a personal capacity.

01:16:02 --> 01:16:07
- So he posted about security engineers on

01:16:07 --> 01:16:11
Hacker News. His post reads, "The problem with security

01:16:10 --> 01:16:14
reports in general is security people are rampant

01:16:13 --> 01:16:18
self-promoters, in parentheses, Linus

01:16:17 --> 01:16:22
once called them something worse. Imagine you're a humble

01:16:21 --> 01:16:28
volunteer open source developer. If a security researcher finds a bug in your code,

01:16:28 --> 01:16:33
they're going to make up a cute name for it, start a website with a logo.

01:16:33 --> 01:16:38
Google is going to give them a million-dollar bounty. They're going to

01:16:37 --> 01:16:41
go to DEF CON and get a prize, and I assume go to some

01:16:41 --> 01:16:46
kind of secret security people orgy where everyone is dressed

01:16:45 --> 01:16:50
like they're in The Matrix. Nobody is going to do any of

01:16:49 --> 01:16:58
this for you when you fix it." basically commenting on the sort of the incentives

01:16:58 --> 01:17:02
for the different people involved and misaligned.

01:17:01 --> 01:17:08
- The problem here is the disproportion of means on discovery

01:17:07 --> 01:17:12
compared to patching it, right? And this is the biggest issue, right?

01:17:12 --> 01:17:15
And after that debacle, Google did some changes.

01:17:14 --> 01:17:18
- They are now starting to send patches, which is-

01:17:17 --> 01:17:22
And they also now have reward tools for fixing issues. So

01:17:21 --> 01:17:26
it has changed a bit because of that debacle. So it's good, right?

01:17:25 --> 01:17:30
But we've seen, and we talk about Google, but we have seen like some

01:17:29 --> 01:17:34
other large companies saying, "Oh, you need to fix this bug because it's critical in our

01:17:33 --> 01:17:34
product."

01:17:33 --> 01:17:39
- Can you explain the XZ fiasco? The FFmpeg tweet reads,

01:17:39 --> 01:17:44
"The XZ fiasco has shown how a dependence on

01:17:43 --> 01:17:48
unpaid volunteers can cause major problems. Trillion-dollar

01:17:47 --> 01:17:52
corporations expect free and urgent support from

01:17:51 --> 01:17:56
volunteers. Microsoft, Microsoft Teams posted on a

01:17:55 --> 01:18:01
bug tracker full of volunteers that their issue is high priority.

01:18:02 --> 01:18:06
After politely requesting a support contract from Microsoft for long-term

01:18:05 --> 01:18:10
aintenance, they offered a one-time payment of a few thousand dollars

01:18:09 --> 01:18:14
instead. This is unacceptable. We didn't make it up. This is what

01:18:13 --> 01:18:17
Microsoft Teams actually did." And then you give

01:18:17 --> 01:18:22
the image and the details and all that kind of stuff, showing that these trillion-dollar

01:18:21 --> 01:18:25
companies are not giving much money, not giving much support.

01:18:24 --> 01:18:29
- They think an open source project is a traditional vendor that they have an

01:18:28 --> 01:18:32
SLA. They think a public bug tracker is actually,

01:18:32 --> 01:18:37
you know, a third-party vendor's Jira where you can do all of these things. It's

01:18:36 --> 01:18:39
not. It is there to report bugs.

01:18:38 --> 01:18:42
I think the thing that made this particularly heinous was

01:18:42 --> 01:18:46
the name-dropping of Microsoft, the name-dropping that this is a visible product.

01:18:46 --> 01:18:51
If this was just a general bug report, I think that would have made it a lot

01:18:50 --> 01:18:52
better.

01:18:51 --> 01:18:56
- Yeah, so they literally said, like, "This is a big deal because a lot of

01:18:55 --> 01:19:00
people are using it in Microsoft." I wonder what

01:18:59 --> 01:19:04
happens psychologically. So I think what happens in these companies, maybe you can

01:19:03 --> 01:19:11
correct me, is they— You're right. They just think of FFmpeg as like a vendor that

01:19:10 --> 01:19:15
Microsoft surely is paying a huge amount of money to.

01:19:14 --> 01:19:19
They kind of assume that in their interaction, and

01:19:18 --> 01:19:22
nobody anywhere on the stack is going like, "Wait a minute.

01:19:22 --> 01:19:26
Shouldn't we be giving like millions of dollars to FFmpeg?"

01:19:25 --> 01:19:30
- And this is a very big problem in large— Like we're talking about some

01:19:29 --> 01:19:34
companies, but it's the same everywhere, right? A lot of those

01:19:33 --> 01:19:38
companies. Like the, when we talk to that person, right,

01:19:37 --> 01:19:42
he was just like a manager on one project in Microsoft Teams, right? He

01:19:41 --> 01:19:46
had never really discussed with open source community. He

01:19:45 --> 01:19:49
had no idea, right? It was like—but the problem

01:19:49 --> 01:19:53
is that usually there is what we call OSPOs, right? Open source program

01:19:53 --> 01:19:58
offices in those type of companies, and they are the ones who are supposed to

01:19:57 --> 01:20:03
discuss with open source vendors. Um, or open source communities. But like

01:20:03 --> 01:20:07
they often don't explain that correctly internally, right? And here it's just like

01:20:08 --> 01:20:13
we are not your supplier. If you want me to be your supplier, I'm very

01:20:12 --> 01:20:16
happy, right? I will send you a contract and SLAs. Like I created

01:20:16 --> 01:20:20
five companies who are doing that around open source projects, so that's okay.

01:20:19 --> 01:20:24
- We should say that some of the spicy tweets that Kieran, you're

01:20:23 --> 01:20:29
behind, and some of the debacle produced results.

01:20:28 --> 01:20:29
- Yes.

01:20:28 --> 01:20:30
- Positive results.

01:20:29 --> 01:20:34
- Donations have increased substantially. They're still not enough to

01:20:33 --> 01:20:36
cover even a single full-time developer, but

01:20:36 --> 01:20:41
on both a, you know, awareness level and a technical level,

01:20:41 --> 01:20:46
there's substantially more technical awareness and sort of awareness of the importance

01:20:45 --> 01:20:49
of FFmpeg as a result, as a result of X and what's

01:20:48 --> 01:20:53
happened. I can say, you know, it solved its purpose. People

01:20:52 --> 01:20:56
realize the level of importance FFmpeg has.

01:20:55 --> 01:21:01
- And on VideoLAN it's the same, right? Like for example, a, a very simple example.

01:21:01 --> 01:21:06
For more than a year, we couldn't update VLC on

01:21:05 --> 01:21:10
Android because of a bug on the Play Store, on Android Play

01:21:09 --> 01:21:13
Store, right? The only way we got someone to answer

01:21:13 --> 01:21:18
was to put a very spicy, as you say

01:21:17 --> 01:21:22
tweet saying that we are going to stop distributing VLC

01:21:21 --> 01:21:28
for Android, right? And we have around 100 million people using that. And now then

01:21:28 --> 01:21:33
someone from Android actually came and discussed to us, right? We had the

01:21:32 --> 01:21:37
same issue with Microsoft or, or like saying that we were

01:21:36 --> 01:21:40
going to stop distributing VLC on the Windows Store. And

01:21:39 --> 01:21:44
unfortunately, we are so small that the

01:21:44 --> 01:21:48
only very strong power we have to solve those issues

01:21:48 --> 01:21:52
is blaming on social network because it snowballs and

01:21:52 --> 01:21:57
now they listen to us. But so as large companies often have difficulty

01:21:57 --> 01:22:02
talking to us. Like for example, VLC, right, is probably one of the top

01:22:01 --> 01:22:09
10 software used on Windows. I am not part of Microsoft ISV

01:22:08 --> 01:22:13
programs, right? I don't have a point of contact at Microsoft, right?

01:22:12 --> 01:22:17
While I'm sure any other software, Adobe, Spotify, has a

01:22:16 --> 01:22:19
point of contact. I don't have that, right? So

01:22:20 --> 01:22:27
raising awareness works. It's sometimes very spicy, lot of drama. Well,

01:22:26 --> 01:22:30
X and Twitter are okay for that, but it's efficient.

01:22:30 --> 01:22:39
- Uh, so everybody listening to this should go follow FFmpeg on Twitter, on X, follow

01:22:38 --> 01:22:46
VideoLAN on Twitter, on X. Go donate. Donate ... to FFmpeg.

01:22:45 --> 01:22:50
- And thank you, Lex. Over the years, several years you've been a supporter of, you

01:22:49 --> 01:22:55
know, FFmpeg and VideoLAN on X. You know, giving us shout-outs, appreciating,

01:22:54 --> 01:22:56
you know, what we do.

01:22:55 --> 01:22:57
- FFmpeg for life.

01:22:57 --> 01:23:01
- And for example, like Tim Sweeney, Carmack, and a few

01:23:00 --> 01:23:05
others, like very high-level people have raised also the awareness

01:23:04 --> 01:23:09
on our X accounts, and that helped a lot also.

01:23:09 --> 01:23:10
- Karpathy as well.

01:23:09 --> 01:23:11
- Karpathy, yes.

01:23:10 --> 01:23:13
- Karpathy as well, yeah.

01:23:12 --> 01:23:16
- Yeah. I mean, also, you know, outside of the fact that so many people use it, it's

01:23:15 --> 01:23:20
o impactful on the world, it's also a great representation of a great open

01:23:19 --> 01:23:28
source project. Like the value of assembly and C and making sure that like you take

01:23:27 --> 01:23:31
programming seriously for real world systems.

01:23:30 --> 01:23:35
- It's not just that. We'll talk about assembly later I'm sure, 'cause that's its whole topic in itself, but it's

01:23:34 --> 01:23:41
also celebrating people like Andreas Rheinhardt who do maintenance. It is, I

01:23:40 --> 01:23:44
believe unpaid, as I believe as a volunteer. He's doing massive

01:23:43 --> 01:23:48
refactorings. Uh, Andreas Rheinhardt and Anton Khirnov

01:23:47 --> 01:23:52
rewriting ffmpeg.c with threading. Celebrating those guys,

01:23:51 --> 01:23:55
celebrating the untold labor that's gone into this

01:23:55 --> 01:23:59
that actually doesn't change anything from the user standpoint. The files are exactly the

01:23:59 --> 01:24:04
same, but wow, the, the, the airplane has been rebuilt whilst it's in the air.

01:24:03 --> 01:24:08
- Christian Garcia said, "As a teenager running this account," referring to the FFmpeg

01:24:07 --> 01:24:12
... account, and you responded, "Teenagers have written more assembly

01:24:11 --> 01:24:16
in FFmpeg than Google engineers." But also

01:24:15 --> 01:24:20
just pointing out that there's a lot of incredible contributors who are teenagers.

01:24:19 --> 01:24:24
- Like JB said, we don't care who you are, where you're from, what you do.

01:24:24 --> 01:24:29
Teenagers have written thousands of lines of assembly,

01:24:28 --> 01:24:33
Over the years. Give a shout-out back in the days to Daniel Kang.

01:24:33 --> 01:24:38
So also highlighting the work of people like Ruikai Peng. This is a 16-year-old, some of his

01:24:37 --> 01:24:40
first contributions to FFmpeg,

01:24:40 --> 01:24:45
actually doing and putting some of these quote unquote security researchers to shame by

01:24:44 --> 01:24:48
actually finding issues and fixing them and being

01:24:47 --> 01:24:52
16. There's no barriers. There's no barriers to you have to

01:24:51 --> 01:24:56
study on, at college under this person and understand these. It's you can

01:24:55 --> 01:25:00
learn C, and let's be honest, it's from, it's from the K&R book. Learn C.

01:25:00 --> 01:25:04
You can learn assembly. We'll talk about that maybe a bit later.

01:25:03 --> 01:25:07
You can contribute to world-class technologies.

01:25:06 --> 01:25:11
- In VLC one of the oldest contributors called

01:25:10 --> 01:25:15
Felix, he's the one doing everything on Mac and iOS. He's starting

01:25:14 --> 01:25:19
working on VLC. He was 16. We had a guy called

01:25:18 --> 01:25:23
Edward Wong, who used to be a Google Summer of Code student who

01:25:22 --> 01:25:26
stayed for three years around VideoLAN. He was 14,

01:25:26 --> 01:25:30
right? And, and part of Google Summer of Code and Google

01:25:29 --> 01:25:34
Code-in, which were programs where basically we have students or high school,

01:25:34 --> 01:25:39
We wrote a ton of assembly for x264 and for VLC

01:25:38 --> 01:25:42
and for FFmpeg, right? So everyone can contribute.

01:25:41 --> 01:25:46
- And he also did a good job because he didn't play the alarmist CVE

01:25:45 --> 01:25:50
heist, create a CVE, which is like, a

01:25:49 --> 01:25:53
public exposure of security and do these big scary

01:25:53 --> 01:25:58
red 7.5 high priority. He just fixed an issue in Git

01:25:57 --> 01:26:01
after three days and just fixed it. He didn't need to go and play a big

01:26:00 --> 01:26:03
security drama about it. And I think

01:26:03 --> 01:26:07
I posted, you know, the kids are all right. Whereas- there's, you know,

01:26:07 --> 01:26:11
there is a por- I'm not saying all security people do this, but there is a portion of the

01:26:10 --> 01:26:15
security community, as Alex said, that likes to hype themselves up by

01:26:14 --> 01:26:19
creating drama. They would have happily raised, "This is a high

01:26:18 --> 01:26:23
priority CVE 8.0" or whatever on a

01:26:22 --> 01:26:27
issue that actually was in Git. It wasn't even in a release, it was in development, and three

01:26:26 --> 01:26:28
days later was fixed.

01:26:27 --> 01:26:34
- Well, I just want to put a little bit of love out there, even to the bigger

01:26:34 --> 01:26:39
much love and respect to Google engineers. Like you said, they're

01:26:39 --> 01:26:44
Some of the, the best software engineers in the world, and they do contribute a lot-

01:26:43 --> 01:26:47
... even on the security front. And also, you know, I'm a big fan of

01:26:46 --> 01:26:50
Theo. Much love to Theo. He was part of this,

01:26:50 --> 01:26:54
Debacle and drama a little bit. I think when you just zoom

01:26:53 --> 01:26:58
out on the grand arc of human history,

01:26:57 --> 01:27:02
the drama contributed positively to everybody involved. Donations went up.

01:27:02 --> 01:27:06
It brought more attention to the topic, allowed

01:27:06 --> 01:27:11
everybody to bicker in a way that ultimately got them to figure out

01:27:10 --> 01:27:12
what FFmpeg is all about.

01:27:11 --> 01:27:16
- So the way we looked at this is like it's a rap battle at the end of the day, you know?

01:27:16 --> 01:27:20
No, but it is. We say stuff, we say stuff-

01:27:19 --> 01:27:24
... but we can, we can leave it on. X is a perfect place for, you know, international rap

01:27:23 --> 01:27:28
battle. You say stuff. I say stuff about your mama, but it doesn't mean, you know, I have

01:27:27 --> 01:27:30
an actual personal issue with her.

01:27:29 --> 01:27:34
Uh, and that's what it looks like. The Theo situation, you know, JB can maybe expand, went a

01:27:33 --> 01:27:38
little bit too far and there was a little... But, you know, it's just a bit of fun.

01:27:37 --> 01:27:41
It's just a bit of rap battle. It's a bit, it's WWE. You know,

01:27:40 --> 01:27:43
everyone's having a bit of fun on X.

01:27:42 --> 01:27:47
It doesn't need to be taken seriously. You know, the teenagers thing, you know,

01:27:46 --> 01:27:51
that... So that guy was a Google employee saying, "Hey, you know, there are other ways to run

01:27:50 --> 01:27:55
an open source business." You know, go and there's like, oh, man, just have a bit of fun, you know?

01:27:54 --> 01:27:59
That's what the point of this account is. And, and furthermore, if you can teach people

01:27:58 --> 01:28:03
about the ways of open source projects, assembly, et cetera, by doing

01:28:02 --> 01:28:07
that, I think there's a lot to be offered here. It's not dunking on people for dunking's sake.

01:28:06 --> 01:28:11
It's showing actually the story that I think X learnt is these are not big

01:28:10 --> 01:28:14
corporate open source projects. This is not Kubernetes where there's,

01:28:14 --> 01:28:16
you know, hundreds, maybe thousands of people-

01:28:15 --> 01:28:20
... paid to develop this stuff. These are just people in their basements in their spare time,

01:28:20 --> 01:28:24
and if you can address that topic in a fun and entertaining way-

01:28:23 --> 01:28:28
... I think that's the good thing and that's, that's the value of X and

01:28:27 --> 01:28:29
then the reach we have.

01:28:28 --> 01:28:33
- And to be honest, right, like even at Google, Google is

01:28:34 --> 01:28:39
one entity, but so many different people, right? And there is a ton

01:28:38 --> 01:28:42
of Google engineers we work with

01:28:42 --> 01:28:47
all the time, and even like Google from YouTube to Chrome to

01:28:46 --> 01:28:50
Chrome Media to the rest of Google, those are very different types of entities. But

01:28:50 --> 01:28:55
what we do is efficient. And, for example for,

01:28:54 --> 01:28:59
for Theo, right? It went a bit too far. I had him... Like I calmed everyone

01:28:58 --> 01:29:03
down. I had him on the phone. We said, "Okay, like this goes too far," and so on.

01:29:02 --> 01:29:07
But in the end yeah, it's a rap battle, but it's positive for the

01:29:06 --> 01:29:11
project. It, like the awareness we have on open source and,

01:29:10 --> 01:29:15
and I mean true open source from communities right now is

01:29:14 --> 01:29:18
increased dramatically in the last two years, and this is useful.

01:29:19 --> 01:29:24
- Uh, what do you think motivates all the incredible contributors that we've been

01:29:23 --> 01:29:27
talking about? Like, what's the engine? It's so interesting to see.

01:29:26 --> 01:29:27
- So-

01:29:26 --> 01:29:30
Like you said, they're sitting in the basement. What's the driver? What's the engine there?

01:29:29 --> 01:29:34
- There are many drivers, but weirdly the main one

01:29:33 --> 01:29:38
is that what we do in multimedia plays videos, and video is

01:29:37 --> 01:29:42
cool, right? And, and for example, we have so many

01:29:41 --> 01:29:46
people in the community who arrive because they loved watching

01:29:45 --> 01:29:50
anime, right? And this is like the advice when people ask me,

01:29:50 --> 01:29:55
"What should I work on in open source? How do I start?" And my answer is always the same:

01:29:54 --> 01:29:57
work on something you love.

01:29:56 --> 01:30:01
I am working on VLC because I love movies, right? And I love

01:30:00 --> 01:30:05
watching the same movies over and over, even if my wife hates me when I do

01:30:04 --> 01:30:09
that, right? But because it's interesting, right? Because it's a topic that

01:30:08 --> 01:30:13
you like, right? The first, that's the first thing where people come to

01:30:12 --> 01:30:15
usually to VLC and FFmpeg. The second thing is that

01:30:15 --> 01:30:20
echnically we, because we search for excellence, this is

01:30:19 --> 01:30:24
the best school ever, right? This is the best school

01:30:23 --> 01:30:27
ever of programming. If you're good in C, in

01:30:27 --> 01:30:32
FFmpeg, if you know how to write assembly, I assure you you're going to

01:30:31 --> 01:30:35
be one of the best programmers ever, even if you're working on writing

01:30:34 --> 01:30:39
TypeScript, because this is the most amazing thing to

01:30:38 --> 01:30:43
do. And you will, like, have to get reviews by some of

01:30:42 --> 01:30:47
the most seasoned programmers ever who are going to look at

01:30:46 --> 01:30:51
every part of your code and tell you why it's not great. It's like we are the

01:30:50 --> 01:30:53
best teachers that you've ever had in programming, right?

01:30:52 --> 01:30:57
- Andrew Kelley started Zig. He was an FFmpeg developer and started Zig after

01:30:56 --> 01:30:59
his FFmpeg school. I mean,

01:30:59 --> 01:31:04
it's the place to learn so many aspects of programming in the

01:31:03 --> 01:31:08
real world, in a thing used by billions of people. You have nowhere to

01:31:07 --> 01:31:12
hide. You have to be open and honest about your flaws and how you can learn

01:31:11 --> 01:31:13
and be better.

01:31:12 --> 01:31:16
- And what is also interesting in multimedia is

01:31:15 --> 01:31:20
that you have 16 milliseconds to display a frame. It's not like

01:31:19 --> 01:31:24
a game engine where you can basically slow down and wait a frame.

01:31:23 --> 01:31:28
Like, so it's, you need to be good, right? There is no choice, else you don't have your

01:31:27 --> 01:31:32
video. And because of how codecs, if you miss a frame, you're going

01:31:31 --> 01:31:36
to destroy the look of the video, right? So you need to be good.

01:31:35 --> 01:31:39
You need to be perfect to have the right thing. But also

01:31:39 --> 01:31:44
is that it's not just pure programming in the mathematical sense, right?

01:31:43 --> 01:31:47
A lot of people don't understand, but

01:31:47 --> 01:31:52
in order to program correctly on the open source multimedia community,

01:31:51 --> 01:31:56
you need to understand how computers work. And when you write assembly,

01:31:55 --> 01:32:00
you need to understand about CPU pipelining, right? You need to

01:31:59 --> 01:32:04
understand how SIMD works, how the ALU works, right? You need to

01:32:03 --> 01:32:08
understand what, how IO works, right? And this is what I

01:32:07 --> 01:32:12
think that is missing to a lot of engineers and software engineers today, is

01:32:11 --> 01:32:15
understanding what we call computer architecture. And,

01:32:15 --> 01:32:20
like, seriously, like some of the debates is like, should we use this assembly call or this

01:32:19 --> 01:32:24
one? And people say, "Well, no, it's going to be like three cycles on this

01:32:23 --> 01:32:28
type of CPU and this one," and has massive impact on the output, right?

01:32:27 --> 01:32:32
- We should expand. FFmpeg is probably one of the biggest CPU users in the world. There's

01:32:31 --> 01:32:35
it's probably running— ... as we speak

01:32:35 --> 01:32:40
easily 100 mil- order of magnitude 100 million, maybe even a billion CPUs

01:32:39 --> 01:32:45
as we speak. So every instruction matters. There's not...

01:32:45 --> 01:32:52
The impact, at least in terms of CPU, is massive for everything that we do.

01:32:51 --> 01:32:56
- So first you come because it's an interesting subject, then you stay because it's

01:32:55 --> 01:33:00
excellent, and in the end you're very proud of it because

01:32:59 --> 01:33:03
it's in the hands of everyone. Like so many

01:33:02 --> 01:33:09
people like, "Oh, I'm working for whatever consulting company and I'm doing some

01:33:10 --> 01:33:15
portal to download invoices for your PG&E." Wow,

01:33:14 --> 01:33:19
great. Like, so many jobs are like that. You're not going to,

01:33:18 --> 01:33:22
to tell that to your grandma. But if you go to see your grandma and say, "I do

01:33:21 --> 01:33:26
this so that you can play video on your laptop," they understand. And this is very

01:33:25 --> 01:33:30
important, right? Because you're working on VLC, FFmpeg, H.264. It's

01:33:29 --> 01:33:34
in the hands of hundreds of millions of people and you have an impact.

01:33:33 --> 01:33:37
And so you can be proud of yourself. And so I think that

01:33:37 --> 01:33:42
in addition to doing a great resume, all those things are why people contribute.

01:33:42 --> 01:33:46
- Yeah, those are side effects. My favorite quote on this topic is John Collison.

01:33:45 --> 01:33:50
He said, "The world is a museum of passion projects." You know, everything out

01:33:49 --> 01:33:54
here is a passion project. And open source multimedia and open source

01:33:53 --> 01:33:58
in general, you can just do that so much faster. There's such a

01:33:57 --> 01:33:59
faster network effect, you know?

01:33:59 --> 01:34:04
I can open a cafe and that can be my passion project, but I have to get building codes, I have to build a

01:34:03 --> 01:34:08
building, I have to find a location, I have to do all the, you know, all

01:34:07 --> 01:34:12
sorts of things. Well, in the software world, that passion project can be,

01:34:11 --> 01:34:16
can move quickly, it can be amplified by the network effect,

01:34:16 --> 01:34:20
and that amplification can be more than the sum of the

01:34:19 --> 01:34:23
parts. You know, you can be, you can find people

01:34:22 --> 01:34:27
interested in extremely obscure things

01:34:26 --> 01:34:31
and have a network effect and make something that is truly amazing.

01:34:31 --> 01:34:37
- And on that topic of passion projects Tim Sweeney actually said in a reply

01:34:37 --> 01:34:41
to a tweet that was complimenting JB. He said,

01:34:41 --> 01:34:46
quote, "Many things in the world only happen because an awesome

01:34:45 --> 01:34:50
person decides to do it. This is the case with VLC." And

01:34:49 --> 01:34:54
that speaks to something interesting to me, that it does seem that a small number of

01:34:53 --> 01:34:57
people, sometimes one person, can create

01:34:58 --> 01:35:02
something incredible in the software world. Like you said this over and over and

01:35:01 --> 01:35:06
over. I think JavaScript is an incredible thing created by,

01:35:05 --> 01:35:10
Initially a single person. Some of the programming languages like

01:35:09 --> 01:35:14
Python and C and Java, like just one person has this

01:35:13 --> 01:35:18
vision, has this design, and brings it sometimes over a weekend is the

01:35:17 --> 01:35:19
initial spark.

01:35:18 --> 01:35:24
- Yes, Linus built Git in two weeks. Wow.

01:35:23 --> 01:35:26
- It changed the world, Git. I mean, it really changed the world.

01:35:25 --> 01:35:30
- Linus' passion project. "Hey, I'm uploading this tarball to an FTP, like deal with it."

01:35:29 --> 01:35:34
- But for me, it's not just in software, right? And I believe in,

01:35:34 --> 01:35:39
in individuals that are going to change the world, right? And it's with

01:35:38 --> 01:35:42
a good, as you said, vision, right? I want to do that. It

01:35:42 --> 01:35:46
is useful, it will be useful. And whether it's going to like build

01:35:45 --> 01:35:50
train or cars or rockets or something like, I believe

01:35:49 --> 01:35:54
people who believe in themself and have a vision can have a huge

01:35:53 --> 01:35:56
impact for humanity.

01:35:56 --> 01:36:00
- Let's actually zoom out before we zoom back in. We'll just keep

01:35:59 --> 01:36:04
going up and down the stack. So you know, we've been

01:36:03 --> 01:36:08
talking back and forth VLC and FFmpeg. Kieran, you said that

01:36:07 --> 01:36:12
FFmpeg and VideoLAN, VLC coexist,

01:36:11 --> 01:36:16
and there's no central point of importance. It's a kind of

01:36:15 --> 01:36:19
what you call the binary star system.

01:36:18 --> 01:36:23
Uh, they succeed because of each other. Can you explain the difference, how

01:36:22 --> 01:36:26
they interact? What is the- ... are they competitors?

01:36:26 --> 01:36:30
- I don't think they're competitors. I think the simple answer is, the

01:36:30 --> 01:36:36
short answer before I go into detail is VLC is to FFmpeg as Android is to Linux.

01:36:36 --> 01:36:41
So they depend on each other, but they coexist because of each other. So they

01:36:40 --> 01:36:43
are a binary star system is the analogy I used.

01:36:43 --> 01:36:47
- By the way, I feel horrible that I just recently learned that Alpha

01:36:46 --> 01:36:51
Centauri, the closest star system to us, is a triple star system.

01:36:50 --> 01:36:55
- And when you start doing the physics, it's a nightmare, right? But, but, but like-

01:36:55 --> 01:36:59
Hence the three body problem. But anyway. So a lot of

01:36:58 --> 01:37:03
FFmpeg pipelines involve the x264 project, which is

01:37:02 --> 01:37:07
a VideoLAN project. I would put a finger in the air and say

01:37:06 --> 01:37:10
80-plus percent of those pipelines are dependent on a VideoLAN project.

01:37:11 --> 01:37:15
VLC, obviously, as we've discussed, a VideoLAN project, uses

01:37:14 --> 01:37:19
FFmpeg, gives it reach, exposure to weird files,

01:37:19 --> 01:37:23
Historically used some donation money to fund FFmpeg

01:37:22 --> 01:37:27
development, and we'll talk a bit maybe about some of the reverse engineering later.

01:37:27 --> 01:37:32
So it's a binary star system. They work and feed off each other. Many of the developers are

01:37:31 --> 01:37:36
shared. There's no central location. It's a virtuous cycle working together.

01:37:36 --> 01:37:43
- And we should mention that x264 is the encoder for H.264 video standard. So

01:37:43 --> 01:37:47
H.264 is the standard. X264-

01:37:46 --> 01:37:50
Is the open source implementation of the standard

01:37:49 --> 01:37:53
- ... that's used by basically everybody- ... for everything.

01:37:52 --> 01:37:56
It's, that is the main driver of this. When you think of an MP4

01:37:56 --> 01:37:59
file that has H.264 codec in it-

01:37:59 --> 01:38:04
If it came from a software environment, like a data center or somewhere,

01:38:03 --> 01:38:06
the chances are it was created with x264.

01:38:06 --> 01:38:10
- And that's under the flag of VideoLAN.

01:38:09 --> 01:38:14
- That's a VideoLAN project. So in the VideoLAN graphic, it sits in the VideoLAN

01:38:13 --> 01:38:14
world.

01:38:14 --> 01:38:18
- And VideoLAN has a, says a bunch of stuff in it. Go to the

01:38:17 --> 01:38:22
VideoLAN website, there's a bunch of icons.

01:38:21 --> 01:38:25
- Like if you look, there is so many libraries, right?

01:38:24 --> 01:38:35
- libdvdcss- ... libdvdnav, libdvdpsi, libvlc of course, vlc-unity, libblu-

01:38:35 --> 01:38:39
Blu-ray. Uh, yeah, there's many more.

01:38:39 --> 01:38:41
- And there is so many more, right?

01:38:40 --> 01:38:45
Lately, lately the dav1d project that we might talk about is the

01:38:44 --> 01:38:49
last project from VideoLAN. It's everywhere, right? And we do,

01:38:48 --> 01:38:52
we have a libspatialaudio lately that we announced. We have a-

01:38:51 --> 01:38:52
checkasm.

01:38:52 --> 01:38:54
- checkasm-

01:38:53 --> 01:38:54
We'll talk about that later

01:38:53 --> 01:39:00
- ... which is like an insane project- ... but amazing. So and x264 is one of

01:38:59 --> 01:39:04
those VideoLAN projects. And my opinion, for example, is that

01:39:04 --> 01:39:09
x264 was, is the most amazing encoder ever designed,

01:39:09 --> 01:39:13
and this helped the adoption of FFmpeg. A lot of people and large

01:39:12 --> 01:39:17
companies went through FFmpeg because they wanted to use

01:39:16 --> 01:39:21
x264, and x264 increased the popularity of FFmpeg. But

01:39:20 --> 01:39:25
also VLC had its popularity because

01:39:24 --> 01:39:29
it's played so many files that were done by FFmpeg, right? So it's,

01:39:28 --> 01:39:33
it's many projects that are intertwined and work together.

01:39:32 --> 01:39:37
- Yeah. Unfortunately, there's a, there's a thing on X where VLC is mentioned and

01:39:36 --> 01:39:41
there's people, "A quick reminder that it's FFmpeg inside doing the actual work." And that, and

01:39:40 --> 01:39:46
that's like I said, it's not, that's not the case. We work together.

01:39:46 --> 01:39:51
- And to give you an idea, right? When I compiled VLC for Windows, I compiled

01:39:50 --> 01:39:55
around 16 million lines of code, right? One

01:39:54 --> 01:40:00
million of those are inside the VLC repository, and FFmpeg in total is probably two,

01:40:00 --> 01:40:05
around two, right? But so it means that so many dependencies are outside. And

01:40:04 --> 01:40:09
if you also look at FFmpeg per se, FFmpeg also is

01:40:08 --> 01:40:12
integrating third-party libraries like x264, but

01:40:11 --> 01:40:16
LibOpus and so many others, right? So we all depend on each other.

01:40:15 --> 01:40:20
- Uh, yeah, that's why I was hoping to do this episode as we are doing that

01:40:19 --> 01:40:24
just kind of joins FFmpeg and VLC-

01:40:23 --> 01:40:27
... because it's really, it's, it's really two of the same, like you said,

01:40:27 --> 01:40:32
binary star system and we're all just orbiting it. Can we give a shout-out

01:40:31 --> 01:40:35
o some of the people along the way? We didn't really quite talk

01:40:34 --> 01:40:39
about the history of FFmpeg, so-

01:40:38 --> 01:40:43
maybe can you tell me about Fabrice? Can you tell me about

01:40:42 --> 01:40:47
Michael Niedermayer? Can you tell me about some of the key figures here?

01:40:46 --> 01:40:49
- Let's just talk about the eras of FFmpeg, because there's

01:40:49 --> 01:40:53
key eras and key people that made this

01:40:52 --> 01:40:57
possible. Uh, Fabrice Bellard, as you mentioned, creating the

01:40:56 --> 01:41:01
concept, and then probably in the 2000 era, I would call the era,

01:41:00 --> 01:41:05
eras tour of FFmpeg is the 2000 era was Michael Niedermayer. So

01:41:05 --> 01:41:10
key things he got done was exhaustive support for DivX and

01:41:09 --> 01:41:14
Xvid at the time, and all sorts of weird variants of what's known

01:41:13 --> 01:41:18
as MPEG-4 Part 2. So this predates the

01:41:17 --> 01:41:22
MPEG-4 Part 10 that we're used to. So this was 2000 era video

01:41:21 --> 01:41:27
codecs where there were, oh, flavor after flavor of weird decoders.

01:41:27 --> 01:41:31
At the time in the 2000s, you needed a new player to play every different type of file

01:41:31 --> 01:41:35
format. So there was Windows Media Player to play Windows Media formats. There

01:41:34 --> 01:41:39
was RealPlayer to play RealMedia formats. And those were the other, the other

01:41:38 --> 01:41:43
key thing in FFmpeg at the time were native decoders for those. I actually do remember

01:41:42 --> 01:41:46
being a teenager, I must have been,

01:41:46 --> 01:41:49
figuring out there was this one player that could play,

01:41:49 --> 01:41:54
could decode these files without having separate bloated players. Because

01:41:53 --> 01:41:58
at the time when you downloaded RealPlayer, there was a ton of other stuff in there, a ton of ads, a

01:41:57 --> 01:42:00
ton of other things, and just having a simple library

01:42:00 --> 01:42:07
that was fast led to that. And then I think 2008 was a, 2008 onwards

01:42:08 --> 01:42:14
was a big change because that's when H.264 got its maturity and I think

01:42:14 --> 01:42:19
something hopefully we'll talk about a bit more. This was the beginning of high definition video.

01:42:19 --> 01:42:22
So H.264 was the key decoder of that.

01:42:22 --> 01:42:27
So I'd call that the late 2000s and 2010s, and that's when the big reverse

01:42:26 --> 01:42:30
ngineers came along and really did astonishing work.

01:42:30 --> 01:42:35
The beginning was a single player that could play Xvid, DivX,

01:42:35 --> 01:42:40
Windows Media, and RealPlayer was already a massive achievement in itself without codec

01:42:39 --> 01:42:44
packs, without weird stuff you had to download that had weird ads and weird spyware.

01:42:43 --> 01:42:50
- VLC 1.0 was out on those times, 2000, 2009, 2010.

01:42:49 --> 01:42:53
And this is like where it exploded.

01:42:53 --> 01:42:57
- Yeah, without codec packs, it just works- ... across all these different-

01:42:57 --> 01:43:02
It, de facto, it's just like all the codec packs are FFmpeg inside VLC,

01:43:01 --> 01:43:04
plus we have other modules for all the type of codecs.

01:43:03 --> 01:43:08
- But back at the time that wasn't, is there were weird, in the 2000s, there were weird

01:43:07 --> 01:43:11
codec packs with DLLs coming from this place, DLLs coming that-

01:43:11 --> 01:43:12
With a lot of spyware

01:43:12 --> 01:43:16
- ... with spyware, with you know what. It wasn't reliable, you didn't know, and having a single

01:43:16 --> 01:43:20
player that was open source or single playback module/player that

01:43:20 --> 01:43:24
could do this that was open source. But I think the thing to emphasize is

01:43:24 --> 01:43:28
this task in the 2000s that Michael did was Sisyphean. It was really,

01:43:28 --> 01:43:33
the number of edge cases are poor beyond comprehension in terms of

01:43:32 --> 01:43:37
you could have a Chinese CCTV system that did one weird variant

01:43:36 --> 01:43:41
of MPEG-4 Part 2, what's known as MPEG-4 ASP,

01:43:40 --> 01:43:45
and that was a weird variant, and you had to fix that without breaking everybody else-

01:43:44 --> 01:43:46
... times a million.

01:43:45 --> 01:43:50
- So that's, so you said that's where a lot of the reverse engineering was happening.

01:43:49 --> 01:43:53
- It started in the 2000s with the Windows Media stuff because that was-

01:43:52 --> 01:43:57
... proprietary. It started with the RealMedia, so with Benjamin Larsson.

01:43:56 --> 01:43:58
- Kostya Shishkov.

01:43:57 --> 01:44:00
- Kostya Shishkov, that era. Those were the key, that was the key

01:43:59 --> 01:44:04
groundwork. And then in the 2010s was kind of

01:44:04 --> 01:44:08
the Paul Mahol, Kostya era building, doing some of the

01:44:08 --> 01:44:12
most difficult codecs. JB maybe can talk about GoToMeeting 4 and

01:44:11 --> 01:44:14
GoToMeeting 5, and-

01:44:13 --> 01:44:16
What? What's the GoToMeeting?

01:44:15 --> 01:44:18
- So, like, let's talk about this

01:44:18 --> 01:44:26
amazing Ukrainian guy called Kostya, who was at that time living in Germany, and who

01:44:25 --> 01:44:34
was in love with Sweden, right? He— And the guy was the most... He's like,

01:44:33 --> 01:44:38
like a lot of the people in the community are very clever. He's

01:44:38 --> 01:44:41
one of those who are, like, borderline geniuses, right?

01:44:41 --> 01:44:46
He was able to reverse engineer extremely complex codecs,

01:44:45 --> 01:44:49
And he does that, and we do a bit of engineers with

01:44:48 --> 01:44:51
Kieran, but clearly not at this level.

01:44:50 --> 01:44:52
- No, no, yeah.

01:44:51 --> 01:44:57
- Um, he reverse engineered binary blobs, which are 20 megabytes?

01:44:56 --> 01:45:01
- Yeah, so just for reference, one megabyte binary blob to reverse

01:45:00 --> 01:45:05
ngineer is probably order of magnitude a month of work, and this guy is doing

01:45:04 --> 01:45:09
20, 30 megabyte blobs. Maybe we'll talk about that in a minute, about the

01:45:08 --> 01:45:13
subtleties of how you do that. But this guy is doing it for very difficult and very obscure

01:45:12 --> 01:45:14
codecs.

01:45:13 --> 01:45:20
- And did that for fun, right? And so GoToMeeting was a big problem with VLC

01:45:19 --> 01:45:24
because that was like the number one

01:45:23 --> 01:45:28
feature request for a long time, so I put a bounty. And the guy at some point said,

01:45:27 --> 01:45:32
"Okay, JB, I'm going to do it." And in a matter of two

01:45:31 --> 01:45:36
months, and then he explained how he did it. He was just like, "Oh, I looked at the code,

01:45:35 --> 01:45:40
like this looked like a DCTs that I used to see on WMV

01:45:39 --> 01:45:44
and so on." He did that, and the funniest part is that

01:45:43 --> 01:45:48
he code he's written is a ton of jokes. And

01:45:47 --> 01:45:52
there is, there is a ton of JB, right, my name, and, and

01:45:51 --> 01:45:57
Kempf and Kempf and Kostya jokes inside the code. The code is beautiful, right?

01:45:57 --> 01:46:02
- So one of the things I wanna comment is I've gotten a chance to

01:46:01 --> 01:46:06
speak to some of the developers, some of the assembly language level

01:46:05 --> 01:46:10
People, and they all always make everything sound like it's kinda easy.

01:46:10 --> 01:46:15
There's a kind of humility because, maybe

01:46:15 --> 01:46:19
just the level of what's required to do this stuff is so

01:46:18 --> 01:46:24
high that everything else seems easy, I guess is the lesson to take away from that.

01:46:23 --> 01:46:28
- So in the community, like some of the most impressive people are the ones doing

01:46:27 --> 01:46:31
reverse engineering- ... and the other ones doing the assembly folds, right?

01:46:31 --> 01:46:35
Um, and both of those type of people are

01:46:35 --> 01:46:43
amazing. x264, for example, became amazing because, of a guy called Loren Merritt—

01:46:42 --> 01:46:45
... who is, was from University of Washington, I think.

01:46:44 --> 01:46:46
- At the time, yeah.

01:46:45 --> 01:46:52
- And who was, like, who made everything great and fast doing a ton of assembly.

01:46:51 --> 01:46:55
Um yeah. So this is like the

01:46:55 --> 01:46:58
golden era, I guess, where so many things got done.

01:46:57 --> 01:47:01
- So, yeah, if you look at Kostya, for example, he looked at the world as a binary specification.

01:47:01 --> 01:47:06
He didn't need documentation or anything. It's, "I have a binary and I can

01:47:05 --> 01:47:09
figure all of this out." And he regularly used the phrase binary

01:47:08 --> 01:47:13
specification. "Ah, you know, it's not a problem." And he would go away, and he would come back, and

01:47:13 --> 01:47:15
he would do interesting stuff.

01:47:15 --> 01:47:19
- Can you actually speak to the details or add color and

01:47:18 --> 01:47:22
texture to what it takes to reverse engineer a blob?

01:47:22 --> 01:47:26
- Yeah. So let's look at GoToMeeting, for example, is a good one because,

01:47:26 --> 01:47:30
um, I record a meeting on GoToMeeting, for example.

01:47:30 --> 01:47:34
How do I play it back without needing this GoToMeeting

01:47:33 --> 01:47:38
player? There may not even be a player. I may, I may need to send a recording of a meeting to

01:47:37 --> 01:47:40
someone that doesn't have a player or whatever.

01:47:40 --> 01:47:45
So first of all, there's a ton of other stuff there. There's an actual video

01:47:44 --> 01:47:49
conferencing client. You need to go and find, it may be easy, it may not be easy to find the actual

01:47:48 --> 01:47:53
module doing the decompression. You need a way to

01:47:52 --> 01:47:57
actually dump the YUV data from the module. So often it

01:47:56 --> 01:48:01
involves opening in a disassembler, trying to guess where the hooks are

01:48:01 --> 01:48:05
to incorporate that module and run that module natively

01:48:05 --> 01:48:10
to decode a sample file. So figure out where this module is doing

01:48:09 --> 01:48:14
the decoding process and find a way to hook in and

01:48:13 --> 01:48:17
output the raw YUV data, 'cause you will need that-

01:48:16 --> 01:48:21
... as a point of comparison for when you actually do the reverse engineering, 'cause you'll need to be bit

01:48:20 --> 01:48:27
exact or in some cases close to bit exact. And then you open up your disassembler,

01:48:27 --> 01:48:32
use a lot of intuition to go and figure out, you know, where the DCT is,

01:48:31 --> 01:48:34
where's entropy coding. There, there is a kind of,

01:48:35 --> 01:48:40
not a rule book, but there's always a pattern of some sort. For example,

01:48:39 --> 01:48:43
GoToMeeting, you know it will be a s- a lot of screen codec tools.

01:48:43 --> 01:48:47
There's also different variants, so often I think there's, what, GoToMeeting 4, 5-

01:48:46 --> 01:48:48
Well, 2 or 3, 4, I think.

01:48:48 --> 01:48:50
- 2, 3, 4.

01:48:49 --> 01:48:53
- So as you mentioned here, going to Perplexity, GoToMeeting uses its own

01:48:52 --> 01:48:57
proprietary codec for older s- recorded sessions historically stored in

01:48:57 --> 01:49:02
WMV files that require a special decoder to play properly on

01:49:01 --> 01:49:05
Windows. Without this decoder installed, Windows Media

01:49:05 --> 01:49:09
Player and some editors cannot decode the video track, so you

01:49:09 --> 01:49:13
may only hear audio or see a black screen. Boy, do I remember

01:49:12 --> 01:49:17
that. But this is reverse engineering that.

01:49:16 --> 01:49:21
- This is key, right? Because the GoToMeeting is something that not many people know

01:49:20 --> 01:49:25
anymore, right? Well, you know about Zoom and, and Teams and so on. But like, now

01:49:24 --> 01:49:29
let's fast-forward 10 years, 15 years, and like this is a

01:49:28 --> 01:49:33
GoToMeeting.exe for Windows 32 bits, right? Which is like, oh

01:49:32 --> 01:49:37
yeah, but I'm on Android, I'm on an iPad, I'm somewhere else, right? How are you

01:49:36 --> 01:49:41
going to do that? I'm going to be on RISC-V, on Arm. Those are blocked,

01:49:40 --> 01:49:45
but there are tons of files we need support for the future.

01:49:44 --> 01:49:52
And this is why those type of work are— exceptionally useful for humanity.

01:49:51 --> 01:49:56
- I just have to say, though, that reverse engineering process is mind-blowing.

01:49:56 --> 01:49:58
It's crazy. It's like,

01:49:58 --> 01:50:02
it's a kinda like, you know, I've been reading a lot and interview

01:50:02 --> 01:50:06
archeologists. I mean, you just have so little signal.

01:50:05 --> 01:50:10
Yes, yes, you know over time you get so much experience, you

01:50:09 --> 01:50:14
nderstand the structure of the original code, so you can kinda start inferring

01:50:13 --> 01:50:19
basics. But you're like-And we like archaeologists with a

01:50:18 --> 01:50:23
little brush trying to reconstruct the entire human civilization

01:50:22 --> 01:50:25
- Kieran is too humble, but Kieran has done some reverse engineering also.

01:50:24 --> 01:50:27
- Of CineForm, yeah, at the time, um-

01:50:26 --> 01:50:28
CineForm, nice

01:50:27 --> 01:50:32
- ... yeah, at the time before actually led to the open sourcing of that work. Um,

01:50:32 --> 01:50:37
so in parallel to doing the binary side, you obviously have samples. In many

01:50:36 --> 01:50:41
cases, you don't have many samples so you have to figure out what all the

01:50:40 --> 01:50:44
different flavors are, and you may have a s- So CineForm, for example, is actually a

01:50:43 --> 01:50:48
collection of different approaches and toolkits within that codec 'cause often

01:50:47 --> 01:50:53
it grows naturally. And the hard part is finding a sample that gets you kind of

01:50:53 --> 01:50:58
somewhere to start without having to implement 10 different other things. So

01:50:58 --> 01:50:59
start there.

01:50:59 --> 01:51:04
I think thankfully at the time I found a sample by pure chance that had a lot of flat blocks.

01:51:03 --> 01:51:06
It was animation, so that really helped a lot because

01:51:06 --> 01:51:11
it wasn't using particularly complex coding tools, et cetera, and you could kind of get

01:51:10 --> 01:51:15
somewhere and then, and then build up and build up until you figure, "Hey, here's a few

01:51:14 --> 01:51:19
bits here. I missed this. I missed this, this if branch that it does," and go, "Oh." So when we

01:51:18 --> 01:51:21
say samples, you mean sample videos-

01:51:20 --> 01:51:24
... and then, and then you're tracking, trying to infer, like, what is this

01:51:24 --> 01:51:30
codec doing- ... by observing the sample and then looking at what, at

01:51:29 --> 01:51:31
he lo- at, at the machine lo-

01:51:30 --> 01:51:32
The machine code saying-

01:51:31 --> 01:51:32
At the machine code

01:51:31 --> 01:51:36
- ... "Ah, I have byte, this byte is six. Take this branch." And in a different

01:51:35 --> 01:51:37
sample, oh, it's-

01:51:36 --> 01:51:38
That's nuts, man.

01:51:37 --> 01:51:39
- And-

01:51:38 --> 01:51:39
That is nuts

01:51:39 --> 01:51:43
- ... so you see, this is nuts. Then you go to things like GoToMeeting.

01:51:42 --> 01:51:43
- Yeah, yeah.

01:51:42 --> 01:51:44
- It's like-

01:51:43 --> 01:51:45
Mine was easy, right?

01:51:44 --> 01:51:45
- ... imagine-

01:51:45 --> 01:51:46
Yeah, right

01:51:45 --> 01:51:51
- ... two order of magnitude of more complexity. A guy alone

01:51:51 --> 01:51:54
somewhere in Germany doing that.

01:51:53 --> 01:51:58
And for a long time, you work, you're in a black box because a decoder,

01:51:57 --> 01:52:02
for a long time, because there is so many steps from the entropy decoding, the intra

01:52:02 --> 01:52:06
prediction, the motion prediction, the IDCT, and so on. For a long

01:52:06 --> 01:52:10
time, you don't see anything, right? So you're debugging purely in memory.

01:52:10 --> 01:52:11
- Debugging guesswork.

01:52:10 --> 01:52:15
- And you may have the buffer that the coefficients are stored in completely wrong,

01:52:14 --> 01:52:19
and so you may be going down a complete rabbit hole thinking it's this and then,

01:52:18 --> 01:52:22
oh damn, that's not, that's, that's something else, and-

01:52:21 --> 01:52:25
And you're doing that on binaries that are tens of megabytes,

01:52:25 --> 01:52:28
millions of instructions, right?

01:52:27 --> 01:52:29
- So you're stepping through the debugger,

01:52:29 --> 01:52:34
like one by one, you know, instruction by instruction going, "Hey, this instruction changes this.

01:52:33 --> 01:52:35
This does this."

01:52:34 --> 01:52:37
- Pausing the program on the CPU level. Like it's-

01:52:36 --> 01:52:40
Pausing it, yeah, on the CPU level, watching what's going on, trying to figure out-

01:52:39 --> 01:52:43
Sometimes you need to, like, be in a VM, so yeah, that you can pause the VM.

01:52:43 --> 01:52:47
- Yeah, pause the VM, dump the memory, 'cause there could, some of the codecs could have encryption.

01:52:46 --> 01:52:51
There could be like a DRM on there. So you need to dump the

01:52:50 --> 01:52:53
memory from a virtual machine.

01:52:52 --> 01:52:57
- Like when I joined École Centrale Paris in 2003, Jon Lech

01:52:56 --> 01:53:00
Johansen basically broke the DVD specification and created

01:52:59 --> 01:53:04
DeCSS, showed us how he was breaking a

01:53:03 --> 01:53:08
DRM, which was MP4 FairPlay from Apple. What he did

01:53:07 --> 01:53:12
on his laptop, and I was young, I was 21, was just like mind-blowing

01:53:11 --> 01:53:16
because he was basically debugging Windows inside a type of VM

01:53:15 --> 01:53:19
with ex- Like, wow. It's incredible. It's

01:53:18 --> 01:53:23
mind-blowing and inspiring. Does it get, like from your

01:53:22 --> 01:53:26
experience and from what you've seen in the community, does it get discouraging?

01:53:25 --> 01:53:26
Does it get-

01:53:26 --> 01:53:31
People help you. People send you samples. People are keen. Sometimes you don't

01:53:30 --> 01:53:32
have access to an encoder, so

01:53:32 --> 01:53:37
this is even more difficult because you just, you just ask and you have to

01:53:36 --> 01:53:41
ask for samples. I remember VideoLAN used to tweet for samples at one

01:53:40 --> 01:53:43
stage. "Hey, I need this obscure sample," and-

01:53:42 --> 01:53:46
For a long time I was, "Oh, I need this codec, and I need this codec."

01:53:45 --> 01:53:50
- And if you were really lucky, you would find like... If you were unlucky, you'd get

01:53:49 --> 01:53:53
like one or- you'd get nothing or you'd get one or two, and then they would... Sometimes you'd find a

01:53:52 --> 01:53:57
goldmine. It's like, "Yeah, my company has 100,000 of these files 'cause we're dependent on it for

01:53:56 --> 01:54:01
some reas-" Um, and so those are the, those are kind of the best if, if...

01:54:00 --> 01:54:06
Because then they can test bit exactness across the huge range of coding tools.

01:54:06 --> 01:54:08
- Can you explain bit exactness?

01:54:07 --> 01:54:12
- Bit exactness, so most but not all video

01:54:11 --> 01:54:16
codecs, certainly from about the 2000s onwards,

01:54:16 --> 01:54:20
have a bit exact definition, so every implementation must produce

01:54:20 --> 01:54:25
xactly the same bits, bit for bit, in exactly

01:54:24 --> 01:54:27
the same data that comes out of a decoder.

01:54:26 --> 01:54:29
- For like a large number of samples?

01:54:28 --> 01:54:33
- For a given sample. So Lex's implementation, JB's implementation, and my

01:54:32 --> 01:54:37
implementation of H.264 must match bit exactly. That

01:54:36 --> 01:54:41
wasn't the case in the '90s of MPEG-2, probably fair to say

01:54:40 --> 01:54:45
one of the biggest mistakes the video industry made, and I think people who were in the

01:54:44 --> 01:54:48
room in '92, I don't think, most or both of us were in diapers, I suspect- ... but

01:54:48 --> 01:54:53
have acknowledged I would give a shout-out to Yuri Reznik.

01:54:53 --> 01:54:56
He's acknowledged that was one of the big mistakes of the era.

01:54:56 --> 01:55:00
- And you're saying the encoders needed to be able to run tests and then the bit exactness.

01:55:00 --> 01:55:05
I mean, that's a nice thing to guarantee.

01:55:04 --> 01:55:09
Like there's a parallel sort of development here on the way the web

01:55:08 --> 01:55:13
rowser works, which is a, you know, takes HTML and displays

01:55:12 --> 01:55:16
it, and there's no bit exactness there across the different engines.

01:55:15 --> 01:55:20
- I would point out actually FFmpeg is unique in the sense that it's,

01:55:20 --> 01:55:25
it has been a winner-takes-all scenario. You have... Browsers is a good analogy

01:55:24 --> 01:55:28
because it has to parse a lot of different content and render it in a particular way, like a

01:55:27 --> 01:55:29
decoder.

01:55:29 --> 01:55:33
But there still are multiple browser engines. There's Firefox's one, there's Chrome's one, there's a

01:55:32 --> 01:55:35
few Japanese ones that are pretty decent.

01:55:35 --> 01:55:40
That's not been the case in multimedia in general across a

01:55:39 --> 01:55:42
wide range of codecs. FFmpeg has kind of

01:55:42 --> 01:55:46
won it all, I suppose, in a sense because of, because of the fact that you can get

01:55:46 --> 01:55:51
every new codec added is actually worth more than the value of that codec itself

01:55:50 --> 01:55:52
because it makes the whole thing better.

01:55:52 --> 01:55:57
- Man, this is really cool. Going to Perplexity. Yuriy Reznik is a

01:55:56 --> 01:56:01
multimedia and signal processing researcher, got his PhD in computer science

01:56:00 --> 01:56:04
from Kyiv University with over 150 papers and more than 80

01:56:04 --> 01:56:09
granted US patents, contributor to major multimedia standards

01:56:08 --> 01:56:18
including H.264, MPEG-4, AVC-H.265 MPEG-4 ALS, G.718, and-

01:56:17 --> 01:56:19
G.71 is telco stuff. Telco.

01:56:19 --> 01:56:22
- Oh. And so he was more connected to companies.

01:56:21 --> 01:56:24
- RealAudio, RealVideo, right? That was-

01:56:23 --> 01:56:24
Oh, yeah

01:56:24 --> 01:56:26
- ... very important at that time

01:56:25 --> 01:56:29
- ... Zencoder, Brightcove, Contex. This, man, I need to hang out with

01:56:29 --> 01:56:34
Yuriy. He's legit. And he's like one of the most nice person-

01:56:33 --> 01:56:34
Slack guy, yeah

01:56:33 --> 01:56:38
- ... ever, right? Like for example, for my for my

01:56:37 --> 01:56:42
startup that I'm doing right now called Kyber, right? I met Yuriy because

01:56:41 --> 01:56:46
I met him every year at the Mile High Video Conference, which is in Denver.

01:56:45 --> 01:56:50
And he gave me like so much good ideas

01:56:49 --> 01:56:53
and good things. He's like really amazing person.

01:56:52 --> 01:56:57
- He tells us how, how, you know- How great it is to be, you know,

01:56:56 --> 01:57:01
even know us. And then we just like, you know, you look at that and it's, I think it's the other

01:57:00 --> 01:57:01
way around, Yuriy

01:57:01 --> 01:57:06
- That reminds me of a thing that you mentioned to me about FATE testing and,

01:57:05 --> 01:57:10
like, the insanely rigorous process that's used to

01:57:09 --> 01:57:14
test everything that's incorporated into into FFmpeg. Can you take

01:57:13 --> 01:57:15
me through the testing process?

01:57:14 --> 01:57:19
- Yeah. So FFmpeg has a system called FATE, FFmpeg Automated Testing Environment.

01:57:19 --> 01:57:24
Because FFmpeg runs on so many different OSs and can be compiled with so

01:57:23 --> 01:57:25
many different compilers,

01:57:25 --> 01:57:30
there's been a crazy number of configurations. So you can see the

01:57:30 --> 01:57:37
absurd combination of compiler variants, operating system variants,

01:57:36 --> 01:57:41
instruction sets. You can see at the top macOS has tons of different

01:57:40 --> 01:57:43
variants because it has iOS, it has tvOS.

01:57:42 --> 01:57:47
- Well, I'm looking at a page fate.ffmpeg.org.

01:57:47 --> 01:57:52
81 minutes ago, 76 minutes ago, looking at the

01:57:51 --> 01:57:55
different architectures, the operating systems, the different compilers, Apple Clang

01:57:55 --> 01:57:58
version...

01:57:57 --> 01:57:59
- Combinations are crazy.

01:57:58 --> 01:58:01
- ... the combination is insane. RISC-

01:58:00 --> 01:58:05
So these are all run by volunteers, so these are all volunteer systems. The ones at the top,

01:58:04 --> 01:58:07
for example, the Macs I host in my office, for example,

01:58:07 --> 01:58:12
Host all sorts of different stuff. Other people host other things. So

01:58:12 --> 01:58:16
it's really there to make sure... because FFmpeg does quite complex C

01:58:15 --> 01:58:20
code, for example, you do have miscompilations. So the compiler

01:58:19 --> 01:58:24
will sometimes compile C code incorrectly. For example, this

01:58:23 --> 01:58:25
happens once in a while.

01:58:25 --> 01:58:29
- Oh, there's like, there's a log of all the compilations.

01:58:28 --> 01:58:33
- Yeah, log of all the compilations, all the tests. I think one of the other ones will show all the tests

01:58:32 --> 01:58:34
passing.

01:58:33 --> 01:58:38
- If you click, you can see all the tests- ... back. All tests successful.

01:58:37 --> 01:58:42
- In logs test, yeah. So you see all those tests are passing

01:58:43 --> 01:58:48
of all the different codecs, all the different filter transformations, all the-

01:58:47 --> 01:58:50
The level of scale is quite crazy.

01:58:50 --> 01:58:51
- Oh, that's nuts.

01:58:50 --> 01:58:55
- On all the combinations. It's not just a matrix at this point. It's like a pivot table

01:58:54 --> 01:58:56
of different combinations.

01:58:56 --> 01:58:57
- That's nuts.

01:58:57 --> 01:59:02
- And it's a key part of what we do because you may be able to test something

01:59:01 --> 01:59:05
locally, you make a change, but actually that breaks

01:59:05 --> 01:59:09
GCC version 11 on Mac or something like that, and you're

01:59:08 --> 01:59:13
able to then fix that. We also have miscompilation, so the C code,

01:59:12 --> 01:59:16
sometimes the compiler can have a bug in it where it creates the wrong output,

01:59:16 --> 01:59:21
and that can have quite a big effect sometimes on a video because of the

01:59:20 --> 01:59:24
way frames have dependencies. Even a small change in the output

01:59:24 --> 01:59:28
can cascade to actually quite big glitches.

01:59:27 --> 01:59:32
- You see PowerPC, you see RISC, you see ARM.

01:59:31 --> 01:59:35
- There was PowerPC, there was RISC, there was weird stuff in the past like DEC Alpha.

01:59:34 --> 01:59:35
There was—

01:59:35 --> 01:59:38
- You see Visual Studio, different versions of Clang or GCC.

01:59:37 --> 01:59:41
- Visual Studio, Intel compiler, Apple Clang, you name it.

01:59:40 --> 01:59:45
- What are some of the pain points? Like maybe do you have

01:59:44 --> 01:59:49
motional triggers maybe nightmares about a

01:59:48 --> 01:59:54
particular operating system, a particular container, codec combination of-

01:59:53 --> 01:59:58
I mean, for me, it's really easy because I have a day job. My company

01:59:57 --> 02:00:03
builds... The company I started builds equipment for broadcasting sports matches

02:00:02 --> 02:00:05
between TV stadiums and studios, for example.

02:00:05 --> 02:00:11
We have to work with 10-bit video, and 10-bit video has a set of challenges that

02:00:11 --> 02:00:16
you can't process 10-bit data natively on a CPU. So that means you

02:00:15 --> 02:00:20
have to stick it in 16 bits. So that means you

02:00:19 --> 02:00:24
have six wasted bits. So there's different packing formats to actually pack

02:00:23 --> 02:00:27
the data more efficiently because when you send that over a network,

02:00:27 --> 02:00:32
you lose... 'Cause you need to save that 40%. For example, on PCI

02:00:31 --> 02:00:36
Express, you may only have bus bandwidth to do that. And so I think internally we

02:00:35 --> 02:00:39
have about... Some are industry ones and some are internal to our

02:00:39 --> 02:00:46
own hardware that we build. We have a, I think a 5 by 5 or 6 by 6 matrix of

02:00:45 --> 02:00:50
every single format to every single other format conversion. In fact, one,

02:00:49 --> 02:00:53
one of them I sent you, and they're all written in handwritten assembly, and they're all

02:00:52 --> 02:00:56
written, and they all support different CPU generations.

02:00:57 --> 02:01:01
So this is really traumatic, handling all these different combinations

02:01:01 --> 02:01:03
times a million.

02:01:02 --> 02:01:05
- By the way, the company you're talking about is Open Broadcast Systems.

02:01:04 --> 02:01:09
- Yeah, so no, no relation to the free OBS streaming service.

02:01:08 --> 02:01:11
But JB and I have started companies

02:01:11 --> 02:01:16
broadly speaking around the FFmpeg VLC ethos, so that's really

02:01:15 --> 02:01:20
low-level work. So in most companies, this wouldn't be written in

02:01:19 --> 02:01:23
assembly. It would be accepted that C is fast.

02:01:23 --> 02:01:27
As you can see from that, C is not fast.

02:01:26 --> 02:01:31
- So here it says 62 times faster than C.

02:01:31 --> 02:01:35
- Yeah. So it's taking those, the ethos of doing

02:01:34 --> 02:01:38
low-level programming, real-time programming,

02:01:39 --> 02:01:44
and using that for commercial applications, and JB and I have started companies around

02:01:43 --> 02:01:47
that, in many cases hiring developers from the open source community

02:01:48 --> 02:01:53
to use that ethos. And so that's a great example

02:01:52 --> 02:01:56
of some of the things we're doing. In most companies, it would be, say, "Oh,

02:01:56 --> 02:02:00
I'll write this in C and it's fast and we're done," but actually you can get a lot better.

02:01:59 --> 02:02:07
- For me, like, some of the headaches we have is around some OS that are difficult to

02:02:07 --> 02:02:15
support, right? Because if you look at VLC and thanks to FATE and FFmpeg, we run

02:02:14 --> 02:02:19
on... The last version of VLC runs on Windows XP

02:02:19 --> 02:02:27
and still run there and runs on Windows 11. We work on macOS 10.7 to the

02:02:26 --> 02:02:30
latest macOS, whatever it is, right, 26.

02:02:30 --> 02:02:35
We work on iOS since iOS 9, well, we are actually

02:02:34 --> 02:02:43
iOS 26, right? We support many types of Linuxes, BSD, Solaris. The last

02:02:42 --> 02:02:47
version still runs on OS/2, right? Like there is maybe 10

02:02:46 --> 02:02:51
users of OS/2 in the world, and one of them is maintaining VLC. Then you

02:02:50 --> 02:02:55
realize that this very small team around VLC and using FFmpeg

02:02:54 --> 02:02:59
codecs and all the other ones support more

02:02:58 --> 02:03:07
OSs than Microsoft or Google or Apple, and they have infinite amount of power and

02:03:06 --> 02:03:11
resources. But for example, the worst is iOS.

02:03:11 --> 02:03:15
For in order to build on iOS 9, we need to do some

02:03:15 --> 02:03:23
very clever mixing of several versions of the Xcode IDE and SDK from Apple, from

02:03:22 --> 02:03:27
several versions, and do a type of Frankenstein version of that

02:03:26 --> 02:03:31
so that we can still support iOS 9, which is not supported at all by the

02:03:30 --> 02:03:39
compiler of Apple in order to still run on Arm32 on iOS 9. And

02:03:38 --> 02:03:43
you've seen on FATE that it was still supporting iOS 9, right? So,

02:03:42 --> 02:03:47
My headaches are mostly related to the support

02:03:46 --> 02:03:51
of so many OSs. And it's important because, like, we

02:03:50 --> 02:03:55
receive so many people saying, "Hey, thank you. I still have my iPad 2 to

02:03:54 --> 02:03:58
watch movies," and it still works on iOS 9, right?

02:03:58 --> 02:04:03
And it's also an impact of, like, not forcing people to buy new

02:04:02 --> 02:04:07
hardware when it works fine if you optimize it correctly. Which brings us

02:04:06 --> 02:04:10
to what we were saying about assembly. It's also fighting, like,

02:04:10 --> 02:04:15
the fact that you need to buy something new nonstop while you could optimize

02:04:14 --> 02:04:18
more, which is a lost art.

02:04:18 --> 02:04:24
- You gotta tell me about this lost art or this, uh-

02:04:23 --> 02:04:28
... the carriers of the flame of assembly. What

02:04:28 --> 02:04:32
what is, what is assembly? Why is it beautiful?

02:04:31 --> 02:04:35
Why is it challenging? How does it work?

02:04:34 --> 02:04:39
- So when you write assembly code, you write this using the instructions the

02:04:38 --> 02:04:43
actual processor is using directly. So most of the time you would

02:04:42 --> 02:04:47
write in a language, let's take C as a good example. The compiler would use that to

02:04:46 --> 02:04:50
create assembly language and machine code

02:04:49 --> 02:04:53
instructions for you based off your C code.

02:04:53 --> 02:04:58
And there's a specific flavor of assembly that we use in FFmpeg that's called

02:04:57 --> 02:05:03
SIMD, SIMD, single instruction, multiple data. So this means, for example,

02:05:03 --> 02:05:08
say I want to add five to a number in

02:05:07 --> 02:05:12
scalar assembly, so this is what's known as you work on an individual element.

02:05:11 --> 02:05:15
So I wanna have a number of-- I have the number ten and I want to add five. I use the add

02:05:14 --> 02:05:21
instruction, and I add five to ten, and I get 15. With SIMD, with

02:05:20 --> 02:05:25
SIMD, I can have a whole vector of 16 different numbers. They could all be different.

02:05:25 --> 02:05:29
If I want to add five to that, I can run one instruction,

02:05:29 --> 02:05:36
and that one instruction sums all 16 elements. And that, as you can

02:05:35 --> 02:05:40
imagine, lends itself very well to video. Video

02:05:39 --> 02:05:44
is, you know, pixel grid, so I can perform operations on

02:05:43 --> 02:05:47
multiple pixels at the same time. The key thing that we do differently in

02:05:46 --> 02:05:51
FFmpeg is we don't use any abstractions or any major

02:05:50 --> 02:05:55
abstractions on top of that. So there's a part of the world that uses what's

02:05:54 --> 02:05:58
known as intrinsics. So these are C functions that behave very

02:05:57 --> 02:06:02
similarly but not quite the same to writing assembly by hand.

02:06:02 --> 02:06:06
So the registers that data is stored in

02:06:06 --> 02:06:10
on the CPU, the compiler allocates those for you.

02:06:10 --> 02:06:14
And so the key thing to understand was when we write SIMD is we have

02:06:13 --> 02:06:21
a 10x, and not percentage, 10x to 50x speed improvement. That, that function is

02:06:20 --> 02:06:22
62x, um—

02:06:21 --> 02:06:23
- That's nuts.

02:06:22 --> 02:06:27
- ... on the FFmpeg account, as you know, posts and tweets a lot about that to try and say,

02:06:26 --> 02:06:29
"Hey, we are doing this stuff."

02:06:29 --> 02:06:33
- You are a person who sees the beauty in assembly, but it's also

02:06:32 --> 02:06:36
extremely useful for these kinds of application to actually-

02:06:35 --> 02:06:41
... significantly outperform even C, which is crazy.

02:06:40 --> 02:06:46
- It is necessary. Right? Because, like, one of the projects that we need to talk

02:06:45 --> 02:06:54
about is called dav1d, right? So dav1d is a decoder for the format that was done by

02:06:53 --> 02:06:58
Alliance for Open Media which is an, a video decoder called AV1.

02:06:58 --> 02:07:02
- So if, for people who don't know, we've been talking about H.264.

02:07:02 --> 02:07:11
AV1 is another hugely popular standard and codec that is increasingly taking

02:07:10 --> 02:07:13
over the internet.

02:07:12 --> 02:07:17
- And when this format was launched many people said, especially

02:07:16 --> 02:07:21
even from the Alliance for Open Media, right, which is Google, Netflix, Amazon,

02:07:20 --> 02:07:25
uh, Mozilla, say, "Well, this format is so complex, it must be

02:07:24 --> 02:07:29
done in hardware to do decoding," right? And well, I

02:07:28 --> 02:07:33
arrived with a few other people mostly

02:07:32 --> 02:07:37
Ronald Henrik, and Martin, and we said, "We need to have an

02:07:36 --> 02:07:41
extremely good software decoder because it's going to take

02:07:40 --> 02:07:48
time to have hardware." And so we wrote this project, which is beyond insane. We are

02:07:47 --> 02:07:57
talking about 30,000 line of C, but 240,000 lines of handwritten Assembly, right?

02:07:56 --> 02:08:02
- Handwritten Assembly, 240,000 lines.

02:08:02 --> 02:08:06
That's incredible. That mean-- I mean, some of the stuff we're talking about is probably the

02:08:05 --> 02:08:10
biggest Assembly code bases.

02:08:09 --> 02:08:14
- To give you an idea, and Kieran can correct me, but I think the FFmpeg has

02:08:14 --> 02:08:18
100,000 lines of Assembly for all the codecs.

02:08:17 --> 02:08:18
- For all codecs. Mm-hmm.

02:08:17 --> 02:08:25
- And just this one has 240,000. It's a VideoLAN project, of course. And

02:08:24 --> 02:08:29
it is optimized at the maximum because the

02:08:28 --> 02:08:33
motto when we're starting the project is every cycle

02:08:32 --> 02:08:37
matters, right? Every cycle matters because David is

02:08:36 --> 02:08:41
used in VLC and in some software AV1 playback stacks.

02:08:40 --> 02:08:45
We are talking about probably 3 billion devices which

02:08:44 --> 02:08:49
are going to decode video nonstop because, for example, 30% of the

02:08:48 --> 02:08:53
video from Netflix are now in AV1, 50% of YouTube,

02:08:52 --> 02:08:57
right? So, and you often don't have a hardware decoder because not

02:08:56 --> 02:09:01
many devices have a hardware decoder. And with dav1d, we realized that

02:09:00 --> 02:09:08
with one or two cores you were able to decode 720p correctly. So it is—literally—

02:09:08 --> 02:09:09
- Yeah, that's dav1d

02:09:08 --> 02:09:10
- ... incredible, right?

02:09:09 --> 02:09:11
- That's dav1d. Look at that Lex.

02:09:10 --> 02:09:15
- Uh, yeah, so this is another spicy tweet from

02:09:14 --> 02:09:21
you. This is what peak video codec should look like, 79.9% assembly—

02:09:20 --> 02:09:21
- That's almost

02:09:20 --> 02:09:26
- ... 19.6% C and 0.5% other.

02:09:25 --> 02:09:31
- And what's incredible is with those tweets, which is factual, people get

02:09:31 --> 02:09:34
crazy. They are unhappy, right? They say-

02:09:33 --> 02:09:38
For a year, for the last two years they go crazy, "No, intrinsics is fine. The compiler is..." Oh, they

02:09:37 --> 02:09:38
go, "I have never-"

02:09:37 --> 02:09:42
- "You can optimize your compiler, auto-vectorization, it's your fault, you don't

02:09:41 --> 02:09:45
understand." And we've tried that forever, right?

02:09:44 --> 02:09:49
- For two years, and two years later, showing hundreds of examples

02:09:49 --> 02:09:53
of handwritten assembly. "No, no, no, you're doing it wrong. The compiler can do this."

02:09:52 --> 02:09:57
- So we should actually just articulate a little clearer. So the intuition there from the

02:09:56 --> 02:10:01
software engineering folks, when you have code like... Okay, let's just take an

02:10:00 --> 02:10:06
example, C++. There's a compiler that's doing a lot of the optimization.

02:10:05 --> 02:10:07
- Yes.

02:10:06 --> 02:10:11
- And the presumption is if you have a good enough compiler, if you continue to

02:10:10 --> 02:10:14
improve the compiler, you're going to generate code-

02:10:13 --> 02:10:19
... that can perform like optimal performance. You cannot possibly beat it.

02:10:18 --> 02:10:19
- Yeah. Yes.

02:10:18 --> 02:10:22
- And you're consistently challenging that thought that if you do-

02:10:21 --> 02:10:23
By orders of magnitude

02:10:22 --> 02:10:27
- ... by orders of magnitude- ... handcrafted assembly can outperform C.

02:10:27 --> 02:10:32
- The two things that they tell us is, yeah, but modern compilers

02:10:31 --> 02:10:35
have auto-vectorization, right? Because SIMD that we're doing is

02:10:34 --> 02:10:39
vectorization. And like it's not even close, right?

02:10:38 --> 02:10:42
It's not even close, right? It's not like 5%, 10% slower.

02:10:41 --> 02:10:44
It's multiple times slower.

02:10:43 --> 02:10:48
- So can we... I don't know if you can say something philosophically, because there's a lot of great software engineers, great engineers, great machine learning

02:10:51 --> 02:10:56
people. Karpathy will listen to this and say, "What's the intuition he's

02:10:55 --> 02:10:58
upposed to get from this? What are we supposed to..."

02:10:57 --> 02:11:02
- Karpathy learnt assembly because of the tweets by the way. I just... He start- He went, he's like, "Oh, I

02:11:01 --> 02:11:02
think this is a movement."

02:11:01 --> 02:11:03
- He's like, "Let me figure out what's happening here."

02:11:02 --> 02:11:06
- No, no, he, and you know the way he documents his work and so.

02:11:05 --> 02:11:10
- Philosophically, what's important to realize is that we

02:11:09 --> 02:11:14
passed the time where hardware was going so much faster, right?

02:11:13 --> 02:11:18
We are at the end of Moore's law. We have limitation for for AI,

02:11:17 --> 02:11:22
for memory. You need to go down in the stack and optimize

02:11:21 --> 02:11:25
more to get more power from what you have, because our

02:11:25 --> 02:11:30
equest for power, CPU power, GPU power

02:11:29 --> 02:11:36
are exploding while the hardware is not exploding in speed, right?

02:11:35 --> 02:11:40
So you- what people do is that they add more cores, right? But that's basically

02:11:39 --> 02:11:44
like at some point you can add 250 cores, right? So what we

02:11:43 --> 02:11:47
do is to take every inch of the machine.

02:11:46 --> 02:11:51
- Not just that, not just that. We abuse the machine. We go and use, we

02:11:50 --> 02:11:53
use the machine in ways that the,

02:11:53 --> 02:11:58
that the creator didn't expect. Sometimes we use an instruction that's completely unrelated to

02:11:57 --> 02:12:02
what we do. We use a cryptography instruction in video processing to do nothing

02:12:01 --> 02:12:02
related.

02:12:01 --> 02:12:06
- And one of other things that we do, for example in dav1d, which is a bit

02:12:05 --> 02:12:10
crazy, is that we don't use the function

02:12:10 --> 02:12:14
calling convention from the operating system.

02:12:13 --> 02:12:15
- We should explain that.

02:12:14 --> 02:12:16
- That is extremely-

02:12:15 --> 02:12:20
... complex. But basically, usually when you do move from one function in,

02:12:19 --> 02:12:24
in code to another, there is a way to save the registers, the

02:12:23 --> 02:12:29
state of the CPU to enter another function. And this is like standard.

02:12:28 --> 02:12:31
- It's a bit complex. I would simplify this a bit. So,

02:12:31 --> 02:12:36
so dav1d does things to abuse the calling convention. You could define the calling

02:12:35 --> 02:12:37
convention as

02:12:36 --> 02:12:41
I've written a function and I want to call another function. How is the data

02:12:40 --> 02:12:45
shared between the functions? Because there's a convention, what's known as a calling

02:12:44 --> 02:12:50
convention, and what dav1d does for optimal reasons is

02:12:49 --> 02:12:54
create its own calling convention sometimes. So if I wanna call Lex

02:12:53 --> 02:12:58
Fridman's library, we got, we've got to agree on a convention so that I can share

02:12:57 --> 02:13:02
data with you in the assembly language space. And one of the challenges

02:13:01 --> 02:13:06
in assembly is every operating s- well, not every operating system, but there are, well, at least

02:13:05 --> 02:13:09
four that I can think of on x86, Linux 32-bit, Windows

02:13:08 --> 02:13:13
64, Linux 64. They all have their own calling

02:13:12 --> 02:13:17
conventions. And so one of the amazing things Loren Merritt did, who we talked about

02:13:16 --> 02:13:21
before, was create a very lightweight abstraction layer, so you could write your

02:13:20 --> 02:13:24
assembly code once and it handled all the calling convention stuff for you,

02:13:25 --> 02:13:30
which was always a problem because you had to manage four different variants. But

02:13:29 --> 02:13:35
dav1d takes this even further, for speed reasons it does its own calling convention,

02:13:34 --> 02:13:39
within itself to bypass the kind of rules, the rules

02:13:38 --> 02:13:43
of, the rules of sort of functions and say, "Okay, actually I'm gonna call a function this

02:13:42 --> 02:13:45
way because I know it's within my library."

02:13:45 --> 02:13:49
- Does it have to be special to every single operating system?

02:13:48 --> 02:13:51
- Well, if it's custom, no. But the, the, the challenge is

02:13:51 --> 02:13:56
in general, yes, and in terms of, in terms of each instruction set. So the

02:13:55 --> 02:14:00
thing to also emphasize is we do this on every instruction set. So every

02:13:59 --> 02:14:04
instruction set has its own handwritten assembly, which is even more crazy. And

02:14:03 --> 02:14:08
that, that, that matrix has got bigger in recent years because

02:14:07 --> 02:14:15
of RISC-V, because of ARM64, because of the new SVE. There's SME. x86 has

02:14:14 --> 02:14:19
AVX-512, AVX. So we do runtime

02:14:18 --> 02:14:23
processor detection. We see what the machine FFmpeg is running on or dav1d's

02:14:22 --> 02:14:27
running on is capable of, because you could be on a laptop from 2008

02:14:26 --> 02:14:32
where this isn't there. Runtime detection, we set function pointers accordingly.

02:14:31 --> 02:14:35
And then from then on, off you go.

02:14:34 --> 02:14:36
- Or you could be on a machine with RISC-V.

02:14:36 --> 02:14:40
- Yes. And in all that, we don't even respect the calling

02:14:39 --> 02:14:44
convention of the operating system in order to be faster, because we know that

02:14:44 --> 02:14:48
we are going to be called from within our binary, so we can share data

02:14:47 --> 02:14:52
without saving all the registers in the common way, because that can lead

02:14:51 --> 02:14:56
to loading and saving registers on the L1 and

02:14:55 --> 02:15:03
L2 CPU and gets us faster. So that's why I said that understanding CPU architecture,

02:15:03 --> 02:15:08
computer architecture is key. And this is also why it's handwritten. I don't know

02:15:07 --> 02:15:11
anyone, I've never heard any other project than dav1d doing that. This

02:15:11 --> 02:15:15
why Kieran calls it, calls it an art, right? It is an art.

02:15:14 --> 02:15:19
- I think in a mass world, there isn't something on billions of devices.

02:15:18 --> 02:15:23
I know there are some specialist industries. I know in high-frequency trading, they take this

02:15:22 --> 02:15:26
really seriously, where they're receiving feeds from a market, and they need to react

02:15:26 --> 02:15:30
within X number of microseconds, and so the instructions matter. But that's not

02:15:30 --> 02:15:34
a mass, you know, a mass-produced thing that's on a billion devices. That's

02:15:33 --> 02:15:38
hyper-specialized, running on hyper-specialized hardware. We're running on

02:15:37 --> 02:15:39
all hardware from-

02:15:39 --> 02:15:43
Sorry to linger on it, but, like, that's a really

02:15:42 --> 02:15:45
counterintuitive, almost, like, revolutionary

02:15:46 --> 02:15:51
idea here, that there's a huge amount of value to assembly.

02:15:50 --> 02:15:55
Like, what are we supposed to take away from that? Like, what... You know, there's a bunch of people listening

02:15:54 --> 02:15:59
to this, they're basically like, sorry, for myself

02:15:58 --> 02:16:02
included, you know, I programmed for many, many years in C/C++,

02:16:02 --> 02:16:07
going up the standards of C++, fell in love with C++, even meta programming and so

02:16:06 --> 02:16:11
n, and then transitioned more and more because of machine learning about 15

02:16:10 --> 02:16:16
years ago to Python. And so, like, for me in this Python world, JavaScript

02:16:15 --> 02:16:20
world, now vibe coding, where I'm just using natural

02:16:19 --> 02:16:24
anguage, sitting in my jacuzzi, drinking a drink... and just talking to the computer,

02:16:24 --> 02:16:29
re- like, like record stops. Why is the value

02:16:28 --> 02:16:32
to go back all the way down to the low level? Like, what's the intuition?

02:16:31 --> 02:16:36
- Because you can get more power per dollar

02:16:35 --> 02:16:39
invested, right? And sometimes it's going to be a

02:16:38 --> 02:16:41
problem that is limited by your hardware.

02:16:41 --> 02:16:46
A good analogy is what you see in quantization

02:16:45 --> 02:16:50
in LLMs, right? And people are doing, "Oh, I'm going to do that in FP8

02:16:49 --> 02:16:55
or FP4 or some crazy things like Microsoft Phi, who did it in 1.5,"

02:16:55 --> 02:17:00
because you're constrained by memory, because you're constrained by the machine you

02:16:59 --> 02:17:04
can run. Because at some point we are doing real time,

02:17:03 --> 02:17:08
and I believe this is going to happen on AI inference also, is that at

02:17:07 --> 02:17:11
some point you need to get faster, and you cannot always get harder,

02:17:11 --> 02:17:15
More powerful hardware, right? So you need to

02:17:14 --> 02:17:19
analyze code and see where, like, where is the

02:17:18 --> 02:17:22
mission critical, where is the things that are called nonstops. And

02:17:22 --> 02:17:26
for example, dav1d is a good example. It's going to be run

02:17:26 --> 02:17:29
billions of hours per day.

02:17:28 --> 02:17:34
That makes sense. It doesn't make sense to be on the glue of FFmpeg-

02:17:33 --> 02:17:34
No

02:17:33 --> 02:17:36
- ... uh, CLI. It makes sense over there.

02:17:35 --> 02:17:40
- Yeah, and this has to do, also we'll talk about it more, but your new effort, your

02:17:39 --> 02:17:44
new company, Kyber, is doing that kind of thing for

02:17:43 --> 02:17:48
ultra-low latency, so the slogan being, "Every millisecond counts." And

02:17:47 --> 02:17:53
when you actually extremely highly constrained in some dimension-

02:17:53 --> 02:17:56
We are also arriving at a point where we've done

02:17:57 --> 02:18:02
so many great things, but the hardware is getting back to us, right? Because

02:18:01 --> 02:18:06
cost is increasing, because we need more power, and so you're

02:18:05 --> 02:18:10
limited by either your CPU, your RAM, or your

02:18:09 --> 02:18:13
networking, and you need to optimize, and this is where

02:18:13 --> 02:18:18
value is going to be. Especially because, like, doing AI is going to help

02:18:17 --> 02:18:21
do the programming of, like, business, right? And so

02:18:21 --> 02:18:26
the core thing that you will not be able to vibe

02:18:25 --> 02:18:31
code are optimization for the hardware to be as fast as is possible.

02:18:31 --> 02:18:34
- I'd love to talk to you about who and how

02:18:34 --> 02:18:39
should learn assembly, but first, I think we need a bathroom break.

02:18:39 --> 02:18:44
Quick ten-second thank you to our sponsors. Check them out in the description. It really

02:18:43 --> 02:18:50
is the best way to support this podcast. Go to lexfridman.com/sponsors. And now back

02:18:49 --> 02:18:56
to the episode. All right, and we're back. There's this nice repo with the

02:18:55 --> 02:19:00
assembly lessons. First of all, do you think developers should

02:18:59 --> 02:19:05
learn how to program in assembly, and how would you go about learning it? What is

02:19:05 --> 02:19:08
this asm-lessons?

02:19:08 --> 02:19:12
- So I personally wasn't happy with the way

02:19:11 --> 02:19:16
assembly is taught in books and online, 'cause it's very

02:19:15 --> 02:19:19
grammar-focused, and you don't, in general, learn a language from

02:19:20 --> 02:19:24
learning the grammar and the structure. You learn a language by

02:19:24 --> 02:19:28
asking someone what their name is, and you start from there, and you go and solve real problems,

02:19:28 --> 02:19:32
That you have when you want to communicate. You don't learn sentence

02:19:32 --> 02:19:36
structure, and this is the interrogative and the adverb, and all, all the assembly books seem to be

02:19:35 --> 02:19:40
doing like that, going through every instruction, even ones that aren't really relevant,

02:19:40 --> 02:19:44
explaining what they all do and how they... It, it actually doesn't really change much.

02:19:43 --> 02:19:44
So,

02:19:44 --> 02:19:49
and the other problem that we have in our community is assembly is taught sort of hand to hand,

02:19:49 --> 02:19:54
like person to person, like blacksmithing one by one. That's, that's the only logical

02:19:53 --> 02:19:58
sort of analogy, and that doesn't really scale online. It doesn't

02:19:57 --> 02:20:01
do other things. So this... I've started a set of assembly

02:20:00 --> 02:20:05
lessons in the, in the way it's done in FFmpeg, which is a little bit different to the

02:20:04 --> 02:20:08
way assembly in general

02:20:08 --> 02:20:12
for... I don't know. I'm trying to think the other good big use case of assembly is in

02:20:11 --> 02:20:16
embedded devices, in really low power, cheap devices, and that's

02:20:15 --> 02:20:17
completely different to what we're doing here.

02:20:17 --> 02:20:21
I think it would be good if you could highlight the requirements, which are quite simple.

02:20:20 --> 02:20:25
It's high school mathematics and C. And actually not even C, really, really

02:20:24 --> 02:20:29
it's pointers. To emphasize, yes, we've talked about how brilliant this stuff is,

02:20:28 --> 02:20:32
but high schoolers like Daniel Kang have written

02:20:33 --> 02:20:38
assembly in FFmpeg. I think there's been contributions because of these lessons.

02:20:38 --> 02:20:39
So it's really about

02:20:40 --> 02:20:44
rying to get this dying art to continue, because we've shown it's

02:20:43 --> 02:20:47
possible with dav1d to produce something amazing.

02:20:46 --> 02:20:50
There's still a lot of codecs in FFmpeg that are only maybe partially

02:20:49 --> 02:20:53
assembly optimized.

02:20:53 --> 02:20:58
And so it really, it really starts with basics and continues, explains a lot of the jargon, a lot of

02:20:57 --> 02:21:02
the syntax. It doesn't really try and explain to you, you

02:21:01 --> 02:21:06
know interrupt handlers and interrupt instructions and all of these

02:21:05 --> 02:21:09
different jump targets actually makes this really vector focused.

02:21:08 --> 02:21:14
- And describes all kinds of registers: general purpose registers, vector registers,

02:21:15 --> 02:21:19
Really nice examples. Oh, this is cool.

02:21:18 --> 02:21:21
- It's a classic, yeah, it's a classic example of FFmpeg. But

02:21:21 --> 02:21:26
some of this assembly language is really beautiful, and I think it's beautiful

02:21:25 --> 02:21:28
because it's kind of like flying a Spitfire. It's

02:21:27 --> 02:21:32
really aviation at its purest, but also

02:21:31 --> 02:21:36
pushing the aircraft beyond what the designer thought was

02:21:35 --> 02:21:40
possible. So we're abusing, for example, sometimes cryptography instructions to

02:21:39 --> 02:21:44
do certain things, and there's a level of beauty and art where

02:21:43 --> 02:21:51
it's really you and the processor. There's nothing in between. It's you and the

02:21:50 --> 02:21:54
joystick of the cockpit, and you move that joystick, and it's physically connected to the

02:21:53 --> 02:21:59
ailerons, and you can push that plane beyond what it can normally do, and there's a

02:21:58 --> 02:22:05
level of, yeah, beauty and amazingness to go that. But I don't think

02:22:05 --> 02:22:10
the sort of person-by-person assembly that is... someone taught me, and I've taught multiple people,

02:22:09 --> 02:22:13
is gonna work long run

02:22:13 --> 02:22:17
just because of the particular flavor and the way that we do it.

02:22:16 --> 02:22:21
- It's literally no, I should... I was gonna say

02:22:20 --> 02:22:24
wizards handing it down. Um, I realize I look like a wizard-

02:22:23 --> 02:22:28
... wearing this hat. But you're basically just like the sages, the wise

02:22:27 --> 02:22:32
sages handing- ... down the craft. Can I ask you about LLMs? Like-

02:22:31 --> 02:22:33
... can they help?

02:22:32 --> 02:22:37
- They had more of an understanding than I expected, but they are still...

02:22:36 --> 02:22:39
I've asked it questions, and it still goes and

02:22:39 --> 02:22:44
starts hallucinat- not hallucinating, but making modifications, and then I go,

02:22:43 --> 02:22:48
"Is it bit exact?" "No." "Fix it." And then it just goes and does the same thing, and

02:22:47 --> 02:22:52
it's going, it... There isn't the corpus of information like Stack

02:22:51 --> 02:22:53
Overflow to work on.

02:22:52 --> 02:22:56
- There is not enough data to train on.

02:22:55 --> 02:23:00
And this is the biggest issue. Um, I started my career

02:22:59 --> 02:23:04
actually doing some assembly for Itanium,

02:23:03 --> 02:23:08
right? So the Itanium is a dead processor type, right, which was done

02:23:07 --> 02:23:12
by Intel and HP a long time ago when they wanted to do 64 bits.

02:23:11 --> 02:23:16
Well, they lost, and then we got AMD, who did it, AMD

02:23:15 --> 02:23:20
64, which became x86-64. But Itanium was

02:23:19 --> 02:23:24
extremely interesting in the sense that those were

02:23:23 --> 02:23:27
processors who had a ton of computing power to do floats,

02:23:27 --> 02:23:32
FMAs, which is similar to what we need now for, for LLMs, right?

02:23:31 --> 02:23:35
And you could pack three operations per

02:23:35 --> 02:23:39
line that could be loaded. So basically, you had an output

02:23:38 --> 02:23:43
of basically six billion of operation per second,

02:23:42 --> 02:23:47
but the bus, the memory bus only allowed

02:23:46 --> 02:23:51
1.5, right? So your, your CPU was four times faster, so

02:23:50 --> 02:23:55
you had to do crazy things to, to pack things in memory or

02:23:54 --> 02:23:59
euse the registers, and those type of semantics, no language

02:23:58 --> 02:24:03
could do that, right? So like I have

02:24:02 --> 02:24:07
the Itanium programming book because Intel did amazing books,

02:24:06 --> 02:24:10
but that's exactly what Kieran says. If you don't know what you're,

02:24:10 --> 02:24:15
you're going to do, it's impossible to read, right? It's a ton of jargon and

02:24:14 --> 02:24:17
so on. While those lessons

02:24:17 --> 02:24:22
are amazing because they are targeted to a real problem, and you can do it yourself.

02:24:21 --> 02:24:26
- And people have. People have. There are patches, and they said, "Oh, I studied your lessons, and here's my first

02:24:25 --> 02:24:27
changes."

02:24:26 --> 02:24:27
- That's amazing.

02:24:27 --> 02:24:31
- And part of that in the lessons is a framework called

02:24:31 --> 02:24:36
x86inc, written by Loren when, when he was working

02:24:35 --> 02:24:39
on x264, and it allows you to do more things about

02:24:39 --> 02:24:43
hat to create a type of like not caring too much about

02:24:42 --> 02:24:48
different calling convention. And we had a lot of students who,

02:24:48 --> 02:24:53
Gave code to x264 using that a long time ago, right?

02:24:52 --> 02:24:56
So it's really doable, and I believe it's

02:24:56 --> 02:25:01
necessary to understand assembly language, even if

02:25:00 --> 02:25:05
you don't do it much, to understand what's going on inside your computer,

02:25:04 --> 02:25:09
and that will make you a better programmer. And I assure you that

02:25:08 --> 02:25:13
because doing that, you will understand some of the architecture of the memory

02:25:12 --> 02:25:17
inside your computer, right? Understanding register, L1, L2,

02:25:16 --> 02:25:20
L3, RAM, SSD, disk, and so on,

02:25:20 --> 02:25:25
which are very important because then you have a good

02:25:24 --> 02:25:27
programming culture that will make you a better programmer.

02:25:27 --> 02:25:31
- Uh, what do you think about the Rust programming language? 'Cause that's a bit of a meme.

02:25:31 --> 02:25:34
- We have very different opinions with Kieran.

02:25:33 --> 02:25:38
- I think it's valuable what they're doing in terms of memory safety as a concept.

02:25:37 --> 02:25:42
- Can it achieve some of the speed up that assembly achieves?

02:25:42 --> 02:25:46
- Oh, not assembly by hand, no. I think that that's a given. C potentially,

02:25:46 --> 02:25:50
but I see it very... It has a very big Esperanto vibe

02:25:49 --> 02:25:54
about it. It's like we're gonna solve this, and we're doing this in a particular

02:25:53 --> 02:25:55
way.

02:25:54 --> 02:25:57
- Meaning it's a bit too utopian?

02:25:56 --> 02:26:01
- There's a lot of focus on the self-importance rather than solving real-world problems.

02:26:00 --> 02:26:05
It reminds me of the Sinclair C5. Sir Clive Sinclair of Sinclair

02:26:04 --> 02:26:09
Computers built a car, and he said, "Oh, everyone will be traveling around

02:26:08 --> 02:26:15
in one of these electric cars." And it was... Rust reminds me of that, where

02:26:15 --> 02:26:20
I think the community doesn't quite understand that

02:26:19 --> 02:26:23
in order to get people to move, you have to build something that's as good as, if not

02:26:22 --> 02:26:29
better than what you have now. Yes, people are doing Rust rewrites, but if they're,

02:26:29 --> 02:26:34
if they only do 85, 90% of the feature set

02:26:33 --> 02:26:37
of what we need, like things like coreutils, that last

02:26:36 --> 02:26:41
1% takes 99% of the time. To use

02:26:40 --> 02:26:45
Elon's famous quote, "Prototypes are easy." Like this kind of stuff is easy. But this, to get

02:26:44 --> 02:26:49
a real electric car, you have to make a car as good as, if not better than what we have now, and

02:26:48 --> 02:26:53
Rust isn't in that stage yet. I don't think anyone would

02:26:52 --> 02:26:57
object to seeing Rust code in FFmpeg,

02:26:56 --> 02:27:01
but it needs to work as well and support the same unit testing as everything

02:27:00 --> 02:27:05
else. It needs to be flawless. It can't just randomly break. They can't just randomly

02:27:04 --> 02:27:09
break ABI when they want to. It needs to have, I think,

02:27:08 --> 02:27:12
more-- I think it still has only one compiler implementation.

02:27:12 --> 02:27:18
So it, it's got to be as good as, if not better, and saying, "Hey, here's

02:27:17 --> 02:27:22
my utopia of memory safety," isn't enough, even though we

02:27:21 --> 02:27:24
probably all agree that that's the goal.

02:27:24 --> 02:27:29
- So I've done a ton of Rust, and the two major

02:27:28 --> 02:27:32
topics I had was adding Rust modules inside VLC.

02:27:32 --> 02:27:37
One of the reasons VLC got popular and which was one of the main

02:27:36 --> 02:27:41
architectural decision, is that VLC is a very small core and a

02:27:40 --> 02:27:44
ton of modules, right? And so you can write modules in C, in

02:27:45 --> 02:27:50
C++, in Objective-C, and anything that is basically interoperable

02:27:49 --> 02:27:54
with C. And so we did some Rust

02:27:53 --> 02:27:58
modules, and so I have experience on that, and I wrote some of it. And also,

02:27:57 --> 02:28:01
like, my new startup called Kyber, is an open source project

02:28:01 --> 02:28:08
mainly done in Rust. What Rust is extremely good in, in the

02:28:07 --> 02:28:14
sense that it's a better C++ that cares about memory and allows you to do

02:28:13 --> 02:28:19
things about memory ownership that no one else can do so far.

02:28:19 --> 02:28:24
However, it's great when you start a new project from scratch, and you

02:28:23 --> 02:28:28
do everything in Rust. But it's very not good when

02:28:27 --> 02:28:32
you interop with existing part. And some part of the Rust

02:28:31 --> 02:28:36
community believes that they need to rewrite everything, and everything will be better with

02:28:35 --> 02:28:41
Rust. And the answer is like, no. Like, I'm almost always, in all my

02:28:41 --> 02:28:48
ears of being engineer, manager, CTO of startup and so on, don't rewrite, right?

02:28:47 --> 02:28:52
- Is that-- That's the initial instinct for a lot of people when they

02:28:51 --> 02:28:56
show up to a code base probably before LLMs, is

02:28:55 --> 02:28:59
like probably because they don't understand

02:28:59 --> 02:29:04
the wisdom of the way things have been done in the past. They say, "Well, we need to

02:29:03 --> 02:29:07
rewrite it." Hence why there's a thousand JavaScript frameworks.

02:29:06 --> 02:29:09
- But the reason is the following,

02:29:09 --> 02:29:13
and this is very important to understand. It is an order of

02:29:12 --> 02:29:17
magnitude easier to write code than read code.

02:29:17 --> 02:29:23
And you see that also with LLM. They can write code, but analyzing is a lot-

02:29:22 --> 02:29:27
... more difficult. And so when you arrive and when

02:29:26 --> 02:29:31
you arrive to a very complex piece of code, right? You don't understand

02:29:30 --> 02:29:35
it, right? Because it's so much more effort to understand the code

02:29:34 --> 02:29:39
from someone else because you don't have the thought process. Um,

02:29:38 --> 02:29:43
And often I joke about some languages

02:29:42 --> 02:29:47
mostly Perl, for example which has very complex

02:29:46 --> 02:29:50
syntax. And imagine I am at my maximum

02:29:49 --> 02:29:53
intellectual efficiency in programming, right?

02:29:53 --> 02:29:57
And I write the best code ever. I will not be able to understand

02:29:56 --> 02:30:03
myself six months later, right? Because reading code is more difficult. So

02:30:02 --> 02:30:07
very often you arrive, you don't understand all the wisdom, all the business logic,

02:30:06 --> 02:30:11
the reasons that were done that is maybe not documented. And you say, "Well,

02:30:10 --> 02:30:15
I'm going to write it." And the thing is, no, you don't, right?

02:30:14 --> 02:30:19
Because that's, as Kieran said, right? I'm going to rewrite coreutils in Rust. And

02:30:18 --> 02:30:22
then, of course, you arrive very quickly at eighty percent

02:30:22 --> 02:30:27
hen ninety percent, takes a bit more time, and then you got the last ones, right?

02:30:27 --> 02:30:32
On the other side, right? So for new projects, it's great. Everything related

02:30:31 --> 02:30:36
to parsing files networking because of the

02:30:35 --> 02:30:40
memory checker, boundary checker, it's amazing, and there is nothing else.

02:30:40 --> 02:30:44
To answer a bit differently for us,

02:30:44 --> 02:30:49
imagine I take a piece of software like dav1d or

02:30:48 --> 02:30:53
x264, right? Which has a ton of runtime in assembly, right?

02:30:52 --> 02:30:57
Um, I rewrite the C part in Rust, right? So it's more secure.

02:30:56 --> 02:31:01
Yes. But then you arrive into the assembly, and you can jump

02:31:00 --> 02:31:05
anywhere in the memory because we are doing handwritten assembly. So

02:31:04 --> 02:31:09
even if I rewrite the C part in Rust, for security

02:31:08 --> 02:31:13
reason, you break all the security when you

02:31:12 --> 02:31:16
write handwritten assembly because we can jump anywhere.

02:31:16 --> 02:31:20
So in my opinion, we need to do something that is

02:31:20 --> 02:31:25
ecure assembly, right? So which is compile time, check the

02:31:24 --> 02:31:28
assembly, which is similar to the checkasm projects that we're

02:31:28 --> 02:31:36
doing on dav1d and x264 with VideoLAN, is to start instrumenting your

02:31:35 --> 02:31:40
assembly at compile time to check that it's not jumping anywhere in the memory.

02:31:39 --> 02:31:44
Because else you might rewrite a part of C in Rust, but if

02:31:43 --> 02:31:48
you want to have the same performances, you're going to have inline assembly, and so you destroy your whole

02:31:47 --> 02:31:51
security model. So that's a bit what I think about Rust.

02:31:51 --> 02:31:55
- No, I just wanna... I would say on a personal level, I'm so in awe

02:31:55 --> 02:31:57
about assembly. I actually--

02:31:58 --> 02:32:02
Once in a... It never gets old, the speed improvements to show sixty-two

02:32:02 --> 02:32:06
x. So there are months, on a personal level, I run

02:32:05 --> 02:32:11
our internal test suite at work and just see I'm still in awe at the gains we have.

02:32:10 --> 02:32:15
- Well, there's a source of joy and happiness with programming for different reasons.

02:32:15 --> 02:32:21
But I think one of the greatest happinesses is in the optimization of code.

02:32:21 --> 02:32:25
And it sounds like you're, like, at the cutting edge of that.

02:32:24 --> 02:32:26
- I was like, "Whoa, that was cool."

02:32:25 --> 02:32:30
- And in the community, I want to speak about two people who are

02:32:30 --> 02:32:35
wizards of assembly, right? The two of them are actually working

02:32:34 --> 02:32:41
living in north of Europe Sweden and Finland. And

02:32:42 --> 02:32:51
Henrik Gramner knows so much about Intel x86 assembly that when we ask questions at

02:32:50 --> 02:32:55
Intel about things, they tell, like, "Why are you asking us, Intel?

02:32:54 --> 02:32:59
You have Henrik. Henrik knows better." He knows all the cycles

02:32:58 --> 02:33:04
of almost all the SIMD instruction by all the CPU

02:33:03 --> 02:33:08
generation. "Oh, yes, this is a P4, this is a Nehalem, this is a Core 2," et cetera.

02:33:08 --> 02:33:13
That person is, like, the best person on assembly in the world.

02:33:12 --> 02:33:17
And he's the nicest person that you've seen,

02:33:16 --> 02:33:21
like, very... He arrives, you don't see he's

02:33:20 --> 02:33:24
amazing. And the other one is called Martin,

02:33:24 --> 02:33:28
Martin Storsjö, and he's-- they're doing mostly the same

02:33:28 --> 02:33:36
on Arm, right? So Neon, right? And iPhones and Androids and so on. And he codes in

02:33:35 --> 02:33:44
assembly on his phone, editing it with the crappy keyboard,

02:33:43 --> 02:33:48
like virtual keyboard you have while watching his kids

02:33:47 --> 02:33:52
play in the playground, right? Like, like this is just like

02:33:51 --> 02:33:55
wizard level. So those two people are like-

02:33:55 --> 02:34:00
Yes. So when you're programming assembly at

02:33:59 --> 02:34:04
hat high level, a part of that is knowing the architecture that you're programming on.

02:34:03 --> 02:34:05
- Yes. On Arm in particular, yes

02:34:04 --> 02:34:10
- ... Arm in particular. But x86, I mean, these are complicated architectures, right?

02:34:09 --> 02:34:14
- Yeah. But Arm in some ways is more com... x86 with,

02:34:13 --> 02:34:18
Out of order execution is not so bad. Arm, you really need to understand all the

02:34:17 --> 02:34:23
different generations of Arm processor because they're all different. There's A72,

02:34:22 --> 02:34:27
... et cetera, et cetera. And there's the Apple variant, there's this variant, there's that, and you need to write code that

02:34:26 --> 02:34:27
works

02:34:27 --> 02:34:32
efficiently on all of them. x86, well, broadly speaking, you have Intel, AMD, and you have

02:34:31 --> 02:34:36
sub-variants, but generally speaking, there's...

02:34:36 --> 02:34:40
Something fast is gonna remain fast on all of the variants, whereas in Arm it's a

02:34:39 --> 02:34:43
completely much more complicated ballgame.

02:34:43 --> 02:34:47
- We're taking a nonlinear journey through history here, but we're

02:34:46 --> 02:34:52
talking about Michael Niedermayer. And I wanted to ask

02:34:52 --> 02:35:01
about this. For a time there was a split in FFmpeg and Libav.

02:35:00 --> 02:35:09
- Yes. So in open source projects sometimes you disagree, right? Um-

02:35:10 --> 02:35:13
You have such a nice way of putting it, yeah.

02:35:12 --> 02:35:17
- And the good thing is because of the license, you're allowed to basically do your

02:35:16 --> 02:35:22
own, right? Um, and this is normal, and this has happened all the time, right? At a

02:35:21 --> 02:35:30
point there was a GCC at the time of GCC 2 and EGCS which became then GCC 3, right?

02:35:29 --> 02:35:34
There is what we told KHTML with WebKit, with Blink. Um,

02:35:34 --> 02:35:38
it is a same process. And also, like when I want to do a new

02:35:37 --> 02:35:42
feature today in VLC, I fork, I do my thing on my own, and then I merge

02:35:41 --> 02:35:46
back to the community. So there was a split in the open source community on

02:35:45 --> 02:35:50
FFmpeg, which become Libav and FFmpeg. And after a few years,

02:35:49 --> 02:35:54
well, the community merged back and people moved on. It's a bit, um,

02:35:54 --> 02:35:59
drama that is normal in open source community, but forks

02:35:58 --> 02:36:03
are even... They're important because they change the,

02:36:02 --> 02:36:06
the status quo of a community. Um

02:36:06 --> 02:36:11
not talking about FFmpeg and Libav here, but the, or the GCC

02:36:10 --> 02:36:14
fork made GCC a ton better because the, some

02:36:13 --> 02:36:18
people wanted to change the architecture fundamentally to make it

02:36:17 --> 02:36:22
faster. And of course, it's always question of people and

02:36:21 --> 02:36:26
so on, but in the end you realize that FFmpeg today is

02:36:25 --> 02:36:30
better than it was before the fork. And

02:36:29 --> 02:36:34
now, well, we're back all together, right? And I spent a

02:36:33 --> 02:36:37
lot of time, and, and Kieran can say in the, in, in the community.

02:36:37 --> 02:36:41
It's not often, to be honest, very

02:36:40 --> 02:36:45
well explained because a ton of the reasons are not very public.

02:36:45 --> 02:36:50
But I think that's, that's normal and that's good.

02:36:49 --> 02:36:54
- Yeah. I mean, you're making it sound really nice, but there is battle, there's pretty heated

02:36:53 --> 02:36:58
battles inside open source projects. I mean, it is a very passionate community and

02:36:57 --> 02:37:02
you're kind of in a distributed way have to define the direction of things.

02:37:01 --> 02:37:06
So here looking at Perplexity, "FFmpeg and Libav

02:37:05 --> 02:37:10
split in 2011 mainly over project governance, leadership style, and

02:37:09 --> 02:37:13
evelopment processes, not because of a fundamental technical disagreement.

02:37:13 --> 02:37:17
Uh, FFmpeg effectively absorbed Libav's work

02:37:17 --> 02:37:22
while Libav withered and most distributions and developers moved back to

02:37:21 --> 02:37:25
FFmpeg." Yeah, that was a, that was a weird experience 'cause, you know, I'm a Linux user,

02:37:24 --> 02:37:29
perspective, that was a weird experience 'cause, you know, I'm a Linux user,

02:37:29 --> 02:37:33
so, you know, whether it's Ubuntu and so on, all of a sudden, I think for, for a

02:37:33 --> 02:37:37
little bit, Ubuntu, I feel like, am I remembering

02:37:37 --> 02:37:40
correctly, switched to Libav and-

02:37:39 --> 02:37:42
12, 14, something like that. Yes. Something like that.

02:37:41 --> 02:37:45
- And then they switched back to FFmpeg. I was like, "What is happening?"

02:37:45 --> 02:37:50
So on the sort of you get to feel the ripple effects

02:37:49 --> 02:37:54
of the different internal debates that are happening.

02:37:53 --> 02:37:58
- To be fair, on Apple, when you type GCC, you get Clang. Like they, they did

02:37:57 --> 02:37:59
something like that as well, so.

02:37:58 --> 02:38:06
- Yeah. So, so to me it's like the fork was like heated drama, but most of the

02:38:05 --> 02:38:09
development from Libav was merged back into FFmpeg, right?

02:38:08 --> 02:38:13
So de facto FFmpeg got a a superset around

02:38:12 --> 02:38:17
Libav, and so that gave the user, because in the end we work the user, for the

02:38:16 --> 02:38:23
users, a, a larger set of features and a ton of things that were, um, discussed.

02:38:22 --> 02:38:27
For example, the debate on reviews, on, on how we push are

02:38:26 --> 02:38:33
something that now is completely settled in FFmpeg and is following what mostly what

02:38:33 --> 02:38:37
everyone in the community agrees, right? So de facto, everyone who

02:38:37 --> 02:38:41
was active on Libav came back in work on

02:38:40 --> 02:38:45
FFmpeg because the disagreements were fixed, and

02:38:44 --> 02:38:50
in the end, FFmpeg is stronger than it, it was before, right? And-

02:38:49 --> 02:38:52
... I know people love drama, but, um-

02:38:52 --> 02:38:57
Well, my main concern, I understand, and I think

02:38:56 --> 02:39:02
looking at the, the long history, it's all for the good.

02:39:02 --> 02:39:06
But I do... I am concerned because there's so few humans

02:39:06 --> 02:39:11
that are critical to the success of open source projects that I have seen it,

02:39:11 --> 02:39:16
Be a psychological toll on folks

02:39:16 --> 02:39:21
and, you know, sometimes leads to burnout. So you have these incredible people that are at

02:39:20 --> 02:39:25
he core of open source projects. There is a moment that happens

02:39:24 --> 02:39:29
'cause, like, what is the motivation of doing it? Ultimately, it's because you're passionate about it

02:39:28 --> 02:39:32
and it makes you happy. Then at a certain point, you wake up and it's like, "This's been a

02:39:32 --> 02:39:36
bit too much heat from the drama. So, like, at the, at

02:39:36 --> 02:39:41
he project level, the project continues and often flourishes.

02:39:40 --> 02:39:44
But sometimes there's these individual humans that are just like-

02:39:44 --> 02:39:45
But-

02:39:44 --> 02:39:45
... I've had enough.

02:39:45 --> 02:39:49
- Yeah, but it's not just about forks, right? So it's a g- very, uh-

02:39:48 --> 02:39:52
... what, what you, what you are referring to is

02:39:52 --> 02:39:56
one of the most challenging and most interesting part of open source

02:39:55 --> 02:40:00
today is maintainers burnout, right?

02:40:00 --> 02:40:05
And AI is a problem because of that. And Daniel

02:40:04 --> 02:40:09
Stenberg, which is the maintainer of curl who's probably one

02:40:08 --> 02:40:13
of the best promoter of open source in the world.

02:40:12 --> 02:40:17
He's, by the way, a member of the European Open Source Academy with me, so I'm

02:40:16 --> 02:40:21
very, like, humbled to be on the same community as him, right? He's against what

02:40:20 --> 02:40:28
he call AI slop, right? Because it gives a ton of, um fake reports or-

02:40:27 --> 02:40:32
... bad reports, bad patches, and then a lot of maintainers have

02:40:31 --> 02:40:40
a lot of burden to maintain the software. And this is straining the

02:40:39 --> 02:40:43
mine of open source developers much more than forks.

02:40:42 --> 02:40:47
Uh, and for example, the XZ fiasco was because there was

02:40:46 --> 02:40:51
one guy maintaining it, and he got basically hammered by two

02:40:50 --> 02:40:55
attackers who were asking him questions nonstop at weird times at

02:40:54 --> 02:40:59
night to block him, and at some point he got fed up and says, "Okay, I can't do

02:40:58 --> 02:41:02
that," and gave the commit access to the attacker.

02:41:01 --> 02:41:06
Um, so burnout in open source community is

02:41:05 --> 02:41:12
omething that exists but mostly it's about maintaining things, right?

02:41:11 --> 02:41:16
- No, for sure. But I wonder how do we help that, 'cause those people are so

02:41:15 --> 02:41:17
important. The-

02:41:16 --> 02:41:19
... the human beings are so important to the core of these pro- projects.

02:41:19 --> 02:41:23
- So, so for example, now I am maintaining a ton of multimedia and non-multimedia

02:41:23 --> 02:41:27
library- ... as maintainer because the maintainers

02:41:27 --> 02:41:32
got fed up, right? Some on VideoLAN, some outside of VideoLAN,

02:41:31 --> 02:41:36
Because it's sometimes you need a tough

02:41:35 --> 02:41:40
skin, right? Because you get, like, it's not really attacks, but oh, this

02:41:39 --> 02:41:44
not working, this is not working, and you feel it personally. And this is

02:41:43 --> 02:41:48
also why resources or the, the Google fiasco is,

02:41:48 --> 02:41:53
was a problem, right? They don't realize that in the end you have,

02:41:52 --> 02:41:57
You know, it's like the same graph where you see, like, everything and it's just like

02:41:56 --> 02:42:00
one random open source project that is maintaining the whole-

02:41:59 --> 02:42:01
The Nebraska thing, yeah

02:42:00 --> 02:42:02
- ... internet. You see the one, right? The-

02:42:01 --> 02:42:06
Yeah, this is the meme. I mean, it applies to, to a lot of open source projects.

02:42:05 --> 02:42:07
But this is

02:42:07 --> 02:42:12
the all modern digital multimedia infrastructure, and then that thing at the very

02:42:11 --> 02:42:16
bottom that everything relies on is FFmpeg. It's

02:42:15 --> 02:42:20
true. And then there's usually, you know, a handful of folks that are maintaining

02:42:19 --> 02:42:20
that.

02:42:19 --> 02:42:24
- And FFmpeg or VLC, right, you have a community of 10, 15

02:42:23 --> 02:42:28
core developers, are not the worst open source project. XZ,

02:42:27 --> 02:42:33
which is even in more installations, is one person, right? There is one guy-

02:42:32 --> 02:42:34
libxml is, uh-

02:42:34 --> 02:42:37
Yeah, libxml, right? There was a big stop. No one is maintaining-

02:42:37 --> 02:42:41
... libxml anymore, which is like parser, the only library that is able to parse XML

02:42:41 --> 02:42:42
everywhere.

02:42:41 --> 02:42:46
- All the crazy edge cases of XML under ridiculous circumstances, and they

02:42:45 --> 02:42:50
get attacked by security researchers because there's one other

02:42:49 --> 02:42:54
crazy edge case that they haven't thought of, and it's like, yeah, but the body of

02:42:53 --> 02:42:56
knowledge to actually resolve that is massive.

02:42:56 --> 02:43:01
- There is one guy maintaining all the time zones for everyone who is in the

02:43:00 --> 02:43:03
middle of, I think, was it Nebraska or-

02:43:02 --> 02:43:03
Yeah, it could be, yeah

02:43:02 --> 02:43:07
- ... South Dakota? Like, the mental health

02:43:06 --> 02:43:10
of the open source maintainers is something that large

02:43:09 --> 02:43:14
corporations don't care or don't see, right? It's just like, "Oh, yeah, I'm just

02:43:13 --> 02:43:17
doing an open source report," and so on.

02:43:16 --> 02:43:20
- Mm. Some of it is financial, but some of it, and

02:43:20 --> 02:43:24
people should definitely support open source financially— ... all across the board.

02:43:24 --> 02:43:29
But some of it is also, like, spiritual on a basic human level. There's something that

02:43:28 --> 02:43:29
happens,

02:43:29 --> 02:43:34
like, with this image of F- FFmpeg and so much of the internet depending on it,

02:43:34 --> 02:43:39
where people almost, like, talk down to the

02:43:38 --> 02:43:41
folks who are carrying these projects forward and maintaining it.

02:43:40 --> 02:43:45
- In the security community, they certainly did. That was one of, that was one of the things I think that

02:43:44 --> 02:43:47
argument came out is

02:43:47 --> 02:43:52
there was, there was a portion of the security community who's like, "No, these guys write crap code.

02:43:51 --> 02:43:56
They need to fix their crap code." I'm like, "No, no, no, no. This is a guy's hobby project.

02:43:55 --> 02:44:00
You've, you've have a security bot that's gone and found some AI-generated stuff.

02:43:59 --> 02:44:02
That guy didn't write crap code. It's just

02:44:02 --> 02:44:07
an edge case to the 99.99999 percentile he

02:44:06 --> 02:44:11
didn't think about because it's his hobby project decoding Star Wars games."

02:44:10 --> 02:44:15
- Forget the hobby project aspect of it. It's, it's just hard work, and it's

02:44:14 --> 02:44:19
beautiful, and it's like the, the right approach there is to celebrate people-

02:44:18 --> 02:44:23
... for doing incredible, incredible work. It's, it's just

02:44:22 --> 02:44:26
incredible that humans step up-

02:44:25 --> 02:44:30
... not getting really paid at, at first or maybe ever, and then they're

02:44:29 --> 02:44:33
doing it out of the love of it, and we need to, like, human

02:44:32 --> 02:44:36
civilization runs on people like that. We need to celebrate them.

02:44:36 --> 02:44:41
- To, to give you an idea, I received death threats on VideoLAN, right? And, um—

02:44:40 --> 02:44:43
- You mentioned that to me. Like, what, what is, what is behind that?

02:44:43 --> 02:44:51
- So that must be, what, 2009, 2010, right? Um Apple is moving from PowerPC to Core

02:44:50 --> 02:44:55
Duo, um, that probably in 2006, and by

02:44:54 --> 02:45:02
2009 or 2010, I decide that we are not going to do new versions of VLC for PowerPC.

02:45:02 --> 02:45:07
At that time, like VLC, we were close to the number 1.0

02:45:06 --> 02:45:11
release. We were four of us, right? Like, just like, "No, this is not

02:45:10 --> 02:45:15
possible." So I receive a death threat with some powder in it,

02:45:14 --> 02:45:18
right? It-- Remember there was some- ... anth- anthrax threats-

02:45:17 --> 02:45:22
... at that time, right? And it was because I had

02:45:22 --> 02:45:26
taken the decision to not maintain the PowerPC port

02:45:25 --> 02:45:30
anymore. And of course, it wasn't anthrax, of course. It was some type of

02:45:29 --> 02:45:34
lour and so on. But I received that as a, with a letter of like,

02:45:33 --> 02:45:41
"You, you piece of shit, you should die, PowerPC forever," and so on. And it was 2009 or

02:45:41 --> 02:45:48
2010, right? I was, I was young. I was just like, "Why? What did I do?"

02:45:47 --> 02:45:50
- Yeah, that can break your spirit. It's like, why-

02:45:49 --> 02:45:54
My mother freaked out, right? We had to go to see the police and so on. And now,

02:45:53 --> 02:45:58
like, I'm going to say that I'm quite happy that this happened

02:45:57 --> 02:46:01
at that time. It forged me a lot, right? I am...

02:46:01 --> 02:46:08
I can see, I can take a lot of hate on me. I'm okay with it, right?

02:46:07 --> 02:46:12
- It sucks that that's part of reality, 'cause all the people that love VLC,

02:46:11 --> 02:46:18
all the people that love FFmpeg, like me, you know, I legitimately

02:46:19 --> 02:46:24
hundreds—probably thousands of times in my life had a smile on my

02:46:23 --> 02:46:28
face because FFmpeg made me happy, period. And how

02:46:27 --> 02:46:31
many times did I get a chance to say that? Zero. Until I

02:46:30 --> 02:46:35
realized there's a Twitter account. And every once in a while I'm, like,

02:46:34 --> 02:46:36
messaging it.

02:46:35 --> 02:46:40
- One of the things I like on the Reddit meme about me, which I don't like this meme

02:46:39 --> 02:46:44
for a lot of reasons, but... And someone says, "Oh, JB is on, is on

02:46:43 --> 02:46:48
Reddit," which I am, right? And I say, and say hello, right? And then I got so many

02:46:47 --> 02:46:52
people who say, "Oh, thank you for VLC." And, like, I take pictures, and then

02:46:51 --> 02:46:58
I share that to the Signal, to IRC. Uh, yes, we use IRC on different-

02:46:58 --> 02:47:02
I saw as a quick tangent, you mentioned IRC is like Slack for old

02:47:01 --> 02:47:04
people. So you still use IRC?

02:47:03 --> 02:47:04
- Of course.

02:47:03 --> 02:47:06
- Yeah. I have it on my phone as well.

02:47:05 --> 02:47:06
- Of course.

02:47:05 --> 02:47:07
- Every day.

02:47:06 --> 02:47:07
- Works fine.

02:47:07 --> 02:47:09
- Wow. It works fine, huh?

02:47:08 --> 02:47:09
- Works fine, yes.

02:47:08 --> 02:47:11
- You have to power with a crank, I guess.

02:47:10 --> 02:47:12
- No, but there's no-

02:47:12 --> 02:47:14
There's AOL. There's AOL as your social media.

02:47:13 --> 02:47:16
- There's no ads, there's no tracking, there's nothing. Like, it's, uh-

02:47:16 --> 02:47:20
The biggest issue, to be honest, right, compared to Slack is that it doesn't have

02:47:20 --> 02:47:21
threads.

02:47:20 --> 02:47:25
That's annoying. It doesn't have emojis for reaction. Sometimes it, it would be

02:47:24 --> 02:47:25
nice.

02:47:24 --> 02:47:26
- IRCv3 has.

02:47:25 --> 02:47:29
- Yes, v3, but no one does it, and you cannot edit your messages.

02:47:29 --> 02:47:32
Right? And the rest, it works perfectly fine forever.

02:47:31 --> 02:47:34
- But how do you communicate without emojis?

02:47:33 --> 02:47:36
- Well, that's, that's why I said it's for old people.

02:47:35 --> 02:47:37
- Old people. All right.

02:47:37 --> 02:47:42
- And we do emojis with like- ... you know, the colons and dash and-

02:47:41 --> 02:47:44
... parentheses, right? So.

02:47:43 --> 02:47:47
- Old school. So anyway, you communicate on IRC. What were you even talking about?

02:47:46 --> 02:47:49
- Yeah, we are talking about death threats and-

02:47:48 --> 02:47:50
Oh, damn

02:47:49 --> 02:47:52
- ... but having people thanking you, and sometimes-

02:47:51 --> 02:47:56
... they got people who send me a message and, and, "Oh, thank you for VLC."

02:47:55 --> 02:48:00
And I always answer because I want to

02:47:59 --> 02:48:04
validate the fact that you need to thank the open source community.

02:48:03 --> 02:48:07
- Yeah, please, everybody listening to this, celebrate,

02:48:07 --> 02:48:12
celebrate FFmpeg, celebrate VLC, celebrate all the

02:48:11 --> 02:48:16
incredible open source projects, Linux, everything.

02:48:15 --> 02:48:20
There's so many, there's so many... And you know what? I mean, even outside of

02:48:19 --> 02:48:23
open source, just celebrate companies that

02:48:22 --> 02:48:27
create software that you use a lot and love.

02:48:26 --> 02:48:31
- Celebrate human endeavor. Celebrate the human effort to not just build something

02:48:30 --> 02:48:34
that's okay- ... build something that is damn good.

02:48:34 --> 02:48:38
- Yes, this is important, right? Like, because as we said, right, we work for

02:48:38 --> 02:48:42
technol- we do something very complex for

02:48:42 --> 02:48:49
the normal people. Like, we want our excellence in tech to be useful for everyone.

02:48:48 --> 02:48:53
And this is why, like, this is why we work, right? This is why I wake up in the

02:48:52 --> 02:48:56
morning is because I want people to use our stuff-

02:48:56 --> 02:48:59
... Because it's making everyone's life easier.

02:48:58 --> 02:49:02
- Want to solve hard problems. Work on something interesting, work on some interesting

02:49:02 --> 02:49:03
technical challenges.

02:49:02 --> 02:49:07
- As we are engineers, we love to build things, right? When I was young, like very early, I knew I

02:49:06 --> 02:49:11
wanted to build, to be an engineer. I wanted to do cars, right? Maybe at some point I

02:49:10 --> 02:49:15
will go back to cars, right? But this is like we

02:49:14 --> 02:49:19
want to build things that are cool and useful. And they need to be

02:49:18 --> 02:49:22
challenging, right? Because you want your brain to turn on.

02:49:21 --> 02:49:26
- When did the two of you first fall in love with programming, with building,

02:49:25 --> 02:49:27
with engineering?

02:49:27 --> 02:49:29
- When is the first time you programmed, Kieran?

02:49:29 --> 02:49:35
- Microsoft QBasic. As I was on Windows 3.1 and Windows 95 Microsoft QBasic.

02:49:34 --> 02:49:37
- Oh, wow. Wow. What'd you build?

02:49:36 --> 02:49:41
- Uh, like a multiplication, just counting loops like 10, 20, 30, 40.

02:49:40 --> 02:49:42
- Nice.

02:49:41 --> 02:49:46
- Then I thought I could do everything after that. I wanted... I jumped from doing that to I want

02:49:45 --> 02:49:49
o create a soccer, no, a football, soccer video game.

02:49:48 --> 02:49:53
And I drew all the, I drew everything out. I was like, "I'm gonna do it." And I didn't quite grasp that

02:49:52 --> 02:49:58
actually, didn't grasp actually it's a massive piece of work to jump from BASIC and

02:49:57 --> 02:50:00
rawing some pictures to a video game, but there we go.

02:49:59 --> 02:50:08
- Yeah. I think I did also BASIC and then, uh, Turbo Pascal when I was,

02:50:08 --> 02:50:12
yeah end of elementary school. But

02:50:12 --> 02:50:16
mostly the first time I actually did some serious programming was the

02:50:15 --> 02:50:22
first year of you call that middle school when you're 11?

02:50:22 --> 02:50:28
Um, I was I lived in Italy for a year in Florence and it was

02:50:27 --> 02:50:32
amazing year. And like the maths teacher

02:50:31 --> 02:50:36
told us to, to work in a programming language called Logo, where you had a

02:50:35 --> 02:50:38
turtle that was designing things-

02:50:38 --> 02:50:42
... On the screen, and you would turn left and right. And in the end, we used that to

02:50:41 --> 02:50:46
do a very complex programming because of course you could do things.

02:50:45 --> 02:50:50
And, and this changed, like, as I knew I wanted to

02:50:49 --> 02:50:52
do things with computers and program.

02:50:51 --> 02:50:57
- I don't think we quite talked about E- H.264 properly. We talked about David.

02:50:56 --> 02:50:58
Can we return-

02:50:57 --> 02:50:58
Sure

02:50:57 --> 02:51:02
- ... backtrack a little bit to H.264, this thing that powers

02:51:01 --> 02:51:09
basically all of the video on the internet? So, uh can you tell me the story of

02:51:08 --> 02:51:12
H.264? And Kieran, you're actually a contributor-

02:51:11 --> 02:51:17
Yeah to H.264. So, so H.264 is a video encoder for the H.264

02:51:16 --> 02:51:21
video standard. It dominates internet video, but also other areas

02:51:20 --> 02:51:25
uch as Blu-ray discs. And Blu-ray discs are interesting because the people that make them really want the

02:51:24 --> 02:51:25
highest quality,

02:51:25 --> 02:51:30
and there's some really cool high-end films that have been encoded broadcasting and all

02:51:29 --> 02:51:34
sorts of other areas. H.264 was a big step change

02:51:34 --> 02:51:39
'cause it kinda happened at the right time as well. A lot of the development took place

02:51:38 --> 02:51:43
when HD video was coming out. Intel Core 2 and Nehalem

02:51:42 --> 02:51:47
CPUs were getting fast. You could do real-time video. But the most

02:51:46 --> 02:51:52
important thing was a key sort of focus on visual

02:51:51 --> 02:51:56
metrics. So industry and academia for 20 years

02:51:55 --> 02:52:00
before, was obsessed with mathematical

02:51:59 --> 02:52:04
metrics or what's known as peak signal-to- noise ratio. So mean squared error,

02:52:03 --> 02:52:07
logarithm of mean squared error, and that led to tons of issues because mean squared

02:52:07 --> 02:52:12
error leads to blurring because you actually want to, you want to minimize-- You want to

02:52:11 --> 02:52:16
add a little bit of error to everything to, to reduce the mean squared error as opposed to having a big

02:52:15 --> 02:52:20
error, and that led to loads and loads of blurring. So but hobbyists bucked that trend.

02:52:19 --> 02:52:22
It was for their own personal videos, mostly anime.

02:52:22 --> 02:52:27
So there were two, there were two things they did differently, and there was a big iterative feedback loop with the

02:52:26 --> 02:52:32
community. They did some stuff differently. Two, two big things, psychovisual

02:52:31 --> 02:52:36
rate distortion, so using block energy, trying to

02:52:35 --> 02:52:39
compensate for human perception when making decisions.

02:52:38 --> 02:52:43
- So the psychovisual distortion, that's the critical-

02:52:42 --> 02:52:47
... thing. That's the thing. I mean, it's kind of revolutionary, like,

02:52:47 --> 02:52:50
that we can, like, rethink.

02:52:50 --> 02:52:54
Don't, don't make it, like, this kind of theoretic thing-

02:52:53 --> 02:52:57
... of compression. Make it all about-

02:52:56 --> 02:52:58
Being pleasing visually to the eye.

02:52:57 --> 02:53:03
- Yeah, yeah. So compressing in a way that loses the least amount of information

02:53:02 --> 02:53:05
for the stuff that matters for us humans.

02:53:04 --> 02:53:09
- Yes, exactly. As opposed to what industry-- Some parts of industry are still

02:53:08 --> 02:53:13
obsessed by this, which is mathematical numbers that don't look

02:53:12 --> 02:53:16
good in reality. And then adaptive quantization was the other big one

02:53:15 --> 02:53:20
where it was biasing bits against,

02:53:19 --> 02:53:24
complex areas and redistributing them to less complex areas like

02:53:23 --> 02:53:27
grass. Grass has some high frequencies, but it's kind of--

02:53:27 --> 02:53:32
it's less complex overall compared to more complicated things. And this came around by

02:53:32 --> 02:53:36
ParkJoy. So ParkJoy was really the canonical sample that

02:53:35 --> 02:53:38
was... Is the running around in the park.

02:53:37 --> 02:53:39
- This one.

02:53:38 --> 02:53:41
- Yeah. So this guy was really the--

02:53:42 --> 02:53:47
So this was created by Swedish television in the beginning of

02:53:46 --> 02:53:51
HD, and it was done on film, and it was no expense spared in terms

02:53:50 --> 02:53:55
of production quality, and it was given away for free. This was really--

02:53:54 --> 02:53:59
And this is the sample really that sorts the men from the boys in terms of it has

02:53:58 --> 02:54:03
o many challenges with the trees, with the water, with the

02:54:02 --> 02:54:07
grass, with the motion, with the... I don't think there's still

02:54:06 --> 02:54:12
been any public test sequence as good as that these days.

02:54:11 --> 02:54:17
- So for people who are just listening, we're looking at a bunch of humans running-

02:54:16 --> 02:54:21
... along a river, as you have the reflection, a lot of really high

02:54:21 --> 02:54:26
information textures everywhere, the leaves and the lighting playing with

02:54:25 --> 02:54:27
e leaves and all of this.

02:54:27 --> 02:54:31
- You could show clearly that encoders with high PSNR-

02:54:30 --> 02:54:32
Will blur everything

02:54:31 --> 02:54:36
- ... will blur everything, and you could see actually I could turn on psychovisual stuff, I could turn on

02:54:35 --> 02:54:37
adaptive quantization, and

02:54:37 --> 02:54:42
it would just look so much better. But your metrics-- And these metrics are at

02:54:41 --> 02:54:45
he time were considered so holy.

02:54:44 --> 02:54:49
These are the holy metrics that are untouchable. PSNR is the most important thing.

02:54:48 --> 02:54:53
- Uh, can you speak to how do you measure psychovisual stuff?

02:54:52 --> 02:54:58
Like, how do you turn how pleasing a compression is for a human eye-

02:54:57 --> 02:55:00
... into a number? Is that even possible?

02:54:59 --> 02:55:04
- That's what, that's what Netflix have been trying to do with VMAF. They said they've used a machine

02:55:03 --> 02:55:05
learning model.

02:55:04 --> 02:55:09
- That's a more recent thing. But back in when x264 was being

02:55:08 --> 02:55:11
developed, that's by eye you're basically-

02:55:10 --> 02:55:15
It was by eye. It was developers on their laptops. So it's not like even with

02:55:14 --> 02:55:18
big companies with professional screens or anything, it's-

02:55:17 --> 02:55:21
And that was actually one of the goals, which was I don't-- The developers at the time,

02:55:20 --> 02:55:25
Loren Merritt in particular, said, "I don't wanna test this on a thirty thousand dollar screen.

02:55:24 --> 02:55:28
It's-- I want this to look good on someone's laptop at home."

02:55:27 --> 02:55:29
- Yeah. Brilliant.

02:55:28 --> 02:55:32
- Um, there is another sample which is--

02:55:31 --> 02:55:38
... A sample that is Planet Earth's killer sample that I absolutely love.

02:55:37 --> 02:55:40
And you are going to see why, right?

02:55:39 --> 02:55:40
- Yeah, you're going to love this.

02:55:39 --> 02:55:48
- Uh, it's a ton of birds, right, flying, and the more it goes, the more there are

02:55:47 --> 02:55:52
birds, and at the end, right, it's almost like

02:55:51 --> 02:55:56
you have millions of birds. It's the most complex thing

02:55:55 --> 02:56:00
ever to encode, right? And well, you're watching it on YouTube, and you see how

02:55:59 --> 02:56:04
bad the YouTube encoding is actually, right? Um,

02:56:03 --> 02:56:08
and this is, like, phenomenal to, to optimize and

02:56:07 --> 02:56:12
get perfect quality in a constant bit rate.

02:56:11 --> 02:56:16
There was a lot of optimization, mostly by Loren also, um-

02:56:15 --> 02:56:20
... on anime, right? For a long time, anime was very badly

02:56:19 --> 02:56:24
encoded because there was a ton of banding, right? And so you see those

02:56:23 --> 02:56:27
issues, and there was a ton of things. So

02:56:27 --> 02:56:32
x264 is, like-- And today it's still the reference

02:56:31 --> 02:56:39
to any encoder, new encoder, AV1, AV2, VVC, HEVC, everyone compares to x264.

02:56:38 --> 02:56:43
- One of my favorite films, Cinema Paradiso, I know the engineer

02:56:42 --> 02:56:47
who created the Blu-ray, and he showed me the comparisons of x264 versus

02:56:46 --> 02:56:50
others, and the... it's completely different. And I think

02:56:50 --> 02:56:55
a bunch of guys in the Blu-ray world started using x264. Um, I think the big

02:56:54 --> 02:56:59
one was Chris Henderson from Warner Brothers. He did the whole Fringe box set with that.

02:56:58 --> 02:57:03
So quite, like, a thing a person on the street actually watches and wants to look good.

02:57:02 --> 02:57:06
And so they kind of took a risk in their jobs doing that because they're in a big

02:57:05 --> 02:57:10
company. That big company can buy whatever they want. And they said, "No, no, no, I want to use this

02:57:09 --> 02:57:14
free and open source thing so that things look good for my, my

02:57:13 --> 02:57:18
customers and build the best." And to this day, I personally still try and

02:57:17 --> 02:57:21
avoid watching the most cinematic films on streaming

02:57:20 --> 02:57:24
services and buy the physical discs because they look,

02:57:24 --> 02:57:29
they look good without even having to buy an expensive TV. I think that's the key thing.

02:57:28 --> 02:57:33
- And x264 is yet another example of open source project. It was started by

02:57:33 --> 02:57:37
Laurent Ehrsam when he was at École Centrale Paris, where VLC was born.

02:57:37 --> 02:57:41
And then you got a generation of people like Loren, like Jason, like,

02:57:41 --> 02:57:44
uh, Måns, like so many-

02:57:43 --> 02:57:45
Henrik from-

02:57:44 --> 02:57:46
Henrik, uh-

02:57:45 --> 02:57:46
Anton, uh

02:57:45 --> 02:57:50
- ... and this is-- Anton, and this is where the assembly

02:57:49 --> 02:57:54
thing that we use now on FFmpeg, dav1d and so on, was born, right? So

02:57:53 --> 02:57:57
x264 is, like, amazing project with people who were really all over the

02:57:57 --> 02:58:00
world, and I think most of them never met each other.

02:57:59 --> 02:58:04
- But all of them, according to Kieran, or large percentage, love

02:58:03 --> 02:58:08
anime. There's several things I've never got into, and one of them

02:58:07 --> 02:58:10
is anime, and I need to

02:58:09 --> 02:58:17
- I watch anime so much, especially at the time. Like, at the time it was like

02:58:17 --> 02:58:22
a lot of anime content doesn't exist commercially, right? We

02:58:21 --> 02:58:26
are before Crunchyroll, right? So what happens is usually people who

02:58:25 --> 02:58:29
love anime, who take some things, some DVDs in

02:58:28 --> 02:58:34
Japan and rip them because there is no commercial offering. And-

02:58:33 --> 02:58:38
... some of the people who are, what we call fan subbers, are basically

02:58:37 --> 02:58:41
translating themselves to make subtitles, right? And at that time,

02:58:41 --> 02:58:46
you download completely illegally. It was the only way to do that, right?

02:58:45 --> 02:58:50
And so all of that was handcrafted, and it fits the open

02:58:49 --> 02:58:54
source community, right? Because they needed tools to encode, to do fan subbing,

02:58:53 --> 02:58:58
right? One of the most amazing open source projects for subtitles is called

02:58:57 --> 02:59:01
Aegisub, and it's a subtitle... It's

02:59:00 --> 02:59:07
done for anime, for, for South Asian and Japanese languages.

02:59:06 --> 02:59:10
- There are weird textures in anime that I don't think you get

02:59:10 --> 02:59:15
in real life content. I think that was a key one, which was optimizing these weird

02:59:14 --> 02:59:18
textures that you get- ... because anime is not done in a normal fashion.

02:59:17 --> 02:59:22
- Yeah. The way you produce it is not-- You, you mostly produce it, like,

02:59:21 --> 02:59:26
on screens, right? Since a bit of time, and you have all those gradients,

02:59:26 --> 02:59:31
right? In colors, because they are very easy to produce digitally, very complex

02:59:30 --> 02:59:34
to produce in real life. And the

02:59:33 --> 02:59:38
subtitles also are very complex because you need to have often the

02:59:37 --> 02:59:41
Japanese and then you need to have the diacritics, right?

02:59:41 --> 02:59:46
The what we call the rubi, right? Which is the hiragana and the katakana for the

02:59:45 --> 02:59:49
kanji. And then because of course you, so that you have the official

02:59:49 --> 02:59:54
subtitling, but you also need the English subtitles or the French subtitles because you

02:59:53 --> 02:59:57
want to learn that, right? And there is so many things crazy on, on

02:59:57 --> 03:00:01
subtitles and we had like crazy samples on, on subtitles that

03:00:00 --> 03:00:05
we've seen all around. So this is an important

03:00:04 --> 03:00:09
part of the, the culture, but also because there was no

03:00:08 --> 03:00:11
fficial offering. There was no way of doing that.

03:00:11 --> 03:00:16
- Uh, can you speak to the difference between H.264 and AV1 and then

03:00:16 --> 03:00:20
x264 and dav1d? This is this big

03:00:20 --> 03:00:24
step. Can you help people understand, are some of the streaming sites

03:00:24 --> 03:00:27
moving more towards that direction of AV1?

03:00:26 --> 03:00:32
- Let's be honest, all of those codecs since MPEG-2

03:00:32 --> 03:00:40
video are the same concepts. The same concept about inverse transform, about intra

03:00:39 --> 03:00:44
prediction, motion compensation, entropy coding, all of them.

03:00:44 --> 03:00:51
However, each generation gives you a bump between twenty-five and fifty percent

03:00:51 --> 03:00:54
more compression for the same quality.

03:00:54 --> 03:01:02
And so you had the MPEG-2, you had the DivX era, you have H.264, which was, like,

03:01:02 --> 03:01:07
changing, right? H.264 improved so much. And then you had more, right?

03:01:06 --> 03:01:15
You had HEVC, you had VP9 at the same time of HEVC. VP9 is a bit similar to HEVC in

03:01:14 --> 03:01:18
terms of quality compression, but it's royalty-free.

03:01:17 --> 03:01:22
Because in multimedia there is ton of patents and the

03:01:21 --> 03:01:25
licensing after H.264 became out of hand, right?

03:01:24 --> 03:01:29
And could cost hundreds of millions of dollars per year. So it made no

03:01:28 --> 03:01:33
sense. So Google did this VP9 and the Alliance for

03:01:32 --> 03:01:40
Open Media did this new codec called AV1. So you can imagine that AV1 saves

03:01:39 --> 03:01:45
between forty and sixty percent less bandwidth than H.264-

03:01:45 --> 03:01:48
... for the same quality, visual quality.

03:01:48 --> 03:01:50
- At a given bitrate.

03:01:49 --> 03:01:54
- At a given bitrate, right? So that's really like you increase

03:01:53 --> 03:01:57
the quali- either you set the bitrate and you increase the quality, or you set the

03:01:56 --> 03:02:01
quality and you decrease your bitrate. But because now you move from, from

03:02:01 --> 03:02:10
SD to HD and HD to 4K and 4K to 4K HDR, like you increasing the size by like two,

03:02:09 --> 03:02:14
factor two, three, four, right? So you need to have better compression to

03:02:13 --> 03:02:17
keep it in terms of something that is manageable.

03:02:16 --> 03:02:21
- It's more coding tools, bigger blocks, lots more

03:02:20 --> 03:02:24
sub-partitions in each block. It's just exponentially more complex.

03:02:23 --> 03:02:28
- It's more complex because the encoder needs to search

03:02:27 --> 03:02:32
more possibilities, right? So you, for example

03:02:31 --> 03:02:35
one of the things that is easy to understand is to predict a block,

03:02:35 --> 03:02:40
a color block to another, you have directions, right? So you can go

03:02:39 --> 03:02:43
left, right, bottom, up, and then in terms of

03:02:43 --> 03:02:47
Like the other quadrants, right? What I call north,

03:02:46 --> 03:02:51
northeast, northwest, and so on, right? But that's eight directions. Then you can do

03:02:50 --> 03:02:55
more direction. You can do sixteen or sixty-nine or one hundred and

03:02:54 --> 03:02:59
twenty-eight, right? You can-- And every time your encoder is going to spend

03:02:58 --> 03:03:03
more time to see, oh, well, this block is exactly this one

03:03:02 --> 03:03:07
and those type of tools that you can bring, and the encoder needs to

03:03:06 --> 03:03:11
check which of the tools are going to compress you better. And so

03:03:11 --> 03:03:16
I guess that AV1 encoding is two order of

03:03:15 --> 03:03:22
magnitude more than H.264 in terms of CPU cycle, right? Order of magnitude, right?

03:03:21 --> 03:03:26
- Yeah. And as we discussed, CPUs are not getting faster. You're just throwing more cores at the

03:03:25 --> 03:03:26
problem.

03:03:25 --> 03:03:30
- But also it's a fact that you encode once and you have hundreds of millions

03:03:29 --> 03:03:31
of users, right?

03:03:30 --> 03:03:35
So for example, YouTube, a very good example. YouTube encodes almost

03:03:34 --> 03:03:39
everything in H.264, but the popular video

03:03:38 --> 03:03:43
gets re-encoded in AV1 because it costs more, of

03:03:42 --> 03:03:46
course, to encode, but you encode once and you send that to millions, right?

03:03:46 --> 03:03:51
So it's a trade-off between encoding time and complexity-

03:03:50 --> 03:03:55
... and CPU usage on the server side and on the client side.

03:03:54 --> 03:03:59
Because at the end, if you're distributing a video to hundreds of thousands of

03:03:58 --> 03:04:03
people and the size is half of the other, then

03:04:02 --> 03:04:07
it's better. It's better for your battery, it's better for your modem, et cetera, et cetera.

03:04:06 --> 03:04:14
- So we can lay out, let's say, the top five codec container combos

03:04:14 --> 03:04:23
would be H.264 inside MP4 containers, AV1 inside MP4 WebM containers,

03:04:23 --> 03:04:27
ProRes for nonlinear editing,

03:04:27 --> 03:04:33
Inside MOV containers. So for people who don't know, I guess ProRes is

03:04:32 --> 03:04:37
- It's Apple's codec for editing, originally for Final Cut Pro, and

03:04:36 --> 03:04:41
it's designed to be fast to decode, fast to seek, because an editor will need to move

03:04:40 --> 03:04:45
ry quickly. So it's a different use case to the distribution element.

03:04:45 --> 03:04:49
- There's no or very minimal temporal compression in the-

03:04:48 --> 03:04:53
There's none, yeah. There's none in ProRes. So you can cut, so you can do cuts.

03:04:52 --> 03:04:56
- This is what we call intra-only codecs, right? So

03:04:56 --> 03:05:00
I'm going to explain quickly what is IPB frames.

03:04:59 --> 03:05:01
- Yes, please.

03:05:00 --> 03:05:06
- Um, so I-frames, often key frames, but

03:05:06 --> 03:05:10
is complete frames. It's like an image. It's a JPEG, right? You have... You can

03:05:10 --> 03:05:14
start, you see everything, right? And then

03:05:14 --> 03:05:20
you, the next image can be a P frame, which is a predicted frame. So you take

03:05:20 --> 03:05:25
some part of the previous image saying, "Well, I need the block five and seven

03:05:24 --> 03:05:26
and forty-two,"

03:05:25 --> 03:05:30
and you replace it, and then you just give the extra information, right?

03:05:29 --> 03:05:34
But that means that in order to decode this P frame, you need to have access to a

03:05:33 --> 03:05:36
previous I frame, right?

03:05:35 --> 03:05:40
And then, of course, you have more complex one, which are B frames,

03:05:39 --> 03:05:45
which are B-predicted frames, which can depend on

03:05:44 --> 03:05:49
different type of frames, some in the past, some in the future.

03:05:49 --> 03:05:55
And so ProRes is an intra-only codec. For the people who can see, this is-

03:05:54 --> 03:05:55
Yeah, that's a good one

03:05:54 --> 03:05:59
- ... a very good one, right? So I-frames are complete frames. Um

03:05:58 --> 03:06:05
P-frame basically depend only on I-frame, and B-frames can depend on in front.

03:06:04 --> 03:06:11
- And this GOP, group of pictures, I think the default for actually FFmpeg

03:06:11 --> 03:06:19
for H.264 is like two hundred and fifty frames, something like this.

03:06:19 --> 03:06:20
- Yes.

03:06:19 --> 03:06:24
- And to me, it's just, it's like magic, that you could predict

03:06:23 --> 03:06:26
hat you could have a complete frame every-

03:06:26 --> 03:06:29
Several seconds, that means

03:06:28 --> 03:06:32
- ... several seconds, and then you could still, you could have this chain of

03:06:31 --> 03:06:36
predictions you make, and the fact that you can-- The fact that somebody like me

03:06:36 --> 03:06:40
can can use FFmpeg to compress something and not notice

03:06:39 --> 03:06:44
that the result still plays back smoothly is like magic.

03:06:43 --> 03:06:51
- You can even have, and we use that in tons on Kyber, is what we call intra-refresh,

03:06:50 --> 03:06:55
where basically it's there is no I-frames present.

03:06:54 --> 03:06:57
- You have no I... You have one at the beginning.

03:06:56 --> 03:06:58
And you never send an I-frame. You get a-

03:06:57 --> 03:06:59
How does that work? What is it?

03:06:58 --> 03:07:03
- You build up an I-frame gradually across as the stream continues, so-

03:07:02 --> 03:07:06
Ah. So you refresh certain parts- ... of the image.

03:07:05 --> 03:07:10
- But so you never have an I-frame. Like this is intra-refresh that we use, right?

03:07:09 --> 03:07:11
- That's even smarter.

03:07:10 --> 03:07:16
- But for me, for me the biggest mind-blown when I started was the B-frames.

03:07:15 --> 03:07:20
B-frames means B-predicted frames can depend

03:07:19 --> 03:07:23
on frames that are coming in the future.

03:07:23 --> 03:07:28
That means that in order to decode this B-frame, you need to wait for the next

03:07:28 --> 03:07:31
frame that is dependent-

03:07:31 --> 03:07:32
Yeah

03:07:31 --> 03:07:36
- ... buffer that, decode that one, so that you can decode the B-frame,

03:07:35 --> 03:07:39
right? So the way you decode the frame, the

03:07:39 --> 03:07:43
decoding order is not the same as the display order.

03:07:42 --> 03:07:47
Right? That means the encoder needs to be very clever and decide

03:07:46 --> 03:07:51
that, "Well, you know, I'm going to depend on things like in the future."

03:07:50 --> 03:07:52
So this is like-

03:07:51 --> 03:07:52
It's incredible

03:07:51 --> 03:07:54
- ... mind-blowing.

03:07:53 --> 03:07:58
- The fact it works so smoothly every day is kind of miraculous in some ways. It,

03:07:57 --> 03:08:01
it works so... You can have a stream that works

03:08:01 --> 03:08:06
across the world on their decoder versus one in the US versus one here of

03:08:05 --> 03:08:11
different manufacturers, and they produce bit for bit exactly the same material.

03:08:10 --> 03:08:15
That's quite remarkable, and do quite complex things, and getting more and more complex

03:08:14 --> 03:08:19
and still be bit exact. There's a lot of work that goes into that.

03:08:18 --> 03:08:23
- There's a lot of knobs you can control in this whole process. There's a lot of really fascinating

03:08:22 --> 03:08:26
parameters that I've gotten to know more and more over the years that

03:08:26 --> 03:08:31
FFmpeg gives you complete access to. Maybe you could speak to some of them. So first of

03:08:30 --> 03:08:34
all, like obviously, we can lower the resolution, we can lower the frame rate,

03:08:34 --> 03:08:39
we can use different kinds of codecs, as we mentioned, from H.264 to AV1.

03:08:39 --> 03:08:44
There's ways to tune the trade-off between bitrate and

03:08:43 --> 03:08:48
quality, as we've kind of spoken to. You know, you could do constant bitrate,

03:08:47 --> 03:08:55
you can do constant quality, say RCQ, QP. You can do the longer or shorter group of

03:08:55 --> 03:09:00
pictures, GOP, that we mentioned. I mean, all that kind of stuff. It's crazy.

03:08:59 --> 03:09:01
Number of B-frames.

03:09:00 --> 03:09:07
- Yeah. What is crazy is that a ton of people's job

03:09:06 --> 03:09:10
is to optimize those parameters, right?

03:09:09 --> 03:09:14
A ton of people that you see at YouTube, at Netflix, at Meta, and so on,

03:09:13 --> 03:09:17
they're not writing codecs. They're just like finding the right

03:09:17 --> 03:09:22
parameters for the file they have, for the format they

03:09:21 --> 03:09:26
have, right? Because like something that is for a movie or something that

03:09:25 --> 03:09:30
is user-generated content from your phone or a screen recording

03:09:29 --> 03:09:34
or something that you're going to video edit, you don't want the same things.

03:09:33 --> 03:09:38
And there are thousands of people whose job is just to optimize all that.

03:09:38 --> 03:09:42
- Yeah. They're wizards. Hats off to them.

03:09:42 --> 03:09:47
Uh, YouTube like to deliver, all the streaming sites actually, to deliver

03:09:46 --> 03:09:50
at scale. And like YouTube is really magical because it's

03:09:50 --> 03:09:54
not just doing like what Netflix does, which is one way

03:09:53 --> 03:10:01
broadcasting type thing. It also has to upload videos from

03:10:01 --> 03:10:05
all the places. So they're also doing encoding at scale-

03:10:04 --> 03:10:08
... for videos that are gonna be watched by like five people.

03:10:07 --> 03:10:11
And it still has to deliver them re- like on a moment's

03:10:10 --> 03:10:15
notice. No, no delay, nothing. No... I mean, very minimal latency.

03:10:15 --> 03:10:20
And also serve it in all

03:10:19 --> 03:10:25
different resolutions. Like YouTube is basically the web version of VLC.

03:10:25 --> 03:10:30
- Yeah. Well, actually, it's funny because, like Google Video, which

03:10:29 --> 03:10:34
was something they did before they acquired YouTube

03:10:33 --> 03:10:38
was actually using the VLC plugin so that you could run VLC

03:10:37 --> 03:10:41
inside the web browser using the ActiveX

03:10:40 --> 03:10:45
plugin. And so it worked in Internet Explorer,

03:10:44 --> 03:10:50
and you were actually running VLC inside your browser.

03:10:49 --> 03:10:54
Which is funny because today we have the opposite, where we have VLC WebAssembly, where

03:10:53 --> 03:10:58
we compile all VLC and FFmpeg to decode, to run VLC in

03:10:57 --> 03:11:04
side the JavaScript virtual machine with WebAssembly.

03:11:04 --> 03:11:09
- Okay, there's this legendary story that you pointed me to

03:11:09 --> 03:11:13
that it was discovered via

03:11:12 --> 03:11:17
WikiLeaks release of all seven documents. The CIA was using a modified

03:11:16 --> 03:11:23
version of VLC to basically try and trick people, what? To steal their data?

03:11:23 --> 03:11:24
- Yes, exactly.

03:11:23 --> 03:11:27
- So can you explain what the heck happened? What...

03:11:27 --> 03:11:32
- So, so this was a surprise, right? Because at some point, WikiLeaks,

03:11:31 --> 03:11:36
uh mentioned some documents. There were a few ones with something related

03:11:35 --> 03:11:40
to Blu-rays and VLC, but the, the most interesting one was the

03:11:39 --> 03:11:43
CIA Vault 7, which, if I understand correctly,

03:11:43 --> 03:11:47
Was the CIA had, like, a custom version of

03:11:46 --> 03:11:51
VLC where they had a specific plugin. Yeah,

03:11:50 --> 03:11:54
exactly. This is-- Like, we had to, to write a press release on that.

03:11:53 --> 03:11:58
- Uh, VideoLAN wrote a press release saying the only safe source for getting

03:11:57 --> 03:12:02
VLC media player is the official VideoLAN website. I mean, I

03:12:01 --> 03:12:05
suppose that's a security vulnerability for

03:12:04 --> 03:12:10
basically any piece of open source software. Somebody can trick you.

03:12:09 --> 03:12:12
- To download in a fake website-

03:12:12 --> 03:12:16
... or targeted advertisement, right? That was a targeted advertisement, to watch a

03:12:16 --> 03:12:20
specific file you need to watch with this custom

03:12:20 --> 03:12:24
version of VLC. And it was the normal binaries of VLC, except they

03:12:23 --> 03:12:31
added one DLL, I think it was psapi.dll- ... which was basically reading your,

03:12:31 --> 03:12:36
your document folder, encrypting that, and sending that. And

03:12:35 --> 03:12:40
the thing is, this is very clever, to be honest because once you're

03:12:39 --> 03:12:43
watching a movie, right, you're going to do that for two hours, and you're not going to touch your

03:12:43 --> 03:12:47
computer. And sometimes it's normal because it's HD that your, your

03:12:47 --> 03:12:51
fans are going up and say, "Vroom," and there is ton of CPU usage because you're using

03:12:50 --> 03:12:55
VLC, right? That's normal. But the thing is, what you don't see is that actually

03:12:54 --> 03:13:03
a powered version of VLC that is used by CIA. We had exactly the same problem

03:13:02 --> 03:13:07
with Chinese hackers that were targeting

03:13:06 --> 03:13:11
Indian people, and that got VLC banned from India

03:13:10 --> 03:13:15
until I had to, to fight in courts in India, the

03:13:14 --> 03:13:19
Indian government, to unban VLC. They didn't use VLC.

03:13:18 --> 03:13:23
They took just one DLL, because we signed the DLL correctly,

03:13:22 --> 03:13:27
And they used that DLL to do another program.

03:13:26 --> 03:13:31
So you had the vlc.exe and was calling libVLC, but it was

03:13:30 --> 03:13:36
calling it into a fake one. And they used that to target. Um,

03:13:35 --> 03:13:40
there is not much we can do actually to block those type of hacks.

03:13:39 --> 03:13:44
- Yeah, and I think people should, for all open source software, for all

03:13:43 --> 03:13:47
software in general, people should pay attention where they download the thing.

03:13:46 --> 03:13:51
- Yes, because that means that they were not downloading it from our website.

03:13:50 --> 03:13:53
- Do the search engines help you?

03:13:52 --> 03:13:53
- No, they don't.

03:13:53 --> 03:13:57
- Just to clarify, 'cause you can, you know, to prevent threats from

03:13:57 --> 03:14:01
people manipulating SEO to get up there on the links and try to-

03:14:00 --> 03:14:05
Absolutely not, right? We have a big issue for, like, more than ten years,

03:14:04 --> 03:14:08
is that there is a fake version of VLC in

03:14:07 --> 03:14:12
Germany that was reported for now for 12 years,

03:14:12 --> 03:14:16
and Google basically decides to not-- They know what's in it,

03:14:16 --> 03:14:20
but the binary is too big for their virus analyzer to

03:14:19 --> 03:14:24
analyze it. And so while if you're in Germany, you can go to a

03:14:23 --> 03:14:28
website that is a fake version of VLC with a custom installer,

03:14:27 --> 03:14:32
and it's very popular in Germany because their website is in German, and Google

03:14:32 --> 03:14:37
mentioned that before VideoLAN. And the weirdest thing is that it doesn't do

03:14:36 --> 03:14:39
anything on your machine for three weeks.

03:14:38 --> 03:14:43
Because that's how they do the detection. And after three weeks, there is a small

03:14:42 --> 03:14:47
program that is a service that install at the same time that wakes up after three weeks,

03:14:46 --> 03:14:51
and it start downloading spyware and adware. And Google knows about it.

03:14:50 --> 03:14:55
They've decided not to do anything. The guys use dark SEO in

03:14:54 --> 03:15:02
Germany to do that at some point. And this is very damaging, right?

03:15:01 --> 03:15:06
Because one of the things that they are downloading is actually something that is replacing

03:15:05 --> 03:15:09
your ads inside your machine, right?

03:15:08 --> 03:15:12
- It's actually quite surprisingly effective.

03:15:11 --> 03:15:16
Whoever is doing it with Twitter and X. With X,

03:15:16 --> 03:15:20
I'll get emails about, "Your X account has been hacked." And

03:15:19 --> 03:15:24
however they phrase it, it gets me to, like, at least

03:15:23 --> 03:15:28
click on the email, not to follow the thing, and then you're like,

03:15:27 --> 03:15:32
"Man, whatever they're doing with the psychology to try to trick you,

03:15:31 --> 03:15:33
they're quite good."

03:15:32 --> 03:15:37
- There is a security v-version of VLC, right? You received an email saying, "Hey, there

03:15:36 --> 03:15:41
is a security version update on VLC. Think about updating right now because-

03:15:40 --> 03:15:46
... it can hack your computer." You come. It's a website that looks decent, and, uh-

03:15:45 --> 03:15:50
... and you download. It's a new version of VLC. Great. You don't know. A month later, you're hacked.

03:15:49 --> 03:15:51
You have no idea. You're part of a botnet.

03:15:51 --> 03:15:57
- Yeah. So make sure wherever you're downloading stuff, it's legitimate.

03:15:56 --> 03:16:01
I'm part of the botnet. Speaking of which, so you've mentioned

03:16:00 --> 03:16:05
that VLC sandboxing is some- is something you're working on,

03:16:05 --> 03:16:09
and it's actually something quite challenging. Why is it important? Why is it hard?

03:16:09 --> 03:16:14
- So VLC is a core with around

03:16:13 --> 03:16:17
500 plugins, right? One of them is FFmpeg, but we have, we

03:16:17 --> 03:16:21
support so many other formats. We support new

03:16:20 --> 03:16:25
protocols, we support new filters, we support weird architectures.

03:16:24 --> 03:16:29
And in this release of VLC, you have

03:16:28 --> 03:16:32
modules that are going to call your drivers, right?

03:16:31 --> 03:16:36
Uh, mostly the hardware decoders, which are going to call

03:16:35 --> 03:16:44
your Intel, your NVIDIA, your AMD driver. And all calling FFmpeg, right? And

03:16:43 --> 03:16:48
there might be a security issue. There might be a security issue in the shader,

03:16:47 --> 03:16:52
there might be a security issue in VLC, in FFmpeg that is going to

03:16:51 --> 03:16:55
basically crash. The issue is that you running

03:16:54 --> 03:17:00
VLC like every, every other program, like Adobe, right? You're running it

03:17:00 --> 03:17:04
on your machine, and it has access to all your documents, right? So

03:17:04 --> 03:17:08
the idea is to be sure that you do a sandbox so that we

03:17:07 --> 03:17:12
can protect from ourselves, because inside the

03:17:11 --> 03:17:16
VLC process is running some code that is not even ours. Either it's open

03:17:15 --> 03:17:20
source for other projects that we integrate in VLC, or it's your

03:17:19 --> 03:17:23
GPU driver or something that is provided by someone else

03:17:23 --> 03:17:27
inside. And so when we crash, we want to not

03:17:26 --> 03:17:31
allow people to do bad things, right? Because one of the common way of hacking

03:17:30 --> 03:17:35
people is to crash a program, very often done with a

03:17:34 --> 03:17:37
web browser, very often done with PDF files,

03:17:37 --> 03:17:42
less often with multimedia, but that could happen. And when you crash, you launch something

03:17:41 --> 03:17:46
on the machine of the person. Could be a ransomware, could

03:17:45 --> 03:17:50
be a botnet, right? So security of desktop application is important.

03:17:50 --> 03:17:55
On mobile, it's a bit different because most of the mobile application are running on

03:17:54 --> 03:17:59
inside their own sandbox. But for VLC, we

03:17:58 --> 03:18:03
could run it inside one sandbox, but the problem is that we need access to

03:18:02 --> 03:18:07
so many things that it's basically we would do-- we

03:18:06 --> 03:18:11
would have all the permissions, right? And so if you have a sandbox

03:18:10 --> 03:18:15
and you put some holes everywhere, it defeats the purpose, right?

03:18:14 --> 03:18:18
So what we are trying to do, and we're actually doing, is splitting

03:18:17 --> 03:18:22
VLC into several processes. One is decoding, one

03:18:21 --> 03:18:30
is demuxing, one is filters, and all of them run into their own sandbox so that the

03:18:29 --> 03:18:34
whole VLC, a part of VLC crash, like Chrome crashes

03:18:33 --> 03:18:38
on some tab, right? It crashes, but it does

03:18:37 --> 03:18:42
not crash the whole program. And this is what we're trying to do. And it's

03:18:41 --> 03:18:46
difficult because it's a sandbox that needs to sustain gigabits per second-

03:18:45 --> 03:18:50
... of mem copies. Now, it's not a website which is five megabytes or

03:18:49 --> 03:18:54
10 megabytes. We're talking about hundreds of megabits per second. So this is

03:18:53 --> 03:18:58
why it is quite challenging. And this is a research topic that

03:18:57 --> 03:19:04
we are working on in order to have multimedia player that is secure.

03:19:03 --> 03:19:07
- This is all the kind of stuff you have to think about when millions of people are using.

03:19:06 --> 03:19:11
You've mentioned something somewhere where like all the different

03:19:10 --> 03:19:17
features of VLC, when you have that many people using it, somebody will use

03:19:16 --> 03:19:20
very single feature, and they will tell you about it.

03:19:20 --> 03:19:25
- Best feature in VLC is called the puzzle filter, right?

03:19:24 --> 03:19:29
So you click the puzzle filter, and it transforms your

03:19:28 --> 03:19:31
video into a jigsaw puzzle, right?

03:19:30 --> 03:19:31
- Nice.

03:19:30 --> 03:19:35
- And you can click and move the pieces, right?

03:19:34 --> 03:19:40
It's very, very useful when you're watching a French movie, right? You're bored,

03:19:39 --> 03:19:44
... because it's like very long things or a love triangle, right? We've seen

03:19:43 --> 03:19:48
that so many times, right? But, but you need to watch it because someone, your wife

03:19:47 --> 03:19:50
or-- ... told you to do that-

03:19:49 --> 03:19:50
To catch up

03:19:49 --> 03:19:53
- ... or your boyfriend told you to do that. So you're doing that, right?

03:19:52 --> 03:19:56
And you can click and move the pieces around.

03:19:55 --> 03:20:00
It's absolutely useless, right? Like, who cares about that?

03:19:59 --> 03:20:04
First, it was done by a math teacher in high school

03:20:04 --> 03:20:08
in south of France to teach his students about Bézier curves, which

03:20:08 --> 03:20:09
is something that-

03:20:08 --> 03:20:13
... everyone should know about, right? It's very useful. But the code was clean,

03:20:12 --> 03:20:17
so it got in VLC. It was merged in 2010. Five years later, I

03:20:16 --> 03:20:21
receive an email saying, "Hello, JB. I have a problem with VLC.

03:20:20 --> 03:20:25
The puzzle is too simple." And I was just like, "What?"

03:20:24 --> 03:20:29
And yes, the puzzle was in the UI maximums by 16

03:20:29 --> 03:20:33
, right? Only 256 pieces. And he says, "I'm

03:20:33 --> 03:20:38
sorry, but in a movie I love puzzled, this is too simple," right?

03:20:37 --> 03:20:41
So there is a commit of me, you can check it online which is JB changing

03:20:41 --> 03:20:45
that the dimensions are 256 by 256.

03:20:45 --> 03:20:46
- Right.

03:20:45 --> 03:20:50
- But my point is, so many unused features

03:20:50 --> 03:20:54
are used by a few people, right? There is a way to watch VLC

03:20:54 --> 03:20:58
movies in command line without any UI, right? It's-

03:20:57 --> 03:21:00
I saw that. You can do ASCII.

03:20:59 --> 03:21:04
- ASCII art. Is it useful? Very useful. Imagine you're

03:21:03 --> 03:21:08
debugging... imagine you're debugging a multicast network, right?

03:21:07 --> 03:21:09
You have thousands very complex,

03:21:09 --> 03:21:14
very complex networking stack, right? You can SSH to all of the

03:21:13 --> 03:21:18
routers and put VLC on it with no UI, and you're going to see

03:21:17 --> 03:21:22
whether it's black or it's not black, right? So you see if or it's all green or not

03:21:21 --> 03:21:23
all green, right? So you can see-

03:21:22 --> 03:21:23
Amazing.

03:21:23 --> 03:21:24
- Yeah, right.

03:21:23 --> 03:21:25
- This is fun.

03:21:24 --> 03:21:32
- People don't realize there is so many things in VLC, that are useful and they are--

03:21:32 --> 03:21:36
they have users, because once you have hundreds of millions of users,

03:21:36 --> 03:21:40
you have people who use every feature.

03:21:40 --> 03:21:42
- I would love to sort of

03:21:42 --> 03:21:47
zoom in and talk a little bit more about the distinction between kind of

03:21:47 --> 03:21:51
downloading a file and watching it offline versus

03:21:50 --> 03:21:55
treaming. So the complexities, the challenges of streaming.

03:21:55 --> 03:21:58
Is there something we could say about what it takes to,

03:21:58 --> 03:22:02
stream files? Because we've been talking about codecs-

03:22:01 --> 03:22:10
... and I think a lot of that implies encoding and decoding without the

03:22:09 --> 03:22:12
having to communicate- ... over the network.

03:22:11 --> 03:22:12
- Sure.

03:22:11 --> 03:22:17
So can you elaborate, like, what's required to do over network stuff?

03:22:16 --> 03:22:21
- Yeah, but it is less complex than it seems compared to everything that we've

03:22:20 --> 03:22:25
talked about. Especially because the most complex thing

03:22:24 --> 03:22:29
is not about streaming in terms of, uh,

03:22:28 --> 03:22:33
streaming services, but it was what was done to

03:22:32 --> 03:22:37
actually broadcast through satellites. Because in, in

03:22:37 --> 03:22:41
most of the modern, uh, broadcasting services, you can

03:22:40 --> 03:22:45
pause and you can go on. But when you're sending live streaming, whether it's

03:22:44 --> 03:22:49
broadcast or live for streaming services which are live, this is

03:22:48 --> 03:22:53
much more difficult because you need to encode in real time. You--

03:22:52 --> 03:22:57
When you go on a satellite, you have a specific size of the link, right? You

03:22:56 --> 03:22:59
cannot have a burst-

03:22:58 --> 03:23:02
... of bandwidth even for a second, right? Because you don't have the

03:23:01 --> 03:23:06
space for that in your total file. However, there is

03:23:05 --> 03:23:10
different types of challenges, which are interesting challenges, but

03:23:09 --> 03:23:14
I think they are less complex than the one we've seen with late

03:23:13 --> 03:23:18
'90s and early 2000s about broadcasting and streaming through satellite.

03:23:18 --> 03:23:22
- They're different. They are control systems challenges, whereas, whereas some are more mathematical.

03:23:22 --> 03:23:23
I think that's the difference.

03:23:23 --> 03:23:27
- In the streaming world, what you have is called, what we call adaptive streaming, because the

03:23:27 --> 03:23:31
difficulty-- And it's not really a video problem, it's mostly a CDN

03:23:31 --> 03:23:35
problem, is that you might have too many people watching the same thing at the same time,

03:23:34 --> 03:23:39
and it's a congestion of the network, right? So your

03:23:38 --> 03:23:43
player has difficulty downloading things fast enough to play

03:23:42 --> 03:23:50
them. So what happens is that locally, the player is going to read a lower

03:23:49 --> 03:23:51
esolution-

03:23:50 --> 03:23:58
... of it. But there are some very clever algorithms to do that, but most of it

03:23:57 --> 03:24:00
is quite basic, to be honest.

03:23:59 --> 03:24:03
- Even on the buffering side, it's pretty basic.

03:24:02 --> 03:24:07
- Yeah, you start to download a segment, what we call a segment,

03:24:06 --> 03:24:11
and then you time, right? And if it takes more than 50%

03:24:10 --> 03:24:15
of the time to download a segment, you go down to... Right. And the difficulty

03:24:14 --> 03:24:19
is more about when do you go up in bandwidth, in quality.

03:24:18 --> 03:24:23
But this is not very complex to do. When you encode, you're going to

03:24:22 --> 03:24:27
encode seven resolutions, right? And, and you're going to give the

03:24:26 --> 03:24:31
bitrate. The difficulty is to have your encoder gives the same bitrate,

03:24:30 --> 03:24:35
but it's not as strict as it, it used to be. So-

03:24:34 --> 03:24:39
Uh, probably YouTube has to figure out how the human

03:24:38 --> 03:24:43
psychology side of that, like how pissed off do you get

03:24:43 --> 03:24:48
when it's like very low bitrate and,

03:24:48 --> 03:24:53
How long should it wait before it increases the bitrate even though the connection

03:24:52 --> 03:24:58
is better? Because maybe the, the changes in the bitrate is what, like,

03:24:57 --> 03:24:59
affects you psychologically.

03:24:58 --> 03:25:01
- No, I think actually the interesting one is the audio.

03:25:01 --> 03:25:02
- That's true.

03:25:01 --> 03:25:05
- The-- You can kind of notice when they move from

03:25:05 --> 03:25:10
full fat AAC to the there are compressed versions of

03:25:09 --> 03:25:14
AAC that use Spectral Band Replication. You can kind of see it goes a bit tinny, and

03:25:13 --> 03:25:16
that up and down is very jarring. The video side

03:25:16 --> 03:25:21
is a lot smoother, and there's less notice. It's really the audio you can definitely, you can

03:25:20 --> 03:25:24
definitely feel it from when it's moved you from a different audio profile to one or the other.

03:25:24 --> 03:25:29
I don't know. We're surprisingly tolerant at skipping audio glitches. I,

03:25:28 --> 03:25:33
I'm surprised people I know who are not video engineers, how

03:25:32 --> 03:25:37
tolerant they are, how tolerant they are to watching sports at

03:25:36 --> 03:25:39
30 FPS, for example, whereas it should really be 60.

03:25:39 --> 03:25:44
The world is a lot more tolerant to that, but audio people are very-- There's-- It's an immediate

03:25:43 --> 03:25:45
feedback mechanism of, "Oh, something's changed."

03:25:44 --> 03:25:49
- If you hear a glitch, you realize it directly.

03:25:48 --> 03:25:52
I get to fully realize that, I suppose. One of the things I'm afraid of when I listen to

03:25:52 --> 03:25:56
audio more and more, that I get to notice every single tiny detail,

03:25:56 --> 03:26:02
and that you can over-obsess when people, people in general are able to kinda,

03:26:02 --> 03:26:09
kinda blur their consumption. They can, they can look past certain imperfections.

03:26:08 --> 03:26:12
- But then when you combine like

03:26:11 --> 03:26:16
an event that is, for example, a sport event that is probably going through

03:26:16 --> 03:26:18
satellite or-

03:26:17 --> 03:26:22
... somewhere else and goes to a central place for encoding, and then you

03:26:21 --> 03:26:26
need to encode this older resolution in real time. You don't have

03:26:25 --> 03:26:30
time for QA. You need to push that to CDNs. You need to add

03:26:29 --> 03:26:33
probably DRM for protection. You need to have that

03:26:32 --> 03:26:40
over a ton of different devices. Then yes, it is complex. But--

03:26:40 --> 03:26:45
And also, like you're in the web browser or in very much different

03:26:44 --> 03:26:48
devices that you use for television, where you had like a,

03:26:47 --> 03:26:52
defined set-top box or cable box that, that you know where you

03:26:51 --> 03:26:56
control end-to-end. So it's a challenge, but it's less...

03:26:55 --> 03:27:00
I think the networking part while you

03:26:59 --> 03:27:05
agree to have 10, 20 seconds of latency, I don't think this is very difficult.

03:27:05 --> 03:27:10
- Speaking of networking and latency, so your new

03:27:09 --> 03:27:18
effort, as we mentioned, is Kyber, which is aimed at ultra-low latency. As you say,

03:27:17 --> 03:27:22
every millisecond counts, and you're applying that to

03:27:21 --> 03:27:26
remote control machines like robots, drones, computers. Can you tell me about it?

03:27:25 --> 03:27:30
- Sure. If you start from where we used to be, right? You used

03:27:29 --> 03:27:37
to use FFmpeg to encode files, right? And then we used FFmpeg and VLC to encode in

03:27:37 --> 03:27:41
streaming services, right? And then you need to go

03:27:41 --> 03:27:47
lower and lower. And the question was where up to where can we go?

03:27:46 --> 03:27:50
And this question is very important because there are many use cases

03:27:49 --> 03:27:53
where you need to be fast, and it's when you have

03:27:53 --> 03:27:58
feedback interaction, right? We are not just listening to something, you're actually

03:27:57 --> 03:28:02
controlling it, right? Because-- And that's the biggest difference that compared to

03:28:01 --> 03:28:06
what we've done so far, is that I need video

03:28:05 --> 03:28:10
to have a feedback on something that is happening live, whether it's a drone flying,

03:28:10 --> 03:28:14
whether it's controlling a humanoid robot from

03:28:13 --> 03:28:18
distance, whether it's controlling a hover, whether it's playing a

03:28:17 --> 03:28:21
video game in the cloud gaming, because this is,

03:28:20 --> 03:28:25
What I did on a previous job, right? I was CTO of a

03:28:24 --> 03:28:29
cloud gaming startup. And this is a very interesting

03:28:28 --> 03:28:33
topic because you push to the limit the network.

03:28:32 --> 03:28:37
You need to be-- to care not about the

03:28:36 --> 03:28:42
quality like we've done on video, and we've talked about with H.264. You care about

03:28:42 --> 03:28:46
latency, because a milliseconds is

03:28:45 --> 03:28:50
meaningful when you're controlling a car, right? For-- Well, you've-- you've

03:28:49 --> 03:28:54
seen, you've used Waymos, right? When Waymos don't work, and

03:28:53 --> 03:28:58
that happens even if one percent of the time, there is someone that is basically

03:28:57 --> 03:29:02
remote controlling that. And this is exactly

03:29:01 --> 03:29:09
the stuff that we're building. It's really an SDK platform to do end-to-end

03:29:09 --> 03:29:11
control of machines.

03:29:10 --> 03:29:15
- So the-- this comes up quite a lot in a lot of different contexts in robotics.

03:29:14 --> 03:29:18
So obviously, teleoperation, teleop is becoming more and more

03:29:17 --> 03:29:26
important including for training, Robots via machine learning.

03:29:25 --> 03:29:30
- Yes. And what we do is a bit different from everyone else, is that

03:29:30 --> 03:29:34
we take only one socket, one connection, which is a QUIC

03:29:33 --> 03:29:38
protocol based on UDP which is interesting because

03:29:37 --> 03:29:42
it's done for low latency. It doesn't have two of the, what we call the TCP head of line

03:29:41 --> 03:29:46
problem and the HTTP head of line problem. It's ciphered by default, but on

03:29:45 --> 03:29:50
the same wire, we send multiple streams, like multiple tracks. We send

03:29:49 --> 03:29:54
audio, we send video, but we also send the commands, right? Uh,

03:29:53 --> 03:29:58
mouse, keyboard, gamepad, and so on. And we do

03:29:57 --> 03:30:02
that while maintaining coherence, right? Synchronization. Because

03:30:01 --> 03:30:05
what people don't realize is that all the clocks

03:30:05 --> 03:30:10
actually drift. And when you're controlling a robot, a robot is

03:30:09 --> 03:30:13
going to have, like, two cameras, five cameras, ten cameras, a ton of captors,

03:30:13 --> 03:30:17
GPS, and so on. And if you want to train correctly your

03:30:16 --> 03:30:21
obotic AI model, you need to have all those that are in

03:30:20 --> 03:30:25
sync and current. And what we've done, and it's all the stuff that we learn

03:30:24 --> 03:30:29
on VLC in broadcast in real time, and MPEG-TS that Kiran's know

03:30:28 --> 03:30:36
ell, is that we account for clock drifting. And so when I record a Kyber stream,

03:30:36 --> 03:30:41
a robot, I am sure that it's going to be predictive in the way you

03:30:40 --> 03:30:45
play it back. And so when you're going to do recording and training

03:30:44 --> 03:30:48
of your AI model, you need to be sure that every time you

03:30:47 --> 03:30:51
retrain based on the data, it-- the data is going to stay

03:30:50 --> 03:30:55
coherent. And clocks actually drift. Like,

03:30:54 --> 03:30:59
the existing solution works with one camera. Once you're going to a five or

03:30:58 --> 03:31:01
six, it's more complex.

03:31:00 --> 03:31:04
- Uh, so you wanna make sure that the visual

03:31:04 --> 03:31:09
snapshot perfectly matches the time it actually happened.

03:31:08 --> 03:31:13
- Exactly. And also, if you're going to control, right, I do something on robot, I

03:31:12 --> 03:31:17
need to be sure that it is actually happening at that precise time,

03:31:16 --> 03:31:21
right? And so we have on the, the server, which would be a robot, a

03:31:20 --> 03:31:24
time of, like, re-timestamping mechanism accounting for clock drift for

03:31:24 --> 03:31:28
that, right? So that's one of the use cases of Kyber to, to

03:31:27 --> 03:31:32
control robots. Um, I also think, like, remote

03:31:31 --> 03:31:36
drones, remote whether it's defense or non-defense, remote

03:31:35 --> 03:31:44
cars, remote submarines. There is many places in industry or remote surgery where

03:31:43 --> 03:31:48
the expert cannot go everywhere the machine is because it's either

03:31:47 --> 03:31:53
dangerous or it's too costly, right? So you, you allow people to have machines

03:31:53 --> 03:31:58
next to you, right? The goal of Kyber is to make distance disappear

03:31:57 --> 03:32:02
because it's either projection of skills or projection of power,

03:32:01 --> 03:32:06
right? So imagine we are all like— you've seen the Meta

03:32:05 --> 03:32:09
Ray-Ban and, and everyone else, right? You need to stream there, right? Because you're not

03:32:09 --> 03:32:13
going to run anything over there, right? So you need GPU power whether it's on a cloud, on a

03:32:13 --> 03:32:17
phone to stream that. And so all of these use cases needs to

03:32:16 --> 03:32:21
be not about extremely low latency, but real-time latency for

03:32:20 --> 03:32:23
video. And so that means you need--

03:32:24 --> 03:32:28
we're toying with the encoders so that the encoders encode a frame in

03:32:28 --> 03:32:32
four milliseconds. And, and, and Kieran with his company also goes

03:32:32 --> 03:32:38
under those type of latency, because you need to optimize

03:32:38 --> 03:32:45
at max the local latency, right? Because it's the decoder, the

03:32:44 --> 03:32:52
ncoder and so on. Because this time is going to be added to your networking time.

03:32:52 --> 03:32:57
So-- And it's not just about low latency, it's also about, like, reliability. We do

03:32:57 --> 03:33:02
clever things like forward error correction, right? So forward error

03:33:01 --> 03:33:06
correction is you over-transmit a bit of data, right, a

03:33:05 --> 03:33:10
few percent and while over-transmit, you're allowed to

03:33:09 --> 03:33:14
lose some packets. Because all of that is very difficult

03:33:13 --> 03:33:20
over an internet network where you're going to do things very far away. And

03:33:20 --> 03:33:25
if you check that all packets are delivered, you add a ton of latency. If you

03:33:24 --> 03:33:28
don't want latency, what we do is that we over-transmit

03:33:28 --> 03:33:32
some data that you can retrans-- reconstruct on the client

03:33:31 --> 03:33:36
side when there is things that are broken, right? So

03:33:35 --> 03:33:40
And we a few, a few days, weeks ago, we were doing the

03:33:39 --> 03:33:44
demo around Las Vegas for the CES about we had a,

03:33:43 --> 03:33:48
a rover that is fully 3D printed. It's very simple. It's a car, right? It's a

03:33:47 --> 03:33:52
small car with a telescopic arm, and it

03:33:51 --> 03:33:55
was actually controlled from France, right? And the, the video

03:33:55 --> 03:34:00
was with a webcam and a very small server, right? A small, a

03:33:59 --> 03:34:03
small PCB was basically running and send that to

03:34:03 --> 03:34:05
someone that is on the other side of the planet.

03:34:06 --> 03:34:10
And so there is so many use cases. You can also think about

03:34:09 --> 03:34:14
having AI who are going to control many drones and so on. And

03:34:13 --> 03:34:18
technically, we need to be amazing in video, we need to be amazing

03:34:17 --> 03:34:22
at networking, we need to care about any milliseconds in

03:34:21 --> 03:34:25
etworking, in encoding time, in decoding time, and also you need to

03:34:25 --> 03:34:27
integrate very low level.

03:34:26 --> 03:34:31
- So sync everything together well. But how-- Like, what kind of latency

03:34:30 --> 03:34:35
can you get to? Like, why-- When you say milliseconds, what, what's the goal?

03:34:34 --> 03:34:39
- So my goal is four milliseconds glass-to-glass latency.

03:34:38 --> 03:34:40
- What's glass-to-glass mean?

03:34:40 --> 03:34:44
- So it's easy, right? You have a computer which is running a program, right? Probably a

03:34:43 --> 03:34:48
video game, and this one is actually running, right? It could be--

03:34:47 --> 03:34:53
it's an example of a robot, right? And you have the replicate that is-

03:34:53 --> 03:34:56
... done through the network. And, and you want,

03:34:56 --> 03:35:01
if you take a, a one thousand hertz camera, you can take a

03:35:00 --> 03:35:04
picture, and you want that to be at four milliseconds. Four milliseconds means two

03:35:03 --> 03:35:07
hundred and forty hertz, right?

03:35:06 --> 03:35:08
- Yes. Nuts.

03:35:07 --> 03:35:12
- So far we achieve seven milliseconds

03:35:11 --> 03:35:16
from a Windows to Windows or Windows to Mac. And

03:35:15 --> 03:35:20
if you look in the timing, most there is around three point

03:35:19 --> 03:35:24
five milliseconds inside the NVIDIA

03:35:23 --> 03:35:28
hardware encoder and around two milliseconds on the Intel

03:35:27 --> 03:35:32
decoder, right? So, like, the encoder plus the decoder is already six

03:35:31 --> 03:35:35
milliseconds, right? So in order to go down, we need either to

03:35:34 --> 03:35:41
have some other type of codecs, or some better encoder that are faster.

03:35:41 --> 03:35:45
But four milliseconds is, would be the grail.

03:35:44 --> 03:35:49
- That's pretty nuts. I love it, though. I don't think anyone's ever achieved that,

03:35:48 --> 03:35:50
right? That's fast.

03:35:49 --> 03:35:53
- You can achieve that with custom hardware-

03:35:53 --> 03:35:57
... with SDI, with professional hardware.

03:35:56 --> 03:36:00
But I want that to work over the internet. I want

03:35:59 --> 03:36:04
hat to work with any robots where you're going to have a small Jetson

03:36:03 --> 03:36:08
Nano in it or a N150, right? I want

03:36:07 --> 03:36:11
hat because there is going to be millions of robots or-

03:36:11 --> 03:36:16
... drones are just rolling robots or flying robots or, or swimming robots,

03:36:15 --> 03:36:20
right? It's just you, a machine that you control. And in order...

03:36:20 --> 03:36:22
Either you need to teleoperate them

03:36:23 --> 03:36:27
or when everything will be fully autonomous, you need to

03:36:26 --> 03:36:30
teleobserve them, right? You need to check what's happening.

03:36:29 --> 03:36:34
And in my view, in the future, like, all those remote

03:36:33 --> 03:36:38
cars will be teleobserved by an AI

03:36:37 --> 03:36:42
model, which is just going to say, "Well, everything is good." And when it's not good,

03:36:41 --> 03:36:46
say, "Hey, there is a problem," and then you have an operator, right? And this is

03:36:45 --> 03:36:50
going to be about safety, right? When you have your humanoid taking care of your grandma or my

03:36:49 --> 03:36:50
grandma,

03:36:50 --> 03:36:55
I want to be sure that everything goes well, and I'm not in those type of horrible

03:36:54 --> 03:36:58
scenarios where the robot is dangerous. Or when I'm driving, I,

03:36:58 --> 03:37:03
I want, like, the car to stop when it should stop, and if

03:37:02 --> 03:37:06
needed, someone takes care of that, right? And so there is so many ca-

03:37:06 --> 03:37:12
cases, scenarios about real time, and so the goal of Kyber is to make real time

03:37:12 --> 03:37:16
control of machine. Distances appear.

03:37:15 --> 03:37:20
- It's incredible. And some of the same technology, some of the same ideas that we're talking about

03:37:19 --> 03:37:23
is connected to what you're doing.

03:37:22 --> 03:37:26
- And for me, it's amazingly challenging, right? Because I would say that on

03:37:25 --> 03:37:30
video I'm doing okay, but networking I have so much

03:37:29 --> 03:37:34
more to learn, right? It's um, about, like, congestion

03:37:33 --> 03:37:38
protocols, bitrate adaptation in real time. But it's,

03:37:37 --> 03:37:42
it's quite funny. And so I created this project and

03:37:41 --> 03:37:45
we have fundraised in the US, of course. But it's open source, right?

03:37:45 --> 03:37:50
This is important, right? Like, we've not said that, right? But everything on Kyber

03:37:49 --> 03:37:50
is open source.

03:37:50 --> 03:37:52
- So how do you make money?

03:37:51 --> 03:37:56
- It's a dual license, commercial and AGPL, right? You remember what you said-

03:37:55 --> 03:38:00
... about licenses. Basically, if you

03:37:59 --> 03:38:04
want to use Kyber in your product, you must have your full product open source.

03:38:04 --> 03:38:09
If you want to use this amazing technology but not open source,

03:38:08 --> 03:38:13
you pay the commercial license, right? So the small people or the

03:38:12 --> 03:38:17
hobbyist and the very small guys who want to do that, they can use

03:38:16 --> 03:38:19
the technology. They build something that is open source and cool.

03:38:18 --> 03:38:20
- That's awesome.

03:38:19 --> 03:38:24
- And if you're a large company, you're going to have the support, all the IP,

03:38:23 --> 03:38:27
the right modification, and so on. So yeah,

03:38:26 --> 03:38:33
it's really cool and also I'm building robots, and I love that, right?

03:38:32 --> 03:38:37
Like we have-- Like the rover we have is 3D printed. We are

03:38:36 --> 03:38:40
finishing a demo where it's an actual wing, right? Like a type of drone wings

03:38:39 --> 03:38:48
that is also fully 3D printed. We are trying to do a sailboat that is 3D printed.

03:38:47 --> 03:38:52
And we'll work on some humanoids. Of course, they are not going to

03:38:51 --> 03:38:56
be very good robots, right? It's not our job, but we're here

03:38:55 --> 03:38:57
for everyone to make robots. Cool.

03:38:57 --> 03:39:01
- Ah, you're talking to the right guy. I love robots. There's a bunch of them

03:39:00 --> 03:39:05
upstairs. And teleop is gonna be really, really important,

03:39:04 --> 03:39:09
especially as the number of robots scales across the world. So 100%. Let's talk

03:39:08 --> 03:39:15
about the future of multimedia. FFmpeg, VLC, but some of the

03:39:14 --> 03:39:19
codecs, we didn't really mention AV2. So can we just

03:39:18 --> 03:39:26
lay out what is AV2? What is the hope for it? What is H.265, H.266?

03:39:26 --> 03:39:30
- So AV1 is this codec that is done by the Alliance for Open

03:39:29 --> 03:39:34
Media, right? Where there is Google, Netflix, Amazon,

03:39:33 --> 03:39:37
Apple VideoLAN, where we try to make a

03:39:36 --> 03:39:41
royalty-free very good codec, right? And now it's being deployed.

03:39:40 --> 03:39:49
But actually, the codec was finished in 2018, but a codec takes years to be

03:39:48 --> 03:39:53
used in wide scenarios, right? So,

03:39:52 --> 03:39:58
AV2 is the next generation of this codec. It's 30% better, right? So

03:39:57 --> 03:40:04
if you keep the same quality, you get 30% bandwidth reduction compared to AV1.

03:40:03 --> 03:40:07
- What's the connection with the dav1d and AV2?

03:40:06 --> 03:40:11
- We are going to do a dav1d 2, right? That I call Devid because

03:40:11 --> 03:40:13
de is two in French. Um-

03:40:13 --> 03:40:14
Ah, well done

03:40:13 --> 03:40:18
- ... And you have to know that dav1d is an actual what we call recursive acronym,

03:40:17 --> 03:40:24
right? Because it means D, dav1d, is an AV1 decoder, right? So

03:40:23 --> 03:40:28
- Oh, nice. Nice. I didn't even think of that. And people should

03:40:27 --> 03:40:30
know that dav1d is spelled with a one.

03:40:29 --> 03:40:33
- Yes. It's... And so dav1d 2-

03:40:32 --> 03:40:34
It's gonna be spelled with a two. Please tell us

03:40:33 --> 03:40:38
- ... is going to be D-A-V-2-D. Sorry, I don't know how you pronounce that.

03:40:38 --> 03:40:45
And again, we did a demo at the CES of VLC running the first demo of AV2.

03:40:44 --> 03:40:52
- So can you clarify to me the specification of AV2? And then the encoding and the

03:40:51 --> 03:40:53
decoding

03:40:52 --> 03:40:57
- Sure. So the specification is like the

03:40:56 --> 03:41:00
document which explains how the codec is supposed to work, right?

03:41:00 --> 03:41:02
- And that's really AV2.

03:41:02 --> 03:41:05
- That is AV2, like H.264.

03:41:04 --> 03:41:10
Right? Then you have an encoder. The current encoder is called AVM,

03:41:09 --> 03:41:13
and there will probably be other encoders, probably one called

03:41:12 --> 03:41:16
SVT-AV2, and those are the encoder. The same way

03:41:16 --> 03:41:24
x264 is an encoder to H.264, the same way that x265 is an encoder for the H.265

03:41:23 --> 03:41:32
codec. And the decoders for AV1 is dav1d. The decoder for

03:41:31 --> 03:41:38
AV2 is dav1d2. The decoder for H.264 is

03:41:37 --> 03:41:46
ffh264 inside FFmpeg. The decoder for HEVC is ffhevc inside

03:41:45 --> 03:41:50
FFmpeg. And there is a next generation codec

03:41:50 --> 03:41:56
from the MPEG world after H.264, H.265. There is one that is called H.266,

03:41:56 --> 03:41:59
also known as VVC.

03:41:59 --> 03:42:10
- So HEVC is H.265. VVC is H.266. Why is H.266 super sexy- ... and so much better?

03:42:10 --> 03:42:14
- So the question often we have is why are there two names?

03:42:13 --> 03:42:19
Because most of the time it is a conjunct work from the ISO world

03:42:19 --> 03:42:25
and the ITU, which is the International Telecommunication Union.

03:42:24 --> 03:42:27
- These are these two regulatory bodies.

03:42:26 --> 03:42:29
- No, one is a private entity and one is the United Nations.

03:42:28 --> 03:42:30
- Which one is the private?

03:42:29 --> 03:42:31
- ISO is private.

03:42:31 --> 03:42:45
- In theory, H.264 is MPEG-4 Part 10, H.264/AVC. And this is the full name.

03:42:44 --> 03:42:49
- So it's the concatenation of the ISO name and the ITU name-

03:42:48 --> 03:42:54
... even though they work together. This is, this is politics, historical, you know-

03:42:53 --> 03:43:00
And for HEVC, it's MPEG-H, H.265, HEVC.

03:42:59 --> 03:43:03
And there is H.266, which is also named VVC.

03:43:02 --> 03:43:06
- Is there a high-level thing to say about the improvement of-

03:43:05 --> 03:43:09
30% each generation is a best summary.

03:43:09 --> 03:43:15
- This is true both for the AV- ... codecs and the- ... H.264, 5, 6.

03:43:15 --> 03:43:19
- So the professionals who are listening to us are going to kill us because they say, "No, it's

03:43:19 --> 03:43:21
35%, 25%-

03:43:20 --> 03:43:22
"No, it's 50, 60"

03:43:21 --> 03:43:25
- ... it's 50," blah, blah, blah. But globally, you need to know that HEVC is

03:43:24 --> 03:43:29
30% better than H.264. H.266 is 30%

03:43:28 --> 03:43:33
better than H.265 because there are so many cases and so many scenarios.

03:43:32 --> 03:43:39
For example, there are cases, especially for screen recording, where the gains are

03:43:39 --> 03:43:44
humongous because you arrive, you have the right tool that is done for that.

03:43:43 --> 03:43:47
And so for a specific video, a new generation is going to give you

03:43:47 --> 03:43:51
70% gain or 80% gain.

03:43:50 --> 03:43:54
Right? But there used to be a ton more codecs, but now the two

03:43:53 --> 03:44:01
main codecs for transmission are the H.264, H.265, H.266, and the other is AV1, AV2.

03:44:00 --> 03:44:05
- And I guess the major difference would be the cost of encoding.

03:44:04 --> 03:44:08
- Yes, and the royalty of the patents.

03:44:08 --> 03:44:12
And this is the reasons why you see the AV version of codecs, is

03:44:11 --> 03:44:16
because they try to be as royalty-free,

03:44:15 --> 03:44:20
which means no cost for the patents as much as possible.

03:44:19 --> 03:44:24
Because what you need to know, and we've not talked about that so far, is

03:44:23 --> 03:44:27
that multimedia is what we call a patent minefield.

03:44:27 --> 03:44:31
There is two places where you have the most patents. It's

03:44:30 --> 03:44:36
everything related to 3G, 4G, 5G, RF, and multimedia.

03:44:36 --> 03:44:42
Um, because it's very mathematical, and you can get great gains and so on. So

03:44:42 --> 03:44:46
Google and Meta and Netflix wanted something where it was

03:44:45 --> 03:44:50
royalty-free. There are people who said that they have patents outside, but they are

03:44:49 --> 03:44:54
fringe patents, right? So it's mostly true that it's patent-free.

03:44:53 --> 03:44:58
- Oh, you should extend. Patent checking was done as part of the

03:44:57 --> 03:45:04
standardization process in AV1, AV2, whereas patents are not even discussed

03:45:04 --> 03:45:08
in the MPEG world. Patents are off-topic completely.

03:45:08 --> 03:45:11
- Can you educate me at the patents side?

03:45:10 --> 03:45:14
- So usually, so MPEG does a format, right? And then there is,

03:45:14 --> 03:45:19
Everyone comes around and say, "Well, I have all those patents for the format,"

03:45:18 --> 03:45:23
and they do usually a union called what's called

03:45:22 --> 03:45:27
MPEG LA, MPEG Licensing Association. And you

03:45:26 --> 03:45:31
put all your patents in, and then you ask everyone who's

03:45:30 --> 03:45:32
using this format to pay for it.

03:45:31 --> 03:45:36
- Wait, can you elaborate? What does it mean to have a patent of a codec? Why is there many patents?

03:45:36 --> 03:45:41
- Uh, imagine I'm doing something where I'm going to

03:45:40 --> 03:45:44
instead of doing blocks which are square, I'm going to do rectangles, right?

03:45:44 --> 03:45:52
- Oh, so every idea- ... somebody patents it. Oh, man.

03:45:52 --> 03:45:57
People and their... How many lawyers are-

03:45:56 --> 03:45:59
I mean, it pays for a lot of lawyers, right? Like-

03:45:58 --> 03:46:03
The biggest issue is not the following, right? Because at time of H.264, the patents were,

03:46:02 --> 03:46:10
let's call it, like, sane. But there was so much money in that-

03:46:09 --> 03:46:12
... that for HEVC, a lot-

03:46:12 --> 03:46:16
there were a ton of things that were pushed inside the specification, which are not

03:46:15 --> 03:46:20
useful in 99.9% of the time, but so

03:46:19 --> 03:46:24
just one could add a patent on it. And so it became

03:46:23 --> 03:46:28
that for HEVC licensing, there was MPEG LA

03:46:27 --> 03:46:32
plus another patent pool called HEVC Advance. Plus-

03:46:31 --> 03:46:32
That one

03:46:31 --> 03:46:35
- ... um, I think Nokia was outside of the patent pool.

03:46:34 --> 03:46:37
- Yeah, a few of them are outside, and some other one that's-

03:46:36 --> 03:46:41
And so it was impossible to license, right? And I think that several months

03:46:40 --> 03:46:45
ago, HP decided that they were going to remove support from

03:46:44 --> 03:46:52
HEVC in their Windows laptops because the cost was increasing of those patents.

03:46:51 --> 03:46:57
And it arrived- ... where a point where-- And there was uncapped patent. And so for

03:46:56 --> 03:47:01
YouTube or Netflix, we could talk about hundreds of

03:47:00 --> 03:47:05
millions of dollars of licensing for patents per

03:47:04 --> 03:47:09
year. And they said, "You know what? At hundred million

03:47:08 --> 03:47:13
per year, you know, I could create my own codec," and this is what they did. And so that's why we

03:47:12 --> 03:47:17
have the Open Media alliance, Alliance for Open Media, where we

03:47:16 --> 03:47:23
are part of, that is, that created AV1 and creates AV2. We create also audio codecs.

03:47:23 --> 03:47:27
But yes. So the main difference would be that, and because you need

03:47:26 --> 03:47:32
to work around the patents or go do some things that are not patented,

03:47:32 --> 03:47:37
a lot of things are different, right? The basic things that were done in

03:47:36 --> 03:47:41
MPEG-2 thirty years ago are, of course, out of patents. But

03:47:40 --> 03:47:44
so for example, there is things like a golden frame, a S

03:47:43 --> 03:47:47
frame or, or different type of-

03:47:46 --> 03:47:49
These are all patented ideas.

03:47:48 --> 03:47:52
- Yeah, no, it's I can't believe it's not butter. I can't believe it's not a B frame.

03:47:52 --> 03:47:56
It's, I mean, it's kind of what it is. In some ways, it's like a-

03:47:55 --> 03:47:58
Oh, so it's a different variant of a B frame.

03:47:57 --> 03:48:01
- Yeah, that's to try and sidestep. Things like that.

03:48:00 --> 03:48:05
- And so you need to have double creativity, right? Creativity in terms of

03:48:04 --> 03:48:09
being more efficient, but creativity of being sure that you don't

03:48:08 --> 03:48:13
infringe existing patents. And so, for example, VVC

03:48:12 --> 03:48:17
is, has all the patents of HEVC plus new ones, right? It's

03:48:16 --> 03:48:21
why AV2 tries to be as royalty-free as possible.

03:48:20 --> 03:48:25
- To what degree does FFmpeg and VLC have to think about this kind of stuff?

03:48:24 --> 03:48:29
- We don't, and one of the reasons why VLC was in France is

03:48:28 --> 03:48:33
that France rejects software patents. So most of those patents

03:48:33 --> 03:48:41
are illegal in France because I once made the calculus that

03:48:40 --> 03:48:45
if I had to pay all the licensing fee for VLC, I needed to pay more

03:48:44 --> 03:48:49
than two hundred euros per user, right? It's the same in dollars.

03:48:48 --> 03:48:53
But most of those patents are invalid in Europe

03:48:52 --> 03:48:57
because those are called, it's basically mathematical patents or idea

03:48:56 --> 03:49:00
patents, and they are not valid in Europe.

03:49:00 --> 03:49:04
- Uh, let me just at a high level, just out of curiosity. So the

03:49:03 --> 03:49:08
meme online and the interwebs on X and Twitter and so

03:49:07 --> 03:49:13
n, and my own, I have friends in Europe,

03:49:13 --> 03:49:18
this, the sense is that Europe is not friendly to entrepreneurship.

03:49:17 --> 03:49:21
They over-regulate, there's too much bureaucracy, and so

03:49:20 --> 03:49:27
n. Is there anything positive to say? Is there hope for entrepreneurship-

03:49:26 --> 03:49:27
Yes

03:49:26 --> 03:49:32
- ... in the future of Europe? Is Europe over from a tech perspective?

03:49:32 --> 03:49:37
- Just look at the two of us, right? It's notable that there's two people from

03:49:36 --> 03:49:41
the European continent on this podcast talking about video. It's fair to

03:49:40 --> 03:49:42
say the community is weighted heavily.

03:49:42 --> 03:49:46
- What you probably don't see yet is that there is a

03:49:46 --> 03:49:51
new generation of entrepreneurs in Europe and

03:49:50 --> 03:49:55
mostly in France. UK has done it since a long time because,

03:49:54 --> 03:49:59
well, it's more, it's more Anglo-Saxon type of

03:49:58 --> 03:50:03
business, look at business. But especially like what happened in

03:50:02 --> 03:50:07
France, and of course, sometimes a bit overdone with everything called French tech,

03:50:06 --> 03:50:11
but today, most of the people who come on the market want to create

03:50:10 --> 03:50:15
startups. Fifteen years ago, it wasn't the case. Everyone

03:50:14 --> 03:50:19
wanted to work on big companies because when you failed in

03:50:18 --> 03:50:22
France, for example, twenty years ago, fifteen years ago,

03:50:22 --> 03:50:27
and you destroy your company, which is normal for startup, right? You,

03:50:26 --> 03:50:30
you were not allowed to create a new company, right? There was a lot of stigma. The

03:50:29 --> 03:50:33
stigma is gone.

03:50:32 --> 03:50:36
.. there is so many things happening on AI in France and so on, right?

03:50:35 --> 03:50:40
So there is sure, over-regulations. I,

03:50:40 --> 03:50:46
I know that, right? I'm an entrepreneur. But it has some good things also.

03:50:45 --> 03:50:50
- I mean, is there some paralyzing aspects? You know, if I look at

03:50:49 --> 03:50:54
he case of somebody I've become close with, Pavel Durov,

03:50:54 --> 03:51:02
you know, he was blamed directly by the French government for the kind of things

03:51:02 --> 03:51:05
his, quote, "platform" was hosting.

03:51:05 --> 03:51:10
I could see the same kind of stuff basically, just as an example,

03:51:09 --> 03:51:14
VLC being blamed for the kind of videos that people are watching.

03:51:13 --> 03:51:19
- But they tried, right? Like we had, we had issues. Like-

03:51:19 --> 03:51:24
I mean, is that, that's the pressure that people worry about because if you have to think about

03:51:23 --> 03:51:26
hat kind of stuff when you're kind of just obsessed about-

03:51:25 --> 03:51:30
No, you don't think about it- ... and that's, that's okay, right? Like-

03:51:29 --> 03:51:32
But what if they come in? When, what if they show up and-

03:51:31 --> 03:51:34
There is no office. VideoLAN doesn't have an office.

03:51:33 --> 03:51:38
- I mean, this is what happened with Pavel. They arrested him, right? So arrested him for

03:51:37 --> 03:51:43
particular videos or, or a particular content that's being shared on the platform.

03:51:42 --> 03:51:45
- Sure. I don't have any platform. Everything is on the client side.

03:51:45 --> 03:51:48
- Yeah, but they're, they can still arrest you.

03:51:47 --> 03:51:52
- On what ground? I'm not sharing anything. I'm not-- The content doesn't go through

03:51:51 --> 03:51:52
my stuff.

03:51:52 --> 03:51:56
- For sure, but it's still lawyer fees. That's the problem.

03:51:55 --> 03:51:56
- Yes, that's correct.

03:51:55 --> 03:52:02
- It's paperwork. So like, actually, if you had infinite trillions of dollars,

03:52:02 --> 03:52:09
You would win easily because you're on the right side. But the thing is, there

03:52:08 --> 03:52:13
is a degree to which they suffocate you with paperwork. That's the downside

03:52:12 --> 03:52:16
of bureaucracy, through paperwork, through process.

03:52:15 --> 03:52:18
You know, it's the Kafkaesque thing.

03:52:17 --> 03:52:22
- You have to realize that one of the good things, for example in

03:52:21 --> 03:52:26
France or most of Europe, is that the--

03:52:27 --> 03:52:32
Answering to a court order does not make you bankrupt, right? It's not like

03:52:31 --> 03:52:36
in the US, where it can actually bankrupt you, right? There is-- The

03:52:35 --> 03:52:39
way the law system works is that, like

03:52:39 --> 03:52:47
I receive lawyers' letters every week, right? And I can tell you that the cost

03:52:46 --> 03:52:52
of lawyer fees for VideoLAN is less than ten thousand dollars per year, right?

03:52:52 --> 03:52:54
Right? So that's not really scary.

03:52:53 --> 03:52:57
- I mean, similar with Pavel. The intelligence agencies tried to like

03:52:57 --> 03:53:00
say, "Can you put a backdoor in VLC?"

03:52:59 --> 03:53:01
- Yes. Two of them.

03:53:01 --> 03:53:03
- What, what do you say?

03:53:02 --> 03:53:06
- No. Well, I was a lot less polite.

03:53:05 --> 03:53:10
- I see you... Yeah, yeah. You're basically saying, "Hell no."

03:53:09 --> 03:53:14
- Like, if we had to compromise our software, we would shut it down. This is clear.

03:53:13 --> 03:53:18
- And what's the definition of co- compromise? Like allowing a

03:53:17 --> 03:53:20
government to do a backdoor-

03:53:19 --> 03:53:23
There is no code that gets into VLC that we don't control,

03:53:23 --> 03:53:28
and the way we compile VLC, you would call me completely paranoid.

03:53:28 --> 03:53:33
Like, we compile on boxes that are offline,

03:53:32 --> 03:53:37
where we start by compiling the compiler. We do everything

03:53:36 --> 03:53:40
offline on places that have never been connected to the

03:53:39 --> 03:53:44
internet. We-- The way we do signing, there is double

03:53:43 --> 03:53:48
signature. And especially because, for example, we've

03:53:47 --> 03:53:52
seen, and we believe it's a governmental agency that is

03:53:51 --> 03:53:55
not from the Western world who tried to push a fake

03:53:54 --> 03:53:59
binary into our own servers and that scared us a

03:53:58 --> 03:54:03
lot. And VideoLAN is open source. How can you kill it?

03:54:03 --> 03:54:08
Like, I move to where, right? I move to Malta. I move to I don't know,

03:54:07 --> 03:54:12
Cayman Islands, and I change the domain name, and I

03:54:11 --> 03:54:19
start again, right? Like, VLC is a tool. It's a tool that is going to help

03:54:18 --> 03:54:23
eople doing things. We are not a platform.

03:54:22 --> 03:54:27
And for patents, well, I'm sorry, but most of the

03:54:26 --> 03:54:30
patents... Like, you shouldn't be able to patent math and

03:54:29 --> 03:54:32
matrices. Like, this is wrong.

03:54:32 --> 03:54:36
- So does VLC ever, like, censor the kind of videos it

03:54:35 --> 03:54:40
can play and not based on the content of the video?

03:54:39 --> 03:54:42
- No, never. We never do that.

03:54:42 --> 03:54:47
Because, like, VLC is completely offline. It doesn't talk to

03:54:46 --> 03:54:50
any server, so we don't know anything that you're using the software for.

03:54:49 --> 03:54:54
- So again, there's no government that can say, you know,

03:54:54 --> 03:54:57
like the French government come in and say, "We don't want,

03:54:57 --> 03:55:02
uh... I think anime is destructive to society. We don't want any

03:55:01 --> 03:55:03
anime not allowed to be..."

03:55:02 --> 03:55:07
- No, they cannot, they cannot do that. And also what they tried is to say, "Hey,

03:55:06 --> 03:55:11
I want to know if that person watched that type of video." And the answer is like,

03:55:10 --> 03:55:12
"No idea."

03:55:11 --> 03:55:15
- So no on that too. So for surveillance, no.

03:55:14 --> 03:55:18
- No, no, because the only infrastructure we have is a downloading infrastructure.

03:55:18 --> 03:55:21
There is no telemetry in VLC, right?

03:55:20 --> 03:55:23
- It, it would be difficult 'cause of the international nature.

03:55:23 --> 03:55:28
It would be difficult for you to incorporate that code because there would be someone in the UK and

03:55:27 --> 03:55:32
someone in Germany and someone in the US as part of VideoLAN who'd

03:55:31 --> 03:55:34
be able to see that. It would be extremely difficult.

03:55:33 --> 03:55:38
- The only thing that we can do, which happened, is like we had the issue-- We had the

03:55:37 --> 03:55:42
case with some police in the US who said, "We have a murder case," right?

03:55:41 --> 03:55:46
"Uh, and the file is destructed or doesn't play in that version of VLC. Could

03:55:45 --> 03:55:50
you help us?" Right? We never have access to the video. It's like a normal support, right?

03:55:50 --> 03:55:52
- Oh, it's really about playing the file?

03:55:51 --> 03:55:56
- Yes. And, like, I remember in the middle of the Afghan War, right? I

03:55:55 --> 03:56:00
received an email from someone in the army, right? I

03:55:59 --> 03:56:04
don't remember the grades, right? It was just like, "We have a big issue with the latest

03:56:03 --> 03:56:08
version of VLC because it doesn't play

03:56:07 --> 03:56:12
correctly the file on an RTSP server that we have where there is

03:56:11 --> 03:56:15
all the movies." And he says VLC is very important for the

03:56:14 --> 03:56:19
morale on the troop on the ground, right? Because at night I think it might be boring, right?

03:56:18 --> 03:56:23
So they have a collection of videos to watch or movies over there, right? So and,

03:56:22 --> 03:56:27
and of course I did an update, and I broke some support of RTSP,

03:56:26 --> 03:56:31
right? So I gave them another version just for them, right? Because it was

03:56:30 --> 03:56:35
important. And because VLC is completely open source, I

03:56:34 --> 03:56:39
think it is allowed on the US Army laptops, right? Because I

03:56:38 --> 03:56:43
guess someone in, in the, in the US military actually looked

03:56:42 --> 03:56:47
at it and say, "Well, okay, this is okay," right? And the way we document how we

03:56:46 --> 03:56:51
process, that was okay, right? So the only way we work with

03:56:50 --> 03:56:54
authorities is to help them doing support.

03:56:53 --> 03:56:57
- That's amazing. That's an amazing story. Yeah.

03:56:56 --> 03:57:01
- We don't see anything happening on how people use VLC, and this is strong.

03:57:00 --> 03:57:05
- Do you feel the stress of this? So first of all, millions of people

03:57:04 --> 03:57:09
using it. Second of all, the military using it.

03:57:09 --> 03:57:12
Maybe sometimes pressure from governments.

03:57:11 --> 03:57:12
- Yes.

03:57:11 --> 03:57:16
- Does that, does that... That's a, that's a small team, right?

03:57:16 --> 03:57:17
- Yeah, but-

03:57:16 --> 03:57:21
How big is VLC- like the core contribu- how many?

03:57:21 --> 03:57:28
- Six, eight. But everything legally is only me. Everything that is legal is only me.

03:57:28 --> 03:57:30
- You're not stressed about this?

03:57:30 --> 03:57:33
- I used to stress about that a lot.

03:57:32 --> 03:57:38
But the thing is, we're doing what we can for everyone, for the greater good.

03:57:38 --> 03:57:42
We work that we make some extremely complex technology

03:57:41 --> 03:57:46
easy for everyone. We're a tool, and every

03:57:45 --> 03:57:50
tool is going to be used for great things and for bad things, right? You, you

03:57:49 --> 03:57:54
cannot blame a tool, I think. And this

03:57:53 --> 03:57:58
, like, very important for us. Um, I used to

03:57:57 --> 03:58:01
be a lot, in a lot of stress. I'm not anymore, right?

03:58:00 --> 03:58:05
- What's the secret to your zen? I mean- Over and over in the chats I've had

03:58:05 --> 03:58:10
with you in the conversation today about every

03:58:09 --> 03:58:14
even tense topic, you're very zen. What's the source of zen?

03:58:14 --> 03:58:23
- I have a way of thinking about what is the worst case scenario, always, right?

03:58:22 --> 03:58:28
And the answer is, at the end, if I take like a, like a chess player, right?

03:58:27 --> 03:58:34
In the end, am I dead? Yes or no? Right? And, and I do that nonstop, right?

03:58:33 --> 03:58:37
And that's also how I do my, my startups, right? Is that

03:58:37 --> 03:58:41
I'm here to get something right. What is the worst case? It goes

03:58:40 --> 03:58:45
bankrupt. That's life. A company lives, a company dies. That's

03:58:44 --> 03:58:49
okay, right? Like, and so my moral way is always like,

03:58:48 --> 03:58:53
am I dying in the end? Am I hurting someone? If the answer

03:58:52 --> 03:58:57
is no, then too bad, right? Like, oh, some lawyers are going to be

03:58:56 --> 03:59:00
unhappy. What are they going to do? Take all the money of VideoLAN?

03:58:59 --> 03:59:04
Wow. They're going to have 50 grand. Amazing, right? What are they

03:59:03 --> 03:59:08
going to do with that? The source code is out there. It's not

03:59:07 --> 03:59:13
stoppable. Also because what we do is good and it's done for everyone.

03:59:14 --> 03:59:20
- That's beautiful. Uh, Kieran, you said that there's an active archiving

03:59:19 --> 03:59:21
preservation community?

03:59:20 --> 03:59:25
I think that's super fascinating. You wrote that they're stretched in budget, but they

03:59:24 --> 03:59:28
see the extreme importance of FFmpeg as a Rosetta

03:59:27 --> 03:59:32
Stone so that multimedia can be played a thousand

03:59:31 --> 03:59:36
years from now. I mean, that's a beautiful way to see FFmpeg,

03:59:35 --> 03:59:42
VLC as a tool for preserving visual knowledge.

03:59:41 --> 03:59:46
- Yes, that's right. One of the coolest communities in open source

03:59:45 --> 03:59:50
multimedia, mainly led by someone called Dave Rice, I'll give him a shout-out, I think

03:59:49 --> 03:59:54
from City University of New York, is the archiving community. They've done

03:59:53 --> 03:59:58
so much stuff. They value the open source, one, because yes, they lack

03:59:57 --> 04:00:04
budgets, but two, they see the fact that archiving video is important for the world,

04:00:04 --> 04:00:09
and but being able to play that is a big problem. Famously in the UK,

04:00:08 --> 04:00:13
there was something called the New Domesday Book, and they archived

04:00:12 --> 04:00:17
lots of stuff on BBC microcomputers. Within 10 to 15 years, no one

04:00:16 --> 04:00:21
had the right software to play that. I think it was 20 years or something like

04:00:20 --> 04:00:24
that, and someone had to go and reverse engineer this, and that was like 20 years.

04:00:23 --> 04:00:26
Imagine that in a thousand years.

04:00:26 --> 04:00:31
I think one of the great things about FFmpeg is it's written in C. C is

04:00:30 --> 04:00:35
the closest to mathematics you're probably gonna get. The closest to logic is-

04:00:34 --> 04:00:38
Do you think in 1,000 years we'd still have C compilers?

04:00:37 --> 04:00:41
- Yes. We have languages that exist that haven't changed too much. We have

04:00:40 --> 04:00:45
mathematical notation that exists. It will be like Latin. C

04:00:44 --> 04:00:47
will be like Latin. It will be a thing that you learn

04:00:47 --> 04:00:51
from the past, but it will still be usable in certain contexts.

04:00:51 --> 04:00:55
So the archiving community are really great practically. They, again, limited

04:00:55 --> 04:00:59
funds. They funded the development of the FFV1 codec, so that's a

04:00:58 --> 04:01:03
lossless codec. So the archiving community is really scared about the

04:01:03 --> 04:01:07
act of compression losing things, and this could-- They have a fair point in this, you

04:01:06 --> 04:01:12
know. If they compress too hard, it could change the

04:01:12 --> 04:01:17
view of the material. There could be something slightly different here and there, so they're really

04:01:16 --> 04:01:21
concerned about things need to be not just compressed well, but lossless

04:01:20 --> 04:01:25
and be fast. And so they worked with FFmpeg to develop a whole new codec

04:01:24 --> 04:01:27
designed for fast software-based encoding.

04:01:27 --> 04:01:32
They're really concerned about resilience, so if they're storing on

04:01:31 --> 04:01:36
tapes or other hard disks, I lose some bits, I need to

04:01:35 --> 04:01:40
recover quickly. I can't lose a whole GOP because I've lost a bit-

04:01:39 --> 04:01:40
... something like that.

04:01:41 --> 04:01:46
So they're a really great bunch of people. They funded GPU encoding in FFmpeg

04:01:45 --> 04:01:49
to make FFV1 encode faster. And it's really about

04:01:48 --> 04:01:53
preserving the world's multimedia heritage in a way

04:01:53 --> 04:01:58
that's usable, and there's a lot of great teams and a lot of archival

04:01:57 --> 04:02:01
groups across the world who've, who've chosen FFmpeg and

04:02:00 --> 04:02:05
FFV1 as their archiving solution. And they can

04:02:04 --> 04:02:09
really provide us also super specialist advice. They can-

04:02:08 --> 04:02:14
... explain, "Ah, in the 1950s, colorimetry was done like this on this

04:02:13 --> 04:02:18
certain type of tape, and so there is

04:02:17 --> 04:02:21
this special case that you need to handle, and you'll never get this anywhere else."

04:02:20 --> 04:02:25
- You see, they know things on video that we don't.

04:02:24 --> 04:02:27
Like, every time I talk to, was it Dave-

04:02:26 --> 04:02:28
Dave Rice

04:02:27 --> 04:02:30
- ... or the people from the British, uh-

04:02:29 --> 04:02:31
British Film, uh

04:02:30 --> 04:02:35
- ... Film, it's just like every time I just learn something new, and I've been doing video for 20

04:02:34 --> 04:02:40
years. They have, especially on colorimetry and colors.

04:02:39 --> 04:02:41
- Storage, these other things.

04:02:40 --> 04:02:45
- I mean, they have a deep, deep appreciation of the content itself, of the

04:02:44 --> 04:02:49
video itself. And like, especially when you're thinking of lossless,

04:02:49 --> 04:02:53
they're terrified of losing something essential-

04:02:52 --> 04:02:57
... about the thing, and in so doing, they're deeply understanding the

04:02:56 --> 04:03:01
thing that is to be preserved, which you sometimes might not be thinking about when

04:03:00 --> 04:03:04
you're- ... obsessing about the actual technology of the encoding and so on.

04:03:03 --> 04:03:11
- And when you enter the rabbit hole of film scanners, right? So you take those-

04:03:10 --> 04:03:14
... those things to make to digital, like, it's like-

04:03:13 --> 04:03:19
... a huge topic that, like, would take another five hours of podcast-

04:03:18 --> 04:03:19
... just on that topic.

04:03:18 --> 04:03:23
- On film, and there's a lot of film that needs to be archived. Film is degrading. It's maybe not stored

04:03:22 --> 04:03:27
in the right environment. The other thing is they can... What they also do is, because it's open

04:03:26 --> 04:03:31
source, they give this away, their workflows, to countries who can't afford

04:03:30 --> 04:03:35
to have archiving institutions, where archiving is done by volunteers, it's done

04:03:34 --> 04:03:39
by other things. They go and teach, you know, in India, they teach children to do, to

04:03:38 --> 04:03:43
do FFmpeg commands. They're really great. They're really,

04:03:43 --> 04:03:47
They're really the model community, the model ethos of what we're trying to achieve.

04:03:46 --> 04:03:48
They are

04:03:48 --> 04:03:53
such a great bunch of people, so interested in participating and being part of

04:03:52 --> 04:03:57
something much bigger because they realize the work they're doing in a thousand

04:03:56 --> 04:03:59
years is gonna tell a lot.

04:03:59 --> 04:04:03
You know, in a thousand years we may be drowning in AI slop. This

04:04:03 --> 04:04:08
tuff needs to be important and, you know, archived well. What was life like?

04:04:07 --> 04:04:11
- Yeah, it feels like capturing the 20th century and the 21st century is

04:04:10 --> 04:04:17
essential because it feels like a transition point, where we went from scarcity

04:04:17 --> 04:04:25
of data to slop- ... oceans of slop, and that transition point is good to archive.

04:04:24 --> 04:04:26
- It's important, yeah.

04:04:25 --> 04:04:30
- But people don't realize we are losing today a ton of films.

04:04:29 --> 04:04:36
There is a ton of things from the '30s, from the '40s, and the '50s that where

04:04:36 --> 04:04:38
there is no value-

04:04:37 --> 04:04:41
And tape. '70s and '80s, there's tape, and there's not enough tape heads in the

04:04:41 --> 04:04:42
world-

04:04:41 --> 04:04:43
To read all the tapes

04:04:42 --> 04:04:46
- ... left to redo, so they have to decide what they want to archive and throw away the rest of the

04:04:45 --> 04:04:51
tapes. There's huge moral hazard, I guess for want of a better phrase, around this

04:04:50 --> 04:04:52
topic because

04:04:52 --> 04:04:56
this is a digital record of human history and they have to make decisions

04:04:57 --> 04:05:02
that... And there's digital stewardship, I suppose, for want of... I made that phrase up. That's not a real phrase.

04:05:01 --> 04:05:07
Um, to make sure the world can have this information in something that's playable

04:05:06 --> 04:05:08
by everybody, not-

04:05:08 --> 04:05:13
... playable on some device that, well, it doesn't exist anymore.

04:05:13 --> 04:05:17
- And then there's like, realistically speaking, there's a needle in a haystack

04:05:16 --> 04:05:21
where there's a lot of value in archiving all that

04:05:20 --> 04:05:25
footage, and then over time finding the gems- ... that we don't know are there.

04:05:25 --> 04:05:29
- Hey, there was something in that corner that we just didn't-

04:05:28 --> 04:05:29
Yeah. Uh-huh.

04:05:28 --> 04:05:33
- And that, that would've been compressed away because it was some little thing. Oh, wow, there's

04:05:32 --> 04:05:34
omething there.

04:05:33 --> 04:05:34
- That's it.

04:05:33 --> 04:05:37
- And, and that's... They've made sure that it's lossless. They can prove

04:05:36 --> 04:05:41
mathematically that it's lossless. They can run different

04:05:40 --> 04:05:45
rade-offs for if there's bit fro- if they lose a bit, a single bit flips, I

04:05:44 --> 04:05:49
can make sure that I only lose a portion of a given frame. We can do error

04:05:48 --> 04:05:52
they can do error recovery on previous frames. They can do all sorts of different things.

04:05:52 --> 04:05:57
- Do you think VLC and FFmpeg will be here 100 years from now?

04:05:57 --> 04:05:59
- FFmpeg, yes.

04:05:58 --> 04:06:00
- Yep, FFmpeg, yes.

04:05:59 --> 04:06:02
- VLC, maybe.

04:06:01 --> 04:06:05
- What's the future of... Where is FFmpeg going?

04:06:05 --> 04:06:09
Where is VLC going? Like in the next... If you think about, like, five

04:06:08 --> 04:06:11
years, 10 years, 20 years.

04:06:10 --> 04:06:17
- Five years, 10 years is easy. The question is after that, right? The question is-

04:06:16 --> 04:06:20
... do we arrive at something called holograms, right?

04:06:19 --> 04:06:27
- Yeah, so will VLC and FFmpeg expand- ... to whatever-

04:06:26 --> 04:06:28
Multimedia

04:06:27 --> 04:06:28
- ... multimedia-

04:06:27 --> 04:06:32
... so multimedia might become, I'm sorry for the pothead expansion of

04:06:31 --> 04:06:36
topic, but, you know if you look at something

04:06:35 --> 04:06:40
like Neuralink with brain computer interfaces, it's very possible that

04:06:39 --> 04:06:45
we start to consume what multimedia means is whatever

04:06:45 --> 04:06:49
codec, whatever data that our brain wants to consume through the

04:06:48 --> 04:06:53
brain computer interfaces. That's one. Then virtual reality, of course.

04:06:52 --> 04:06:55
- You will have VLC for Neuralink.

04:06:55 --> 04:06:59
- Yep, and you'll have FFmpeg -i input format human brain.

04:06:58 --> 04:07:02
- Yeah. There's gonna be codecs for the brain.

04:07:01 --> 04:07:02
- Sure, 100%.

04:07:03 --> 04:07:04
- Of course.

04:07:03 --> 04:07:06
- Yeah, to compress neural information, yeah.

04:07:05 --> 04:07:08
- I mean, today there is like, there are new codecs for-

04:07:07 --> 04:07:08
Whoa

04:07:07 --> 04:07:12
- ... for example, what we call point cloud, right? Or volumetric videos, right?

04:07:11 --> 04:07:16
There is a ton of research on what we call RGBD, right? So codecs for

04:07:15 --> 04:07:19
depths that is useful for robotics and for 3D things.

04:07:19 --> 04:07:20
- Nice.

04:07:19 --> 04:07:23
- There is a ton of codecs for compression of 3D elements.

04:07:22 --> 04:07:24
- Compression for astronomy.

04:07:23 --> 04:07:28
- Uh, for example, on VLC, we also have already a VR and XR version of

04:07:27 --> 04:07:32
VLC. And also on Kyber, right? We talk about Kyber. On Kyber, we also

04:07:31 --> 04:07:36
like do streaming of XR content on for the glasses who cannot

04:07:35 --> 04:07:40
have enough power or inside the Apple Vision or the Quest.

04:07:39 --> 04:07:48
So we already work on streaming 3D, XR, interactive, low latency. There is

04:07:47 --> 04:07:52
omething called volumetric video, point cloud videos, so it's

04:07:51 --> 04:07:55
not stopping. And yes, at some point it will manage 3D data

04:07:54 --> 04:07:58
inside VLC and FFmpeg, right? It's obvious.

04:07:58 --> 04:08:01
- So that's where it is moving, like the community is open.

04:08:01 --> 04:08:06
- Not everyone in the community sees that, but like, as Kieran

04:08:05 --> 04:08:10
d I, we are entrepreneurs, we know where it's going. We see that, right?

04:08:10 --> 04:08:14
- So I suppose that there is a tension probably inside FFmpeg. It's like,

04:08:14 --> 04:08:20
"Hey, listen, folks, we're really good at doing video and audio,

04:08:20 --> 04:08:25
so like why expand? Like let's do the thing we're really good at doing."

04:08:25 --> 04:08:29
- In order to answer that question, we need to answer the

04:08:28 --> 04:08:31
definition of what is multimedia.

04:08:31 --> 04:08:39
And multimedia is a digital representation of several

04:08:38 --> 04:08:47
streams for the human senses. And we will do that, right? So imagine there is now a

04:08:46 --> 04:08:53
way to not have a mic, but have an odor sensor- ... and a diffuser of odors.

04:08:52 --> 04:08:55
It will get into FFmpeg.

04:08:54 --> 04:08:57
- So your demuxer is coming up.

04:08:56 --> 04:08:57
- Yes. Yes.

04:08:57 --> 04:09:02
Of course, your demuxer has a new track type that is basically odors, right?

04:09:01 --> 04:09:03
And you already have-

04:09:02 --> 04:09:04
Smell, touch.

04:09:03 --> 04:09:07
- It's like audio. You'll have a left and right nose track. You have a left and right audio pair. It's easy.

04:09:07 --> 04:09:09
- Yes, of course.

04:09:09 --> 04:09:10
- Stereo smell.

04:09:09 --> 04:09:11
- Stereo smell, yeah.

04:09:10 --> 04:09:15
- So in VLC, for example, we already have a plugin for haptic. It's mostly

04:09:14 --> 04:09:19
for what we call 4D cinemas, right? You know, those ones on hydraulic,

04:09:18 --> 04:09:21
I don't know how you say that. All the hydraulic-

04:09:21 --> 04:09:23
Hydraulic arms. Hydraulic, um-

04:09:22 --> 04:09:26
Arms. And where everything is moving, like you have in theme parks, right?

04:09:25 --> 04:09:30
And there is a data feed synchronized where,

04:09:29 --> 04:09:33
which is basically transporting this information.

04:09:32 --> 04:09:34
- Is there yet a standard for that?

04:09:33 --> 04:09:36
- There are many standards, right? Um-

04:09:35 --> 04:09:38
This is... You make me so happy.

04:09:38 --> 04:09:44
- And so of course, like we have a plugin which is not in the normal version of VLC-

04:09:43 --> 04:09:44
That's good.

04:09:43 --> 04:09:48
- ... that is basically transporting those type of movements, which is physical movements,

04:09:47 --> 04:09:54
which is haptic movements, right? It is a human sense, so it will get in.

04:09:54 --> 04:09:58
- That's such an exciting future. Was it... I mean, it's a small

04:09:57 --> 04:10:01
community of developers. How do you pull that off?

04:10:01 --> 04:10:06
Like if you're a contributor to FFmpeg or VLC, it feels

04:10:05 --> 04:10:09
tressful. Like it, just looking on Twitter,

04:10:09 --> 04:10:14
it's like it's a huge amount of work to make

04:10:13 --> 04:10:18
it work on all these different operating systems, an incredible effort.

04:10:17 --> 04:10:21
- No, see it in the other direction. We are not

04:10:21 --> 04:10:24
he contributors. We are the maintainers,

04:10:24 --> 04:10:32
right? So we maintain for everyone. Meaning that, for example, every year there is

04:10:31 --> 04:10:35
around 150 people who contribute to VLC and maybe

04:10:34 --> 04:10:39
300 on FFmpeg, right? Our goal as a small team is

04:10:38 --> 04:10:43
to get all the contribution in. So if there is more

04:10:42 --> 04:10:47
usage, there will be more contributions, and those people will

04:10:46 --> 04:10:51
do the right module, the new format, and so on. We care

04:10:50 --> 04:10:55
about the architecture of VLC, the architecture of FFmpeg, right?

04:10:54 --> 04:10:59
Now we're doing things in VLC, which is spatial audio, right? We did the

04:10:58 --> 04:11:02
demo not long ago. There was

04:11:02 --> 04:11:07
changes needed on the architecture, and we did the first spatial audio

04:11:06 --> 04:11:11
module. When it's going to add the second one, it's going to be easy, or the third one is going to be easy,

04:11:10 --> 04:11:15
right? Our goal, and it's going to be the same for others or

04:11:14 --> 04:11:19
haptic, right? We need to work the architecture so that modules can

04:11:18 --> 04:11:21
be added to add future capabilities.

04:11:21 --> 04:11:25
So yes, we are going... We are multimedia framework, so that's not

04:11:25 --> 04:11:32
just audio and video. It's everything that is timed and-Represent

04:11:32 --> 04:11:37
something that you can sense. And if it's brainwaves, it's going to be brainwaves.

04:11:36 --> 04:11:39
- I think that's inevitable. Sorry.

04:11:38 --> 04:11:43
- I love this on so many fronts because, so FFmpeg and VLC are

04:11:43 --> 04:11:48
pushing companies and pushing the world to

04:11:47 --> 04:11:50
standardize. So for example, to standardize-

04:11:49 --> 04:11:54
... brainwaves, right? So standardize... It would push,

04:11:53 --> 04:11:59
like I hope Neuralink comes up with a standard for, for multimedia

04:12:00 --> 04:12:05
via brain computer interfaces or for robots with haptic.

04:12:05 --> 04:12:08
- By experience, what happens is always the same, right?

04:12:08 --> 04:12:12
You start, it's a new topic. There is like five different standards

04:12:12 --> 04:12:17
because everyone starts to do this. The hype goes down because every time the hype

04:12:16 --> 04:12:21
goes down, then people start to say, "Well, you know what? You, we need to do a

04:12:20 --> 04:12:25
standard." People, because two or three companies, usually not the leader, but

04:12:24 --> 04:12:27
he two or three followers do a standard,

04:12:27 --> 04:12:32
and then we implement the standard and, and then it's the end of the curve.

04:12:31 --> 04:12:33
It starts to be more paper.

04:12:32 --> 04:12:37
- And then the leader's kind of pressured into it because it is better to do a

04:12:36 --> 04:12:37
standard. Yeah.

04:12:36 --> 04:12:39
- Example, 3D audio, right?

04:12:39 --> 04:12:44
Six or seven years ago, it was everything about 3D. You go, you had the Cardboard on

04:12:43 --> 04:12:47
Android. You had two audio formats. They're all dead, right?

04:12:47 --> 04:12:52
And now it's coming back with actual use cases, and we learn

04:12:51 --> 04:12:57
from the mistakes of the past standard. So it will be the same everywhere.

04:12:56 --> 04:13:01
- And not try to avoid closed. I saw somewhere you,

04:13:00 --> 04:13:03
you didn't have too many nice things to say about Dolby.

04:13:03 --> 04:13:05
- No, I don't. Um-

04:13:04 --> 04:13:09
What is can you educate me on why,

04:13:09 --> 04:13:13
where they went, what, what did they do bad that made you mad?

04:13:13 --> 04:13:18
- It used to be an amazing company doing tons

04:13:17 --> 04:13:23
of great things with amazing engineers. They defined what sound was.

04:13:22 --> 04:13:26
And now it's mostly-

04:13:25 --> 04:13:26
Lawyers

04:13:25 --> 04:13:27
- ... lawyers and licensing things.

04:13:27 --> 04:13:31
- Oh, so they're, yeah, it's, they're closing stuff off. They're trying to make money on licensing.

04:13:30 --> 04:13:34
- No, it's just like they don't innovate as much as they did-

04:13:33 --> 04:13:34
I see

04:13:33 --> 04:13:38
- ... and so on. It's a bit like I'm sorry to say, right, like HP, right?

04:13:38 --> 04:13:40
- Very true.

04:13:40 --> 04:13:45
- Oh, since we talked about Twitter a bunch in different contexts, do you have a,

04:13:44 --> 04:13:50
do you have a favorite, do you have a, and least favorite, most embarrassing tweet

04:13:50 --> 04:13:53
on either VideoLAN or FFmpeg Twitters?

04:13:53 --> 04:13:58
- The two, my two favorites are, "Talk is cheap, send patches." I think that, that-

04:13:57 --> 04:14:02
... embodies a lot of the stuff doesn't get, as we've talked about, stuff

04:14:01 --> 04:14:05
doesn't get built unless someone does it. It doesn't just appear from the ether.

04:14:05 --> 04:14:10
The other one that I like is "FFmpeg, nothing is beyond our reach."

04:14:10 --> 04:14:15
I think that comes from a US military satellite patch where I think they, they invented some

04:14:14 --> 04:14:20
kind of monitoring system that could see the whole world, and this was released.

04:14:19 --> 04:14:23
- Wasn't there something where FFmpeg was running on a rover on Mars also?

04:14:22 --> 04:14:26
- Yeah, so FFmpeg is used by the Mars rover the Mars 2020

04:14:26 --> 04:14:31
rover to compress pictures. They really wanted—they

04:14:30 --> 04:14:35
wrote a paper about it, and they really wanted to use as much commercial off-the-shelf technology as

04:14:34 --> 04:14:35
possible.

04:14:34 --> 04:14:36
- Oh, that's cool.

04:14:35 --> 04:14:40
- FFmpeg runs on Mars, so we are a multi-planetary open source library.

04:14:39 --> 04:14:41
- Nice.

04:14:41 --> 04:14:44
- Very often we've seen—

04:14:43 --> 04:14:45
- Nice

04:14:44 --> 04:14:49
- ... Tweets for people using VLC in weird

04:14:48 --> 04:14:52
places. A lot of the people doing Formula 1

04:14:52 --> 04:14:56
are in all the paddocks, they use VLC to play the live feed. We've

04:14:55 --> 04:15:00
seen the European Space Agency. We've seen SpaceX, like,

04:14:59 --> 04:15:04
monitoring the launches with VLC, and, like, it, like,

04:15:03 --> 04:15:06
fills you with joy, right? So-

04:15:05 --> 04:15:08
I've seen a particle accelerator.

04:15:07 --> 04:15:12
- Oh, yeah, yeah. We had one of the most amazing things that I

04:15:12 --> 04:15:20
went for was to go to the CERN at the LHC because they were using VLC to monitor all

04:15:19 --> 04:15:24
the sensors on the ring because the ring is 27 kilometers.

04:15:23 --> 04:15:28
And so they had some analog cameras-

04:15:27 --> 04:15:31
... and they were using some of the capture cards to go to analog to

04:15:30 --> 04:15:35
VLC, so VLC could stream on their multicast network for the whole CERN

04:15:34 --> 04:15:43
to access that. And, like, I visited that in 2010 with Laurent and—

04:15:43 --> 04:15:48
like, we fixed their issue in an hour or something like that, right? Because it was

04:15:47 --> 04:15:52
ome parameters maybe not well documented at that time.

04:15:51 --> 04:15:56
And he said, "Okay, for the whole day, what do you want to do?" And we visited everything. Like- ...

04:15:55 --> 04:16:01
things with antimatter and—and colliders and so on.

04:16:00 --> 04:16:06
And that was, like, one of the most amazing days of my physics background.

04:16:06 --> 04:16:13
- Yeah, it's used, like, everywhere. Any tweets, uh, Kieran, you regret?

04:16:12 --> 04:16:14
- Tweets I regret?

04:16:14 --> 04:16:18
- Or is it like that, how does the French song go? Regret nothing.

04:16:17 --> 04:16:20
- "Je ne regrette rien." Yeah.

04:16:19 --> 04:16:22
- Yes. Uh, that's very important for me, right?

04:16:21 --> 04:16:26
Don't regret anything. No, it's because regrets

04:16:26 --> 04:16:32
are a tax on your mind, right? So learn from your mistakes, but don't regret.

04:16:31 --> 04:16:37
Because you've done it, so unless you have a time machine to go back in time,

04:16:37 --> 04:16:42
don't regret, right? It's going to just tax your brain. Learn from your mistake,

04:16:41 --> 04:16:43
sure. Don't regret.

04:16:43 --> 04:16:48
- It's like it reminds me, it's beautiful. It's a tax on your brain. It reminds me of the Johnny Depp

04:16:47 --> 04:16:52
quote I saw where he was saying, "Hate, you know, I

04:16:51 --> 04:16:56
don't hate. That's, hate is a very expensive emotion."

04:16:56 --> 04:17:00
- Are you comparing me to Johnny Depp? Because that would be your first one.

04:17:00 --> 04:17:04
- Well, gentlemen like I said, I'm eternally

04:17:03 --> 04:17:08
grateful for the software that, you know, the two of you and

04:17:07 --> 04:17:12
the bigger community have been part of building with FFmpeg and VLC and everything

04:17:11 --> 04:17:18
else. I'm eternally grateful for the spicy tweets. Never stop.

04:17:17 --> 04:17:23
And I'm grateful that you would talk with me today and give me this

04:17:23 --> 04:17:29
exy hat. I feel like a wizard. I feel special. And I feel

04:17:28 --> 04:17:33
special to get a chance to talk and celebrate the piece of software that brought me so much joy over

04:17:33 --> 04:17:36
the years. So thank you for everything, and thank you for talking today.

04:17:36 --> 04:17:37
- Thank you for having us.

04:17:37 --> 04:17:38
- Thank you so much.

04:17:38 --> 04:17:43
- Thanks for listening to this conversation with Jean-Baptiste Kempf and Kieran Kunhya.

04:17:43 --> 04:17:48
To support this podcast, please check out our sponsors in the description where you can

04:17:47 --> 04:17:52
also find links to contact me, ask questions, give feedback, and so on.

04:17:51 --> 04:17:57
And now let me leave you with some words from the legendary Linus Torvalds.

04:17:57 --> 04:18:02
"Most good programmers do programming not because they expect to get

04:18:01 --> 04:18:08
paid or get adulation by the public, but because it is fun to program."

04:18:08 --> 04:18:12
Thank you for listening, and I hope to see you next time.

<!-- YOUTUBE_TRANSCRIPT_END -->
