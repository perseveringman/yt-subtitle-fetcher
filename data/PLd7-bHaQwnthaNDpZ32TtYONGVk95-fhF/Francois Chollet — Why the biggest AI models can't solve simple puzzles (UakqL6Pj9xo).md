---
archive_version: 2
source: "youtube"
source_type: "playlist"
video_id: "UakqL6Pj9xo"
title: "Francois Chollet — Why the biggest AI models can't solve simple puzzles"
video_url: "https://www.youtube.com/watch?v=UakqL6Pj9xo"
channel_name: "Dwarkesh Patel"
channel_id: "UCXl4i9dYBrFOabk0xGmbkRA"
uploader_id: "@DwarkeshPatel"
published_at: "2024-06-11T17:06:52.000Z"
upload_date: "2024-06-11"
duration_seconds: 5679
duration_human: "1:34:39"
view_count: 182183
like_count: 4188
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-18T14:02:08.749Z"
---

# Francois Chollet — Why the biggest AI models can't solve simple puzzles

## Video Summary
- source_type: playlist
- video_url: https://www.youtube.com/watch?v=UakqL6Pj9xo
- video_id: UakqL6Pj9xo
- channel_name: Dwarkesh Patel
- channel_id: UCXl4i9dYBrFOabk0xGmbkRA
- uploader_id: @DwarkeshPatel
- uploader_url: https://www.youtube.com/@DwarkeshPatel
- published_at: 2024-06-11T17:06:52.000Z
- upload_date: 2024-06-11
- duration: 1:34:39
- view_count: 182183
- like_count: 4188
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Here is my conversation with Francois Chollet and Mike Knoop on the $1 million ARC-AGI Prize they're launching today. I did a bunch of socratic grilling throughout, but Francois’s arguments about why LLMs won’t lead to AGI are very interesting and worth thinking through. It was really fun discussing/debating the cruxes. Enjoy! 

Check out ARC-AGI Prize here: https://arcprize.org

𝐄𝐏𝐈𝐒𝐎𝐃𝐄 𝐋𝐈𝐍𝐊𝐒
* Transcript: https://www.dwarkeshpatel.com/p/francois-chollet
* Apple Podcasts: https://podcasts.apple.com/us/podcast/francois-chollet-mike-knoop-llms-wont-lead-to-agi-%241/id1516093381?i=1000658672649 
* Spotify: https://open.spotify.com/episode/7bmeJQOvXGy4LYl6YoiYYP?si=obUSUEwjSA6tkB8EBcb18w
* Follow me on Twitter:  https://x.com/dwarkesh_sp

𝐓𝐈𝐌𝐄𝐒𝐓𝐀𝐌𝐏𝐒
00:00:00 – The ARC benchmark
00:11:53 – Why LLMs struggle with ARC
00:19:43 – Skill vs intelligence
00:28:38 – Do we need “AGI” to automate most jobs?
00:49:11 – Future of AI progress: deep learning + program synthesis
01:01:23 – How Mike Knoop got nerd-sniped by ARC
01:09:20 – Million $ ARC Prize
01:11:16 – Resisting benchmark saturation
01:18:51 – ARC scores on frontier vs open source models
01:27:02 – Possible solutions to ARC Prize

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

LLms are very good at memorizing static programs If you scale up the size of your database,&nbsp;&nbsp; you are not increasing the&nbsp; intelligence of the system one bit.&nbsp; I feel like you're using words like&nbsp;

memorization that we would never&nbsp;&nbsp; use for human children. If they&nbsp; could solve any arbitrary algebra&nbsp;&nbsp; problem they wouldn’t say they memorized&nbsp; algebra, you’d say they learned algebra.&nbsp;

So I’ve got a million dollar prize pool&nbsp; and there’s a 500,000 for the first team&nbsp;&nbsp; to get to the 85% benchmark. If ARC survives&nbsp; 3 months from here, we’ll up the prize. OpenAI basically set back progress to&nbsp;

AGI by five to ten years. They caused&nbsp;&nbsp; this complete closing down of frontier&nbsp; research publishing and now LLMs have&nbsp;&nbsp; essentially sucked the oxagen out of&nbsp; the room, like everyone is doing LLMs.

Today I have the pleasure to speak with&nbsp; François Chollet, who is an AI researcher&nbsp;&nbsp; at Google and creator of Keras. He’s launching&nbsp; a prize in collaboration with Mike Knoop,&nbsp;&nbsp; the co-founder of Zapier, whom we’ll also be&nbsp;

talking to in a second. It’s a million dollar&nbsp;&nbsp; prize to solve the ARC benchmark that he created. First question, what is the ARC benchmark? Why do&nbsp;&nbsp; you even need this prize? Why won’t the biggest&nbsp; LLM we have in a year be able to just saturate it?&nbsp;

ARC is intended as a kind of IQ test for&nbsp; machine intelligence. What makes it different&nbsp;&nbsp; from most LLM benchmarks out there is that it’s&nbsp; designed to be resistant to memorization. The&nbsp;&nbsp; way LLMs work is that they’re basically this&nbsp;

big interpolative memory. The way you scale up&nbsp;&nbsp; their capabilities is by trying to cram as much&nbsp; knowledge and patterns as possible into them.&nbsp; By contrast, ARC does not require a lot&nbsp; of knowledge at all. It’s designed to only&nbsp;&nbsp;

require what’s known as core knowledge. It’s basic&nbsp; knowledge about things like elementary physics,&nbsp;&nbsp; objectness, counting, that sort of&nbsp; thing. It’s the sort of knowledge that&nbsp;&nbsp; any four-year-old or five-year-old possesses.

What’s interesting is that each puzzle in ARC&nbsp;&nbsp; is novel. It’s something that you’ve probably&nbsp; not encountered before, even if you’ve memorized&nbsp;&nbsp; the entire internet. That’s what makes&nbsp; ARC challenging for LLMs. So far, LLMs&nbsp;&nbsp;

have not been doing very well on it. In fact, the&nbsp; approaches that are working well are more towards&nbsp;&nbsp; discrete program search, program synthesis. First of all, I’ll make a comment that I’m&nbsp;&nbsp; glad that as a skeptic of LLM, you&nbsp;

have yourself put out a benchmark.&nbsp;&nbsp; Is it accurate to say that if the biggest model&nbsp; we have in a year is able to get 80% on this,&nbsp;&nbsp; then your view would be that we are on track to&nbsp; get AGI with LLMs? How would you think about that?&nbsp;

I’m pretty skeptical that we’re going to&nbsp; see an LLM do 80% in a year. That said,&nbsp;&nbsp; if we do see it, you would also have to look&nbsp; at how this was achieved. If you just train&nbsp;&nbsp; the model on millions or billions of puzzles&nbsp;

similar to ARC, you’re relying on the ability&nbsp;&nbsp; to have some overlap between the tasks that you&nbsp; train on and the tasks that you’re going to see&nbsp;&nbsp; at test time. You’re still using memorization. Maybe it can work. Hopefully, ARC is going to be&nbsp;&nbsp;

good enough that it’s going to be resistant&nbsp; to this sort of brute force attempt but you&nbsp;&nbsp; never know. Maybe it could happen. I’m&nbsp; not saying it’s not going to happen.&nbsp;&nbsp; ARC is not a perfect benchmark. Maybe it has&nbsp;

flaws. Maybe it could be hacked in that way.&nbsp; What would GPT-5 have to do so that you would&nbsp; be very confident that it’s on the path to AGI?&nbsp; This is what would make me change my mind about&nbsp; LLMs. I would need to start seeing a critical mass&nbsp;&nbsp;

of cases where you show the model something&nbsp; it has not seen before — a task that's truly&nbsp;&nbsp; novel from the perspective of its training&nbsp; data — and it can actually adapt on the fly.&nbsp; This is true for LLMs but really this would catch&nbsp;

my attention for any AI technique out there. If&nbsp;&nbsp; I can see the ability to adapt to novelty on&nbsp; the fly and pick up new skills efficiently,&nbsp;&nbsp; then I would be extremely interested. I&nbsp; would think this is on the path to AGI.&nbsp;

The advantage they have is that they do get to&nbsp; see everything. Maybe I'll take issue with how&nbsp;&nbsp; much they are relying on that, but obviously&nbsp; they're relying on that more than humans do.&nbsp;&nbsp; They do have so much in distribution, to the&nbsp;

extent that we have trouble distinguishing&nbsp;&nbsp; whether an example is in distribution or not. If they have everything in distribution,&nbsp;&nbsp; then they can do everything that we can&nbsp; do. Maybe it's not in distribution for&nbsp;&nbsp;

us. Why is it so crucial that it has to be out of&nbsp; distribution for them? Why can't we just leverage&nbsp;&nbsp; the fact that they do get to see everything? Basically you’re asking what's the difference&nbsp;&nbsp; between actual intelligence — the ability&nbsp;

to adapt to things you've not been prepared&nbsp;&nbsp; for — and pure memorization, like&nbsp; reciting what you've seen before.&nbsp; It's not just some semantic difference. The big&nbsp; difference is that you can never pre-train on&nbsp;&nbsp;

everything that you might see at test time because&nbsp; the world changes all the time. It's not just the&nbsp;&nbsp; fact that the space of possible tasks is infinite.&nbsp; If you're trained on millions of them, you've only&nbsp;&nbsp; seen zero percent of the total space. It's also&nbsp;

the fact that the world is changing every day.&nbsp; This is why we, the human species, have developed&nbsp; intelligence in the first place. If there was&nbsp;&nbsp; such a thing as a distribution for the world&nbsp; — for the universe, for our lives — then we&nbsp;&nbsp;

would not need intelligence at all. In fact,&nbsp; many creatures, many insects for instance,&nbsp;&nbsp; do not have intelligence. Instead they have&nbsp; hardcoded programs in their connectomes,&nbsp;&nbsp; in their genes, behavioral programs that&nbsp;

map some stimuli to appropriate responses.&nbsp;&nbsp; They can actually navigate their lives and their&nbsp; environment in a way that's very evolutionarily&nbsp;&nbsp; fit without needing to learn anything. If our environment were static and predictable&nbsp;&nbsp;

enough, what would have happened is that evolution&nbsp; would have found the perfect behavioral program:&nbsp;&nbsp; a hard-coded, static behavioral program. It&nbsp; would have written it into our genes. We would&nbsp;&nbsp; have a hard-coded brain connectome. That's what we&nbsp;

would be running on. But that's not what happened.&nbsp; Instead, we have general intelligence. We are&nbsp; born with extremely little knowledge about the&nbsp;&nbsp; world. We are born with the ability to learn&nbsp; very efficiently and to adapt in the face of&nbsp;&nbsp;

things that we've never seen before. That's&nbsp; what makes us unique. That's what is really,&nbsp;&nbsp; really challenging to recreate in machines. Before we dive deeper into that, I'm going&nbsp;&nbsp; to overlay some examples of what an ARC-like&nbsp;

challenge looks like for the YouTube audience.&nbsp;&nbsp; For people listening on audio, can you describe&nbsp; what a sample ARC challenge would look like?&nbsp; One ARC puzzle looks kind of like an IQ test&nbsp; puzzle. You have a number of demonstration&nbsp;&nbsp;

input-output pairs. One pair is made up&nbsp; of two grids. One grid shows you an input,&nbsp;&nbsp; and the second grid shows you what you&nbsp; should produce as a response to that input.&nbsp; You get a couple pairs like this to demonstrate&nbsp;

the nature of the task and what you're supposed&nbsp;&nbsp; to do with your inputs. You then get a&nbsp; new test input. Your job is to produce&nbsp;&nbsp; the corresponding test output. You look at the&nbsp; demonstration pairs and from that you figure&nbsp;&nbsp;

out what you're supposed to do. You show that&nbsp; you've understood it on this new test pair.&nbsp; Importantly, the knowledge basis you need&nbsp; to approach these challenges is just core&nbsp;&nbsp; knowledge. It includes basic concepts like&nbsp;

what makes an object, counting, geometry,&nbsp;&nbsp; topology, symmetries, etc. It's extremely&nbsp; basic knowledge. LLMs for sure possess such&nbsp;&nbsp; knowledge. Any child possesses such knowledge. What's really interesting is that each puzzle is&nbsp;&nbsp;

new. It's not something you'll find elsewhere on&nbsp; the internet. Whether you're a human or a machine,&nbsp;&nbsp; you have to approach every puzzle from&nbsp; scratch and reason your way through it.&nbsp;&nbsp; You can't just fetch the response from memory.

One contention here is that we are only now&nbsp;&nbsp; getting multimodal models that are trained to do&nbsp; spatial reasoning due to the data they're trained&nbsp;&nbsp; on. Whereas not only humans but our ancestors&nbsp; have had to learn over billions of years of&nbsp;&nbsp;

evolution how to understand abstract physical and&nbsp; spatial properties and recognize patterns there.&nbsp; One view is that in the next&nbsp; year, as we gain models that&nbsp;&nbsp; are natively multimodal capability rather than&nbsp;

as an add-on, they will understand these kinds&nbsp;&nbsp; of patterns because that's something we 'd see&nbsp; natively. Right now, ARC sees a JSON string of&nbsp;&nbsp; 100100 and is supposed to recognize a pattern&nbsp; there. Even if you showed a human a sequence&nbsp;&nbsp;

