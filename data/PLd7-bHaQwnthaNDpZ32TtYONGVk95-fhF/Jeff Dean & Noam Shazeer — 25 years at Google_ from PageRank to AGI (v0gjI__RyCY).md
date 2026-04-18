---
archive_version: 2
source: "youtube"
source_type: "playlist"
video_id: "v0gjI__RyCY"
title: "Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI"
video_url: "https://www.youtube.com/watch?v=v0gjI__RyCY"
channel_name: "Dwarkesh Patel"
channel_id: "UCXl4i9dYBrFOabk0xGmbkRA"
uploader_id: "@DwarkeshPatel"
published_at: "2025-02-12T19:56:35.000Z"
upload_date: "2025-02-12"
duration_seconds: 8135
duration_human: "2:15:35"
view_count: 302006
like_count: 4651
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-18T13:59:20.074Z"
---

# Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI

## Video Summary
- source_type: playlist
- video_url: https://www.youtube.com/watch?v=v0gjI__RyCY
- video_id: v0gjI__RyCY
- channel_name: Dwarkesh Patel
- channel_id: UCXl4i9dYBrFOabk0xGmbkRA
- uploader_id: @DwarkeshPatel
- uploader_url: https://www.youtube.com/@DwarkeshPatel
- published_at: 2025-02-12T19:56:35.000Z
- upload_date: 2025-02-12
- duration: 2:15:35
- view_count: 302006
- like_count: 4651
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

This week I welcome two of the most important technologists in any field. Jeff Dean is Google's Chief Scientist, and through 25 years at the company, has worked on basically the most transformative systems in modern computing: from MapReduce, BigTable, Tensorflow, AlphaChip, to Gemini. Noam Shazeer invented or co-invented all the main architectures and techniques that are used for modern LLMs: from the Transformer itself, to Mixture of Experts, to Mesh Tensorflow, to Gemini and many other things. We talk about their 25 years at Google, going from PageRank to MapReduce to the Transformer to MoEs to AlphaChip – and soon to ASI.

𝐄𝐏𝐈𝐒𝐎𝐃𝐄 𝐋𝐈𝐍𝐊𝐒
* Transcript: https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer
* Apple Podcasts: https://podcasts.apple.com/us/podcast/jeff-dean-noam-shazeer-25-years-at-google-from-pagerank/id1516093381?i=1000691556147
* Spotify: https://open.spotify.com/episode/4atx1POpKIL8WGvdVfdnbb?si=DLn5uQYMQMWKPTTkj5pt_A

𝐒𝐏𝐎𝐍𝐒𝐎𝐑𝐒
* Meter wants to radically improve the digital world we take for granted. They’re developing a foundation model that automates network management end-to-end. To do this, they just announced a long-term partnership with Microsoft for tens of thousands of GPUs, and they’re recruiting a world class AI research team. To learn more, go to https://meter.com/dwarkesh

* Scale partners with major AI labs like Meta, Google Deepmind, and OpenAI. Through Scale’s Data Foundry, labs get access to high-quality data to fuel post-training, including advanced reasoning capabilities. If you’re an AI researcher or engineer, learn about how Scale’s Data Foundry and research lab, SEAL, can help you go beyond the current frontier at https://scale.com/dwarkesh

* Curious how Jane Street teaches their new traders? They use Figgie, a rapid-fire card game that simulates the most exciting parts of markets and trading. It’s become so popular that Jane Street hosts an inter-office Figgie championship every year. Download from the app store or play on your desktop at https://www.figgie.com/

To sponsor a future episode, visit https://www.dwarkesh.com/p/advertise

𝐓𝐈𝐌𝐄𝐒𝐓𝐀𝐌𝐏𝐒
00:00:00 - Intro
00:03:29 - Joining Google in 1999
00:06:20 - Future of Moore's Law
00:11:04 - Future TPUs
00:13:56 - Jeff’s undergrad thesis: parallel backprop
00:15:54 - LLMs in 2007 
00:25:09 - “Holy shit” moments
00:27:28 - AI fulfills Google’s original mission
00:32:00 - Doing Search in-context
00:36:12 - The internal coding model
00:37:29 - What will 2027 models do?
00:43:20 - A new architecture every day?
00:49:10 - Automated chips and intelligence explosion
00:53:07 - Future of inference scaling
01:02:38 - Already doing multi-datacenter runs
01:08:15 - Debugging at scale
01:12:41 - Fast takeoff and superalignment
01:20:51 - A million evil Jeff Deans
01:24:22 - Fun times at Google 
01:27:51 - World compute demand in 2030
01:34:37 - Getting back to modularity
01:44:48 - Keeping a giga-MoE in-memory
01:49:35 - All of Google in one model
01:57:59 - What’s missing from distillation 
02:03:10 - Open research, pros and cons
02:09:58 - Going the distance

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

Today I have the honor of chatting with Jeff&nbsp; Dean and Noam Shazeer. Jeff is Google's Chief&nbsp;&nbsp; Scientist, and through his 25 years at the&nbsp; company, he has worked on basically the most&nbsp;&nbsp; transformative systems in modern computing: from&nbsp;

MapReduce, BigTable, Tensorflow, AlphaChip –&nbsp;&nbsp; genuinely, the list doesn't end – Gemini now. And Noam is the single person most responsible&nbsp;&nbsp; for the current AI revolution. He has been&nbsp; the inventor or co-inventor of all the main&nbsp;&nbsp;

architectures and techniques that are used&nbsp; for modern LLMs: from the Transformer itself,&nbsp;&nbsp; to Mixture of Experts, to Mesh Tensorflow, to&nbsp; many other things. And they are two of the three&nbsp;&nbsp; co-leads of Gemini at Google DeepMind.&nbsp;

Awesome. Thanks so much for coming on. &nbsp; Thank you. Super excited to be here. Okay, first question. Both of you&nbsp;&nbsp; have been at Google for 25, or close to 25,&nbsp;

years. At some point early on in the company,&nbsp;&nbsp; you probably understood how everything worked.&nbsp; When did that stop being the case? Do you feel&nbsp;&nbsp; like there was a clear moment that happened? I joined, this was like, end of 2000, and they&nbsp;&nbsp;

had this thing: everybody gets a mentor. I knew&nbsp; nothing. I would just ask my mentor everything,&nbsp;&nbsp; and my mentor knew everything. It&nbsp; turned out my mentor was Jeff. &nbsp;

It was not the case that everyone at&nbsp; Google knew everything. It was just the&nbsp;&nbsp; case that Jeff knew everything because&nbsp; he had basically written everything. &nbsp;

You're very kind. I think as companies grow, you&nbsp; kind of go through these phases. When I joined,&nbsp;&nbsp; we were 25 people, 26 people, something like that.&nbsp; So you eventually you learned everyone's name,&nbsp;&nbsp; and even though we were growing, you kept&nbsp;

track of all the people who were joining. &nbsp; At some point, you lose track of everyone's&nbsp; name in the company, but you still know everyone&nbsp;&nbsp; working on software engineering things. Then&nbsp;

you lose track of all the names of people in&nbsp;&nbsp; the software engineering group, but you at&nbsp; least know all the different projects that&nbsp;&nbsp; everyone's working on. Then at some point, the&nbsp; company gets big enough that you get an email&nbsp;&nbsp;

that Project Platypus is launching on Friday, and&nbsp; you're like, "What the heck is Project Platypus?" &nbsp; Usually it's a very good surprise.&nbsp; You're like, "Wow, Project&nbsp;&nbsp;

Platypus!" I had no idea we were doing that. But I think it is good to keep track of what's&nbsp;&nbsp; going on in the company, even at a very high&nbsp; level, even if you don't know every last detail.&nbsp;&nbsp; And it's good to know lots of people throughout&nbsp;

the company so that you can go ask someone for&nbsp;&nbsp; more details or figure out who to talk to. With&nbsp; one level of indirection, you can usually find&nbsp;&nbsp; the right person in the company if you have a good&nbsp; network of people that you've built up over time.

&nbsp; How did Google recruit you, by the way? I kind of reached out to them, actually. &nbsp; And Noam, how did you get recruited?

I actually saw Google at a job fair in 1999,&nbsp;&nbsp; and I assumed that it was already this huge&nbsp; company, that there was no point in joining,&nbsp;&nbsp; because everyone I knew used Google.&nbsp; I guess that was because I was a grad&nbsp;&nbsp;

student at Berkeley at the time. I guess I've&nbsp; dropped out of grad programs a few times. &nbsp; It turns out that actually it wasn't really that&nbsp; large. It turns out that I did not apply in 1999,&nbsp;&nbsp;

but just kind of sent them a resume on a whim in&nbsp; 2000, because I figured it was my favorite search&nbsp;&nbsp; engine, and figured I should apply to multiple&nbsp; places for a job. But then it turned out to be&nbsp;&nbsp; really fun, it looked like a bunch of smart people&nbsp;

doing good stuff. They had this really nice crayon&nbsp;&nbsp; chart on the wall of the daily number of search&nbsp; queries that somebody had just been maintaining.&nbsp;&nbsp; It looked very exponential. I thought, "These guys&nbsp; are going to be very successful, and it looks like&nbsp;&nbsp;

they have a lot of good problems to work on." So&nbsp; I was like, "Okay, maybe I'll go work there for&nbsp;&nbsp; a little while and then have enough money to just&nbsp; go work on AI for as long as I want after that." &nbsp;

Yeah, yeah. In a way you did that, right? Yeah, it totally worked out&nbsp;&nbsp; exactly according to plan. You were thinking about AI in 1999? &nbsp;

Yeah, this was like 2000. Yeah, I remember in&nbsp; grad school, a friend of mine at the time had&nbsp;&nbsp; told me that his New Year's resolution for 2000&nbsp; was to live to see the year 3000, and that he&nbsp;&nbsp; was going to achieve this by inventing AI. I&nbsp;

was like, "Oh, that sounds like a good idea." &nbsp; I didn't get the idea at the time that you could&nbsp; go do it at a big company. But I figured, "Hey,&nbsp;&nbsp; a bunch of people seem to be making a ton of money&nbsp;

at startups. Maybe I'll just make some money,&nbsp;&nbsp; and then I'll have enough to live on and just&nbsp; work on AI research for a long time." But yeah,&nbsp;&nbsp; it actually turned out that Google&nbsp; was a terrific place to work on AI.

&nbsp; One of the things I like about Google is our&nbsp; ambition has always been sort of something&nbsp;&nbsp; that would require pretty advanced AI. Because&nbsp; I think organizing the world's information and&nbsp;&nbsp;

making it universally accessible and useful,&nbsp; actually there is a really broad mandate in&nbsp;&nbsp; there. It's not like the company was going&nbsp; to do this one little thing and stay doing&nbsp;&nbsp; that. And also you could see that what we&nbsp;

were doing initially was in that direction,&nbsp;&nbsp; but you could do so much more in that direction. How has Moore's Law over the last two or three&nbsp;&nbsp; decades changed the kinds of considerations you&nbsp; have to take on board when you design new systems,&nbsp;&nbsp;

when you figure out what projects&nbsp; are feasible? What are still the&nbsp;&nbsp; limitations? What are things you can now&nbsp; do that you obviously couldn't do before? &nbsp;

I think of it as actually changing quite a bit&nbsp; in the last couple of decades. Two decades ago&nbsp;&nbsp; to one decade ago, it was awesome because&nbsp; you just wait, and like 18 months later,&nbsp;&nbsp; you get much faster hardware, and you don't have&nbsp;

to do anything. And then more recently, I feel&nbsp;&nbsp; like the general-purpose CPU-based machine scaling&nbsp; has not been as good, like the fabrication process&nbsp;&nbsp; improvements are now taking three years instead of&nbsp; every two years. The architectural improvements in&nbsp;&nbsp;

multi-core processors and so on are not giving you&nbsp; the same boost that we were getting 20 to 10 years&nbsp;&nbsp; ago. But I think at the same time, we're seeing&nbsp; much more specialized computational devices,&nbsp;&nbsp; like machine learning accelerators, TPUs,&nbsp;

and very ML-focused GPUs, more recently,&nbsp;&nbsp; are making it so that we can actually get really&nbsp; high performance and good efficiency out of the&nbsp;&nbsp; more modern kinds of computations we want to run&nbsp; that are different than a twisty pile of C++ code&nbsp;&nbsp;

trying to run Microsoft Office or something. It feels like the algorithms are following the&nbsp;&nbsp; hardware. Basically, what's happened is that&nbsp; at this point, arithmetic is very, very cheap,&nbsp;&nbsp; and moving data around is comparatively much&nbsp;

more expensive. So pretty much all of deep&nbsp;&nbsp; learning has taken off roughly because of that.&nbsp; You can build it out of matrix multiplications&nbsp;&nbsp; that are N cubed operations and N squared&nbsp; bytes of data communication basically.

&nbsp; Well, I would say that the pivot&nbsp; to hardware oriented around that&nbsp;&nbsp; was an important transition,&nbsp; because before that, we had CPUs&nbsp;&nbsp;

and GPUs that were not especially well-suited for&nbsp; deep learning. And then we started to build TPUs&nbsp;&nbsp; at Google that were really just reduced-precision&nbsp; linear algebra machines, and then once you&nbsp;&nbsp; have that then you want to exploit it.

It seems like it's all about identifying&nbsp;&nbsp; opportunity costs. Like, okay, this is something&nbsp; like Larry Page, I think, used to always say:&nbsp;&nbsp; "Our second biggest cost is taxes, and our biggest&nbsp; cost is opportunity costs." If he didn't say that,&nbsp;&nbsp;

then I've been misquoting him for years. But basically it’s like, what is the opportunity&nbsp;&nbsp; that you have that you're missing out on? In&nbsp; this case, I guess it was that you've got all&nbsp;&nbsp; of this chip area, and you're putting a very&nbsp;

small number of arithmetic units on it. Fill&nbsp;&nbsp; the thing up with arithmetic units! You could have&nbsp; orders of magnitude more arithmetic getting done. &nbsp; Now, what else has to change? Okay, the&nbsp;

algorithms and the data flow and everything else. &nbsp; And, oh, by the way, the arithmetic can&nbsp; be really low precision, so then you&nbsp;&nbsp; can squeeze even more multiplier units in.

Noam, I want to follow up on what you said,&nbsp;&nbsp; that the algorithms have been following the&nbsp; hardware. If you imagine a counterfactual&nbsp;&nbsp; world where, suppose that the cost of&nbsp; memory had declined more than arithmetic,&nbsp;&nbsp;

or just invert the dynamic you saw. Okay, data flow is extremely cheap,&nbsp;&nbsp; and arithmetic is not. What would AI look like today? &nbsp;

You'd have a lot more lookups&nbsp; into very large memories. &nbsp; Yeah, it might look more like AI looked like 20&nbsp; years ago but in the opposite direction. I'm not&nbsp;&nbsp;

sure. I guess I joined Google Brain in 2012. I&nbsp; left Google for a few years, happened to go back&nbsp;&nbsp; for lunch to visit my wife, and we happened to sit&nbsp; down next to Jeff and the early Google Brain team.&nbsp;&nbsp; I thought, "Wow, that's a smart group of people."

I think I said, "You should think about&nbsp;&nbsp; deep neural nets. We're making&nbsp; some pretty good progress there." &nbsp; "That sounds fun." Okay, so I jumped back in…

I wooed him back, it was great. &nbsp; ..to join Jeff, that was like 2012. I seem&nbsp; to join Google every 12 years: I rejoined&nbsp;&nbsp; Google in 2000, 2012, and 2024.

What's going to happen in 2036? &nbsp; I don't know. I guess we shall see. What are the trade-offs that you're&nbsp;&nbsp; considering changing for future versions of TPU to&nbsp;

integrate how you're thinking about algorithms? &nbsp; I think one general trend is we're getting&nbsp; better at quantizing or having much more&nbsp;&nbsp; reduced precision models. We started with TPUv1,&nbsp;

and we weren't even quite sure we could quantize&nbsp;&nbsp; and model for serving with eight-bit integers.&nbsp; But we sort of had some early evidence that&nbsp;&nbsp; seemed like it might be possible. So we're like,&nbsp; "Great, let's build the whole chip around that."

&nbsp; And then over time, I think you've seen people&nbsp; able to use much lower precision for training&nbsp;&nbsp; as well. But also the inference precision has&nbsp; gone. People are now using INT4 or FP4, which&nbsp;&nbsp;

sounded like, if you said to someone like we're&nbsp; going to use FP4, like a supercomputing floating&nbsp;&nbsp; point person 20 years ago, they'd be like, "What?&nbsp; That's crazy. We like 64 bits in our floats." &nbsp;

Or even below that, some people are quantizing&nbsp; models to two bits or one bit, and I think&nbsp;&nbsp; that's a trend that definitely – One bit? Just like a zero-or-one? &nbsp;

Yeah, just a 0-1. And then you have a sign&nbsp; bit for a group of bits or something. &nbsp; It really has to be a co-design thing because,&nbsp; if the algorithm designer doesn't realize&nbsp;&nbsp;