of these numbers, they would have a challenge&nbsp; making sense of the question you're asking.&nbsp; Why wouldn't multimodal models, which we're on the&nbsp; path to unlocking right now, be so much better at&nbsp;&nbsp; ARC-type spatial reasoning as soon as we get them?

That's an empirical question. I guess we'll see&nbsp;&nbsp; the answer within a few months. My response&nbsp; is that our grids are just discrete 2D grids&nbsp;&nbsp; of symbols and are pretty small. If you flatten an&nbsp; image as a sequence of pixels for example, you get&nbsp;&nbsp;

something that’s actually very difficult to parse. That’s not true for ARC because the grids are very&nbsp;&nbsp; small. You only have 10 possible symbols,&nbsp; They are 2D grids that are actually very&nbsp;&nbsp; easy to flatten as sequences. Transformers,&nbsp;

LLMs, are very good at processing sequences.&nbsp; In fact, you can show that LLMs do fine&nbsp; with processing ARC-like data by simply&nbsp;&nbsp; fine-tuning an LLM on subsets of the tasks&nbsp; and then testing it on small variations of&nbsp;&nbsp;

these tasks. You'll see that the LLM can encode&nbsp; solution programs just fine for tasks it has&nbsp;&nbsp; seen before. It doesn't really have a problem&nbsp; parsing the input or figuring out the program.&nbsp; The reason LLMs don't do well on ARC is&nbsp;

really just the unfamiliarity aspect. Each&nbsp;&nbsp; new task is different from every other task.&nbsp; You cannot memorize the solution programs in&nbsp;&nbsp; advance. You have to synthesize a new solution&nbsp; program on the fly for each new task. That's&nbsp;&nbsp;

really what LLMs are struggling with. Before I play more devil's advocate,&nbsp;&nbsp; I just want to step back and explain why I'm&nbsp; especially interested in having this conversation.&nbsp;&nbsp; Obviously there’s the million dollar ARC Prize&nbsp;

and I’m excited to play around with it myself.&nbsp; The Vesuvius Challenge was Nat Friedman's prize&nbsp; for decoding scrolls from the Herculaneum library&nbsp;&nbsp; that were buried in the volcano. The winner&nbsp; of that was a 22-year-old who was listening&nbsp;&nbsp;

to this podcast, Luke Farritor. Hopefully&nbsp; somebody listening to this will find this&nbsp;&nbsp; challenge intriguing and find a solution. I've recently had on a lot of people who are&nbsp;&nbsp; bullish on LLMs. I've had discussions with&nbsp;

them before interviewing you about how we&nbsp;&nbsp; explain the fact that LLMs don't seem to&nbsp; be natively performing that well on ARC.&nbsp; I found their explanations somewhat contrived.&nbsp; I'll try out some of their reasons on you. It is&nbsp;&nbsp;

actually an intriguing fact that some of these&nbsp; problems are relatively straightforward for&nbsp;&nbsp; humans to understand, yet the models struggle&nbsp; with them if you just input them natively.&nbsp; All of them are very easy for humans. Any&nbsp;

smart human should be able to do 90-95%&nbsp;&nbsp; on ARC. Even a five-year-old with very, very&nbsp; little knowledge could definitely do over 50%.&nbsp; I agree that smart humans will do very&nbsp; well on this test, but the average&nbsp;&nbsp;

human will probably be mediocre. Not really, we actually tried&nbsp;&nbsp; with average humans. They scored about 85. That was with Amazon Mechanical Turk workers,&nbsp;&nbsp; right? I honestly don't know the demographic&nbsp;

profile of Amazon Mechanical Turk workers.&nbsp;&nbsp; Imagining them interacting with Amazon's&nbsp; remote work platform, I’m guessing that's&nbsp;&nbsp; not the median human across the planet. The broader point here is that we see the&nbsp;&nbsp;

spectrum in humans and humans obviously have&nbsp; AGI. But even within humans you see a spectrum&nbsp;&nbsp; where some people are relatively dumber.&nbsp; They'll perform worse on IQ-like tests.&nbsp; For example, there’s Raven's Progressive Matrices.&nbsp;

Look at how the average person performs on that.&nbsp;&nbsp; If you look at the kind of questions that are&nbsp; hit or miss — half of people will get it right,&nbsp;&nbsp; half of people will get it wrong — we&nbsp; might think they’re kind of trivial.&nbsp;

Humans have AGI but from relatively small&nbsp; tweaks, you can go from somebody who misses&nbsp;&nbsp; these kinds of basic IQ test questions to&nbsp; somebody who gets them all right. We'll&nbsp;&nbsp; talk about some of the previous performances&nbsp;

that people have tried with these models.&nbsp; Jack Cole with a 240 million parameter model&nbsp; got 35%. Doesn't that suggest that they're on&nbsp;&nbsp; this spectrum that clearly exists within humans,&nbsp; and they're going to be saturated pretty soon?&nbsp;

There's a bunch of interesting points here. There&nbsp; is indeed a branch of LLM approaches spearheaded&nbsp;&nbsp; by Jack Cole that are doing quite well. They are&nbsp; state-of-the art in fact.. But you have to look&nbsp;&nbsp; at what's going on there. There are two things.

The first thing is that to get these numbers,&nbsp;&nbsp; you need to pre-train your LLM on millions&nbsp; of generated ARC tasks. Of course,&nbsp;&nbsp; compare that to a five-year-old child&nbsp; looking at ARC for the first time. The&nbsp;&nbsp;

child has never done an IQ test before and has&nbsp; never seen something like an ARC test before.&nbsp; The only overlap between what they know&nbsp; and what they have to do in the test is&nbsp;&nbsp; core knowledge. It’s knowing about counting,&nbsp;

objects, symmetries, etc. They're still going&nbsp;&nbsp; to do really well. They're going to do much better&nbsp; than the LLM trained on millions of similar tasks.&nbsp; There’s a second thing to note about the Jack&nbsp; Cole approach. One thing that's really critical&nbsp;&nbsp;

to making the model work at all is test time&nbsp; fine-tuning. By the way, that's something&nbsp;&nbsp; that's really missing from LLM approaches right&nbsp; now. Most of the time when you're using an LLM,&nbsp;&nbsp; it's just doing static inference. The&nbsp;

model is frozen. You're just prompting&nbsp;&nbsp; it and getting an answer. The model is not&nbsp; actually learning anything on the fly. Its&nbsp;&nbsp; state is not adapting to the task at hand. What Jack Cole is actually doing is that for&nbsp;&nbsp;

every test problem, it’s on-the-fly fine-tuning&nbsp; a version of the LLM for that task. That's really&nbsp;&nbsp; what's unlocking performance. If you don't do&nbsp; that, you get like 1-2%, something completely&nbsp;&nbsp; negligible. If you do test time fine-tuning&nbsp;

and you add a bunch of tricks on top, then&nbsp;&nbsp; you end up with interesting performance numbers. What it's doing is trying to address one of the&nbsp;&nbsp; key limitations of LLMs today: the lack of&nbsp; active inference. It's actually adding active&nbsp;&nbsp;

inference to LLMs. That's working extremely&nbsp; well, actually. So that's fascinating to me.&nbsp; There are so many interesting rabbit holes&nbsp; there. A lot of the scale maximalists share your&nbsp;&nbsp; broader perspective that you need to&nbsp;

unlock the adaptive/test time compute.&nbsp;&nbsp; They think that in addition to scaling, you need&nbsp; things like adaptive compute or some sort of RL&nbsp;&nbsp; to get the System 2 working. Their perspective is&nbsp; that this is a relatively straightforward thing&nbsp;&nbsp;

that will be added atop the representations&nbsp; that a scaled up model has greater access to.&nbsp; It's not just a technical detail. It's not&nbsp; a straightforward thing. It is everything.&nbsp;&nbsp; It is the important part. The scale maximalists&nbsp;

refer to scaling laws, which are the empirical&nbsp;&nbsp; relationship that you can draw between how much&nbsp; compute you spend on training a model and the&nbsp;&nbsp; performance you're getting on benchmark. Of course the key question here is,&nbsp;&nbsp;

how do you measure performance? What is it&nbsp; that you're actually improving by adding more&nbsp;&nbsp; compute and more data? It's benchmark performance. The way you measure performance is not a technical&nbsp;&nbsp; detail. It's not an afterthought because it's&nbsp;

going to narrow down the set of questions that&nbsp;&nbsp; you're asking. Accordingly, it's going to narrow&nbsp; down the set of answers that you're looking for.&nbsp; If you look at the benchmarks we are using&nbsp; for LLMs, they are all memorization-based&nbsp;&nbsp;

benchmarks. Sometimes they are&nbsp; literally just knowledge-based,&nbsp;&nbsp; like a school test. Even if you look at the&nbsp; ones that are explicitly about reasoning,&nbsp;&nbsp; if you look closely you realize that&nbsp;

in order to solve them, it's enough to&nbsp;&nbsp; memorize a finite set of reasoning patterns. You&nbsp; just reapply them. They're like static programs.&nbsp; LLMs are very good at memorizing small static&nbsp; programs. They've got this sort of bank&nbsp;&nbsp;

of solution programs. When&nbsp; you give them a new puzzle,&nbsp;&nbsp; they can just fetch the appropriate program&nbsp; and apply it. It looks like reasoning but it's&nbsp;&nbsp; not really doing any sort of on-the-fly program&nbsp;

synthesis. All it's doing is program fetching.&nbsp; You can actually solve all these benchmarks&nbsp; with memorization. If you look at the models and&nbsp;&nbsp; what you're scaling up here, they are big&nbsp; parametric curves fitted to a data distribution.&nbsp;&nbsp;

They're basically these big interpolative&nbsp; databases, interpolative memories. Of course,&nbsp;&nbsp; if you scale up the size of your database&nbsp; and cram more knowledge and patterns into it,&nbsp;&nbsp; you are going to be increasing its performance&nbsp;

as measured by a memorization benchmark.&nbsp; That's kind of obvious. But as you're doing it,&nbsp; you are not increasing the intelligence of the&nbsp;&nbsp; system one bit. You are increasing the skill of&nbsp; the system. You are increasing its usefulness,&nbsp;&nbsp;

its scope of applicability, but not its&nbsp; intelligence because skill is not intelligence.&nbsp;&nbsp; That's the fundamental confusion that people run&nbsp; into. They're confusing skill and intelligence.&nbsp; There are a lot of fascinating things&nbsp;

to talk about here: skill, intelligence,&nbsp;&nbsp; interpolation. Let’s talk about the point that&nbsp; they’re fitting some manifold that maps the&nbsp;&nbsp; input data. A reductionist way to talk about the&nbsp; human brain is that it's just axons firing at each&nbsp;&nbsp;

other. But we don't care about the reductionist&nbsp; explanation. We care about what happens at the&nbsp;&nbsp; macroscopic level when these things combine. As far as interpolation goes, let's look at one&nbsp;&nbsp; of the benchmarks. There's a benchmark that&nbsp;

does grade school math. These are problems&nbsp;&nbsp; that a smart high schooler would be able to&nbsp; solve. It's called GSM8K. These models get 95%&nbsp;&nbsp; on it. Basically, they always nail it. Sure, that's a memorization benchmark.&nbsp;

Let's talk about what that means.&nbsp; Here's one question from that benchmark:&nbsp; "30 students are in a class. One-fifth of them&nbsp; are 12-year-olds, One-third are 13-year-olds,&nbsp;&nbsp; One-tenth are 11-year-olds. How many of&nbsp;

them are not 11, 12, or 13 years old?&nbsp; I agree this is not rocket science. You can&nbsp; write down on paper how you go through this&nbsp;&nbsp; problem. A smart high school kid should be able&nbsp; to solve it. About memorization, it still has to&nbsp;&nbsp;

reason through how to think about fractions, the&nbsp; context of the whole problem, and then combine&nbsp;&nbsp; different calculations to write the final answer. It depends on how you want to define reasoning.&nbsp;&nbsp; There are two definitions you can use. One is,&nbsp;

I have available a set of program templates.&nbsp;&nbsp; It’s the structure of the puzzle, which&nbsp; can also generate its solution. I'm going&nbsp;&nbsp; to identify the right template, which is in my&nbsp; memory, input the new values into the template,&nbsp;&nbsp;

run the program, and get the solution. You could&nbsp; say this is reasoning. I say, “yeah sure, okay.”&nbsp; Here’s another definition of reasoning.&nbsp; When you're faced with a puzzle and you&nbsp;&nbsp; don't already have a program in memory to solve&nbsp;

it, it’s the ability to synthesize on the fly&nbsp;&nbsp; a new program based on bits and pieces&nbsp; of existing programs that you have. You&nbsp;&nbsp; have to do on-the-fly program synthesis. That's&nbsp; actually dramatically harder than just fetching&nbsp;&nbsp;

the right memorized program and reapplying it. Maybe we are overestimating the extent to which&nbsp;&nbsp; humans are so sample efficient. They also&nbsp; need training in this way. They have to&nbsp;&nbsp; drill in these pathways of reasoning&nbsp;

through certain kinds of problems.&nbsp; Let's take math, for example. It's&nbsp; not like you can just show a baby&nbsp;&nbsp; the axioms of set theory and now they&nbsp; know math. When they're growing up,&nbsp;&nbsp;