that you can get greatly improved performance,&nbsp; throughput, with the lower precision, of course,&nbsp;&nbsp; the algorithm designer is going to say, "Of&nbsp; course, I don't want low precision. That&nbsp;&nbsp; introduces risk." And then it adds irritation.

Then if you ask the chip designer, "Okay,&nbsp;&nbsp; what do you want to build?" And then they'll ask&nbsp; the person who's writing the algorithms today,&nbsp;&nbsp; who's going to say, "No, I don't like&nbsp; quantization. It's irritating." So you actually&nbsp;&nbsp;

need to basically see the whole picture and figure&nbsp; out, "Oh, wait a minute, we can increase our&nbsp;&nbsp; throughput-to-cost ratio by a lot by quantizing." Then you're like, yes, quantization is irritating,&nbsp;&nbsp; but your model is going to be three times&nbsp;

faster, so you're going to have to deal. &nbsp; Through your careers, at various times,&nbsp; you’ve worked on things that have an&nbsp;&nbsp; uncanny resemblance to what we're actually&nbsp;

using now for generative AI. In 1990, Jeff,&nbsp;&nbsp; your senior thesis was about backpropagation.&nbsp; And in 2007- this is the thing that I didn’t&nbsp;&nbsp; realise until I was prepping for this episode&nbsp; – in 2007 you guys trained a two trillion&nbsp;&nbsp;

token N-gram model for language modeling. Just walk me through when you were developing that&nbsp;&nbsp; model. Was this kind of thing in your head? What&nbsp; did you think you guys were doing at the time? &nbsp;

Let me start with the undergrad thesis. I got&nbsp; introduced to neural nets in one section of one&nbsp;&nbsp; class on parallel computing that I was taking&nbsp; in my senior year. I needed to do a thesis to&nbsp;&nbsp; graduate, an honors thesis. So I approached&nbsp;

the professor and I said, "Oh, it'd be really&nbsp;&nbsp; fun to do something around neural nets." So, he and I decided I would implement&nbsp;&nbsp; a couple of different ways of parallelizing&nbsp; backpropagation training for neural nets in 1990.&nbsp;&nbsp;

I called them something funny in my thesis, like&nbsp; "pattern partitioning" or something. But really,&nbsp;&nbsp; I implemented a model parallelism and data&nbsp; parallelism on a 32-processor Hypercube machine. &nbsp;

In one, you split all the examples into&nbsp; different batches, and every CPU has a copy&nbsp;&nbsp; of the model. In the other one, you pipeline&nbsp; a bunch of examples along to processors that&nbsp;&nbsp; have different parts of the model. I compared&nbsp;

and contrasted them, and it was interesting. &nbsp; I was really excited about the abstraction&nbsp; because it felt like neural nets were the right&nbsp;&nbsp; abstraction. They could solve tiny toy problems&nbsp;

that no other approach could solve at the time.&nbsp;&nbsp; I thought, naive me, that 32 processors would&nbsp; be able to train really awesome neural nets. &nbsp; But it turned out we needed about a million&nbsp;

times more compute before they really started&nbsp;&nbsp; to work for real problems, but then starting&nbsp; in the late 2008, 2009, 2010 timeframe,&nbsp;&nbsp; we started to have enough compute, thanks&nbsp; to Moore's law, to actually make neural&nbsp;&nbsp;

nets work for real things. That was kind of&nbsp; when I re-entered, looking at neural nets. &nbsp; But prior to that, in 2007... Sorry, actually could I ask about this?

&nbsp; Oh yeah, sure. First of all,&nbsp;&nbsp; unlike other artifacts of academia, it's actually&nbsp; like four pages, and you can just read it.

&nbsp; It was four pages and then 30 pages of C code. But it's just a well-produced artifact. Tell&nbsp;&nbsp; me about how the 2007 paper came together. Oh yeah, so that, we had a machine translation&nbsp;&nbsp;

research team at Google led by Franz Och,&nbsp; who had joined Google maybe a year before,&nbsp;&nbsp; and a bunch of other people. Every year they&nbsp; competed in a DARPA contest on translating&nbsp;&nbsp; a couple of different languages to English, I&nbsp;

think, Chinese to English and Arabic to English. &nbsp; The Google team had submitted an entry, and the&nbsp; way this works is you get 500 sentences on Monday,&nbsp;&nbsp; and you have to submit the answer on Friday. I&nbsp;

saw the results of this, and we'd won the contest&nbsp;&nbsp; by a pretty substantial margin measured in Bleu&nbsp; score, which is a measure of translation quality. &nbsp; So I reached out to Franz, the head of this&nbsp;

winning team. I'm like, "This is great,&nbsp;&nbsp; when are we going to launch it?" And he's like,&nbsp; "Oh, well, we can't launch this. It's not really&nbsp;&nbsp; very practical because it takes 12 hours to&nbsp; translate a sentence." I'm like, "Well, that&nbsp;&nbsp;

seems like a long time. How could we fix that?" It turned out they'd not really designed it for&nbsp;&nbsp; high throughput, obviously. It was doing&nbsp; 100,000 disk seeks in a large language&nbsp;&nbsp; model that they sort of computed statistics&nbsp;

over – I wouldn't say "trained" really – for&nbsp;&nbsp; each word that it wanted to translate. Obviously, doing 100,000 disk seeks is&nbsp;&nbsp; not super speedy. But I said, "Okay, well, let's&nbsp; dive into this." So I spent about two or three&nbsp;&nbsp;

months with them, designing an in-memory&nbsp; compressed representation of N-gram data. &nbsp; We were using- an N-gram is basically statistics&nbsp; for how often every N-word sequence occurs in a&nbsp;&nbsp;

large corpus, so you basically have, in this case,&nbsp; we had 2 trillion words. Most N-gram models of the&nbsp;&nbsp; day were using two-grams or maybe three-grams,&nbsp; but we decided we would use five-grams. &nbsp;

So, how often every five-word sequence occurs in&nbsp; basically as much of the web as we could process&nbsp;&nbsp; in that day. Then you have a data structure that&nbsp; says, "Okay, 'I really like this restaurant'&nbsp;&nbsp; occurs 17 times in the web, or something.

And so I built a data structure that would let&nbsp;&nbsp; you store all those in memory on 200 machines&nbsp; and then have sort of a batched API where you&nbsp;&nbsp; could say, "Here are the 100,000 things I need&nbsp; to look up in this round for this word," and&nbsp;&nbsp;

we'd give you them all back in parallel.&nbsp; That enabled us to go from taking a night&nbsp;&nbsp; to translate a sentence to basically doing&nbsp; something in 100 milliseconds or something. &nbsp;

There's this list of Jeff Dean facts, like Chuck&nbsp; Norris facts. For example, that “for Jeff Dean,&nbsp;&nbsp; NP equals "no problemo."” One of them, it's&nbsp; funny because now that I hear you say it,&nbsp;&nbsp; actually, it's kind of true. One of them is, "The&nbsp;

speed of light was 35 miles an hour until Jeff&nbsp;&nbsp; Dean decided to optimize it over a weekend."&nbsp; Just going from 12 hours to 100 milliseconds,&nbsp;&nbsp; I got to do the orders of magnitude there. All of these are very flattering. They're&nbsp;&nbsp;

pretty funny. They're like an April&nbsp; Fool's joke gone awry by my colleagues. &nbsp; Obviously, in retrospect, this idea that you&nbsp; can develop a latent representation of the&nbsp;&nbsp;

entire internet through just considering the&nbsp; relationships between words is like: yeah,&nbsp;&nbsp; this is large language models. This is Gemini.&nbsp; At the time, was it just a translation idea,&nbsp;&nbsp; or did you see that as being the beginning&nbsp;

of a different kind of paradigm? &nbsp; I think once we built that for translation,&nbsp; the serving of large language models started&nbsp;&nbsp; to be used for other things, like&nbsp;

completion... you start to type,&nbsp;&nbsp; and it suggests what completions make sense. So it was definitely the start of a lot of uses of&nbsp;&nbsp; language models in Google. And Noam has worked on&nbsp; a number of other things at Google, like spelling&nbsp;&nbsp;

correction systems that use language models. That was like 2000, 2001, and I think&nbsp;&nbsp; it was all in-memory on one machine. Yeah, I think it was one machine. His spelling&nbsp;&nbsp; correction system he built in 2001 was amazing.&nbsp;

He sent out this demo link to the whole company. &nbsp; I just tried every butchered spelling&nbsp; of every few-word query I could get,&nbsp;&nbsp; like “scrumbled uggs Bundict"—

I remember that one, yeah yeah. &nbsp; —instead of “scrambled eggs benedict”,&nbsp; and it just nailed it every time. &nbsp;

Yeah, I guess that was language modeling. But at the time, when you were developing&nbsp;&nbsp; these systems, did you have this sense of, “look,&nbsp; you make these things more and more sophisticated,&nbsp;&nbsp; don't consider five words, consider&nbsp;

100 words, 1,000 words, then the&nbsp;&nbsp; latent representation is intelligence”.&nbsp; Basically when did that insight hit? &nbsp; Not really. I don't think I ever felt&nbsp;

like, okay, N-gram models are going to– &nbsp; –sweep the world– –yeah: “be” artificial intelligence.&nbsp;&nbsp; I think at the time, a lot of people were excited&nbsp;

about Bayesian networks. That seemed exciting. &nbsp; Definitely seeing those early neural&nbsp; language models, both the magic in that,&nbsp;&nbsp; “okay, this is doing something extremely cool”&nbsp;

and also, it just struck me as the best problem&nbsp;&nbsp; in the world in that for one, it is very,&nbsp; very simple to state: give me a probability&nbsp;&nbsp; distribution over the next word. Also, there's&nbsp; roughly infinite training data out there. There's&nbsp;&nbsp;

the text of the web; you have trillions of&nbsp; training examples of unsupervised data. &nbsp; Yeah, or self-supervised. Self-supervised, yeah.

&nbsp; It's nice because you then have the right&nbsp; answer, and then you can train on all but&nbsp;&nbsp; the current word and try to predict the current&nbsp; word. It's this amazing ability to just learn&nbsp;&nbsp;

from observations of the world. And then it's AI complete. If you&nbsp;&nbsp; can do a great job of that, then&nbsp; you can pretty much do anything. &nbsp;

There's this interesting discussion in the history&nbsp; of science about whether ideas are just in the&nbsp;&nbsp; air and there's a sort of inevitability to big&nbsp; ideas, or whether they're sort of plucked out of&nbsp;&nbsp; some tangential direction. In this case, this way&nbsp;

in which we're laying it out very logically, does&nbsp;&nbsp; that imply basically, how inevitable does this... It does feel like it's in the air. There were&nbsp;&nbsp; definitely some, there was like the neural Turing&nbsp; machine, a bunch of ideas around attention,&nbsp;&nbsp;

like having these key-value stores that could&nbsp; be useful in neural networks to focus on things.&nbsp;&nbsp; I think in some sense, it was in the air, and&nbsp; in some sense, you need some group to go do it. &nbsp;

I like to think of a lot of ideas as being&nbsp; partially in the air, where there are a few&nbsp;&nbsp; different, maybe separate research ideas that&nbsp; one is squinting at when you’re trying to solve&nbsp;&nbsp; a new problem. You draw on those for some&nbsp;

inspiration, and then there's some aspect&nbsp;&nbsp; that is not solved, and you need to figure&nbsp; out how to solve that. The combination of&nbsp;&nbsp; some morphing of the things that already exist&nbsp; and some new things lead to some new breakthrough&nbsp;&nbsp;

or new research result that didn't exist before. Are there key moments that stand out to you where&nbsp;&nbsp; you're looking at a research area, you come up&nbsp; with this idea, and you have this feeling of,&nbsp;&nbsp; "Holy shit, I can't believe that worked?"

One thing I remember was in the early days of&nbsp;&nbsp; the Brain team. We were focused on “let’s see if&nbsp; we could build some infrastructure that lets us&nbsp;&nbsp; train really, really big neural nets”. At that&nbsp; time, we didn't have GPUs in our data centers;&nbsp;&nbsp;

we just had CPUs. But we know how&nbsp; to make lots of CPUs work together. &nbsp; So we built a system that enabled us to train&nbsp; pretty large neural nets through both model&nbsp;&nbsp;

and data parallelism. We had a system for&nbsp; unsupervised learning on 10 million randomly&nbsp;&nbsp; selected YouTube frames. It was a spatially local&nbsp; representation, so it would build up unsupervised&nbsp;&nbsp; representations based on trying to reconstruct&nbsp;

the thing from the high-level representations. &nbsp; We got that working and training on 2,000&nbsp; computers using 16,000 cores. After a little&nbsp;&nbsp; while, that model was actually able to build a&nbsp;

representation at the highest level where one&nbsp;&nbsp; neuron would get excited by images of cats. It&nbsp; had never been told what a cat was, but it had&nbsp;&nbsp; seen enough examples of them in the training data&nbsp; of head-on facial views of cats that that neuron&nbsp;&nbsp;

would turn on for that and not for much else. Similarly, you'd have other ones for human faces&nbsp;&nbsp; and backs of pedestrians, and this kind of&nbsp; thing. That was kind of cool because it's&nbsp;&nbsp; from unsupervised learning principles, building&nbsp;

up these really high-level representations. Then&nbsp;&nbsp; we were able to get very good results on the&nbsp; supervised ImageNet 20,000 category challenge&nbsp;&nbsp; that advanced the state of the art by 60% relative&nbsp; improvement, which was quite good at the time.

&nbsp; That neural net was probably 50x bigger than one&nbsp; that had been trained previously, and it got good&nbsp;&nbsp; results. So that sort of said to me, "Hey,&nbsp; actually scaling up neural nets seems like,&nbsp;&nbsp;

I thought it would be a good idea and it seems&nbsp; to be, so we should keep pushing on that." &nbsp; These examples illustrate how these AI systems&nbsp; fit into what you were just mentioning:&nbsp;&nbsp;

that Google is fundamentally a company that&nbsp; organizes information. AI, in this context,&nbsp;&nbsp; is finding relationships between information,&nbsp; between concepts, to help get ideas to you faster,&nbsp;&nbsp; information you want to you faster.

Now we're moving with current AI models.&nbsp;&nbsp; Obviously, you can use BERT in Google&nbsp; Search and you can ask these questions.&nbsp;&nbsp; They are still good at information retrieval,&nbsp; but more fundamentally, they can write your&nbsp;&nbsp;

entire code base for you and do actual work,&nbsp; which goes beyond just information retrieval. &nbsp; So how are you thinking about that? Is&nbsp; Google still an information retrieval&nbsp;&nbsp;

company if you're building an AGI?&nbsp; An AGI can do information retrieval,&nbsp;&nbsp; but it can do many other things as well. I think we're an "organize the world's&nbsp;&nbsp; information" company, and that's broader&nbsp;

than information retrieval. Maybe:&nbsp;&nbsp; “organizing and creating new information&nbsp; from some guidance you give it”. &nbsp; "Can you help me write a letter to my veterinarian&nbsp;

about my dog? It's got these symptoms," and it'll&nbsp;&nbsp; draft that. Or, "Can you feed in this&nbsp; video, and can you produce a summary of&nbsp;&nbsp; what's happening in the video every few minutes?" I think our multimodal capabilities are showing&nbsp;&nbsp;

that it's more than just text. It's about&nbsp; understanding the world in all the different&nbsp;&nbsp; modalities that information exists in, both&nbsp; human ones but also non-human-oriented ones,&nbsp;&nbsp; like weird lidar sensors on autonomous vehicles,&nbsp;

or genomic information, or health information. &nbsp; And then, how do you extract and transform that&nbsp; into useful insights for people and make use&nbsp;&nbsp; of that in helping them do all kinds of things&nbsp;

they want to do? Sometimes it's, "I want to be&nbsp;&nbsp; entertained by chatting with a chatbot." Sometimes&nbsp; it's, "I want answers to this really complicated&nbsp;&nbsp; question, there is no single source to retrieve&nbsp; from." You need to pull information from 100 web&nbsp;&nbsp;

pages, figure out what's going on, and make an&nbsp; organized, synthesized version of that data. &nbsp; Then dealing with multimodal things&nbsp; or coding-related problems. I think&nbsp;&nbsp;

it's super exciting what these models are&nbsp; capable of, and they're improving fast, so&nbsp;&nbsp; I'm excited to see where we go. I am also excited to see where we go.&nbsp;&nbsp; I think definitely organizing information&nbsp;

is clearly a trillion-dollar opportunity,&nbsp;&nbsp; but a trillion dollars is not cool anymore.&nbsp; What's cool is a quadrillion dollars. &nbsp; Obviously the idea is not to just&nbsp;

pile up some giant pile of money,&nbsp;&nbsp; but it's to create value in the world, and so much&nbsp; more value can be created when these systems can&nbsp;&nbsp; actually go and do something for you, write your&nbsp; code, or figure out problems that you wouldn't&nbsp;&nbsp;

have been able to figure out yourself. To do that at scale, we're going to have&nbsp;&nbsp; to be very, very flexible and dynamic as we&nbsp; improve the capabilities of these models. &nbsp;

Yeah, I'm pretty excited about a lot of&nbsp; fundamental research questions that come&nbsp;&nbsp; about because you see something that we're&nbsp; doing could be substantially improved if&nbsp;&nbsp; we tried this approach or things in this rough&nbsp;

direction. Maybe that'll work, maybe it won't. &nbsp; But I also think there's value in seeing what&nbsp; we could achieve for end-users and then how&nbsp;&nbsp; can we work backwards from that to actually build&nbsp;

systems that are able to do that. As one example:&nbsp;&nbsp; organizing information, that&nbsp; should mean any information&nbsp;&nbsp; in the world should be usable by anyone,&nbsp; regardless of what language they speak.

&nbsp; And that I think we've done some amount&nbsp; of, but it's not nearly the full vision of,&nbsp;&nbsp; "No matter what language you speak, out of&nbsp; thousands of languages, we can make any piece&nbsp;&nbsp;

of content available to you and make it usable by&nbsp; you. Any video could be watched in any language."&nbsp;&nbsp; I think that would be pretty awesome. We're not&nbsp; quite there yet, but that's definitely things&nbsp;&nbsp; I see on the horizon that should be possible.

Speaking of different architectures you might try,&nbsp;&nbsp; I know one thing you're working on right now is&nbsp; longer context. If you think of Google Search,&nbsp;&nbsp; it's got the entire index of the internet in&nbsp; its context, but it's a very shallow search.&nbsp;&nbsp;

And then obviously language models have limited&nbsp; context right now, but they can really think.&nbsp;&nbsp; It's like dark magic, in-context learning.&nbsp; It can really think about what it’s seeing. &nbsp;

How do you think about what it would&nbsp; be like to merge something like Google&nbsp;&nbsp; Search and something like in-context learning? Yeah, I'll take a first stab at it because – I've&nbsp;&nbsp; thought about this for a bit. One of the things&nbsp;

you see with these models is they're quite good,&nbsp;&nbsp; but they do hallucinate and have factuality issues&nbsp; sometimes. Part of that is you've trained on, say,&nbsp;&nbsp; tens of trillions of tokens, and you've&nbsp; stirred all that together in your tens&nbsp;&nbsp;

or hundreds of billions of parameters. But it's all a bit squishy because you've&nbsp;&nbsp; churned all these tokens together. The model&nbsp; has a reasonably clear view of that data,&nbsp;&nbsp; but it sometimes gets confused and will&nbsp;

give the wrong date for something. &nbsp; Whereas information in the context&nbsp; window, in the input of the model,&nbsp;&nbsp; is really sharp and clear because we have this&nbsp;

really nice attention mechanism in transformers.&nbsp;&nbsp; The model can pay attention to things, and it&nbsp; knows the exact text or the exact frames of the&nbsp;&nbsp; video or audio or whatever that it's processing. Right now, we have models that can deal with&nbsp;&nbsp;

millions of tokens of context, which is quite a&nbsp; lot. It's hundreds of pages of PDF, or 50 research&nbsp;&nbsp; papers, or hours of video, or tens of hours&nbsp; of audio, or some combination of those things,&nbsp;&nbsp; which is pretty cool. But it would be really nice&nbsp;

if the model could attend to trillions of tokens. &nbsp; Could it attend to the entire internet and&nbsp; find the right stuff for you? Could it attend&nbsp;&nbsp; to all your personal information for you?&nbsp;

I would love a model that has access to all&nbsp;&nbsp; my emails, all my documents, and all my photos. When I ask it to do something, it can sort of make&nbsp;&nbsp; use of that, with my permission, to help solve&nbsp; what it is I'm wanting it to do. But that's going&nbsp;&nbsp;

to be a big computational challenge because the&nbsp; naive attention algorithm is quadratic. You can&nbsp;&nbsp; barely make it work on a fair bit of hardware for&nbsp; millions of tokens, but there's no hope of making&nbsp;&nbsp; that just naively go to trillions of tokens.

So, we need a whole bunch of interesting&nbsp;&nbsp; algorithmic approximations to what you&nbsp; would really want: a way for the model&nbsp;&nbsp; to attend conceptually to lots and lots&nbsp; more tokens, trillions of tokens. Maybe&nbsp;&nbsp;

we can put all of the Google code base&nbsp; in context for every Google developer,&nbsp;&nbsp; all the world's source code in context for any&nbsp; open-source developer. That would be amazing. &nbsp;

It would be incredible. The beautiful&nbsp; thing about model parameters is they are&nbsp;&nbsp; quite memory-efficient at memorizing facts.&nbsp; You can probably memorize on the order of&nbsp;&nbsp; one fact or something per model parameter.

Whereas if you have some token in context,&nbsp;&nbsp; there are lots of keys and values at&nbsp; every layer. It could be a kilobyte,&nbsp;&nbsp; a megabyte of memory per token. You take a word and you blow it up&nbsp;&nbsp;

to 10 kilobytes or something. Yes. There's actually a lot of&nbsp;&nbsp; innovation going on around, okay, A, how&nbsp; do you minimize that? And B, what words&nbsp;&nbsp; do you need to have there? Are there better&nbsp;

ways of accessing bits of that information? &nbsp; Jeff seems like the right person to&nbsp; figure this out. Okay, what does our&nbsp;&nbsp; memory hierarchy look like from the SRAM all&nbsp;

the way up to data center worldwide level? &nbsp; I want to talk more about the thing you mentioned&nbsp; about: look, Google is a company with lots of&nbsp;&nbsp; code and lots of examples. If you just think&nbsp;

about that one use case and what that implies,&nbsp;&nbsp; so you've got the Google monorepo. Maybe you&nbsp; figure out the long context thing, you can put&nbsp;&nbsp; the whole thing in context, or you fine-tune&nbsp; on it. Why hasn't this been already done?

&nbsp; You can imagine the amount of code&nbsp; that Google has proprietary access to,&nbsp;&nbsp; even if you're just using it internally to make&nbsp; your developers more efficient and productive.

&nbsp; To be clear, we have actually already done&nbsp; further training on a Gemini model on our&nbsp;&nbsp; internal code base for our internal developers.&nbsp; But that's different than attending to all of&nbsp;&nbsp;

it because it sort of stirs together the&nbsp; code base into a bunch of parameters, and I&nbsp;&nbsp; think having it in context makes things clearer. But even the further trained model internally is&nbsp;&nbsp; incredibly useful. Sundar, I think, has said that&nbsp;

25% of the characters that we're checking into our&nbsp;&nbsp; code base these days are generated by our AI-based&nbsp; coding models with kind of human oversight. &nbsp; How do you imagine, in the next year or two, based&nbsp;

on the capabilities you see around the horizon,&nbsp;&nbsp; your own personal work? What will it be like to&nbsp; be a researcher at Google? You have a new idea&nbsp;&nbsp; or something. With the way in which you're&nbsp; interacting with these models in a year,&nbsp;&nbsp;

what does that look like? Well, I assume we will have&nbsp;&nbsp; these models a lot better and hopefully&nbsp; be able to be much, much more productive. &nbsp;

Yeah, in addition to kind of research-y context,&nbsp; anytime you're seeing these models used,&nbsp;&nbsp; I think they're able to make software&nbsp; developers more productive because they&nbsp;&nbsp; can kind of take a high-level spec or sentence&nbsp;

description of what you want done and give a&nbsp;&nbsp; pretty reasonable first cut at that. From&nbsp; a research perspective, maybe you can say,&nbsp;&nbsp; "I'd really like you to explore this kind of idea&nbsp; similar to the one in this paper, but maybe let's&nbsp;&nbsp;

try making it convolutional or something." If you could do that and have the system&nbsp;&nbsp; automatically generate a bunch of experimental&nbsp; code, and maybe you look at it and you're like,&nbsp;&nbsp; "Yeah, that looks good, run that." That&nbsp;

seems like a nice dream direction to go in. &nbsp; It seems plausible in the next year or two years&nbsp; that you might make a lot of progress on that. &nbsp;

It seems under-hyped because you could&nbsp; have literally millions of extra employees,&nbsp;&nbsp; and you can immediately check their output,&nbsp; the employees can check each other's output,&nbsp;&nbsp; hey immediately stream tokens.

Sorry, I didn't mean to underhype&nbsp;&nbsp; it. I think it's super exciting. I just don't&nbsp; like to hype things that aren't done yet. &nbsp; I do want to play with this idea more because&nbsp;

it seems like a big deal if you have something&nbsp;&nbsp; kind of like an autonomous software engineer,&nbsp; especially from the perspective of a researcher&nbsp;&nbsp; who's like, "I want to build the system." Okay,&nbsp; so let's just play with this idea. As somebody who&nbsp;&nbsp;

has worked on developing transformative systems&nbsp; through your careers, the idea that instead of&nbsp;&nbsp; having to code something like whatever today's&nbsp; equivalent of MapReduce is or Tensorflow is,&nbsp;&nbsp; just like, "Here's how I want a distributed&nbsp;

AI library to look. Write it up for me." &nbsp; Do you imagine you could be 10x more&nbsp; productive? 100x more productive? &nbsp;

I was pretty impressed. I think it was on&nbsp; Reddit that I saw we have a new experimental&nbsp;&nbsp; coding model that's much better at coding and math&nbsp; and so on. Someone external tried it, and they&nbsp;&nbsp; basically prompted it and said, "I'd like you to&nbsp;

implement a SQL processing database system with no&nbsp;&nbsp; external dependencies, and please do that in C." From what the person said, it actually did&nbsp;&nbsp; a quite good job. It generated a&nbsp; SQL parser and a tokenizer and a&nbsp;&nbsp;

query planning system and some storage format&nbsp; for the data on disk and actually was able to&nbsp;&nbsp; handle simple queries. From that prompt, which&nbsp; is like a paragraph of text or something, to&nbsp;&nbsp; get even an initial cut at that seems like a big&nbsp;

boost in productivity for software developers. &nbsp; I think you might end up with other kinds of&nbsp; systems that maybe don't try to do that in a&nbsp;&nbsp; single semi-interactive, "respond in 40 seconds"&nbsp;

kind of thing but might go off for 10 minutes and&nbsp;&nbsp; might interrupt you after five minutes saying,&nbsp; "I've done a lot of this, but now I need to get&nbsp;&nbsp; some input. Do you care about handling video or&nbsp; just images or something?" That seems like you'll&nbsp;&nbsp;

need ways of managing the workflow if you have&nbsp; a lot of these background activities happening. &nbsp; Can you talk more about that? What&nbsp; interface do you imagine we might need&nbsp;&nbsp;

if you could literally have millions of employees&nbsp; you could spin up, hundreds of thousands of&nbsp;&nbsp; employees you could spin up on command, who&nbsp; are able to type incredibly fast, and who-&nbsp;&nbsp; It's almost like you go from 1930s trading of&nbsp;

tickets or something to now modern Jane Street&nbsp;&nbsp; or something. You need some interface to keep&nbsp; track of all this that's going on, for the AIs&nbsp;&nbsp; to integrate into this big monorepo and leverage&nbsp; their own strengths, for humans to keep track of&nbsp;&nbsp;

what's happening. Basically what is it like to be&nbsp; Jeff or Noam in three years working day-to-day? &nbsp; It might be kind of similar to what we have now&nbsp; because we already have sort of parallelization&nbsp;&nbsp;

as a major issue. We have lots and lots of really,&nbsp; really brilliant machine learning researchers, and&nbsp;&nbsp; we want them to all work together and build AI. So actually, the parallelization among people&nbsp;&nbsp; might be similar to parallelization among&nbsp;

machines. I think definitely it should be good&nbsp;&nbsp; for things that require a lot of exploration,&nbsp; like, "Come up with the next breakthrough." &nbsp; If you have a brilliant idea that is&nbsp;

just certain to work in the ML domain,&nbsp;&nbsp; then it has a 2% chance of working if&nbsp; you're brilliant. Mostly these things fail,&nbsp;&nbsp; but if you try 100 things or 1,000 things or a&nbsp; million things, then you might hit on something&nbsp;&nbsp;

amazing. We have plenty of compute. Like modern&nbsp; top labs these days have probably a million times&nbsp;&nbsp; as much compute as it took to train Transformer. Yeah, actually, so that's a really interesting&nbsp;&nbsp; idea. Suppose in the world today there are&nbsp;

on the order of 10,000 AI researchers in this&nbsp;&nbsp; community coming up with a breakthrough- Probably more than that. There were&nbsp;&nbsp; 15,000 at NeurIPS last week. Wow.

&nbsp; 100,000, I don't know. Yeah, maybe. Sorry. &nbsp; No, no, it's good to have the correct order&nbsp;

of magnitude. The odds that this community&nbsp;&nbsp; every year comes up with a breakthrough on&nbsp; the scale of a Transformer is, let's say,&nbsp;&nbsp; 10%. Now suppose this community is&nbsp; a thousand times bigger, and it is,&nbsp;&nbsp;

in some sense, like this sort of parallel search&nbsp; of better architectures, better techniques. &nbsp; Do we just get like- A breakthrough a day?

&nbsp; -breakthroughs every year or every day? Maybe. Sounds potentially good. &nbsp; But does that feel like what ML research is like?&nbsp;

If you are able to try all these experiments… &nbsp; It's a good question, because I don't know&nbsp; that folks haven't been doing that as much.&nbsp;&nbsp; We definitely have lots of great ideas&nbsp;

coming along. Everyone seems to want to&nbsp;&nbsp; run their experiment at maximum scale,&nbsp; but I think that's a human problem. &nbsp; It's very helpful to have a 1/1000th scale&nbsp;

problem and then vet 100,000 ideas on that,&nbsp;&nbsp; and then scale up the ones that seem promising. So, one thing the world might not be taking&nbsp;&nbsp; seriously: people are aware that it's&nbsp; exponentially harder to make a model that's 100x&nbsp;&nbsp;

bigger. It's 100x more compute, right? So people&nbsp; are worried that it's an exponentially harder&nbsp;&nbsp; problem to go from Gemini 2 to 3, or so forth. But maybe people aren't aware of this other&nbsp;&nbsp; trend where Gemini 3 is coming up with all these&nbsp;

different architectural ideas, trying them out,&nbsp;&nbsp; and you see what works, and you're constantly&nbsp; coming up with algorithmic progress that makes&nbsp;&nbsp; training the next one easier and easier.&nbsp; How far could you take that feedback loop?

&nbsp; I think one thing people should be aware&nbsp; of is that the improvements from generation&nbsp;&nbsp; to generation of these models often are&nbsp; partially driven by hardware and larger scale,&nbsp;&nbsp;

but equally and perhaps even more so driven&nbsp; by major algorithmic improvements and major&nbsp;&nbsp; changes in the model architecture, the training&nbsp; data mix, and so on, that really makes the model&nbsp;&nbsp; better per flop that is applied to the model,&nbsp;

so I think that's a good realization. Then&nbsp;&nbsp; I think if we have automated exploration&nbsp; of ideas, we'll be able to vet a lot more&nbsp;&nbsp; ideas and bring them into the actual production&nbsp; training for next generations of these models.

&nbsp; That's going to be really helpful because&nbsp; that's sort of what we're currently doing&nbsp;&nbsp; with a lot of brilliant machine learning&nbsp; researchers: looking at lots of ideas,&nbsp;&nbsp;

winnowing ones that seem to work well at small&nbsp; scale, seeing if they work well at medium scale,&nbsp;&nbsp; bringing them into larger scale experiments, and&nbsp; then settling on adding a whole bunch of new and&nbsp;&nbsp; interesting things to the final model recipe.&nbsp;

If we can do that 100 times faster through those&nbsp;&nbsp; machine learning researchers just gently steering&nbsp; a more automated search process, rather than&nbsp;&nbsp; hand-babysitting lots of experiments themselves,&nbsp; that's going to be really, really good.

&nbsp; The one thing that doesn't speed up is experiments&nbsp; at the largest scale. You still end up doing these&nbsp;&nbsp; N = 1 experiments. Really, you just try to&nbsp; put a bunch of brilliant people in the room,&nbsp;&nbsp;

have them stare at the thing, and figure out&nbsp; why this is working, why this is not working. &nbsp; For that, more hardware is a good&nbsp; solution. And better hardware.

&nbsp; Yes, we're counting on you. So, naively, there's this software,&nbsp;&nbsp; there's this algorithmic side improvement that&nbsp; future AI can make. There's also the stuff&nbsp;&nbsp;

you're working on. I'll let you describe it. But if you get into a situation where just from&nbsp;&nbsp; a software level, you can be making better and&nbsp; better chips in a matter of weeks and months,&nbsp;&nbsp; and better AIs can presumably do that better,&nbsp;

how does this feedback loop not just end up in,&nbsp;&nbsp; Gemini 3 taking two years, then Gemini 4 is-&nbsp; or the equivalent level jump is now six months,&nbsp;&nbsp; then level five is three months, then one month?&nbsp; You get to superhuman intelligence much more&nbsp;&nbsp;

rapidly than you might naively think, because&nbsp; of this software, both on the hardware side and&nbsp;&nbsp; from the algorithmic side improvements. I've been pretty excited lately about how&nbsp;&nbsp; we could dramatically speed up the chip design&nbsp;