you have to teach them years of pre-algebra.&nbsp; Then you have a year of teaching them drills&nbsp;&nbsp; and going through the same kind of problem in&nbsp; algebra, then geometry, pre-calculus, calculus.&nbsp; Isn't that like the same kind of thing? You can't&nbsp;

just see one example and now you have the program.&nbsp;&nbsp; You actually have to drill it. These models also&nbsp; had to drill it with a bunch of pre-training data.&nbsp; Sure. In order to do on-the-fly program synthesis,&nbsp; you actually need building blocks to work from.&nbsp;&nbsp;

Knowledge and memory are tremendously important&nbsp; in the process. I'm not saying it's memory&nbsp;&nbsp; vs. reasoning. In order to do&nbsp; effective reasoning, you need memory.&nbsp; But it sounds compatible with your story. Through&nbsp;

seeing a lot of different kinds of examples,&nbsp;&nbsp; these things can learn to reason within&nbsp; the context of those examples. We can&nbsp;&nbsp; also see it within bigger and bigger models. That was an example of a high school-level&nbsp;&nbsp;

math problem. Let's say a model that's&nbsp; smaller than GPT-3 couldn't do that at&nbsp;&nbsp; all. As these models get bigger, they seem to&nbsp; be able to pick up bigger and bigger patterns.&nbsp; It's not really a size issue. It's more&nbsp;

like a training data issue in this case.&nbsp; Well, bigger models can pick up these kinds of&nbsp; circuits. Smaller models apparently don't do a&nbsp;&nbsp; good job of doing that even if you were to train&nbsp; them on this kind of data. Doesn't that just&nbsp;&nbsp;

suggest that as you have bigger and bigger models,&nbsp; they can pick up bigger and bigger pathways or&nbsp;&nbsp; more general ways of reasoning? Absolutely.&nbsp; But then isn't that intelligence?

No, it's not. If you scale up your database and&nbsp;&nbsp; keep adding more knowledge and program templates&nbsp; to it, then sure it becomes more and more&nbsp;&nbsp; skillful. You can apply it to more and more tasks.&nbsp; But general intelligence is not task-specific&nbsp;&nbsp;

skill scaled up to many skills, because there&nbsp; is an infinite space of possible skills.&nbsp; General intelligence is the ability to approach&nbsp; any problem, any skill, and very quickly master&nbsp;&nbsp; it using very little data. This is what makes you&nbsp;

able to face anything you might ever encounter.&nbsp;&nbsp; This is the definition of generality. Generality&nbsp; is not specificity scaled up. It is the ability to&nbsp;&nbsp; apply your mind to anything at all, to arbitrary&nbsp; things. This fundamentally requires the ability&nbsp;&nbsp;

to adapt, to learn on the fly efficiently. My claim is that by doing pre-training on bigger&nbsp;&nbsp; and bigger models, you are gaining that capacity&nbsp; to generalize very efficiently. Let me give you an&nbsp;&nbsp; example. Your own company Google, in their paper&nbsp;

on Gemini 1.5, had this very interesting example.&nbsp;&nbsp; They would give the model, in context, the grammar&nbsp; book and the dictionary of a language that has&nbsp;&nbsp; fewer than 200 living speakers. It's not in the&nbsp; pre-training data. You just give it the dictionary&nbsp;&nbsp;

and it basically is able to speak this language&nbsp; and translate to it, including the complex and&nbsp;&nbsp; organic ways in which languages are structured. If you showed me a dictionary from English to&nbsp;&nbsp; Spanish, I'm not going to be able to pick up how&nbsp;

to structure sentences and how to say things in&nbsp;&nbsp; Spanish. Because of the representations that&nbsp; it has gained through this pre-training,&nbsp;&nbsp; it is able to now learn a new language&nbsp; extremely efficiently. Doesn't that show&nbsp;&nbsp;

that this kind of pre-training actually does&nbsp; increase your ability to learn new tasks?&nbsp; If you were right, LLMs would do really well on&nbsp; ARC puzzles because ARC puzzles are not complex.&nbsp;&nbsp; Each one of them requires very little knowledge.&nbsp;

Each one of them is very low on complexity.&nbsp;&nbsp; You don't need to think very hard about it.&nbsp; They're actually extremely obvious for human&nbsp; Even children can do them but LLMs cannot. Even&nbsp; LLMs that have 100,000x more knowledge than you&nbsp;&nbsp;

do still cannot. The only thing that makes ARC&nbsp; special is that it was designed with this intent&nbsp;&nbsp; to resist memorization. This is the only thing.&nbsp; This is the huge blocker for LLM performance.&nbsp; If you look at LLMs closely, it's pretty obvious&nbsp;

that they're not really synthesizing new programs&nbsp;&nbsp; on the fly to solve the task that they're faced&nbsp; with. They're very much reapplying things that&nbsp;&nbsp; they've stored in memory. For instance, one&nbsp; thing that's very striking is that LLMs can&nbsp;&nbsp;

solve a Caesar cipher, transposing letters to&nbsp; code a message. That’s a very complex algorithm,&nbsp;&nbsp; but it comes up quite a bit on the&nbsp; internet. They've basically memorized it.&nbsp; What's really interesting is that they can do it&nbsp;

for a transposition length of like three or five,&nbsp;&nbsp; because those are very common numbers in&nbsp; examples provided on the internet. If you&nbsp;&nbsp; try to do it with an arbitrary number like&nbsp; nine, it's going to fail. It does not encode&nbsp;&nbsp;

the generalized form of the algorithm, but only&nbsp; specific cases. It has memorized specific cases&nbsp;&nbsp; of the algorithm. If it could actually synthesize&nbsp; on the fly the solver algorithm, then the value&nbsp;&nbsp; of n would not matter at all, because it&nbsp;

does not increase the problem complexity.&nbsp; I think this is true of humans as well. Humans use memorization pattern matching all&nbsp;&nbsp; the time, of course, but humans are not limited to&nbsp; memorization pattern matching. They have this very&nbsp;&nbsp;

unique ability to adapt to new situations&nbsp; on the fly. This is exactly what enables&nbsp;&nbsp; you to navigate every new day in your life. There was some study that chess grandmasters&nbsp;&nbsp; will perform very well within&nbsp;

the context of the moves that—&nbsp; That’s an excellent example because&nbsp; chess, at the highest level, is all&nbsp;&nbsp; about memorization, chess memorization. What is your explanation for the original&nbsp;&nbsp;

question of why Gemini 1.5 was able,&nbsp; in context, to learn a language,&nbsp;&nbsp; including the complex grammar structure? Doesn't&nbsp; that show that they can pick up new knowledge?&nbsp; I would assume that it has simply&nbsp;

mined from its extremely extensive,&nbsp;&nbsp; unimaginably vast training data. It has&nbsp; mined the required template and then it's&nbsp;&nbsp; just reusing it. We know that LLMs have a very&nbsp; poor ability to synthesize new program templates&nbsp;&nbsp;

like this on the fly or even adapt existing&nbsp; ones. They're very much limited to fetching.&nbsp; Suppose there's a programmer at Google. They&nbsp; go into the office in the morning. At what&nbsp;&nbsp; point are they doing something that 100%&nbsp;

cannot be due to fetching some template?&nbsp; Suppose they were an LLM. What could they not&nbsp; do if they had only fetched some template from&nbsp;&nbsp; their program? At what point do they have to use&nbsp; this so-called extreme generalization capability?&nbsp;

Forget about Google software developers.&nbsp; For every human, every day of their lives&nbsp;&nbsp; is full of novel things that they've not been&nbsp; prepared for. You cannot navigate your life&nbsp;&nbsp; based on memorization alone. It's impossible.

It seems like you also agree they're not doing&nbsp;&nbsp; just “memorization.” It seems like you're saying&nbsp; they're less capable of generalization. I'm just&nbsp;&nbsp; curious about the kind of generalization they do. If you get into the office and you try to do this&nbsp;&nbsp;

kind of generalization, you're going to fail&nbsp; at your job. Let’s say you're a programmer.&nbsp;&nbsp; What is the first point when you try to do that&nbsp; kind of generalization, you would lose your job&nbsp;&nbsp; because you can't do the extreme generalization?

Take this situation, for instance. You've never&nbsp;&nbsp; been here in this room. Maybe you've been in&nbsp; this city a few times. There's a fair amount&nbsp;&nbsp; of novelty. You've never been interviewing me.&nbsp; There's a fair amount of novelty in every hour&nbsp;&nbsp;

of every day in your life. By and large, it’s&nbsp; in fact more novelty than any LLM could handle.&nbsp;&nbsp; If you just put an LLM in a robot, it could not be&nbsp; doing all the things that you've been doing today.&nbsp; Take self-driving cars, for instance. You take&nbsp;

a self-driving car operating in the Bay Area. Do&nbsp;&nbsp; you think you could just drop it in New York City&nbsp; or drop it in London, where people drive on the&nbsp;&nbsp; left? No, it's going to fail. Not only can it not&nbsp; generalize to a change in driving rules, but you&nbsp;&nbsp;

cannot even make it generalize to a new city. It&nbsp; needs to be trained on each specific environment.&nbsp; I agree that self-driving cars aren't AGI. But it's the same type of model. They're&nbsp;&nbsp; transformers as well. It's the same architecture.

I don’t know. Apes also have brains with&nbsp;&nbsp; neurons in them, but they're less&nbsp; intelligent because they're smaller.&nbsp; We can get into that. I still don't understand&nbsp; this concrete thing. We also need training.&nbsp;&nbsp;

That's why education exists. That's why we had to&nbsp; spend the first 18 years of our life doing drills.&nbsp; We have a memory, but we are not a memory.&nbsp; We are not limited to just a memory.&nbsp; I’m denying the premise that that's the only&nbsp;

thing these models are necessarily doing.&nbsp; Suppose you just subbed out a remote work&nbsp; with an LLM and they're a programmer. What&nbsp;&nbsp; is the first point at which you realize&nbsp; this is not a human, this is an LLM?&nbsp;

How about I just send them an&nbsp; ARC puzzle and see how they do?&nbsp; No, like part of their job. You have to deal with novelty all the time.&nbsp; Is there a world in which all the programmers&nbsp;

are replaced and we're still saying, "ah,&nbsp;&nbsp; but they're only doing memorization-laden&nbsp; programming tasks." In that world, are they&nbsp;&nbsp; still producing a trillion dollars&nbsp; worth of output in the form of code?&nbsp;

Software development is actually a pretty&nbsp; good example of a job where you're dealing&nbsp;&nbsp; with novelty all the time. If you're&nbsp; not, I'm not sure what you're doing.&nbsp; I personally use generative AI very little&nbsp;

in my software development job. Before LLMs,&nbsp;&nbsp; I was also using Stack Overflow very&nbsp; little. Some people maybe are just&nbsp;&nbsp; copy-pasting stuff from Stack Overflow, or&nbsp; nowadays copy-pasting stuff from an LLM.&nbsp;

Personally, I try to focus on problem-solving.&nbsp; The syntax is just a technical detail. What's&nbsp;&nbsp; really important is problem-solving. The&nbsp; essence of programming is engineering&nbsp;&nbsp; mental models and mental representations&nbsp;

of the problem you're trying to solve.&nbsp; We have many people who can interact with these&nbsp; systems themselves. You can go to ChatGPT and say,&nbsp;&nbsp; "here's a specification of the kind of&nbsp; program I want." They'll build it for you.&nbsp;

As long as there are many examples of this program&nbsp; on GitHub, Stack Overflow, and so on, sure they&nbsp;&nbsp; will fetch the program for you from their memory. But you can change arbitrary details. You can say,&nbsp;&nbsp; "I need it to work on this&nbsp;

different kind of server."&nbsp; If that were true, there would&nbsp; be no software engineers today.&nbsp; I agree we're not at a full AGI yet. These models&nbsp; have fewer than a trillion parameters. A human&nbsp;&nbsp;

brain has somewhere on the order of 10-30 trillion&nbsp; synapses. If you were just doing some naive math,&nbsp;&nbsp; you're at least 10x underparameterized. I&nbsp; agree we're not there yet, but I'm confused&nbsp;&nbsp; about why we're not on the spectrum.

Yes, I agree that there are many kinds of&nbsp;&nbsp; generalization they can't do. But it seems like&nbsp; they're on this kind of smooth spectrum that we&nbsp;&nbsp; see even within humans. Some humans would have&nbsp; a hard time doing an ARC-type test. We see that&nbsp;&nbsp;

based on the performance on Raven's&nbsp; progressive matrices-type IQ tests.&nbsp; I'm not a fan of IQ tests because, for&nbsp; the most part, you can train on IQ tests&nbsp;&nbsp; and get better at them. They're very much&nbsp;

memorization-based. This is actually the&nbsp;&nbsp; main pitfall that ARC tries not to fall for. Let’s say all remote jobs are automated in the&nbsp;&nbsp; next five years. I mean at least the remote jobs&nbsp; that don't require you to be a sort of a service,&nbsp;&nbsp;

like a salesperson, where you want the human&nbsp; to be talking. I mean more like programming.&nbsp; In that world, would you say that that's&nbsp; not possible because a programmer needs to&nbsp;&nbsp; do many things that definitely require things&nbsp;

that would not be in any pre-training corpus?&nbsp; Sure. In five years, there will be more software&nbsp; engineers than there are today, not fewer.&nbsp; I'm still not sure. I studied computer science.&nbsp; If I had become a code monkey out of college,&nbsp;&nbsp;