process. As we were talking earlier, the current&nbsp;&nbsp; way in which you design a chip takes you roughly&nbsp; 18 months to go from "we should build a chip" to&nbsp;&nbsp; something that you then hand over to TSMC and then&nbsp; TSMC takes four months to fab it, and then you get&nbsp;&nbsp;

it back and you put it in your data centers. So that's a pretty lengthy cycle, and the fab&nbsp;&nbsp; time in there is a pretty small portion of it&nbsp; today. But if you could make that the dominant&nbsp;&nbsp; portion, so that instead of taking 12 to 18&nbsp;

months to design the chip with 150 people,&nbsp;&nbsp; you could shrink that to a few people&nbsp; with a much more automated search process,&nbsp;&nbsp; exploring the whole design space of chips and&nbsp; getting feedback from all aspects of the chip&nbsp;&nbsp;

design process for the kind of choices that the&nbsp; system is trying to explore at the high level,&nbsp;&nbsp; then I think you could get perhaps much more&nbsp; exploration and more rapid design of something&nbsp;&nbsp; that you actually want to give to a fab.

That would be great because you can shrink&nbsp;&nbsp; fab time, you can shrink the deployment time&nbsp; by designing the hardware in the right way,&nbsp;&nbsp; so that you just get the chips back and you&nbsp; just plug them into some system. And that&nbsp;&nbsp;

will then enable a lot more specialization, it&nbsp; will enable a shorter timeframe for the hardware&nbsp;&nbsp; design so that you don't have to look out quite&nbsp; as far into what kind of ML algorithms would be&nbsp;&nbsp; interesting. Instead, it's like you're looking&nbsp;

at six to nine months from now, what should it&nbsp;&nbsp; be? Rather than two, two and a half years. That would be pretty cool. I do think that&nbsp;&nbsp; fabrication time, if that's in your inner&nbsp; loop of improvement, you're going to like...

&nbsp; How long is it? The leading edge nodes,&nbsp;&nbsp; unfortunately, are taking longer and longer&nbsp; because they have more metal layers than previous,&nbsp;&nbsp;

older nodes. So that tends to make it&nbsp; take anywhere from three to five months. &nbsp; Okay, but that's how long training runs take&nbsp; anyways, right? So you could potentially do&nbsp;&nbsp;

both at the same time. Potentially. &nbsp; Okay, so I guess you can't get sooner&nbsp; than three to five months. But the idea&nbsp;&nbsp;

that you could get- but also, yeah, you're&nbsp; rapidly developing new algorithmic ideas. &nbsp; That can move fast. That can move fast, that can run on&nbsp;&nbsp;

existing chips and explore lots of cool ideas. So, isn't that a situation in which you're... I&nbsp;&nbsp; think people sort of expect like, ah,&nbsp; there's going to be a sigmoid. Again,&nbsp;&nbsp; this is not a sure thing. But just like, is this&nbsp;

a possibility? The idea that you have sort of an&nbsp;&nbsp; explosion of capabilities very rapidly towards&nbsp; the tail end of human intelligence that gets&nbsp;&nbsp; smarter and smarter at a&nbsp; more and more rapid rate?

&nbsp; Quite possibly. Yeah. I like to think of it&nbsp;&nbsp; like this. Right now, we have models that can take&nbsp; a pretty complicated problem and can break it down&nbsp;&nbsp;

internally in the model into a bunch of steps,&nbsp; can sort of puzzle together the solutions for&nbsp;&nbsp; those steps, and can often give you a solution&nbsp; to the entire problem that you're asking. &nbsp;

But it isn't super reliable, and it's good at&nbsp; breaking things down into five to ten steps,&nbsp;&nbsp; not 100 to 1,000 steps. So if you could go&nbsp; from, yeah, 80% of the time it can give you&nbsp;&nbsp; a perfect answer to something that's ten steps&nbsp;

long to something that 90% of the time can give&nbsp;&nbsp; you a perfect answer to something that's 100 to&nbsp; 1,000 steps of sub-problem long, that would be&nbsp;&nbsp; an amazing improvement in the capability of these&nbsp; models. We're not there yet, but I think that's&nbsp;&nbsp;

what we're aspirationally trying to get to. We don't need new hardware for that,&nbsp;&nbsp; but we'll take it. Never look new hardware in the mouth. &nbsp;

One of the big areas of improvement in&nbsp; the near future is inference time compute,&nbsp;&nbsp; applying more compute at inference time. I&nbsp; guess the way I like to describe it is that&nbsp;&nbsp; even a giant language model, even if you’re doing&nbsp;

a trillion operations per token, which is more&nbsp;&nbsp; than most people are doing these days, operations&nbsp; cost something like 10 to the negative $18. And&nbsp;&nbsp; so you're getting a million tokens to the dollar. I mean compare that to a relatively cheap pastime:&nbsp;&nbsp;

you go out and buy a paper book and&nbsp; read it, you're paying 10,000 tokens&nbsp;&nbsp; to the dollar. Talking to a language model is&nbsp; like 100 times cheaper than reading a paperback. &nbsp;

So there is a huge amount of headroom there&nbsp; to say, okay, if we can make this thing more&nbsp;&nbsp; expensive but smarter, because we're&nbsp; 100x cheaper than reading a paperback,&nbsp;&nbsp; we're 10,000 times cheaper than talking&nbsp;

to a customer support agent, or a million&nbsp;&nbsp; times or more cheaper than hiring a software&nbsp; engineer or talking to your doctor or lawyer.&nbsp;&nbsp; Can we add computation and make it smarter? I think a lot of the takeoff that we're going&nbsp;&nbsp;

to see in the very near future is of this form.&nbsp; We've been exploiting and improving pre-training&nbsp;&nbsp; a lot in the past, and post-training, and those&nbsp; things will continue to improve. But taking&nbsp;&nbsp; advantage of "think harder" at inference&nbsp;

time is just going to be an explosion. &nbsp; Yeah, and an aspect of inference time is I think&nbsp; you want the system to be actively exploring a&nbsp;&nbsp; bunch of different potential solutions.&nbsp;

Maybe it does some searches on its own,&nbsp;&nbsp; gets some information back, consumes that&nbsp; information, and figures out, oh, now I&nbsp;&nbsp; would really like to know more about this thing.&nbsp; So now it iteratively explores how to best solve&nbsp;&nbsp;

the high-level problem you pose to this system. And I think having a dial where you can make the&nbsp;&nbsp; model give you better answers with more inference&nbsp; time compute seems like we have a bunch of&nbsp;&nbsp; techniques now that can kind of do that. The more&nbsp;

you crank up the dial, the more it costs you in&nbsp;&nbsp; terms of compute, but the better the answers get. That seems like a nice trade-off to have,&nbsp;&nbsp; because sometimes you want to think really&nbsp; hard because it's a super important problem.&nbsp;&nbsp;

Sometimes you probably don't want to spend&nbsp; enormous amounts of compute to compute “what's&nbsp;&nbsp; the answer to one plus one”. Maybe the system – Shouldn’t decide to come up with new&nbsp;&nbsp; axioms of set theory or whatever!

– should decide to use a calculator&nbsp;&nbsp; tool instead of a very large language model. Interesting. So are there any impediments&nbsp;&nbsp; to taking inference time, like having&nbsp; some way in which you can just linearly&nbsp;&nbsp;

scale up inference time compute? Or is this&nbsp; basically a problem that's sort of solved,&nbsp;&nbsp; and we know how to throw 100x compute, 1000x&nbsp; compute, and get correspondingly better results? &nbsp;

We're working out the algorithms as we speak. So&nbsp; I believe we'll see better and better solutions to&nbsp;&nbsp; this as these many more than 10,000 researchers&nbsp; are hacking at it, many of them at Google. &nbsp;

I think we do see some examples in our own&nbsp; experimental work of things where if you apply&nbsp;&nbsp; more inference time compute, the answers are&nbsp; better than if you just apply 10x, you can get&nbsp;&nbsp; better answers than x amount of computed inference&nbsp;

time. And that seems useful and important. &nbsp; But I think what we would like is when you apply&nbsp; 10x to get even a bigger improvement in the&nbsp;&nbsp; quality of the answers than we're getting today.&nbsp;

And so that's about designing new algorithms,&nbsp;&nbsp; trying new approaches, figuring out how best to&nbsp; spend that 10x instead of x to improve things. &nbsp; Does it look more like search, or does&nbsp;

it look more like just keeping going in&nbsp;&nbsp; the linear direction for a longer time? I really like Rich Sutton's paper that he&nbsp;&nbsp; wrote about the Bitter Lesson and the Bitter&nbsp; Lesson effectively is this nice one-page paper&nbsp;&nbsp;

but the essence of it is you can try lots of&nbsp; approaches, but the two techniques that are&nbsp;&nbsp; incredibly effective are learning and search. You can apply and scale those algorithmically&nbsp;&nbsp; or computationally, and you often will&nbsp;

then get better results than any other&nbsp;&nbsp; kind of approach you can apply it to&nbsp; a pretty broad variety of problems. &nbsp; Search has got to be part of the solution to&nbsp;

spending more inference time. Maybe you explore&nbsp;&nbsp; a few different ways of solving this problem,&nbsp; and that one didn't work, but this one worked&nbsp;&nbsp; better. I'm going to explore that a bit more. How does this change your plans for future data&nbsp;&nbsp;

center planning and so forth? Where can this&nbsp; kind of search be done asynchronously? Does&nbsp;&nbsp; it have to be online, offline? How&nbsp; does that change how big of a campus&nbsp;&nbsp; you need and those kinds of considerations?

One general trend is it's clear that inference&nbsp;&nbsp; time compute, you have a model that's pretty much&nbsp; already trained and you want to do inference on,&nbsp;&nbsp; it is going to be a growing and important&nbsp; class of computation. Maybe you want to&nbsp;&nbsp;

specialize hardware more around that. Actually, the first TPU was specialized for&nbsp;&nbsp; inference and wasn't really designed for training.&nbsp; Then subsequent TPUs were really designed more&nbsp;&nbsp; around training and also for inference.

But it may be that when you have something&nbsp;&nbsp; where you really want to crank up the amount of&nbsp; compute you use at inference time, that even more&nbsp;&nbsp; specialized solutions will make a lot of sense. Does that mean you can accommodate more&nbsp;&nbsp;

asynchronous training? Training? Or inference? &nbsp; Or just you can have the different data&nbsp; centers don't need to talk to each other,&nbsp;&nbsp;

you can just have them do a bunch of... I like to think of it as, is the inference that&nbsp;&nbsp; you're trying to do latency-sensitive? Like a user&nbsp; is actively waiting for it, or is it a background&nbsp;&nbsp; thing? Maybe I have some inference tasks that I'm&nbsp;

trying to run over a whole batch of data, but it's&nbsp;&nbsp; not for a particular user. It's just I want to&nbsp; run inference on it and extract some information. &nbsp; There's probably a bunch of things that we&nbsp;

don't really have very much of right now,&nbsp;&nbsp; but you're seeing inklings of it in our&nbsp; deep research tool that we just released,&nbsp;&nbsp; like a week ago. You can give it a pretty&nbsp; complicated, high-level task like, "Hey,&nbsp;&nbsp;

can you go off and research the history of&nbsp; renewable energy and all the trends in costs for&nbsp;&nbsp; wind and solar and other kinds of techniques, and&nbsp; put it in a table and give me a full eight-page&nbsp;&nbsp; report?" And it will come back with an eight-page&nbsp;

report with like 50 entries in the bibliography. &nbsp; It's pretty remarkable. But you're not&nbsp; actively waiting for that for one second.&nbsp;&nbsp; It takes like a minute or two to go do that.

And I think there's going to be a fair bit of&nbsp;&nbsp; that kind of compute, and that's the kind of thing&nbsp; where you have some UI questions around. Okay,&nbsp;&nbsp; if you're going to have a user with 20 of these&nbsp; kind of asynchronous tasks in the background&nbsp;&nbsp;

happening, and maybe each one of them needs&nbsp; to get more information from the user, like,&nbsp;&nbsp; "I found your flights to Berlin, but there's no&nbsp; non-stop ones. Are you okay with a non-stop one?"&nbsp;&nbsp; How does that flow work when you kind of need a&nbsp;

bit more information, and then you want to put&nbsp;&nbsp; it back in the background for it to continue&nbsp; doing, you know, finding the hotels in Berlin&nbsp;&nbsp; or whatever? I think it's going to be pretty&nbsp; interesting, and inference will be useful.

&nbsp; Inference will be useful. There's also a compute&nbsp; efficiency in inference that you don't have in&nbsp;&nbsp; training. In general, transformers can use the&nbsp; sequence length as a batch during training,&nbsp;&nbsp;

but they can't really in inference, because&nbsp; when you're generating one token at a time,&nbsp;&nbsp; so there may be different hardware and&nbsp; inference algorithms that we design for the&nbsp;&nbsp; purposes of being efficient at inference.

Yeah, as a good example of an algorithmic&nbsp;&nbsp; improvement is the use of drafter models. So you&nbsp; have a really small language model that you do&nbsp;&nbsp; one token at a time when you're decoding,&nbsp; and it predicts four tokens. Then you give&nbsp;&nbsp;

that to the big model and you say, "Okay,&nbsp; here are the four tokens the little model&nbsp;&nbsp; came up with. Check which ones you agree with." If you agree with the first three, then you just&nbsp;&nbsp; advance. Then you've basically been able to do a&nbsp;

four-token width parallel computation instead of&nbsp;&nbsp; a one-token width computation in the big model.&nbsp; Those are the kinds of things that people are&nbsp;&nbsp; looking at to improve inference efficiency, so you&nbsp; don't have this single-token decode bottleneck.

&nbsp; Right, basically the big model's&nbsp; being used as a verifier. &nbsp; Right, “can you verify”, yeah.

[inaudible] generator&nbsp;&nbsp; and verification you can do. Right. "Hello, how are you?" That sounds&nbsp;&nbsp; great to me. I'm going to advance past that. So, a big discussion has been about how we're&nbsp;&nbsp;

already tapping out nuclear power plants in&nbsp; terms of delivering power into one single&nbsp;&nbsp; campus. Do we have to have just two gigawatts&nbsp; in one place, five gigawatts in one place,&nbsp;&nbsp; or can it be more distributed and still&nbsp;

be able to train a model? Does this new&nbsp;&nbsp; regime of inference scaling make different&nbsp; considerations there plausible? How are you&nbsp;&nbsp; thinking about multi-data center training now? We're already doing it. We're pro multi-data&nbsp;&nbsp;

center training. I think in the Gemini&nbsp; 1.5 tech report, we said we used multiple&nbsp;&nbsp; metro areas and trained with some of the&nbsp; compute in each place. And then a pretty&nbsp;&nbsp; long latency but high bandwidth connection&nbsp;

between those data centers, and that works fine. &nbsp; Training is kind of interesting because&nbsp; each step in a training process is usually,&nbsp;&nbsp; for a large model, is usually a few&nbsp;

seconds or something, at least. So,&nbsp;&nbsp; the latency of it being 50 milliseconds&nbsp; away doesn't matter that much. &nbsp; Just the bandwidth.

Yeah, just bandwidth. &nbsp; As long as you can sync all of the parameters&nbsp; of the model across the different data centers&nbsp;&nbsp; and then accumulate all the gradients, in the&nbsp;

time it takes to do one step, you're pretty good. &nbsp; And then we have a bunch of work, even from&nbsp; early Brain days, when we were using CPU&nbsp;&nbsp; machines and they were really slow. We needed to&nbsp;

do asynchronous training to help scale, where each&nbsp;&nbsp; copy of the model would do some local computation,&nbsp; send gradient updates to a centralized system,&nbsp;&nbsp; and then apply them asynchronously. Another copy&nbsp; of the model would be doing the same thing.

&nbsp; It makes your model parameters wiggle around&nbsp; a bit, and it makes people uncomfortable with&nbsp;&nbsp; the theoretical guarantees, but it&nbsp; actually seems to work in practice.

&nbsp; It was so pleasant to go from asynchronous&nbsp; to synchronous because your experiments are&nbsp;&nbsp; now replicable, rather than your results&nbsp; depend on whether there was a web crawler&nbsp;&nbsp;

running on the same machine. So, I am&nbsp; so much happier running on TPU pods. &nbsp; I love asynchrony. It just&nbsp; lets you scale so much more.

&nbsp; With these two iPhones and an Xbox or whatever. Yeah, what if we could give you asynchronous but&nbsp;&nbsp; replicable results? Ooh.

&nbsp; So, one way to do that is you effectively record&nbsp; the sequence of operations, like which gradient&nbsp;&nbsp; update happened and when and on which batch of&nbsp; data. You don't necessarily record the actual&nbsp;&nbsp;

gradient update in a log or something, but you&nbsp; could replay that log of operations so that you&nbsp;&nbsp; get repeatability. Then I think you'd be happy. Possibly. At least you could debug what happened,&nbsp;&nbsp; but you wouldn't be able to necessarily compare&nbsp;

two training runs. Because, okay, I made one&nbsp;&nbsp; change in the hyperparameter, but also I had a- Web crawler. &nbsp; -web crawler messing up, and there were a lot of&nbsp;