what would I be doing? I go to my job. My&nbsp; boss tells me to do something? When does&nbsp;&nbsp; he realize I'm an LLM, if I were an LLM? Probably on the first day. Again, if it&nbsp;&nbsp; were true that LLMs could generalize to novel&nbsp;

problems like this — actually develop software&nbsp;&nbsp; to solve a problem they've never seen before —&nbsp; you would not need software engineers anymore.&nbsp; If I look at how people are using LLMs&nbsp; in their software engineering job today,&nbsp;&nbsp;

they're using it as a Stack Overflow replacement.&nbsp; They're using it as a way to copy-paste code&nbsp;&nbsp; snippets to perform very common actions. What&nbsp; they actually need is a database of code snippets.&nbsp;&nbsp; They don't actually need any of the abilities&nbsp;

that actually make them software engineers.&nbsp; Let's step back on interpolation. Why&nbsp; isn't creativity just interpolation&nbsp;&nbsp; in a higher dimension where — if we're&nbsp; going to use the ML language — a bigger&nbsp;&nbsp;

model can learn a more complex manifold? If you read a biography of a scientist,&nbsp;&nbsp; they’re not zero-shotting new scientific&nbsp; theories. They're playing with existing&nbsp;&nbsp; ideas. They're trying to juxtapose them in their&nbsp;

head. In the tree of intellectual descendants,&nbsp;&nbsp; they try out some slightly different&nbsp; evolutionary path. You sort of run&nbsp;&nbsp; the experiment there in terms of&nbsp; publishing the paper or whatever.&nbsp;

It seems like a similar kind of thing to what&nbsp; humans are doing. There's a higher level of&nbsp;&nbsp; generalization. Bigger and bigger models&nbsp; seem to be approaching higher and higher&nbsp;&nbsp; levels of generalization. GPT-2 couldn't&nbsp;

do grade school-level math problems that&nbsp;&nbsp; required more generalization than it had&nbsp; the capability to do. GPT-3 and GPT-4 can.&nbsp; Not quite. GPT-4 has a higher degree of&nbsp; skill and a higher range of skills. It has&nbsp;&nbsp;

the same degree of generalization. I don't want to get into semantics&nbsp;&nbsp; here. Why can't creativity just be&nbsp; interpolation on a higher dimension?&nbsp; Interpolation can absolutely be creative. To your&nbsp;

point, I do think that on some level humans also&nbsp;&nbsp; do a lot of memorization, reciting, pattern&nbsp; matching, and interpolation as well. It's&nbsp;&nbsp; very much a spectrum between pattern matching&nbsp; and true reasoning. Humans are never really at&nbsp;&nbsp;

one end of the spectrum. They're never really&nbsp; doing pure pattern matching or pure reasoning.&nbsp;&nbsp; They're usually doing some mixture of both. This is true even if you're doing something&nbsp;&nbsp; that seems very reasoning-heavy, like proving&nbsp;

a mathematical theorem. As you're doing it,&nbsp;&nbsp; you're doing quite a bit of discrete&nbsp; search in your mind and quite a bit of&nbsp;&nbsp; actual reasoning. You're also very much guided&nbsp; by intuition and pattern matching. You’re guided&nbsp;&nbsp;

by the shape of proofs that you've seen&nbsp; before, by your knowledge of mathematics.&nbsp; All of our thoughts, everything we do, is a&nbsp; mixture of interpolated memorization-based&nbsp;&nbsp; thinking, Type 1 thinking, and Type 2 thinking.

Why are bigger models more sample efficient?&nbsp; Because they have more reusable building&nbsp; blocks that they can lean on to pick up&nbsp;&nbsp; new patterns in their training data. Does that pattern keep continuing as&nbsp;&nbsp;

you keep getting bigger and bigger? It does to the extent that the new&nbsp;&nbsp; patterns you’re giving the model to learn are&nbsp; a good match for what it has learned before.&nbsp;&nbsp; If you present something that’s actually&nbsp;

novel that is not in a steady distribution,&nbsp;&nbsp; like an ARC puzzle for instance, it will fail. Let me make this claim. The program synthesis&nbsp;&nbsp; is a very useful intuition pump. Why can’t this be&nbsp; the case for what’s happening in the transformer?&nbsp;

The early layers are figuring out how to&nbsp; represent the inputting tokens. The middle&nbsp;&nbsp; layers do this kind of program search, program&nbsp; synthesis, and they combine the inputs to all&nbsp;&nbsp; the circuits in the model. They go from the&nbsp;

low-level representation to a higher-level&nbsp;&nbsp; representation near the middle of the model.&nbsp; They use these programs. They combine these&nbsp;&nbsp; concepts. What comes out the other end is the&nbsp; reasoning based on that high-level intelligence.&nbsp;

Possibly. Why not? But if these models were&nbsp; actually capable of synthesizing novel programs,&nbsp;&nbsp; however simple, they should be able&nbsp; to do ARC. Because for any ARC task,&nbsp;&nbsp; if you write down the solution program in Python,&nbsp;

it’s not a complex program. It’s extremely simple.&nbsp;&nbsp; Humans can figure it out. Why can’t LLMs do it? That’s a fair point. To turn the question around&nbsp;&nbsp; to you, suppose it’s the case that in a&nbsp; year a multimodal model can solve ARC.&nbsp;&nbsp;

Let’s say it gets 80% or whatever the average&nbsp; human would get. Are we then on track for AGI?&nbsp; Quite possibly, yes. Honestly, what I would like&nbsp; to see is an LLM-type model solving ARC at 80%,&nbsp;&nbsp; but after having only been trained&nbsp;

on core knowledge-related stuff.&nbsp; But human kids, we’re necessarily just&nbsp; trained on what we have in our genes…&nbsp; Let me rephrase that. I want it to be only trained&nbsp; on information that is not explicitly trying to&nbsp;&nbsp;

anticipate what’s going to be in the ARC test set. Isn’t the whole point of ARC that you can’t? It’s&nbsp;&nbsp; a new type of intelligence test every single time? Yes, that is the point. If ARC were a perfect,&nbsp;&nbsp; flawless benchmark, it would be impossible&nbsp;

to anticipate what’s in the test set. ARC was&nbsp;&nbsp; released more than four years ago and so far&nbsp; it’s been resistant to memorization. It has,&nbsp;&nbsp; to some extent, passed the test&nbsp; of time. But it’s not perfect.&nbsp;

Let’s say you try to make by hand hundreds of&nbsp; thousands of ARC tasks. You try to multiply&nbsp;&nbsp; them by programmatically generating variations.&nbsp; You end up with maybe hundreds of millions of&nbsp;&nbsp; tasks. Just by brute forcing the task space,&nbsp;

there will be enough overlap between what&nbsp;&nbsp; you’re trained on and what’s in the test set&nbsp; that you can actually score very highly. With&nbsp;&nbsp; enough scale, you can always cheat. If you can do this for every single&nbsp;&nbsp;

thing that supposedly requires intelligence,&nbsp; then what good is intelligence? Apparently,&nbsp;&nbsp; you can just brute force intelligence. If the world, if your life, were a static&nbsp;&nbsp; distribution then sure, you could just brute&nbsp;

force the space of possible behaviors. There&nbsp;&nbsp; are several metaphors for intelligence I like to&nbsp; use. One is that you can think of intelligence as&nbsp;&nbsp; a pathfinding algorithm in future situation space. I don't know if you're familiar with RTS game&nbsp;&nbsp;

development. You have a map, a 2D map, and you&nbsp; have partial information about it. There is&nbsp;&nbsp; some fog of war on your map. There are areas that&nbsp; you haven't explored yet. You know nothing about&nbsp;&nbsp; them. There are also areas that you've explored&nbsp;

but you only know what they were like in the&nbsp;&nbsp; past. You don't know how they are like today. Now, instead of thinking about a 2D map, think&nbsp;&nbsp; about the space of possible future situations&nbsp; that you might encounter and how they're&nbsp;&nbsp;

connected to each other. Intelligence is a&nbsp; pathfinding algorithm. Once you set a goal,&nbsp;&nbsp; it will tell you how to get there optimally. Of&nbsp; course, it's constrained by the information you&nbsp;&nbsp; have. It cannot pathfind in an area that you know&nbsp;

nothing about. It also cannot anticipate changes.&nbsp; If you had complete information about the&nbsp; map, then you could solve the pathfinding&nbsp;&nbsp; problem by simply memorizing every possible&nbsp; path, every mapping from point A to point B.&nbsp;&nbsp;

You could solve the problem with pure memory.&nbsp; The reason you cannot do that in real life is&nbsp;&nbsp; because you don't actually know what's going&nbsp; to happen in the future. Life is ever changing.&nbsp; I feel like you're using words like&nbsp;

“memorization,” which we would never&nbsp;&nbsp; use for human children. If your kid learns&nbsp; to do algebra and then learns to do calculus,&nbsp;&nbsp; you wouldn't say they've memorized calculus. If&nbsp; they can solve any arbitrary algebraic problem,&nbsp;&nbsp;

you wouldn't say they've memorized&nbsp; algebra. You’d say they've learned algebra.&nbsp; Humans are never really doing pure&nbsp; memorization or pure reasoning.&nbsp; That's only because you're semantically labeling&nbsp;

what the human does as skill. But it's a&nbsp;&nbsp; memorization when the exact same skill is done by&nbsp; the LLM, as you can measure by these benchmarks.&nbsp;&nbsp; You can just plug in any sort of math problem. Sometimes humans are doing the exact same as&nbsp;&nbsp;

the LLM is doing. For instance, if you&nbsp; learn to add numbers you're memorizing&nbsp;&nbsp; an algorithm. You're memorizing a program&nbsp; and then you can reapply it. You are not&nbsp;&nbsp; synthesizing on the fly the addition program.

Obviously at some point, some human had to&nbsp;&nbsp; figure out how to do addition. A kid doesn’t&nbsp; figure it out by starting from the axioms&nbsp;&nbsp; of set theory and going to how to do addition. What you learn in school is mostly memorization.&nbsp;

My claim is that these models are vastly&nbsp; underparameterized relative to how many flops,&nbsp;&nbsp; how many parameters, you have in the human brain.&nbsp; So it makes sense that they're not going to be&nbsp;&nbsp; coming up with new theorems like the smartest&nbsp;

humans can. Most humans can't do that either.&nbsp;&nbsp; What most humans do sounds like something similar&nbsp; to what you are calling memorization, which is&nbsp;&nbsp; memorizing skills or memorizing techniques that&nbsp; you've learned. So it sounds like it's compatible.&nbsp;

Tell me if this is wrong. Is it compatible&nbsp; in your world if all the remote workers are&nbsp;&nbsp; gone but they're doing skills which we can&nbsp; potentially make synthetic data out of? We&nbsp;&nbsp; record every single remote worker's screen. We&nbsp;

sort of understand the skills they're performing&nbsp;&nbsp; there. Now we've trained a model that can do&nbsp; all this. All the remote workers are unemployed.&nbsp;&nbsp; We're generating trillions of dollars of economic&nbsp; activity from AI remote workers. In that world,&nbsp;&nbsp;

are we still in the memorization regime? Sure, with memorization you can automate almost&nbsp;&nbsp; anything as long as it's a static distribution,&nbsp; as long as you don't have to deal with change.&nbsp; Are most jobs part of such a static distribution?

Potentially, there are lots of things that you&nbsp;&nbsp; can automate. LLMs are an excellent tool for&nbsp; automation. But you have to understand that&nbsp;&nbsp; automation is not the same as intelligence. I'm&nbsp; not saying that LLMs are useless. I've been a&nbsp;&nbsp;

huge proponent of deep learning for many years. For many years, I've been saying two things.&nbsp;&nbsp; I've been saying that if you keep scaling up&nbsp; deep learning, it will keep paying off. At the&nbsp;&nbsp; same time I've been saying if you keep scaling&nbsp;

up deep learning, this will not lead to AGI.&nbsp; We can automate more and more things. Yes, this&nbsp; is economically valuable. Yes, potentially there&nbsp;&nbsp; are many jobs you could automate away like&nbsp; this. That would be economically valuable.&nbsp;&nbsp;

You're still not going to have intelligence. So you can ask, what does it matter if we can&nbsp;&nbsp; generate all this economic value? Maybe we don't&nbsp; need intelligence after all. You need intelligence&nbsp;&nbsp; the moment you have to deal with&nbsp;

change, novelty, and uncertainty.&nbsp; As long as you're in a space that&nbsp; can be exactly described in advance,&nbsp;&nbsp; you can just rely on pure memorization. In fact,&nbsp; you can always solve any problem. You can always&nbsp;&nbsp;

display arbitrary levels of skills on any task&nbsp; without leveraging any intelligence whatsoever,&nbsp;&nbsp; as long as it is possible to describe the&nbsp; problem and its solution very, very precisely.&nbsp; When they do deal with novelty,&nbsp;

then you just call it interpolation.&nbsp; No, interpolation is not enough&nbsp; to deal with all kinds of novelty.&nbsp;&nbsp; If it were, then LLMs would be AGI. I agree they're not AGI. I'm just trying&nbsp;&nbsp;

to figure out if we’re on the path to AGI. The&nbsp; crux here is that it seems to me that these things&nbsp;&nbsp; are on a spectrum and we're clearly covering&nbsp; the earliest part of the spectrum with LLMs.&nbsp; I think so.

Okay, interesting. Here's another thing&nbsp;&nbsp; that I think is evidence for this: grokking. Clearly, even within deep learning,&nbsp;&nbsp; there's a difference between the memorization&nbsp; regime and the generalization regime. At first&nbsp;&nbsp;

they'll just memorize the data set. If&nbsp; you're doing modular addition it’s how&nbsp;&nbsp; to add digits. At some point, if you keep&nbsp; training on that, they'll learn the skill.&nbsp; The fact that there is that distinction suggests&nbsp;

that for the generalized circuit that deep&nbsp;&nbsp; learning can learn, there is a regime where it&nbsp; generalizes if you have an overparameterized&nbsp;&nbsp; model. We don't have that in comparison to all&nbsp; the tasks we want these models to do right now.&nbsp;

Grokking is a very, very old phenomenon.&nbsp; We've been observing it for decades. It's&nbsp;&nbsp; basically an instance of the minimum description&nbsp; length principle. Given a problem, you can just&nbsp;&nbsp; memorize a pointwise input-to-output&nbsp;

mapping, which is completely overfit.&nbsp; It does not generalize at all, but it solves&nbsp; the problem on the trained data. From there,&nbsp;&nbsp; you can actually keep pruning it and making&nbsp; your mapping simpler and more compressed. At&nbsp;&nbsp;

some point, it will start generalizing. That's something called the minimum&nbsp;&nbsp; description length principle. It's this idea&nbsp; that the program that will generalize best is&nbsp;&nbsp; the shortest. It doesn't mean that you're doing&nbsp;

anything other than memorization. You're doing&nbsp;&nbsp; memorization plus regularization. A.k.a. generalization?&nbsp; Yeah, that absolutely leads to generalization. So you do that within one skill. The pattern&nbsp;&nbsp;

you see here of meta-learning is that it's&nbsp; more efficient to store a program that can&nbsp;&nbsp; perform many skills rather than one skill. This&nbsp; is what we might call fluid intelligence. So as&nbsp;&nbsp; you get bigger and bigger in models, you&nbsp;

would expect it to go up this hierarchy&nbsp;&nbsp; of generalization. It generalizes to a skill,&nbsp; then it generalizes across multiple skills.&nbsp; That's correct. LLMs are not infinitely&nbsp; large. They have only a fixed number&nbsp;&nbsp;

of parameters. They have to compress their&nbsp; knowledge as much as possible. In practice,&nbsp;&nbsp; LLMs are mostly storing reusable bits of programs&nbsp; like vector programs. Because they have this need&nbsp;&nbsp; for compression, every time they're learning&nbsp;

a new program they're going to try to express&nbsp;&nbsp; it in terms of existing bits and pieces of&nbsp; programs that they've already learned before.&nbsp; Isn't this generalization? Absolutely. Clearly LLMs have some&nbsp;&nbsp;

degree of generalization. This is precisely&nbsp; why. It's because they have to compress.&nbsp; Why is that intrinsically limited? At some&nbsp; point it has to learn a higher level of&nbsp;&nbsp; generalization and a higher level, and then&nbsp;

the highest level is the fluid intelligence.&nbsp; It's intrinsically limited because the substrate&nbsp; of your model is a big parametric curve. All you&nbsp;&nbsp; can do with this is local generalization. If&nbsp; you want to go beyond this towards broader or&nbsp;&nbsp;

even extreme generalization, you have to move to&nbsp; a different type of model. My paradigm of choice&nbsp;&nbsp; is discrete program search, program synthesis. If you want to understand that, you can sort&nbsp;&nbsp; of compare and contrast it with deep learning.&nbsp;

In deep learning your model is a differentiable&nbsp;&nbsp; parametric curve. In program synthesis, your&nbsp; model is a discrete graph of operators. You've&nbsp;&nbsp; got a set of logical operators, like a&nbsp; domain-specific language. You're picking&nbsp;&nbsp;

instances of it. You're structuring that into&nbsp; a graph that's a program. That's actually very&nbsp;&nbsp; similar to a program you might write in Python or&nbsp; C++ and so on. We are doing machine learning here.&nbsp;&nbsp; We're trying to automatically learn these models.

In deep learning your learning engine is gradient&nbsp;&nbsp; descent. Gradient descent is very compute&nbsp; efficient because you have this very strong&nbsp;&nbsp; informative feedback signal about where the&nbsp; solution is. You can get to the solution very&nbsp;&nbsp;

quickly, but it is very data inefficient.&nbsp; In order to make it work, you need a dense&nbsp;&nbsp; sampling of the operating space. You need&nbsp; a dense sampling of the data distribution.&nbsp;&nbsp; Then you're limited to only generalizing within&nbsp;

that data distribution. The reason why you have&nbsp;&nbsp; this limitation is because your model is a curve. Meanwhile, if you look at discrete program search,&nbsp;&nbsp; the learning engine is combinatorial search.&nbsp; You're just trying a bunch of programs until&nbsp;&nbsp;

you find one that actually meets your spec. This&nbsp; process is extremely data efficient. You can learn&nbsp;&nbsp; a generalizable program from just one example,&nbsp; two examples. This is why it works so well on ARC,&nbsp;&nbsp; by the way. The big limitation is that it's&nbsp;

extremely compute inefficient because you're&nbsp;&nbsp; running into combinatorial explosion, of course. You can sort of see here how deep learning and&nbsp;&nbsp; discrete program search have very complementary&nbsp; strengths, and limitations as well. Every&nbsp;&nbsp;

limitation of deep learning has a corresponding&nbsp; strength in program synthesis and inversely. The&nbsp;&nbsp; path forward is going to be to merge the two. Here’s another way you can think about it.&nbsp;&nbsp; These parametric curves trained with gradient&nbsp;

descent are great fits for everything that's&nbsp;&nbsp; System 1-type thinking: pattern recognition,&nbsp; intuition, memorization, etc. Discrete program&nbsp;&nbsp; search is a great fit for Type 2 thinking:&nbsp; planning, reasoning. It’s quickly figuring&nbsp;&nbsp;

out a generalizable model that matches just one or&nbsp; two examples, like for an ARC puzzle for instance.&nbsp; Humans are never doing pure System 1 or pure&nbsp; System 2. They're always mixing and matching&nbsp;&nbsp; both. Right now, we have all the tools for&nbsp;

System 1. We have almost nothing for System&nbsp;&nbsp; 2. The way forward is to create a hybrid system. The form it's going to take is mostly System 2.&nbsp;&nbsp; The outer structure is going to be a discrete&nbsp; program search system. You're going to fix the&nbsp;&nbsp;

fundamental limitation of discrete program&nbsp; search, which is combinatorial explosion,&nbsp;&nbsp; with deep learning. You're going to leverage&nbsp; deep learning to guide and to provide intuition&nbsp;&nbsp; in program space, to guide the program search.

That's very similar to what you see when you're&nbsp;&nbsp; playing chess or when you're trying to prove a&nbsp; theorem, for instance. It's mostly a reasoning&nbsp;&nbsp; thing, but you start out with some intuition&nbsp; about the shape of the solution. That's very much&nbsp;&nbsp;

something you can get via a deep learning model.&nbsp; Deep learning models are very much like intuition&nbsp;&nbsp; machines. They're pattern matching machines. You start from this shape of the solution,&nbsp;&nbsp; and then you're going to do actual explicit&nbsp;

discrete program search. But you're not going&nbsp;&nbsp; to do it via brute force. You're not going to&nbsp; try things randomly. You're actually going to&nbsp;&nbsp; ask another deep learning model for suggestions.&nbsp; It’ll be like, “here's the most likely next step.&nbsp;&nbsp;

Here's where in the graph you should be going.”&nbsp; You can also use yet another deep learning model&nbsp;&nbsp; for feedback like “well, here's what I have so&nbsp; far. Is it looking good? Should I just backtrack&nbsp;&nbsp; and try something new?” Discrete program search&nbsp;

is going to be the key but you want to make&nbsp;&nbsp; it dramatically better, orders of magnitude&nbsp; more efficient, by leveraging deep learning.&nbsp; By the way, another thing that you can use&nbsp; deep learning for is of course things like&nbsp;&nbsp;

common sense knowledge and knowledge in general.&nbsp; You're going to end up with this sort of system&nbsp;&nbsp; where you have this on-the-fly synthesis&nbsp; engine that can adapt to new situations.&nbsp; The way it adapts is that it's going to fetch&nbsp;

from a bank of patterns, modules that could be&nbsp;&nbsp; themselves curves, differentiable modules,&nbsp; and some others that could be algorithmic&nbsp;&nbsp; in nature. It's going to assemble them&nbsp; via this intuition-guided process. For&nbsp;&nbsp;

every new situation you might be faced with,&nbsp; it's going to give you a generalizable model&nbsp;&nbsp; that was synthesized using very, very little&nbsp; data. Something like this would solve ARC.&nbsp; That's actually a really interesting prompt.&nbsp;

There’s an interesting crux here. I talk to my&nbsp;&nbsp; friends who are extremely optimistic about LLMs&nbsp; and expect AGI within the next couple of years.&nbsp;&nbsp; In some sense, they also agree that scaling&nbsp; is not all you need but that the rest of the&nbsp;&nbsp;

progress is undergirded and enabled by scaling.&nbsp; You still need to add the System 2 and the&nbsp;&nbsp; test time compute on top of these models. Their perspective is that it's relatively&nbsp;&nbsp; straightforward to do that because you&nbsp;

have this library of representations that&nbsp;&nbsp; you built up from pre-training. It's almost&nbsp; like it's just skimming through textbooks.&nbsp;&nbsp; You need some more deliberate way in which it&nbsp; engages with the material it learns. In-context&nbsp;&nbsp;

learning is extremely sample efficient.&nbsp; To actually distill that into the weights,&nbsp;&nbsp; you need the model to talk through the things&nbsp; it sees and then add it back to the weights.&nbsp; As far as the System 2 goes, they talk about&nbsp;

adding some kind of RL setup so that it is&nbsp;&nbsp; encouraged to proceed on the reasoning traces&nbsp; that end up being correct. They think this is&nbsp;&nbsp; relatively straightforward stuff that will&nbsp; be added within the next couple of years.&nbsp;

That's an empirical question so we’ll see. I assume your intuition is not&nbsp;&nbsp; that. I'm curious why. My intuition is that this&nbsp;&nbsp; whole System 2 architecture is the hard part.&nbsp;

It’s the very hard and unobvious part. Scaling&nbsp;&nbsp; up the interpolative memory is the easy part. It's&nbsp; literally just a big curve. All you need is more&nbsp;&nbsp; data. It's an interpolative representation&nbsp; of a data set. That's the easy part.&nbsp;

The hard part is the architecture of&nbsp; intelligence. Memory and intelligence&nbsp;&nbsp; are separate components. We have the memory.&nbsp; We don't have the intelligence yet. I agree&nbsp;&nbsp; with you that having the memory is actually&nbsp;

very useful. If you just had the intelligence&nbsp;&nbsp; but it was not hooked up to an extensive memory,&nbsp; it would not be that useful because it would not&nbsp;&nbsp; have enough material to work from. Former guest Trenton Bricken&nbsp;&nbsp;

advanced an alternative hypothesis that&nbsp; intelligence is just hierarchically associated&nbsp;&nbsp; memory. When Sherlock Holmes goes into a crime&nbsp; scene he's extremely sample efficient. He can&nbsp;&nbsp; just look at a few clues and figure out who was&nbsp;

the murderer. He's able to do that because he&nbsp;&nbsp; has learned higher level associations.&nbsp; It's memory in some fundamental sense.&nbsp; Here's one way to ask the question. In the&nbsp; brain, supposedly we do program synthesis,&nbsp;&nbsp;

but it is just synapses connected to each&nbsp; other. Physically, it's got to be that&nbsp;&nbsp; you just query the right circuit, right? You are, yeah. It's a matter of degree.&nbsp; Training in the environment that human ancestors&nbsp;

were trained in means you learn those circuits.&nbsp;&nbsp; If you train on the same kinds of outputs&nbsp; that humans produce — which to replicate,&nbsp;&nbsp; requires these kinds of circuits — wouldn't that&nbsp; train the same thing that is whatever humans have?&nbsp;

It's a matter of degree. If you have a system&nbsp; that has a memory and is only capable of doing&nbsp;&nbsp; local generalization from that, it's not going&nbsp; to be very adaptable. To be really general,&nbsp;&nbsp; you need the memory plus the ability&nbsp;

to search to quite some depth to&nbsp;&nbsp; achieve broader and even extreme generalization. One of my favorite psychologists is Jean Piaget,&nbsp;&nbsp; the founder of developmental psychology. He had&nbsp; a very good quote about intelligence. He said,&nbsp;&nbsp;

"intelligence is what you use when you don't&nbsp; know what to do." As a human living your life,&nbsp;&nbsp; in most situations you already know&nbsp; what to do because you've been in this&nbsp;&nbsp; situation before. You already have the answer.

You're only going to need to use intelligence&nbsp;&nbsp; when you're faced with novelty, with something&nbsp; you didn't expect. It’s something that you&nbsp;&nbsp; weren't prepared for, either by your own life&nbsp; experience or your evolutionary history. This&nbsp;&nbsp;