people streaming the Super Bowl at the same time. &nbsp; The thing that led us to go from asynchronous&nbsp; training on CPUs to fully synchronous training&nbsp;&nbsp; is the fact that we have these super&nbsp;

fast TPU hardware chips and pods,&nbsp;&nbsp; which have incredible amounts of bandwidth between&nbsp; the chips in a pod. Then, scaling beyond that,&nbsp;&nbsp; we have really good data center networks and&nbsp; even cross-metro area networks that enable&nbsp;&nbsp;

us to scale to many, many pods in multiple&nbsp; metro areas for our largest training runs.&nbsp;&nbsp; We can do that fully synchronously. As Noam said, as long as the gradient&nbsp;&nbsp; accumulation and communication of the parameters&nbsp;

across metro areas happens fast enough relative&nbsp;&nbsp; to the step time, you're golden. You don't&nbsp; really care. But I think as you scale up,&nbsp;&nbsp; there may be a push to have a bit more asynchrony&nbsp; in our systems than we have now because we can&nbsp;&nbsp;

make it work, our ML researchers have been really&nbsp; happy how far we've been able to push synchronous&nbsp;&nbsp; training because it is an easier mental model to&nbsp; understand. You just have your algorithm sort of&nbsp;&nbsp; fighting you, rather than the asynchrony&nbsp;

and the algorithm kind of battling you. &nbsp; As you scale up, there are more things&nbsp; fighting you. That's the problem with scaling,&nbsp;&nbsp; that you don't always know what it is that's&nbsp;

fighting you. Is it the fact that you've pushed&nbsp;&nbsp; quantization a little too far in some&nbsp; place or another? Or is it your data? &nbsp; Maybe it's your adversarial machine MUQQ17 that&nbsp;

is setting the seventh bit of your exponent&nbsp;&nbsp; and all your gradients or something. Right. And all of these things just make&nbsp;&nbsp; the model slightly worse, so you don't&nbsp; even know that the thing is going on.

&nbsp; That's actually a bit of a problem with neural&nbsp; nets, is they're so tolerant of noise. You can&nbsp;&nbsp; have things set up kind of wrong in a&nbsp; lot of ways, and they just figure out&nbsp;&nbsp;

ways to work around that or learn. You could have bugs in your code. Most&nbsp;&nbsp; of the time that does nothing. Some of the time it&nbsp; makes your model worse. Some of the time it makes&nbsp;&nbsp; your model better. Then you discover something&nbsp;

new because you never tried this bug at scale&nbsp;&nbsp; before because you didn't have the budget for it. What practically does it look like to debug or&nbsp;&nbsp; decode? You've got these things, some of which are&nbsp; making the model better, some of which are making&nbsp;&nbsp;

it worse. When you go into work tomorrow, how do&nbsp; you figure out what the most salient inputs are? &nbsp; At small scale, you do lots of experiments.&nbsp; There's one part of the research that involves,&nbsp;&nbsp;

okay, I want to invent these improvements&nbsp; or breakthroughs in isolation. In which&nbsp;&nbsp; case you want a nice simple code base that&nbsp; you can fork and hack, and some baselines. &nbsp;

My dream is I wake up in the morning,&nbsp; come up with an idea, hack it up in a day,&nbsp;&nbsp; run some experiments, get some initial results&nbsp; in a day. Like okay this looks promising, these&nbsp;&nbsp; things worked, and these things didn't work.

I think that is very achievable because- &nbsp; At small scale. At small scale, as long as you&nbsp;&nbsp; keep a nice experimental code base.

Maybe an experiment takes an hour&nbsp;&nbsp; to run or two hours, not two weeks. It’s great. So there's that part of the research,&nbsp;&nbsp; and then there's some amount of scaling up. Then&nbsp; you have the part which is integrating, where&nbsp;&nbsp;

you want to stack all the improvements on top of&nbsp; each other and see if they work at large scale,&nbsp;&nbsp; and see if they work all in conjunction. Right, how do they interact? Right,&nbsp;&nbsp; you think maybe they're independent, but actually&nbsp;

maybe there's some funny interaction between&nbsp;&nbsp; improving the way in which we handle video&nbsp; data input and the way in which we update&nbsp;&nbsp; the model parameters. Maybe that interacts&nbsp; more for video data than some other thing.

&nbsp; There are all kinds of interactions that can&nbsp; happen that you maybe don't anticipate. So&nbsp;&nbsp; you want to run these experiments where you're&nbsp; then putting a bunch of things together and then&nbsp;&nbsp;

periodically making sure that all the things&nbsp; you think are good are good together. If not,&nbsp;&nbsp; understanding why they're not playing nicely. Two questions. One, how often does it end up&nbsp;&nbsp; being the case that things don't stack up&nbsp;

well together? Is it like a rare thing or&nbsp;&nbsp; does it happen all the time? It happens 50% of the time. &nbsp; Yeah, I mean, I think most things you don't&nbsp;

even try to stack because the initial experiment&nbsp;&nbsp; didn't work that well, or it showed results&nbsp; that aren't that promising relative to the&nbsp;&nbsp; baseline. Then you sort of take those things&nbsp; and you try to scale them up individually.

&nbsp; Then you're like, "Oh yeah, these ones seem&nbsp; really promising." So I'm going to now include&nbsp;&nbsp; them in something that I'm going to now bundle&nbsp; together and try to advance and combine with&nbsp;&nbsp;

other things that seem promising. Then you&nbsp; run the experiments and then you're like,&nbsp;&nbsp; "Oh, well, they didn't really work&nbsp; that well. Let's try to debug why." &nbsp;

And then there are trade offs, because you want to&nbsp; keep your integrated system as clean as you can,&nbsp;&nbsp; because complexity – Codebase-wise. &nbsp;

– yeah codebase and algorithmically.&nbsp; Complexity hurts, complexity makes&nbsp;&nbsp; things slower, introduces more risk. And then at the same time you want it&nbsp;&nbsp; to be as good as possible. And of course, every&nbsp;

individual researcher wants his inventions to go&nbsp;&nbsp; into it. So there are definitely challenges there,&nbsp; but we've been working together quite well. &nbsp; Okay, so then going back to the whole dynamic “you&nbsp;

find better and better algorithmic improvements&nbsp;&nbsp; and the models get better and better over time”,&nbsp; even if you take the hardware part out of it.&nbsp;&nbsp; Should the world be thinking more about, and&nbsp; should you guys be thinking more about this?

&nbsp; There's one world where AI is a thing that takes&nbsp; two decades to slowly get better over time and&nbsp;&nbsp; you can sort of refine things over. If you've kind&nbsp; of messed something up, you fix it, and it's not&nbsp;&nbsp;

that big a deal, right? It's like not that much&nbsp; better than the previous version you released. &nbsp; There's another world where you have this big&nbsp; feedback loop, which means that the two years&nbsp;&nbsp;

between Gemini 4 and Gemini 5 are the most&nbsp; important years in human history. Because&nbsp;&nbsp; you go from a pretty good ML researcher&nbsp; to superhuman intelligence because of&nbsp;&nbsp; this feedback loop. To the extent that you&nbsp;

think that the second world is plausible,&nbsp;&nbsp; how does that change how you sort of approach&nbsp; these greater and greater levels of intelligence? &nbsp; I've stopped cleaning my garage because&nbsp;

I'm waiting for the robots. So probably&nbsp;&nbsp; I'm more in the second camp of what we're&nbsp; going to see, a lot of acceleration. &nbsp; Yeah, I mean, I think it's super important to&nbsp;

understand what's going on and what the trends&nbsp;&nbsp; are. And I think right now the trends are the&nbsp; models are getting substantially better generation&nbsp;&nbsp; over generation. I don't see that slowing&nbsp; down in the next few generations probably.

&nbsp; So that means the models say two to three&nbsp; generations from now are going to be capable&nbsp;&nbsp; of... Let's go back to the example of breaking&nbsp; down a simple task into 10 sub pieces and doing&nbsp;&nbsp;

it 80% of the time, to something that can&nbsp; break down a task, a very high level task,&nbsp;&nbsp; into 100 or 1,000 pieces and get that&nbsp; right 90% of the time. That's a major,&nbsp;&nbsp; major step up in what the models are capable of.

So I think it's important for people to understand&nbsp;&nbsp; what is happening in the progress in the field.&nbsp; And then those models are going to be applied&nbsp;&nbsp; in a bunch of different domains. I think it's&nbsp; really good to make sure that we, as a society,&nbsp;&nbsp;

get the maximal benefits from what these models&nbsp; can do to improve things. I'm super excited&nbsp;&nbsp; about areas like education and healthcare,&nbsp; making information accessible to all people. &nbsp;

But we also realize that they could be used for&nbsp; misinformation, they could be used for automated&nbsp;&nbsp; hacking of computer systems, and we want to put&nbsp; as many safeguards and mitigations and understand&nbsp;&nbsp; the capabilities of the models in place as we&nbsp;

can. I think Google as a whole has a really&nbsp;&nbsp; good view to how we should approach this. Our&nbsp; Responsible AI principles actually are a pretty&nbsp;&nbsp; nice framework for how to think about trade offs&nbsp; of making better and better AI systems available&nbsp;&nbsp;

in different contexts and settings, while also&nbsp; sort of making sure that we're doing the right&nbsp;&nbsp; thing in terms of making sure they're safe and&nbsp; not saying toxic things and things like that. &nbsp;

I guess the thing that stands out to me, if&nbsp; you were zooming out and looking at this period&nbsp;&nbsp; of human history, if we're in the world where,&nbsp; look, if you do post-training on Gemini 3 badly,&nbsp;&nbsp; it can do some misinformation – but then you&nbsp;

fix the post training. It's a bad mistake,&nbsp;&nbsp; but it's a fixable mistake, right? Right. &nbsp; Whereas if you have this feedback loop dynamic,&nbsp;

which is a possibility, then the mistake of the&nbsp;&nbsp; thing that catapults this intelligence&nbsp; explosion is misaligned, is not trying to&nbsp;&nbsp; write the code you think it's trying to write, and&nbsp; [instead] optimizing for some other objective.

&nbsp; And on the other end of this very rapid process&nbsp; that lasts a couple of years, maybe less,&nbsp;&nbsp; you have things that are approaching Jeff Dean&nbsp; or beyond level, or Noam Shazeer or beyond&nbsp;&nbsp;

level. And then you have millions of copies&nbsp; of Jeff Dean level programmers, and- anyways,&nbsp;&nbsp; that seems like a harder to recover mistake. As these systems do get more powerful,&nbsp;&nbsp; you have to be more and more careful.

One thing I would say is, there are extreme&nbsp;&nbsp; views on either end. There's, "Oh my goodness,&nbsp; these systems are going to be so much better&nbsp;&nbsp; than humans at all things, and we're going&nbsp; to be kind of overwhelmed." And then there's,&nbsp;&nbsp;

"These systems are going to be amazing, and&nbsp; we don't have to worry about them at all." &nbsp; I think I'm somewhere in the middle. I've been&nbsp; a co-author on a paper called "Shaping AI,"&nbsp;&nbsp;

which is, you know, those two extreme views often&nbsp; kind of view our role as kind of laissez-faire,&nbsp;&nbsp; like we're just going to have the AI&nbsp; develop in the path that it takes. &nbsp;

And I think there's actually a really good&nbsp; argument to be made that what we're going to&nbsp;&nbsp; do is try to shape and steer the way in which&nbsp; AI is deployed in the world so that it is,&nbsp;&nbsp; you know, maximally beneficial in the areas that&nbsp;

we want to capture and benefit from, in education,&nbsp;&nbsp; some of the areas I mentioned, healthcare. And steer it as much as we can away- maybe&nbsp;&nbsp; with policy-related things, maybe with technical&nbsp; measures and safeguards- away from, you know,&nbsp;&nbsp;

the computer will take over and&nbsp; have unlimited control of what&nbsp;&nbsp; it can do. So I think that's an engineering&nbsp; problem: how do you engineer safe systems? &nbsp;

I think it's kind of the modern equivalent&nbsp; of what we've done in older-style software&nbsp;&nbsp; development. Like if you look at, you know,&nbsp; airplane software development, that has a pretty&nbsp;&nbsp; good record of how do you rigorously develop safe&nbsp;

and secure systems for doing a pretty risky task? &nbsp; The difficulty there is that there's not some&nbsp; feedback loop where the 737, you put it in&nbsp;&nbsp; a box with a bunch of compute for a couple of&nbsp;

years, and it comes out with the version 1000. &nbsp; I think the good news is that analyzing text&nbsp; seems to be easier than generating text. So&nbsp;&nbsp; I believe that the ability of language models to&nbsp;

actually analyze language model output and figure&nbsp;&nbsp; out what is problematic or dangerous will actually&nbsp; be the solution to a lot of these control issues. &nbsp; We are definitely working on this stuff.&nbsp;

We've got a bunch of brilliant folks at&nbsp;&nbsp; Google working on this now. And I think it's&nbsp; just going to be more and more important,&nbsp;&nbsp; both from a “do something good for people”&nbsp; standpoint, but also from a business standpoint,&nbsp;&nbsp;

that you are, a lot of the time, limited in what&nbsp; you can deploy based on keeping things safe. &nbsp; And so it becomes very, very important&nbsp; to be really, really good at that.

&nbsp; Yeah, obviously, I know you guys take the&nbsp; potential benefits and costs here seriously,&nbsp;&nbsp; and it's truly remarkable. I know you guys get&nbsp; credit for it, but not enough. I think there's&nbsp;&nbsp;

just, there are so many different applications&nbsp; that you have put out for using these models to&nbsp;&nbsp; make the different areas you talked about better. Um, but I do think that… again, if you have a&nbsp;&nbsp; situation where plausibly there's some&nbsp;

feedback loop process, on the other end,&nbsp;&nbsp; you have a model that is as good as&nbsp; Noam Shazeer, as good as Jeff Dean. &nbsp; If there's an evil version of you running&nbsp;

around, and suppose there's a million of them,&nbsp;&nbsp; I think that's really, really bad. That could be&nbsp; much, much worse than any other risk, maybe short&nbsp;&nbsp; of nuclear war or something. Just think about&nbsp; it, like a million evil Jeff Deans or something.

&nbsp; Where do we get the training data? But, to the extent that you think that's&nbsp;&nbsp; a plausible output of some quick feedback&nbsp; loop process, what is your plan of okay,&nbsp;&nbsp;

we've got Gemini 3 or Gemini 4, and we think&nbsp; it's helping us do a better job of training&nbsp;&nbsp; future versions, it's writing a bunch of the&nbsp; training code for us. From this point forward,&nbsp;&nbsp; we just kind of look over it, verify it.

Even the verifiers you talked about of looking&nbsp;&nbsp; at the output of these models will eventually&nbsp; be trained by, or a lot of the code will be&nbsp;&nbsp; written by the AIs you make. What do you want&nbsp; to know for sure before we have the Gemini 4&nbsp;&nbsp;

help us with the AI research? We really want&nbsp; to make sure, we want to run this test on it&nbsp;&nbsp; before we let it write our AI code for us. I mean, I think having the system explore&nbsp;&nbsp; algorithmic research ideas seems like something&nbsp;

where there's still a human in charge of that.&nbsp;&nbsp; Like, it's exploring the space, and then&nbsp; it's going to, like, get a bunch of results,&nbsp;&nbsp; and we're going to make a decision, like,&nbsp; are we going to incorporate this particular,&nbsp;&nbsp;

you know, learning algorithm or change to&nbsp; the system into kind of the core code base? &nbsp; And so I think you can put in safeguards like that&nbsp; that enable us to get the benefits of the system&nbsp;&nbsp;

that can sort of improve or kind of self-improve&nbsp; with human oversight, uh, without necessarily&nbsp;&nbsp; letting the system go full-on self-improving&nbsp; without any any notion of a person looking at what&nbsp;&nbsp; it's doing, right? That's the kind of engineering&nbsp;

safeguards I'm talking about, where you want to&nbsp;&nbsp; be kind of looking at the characteristics&nbsp; of the systems you're deploying, not deploy&nbsp;&nbsp; ones that are harmful by some measures and some&nbsp; ways, and you have an understanding of what its&nbsp;&nbsp;

capabilities are and what it's likely to do in&nbsp; certain scenarios. So, you know, I think it's&nbsp;&nbsp; not an easy problem by any means, but I do think&nbsp; it is possible to make these these systems safe. &nbsp;

Yeah. I mean, I think we are also going to&nbsp; use these systems a lot to check themselves,&nbsp;&nbsp; check other systems. Even as a human, it is easier&nbsp; to recognize something than to generate it. &nbsp;

One thing I would say is if you expose the model's&nbsp; capabilities through an API or through a user&nbsp;&nbsp; interface that people interact with, I think then&nbsp; you have a level of control to understand how is&nbsp;&nbsp; it being used and put some boundaries on what it&nbsp;

can do. And that I think is one of the tools in&nbsp;&nbsp; the arsenal of how do you make sure that what&nbsp; it's going to do is sort of acceptable by some&nbsp;&nbsp; set of standards you've set out in your mind? Yeah. I mean, I think the goal is to empower&nbsp;&nbsp;