day that you're living right now is&nbsp; different in some important ways from&nbsp;&nbsp; every day you've lived before. It's also&nbsp; different from any day ever lived by any&nbsp;&nbsp; of your ancestors. You're still capable&nbsp;

of being functional. How is that possible?&nbsp; I'm not denying that generalization is&nbsp; extremely important and the basis for&nbsp;&nbsp; intelligence. That's not the crux. The crux is&nbsp; how much of that is happening in the models.&nbsp;

Okay, let me ask a separate question about the&nbsp; differences in intelligence between humans.&nbsp;&nbsp; Maybe because of the reasons you mentioned,&nbsp; the intelligence tests are not measuring it&nbsp;&nbsp; well. But clearly there's differences in&nbsp;

intelligence between different humans.&nbsp; What is your explanation for what's going&nbsp; on there? That's sort of compatible with&nbsp;&nbsp; my story. There's a spectrum of generality and&nbsp; these models are climbing up to a human level.&nbsp;&nbsp;

Even some humans haven't even climbed up to&nbsp; the Einstein level or the François level.&nbsp; That's a great question. There is extensive&nbsp; evidence that differences in intelligence are&nbsp;&nbsp; mostly genetic in nature. That means that if you&nbsp;

take someone who is not very intelligent, there&nbsp;&nbsp; is no amount of training data you can expose that&nbsp; person to that would make them become Einstein.&nbsp;&nbsp; This points to the fact that you really need a&nbsp; better architecture. You need a better algorithm.&nbsp;&nbsp;

More training data is not in fact all you need. I think I agree with that. I might phrase it in&nbsp;&nbsp; this way. The people who are smarter have, in ML&nbsp; language, better initializations. If you look at&nbsp;&nbsp; the neural wiring, it's more efficient.&nbsp;

Maybe they have greater density of firing.&nbsp; Some part of the story is scaling. There is some&nbsp; correlation between brain size and intelligence.&nbsp;&nbsp; Within the context of “scaling” LLMs, people&nbsp; talk about architectural improvements. A model&nbsp;&nbsp;

like Gemini 1.5 Flash performs as well as&nbsp; GPT-4 did when GPT-4 was released a year ago,&nbsp;&nbsp; but is 57 times cheaper on output. Part&nbsp; of the scaling story is that we're in&nbsp;&nbsp; like extremely low-hanging fruit territory when&nbsp;

it comes to those architectural improvements.&nbsp; We're back now with the co-founder of Zapier,&nbsp; Mike Knoop. You're funding this prize and&nbsp;&nbsp; you're running this prize with François. Tell&nbsp; me about how this came together. What prompted&nbsp;&nbsp;

you guys to launch this prize? I've been AI curious for 13&nbsp;&nbsp; years. I co-founded Zapier and I’ve&nbsp; been running it for the last 13 years.&nbsp; I first got introduced to your work during&nbsp;

COVID. I went down the rabbit hole. I had a&nbsp;&nbsp; lot of free time. It was right after you'd&nbsp; published your paper, "On the Measure of&nbsp;&nbsp; Intelligence”. You introduced the concept of AGI&nbsp; and that this efficiency of skill acquisition&nbsp;&nbsp;

is the right definition, and the ARC puzzles. I don't think the first Kaggle contest had been&nbsp;&nbsp; done yet. It was still running. It was interesting&nbsp; but I just parked the idea. I had bigger fish to&nbsp;&nbsp; fry at Zapier. We were in the middle of this big&nbsp;

turnaround of trying to get to our second product.&nbsp; It was January 2022 when the chain-of-thought&nbsp; paper came out. That really awoke me to the&nbsp;&nbsp; progress. I even gave a whole presentation&nbsp; to Zapier on the GPT-3 paper. I felt like&nbsp;&nbsp;

I had priced in everything that LLMs could&nbsp; do. That paper was really shocking to me in&nbsp;&nbsp; terms of all these latent capabilities that&nbsp; LLMs have that I didn't expect they had.&nbsp; I actually gave up my exec team role. I was&nbsp;

running half the company at that point. I went&nbsp;&nbsp; back to being an individual contributor and just&nbsp; doing AI research alongside Bryan, my co-founder.&nbsp;&nbsp; Ultimately, that led me back towards ARC. I was&nbsp; looking into it again. I had expected to see this&nbsp;&nbsp;

saturation effect that MMLU and GMS8K have. When I looked at the scores and the progress&nbsp;&nbsp; over the last four years, I was really shocked to&nbsp; see that we'd made very little objective progress&nbsp;&nbsp; towards it. It felt like a really important eval.&nbsp;

As I spent the last year quizzing people about it&nbsp;&nbsp; in my network and community, very few people&nbsp; even knew it existed. If it's right that this&nbsp;&nbsp; is a really globally, singularly unique AGI eval&nbsp; — and it's different from every other eval that&nbsp;&nbsp;

exists that more narrowly measures AI skill —&nbsp; then more people should know about this thing.&nbsp; I had my own ideas on how to beat ARC as well. I&nbsp; was working nights and weekends on that. I flew up&nbsp;&nbsp; to meet François earlier this year to quiz him and&nbsp;

show him my ideas. Ultimately I asked him why more&nbsp;&nbsp; people didn’t know about ARC? You should actually&nbsp; answer that. It's a really interesting question.&nbsp;&nbsp; Why don't you think more people know about ARC? Benchmarks that gain traction in the research&nbsp;&nbsp;

community are benchmarks that are already&nbsp; fairly tractable. The dynamic is that&nbsp;&nbsp; some research group is going to make some&nbsp; initial breakthrough and then this is going&nbsp;&nbsp; to catch the attention of everyone else.&nbsp;

You're going to get follow-up papers with&nbsp;&nbsp; people trying to beat the first team and so on. This has not really happened for ARC because ARC&nbsp;&nbsp; is actually very hard for existing AI techniques.&nbsp; ARC requires you to try new ideas. That's very&nbsp;&nbsp;

much the point. The point is not that you should&nbsp; just be able to apply existing technology and&nbsp;&nbsp; solve ARC. The point is that existing technology&nbsp; has reached a plateau. If you want to go beyond&nbsp;&nbsp; that and start being able to tackle problems&nbsp;

that you haven't memorized or seen before,&nbsp;&nbsp; you need to try new ideas. ARC is not just meant to be&nbsp;&nbsp; this sort of measure of how close we are to AGI.&nbsp; It's also meant to be a source of inspiration. I&nbsp;&nbsp;

want researchers to look at these puzzles and be&nbsp; like, "hey, it's really strange that these puzzles&nbsp;&nbsp; are so simple and most humans can just do them&nbsp; very quickly. Why is it so hard for existing AI&nbsp;&nbsp; systems? Why is it so hard for LLMs and so on?"

This is true for LLMs, but ARC was actually&nbsp;&nbsp; released before LLMs were really a thing. The only&nbsp; thing that made it special at the time was that it&nbsp;&nbsp; was designed to be resistant to memorization.&nbsp; The fact that it has survived LLMs so well,&nbsp;&nbsp;

and GenAI in general, shows that it&nbsp; is actually resistant to memorization.&nbsp; This is what nerd-sniped me. I went and took a&nbsp; bunch of the puzzles myself. I've shown it to&nbsp;&nbsp; all my friends and family too. They're all like,&nbsp;

"oh yeah, this is super easy. Are you sure AI&nbsp;&nbsp; can't solve this?" That's the reaction and the&nbsp; same one for me as well. The more you dig in,&nbsp;&nbsp; you realize there's not just empirical evidence&nbsp; over the last four years that it's unbeaten,&nbsp;&nbsp;

but there are theoretical concepts&nbsp; behind why. I completely agree at this&nbsp;&nbsp; point that new ideas are needed to beat ARC. There’s a lot of current trends in the world&nbsp;&nbsp; that are actually working against that happening.&nbsp;

We’re actually less likely to generate new ideas&nbsp;&nbsp; right now. One of the trends is the closing up&nbsp; of frontier research, right? The GPT-4 paper&nbsp;&nbsp; from OpenAI had no technical detail shared. The&nbsp; Gemini paper had no technical detail shared,&nbsp;&nbsp;

like the longer context part of that work. Yet that open innovation and progress and&nbsp;&nbsp; sharing is what got us to transformers in the&nbsp; first place. That's what got us to LLMs in the&nbsp;&nbsp; first place. So it's actually a little bit&nbsp;

disappointing that so much frontier work has&nbsp;&nbsp; gone closed. It's really making a bet that these&nbsp; individual labs are going to be the ones to have&nbsp;&nbsp; the breakthrough and not the ecosystem. The&nbsp; internet and open source has shown that it's&nbsp;&nbsp;

the most powerful innovation ecosystem that's&nbsp; ever existed, probably in the entire world.&nbsp; It's actually really sad that frontier research&nbsp; is no longer being published. If you look back&nbsp;&nbsp; four years ago, everything was just openly&nbsp;

shared. All of the state-of-the-art results&nbsp;&nbsp; were published. This is no longer the case. OpenAI single-handedly changed the game. OpenAI&nbsp;&nbsp; basically set back progress towards AGI by quite&nbsp; a few years, probably like 5-10 years. That’s for&nbsp;&nbsp;

two reasons. One is that they caused this complete&nbsp; closing down of frontier research publishing.&nbsp; But they also triggered this initial burst&nbsp; of hype around LLMs. Now LLMs have sucked&nbsp;&nbsp; the oxygen out of the room. Everyone is just&nbsp;

doing LLMs. I see LLMs as more of an off-ramp&nbsp;&nbsp; on the path to AGI actually. All these new&nbsp; resources are actually going to LLMs instead&nbsp;&nbsp; of everything else they could be going to. If you look further into the past to like&nbsp;&nbsp;

2015 or 2016, there were like a thousand times&nbsp; fewer people doing AI back then. Yet the rate of&nbsp;&nbsp; progress was higher because people were exploring&nbsp; more directions. The world felt more open-ended.&nbsp;&nbsp; You could just go and try. You could have a cool&nbsp;

idea of a launch, try it, and get some interesting&nbsp;&nbsp; results. There was this energy. Now everyone is&nbsp; very much doing some variation of the same thing.&nbsp; The big labs also tried their hand on ARC, but&nbsp; because they got bad results they didn't publish&nbsp;&nbsp;

anything. People only publish positive results. I wonder how much effort people have put&nbsp;&nbsp; into trying to prompt or scaffold, do some&nbsp; Devin-type approach, into getting the frontier&nbsp;&nbsp; models to produce good solutions on ARC. I mean&nbsp;

the frontier models of today, not just a year&nbsp;&nbsp; ago. A lot of post-training has gone into making&nbsp; them better. There’s Claude 3 Opus or GPT-4o.&nbsp; I hope that one of the things this episode does&nbsp; is get people to try out this open competition.&nbsp;&nbsp;

They have to put in an open source model to&nbsp; compete, but we could also figure out if maybe the&nbsp;&nbsp; capability is latent in Claude and just see if you&nbsp; can show that. That would be super interesting.&nbsp; Let's talk about the prize. How much do&nbsp;

you win if you solve it? Let’s say you get&nbsp;&nbsp; whatever percent on ARC. How much do you get if&nbsp; you get the best submission but don't crack it?&nbsp; We have a little over a million dollars in the&nbsp; prize pool. We’re running the contest on an annual&nbsp;&nbsp;

basis. We're starting today through the middle of&nbsp; November. The goal is to get 85%. That's the lower&nbsp;&nbsp; bound of the human average that you guys talked&nbsp; about earlier. There's a $500,000 prize for the&nbsp;&nbsp; first team that can get to the 85% benchmark.

We don't expect that to happen this year. One&nbsp;&nbsp; of the early statisticians at Zapier gave me this&nbsp; line that has always stuck with me: "the longer it&nbsp;&nbsp; takes, the longer it takes." My prior is that ARC&nbsp; is going to take years to solve. We're also going&nbsp;&nbsp;

to break down and do a progress prize this year. There's a $100,000 progress prize which we will&nbsp;&nbsp; pay out to the top scores. $50,000 is going to&nbsp; go to the top objective scores this year on the&nbsp;&nbsp; Kaggle leaderboard. We're hosting it on Kaggle.&nbsp;

We're then going to have a $50,000 pot set for&nbsp;&nbsp; the best paper that explains conceptually&nbsp; the scores that they were able to achieve.&nbsp; One of the interesting things is we're also going&nbsp; to be requiring that in order to win the prize&nbsp;&nbsp;

money, you put the solution or your paper out&nbsp; into the public domain. Typically with contests,&nbsp;&nbsp; you see a lot of closed-up sharing. People are&nbsp; private and secret. They want to hold their&nbsp;&nbsp; alpha to themselves during the contest period.

Because we expect it's going to be multiple years,&nbsp;&nbsp; we want an interactive game here. The plan is&nbsp; that at the end of November we will award the&nbsp;&nbsp; $100,000 prize money to the top progress prize.&nbsp; We’ll use the down time between December through&nbsp;&nbsp;

February to share out all the knowledge from&nbsp; the top scores and the approaches folks were&nbsp;&nbsp; taking. That way we’ll re-baseline the community&nbsp; up to whatever the state of the art is and then&nbsp;&nbsp; run the contest again next year. We’ll keep&nbsp;