people, but for the most part we should be&nbsp; mostly letting people do things with these&nbsp;&nbsp; systems that make sense and closing off as&nbsp; few parts of the space as we can. But yeah,&nbsp;&nbsp; if you let somebody take your thing and create a&nbsp;

million evil software engineers, then that doesn't&nbsp;&nbsp; empower people because they're going to hurt&nbsp; others with a million evil software engineers. &nbsp; So I'm against that.

Me too. I'll go on. &nbsp; All right, let's talk about a few more fun topics.&nbsp; Make it a little lighter. Over the last 25 years,&nbsp;&nbsp; what was the most fun time? What period of&nbsp;

time do you have the most nostalgia over? &nbsp; I think the early sort of four&nbsp; or five years at Google when I&nbsp;&nbsp; was one of a handful of people working on&nbsp;

search and crawling and indexing systems,&nbsp;&nbsp; our traffic was growing tremendously fast. We&nbsp; were trying to expand our index size and make&nbsp;&nbsp; it so we updated it every minute instead of every&nbsp; month, or two months if something went wrong.

&nbsp; Seeing the growth in usage of our systems was&nbsp; really just personally satisfying. Building&nbsp;&nbsp; something that is used by two billion&nbsp; people a day is pretty incredible.

&nbsp; But I would also say equally exciting is working&nbsp; with people on the Gemini team today. I think&nbsp;&nbsp; the progress we've been making in what these&nbsp; models can do over the last year and a half is&nbsp;&nbsp;

really fun. People are really dedicated,&nbsp; really excited about what we're doing. &nbsp; I think the models are getting better and&nbsp; better at pretty complex tasks. Like if&nbsp;&nbsp;

you showed someone using a computer 20 years ago&nbsp; what these models are capable of, they wouldn't&nbsp;&nbsp; believe it. And even five years ago, they might&nbsp; not believe it. And that's pretty satisfying. &nbsp;

I think we'll see a similar growth in usage&nbsp; of these models and impact in the world. &nbsp; Yeah, I'm with you. Early days were super fun.&nbsp; Part of that is just knowing everybody and the&nbsp;&nbsp;

social aspect, and the fact that you're&nbsp; just building something that millions&nbsp;&nbsp; and millions of people are using. Same thing today. We got that whole&nbsp;&nbsp; nice micro kitchen area where you get lots of&nbsp;

people hanging out. I love being in person,&nbsp;&nbsp; working with a bunch of great people, and building&nbsp; something that's helping millions to billions of&nbsp;&nbsp; people. What could be better? What was this micro kitchen?

&nbsp; Oh, we have a micro kitchen area in the building&nbsp; we both sit in. It's the new, so-named Gradient&nbsp;&nbsp; Canopy. It used to be named Charleston East,&nbsp; and we decided we needed a more exciting&nbsp;&nbsp;

name because it's a lot of machine learning&nbsp; researchers and AI research happening in there. &nbsp; There's a micro kitchen area that we've set up&nbsp; with, normally it's just like an espresso machine&nbsp;&nbsp;

and a bunch of snacks, but this particular one has&nbsp; a bunch of space in it. So we've set up maybe 50&nbsp;&nbsp; desks in there, and so people are just hanging&nbsp; out in there. It's a little noisy because people&nbsp;&nbsp; are always grinding beans and brewing espresso,&nbsp;

but you also get a lot of face-to-face ideas of&nbsp;&nbsp; connections, like, "Oh, I've tried that. Did&nbsp; you think about trying this in your idea?" Or,&nbsp;&nbsp; "Oh, we're going to launch this thing&nbsp; next week. How's the load test looking?"&nbsp;&nbsp;

There's just lots of feedback that happens. And then we have our Gemini chat room for people&nbsp;&nbsp; who are not in that micro kitchen. We have a team&nbsp; all over the world, and there's probably 120 chat&nbsp;&nbsp; rooms I'm in related to Gemini things. In this&nbsp;

particular very focused topic, we have seven&nbsp;&nbsp; people working on this, and there are exciting&nbsp; results being shared by the London colleagues. &nbsp; When you wake up, you see what's happening&nbsp;

in there, or it's a big group of people&nbsp;&nbsp; focused on data, and there are all kinds of&nbsp; issues happening in there. It's just fun. &nbsp; What I find remarkable about some&nbsp;

of the calls you guys have made&nbsp;&nbsp; is you're anticipating a level of demand for&nbsp; compute, which at the time wasn't obvious or&nbsp;&nbsp; evident. TPUs being a famous example of this,&nbsp; or the first TPU being an example of this.

&nbsp; That thinking you had in, I guess, 2013&nbsp; or earlier, if you think about it that way&nbsp;&nbsp; today and you do an estimate of, look, we're&nbsp; going to have these models that are going to&nbsp;&nbsp;

be a backbone of our services, and we're going&nbsp; to be doing constant inference for them. We're&nbsp;&nbsp; going to be training future versions. And you&nbsp; think about the amount of compute we'll need by&nbsp;&nbsp; 2030 to accommodate all these use cases,&nbsp;

where does the Fermi estimate get you? &nbsp; Yeah, I mean, I think you're going to want a lot&nbsp; of inference. Compute is the rough, highest-level&nbsp;&nbsp; view of these capable models because if one of the&nbsp;

techniques for improving their quality is scaling&nbsp;&nbsp; up the amount of inference compute you use, then&nbsp; all of a sudden what's currently like one request&nbsp;&nbsp; to generate some tokens now becomes 50 or 100&nbsp; or 1000 times as computationally intensive, even&nbsp;&nbsp;

though it's producing the same amount of output. And you're also going to then see tremendous&nbsp;&nbsp; scaling up of the uses of these services as&nbsp; not everyone in the world has discovered these&nbsp;&nbsp; chat-based conversational interfaces where&nbsp;

you can get them to do all kinds of amazing&nbsp;&nbsp; things. Probably 10% of the computer users in&nbsp; the world have discovered that today, or 20%. As&nbsp;&nbsp; that pushes towards 100% and people make&nbsp; heavier use of it, that's going to be&nbsp;&nbsp;

another order of magnitude or two of scaling. And so you're now going to have two orders of&nbsp;&nbsp; magnitude from that, two orders of magnitude from&nbsp; that. The models are probably going to be bigger,&nbsp;&nbsp; you'll get another order of magnitude or two&nbsp;

from that. And there's a lot of inference&nbsp;&nbsp; compute you want. So you want extremely efficient&nbsp; hardware for inference for models you care about. &nbsp; In flops, global total global inference in 2030?

I think just more is always going to be better.&nbsp;&nbsp; If you just kind of think about, okay, what&nbsp; fraction of world GDP will people decide to&nbsp;&nbsp; spend on AI at that point? And then, like,&nbsp; okay, what do the AI systems look like?

&nbsp; Well, maybe it's some sort of personal&nbsp; assistant-like thing that is in your&nbsp;&nbsp; glasses and can see everything around you and&nbsp; has access to all your digital information&nbsp;&nbsp;

and the world's digital information.&nbsp; And maybe it's like you're Joe Biden,&nbsp;&nbsp; and you have the earpiece in the cabinet that&nbsp; can advise you about anything in real-time&nbsp;&nbsp; and solve problems for you and give you helpful&nbsp;

pointers. Or you could talk to it, and it wants&nbsp;&nbsp; to analyze anything that it sees around you for&nbsp; any potential useful impact that it has on you. &nbsp; So I mean, I can imagine, okay, and then say&nbsp;

it's like your personal assistant or your&nbsp;&nbsp; personal cabinet or something, and that every&nbsp; time you spend 2x as much money on compute,&nbsp;&nbsp; the thing gets like 5, 10 IQ points smarter or&nbsp; something like that. And, okay, would you rather&nbsp;&nbsp;

spend $10 a day and have an assistant or $20 a day&nbsp; and have a smarter assistant? And not only is it&nbsp;&nbsp; an assistant in life but an assistant in getting&nbsp; your job done better because now it makes you from&nbsp;&nbsp; a 10x engineer to a 100x or 10 millionx engineer?

Okay, so let's see: from first principles,&nbsp;&nbsp; right? So people are going to want to spend&nbsp; some fraction of world GDP on this thing.&nbsp;&nbsp; The world GDP is almost certainly going to go way,&nbsp; way up, two orders of magnitude higher than it is&nbsp;&nbsp;

today, due to the fact that we have all of these&nbsp; artificial engineers working on improving things. &nbsp; Probably we'll have solved unlimited energy and&nbsp; carbon issues by that point. So we should be able&nbsp;&nbsp;

to have lots of energy. We should be able to&nbsp; have millions to billions of robots building&nbsp;&nbsp; us data centers. Let's see, the sun is what,&nbsp; 10 to the 26 watts or something like that? &nbsp;

I'm guessing that the amount of compute being used&nbsp; for AI to help each person will be astronomical. &nbsp; I would add on to that. I'm not sure&nbsp; I agree completely, but it's a pretty&nbsp;&nbsp;

interesting thought experiment to go in that&nbsp; direction. And even if you get partway there,&nbsp;&nbsp; it's definitely going to be a lot of compute. And this is why it's super important to have as&nbsp;&nbsp; cheap a hardware platform for using these&nbsp;

models and applying them to problems that&nbsp;&nbsp; Noam described, so that you can then&nbsp; make it accessible to everyone in some&nbsp;&nbsp; form and have as low a cost for access to&nbsp; these capabilities as you possibly can.

&nbsp; And I think that's achievable by focusing on&nbsp; hardware and model co-design kinds of things,&nbsp;&nbsp; we should be able to make these things much,&nbsp; much more efficient than they are today.

&nbsp; Is Google's data center build-out plan over&nbsp; the next few years aggressive enough given&nbsp;&nbsp; this increase in demand you're expecting? I'm not going to comment on our future capital&nbsp;&nbsp;

spending because our CEO and CFO would prefer&nbsp; I probably not. But I will say, you can look at&nbsp;&nbsp; our past capital expenditures over the last few&nbsp; years and see that we're definitely investing&nbsp;&nbsp; in this area because we think it's important.

We are continuing to build new and interesting,&nbsp;&nbsp; innovative hardware that we think really helps us&nbsp; have an edge in deploying these systems to more&nbsp;&nbsp; and more people, both training them and also, how&nbsp; do we make them usable by people for inference?

&nbsp; One thing I've heard you talk a&nbsp; lot about is continual learning,&nbsp;&nbsp; the idea that you could just have a model&nbsp; which improves over time rather than having to&nbsp;&nbsp;

start from scratch. Is there any fundamental&nbsp; impediment to that? Because theoretically,&nbsp;&nbsp; you should just be able to keep fine-tuning a&nbsp; model. What does that future look like to you? &nbsp;

Yeah, I've been thinking about this more and&nbsp; more. I've been a big fan of models that are&nbsp;&nbsp; sparse because I think you want different parts&nbsp; of the model to be good at different things. We&nbsp;&nbsp; have our Gemini 1.5 Pro model, and other&nbsp;

models are mixture-of-experts style models&nbsp;&nbsp; where you now have parts of the model that are&nbsp; activated for some token and parts that are not&nbsp;&nbsp; activated at all because you've decided this is a&nbsp; math-oriented thing, and this part's good at math,&nbsp;&nbsp;

and this part's good at understanding cat images.&nbsp; So, that gives you this ability to have a much&nbsp;&nbsp; more capable model that's still quite efficient at&nbsp; inference time because it has very large capacity,&nbsp;&nbsp; but you activate a small part of it.

But I think the current problem, well,&nbsp;&nbsp; one limitation of what we're doing today is&nbsp; it's still a very regular structure where&nbsp;&nbsp; each of the experts is the same size. The&nbsp; paths merge back together very fast. They&nbsp;&nbsp;

don't go off and have lots of different&nbsp; branches for mathy things that don't merge&nbsp;&nbsp; back together with the kind of cat-image thing. I think we should probably have a more organic&nbsp;&nbsp; structure in these things. I also would like&nbsp;

it if the pieces of those model of the model&nbsp;&nbsp; could be developed a little bit independently.&nbsp; Like right now, I think we have this issue where&nbsp;&nbsp; we're going to train a model. So, we do a&nbsp; bunch of preparation work on deciding the&nbsp;&nbsp;

most awesome algorithms we can come up with and&nbsp; the most awesome data mix we can come up with. &nbsp; But there's always trade-offs there, like we'd&nbsp; love to include more multilingual data, but that&nbsp;&nbsp;

might come at the expense of including less coding&nbsp; data, and so, the model's less good at coding but&nbsp;&nbsp; better at multilingual, or vice versa. I think it&nbsp; would be really great if we could have a small set&nbsp;&nbsp; of people who care about a particular subset of&nbsp;

languages go off and create really good training&nbsp;&nbsp; data, train a modular piece of a model that we&nbsp; can then hook up to a larger model that improves&nbsp;&nbsp; its capability in, say, Southeast Asian languages&nbsp; or in reasoning about Haskell code or something.

&nbsp; Then, you also have a nice software engineering&nbsp; benefit where you've decomposed the problem a&nbsp;&nbsp; bit compared to what we do today, which is we have&nbsp; this kind of a whole bunch of people working. But&nbsp;&nbsp;

then, we have this kind of monolithic process&nbsp; of starting to do pre-training on this model. &nbsp; If we could do that, you could have 100 teams&nbsp; around Google. You could have people all around&nbsp;&nbsp;

the world working to improve languages they care&nbsp; about or particular problems they care about and&nbsp;&nbsp; all collectively work on improving the model.&nbsp; And that's kind of a form of continual learning. &nbsp;

That would be so nice. You could just glue&nbsp; models together or rip out pieces of models&nbsp;&nbsp; and shove them into other... Upgrade this piece without&nbsp;&nbsp; throwing out the thing...

...or you just attach a fire hose,&nbsp;&nbsp; and you suck all the information out of this&nbsp; model, shove it into another model. There is,&nbsp;&nbsp; I mean, the countervailing interest there is sort&nbsp; of science, in terms of, okay, we're still in the&nbsp;&nbsp;

period of rapid progress, so, if you want to&nbsp; do sort of controlled experiments, and okay,&nbsp;&nbsp; I want to compare this thing to that thing because&nbsp; that then is helping us figure out what to build.&nbsp;&nbsp; In that interest, it's often best to just start&nbsp;

from scratch so you can compare one complete&nbsp;&nbsp; training run to another complete training run at&nbsp; the practical level because it helps us figure out&nbsp;&nbsp; what to build in the future. It's less&nbsp; exciting but does lead to rapid progress.

&nbsp; Yeah, I think there may be ways to&nbsp; get a lot of the benefits of that&nbsp;&nbsp; with a version system of modularity.&nbsp; I have a frozen version of my model,&nbsp;&nbsp;

and then I include a different variant of some&nbsp; particular module, and I want to compare its&nbsp;&nbsp; performance or train it a bit more. Then,&nbsp; I compare it to the baseline of this thing&nbsp;&nbsp; with now version N prime of this particular&nbsp;

module that does Haskell interpretation. &nbsp; Actually, that could lead to faster research&nbsp; progress, right? You've got some system, and&nbsp;&nbsp; you do something to improve it. And if that thing&nbsp;

you're doing to improve it is relatively cheap&nbsp;&nbsp; compared to training the system from scratch,&nbsp; then it could actually make research much,&nbsp;&nbsp; much cheaper and faster. Yeah, and also more&nbsp;&nbsp;

parallelizable, I think, across people. Okay, let's figure it out and do that next. &nbsp; So, this idea that is sort of casually&nbsp; laid out there would actually be a big&nbsp;&nbsp;

regime shift compared to how things are done&nbsp; today. If you think the way things are headed,&nbsp;&nbsp; this is a sort of very interesting prediction&nbsp; about... You just have this blob where things&nbsp;&nbsp; are getting pipelined back and forth –&nbsp;

and if you want to make something better,&nbsp;&nbsp; you can do like a sort of&nbsp; surgical incision almost. &nbsp; Right, or grow the model, add another little bit&nbsp;

of it here. Yeah, I've been sort of sketching out&nbsp;&nbsp; this vision for a while in Pathways... Yeah, you've been building the... &nbsp; ...and we've been building the infrastructure&nbsp;

for it. So, a lot of what Pathways, the system,&nbsp;&nbsp; can support is this kind of twisty, weird&nbsp; model with asynchronous updates to different&nbsp;&nbsp; pieces. And we're using Pathways to train our&nbsp; Gemini models, but we're not making use of some&nbsp;&nbsp;

of its capabilities yet. But maybe we should. Ooh maybe. There have been times, like the way the&nbsp;&nbsp; TPU pods were set up. I don't know who did that,&nbsp; but they did a pretty brilliant job. The low-level&nbsp;&nbsp; software stack and the hardware stack, okay,&nbsp;

you've got your nice regular high-performance&nbsp;&nbsp; hardware, you've got these great torus-shaped&nbsp; interconnects, and then you've got the right&nbsp;&nbsp; low-level collectives, the all-reduces, et cetera,&nbsp; which I guess came from supercomputing, but it&nbsp;&nbsp;

turned out to be kind of just the right thing&nbsp; to build distributed deep learning on top of. &nbsp; Okay, so a couple of questions. One,&nbsp; suppose Noam makes another breakthrough,&nbsp;&nbsp;

and now we've got a better architecture.&nbsp; Would you just take each compartment and&nbsp;&nbsp; distill it into this better architecture?&nbsp; And that's how it keeps improving over time? &nbsp;

I do think distillation is a really useful&nbsp; tool because it enables you to transform&nbsp;&nbsp; a model in its current model architecture&nbsp; form into a different form. Often,&nbsp;&nbsp; you use it to take a really capable but large&nbsp;

and unwieldy model and distill it into a smaller&nbsp;&nbsp; one that maybe you want to serve with really&nbsp; good, fast latency inference characteristics. &nbsp; But I think you can also view this as&nbsp;

something that's happening at the module&nbsp;&nbsp; level. Maybe there'd be a continual process where&nbsp; you have each module, and it has a few different&nbsp;&nbsp; representations of itself. It has a really&nbsp; big one. It's got a much smaller one that is&nbsp;&nbsp;

continually distilling into the small version. And then the small version, once that's finished,&nbsp;&nbsp; you sort of delete the big one and you add a&nbsp; bunch more parameter capacity. Now, start to&nbsp;&nbsp; learn all the things that the distilled small&nbsp;

one doesn't know by training it on more data,&nbsp;&nbsp; and then you kind of repeat that process. If you&nbsp; have that kind of running a thousand different&nbsp;&nbsp; places in your modular model in the background,&nbsp; that seems like it would work reasonably well.

&nbsp; This could be a way of doing&nbsp; inference scaling, like the router&nbsp;&nbsp; decides how much do you want the big one. Yeah, you can have multiple versions. Oh,&nbsp;&nbsp;

this is an easy math problem, so I'm going&nbsp; to route it to the really tiny math distilled&nbsp;&nbsp; thing. Oh, this one's really hard, so... One, at least from public research,&nbsp;&nbsp; it seems like it's often hard to decode what&nbsp;

each expert is doing in mixture of expert type&nbsp;&nbsp; models. If you have something like this, how&nbsp; would you enforce the kind of modularity that&nbsp;&nbsp; would be visible and understandable to us? Actually, in the past, I found experts to be&nbsp;&nbsp;

relatively easy to understand. I mean,&nbsp; the first Mixture of Experts paper,&nbsp;&nbsp; you could just look at the experts. “I don’t know, I'm only the&nbsp;&nbsp; inventor of Mixture of Experts.”

Like, you could just see, okay, this expert,&nbsp;&nbsp; like we did, you know, a thousand, two thousand&nbsp; experts. Okay, and this expert, was getting words&nbsp;&nbsp; referring to cylindrical objects. This one's super good at dates.

&nbsp; Yeah. Talking about times. &nbsp; Yeah, pretty easy to do.

Not that you would need that&nbsp;&nbsp; human understanding to figure out how to work the&nbsp; thing at runtime because you just have some sort&nbsp;&nbsp; of learned router that's looking at the example. One thing I would say is there is a bunch of&nbsp;&nbsp;

work on interpretability of models and what&nbsp; are they doing inside. Sort of expert-level&nbsp;&nbsp; interpretability is a sub-problem&nbsp; of that broader area. I really like&nbsp;&nbsp; some of the work that my former intern,&nbsp;

Chris Olah, and others did at Anthropic,&nbsp;&nbsp; where they trained a very sparse autoencoder and&nbsp; were able to deduce what characteristics some&nbsp;&nbsp; particular neuron in a large language model has,&nbsp; so they found a Golden Gate Bridge neuron that's&nbsp;&nbsp;

activated when you're talking about the Golden&nbsp; Gate Bridge. And I think you could do that at&nbsp;&nbsp; the expert level, you could do that at a variety&nbsp; of different levels and get pretty interpretable&nbsp;&nbsp; results, and it's a little unclear if you&nbsp;

necessarily need that. If the model is just&nbsp;&nbsp; really good at stuff, we don't necessarily care&nbsp; what every neuron in the Gemini model is doing, as&nbsp;&nbsp; long as the collective output and characteristics&nbsp; of the overall system are good. That's one of the&nbsp;&nbsp;

beauties of deep learning, is you don't need to&nbsp; understand or hand-engineer every last feature. &nbsp; Man, there are so many interesting implications&nbsp; of this that I could just keep asking you about&nbsp;&nbsp;

this- I would regret not asking you more about&nbsp; this, so I'll keep going. One implication is,&nbsp;&nbsp; currently, if you have a model that has some&nbsp; tens or hundreds of billions of parameters,&nbsp;&nbsp; you can serve it on a handful of GPUs.

In this system, where any one query might&nbsp;&nbsp; only make its way through a small fraction of&nbsp; the total parameters, but you need the whole&nbsp;&nbsp; thing loaded into memory, the specific kind of&nbsp; infrastructure that Google has invested in with&nbsp;&nbsp;

these TPUs that exist in pods of hundreds or&nbsp; thousands would be immensely valuable, right? &nbsp; For any sort of even existing mixtures of&nbsp; experts, you want the whole thing in-memory.&nbsp;&nbsp;

I guess there's kind of this misconception&nbsp; running around with Mixture of Experts that,&nbsp;&nbsp; okay, the benefit is that you don't even have&nbsp; to go through those weights in the model. &nbsp;

If some expert is unused, it doesn't mean that&nbsp; you don't have to retrieve that memory because,&nbsp;&nbsp; really, in order to be efficient, you're&nbsp; serving at very large batch sizes. &nbsp;

Of independent requests. Right, of independent requests.&nbsp;&nbsp; So it's not really the case that, okay, at&nbsp; this step, you're either looking at this&nbsp;&nbsp; expert or you're not looking at this expert.

Because if that were the case, then when you did&nbsp;&nbsp; look at the expert, you would be running it at&nbsp; batch size one, which is massively inefficient.&nbsp;&nbsp; Like you've got modern hardware, the operational&nbsp; intensities are whatever, hundreds. So that's&nbsp;&nbsp;

not what's happening. It's that you are looking&nbsp; at all the experts, but you only have to send a&nbsp;&nbsp; small fraction of the batch through each one. Right, but you still have a smaller batch at&nbsp;&nbsp; each expert that then goes through. And in&nbsp;

order to get kind of reasonable balance,&nbsp;&nbsp; one of the things that the current models&nbsp; typically do is they have all the experts&nbsp;&nbsp; be roughly the same compute cost, and then you&nbsp; run roughly the same size batches through them&nbsp;&nbsp;

in order to propagate the very large batch you're&nbsp; doing at inference time and have good efficiency. &nbsp; But I think you often in the future might&nbsp; want experts that vary in computational cost&nbsp;&nbsp;

by factors of 100 or 1000. Or maybe paths&nbsp; that go for many layers on one case, and&nbsp;&nbsp; a single layer or even a skip connection in&nbsp; the other case. And there, I think you're going&nbsp;&nbsp; to want very large batches still, but you're&nbsp;

going to want to push things through the model&nbsp;&nbsp; a little bit asynchronously at inference time,&nbsp; which is a little easier than training time. &nbsp; That's part of one of the things that pathways was&nbsp;

designed to support. You have these components,&nbsp;&nbsp; and the components can be variable cost and you&nbsp; kind of can say, for this particular example,&nbsp;&nbsp; I want to go through this subset&nbsp; of the model, and for this example,&nbsp;&nbsp;

I want to go through this subset of the model&nbsp; and have the system kind of orchestrate that. &nbsp; It also would mean that it would take companies&nbsp; of a certain size and sophistication to be able&nbsp;&nbsp;

to... Right now, anybody can train a&nbsp; sufficiently small enough model. But&nbsp;&nbsp; if it ends up being the case that this&nbsp; is the best way to train future models,&nbsp;&nbsp; then you would need a company that can basically&nbsp;

have a data center serving a single quote, unquote&nbsp;&nbsp; “blob” or model. So it would be an interesting&nbsp; change in paradigms in that way as well. &nbsp; You definitely want to have at least enough&nbsp;

HBM to put your whole model. So depending&nbsp;&nbsp; on the size of your model, most likely that's&nbsp; how much HBM you'd want to have at a minimum. &nbsp; It also means you don't necessarily need to&nbsp;

grow your entire model footprint to be the&nbsp;&nbsp; size of a data center. You might&nbsp; want it to be a bit below that. &nbsp; And then have potentially many replicated copies&nbsp;

of one particular expert that is being used a lot,&nbsp;&nbsp; so that you get better load balancing. This one's&nbsp; being used a lot because we get a lot of math&nbsp;&nbsp; questions, and this one is an expert on Tahitian&nbsp; dance, and it is called on really rarely.

&nbsp; That one, maybe you even page out to&nbsp; DRAM rather than putting it in HBM.&nbsp;&nbsp; But you want the system to figure all this&nbsp; stuff out based on load characteristics.

&nbsp; Right now, language models,&nbsp; obviously, you put in language,&nbsp;&nbsp; you get language out. Obviously, it's multimodal. But the Pathways blog post talks about so many&nbsp;&nbsp;

different use cases that are not obviously&nbsp; of this kind of auto-regressive nature going&nbsp;&nbsp; through the same model. Could you imagine,&nbsp; basically, Google as a company, the product&nbsp;&nbsp; is like Google Search goes through this, Google&nbsp;

Images goes through this, Gmail goes through it? &nbsp; Just like the entire server is just this&nbsp; huge mixture of experts, specialized? &nbsp;

You're starting to see some of this by having a&nbsp; lot of uses of Gemini models across Google that&nbsp;&nbsp; are not necessarily fine-tuned. They're just&nbsp; given instructions for this particular use&nbsp;&nbsp; case in this feature in this product setting.

So, I definitely see a lot more sharing of what&nbsp;&nbsp; the underlying models are capable of across&nbsp; more and more services. I do think that's a&nbsp;&nbsp; pretty interesting direction to go, for sure. Yeah, I feel like people listening might not&nbsp;&nbsp;

register how interesting a prediction this is&nbsp; about where AI is going. It's like sort of getting&nbsp;&nbsp; Noam on a podcast in 2018 and being like, "Yeah,&nbsp; so I think language models will be a thing." &nbsp;

It's like, if this is where things go,&nbsp; this is actually incredibly interesting. &nbsp; Yeah, and I think you might see that might&nbsp; be a big base model. And then you might want&nbsp;&nbsp;

customized versions of that model with different&nbsp; modules that are added onto it for different&nbsp;&nbsp; settings that maybe have access restrictions. Maybe we have an internal one for Google use,&nbsp;&nbsp; for Google employees, that we've trained some&nbsp;

modules on internal data, and we don't allow&nbsp;&nbsp; anyone else to use those modules, but we&nbsp; can make use of it. Maybe other companies,&nbsp;&nbsp; you add on other modules that are useful for that&nbsp; company setting and serve it in our cloud APIs.

&nbsp; What is the bottleneck to&nbsp; making this sort of system&nbsp;&nbsp; viable? Is it systems engineering? Is it ML? It's a pretty different way of operating than&nbsp;&nbsp;

our current Gemini development. So,&nbsp; I think we will explore these kinds&nbsp;&nbsp; of areas and make some progress on them. But we need to really see evidence that it's&nbsp;&nbsp; the right way, that it has a lot of benefits.&nbsp;

Some of those benefits may be improved quality,&nbsp;&nbsp; some may be less concretely measurable,&nbsp; like this ability to have lots of parallel&nbsp;&nbsp; development of different modules. But that's&nbsp; still a pretty exciting improvement because&nbsp;&nbsp;

I think that would enable us to make faster&nbsp; progress on improving the model's capabilities&nbsp;&nbsp; for lots of different distinct areas. Even the data control modularity stuff&nbsp;&nbsp; seems really cool because then you could&nbsp;

have the piece of the model that's just&nbsp;&nbsp; trained for me. It knows all my private data. Like a personal module for you would be useful.&nbsp;&nbsp; Another thing might be you can use certain data&nbsp; in some settings but not in other settings.

&nbsp; Maybe we have some YouTube data that's only usable&nbsp; in a YouTube product surface but not in other&nbsp;&nbsp; settings. So, we could have a module that is&nbsp; trained on that data for that particular purpose.

&nbsp; We're going to need a million automated&nbsp; researchers to invent all of this stuff. &nbsp; It's going to be great.

Yeah, well the thing itself, you build the blob,&nbsp;&nbsp; and it tells you how to make the blob better. Blob 2.0. Or maybe they're not even versions,&nbsp;&nbsp; it's just like an incrementally growing blob. Yeah. Okay, Jeff, motivate for me, big picture:&nbsp;&nbsp;

why is this a good idea? Why&nbsp; is this the next direction? &nbsp; Yeah, this notion of an organic, not quite so&nbsp; carefully mathematically constructed machine&nbsp;&nbsp;

learning model is one that's been with me for a&nbsp; little while. I feel like in the development of&nbsp;&nbsp; neural nets, the artificial neurons, inspiration&nbsp; from biological neurons is a good one and has&nbsp;&nbsp; served us well in the deep learning field.

We've been able to make a lot of progress with&nbsp;&nbsp; that. But I feel like we're not necessarily&nbsp; looking at other things that real brains do&nbsp;&nbsp; as much as we perhaps could, and that's not to&nbsp; say we should exactly mimic that because silicon&nbsp;&nbsp;

and wetware have very different characteristics&nbsp; and strengths. But I do think one thing we could&nbsp;&nbsp; draw more inspiration from is this notion&nbsp; of having different specialized portions,&nbsp;&nbsp; sort of areas of a model of a brain&nbsp;

that are good at different things. &nbsp; We have a little bit of that&nbsp; in Mixture of Experts models,&nbsp;&nbsp; but it's still very structured. I feel like&nbsp;

this kind of more organic growth of expertise,&nbsp;&nbsp; and when you want more expertise of that, you&nbsp; add some more capacity to the model there and&nbsp;&nbsp; let it learn a bit more on that kind of thing. Also this notion of adapting the connectivity&nbsp;&nbsp;

of the model to the connectivity of the hardware&nbsp; is a good one. I think you want incredibly dense&nbsp;&nbsp; connections between artificial neurons in the same&nbsp; chip and the same HBM because that doesn't cost&nbsp;&nbsp; you that much. But then you want a smaller number&nbsp;

of connections to nearby neurons. So, like a chip&nbsp;&nbsp; away, you should have some amount of connections&nbsp; and then, like many, many chips away, you should&nbsp;&nbsp; have a smaller number of connections where you&nbsp; send over a very limited kind of bottlenecky&nbsp;&nbsp;

thing: the most important things that this part&nbsp; of the model is learning for other parts of the&nbsp;&nbsp; model to make use of. And even across multiple TPU&nbsp; pods, you'd like to send even less information but&nbsp;&nbsp; the most salient kind of representations. And then&nbsp;

across metro areas, you'd like to send even less. &nbsp; Yeah, and then that emerges organically. Yeah, I'd like that to emerge organically. You&nbsp;&nbsp; could hand-specify these characteristics, but&nbsp;

I think you don't know exactly what the right&nbsp;&nbsp; proportions of these kinds of connections are so&nbsp; you should just let the hardware dictate things&nbsp;&nbsp; a little bit. Like if you're communicating over&nbsp; here and this data always shows up really early,&nbsp;&nbsp;

you should add some more connections, then it'll&nbsp; take longer and show up at just the right time. &nbsp; Oh here's another interesting implication: Right&nbsp; now, we think about the growth in AI use as a&nbsp;&nbsp;

sort of horizontal- so, suppose you're like,&nbsp; how many AI engineers will Google have working&nbsp;&nbsp; for it? You think about how many instances&nbsp; of Gemini 3 will be working at one time. &nbsp;

If you have this, whatever you want to call it,&nbsp; this blob, and it can sort of organically decide&nbsp;&nbsp; how much of itself to activate, then it's more&nbsp; of, if you want 10 engineers worth of output,&nbsp;&nbsp; it just activates a different pattern or a larger&nbsp;

pattern. If you want 100 engineers of output, it's&nbsp;&nbsp; not like calling more agents or more instances,&nbsp; it's just calling different sub-patterns. &nbsp; I think there's a notion of how much compute do&nbsp;

you want to spend on this particular inference,&nbsp;&nbsp; and that should vary by factors of 10,000 for&nbsp; really easy things and really hard things,&nbsp;&nbsp; maybe even a million. It might be iterative,&nbsp; you might make a pass through the model,&nbsp;&nbsp;

get some stuff, and then decide you now need&nbsp; to call on some other parts of the model. &nbsp; The other thing I would say is this sounds super&nbsp; complicated to deploy because it's this weird,&nbsp;&nbsp;

constantly evolving thing with maybe not super&nbsp; optimized ways of communicating between pieces,&nbsp;&nbsp; but you can always distill from that. If you say,&nbsp; "This is the kind of task I really care about, let&nbsp;&nbsp; me distill from this giant kind of organic thing&nbsp;

into something that I know can be served really&nbsp;&nbsp; efficiently," you could do that distillation&nbsp; process whenever you want, once a day, once an&nbsp;&nbsp; hour. That seems like it'd be kind of good. Yeah, we need better distillation.