doing that on a yearly basis until we get 85%.&nbsp; I'll give people some context on why I think&nbsp; this prize is very interesting. I was having&nbsp;&nbsp; conversations with my friends who are very much&nbsp; believers in models as they exist today. First of&nbsp;&nbsp;

all, it was intriguing to me that they didn't know&nbsp; about ARC. These are experienced ML researchers.&nbsp; This happened a couple nights ago. We went to&nbsp; dinner and I showed them an example problem.&nbsp;&nbsp; They said, "of course, an LLM would be&nbsp;

able to solve something like this." We&nbsp;&nbsp; took a screenshot of it. We just put it into&nbsp; our ChatGPT app. It didn’t get the pattern.&nbsp; So it's very interesting. It is a notable&nbsp; fact. I was playing devil's advocate against&nbsp;&nbsp;

you on these kinds of questions but this is a&nbsp; very intriguing fact. This prize is extremely&nbsp;&nbsp; interesting because we're going to learn&nbsp; something fascinating one way or another.&nbsp; With regards to the 85%, separate from this&nbsp;

prize, I'd be very curious if somebody could&nbsp;&nbsp; replicate that result. Obviously in psychology and&nbsp; other kinds of fields, which this result seems to&nbsp;&nbsp; be analogous to, when you run tests on some small&nbsp; sample of people they're often hard to replicate.&nbsp;

I'd be very curious to know, if you try to&nbsp; replicate this, how does the average human&nbsp;&nbsp; perform on ARC? I’m also curious about the&nbsp; difficulty of how long it will take to crack&nbsp;&nbsp; this benchmark. It's very interesting thinking of&nbsp;

the other benchmarks that are now fully saturated,&nbsp;&nbsp; like MMLU and MATH. Dan Hendrycks and Collin&nbsp; Burns who did MMLU and MATH, they were grad&nbsp;&nbsp; students or college students when they made it. The goal when they made it just a couple of years&nbsp;&nbsp;

ago was that it would be a test of AGI. Of course&nbsp; they got totally saturated. I know you'll argue&nbsp;&nbsp; that these are tests of memorization. But&nbsp; there’s been a pattern we’ve seen. In fact,&nbsp;&nbsp; Epoch AI has a very interesting graph where you&nbsp;

see this almost exponential curve. It gets 5%,&nbsp;&nbsp; 10%, 30%, 40% as you increase the compute&nbsp; across models, and then it just shoots up.&nbsp; In the GPT-4 technical report, they had this&nbsp; interesting graph of the HumanEval problem set,&nbsp;&nbsp;

which was 22 coding problems. They had to graph it&nbsp; on the mean log pass curve. Early on in training,&nbsp;&nbsp; or even with smaller models, they can have&nbsp; the right idea of how to solve this problem.&nbsp; It takes a lot of reliability to make sure they&nbsp;

stay on track to solve the whole problem. You&nbsp;&nbsp; really want to upweight the signal where they&nbsp; get it right at least some of the time, maybe&nbsp;&nbsp; 1/100 or 1/1000. They go from 1/1000 to 1/100&nbsp; and 1/10 and then they just totally saturate it.&nbsp;

Here’s the question this is all leading up to. Why&nbsp; won't the same thing happen with ARC? People had&nbsp;&nbsp; to try really hard with bigger models. Now they&nbsp; figured out these techniques like the ones Jack&nbsp;&nbsp; Cole has figured out that can get 35% with&nbsp;

only a 240 million parameter language model.&nbsp; Shouldn't we see the same pattern we saw&nbsp; across all these other benchmarks? You just&nbsp;&nbsp; eke out and then once you get the general&nbsp; idea, you just go all the way to a hundred?&nbsp;

That's an empirical question. We'll see in&nbsp; practice what happens. What Jack Cole is doing is&nbsp;&nbsp; actually very unique. It's not just pre-training&nbsp; an LLM and then prompting it. He's actually trying&nbsp;&nbsp; to do active inference.

He's doing test-time,&nbsp;&nbsp; right? He's doing test-time fine-tuning. Exactly, he’s doing test-time fine-tuning. This is&nbsp;&nbsp; actually trying to lift one of the key limitations&nbsp; of LLMs. At inference time, they cannot learn&nbsp;&nbsp;

anything new. They cannot adapt on the fly to what&nbsp; they're seeing. He's actually trying to learn.&nbsp; What he's doing is effectively a form of program&nbsp; synthesis. LLMs contain a lot of useful building&nbsp;&nbsp; blocks, programming building blocks. By&nbsp;

fine-tuning it on the task at test time,&nbsp;&nbsp; you are trying to assemble these building blocks&nbsp; into the right pattern that matches the task. This&nbsp;&nbsp; is exactly what program synthesis is about. I would contrast this approach with discrete&nbsp;&nbsp;

program search. In discrete program search,&nbsp; you're trying to assemble a program from a&nbsp;&nbsp; set of primitives. You have very few primitives.&nbsp; For instance, people working on discrete program&nbsp;&nbsp; search on ARC tend to work with DSLs&nbsp;

that have 100 to 200 primitive programs.&nbsp;&nbsp; It’s a very small DSL but they're trying to&nbsp; combine these primitives into very complex&nbsp;&nbsp; programs. There's a very deep depth of search. On the other hand, is what Jack Cole is doing&nbsp;&nbsp;

with LLMs. He's got this vector program database&nbsp; DSL of millions of building blocks in the LLM.&nbsp;&nbsp; They’re mined by pre-training the LLM, not just&nbsp; on a ton of programming problems, but also on&nbsp;&nbsp; millions of generated ARC-like tasks. You have an&nbsp;

extraordinarily large DSL and the fine-tuning is&nbsp;&nbsp; very shallow recombination of these primitives. Discrete program search is very deep&nbsp;&nbsp; recombination with a very small set of primitive&nbsp; programs. The LLM approach is the same but on the&nbsp;&nbsp;

complete opposite end of that spectrum. You&nbsp; scale up the memorization by a massive factor&nbsp;&nbsp; and you're doing very shallow search. They are the&nbsp; same thing, just different ends of the spectrum.&nbsp; I think where you're going to get the most&nbsp;

value for your compute cycles is somewhere&nbsp;&nbsp; in between. You want to leverage memorization to&nbsp; build up a richer, more useful bank of primitive&nbsp;&nbsp; programs. You don't want them to be hard-coded&nbsp; like what we saw for the typical RTS. You want&nbsp;&nbsp;

them to be learned from examples. You also want&nbsp; to do some degree of deep search. As long as&nbsp;&nbsp; you're only doing very shallow search, you are&nbsp; limited to local generalization. If you want&nbsp;&nbsp; to generalize further and more broadly,&nbsp;

depth of search is going to be critical.&nbsp; I might argue that the reason that he had&nbsp; to rely so heavily on the synthetic data&nbsp;&nbsp; was because he used a 240 million parameter&nbsp; model. The Kaggle competition at the time&nbsp;&nbsp;

required him to use a P100 GPU which has like&nbsp; a tenth or something of the flops of an H100.&nbsp; For context for the listeners, the frontier models&nbsp; today are literally a thousand times bigger than&nbsp;&nbsp; that. For your competition, submissions&nbsp;

can't make any API calls, can't go online,&nbsp;&nbsp; and have to run on NVIDIA Tesla P100.&nbsp; It's significantly less powerful.&nbsp; There's basically a 12 hour runtime limit. There's&nbsp; a forcing function of efficiency in the eval.&nbsp;

But here's the thing, you only have 100 test&nbsp; tasks. The amount of computing available for each&nbsp;&nbsp; task is actually quite a bit, especially if you&nbsp; contrast that with the simplicity of each task.&nbsp; Basically, it would be 7 minutes per task. People&nbsp;

who have tried to do these estimates of how many&nbsp;&nbsp; flops does a human brain have. You can take them&nbsp; with a grain of salt but as a sort of anchor,&nbsp;&nbsp; it's basically the amount of flops an H100 has. Maybe you would argue that a human brain can&nbsp;&nbsp;

solve this question in faster than 7.2 minutes.&nbsp; Even with a tenth of the compute, you should be&nbsp;&nbsp; able to do it in seven minutes. Obviously we have&nbsp; less than petabytes of fast access memory in the&nbsp;&nbsp; brain and these 29 GB or whatever in the H100.

The broader point is that I wish there were a&nbsp;&nbsp; way to also test this prize with some sort of&nbsp; scaffolding on the biggest models, as a way to&nbsp;&nbsp; test whether scaling is the path to solving ARC. Absolutely. In the context of the competition,&nbsp;&nbsp;

we want to see how much progress we can do with&nbsp; limited resources. But you're entirely right that&nbsp;&nbsp; it's a super interesting open question, what could&nbsp; the biggest model out there actually do on ARC?&nbsp; We actually also want to make available a private,&nbsp;

one-off track where you can submit to us a VM. You&nbsp;&nbsp; can put on it any model you want. You can take&nbsp; one of the largest open source models out there,&nbsp;&nbsp; fine-tune it, do whatever you want, and just&nbsp; give us an image. Then we run it on the H100&nbsp;&nbsp;

for 24 hours or something. You see what you get. It's worth pointing out that there's two different&nbsp;&nbsp; test sets. There is a public test set that's in&nbsp; the public GitHub repository that anyone can use&nbsp;&nbsp; to train. You can put in an open API call,&nbsp;

whatever you'd like to do. Then there's the&nbsp;&nbsp; private test set, which is the hundred that&nbsp; is actually measuring the state of the art.&nbsp; It is pretty open-ended and interesting to have&nbsp; folks at least attempt to use the public test&nbsp;&nbsp;

set and go try it. Now there is an asterisk&nbsp; on any score that's reported on against the&nbsp;&nbsp; public test set because it is public. It could&nbsp; have leaked into the training data somewhere.&nbsp; This is actually what people are already doing.&nbsp;

You can already try to prompt one of the best&nbsp;&nbsp; models, like the latest Gemini or the latest&nbsp; GPT-4, with tasks from the public evaluation set.&nbsp;&nbsp; Again, the problem is that these tasks&nbsp; are available as JSON files on GitHub.&nbsp;&nbsp;

These models are also trained on GitHub.&nbsp; So they're actually trained on these tasks.&nbsp; That kind of creates uncertainty. If they&nbsp; can actually solve some of the tasks,&nbsp;&nbsp; is that because they memorized the answer or not?&nbsp;

Maybe you would be better off trying to create&nbsp;&nbsp; your own private, ARC-like very novel test set.&nbsp; Don't make the tasks difficult. Don't make them&nbsp;&nbsp; complex. Make them very obvious for humans,&nbsp; but make sure to make them original as much&nbsp;&nbsp;

as possible. Make them unique, different, and&nbsp; see how well your GPT-4 or GPT-5 does on them.&nbsp; There have been tests on whether these models&nbsp; are being overtrained on these benchmarks.&nbsp; Scale recently did this with GSM8K.&nbsp;

They basically replicated the benchmark,&nbsp;&nbsp; but with different questions. Some of the models&nbsp; actually were extremely overfit on the benchmark,&nbsp;&nbsp; like Mistral and so forth. Frontier models like&nbsp; Claude and GPT actually did as well on their novel&nbsp;&nbsp;

benchmark as they did on the specific questions&nbsp; that were in the existing public benchmark.&nbsp; I would be relatively optimistic about them&nbsp; just training on the JSON. I was joking with&nbsp;&nbsp; Mike that you should allow API access but&nbsp;

keep an even more private validation set of&nbsp;&nbsp; these ARC questions. So you allow API access&nbsp; and people can play with GPT-4 scaffolding&nbsp;&nbsp; to enter into this contest. Maybe later on&nbsp; you run the validation set on the API. If&nbsp;&nbsp;

it performs worse than the test set that&nbsp; you originally allowed the API to access,&nbsp;&nbsp; that means that OpenAI is training on your API&nbsp; calls. You go public with this and show them like,&nbsp;&nbsp; "oh my god, they've leaked your data."

We do want to evolve the ARC dataset.&nbsp;&nbsp; That is a goal that we want to do.&nbsp; François mentioned that it's not perfect.&nbsp; Yeah, ARC is not a perfect benchmark. I made&nbsp; it over four years ago, almost five now. This&nbsp;&nbsp;

was in a time before LLMs. We’ve actually&nbsp; learned a lot since about what potential&nbsp;&nbsp; flaws there might be. There is some redundancy&nbsp; in the set of tasks, which is of course against&nbsp;&nbsp; the goals of the benchmark. Every task is&nbsp;

supposed to be unique in practice. That's&nbsp;&nbsp; not quite true. Every task is also supposed&nbsp; to be very novel, but in practice, they might&nbsp;&nbsp; not be. They might be structurally similar to&nbsp; something that you might find online somewhere.&nbsp;

So we want to keep iterating and release an ARC&nbsp; 2.0 version later this year. When we do that,&nbsp;&nbsp; we're going to want to make the old private&nbsp; test set available. Maybe we won't be releasing&nbsp;&nbsp; it publicly, but what we could do is just&nbsp;

create a test server where you can query,&nbsp;&nbsp; get a task, and submit a solution. Of course you&nbsp; can use whatever frontier model you want there.&nbsp; Because you actually have to query this API,&nbsp; you're making sure that no one is going to&nbsp;&nbsp;