&nbsp; Yeah. Anyone out there who invents amazing distillation&nbsp;&nbsp; techniques that instantly distill from a giant&nbsp; blob onto your phone, that would be wonderful.

&nbsp; How would you characterize what's missing&nbsp; from current distillation techniques? &nbsp; Well, I just want it to work faster.

A related thing is I feel like we&nbsp;&nbsp; need interesting learning techniques during&nbsp; pre-training. I'm not sure we're extracting&nbsp;&nbsp; the maximal value from every token we look at&nbsp; with the current training objective. Maybe we&nbsp;&nbsp;

should think a lot harder about some tokens. When you get to "the answer is," maybe the&nbsp;&nbsp; model should, at training time, do a lot&nbsp; more work than when it gets to "the". &nbsp;

Right. There's got to be some way&nbsp; to get more from the same data,&nbsp;&nbsp; make it learn it forwards and backwards. And every which way. Hide some stuff this way,&nbsp;&nbsp; hide some stuff that way, make it infer from&nbsp;

partial information. I think people have been&nbsp;&nbsp; doing this in vision models for a while. You&nbsp; distort the model or you hide parts of it and&nbsp;&nbsp; try to make it guess the bird from half, like&nbsp; that it's a bird from this upper corner of the&nbsp;&nbsp;

image or the lower left corner of the image. That makes the task harder, and I feel like&nbsp;&nbsp; there's an analog for more textual or&nbsp; coding-related data where you want to&nbsp;&nbsp; force the model to work harder. You'll get&nbsp;

more interesting observations from it. &nbsp; Yeah, the image people didn't have enough labeled&nbsp; data so they had to invent all this stuff. &nbsp;

And they invented -- I mean, dropout was invented&nbsp; on images, but we're not really using it for text&nbsp;&nbsp; mostly. That's one way you could get a lot&nbsp; more learning in a more large-scale model&nbsp;&nbsp; without overfitting is just make like 100 epochs&nbsp;

over the world's text data and use dropout. &nbsp; But that's pretty computationally expensive,&nbsp; but it does mean we won't run it. Even though&nbsp;&nbsp; people are saying, "Oh no, we're almost out&nbsp;

of textual data," I don't really believe that&nbsp;&nbsp; because I think we can get a lot more capable&nbsp; models out of the text data that does exist. &nbsp; I mean, a person has seen a billion tokens.

Yeah, and they're pretty good at a lot of stuff. &nbsp; So obviously human data efficiency&nbsp; sets a lower bound on how, or I guess,&nbsp;&nbsp; upper bound, one of them, maybe not.

It's an interesting data point. &nbsp; Yes. So there's a sort of modus&nbsp; ponens, modus tollens thing here.&nbsp;&nbsp; One way to look at it is, look, LLMs have so&nbsp;

much further to go, therefore we project orders&nbsp;&nbsp; of magnitude improvement in sample efficiency&nbsp; just if they could match humans. Another is,&nbsp;&nbsp; maybe they're doing something clearly different&nbsp; given the orders of magnitude difference. What's&nbsp;&nbsp;

your intuition of what it would take to make&nbsp; these models as sample efficient as humans are? &nbsp; Yeah, I think we should consider changing the&nbsp; training objective a little bit. Just predicting&nbsp;&nbsp;

the next token from the previous ones you've seen&nbsp; seems like not how people learn. It's a little bit&nbsp;&nbsp; related to how people learn, I think, but not&nbsp; entirely. A person might read a whole chapter&nbsp;&nbsp; of a book and then try to answer questions at&nbsp;

the back, and that's a different kind of thing. &nbsp; I also think we're not learning from visual&nbsp; data very much. We're training a little bit on&nbsp;&nbsp; video data, but we're definitely not anywhere&nbsp;

close to thinking about training on all the&nbsp;&nbsp; visual inputs you could get. So you have visual&nbsp; data that we haven't really begun to train on. &nbsp; Then I think we could extract a lot more&nbsp;

information from every bit of data we do see.&nbsp;&nbsp; I think one of the ways people are so sample&nbsp; efficient is they explore the world and take&nbsp;&nbsp; actions in the world and observe what happens. You&nbsp; see it with very small infants picking things up&nbsp;&nbsp;

and dropping them; they learn about gravity&nbsp; from that. And that's a much harder thing to&nbsp;&nbsp; learn when you're not initiating the action. I think having a model that can take actions as&nbsp;&nbsp; part of its learning process would be just&nbsp;

a lot better than just sort of passively&nbsp;&nbsp; observing a giant dataset. Is Gato the future, then? &nbsp; Something where the model can observe&nbsp;

and take actions and observe the&nbsp;&nbsp; corresponding results seems pretty useful. I mean, people can learn a lot from thought&nbsp;&nbsp; experiments that don't even involve extra input.&nbsp; Einstein learned a lot of stuff from thought&nbsp;&nbsp;

experiments, or like Newton went into quarantine&nbsp; and got an apple dropped on his head or something&nbsp;&nbsp; and invented gravity. And like mathematicians&nbsp; -- math didn't have any extra input. &nbsp;

Chess, okay, you have the thing play chess&nbsp; against itself and it gets good at chess. That&nbsp;&nbsp; was DeepMind, but also all it needs is the rules&nbsp; of chess. So there's actually probably a lot of&nbsp;&nbsp; learning that you can do even without external&nbsp;

data, and then you can make it in exactly the&nbsp;&nbsp; fields that you care about. Of course, there&nbsp; is learning that will require external data,&nbsp;&nbsp; but maybe we can just have this thing&nbsp; talk to itself and make itself smarter.

&nbsp; So here's the question I have. What you've just&nbsp; laid out over the last hour is potentially just&nbsp;&nbsp; like the big next paradigm shift in AI.&nbsp; That's a tremendously valuable insight,&nbsp;&nbsp;

potentially. Noam, in 2017 you released&nbsp; the Transformer paper on which tens,&nbsp;&nbsp; if not hundreds, of billions of dollars of&nbsp; market value is based in other companies,&nbsp;&nbsp; not to mention all this other research&nbsp;

that Google has released over time,&nbsp;&nbsp; which you've been relatively generous with. In retrospect, when you think about divulging&nbsp;&nbsp; this information that has been helpful to&nbsp; your competitors, in retrospect is it like,&nbsp;&nbsp;

"Yeah, we'd still do it," or would you&nbsp; be like, "Ah, we didn't realize how big&nbsp;&nbsp; a deal Transformer was. We should have kept&nbsp; it indoors." How do you think about that? &nbsp;

It's a good question because I think probably&nbsp; we did need to see the size of the opportunity,&nbsp;&nbsp; often reflected in what other companies&nbsp; are doing. And also it's not a fixed pie.&nbsp;&nbsp; The current state of the world is pretty&nbsp;

much as far from fixed pie as you can get. &nbsp; I think we're going to see orders of magnitude of&nbsp; improvements in GDP, health, wealth, and anything&nbsp;&nbsp; else you can think of. So I think it's definitely&nbsp;

been nice that Transformer has got around. &nbsp; It’s transformative. Woo. Thank God Google's&nbsp;&nbsp; doing well as well. So these days we do&nbsp;

publish a little less of what we're doing. &nbsp; There's always this trade-off: should we publish&nbsp; exactly what we're doing right away? Should we put&nbsp;&nbsp; it in the next stages of research and then roll it&nbsp;

out into production Gemini models and not publish&nbsp;&nbsp; it at all? Or is there some intermediate point? And for example, in our computational photography&nbsp;&nbsp; work in Pixel cameras, we've often taken the&nbsp; decision to develop interesting new techniques,&nbsp;&nbsp;

like the ability to do super good night sight&nbsp; vision for low-light situations or whatever,&nbsp;&nbsp; put that into the product and then published a&nbsp; real research paper about the system that does&nbsp;&nbsp; that after the product is released.

Different techniques and developments&nbsp;&nbsp; have different treatments. Some things we think&nbsp; are super critical we might not publish. Some&nbsp;&nbsp; things we think are really interesting&nbsp; but important for improving our products;&nbsp;&nbsp;

we'll get them out into our products and then&nbsp; make a decision: did we publish this or do&nbsp;&nbsp; we give kind of a lightweight discussion&nbsp; of it, but maybe not every last detail? &nbsp;

Other things I think we publish openly and try&nbsp; to advance the field and the community because&nbsp;&nbsp; that's how we all benefit from participating.&nbsp; I think it's great to go to conferences like&nbsp;&nbsp; NeurIPS last week with 15,000 people all sharing&nbsp;

lots and lots of great ideas. We publish a lot&nbsp;&nbsp; of papers there as we have in the past, and&nbsp; see the field advance is super exciting. &nbsp; How would you account for... so obviously Google&nbsp;

had all these insights internally rather early on,&nbsp;&nbsp; including the top researchers. And now Gemini 2 is&nbsp; out. We didn't get a chance much to talk about it,&nbsp;&nbsp; but people know it's a really great model. Such a good model. As we say around the&nbsp;&nbsp;

micro-kitchen, “such a good&nbsp; model, such a good model”. &nbsp; So it's top in LMSYS Chatbot Arena. And so now&nbsp; Google's on top. But how would you account for&nbsp;&nbsp;

basically coming up with all the great insights&nbsp; for a couple of years? Other competitors had&nbsp;&nbsp; models that were better for a while despite that. We've been working on language models for a long&nbsp;&nbsp; time. Noam's early work on spelling correction in&nbsp;

2001, the work on translation, very large-scale&nbsp;&nbsp; language models in 2007, and seq2seq and word2vec&nbsp; and more recent Transformers and then BERT. &nbsp; Things like the internal Meena system that was&nbsp;

actually a chatbot-based system designed to kind&nbsp;&nbsp; of engage people in interesting conversations.&nbsp; We actually had an internal chatbot system that&nbsp;&nbsp; Googlers could play with even before ChatGPT&nbsp; came out. And actually, during the pandemic,&nbsp;&nbsp;

a lot of Googlers would enjoy spending,&nbsp; you know, everyone was locked down at home,&nbsp;&nbsp; and so they enjoyed spending time chatting&nbsp; with Meena during lunch because it was&nbsp;&nbsp; like a nice, you know, lunch partner.

I think one of the things we were a little,&nbsp;&nbsp; our view of things from a search perspective&nbsp; was these models hallucinate a lot,&nbsp;&nbsp; they don't get things right a lot of the time- or&nbsp; some of the time- and that means that they aren't&nbsp;&nbsp;

as useful as they could be and so we’d like to&nbsp; make that better. From a search perspective,&nbsp;&nbsp; you want to get the right answer 100% of the&nbsp; time, ideally and be very high on factuality.&nbsp;&nbsp; These models were not near that bar.

I think what we were a little unsure&nbsp;&nbsp; about is that they were incredibly useful. Oh&nbsp; and they also had all kinds of safety issues,&nbsp;&nbsp; like they might say offensive things and we had to&nbsp; work on that aspect and get that to a point where&nbsp;&nbsp;

we were comfortable releasing the model. But I&nbsp; think what we didn’t quite appreciate was how&nbsp;&nbsp; useful they could be for things you wouldn't ask&nbsp; a search engine, right? Like, help me write a note&nbsp;&nbsp; to my veterinarian, or like, can you take this&nbsp;

text and give me a quick summary of it? I think&nbsp;&nbsp; that's the kind of thing we've seen people really&nbsp; flock to in terms of using chatbots as amazing new&nbsp;&nbsp; capabilities rather than as a pure search engine. So I think we took our time and got to the point&nbsp;&nbsp;

where we actually released quite capable chatbots&nbsp; and have been improving them through Gemini models&nbsp;&nbsp; quite a bit. I think that's actually not&nbsp; a bad path to have taken. Would we like&nbsp;&nbsp; to have released the chatbot earlier? Maybe.&nbsp;

But I think we have a pretty awesome chatbot&nbsp;&nbsp; with awesome Gemini models that are getting&nbsp; better all the time. And that's pretty cool. &nbsp; So we've discussed some of the things you guys&nbsp;

have worked on over the last 25 years, and there&nbsp;&nbsp; are so many different fields, right? You start off&nbsp; with search and indexing to distributed systems,&nbsp;&nbsp; to hardware, to AI algorithms. And genuinely,&nbsp; there are a thousand more, just go on either of&nbsp;&nbsp;

their Google Scholar pages or something. What&nbsp; is the trick to having this level of, not only&nbsp;&nbsp; career longevity where you're having many decades&nbsp; of making breakthroughs, but also the breadth of&nbsp;&nbsp; different fields, both of you, in either order,&nbsp;

what’s the trick to career longevity and breadth? &nbsp; One thing that I like to do is to find out about a&nbsp; new and interesting area, and one of the best ways&nbsp;&nbsp; to do that is to pay attention to what's going&nbsp;

on, talk to colleagues, pay attention to research&nbsp;&nbsp; papers that are being published, and look at the&nbsp; kind of research landscape as it's evolving. &nbsp; Be willing to say, "Oh, chip design. I wonder&nbsp;

if we could use reinforcement learning for some&nbsp;&nbsp; aspect of that." Be able to dive into a new area,&nbsp; work with people who know a lot about a different&nbsp;&nbsp; domain or AI for healthcare or something.&nbsp; I've done a bit of working with clinicians&nbsp;&nbsp;

about what are the real problems, how could AI&nbsp; help? It wouldn't be that useful for this thing,&nbsp;&nbsp; but it would be super useful for this. Getting those insights, and often working&nbsp;&nbsp; with a set of five or six colleagues who have&nbsp;

different expertise than you do. It enables you to&nbsp;&nbsp; collectively do something that none of you could&nbsp; do individually. Then some of their expertise&nbsp;&nbsp; rubs off on you and some of your expertise rubs&nbsp; off on them, and now you have this bigger set of&nbsp;&nbsp;

tools in your tool belt as an engineering&nbsp; researcher to go tackle the next thing. &nbsp; I think that's one of the beauties of&nbsp; continuing to learn on the job. It's&nbsp;&nbsp;

something I treasure. I really enjoy diving&nbsp; into new things and seeing what we can do. &nbsp; I'd say probably a big thing is humility, like&nbsp; I’d say I’m the most humble. But seriously,&nbsp;&nbsp;

to say what I just did is nothing compared to what&nbsp; I can do or what can be done. And to be able to&nbsp;&nbsp; drop an idea as soon as you see something better,&nbsp; like you or somebody with some better idea,&nbsp;&nbsp; and you see how maybe what you're thinking&nbsp;

about, what they're thinking about or something&nbsp;&nbsp; totally different can conceivably work better. I think there is a drive in some sense to say,&nbsp;&nbsp; "Hey, the thing I just invented is awesome, give&nbsp; me more chips." Particularly if there's a lot of&nbsp;&nbsp;

top-down resource assignment. But I think we also&nbsp; need to incentivize people to say, "Hey, this&nbsp;&nbsp; thing I am doing is not working at all. Let me&nbsp; just drop it completely and try something else." &nbsp;

Which I think Google Brain did quite well.&nbsp; We had the very kind of bottoms-up UBI kind&nbsp;&nbsp; of chip allocation. You had a UBI? &nbsp;

Yeah, it was like basically everyone&nbsp; had one credit and you could pool them. &nbsp; Gemini has been mostly top-down, which&nbsp; has been very good in some sense because&nbsp;&nbsp;

it has led to a lot more collaboration and&nbsp; people working together. You less often have&nbsp;&nbsp; five groups of people all building the same&nbsp; thing or building interchangeable things. &nbsp;

But on the other hand, it does lead to some&nbsp; incentive to say, "Hey, what I'm doing is working&nbsp;&nbsp; great." And then, as a lead, you hear hundreds&nbsp; of groups, and everything is, "So you should give&nbsp;&nbsp; them more chips." There's less of an incentive to&nbsp;

say, "Hey, what I'm doing is not actually working&nbsp;&nbsp; that well. Let me try something different." So I think going forward, we're going to have&nbsp;&nbsp; some amount of top-down, some amount of bottom-up,&nbsp; so as to incentivize both of these behaviors:&nbsp;&nbsp;

collaboration and flexibility. I think both&nbsp; those things lead to a lot of innovation. &nbsp; I think it's also good to articulate&nbsp; interesting directions you think we should go.&nbsp;&nbsp;

I have an internal slide deck called "Go,&nbsp; Jeff, Wacky Ideas." I think those are a&nbsp;&nbsp; little bit more product-oriented things,&nbsp; like, "Hey, I think now that we have these&nbsp;&nbsp; capabilities, we could do these 17 things."

I think that's a good thing because sometimes&nbsp;&nbsp; people get excited about that and want to start&nbsp; working with you on one or more of them. And I&nbsp;&nbsp; think that's a good way to bootstrap where we&nbsp; should go without necessarily ordering people,&nbsp;&nbsp;

"We must go here." Alright, this was great. &nbsp; Yeah. Thank you, guys.

&nbsp; Appreciate you taking the time, it was&nbsp; great chatting. That was awesome.

<!-- YOUTUBE_TRANSCRIPT_END -->