accidentally train on this data. It's&nbsp; unlike the current public ARC data,&nbsp;&nbsp; which is literally on GitHub. There's actually no&nbsp; question about whether the models are trained on&nbsp;&nbsp; it. They are because they train on GitHub.

By gating access to requiring this API,&nbsp;&nbsp; we would avoid this issue. For people who want&nbsp; to try whatever technique they have in mind,&nbsp;&nbsp; using whatever resources they want, that&nbsp; would be a way for them to get an answer.&nbsp;

I wonder what might happen. I'm not sure.&nbsp; One answer is that they come up with a&nbsp;&nbsp; whole new algorithm for AI with some explicit&nbsp; program synthesis. Now we're on a new track.&nbsp;&nbsp; Another is that they did something hacky with the&nbsp;

existing models in a way that actually is valid,&nbsp;&nbsp; which reveals that maybe intelligence is&nbsp; more of getting things to the right part&nbsp;&nbsp; of the distribution. Then it can reason. In that world, that will be interesting.&nbsp;&nbsp;

Maybe that'll indicate that you had to do&nbsp; something hacky with current models. As&nbsp;&nbsp; they get better you won't have to do something&nbsp; hacky. I'm also going to be very curious to see&nbsp;&nbsp; if these multimodal models will natively&nbsp;

perform much better at ARC-like tests.&nbsp; If ARC survives three months from here, we'll up&nbsp; the prize. We're about to make a really important&nbsp;&nbsp; moment of contact with reality by blowing up&nbsp; the prize, putting a much bigger prize pool&nbsp;&nbsp;

against it. We're going to learn really quickly&nbsp; if there's a lot of low-hanging fruit ideas.&nbsp; Again, I think new ideas are needed. Anyone&nbsp; listening might have the idea in their head.&nbsp;&nbsp; I'd encourage everyone to give it a try.&nbsp;

As time goes on, that adds strength to the&nbsp;&nbsp; argument that we've stalled out in progress&nbsp; and that new ideas are necessary to beat ARC.&nbsp; Yeah, that's the point of having a money&nbsp; prize. You attract more people and you get&nbsp;&nbsp;

them to try to solve it. If there's an easy&nbsp; way to hack the benchmark, that reveals that&nbsp;&nbsp; the benchmark is flawed. You’re going to know&nbsp; about it. In fact, that was the point of the&nbsp;&nbsp; original Kaggle competition for ARC back in&nbsp;

2020. I was running this competition because&nbsp;&nbsp; I had released this dataset and I wanted to&nbsp; know if it was hackable, if you could cheat.&nbsp; There was a small money prize at the time. It&nbsp; was like $20K. This was right around the same&nbsp;&nbsp;

time as GPT-3 was released. People of course&nbsp; tried GPT-3 on the public data. It scored&nbsp;&nbsp; zero. What the first contest taught us is that&nbsp; there is no obvious shortcut. Now there's more&nbsp;&nbsp; money. There's going to be more people looking&nbsp;

into it. We're going to find out. We're going&nbsp;&nbsp; to see if the benchmark is going to survive. Let’s say we end up with a solution that is&nbsp;&nbsp; not like trying to brute force the space of&nbsp; possible ARC tasks. It’s just trained on core&nbsp;&nbsp;

knowledge. I don't think it's necessarily going&nbsp; to be in and of itself AGI, but it's probably&nbsp;&nbsp; going to be a huge milestone on the way to AGI.&nbsp; What it represents is the ability to synthesize&nbsp;&nbsp; a problem-solving program from just two or three&nbsp;

examples. That alone is a new way to program.&nbsp; It's an entirely new paradigm for software&nbsp; development. You can start programming&nbsp;&nbsp; potentially quite complex programs that&nbsp; will generalize very well. Instead of&nbsp;&nbsp;

programming them by coming up with the shape of&nbsp; the program in your mind and then typing it up,&nbsp;&nbsp; you're actually just showing the computer what&nbsp; output you want. You let the computer figure&nbsp;&nbsp; it out. That's what is extremely powerful.

I want to riff a little bit on what kinds&nbsp;&nbsp; of solutions might be possible here,&nbsp; and which you would consider defeating&nbsp;&nbsp; the purpose of ARC vs. which are valid. Here's one I'll mention. My friends Ryan&nbsp;&nbsp;

and Buck stayed up last night because&nbsp; I told them about this. They were like,&nbsp;&nbsp; "oh, of course LLMs can solve this." Good. Thank you for spreading the word.&nbsp; They were trying to prompt Claude Opus on this and&nbsp;

they say they got 25% on the public ARC test. What&nbsp;&nbsp; they did was have other examples of some of the&nbsp; ARC tests and in context explain the reasoning&nbsp;&nbsp; of why you went from one output to another&nbsp; output and now you have the current problem.&nbsp;&nbsp;

I think there was also expressing the JSON in&nbsp; a way that is more amenable to the tokenizer.&nbsp; Another thing was using the code interpreter.&nbsp; Do you think the code interpreter, which keeps&nbsp;&nbsp; getting better as these models get smarter, is&nbsp;

just the program synthesis right there? What&nbsp;&nbsp; they were able to do was get the actual&nbsp; output of the cells, that JSON output,&nbsp;&nbsp; through the code interpreter, like “write the&nbsp; Python program that gets the right output here.”&nbsp;

Do you think that the program synthesis&nbsp; kind of research you're talking about&nbsp;&nbsp; will just look like using the code&nbsp; interpreter in large language models?&nbsp; I think whatever solution we see that&nbsp;

will score well is probably going to&nbsp;&nbsp; need to leverage some aspects from deep&nbsp; learning models and LLMs in particular.&nbsp;&nbsp; We've shown already that LLMs can do quite&nbsp; well. That's basically the Jack Cole approach.&nbsp;

We've also shown that pure discrete program search&nbsp; from a small DSL does very well. Before Jack Cole,&nbsp;&nbsp; this was the state of the art. In&nbsp; fact, it's still extremely close to&nbsp;&nbsp; the state of the art and there's no deep&nbsp;

learning involved at all in these models.&nbsp; We have two approaches that have basically no&nbsp; overlap, that are doing quite well. They're&nbsp;&nbsp; very much at two opposite ends of one&nbsp; spectrum. On one end, you have these&nbsp;&nbsp;

extremely large banks of millions of vector&nbsp; programs, but very shallow recombination,&nbsp;&nbsp; simplistic recombination. On the other end, you&nbsp; have very simplistic DSLs, 100-200 primitives,&nbsp;&nbsp; but very deep, very sophisticated program search.

The solution is going to be somewhere in between.&nbsp;&nbsp; The people who are going to be winning the ARC&nbsp; competition and making the most progress towards&nbsp;&nbsp; near-term AGI are going to be those that manage to&nbsp; merge the deep learning paradigm and the discrete&nbsp;&nbsp;

program search paradigm into one elegant way. You asked what would be legitimate and what&nbsp;&nbsp; would be cheating. If you want to add a code&nbsp; interpreter to the system, I think that's great.&nbsp;&nbsp; That's legitimate. The part that would be cheating&nbsp;

is trying to anticipate what might be in the test,&nbsp;&nbsp; like brute force the space of possible tasks and&nbsp; train a memorization system on that. You rely on&nbsp;&nbsp; the fact that you're generating so many&nbsp; tasks, millions and millions. Inevitably&nbsp;&nbsp;

there's going to be some overlap between what&nbsp; you're generating and what's in the test set.&nbsp; That's defeating the purpose of the benchmark&nbsp; because then you can just solve it with that and&nbsp;&nbsp; you need to adapt just by fetching a memorized&nbsp;

solution. Hopefully ARC will resist that, but&nbsp;&nbsp; no benchmark is perfect. Maybe there's a way to&nbsp; hack it. We're going to get an answer very soon.&nbsp; Although some amount of fine tuning is valid&nbsp; because they have to use open source language&nbsp;&nbsp;

models to compete here and they’re&nbsp; natively language. They’d need to&nbsp;&nbsp; be able to think in the ARC-type way. Yes. You want to input core knowledge,&nbsp;&nbsp; ARC-like core knowledge, into the model but&nbsp;

surely you don't need tens of millions of tasks&nbsp;&nbsp; to do this. Core knowledge is extremely basic. If you look at some of these ARC-type questions,&nbsp;&nbsp; I actually do think they rely a little bit&nbsp; on things I have seen throughout my life. For&nbsp;&nbsp;

example, something bounces off a wall and comes&nbsp; back and you see that pattern. I've played arcade&nbsp;&nbsp; games and I've seen Pong or something. For example, you see the Flynn effect&nbsp;&nbsp; and people's intelligence, as measured on&nbsp;

Raven's progressive matrices, increasing&nbsp;&nbsp; on these kinds of questions. It's probably a&nbsp; similar story where since childhood now, we&nbsp;&nbsp; actually see these sorts of patterns in&nbsp; TV and whatever, these spatial patterns.  &nbsp;

So I don't think this is core knowledge. This&nbsp; is actually also part of the “fine-tuning” that&nbsp;&nbsp; humans have as they grow up, seeing&nbsp; different kinds of spatial patterns&nbsp;&nbsp; and trying to pattern match to them.

I would definitely file that under core&nbsp;&nbsp; knowledge. Core knowledge includes&nbsp; basic physics, for instance bouncing&nbsp;&nbsp; or trajectories. That would be included. But yeah, you're entirely right. The reason why,&nbsp;&nbsp;

as a human, you're able to quickly figure out&nbsp; the solution is because you have this set of&nbsp;&nbsp; building blocks, this set of patterns,&nbsp; in your mind that you can recombine.  &nbsp; Is core knowledge required to attain&nbsp;

intelligence?  For any algorithm you have,&nbsp;&nbsp; does the core knowledge have to be, in&nbsp; some sense, hardcoded? Or can even the&nbsp;&nbsp; core knowledge be learned through intelligence? Core knowledge can be learned. In the case of&nbsp;&nbsp;

humans, some amount of core knowledge is something&nbsp; that you're born with. We're actually born with&nbsp;&nbsp; a small amount of knowledge about the world&nbsp; we're going to live in. We're not blank slates.&nbsp; But most core knowledge is acquired through&nbsp;

experience. The thing with core knowledge is that&nbsp;&nbsp; it's not going to be acquired in school for&nbsp; instance. It's actually acquired very early&nbsp;&nbsp; in the first 3-4 years of your life. By&nbsp; age four, you have all the core knowledge&nbsp;&nbsp;

you're going to need as an adult. Interesting. On the prize itself,&nbsp;&nbsp; I'm super excited to see the open source versions,&nbsp; maybe with a Llama (70B) or something, and what&nbsp;&nbsp; people can score in the competition itself.&nbsp;

I’m also excited to test specifically the&nbsp;&nbsp; scaling hypothesis and I'm very curious if&nbsp; you can prompt on the public version of ARC.&nbsp; You won't be able to submit that to this&nbsp; competition itself but I'd be very curious to&nbsp;&nbsp;

see if people can crack that and get ARC working&nbsp; there. Would that update your views on AGI?&nbsp; It's really going to be motivating. We're going&nbsp; to keep running the contest until somebody puts a&nbsp;&nbsp; reproducible open source version in the public&nbsp;

domain. Even if somebody privately beats the&nbsp;&nbsp; ARC eval, we're going to still keep the prize&nbsp; money until someone can reproduce it and put&nbsp;&nbsp; the public reproducible version out there. Exactly. The goal is to accelerate progress&nbsp;&nbsp;

towards AGI. A key part of that is that any&nbsp; meaningful bits of progress need to be shared,&nbsp;&nbsp; need to be public, so everyone can know about it&nbsp; and try to iterate on it. If there's no sharing,&nbsp;&nbsp; there's no progress.

What I'm especially&nbsp;&nbsp; curious about is disaggregating the&nbsp; bets. Can we make an open version of&nbsp;&nbsp; this or is this just possible with&nbsp; scaling? We can test both of them&nbsp;&nbsp;

based on the public and the private version. We're making contact with reality as well with&nbsp;&nbsp; this. We're gonna learn a lot about what the&nbsp; actual limits of the compute are. If someone&nbsp;&nbsp; showed up and said, “hey, here's a closed source&nbsp;

model and I'm getting +50% with it,” that would&nbsp;&nbsp; probably update us. We’d think, “okay, perhaps we&nbsp; should increase the amount of compute that we give&nbsp;&nbsp; on the private test set in order to balance.” Some of the decisions initially are somewhat&nbsp;&nbsp;

arbitrary in order to learn about what&nbsp; people want. What does progress look like?&nbsp;&nbsp; Both of us are committed to evolving&nbsp; it over time in order to be the best&nbsp;&nbsp; or the closest to perfect as we can get it

Awesome. Where can people go to learn more about&nbsp;&nbsp; the prize and maybe try their hand at it? Arcprize.org. It’s live now.&nbsp; It goes live today. One million&nbsp; dollars is on the line, people.&nbsp;

Thank you guys for coming on the podcast.&nbsp; It's super fun to go through all the cruxes on&nbsp;&nbsp; intelligence and get a different perspective and&nbsp; also to announce a prize here. This is awesome.&nbsp; Thank you for helping break the news.

Thank you for having us.

<!-- YOUTUBE_TRANSCRIPT_END -->
