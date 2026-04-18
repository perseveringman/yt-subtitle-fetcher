---
archive_version: 2
source: "youtube"
source_type: "playlist"
video_id: "qTogNUV3CAI"
title: "Demis Hassabis — Scaling, superhuman AIs, AlphaZero atop LLMs, AlphaFold"
video_url: "https://www.youtube.com/watch?v=qTogNUV3CAI"
channel_name: "Dwarkesh Patel"
channel_id: "UCXl4i9dYBrFOabk0xGmbkRA"
uploader_id: "@DwarkeshPatel"
published_at: "2024-02-28T16:03:46.000Z"
upload_date: "2024-02-28"
duration_seconds: 3694
duration_human: "1:01:34"
view_count: 213516
like_count: 4833
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-18T14:03:18.897Z"
---

# Demis Hassabis — Scaling, superhuman AIs, AlphaZero atop LLMs, AlphaFold

## Video Summary
- source_type: playlist
- video_url: https://www.youtube.com/watch?v=qTogNUV3CAI
- video_id: qTogNUV3CAI
- channel_name: Dwarkesh Patel
- channel_id: UCXl4i9dYBrFOabk0xGmbkRA
- uploader_id: @DwarkeshPatel
- uploader_url: https://www.youtube.com/@DwarkeshPatel
- published_at: 2024-02-28T16:03:46.000Z
- upload_date: 2024-02-28
- duration: 1:01:34
- view_count: 213516
- like_count: 4833
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Here is my episode with Demis Hassabis, CEO of Google DeepMind. We discuss:
* Why scaling is an artform
* Adding search, planning, & AlphaZero type training atop LLMs
* Making sure rogue nations can't steal weights
* The right way to align superhuman AIs and do an intelligence explosion

𝐄𝐏𝐈𝐒𝐎𝐃𝐄 𝐋𝐈𝐍𝐊𝐒
* Transcript: https://www.dwarkeshpatel.com/p/demis-hassabis
* Apple Podcasts: https://podcasts.apple.com/us/podcast/demis-hassabis-scaling-superhuman-ais-alphazero-atop/id1516093381?i=1000647410338
* Spotify: https://open.spotify.com/episode/6SWbwjYPs5WevIoCCiSByS?si=nCVFSRr7QGGI_STgbrOBDA
* Follow me on Twitter: https://twitter.com/dwarkesh_sp

𝐓𝐈𝐌𝐄𝐒𝐓𝐀𝐌𝐏𝐒
00:00:00 - Nature of intelligence
00:05:56 - RL atop LLMs
00:16:31 - Scaling and alignment
00:24:13 - Timelines and intelligence explosion
00:28:42 - Gemini training
00:35:30 - Governance of superhuman AIs
00:40:42 - Safety, open source, and security of weights
00:47:00 - Multimodal and further progress
00:54:18 - Inside Google DeepMind

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

Today it is a true honor to speak with Demis&nbsp; Hassabis, who is the CEO of DeepMind. Demis,&nbsp;&nbsp; welcome to the podcast. Thanks for having me.&nbsp; First question, given your neuroscience&nbsp;

background, how do you think about intelligence?&nbsp;&nbsp; Specifically, do you think it’s one higher-level&nbsp; general reasoning circuit, or do you think it’s&nbsp;&nbsp; thousands of independent subskills and heuristics? It’s interesting because intelligence is so&nbsp;&nbsp;

broad and what we use it for is so generally&nbsp; applicable. I think that suggests there must&nbsp;&nbsp; be high-level common algorithmic themes&nbsp; around how the brain processes the world&nbsp;&nbsp; around us. Of course, there are specialized&nbsp;

parts of the brain that do specific things,&nbsp;&nbsp; but I think there are probably some underlying&nbsp; principles that underpin all of that.&nbsp; How do you make sense of the fact that&nbsp; in these LLMs, when you give them a lot&nbsp;&nbsp;

of data in any specific domain, they&nbsp; tend to get asymmetrically better in&nbsp;&nbsp; that domain. Wouldn’t we expect a general&nbsp; improvement across all the different areas?&nbsp; First of all, I think you do sometimes get&nbsp;

surprising improvement in other domains when&nbsp;&nbsp; you improve in a specific domain. For example,&nbsp; when these large models improve at coding,&nbsp;&nbsp; that can actually improve their general reasoning.&nbsp; So there is evidence of some transfer although we&nbsp;&nbsp;

would like a lot more evidence of that. But&nbsp; that’s how the human brain learns too. If&nbsp;&nbsp; we experience and practice a lot of things&nbsp; like chess, creative writing, or whatever,&nbsp;&nbsp; we also tend to specialize and get better at&nbsp;

that specific thing even though we’re using&nbsp;&nbsp; general learning techniques and general learning&nbsp; systems in order to get good at that domain.&nbsp; What’s been the most surprising example&nbsp; of this kind of transfer for you? Will you&nbsp;&nbsp;

see language and code, or images and text? I’m hoping we’re going to see a lot more of&nbsp;&nbsp; this kind of transfer, but I think things&nbsp; like getting better at coding and math,&nbsp;&nbsp; and then generally improving your reasoning.&nbsp;

That is how it works with us as human learners.&nbsp;&nbsp; But I think it’s interesting seeing&nbsp; that in these artificial systems.&nbsp; And can you see the sort of mechanistic&nbsp; way, in the language and code example,&nbsp;&nbsp;

in which you’ve found the place in a&nbsp; neural network that’s getting better&nbsp;&nbsp; with both the language and the code?&nbsp; Or is that too far down the weeds?&nbsp; I don’t think our analysis techniques are quite&nbsp;

sophisticated enough to be able to hone in on&nbsp;&nbsp; that. I think that’s actually one of the areas&nbsp; where a lot more research needs to be done,&nbsp;&nbsp; the kind of mechanistic analysis of the&nbsp; representations that these systems build&nbsp;&nbsp;

up. I sometimes like to call it virtual brain&nbsp; analytics. In a way, it’s a bit like doing fMRI,&nbsp;&nbsp; or single-cell recording from a real brain. What&nbsp; are the analogous analysis techniques for these&nbsp;&nbsp; artificial minds? There’s a lot of great work&nbsp;

going on in this sort of stuff. People like&nbsp;&nbsp; Chris Olah, I really like his work. I think a lot&nbsp; of computational neuroscience techniques can be&nbsp;&nbsp; brought to bear on analyzing the current&nbsp; systems we’re building. In fact, I try to&nbsp;&nbsp;

encourage a lot of my computational neuroscience&nbsp; friends to start thinking in that direction and&nbsp;&nbsp; applying their know-how to the large models. What do other AI researchers not understand&nbsp;&nbsp; about human intelligence that you have some sort&nbsp;

of insight on, given your neuroscience background?&nbsp; I think neuroscience has added a lot, if you look&nbsp; at the last 10-20 years that we’ve been at it.&nbsp;&nbsp; I’ve been thinking about this for 30+ years.&nbsp; In the earlier days of the new wave of AI,&nbsp;&nbsp;

neuroscience was providing a lot&nbsp; of interesting directional clues,&nbsp;&nbsp; things like reinforcement learning and combining&nbsp; that with deep learning. Some of our pioneering&nbsp;&nbsp; work we did there were things like experience&nbsp;

replay and even the notion of attention,&nbsp;&nbsp; which has become super important. A lot of those&nbsp; original inspirations came from some understanding&nbsp;&nbsp; about how the brain works, although not the&nbsp; exact specifics of course. One is an engineered&nbsp;&nbsp;

system and the other one’s a natural system.&nbsp; It’s not so much about a one-to-one mapping&nbsp;&nbsp; of a specific algorithm, but more so inspirational&nbsp; direction. Maybe it’s some ideas for architecture,&nbsp;&nbsp; or algorithmic ideas, or representational&nbsp;

ideas. The brain is an existence proof that&nbsp;&nbsp; general intelligence is possible at all. I think&nbsp; the history of human endeavors has been such that&nbsp;&nbsp; once you know something’s possible it’s easier to&nbsp; push hard in that direction, because you know it’s&nbsp;&nbsp;

a question of effort, a question of when and not&nbsp; if. That allows you to make progress a lot more&nbsp;&nbsp; quickly. So I think neuroscience has inspired&nbsp; a lot of the thinking, at least in a soft way,&nbsp;&nbsp; behind where we are today. As for going forward,&nbsp;

I think there’s still a lot of interesting things&nbsp;&nbsp; to be resolved around planning. How does the&nbsp; brain construct the right world models? I&nbsp;&nbsp; studied how the brain does imagination, or you&nbsp; can think of it as mental simulation. How do we&nbsp;&nbsp;

create very rich visual spatial simulations&nbsp; of the world in order for us to plan better?&nbsp; Actually, I’m curious how you think that will&nbsp; interface with LLMs. Obviously, DeepMind is&nbsp;&nbsp; at the frontier and has been for many years with&nbsp;

systems like AlphaZero and so forth, having these&nbsp;&nbsp; agents which can think through different steps&nbsp; to get to an end outcome. Is there a path for&nbsp;&nbsp; LLMs to have this tree search kind of thing&nbsp; on top of them? How do you think about this?&nbsp;

I think that’s a super promising direction. We’ve&nbsp; got to carry on improving the large models. We’ve&nbsp;&nbsp; got to carry on making them more and more accurate&nbsp; predictors of the world, making them more and&nbsp;&nbsp; more reliable world models. That’s clearly a&nbsp;

necessary, but probably insufficient component&nbsp;&nbsp; of an AGI system. On top of that, we’re working&nbsp; on things like AlphaZero-like planning mechanisms&nbsp;&nbsp; on top that make use of that model in order to&nbsp; make concrete plans to achieve certain goals&nbsp;&nbsp;

in the world. Perhaps chaining thought, lines of&nbsp; reasoning, together and using search to explore&nbsp;&nbsp; massive spaces of possibility. I think that’s&nbsp; kind of missing from our current large models.&nbsp; How do you get past the immense amount&nbsp;

of compute that these approaches tend to&nbsp;&nbsp; require? Even the AlphaGo system was a pretty&nbsp; expensive system because you sort of had to run&nbsp;&nbsp; an LLM on each node of the tree. How do you&nbsp; anticipate that’ll get made more efficient?&nbsp;

One thing is Moore’s law tends to help. Over every&nbsp; year more computation comes in. But we focus a lot&nbsp;&nbsp; on sample-efficient methods and reusing existing&nbsp; data, things like experience replay and also just&nbsp;&nbsp; looking at more efficient ways. The better your&nbsp;

world model is, the more efficient your search&nbsp;&nbsp; can be. One example I always give is AlphaZero,&nbsp; our system to play Go and chess and any game.&nbsp;&nbsp; It’s stronger than human world champion level in&nbsp; all these games and it uses a lot less search than&nbsp;&nbsp;

a brute force method like Deep Blue to play&nbsp; chess. One of these traditional Stockfish or&nbsp;&nbsp; Deep Blue systems would maybe look at millions&nbsp; of possible moves for every decision it’s going&nbsp;&nbsp; to make. AlphaZero and AlphaGo may look at around&nbsp;

tens of thousands of possible positions in order&nbsp;&nbsp; to make a decision about what to move next. A&nbsp; human grandmaster or world champion probably&nbsp;&nbsp; only looks at a few hundred moves, even the top&nbsp; ones, in order to make their very good decision&nbsp;&nbsp;

about what to play next. So that suggests&nbsp; that the brute force systems don’t have any&nbsp;&nbsp; real model other than the heuristics about the&nbsp; game. AlphaGo has quite a decent model but the&nbsp;&nbsp; top human players have a much richer, much more&nbsp;

accurate model of Go or chess. That allows them&nbsp;&nbsp; to make world-class decisions on a very small&nbsp; amount of search. So I think there’s a sort of&nbsp;&nbsp; trade-off there. If you improve the models, then&nbsp; I think your search can be more efficient and&nbsp;&nbsp;

therefore you can get further with your search. I have two questions based on that. With AlphaGo,&nbsp;&nbsp; you had a very concrete win condition: at the end&nbsp; of the day, do I win this game of Go or not? You&nbsp;&nbsp; can reinforce on that. When you’re thinking of&nbsp;

an LLM putting out thought, do you think there&nbsp;&nbsp; will be this ability to discriminate in the end,&nbsp; whether that was a good thing to reward or not?&nbsp; Of course that’s why we pioneered, and&nbsp; what DeepMind is sort of famous for,&nbsp;&nbsp;

using games as a proving ground. That’s partly&nbsp; because it’s efficient to research in that domain.&nbsp;&nbsp; The other reason is, obviously, it’s extremely&nbsp; easy to specify a reward function. Winning the&nbsp;&nbsp; game or improving the score, something like that&nbsp;

is built into most games. So that is one of the&nbsp;&nbsp; challenges of real-world systems. How does one&nbsp; define the right objective function, the right&nbsp;&nbsp; reward function, and the right goals? How does one&nbsp; specify them in a general way, but specific enough&nbsp;&nbsp;

that one actually points the system in the right&nbsp; direction? For real-world problems, that can be a&nbsp;&nbsp; lot harder. But actually, if you think about it in&nbsp; even scientific problems, there are usually ways&nbsp;&nbsp; that you can specify the goal that you’re after.

When you think about human intelligence,&nbsp;&nbsp; you were just saying that humans thinking about&nbsp; these thoughts are just super sample-efficient.&nbsp;&nbsp; Einstein coming up with relativity, right?&nbsp; There’s thousands of possible permutations&nbsp;&nbsp;

of the equations. Do you think it’s also&nbsp; this sense of different heuristics like,&nbsp;&nbsp; “I’m going to try out this approach instead&nbsp; of this”? Or is it a totally different way of&nbsp;&nbsp; approaching and coming up with that solution&nbsp;

than what AlphaGo does to plan the next move?&nbsp; I think it’s different because our brains are&nbsp; not built for doing Monte Carlo tree search. It’s&nbsp;&nbsp; just not the way our organic brains work. I think&nbsp; that people like Einstein, in order to compensate&nbsp;&nbsp;

for that, have used their intuition—and maybe we&nbsp; can come to what intuition is—and their knowledge&nbsp;&nbsp; and their experience to build in Einstein’s case,&nbsp; extremely accurate models of physics that include&nbsp;&nbsp; mental simulations. If you read about Einstein and&nbsp;

how he came up with things, he used to visualize&nbsp;&nbsp; and really feel what these physical systems&nbsp; should be like, not just the mathematics of&nbsp;&nbsp; it. He had a really intuitive feel for what they&nbsp; would be like in reality. That allowed him to&nbsp;&nbsp;

think these thoughts that were very outlandish&nbsp; at the time. So I think that that gets to the&nbsp;&nbsp; sophistication of the world models that we’re&nbsp; building. Imagine your world model can get you&nbsp;&nbsp; to a certain node in a tree that you’re searching,&nbsp;

and then you just do a little bit of search around&nbsp;&nbsp; that leaf node and that gets you to these original&nbsp; places. Obviously, if your model and your judgment&nbsp;&nbsp; on that model is very, very good, then you&nbsp; can pick which leaf nodes you should expand&nbsp;&nbsp;

with search much more accurately. So overall, you&nbsp; therefore do a lot less search. I mean, there’s&nbsp;&nbsp; no way that any human could do a kind of brute&nbsp; force search over any kind of significant space.&nbsp; A big open question right now is whether RL&nbsp;

will allow these models to use the self-play&nbsp;&nbsp; synthetic data to get over data bottlenecks.&nbsp; It sounds like you’re optimistic about this?&nbsp; I’m very optimistic about that. First of all,&nbsp; there’s still a lot more data that can be used,&nbsp;&nbsp;

especially if one views multimodal and&nbsp; video and these kinds of things. Obviously,&nbsp;&nbsp; society is adding more data all the time to&nbsp; the Internet and things like that. I think that&nbsp;&nbsp; there’s a lot of scope for creating synthetic&nbsp;

data. We’re looking at that in different ways,&nbsp;&nbsp; partly through simulation, using very&nbsp; realistic game environments, for example,&nbsp;&nbsp; to generate realistic data, but also self-play.&nbsp; That’s where systems interact with each other&nbsp;&nbsp;

or converse with each other. It worked very well&nbsp; for us with AlphaGo and AlphaZero where we got the&nbsp;&nbsp; systems to play against each other and actually&nbsp; learn from each other’s mistakes and build up a&nbsp;&nbsp; knowledge base that way. I think there are some&nbsp;

good analogies for that. It’s a little bit more&nbsp;&nbsp; complicated to build a general kind of world data. How do you get to the point with these&nbsp;&nbsp; models where the synthetic data they’re&nbsp; outputting on the self-play they’re doing&nbsp;&nbsp;

is not just more of what’s already in their&nbsp; data set, but something they haven’t seen&nbsp;&nbsp; before? To actually improve the abilities. I think there’s a whole science needed there.&nbsp;&nbsp; I think we’re still in the nascent stage of&nbsp;

this, of data curation and data analysis and&nbsp;&nbsp; actually analyzing the holes that you have in&nbsp; your data distribution. This is important for&nbsp;&nbsp; things like fairness and bias and other stuff.&nbsp; To remove that from the system is to really make&nbsp;&nbsp;

sure that your data set is representative&nbsp; of the distribution you’re trying to learn.&nbsp;&nbsp; There are many tricks there one can use, like&nbsp; overweighting or replaying certain parts of the&nbsp;&nbsp; data. Or if you identify some gap in your data&nbsp;

set, you could imagine that’s where you put your&nbsp;&nbsp; synthetic generation capabilities to work on. Nowadays, people are paying attention to the RL&nbsp;&nbsp; stuff that DeepMind did many years before. What&nbsp; are the early research directions, or something&nbsp;&nbsp;

that was done way back in the past, that you think&nbsp; will be a big deal but people just haven’t been&nbsp;&nbsp; paying attention to it? There was a time where&nbsp; people weren’t paying attention to scaling. What’s&nbsp;&nbsp; the thing now that is totally underrated?

Well, I think that the history of the last&nbsp;&nbsp; couple of decades has been things coming&nbsp; in and out of fashion, right? A while ago,&nbsp;&nbsp; maybe five-plus years ago, we were pioneering&nbsp; with AlphaGo and before that DQN. It was the&nbsp;&nbsp;

first system that worked on Atari, our first&nbsp; big system really more than ten years ago now,&nbsp;&nbsp; that scaled up Q-learning and reinforcement&nbsp; learning techniques and combined that with deep&nbsp;&nbsp; learning to create deep reinforcement learning.&nbsp;

We used that to scale up to master some pretty&nbsp;&nbsp; complex tasks like playing Atari games just from&nbsp; the pixels. I do actually think a lot of those&nbsp;&nbsp; ideas need to come back in again and, as we talked&nbsp; about earlier, combine them with the new advances&nbsp;&nbsp;

in large models and large multimodal models, which&nbsp; are obviously very exciting as well. So I do think&nbsp;&nbsp; there’s a lot of potential for combining some of&nbsp; those older ideas together with the newer ones.&nbsp; Is there any potential for the AGI to eventually&nbsp;

come from a pure RL approach? The way we’re&nbsp;&nbsp; talking about it, it sounds like the LLM will form&nbsp; the right prior and then this sort of tree search&nbsp;&nbsp; will go on top of that. Or is it a possibility&nbsp; that it comes completely out of the dark?&nbsp;

Theoretically, I think there’s no reason why you&nbsp; couldn’t go full AlphaZero-like on it. There are&nbsp;&nbsp; some people here at Google DeepMind and in the&nbsp; RL community who work on that, fully assuming no&nbsp;&nbsp; priors, no data, and just building all knowledge&nbsp;

from scratch. I think that’s valuable because&nbsp;&nbsp; those ideas and those algorithms should also&nbsp; work when you have some knowledge too. Having&nbsp;&nbsp; said that, I think by far the quickest way&nbsp; to get to AGI, and the most plausible way,&nbsp;&nbsp;

is to use all the knowledge that’s existing in the&nbsp; world right now that we’ve collected from things&nbsp;&nbsp; like the Web. We have these scalable algorithms,&nbsp; like transformers, that are capable of ingesting&nbsp;&nbsp; all of that information. So I don’t see why you&nbsp;

wouldn’t start with a model as a kind of prior,&nbsp;&nbsp; or to build on it and to make predictions that&nbsp; help bootstrap your learning. I just think it&nbsp;&nbsp; doesn’t make sense not to make use of that. So my&nbsp; betting would be that the final AGI system will&nbsp;&nbsp;

have these large multimodal models as part&nbsp; of the overall solution, but they probably&nbsp;&nbsp; won’t be enough on their own. You’ll need&nbsp; this additional planning search on top.&nbsp; This sounds like the answer to the question&nbsp;

I’m about to ask. As somebody who’s been in&nbsp;&nbsp; this field for a long time and seen different&nbsp; trends come and go, what do you think the&nbsp;&nbsp; strong version of the scaling hypothesis gets&nbsp; right and what does it get wrong? The idea that&nbsp;&nbsp;

you just throw enough compute at a wide enough&nbsp; distribution of data and you get intelligence.&nbsp; My view is that this is kind of an empirical&nbsp; question right now. I think it was pretty&nbsp;&nbsp; surprising to almost everyone, including the&nbsp;

people who first worked on the scaling hypotheses,&nbsp;&nbsp; how far it’s gone. In a way, I look at the&nbsp; large models today and I think they’re almost&nbsp;&nbsp; unreasonably effective for what they are. I think&nbsp; it’s pretty surprising some of the properties that&nbsp;&nbsp;

emerge. In my opinion, they’ve clearly got some&nbsp; form of concepts and abstractions and things&nbsp;&nbsp; like that. I think if we were talking five-plus&nbsp; years ago, I would have said to you that maybe&nbsp;&nbsp; we need an additional algorithmic breakthrough&nbsp;

in order to do that, maybe more like how the&nbsp;&nbsp; brain works. I think that’s still true if we&nbsp; want explicit abstract concepts, neat concepts,&nbsp;&nbsp; but it seems that these systems can implicitly&nbsp; learn that. Another really interesting, unexpected&nbsp;&nbsp;

thing was that these systems have some sort of&nbsp; grounding even though they don’t experience the&nbsp;&nbsp; world multimodally, at least until more recently&nbsp; when we have the multimodal models. The amount of&nbsp;&nbsp; information and models that can be built up just&nbsp;

from language is surprising. I think that I’d&nbsp;&nbsp; have some hypotheses about why that is. I think&nbsp; we get some grounding through the RLHF feedback&nbsp;&nbsp; systems because obviously the human raters are&nbsp; by definition, grounded people. We’re grounded in&nbsp;&nbsp;

reality, so our feedback is also grounded. Perhaps&nbsp; there’s some grounding coming in through there.&nbsp;&nbsp; Also if you’re able to ingest all of it, maybe&nbsp; language contains more grounding than linguists&nbsp;&nbsp; thought before. So it actually raises some very&nbsp;

interesting philosophical questions that people&nbsp;&nbsp; haven’t even really scratched the surface of&nbsp; yet. Looking at the advances that have been made,&nbsp;&nbsp; it’s quite interesting to think about where it’s&nbsp; going to go next. In terms of your question of&nbsp;&nbsp;

large models, I think we’ve got to push scaling as&nbsp; hard as we can and that’s what we’re doing here.&nbsp;&nbsp; It’s an empirical question, whether that will&nbsp; hit an asymptote or a brick wall, and there are&nbsp;&nbsp; different people who argue about that. I think&nbsp;

we should just test it. I think no one knows.&nbsp;&nbsp; In the meantime, we should also double down on&nbsp; innovation and invention. This is something where&nbsp;&nbsp; Google Research and DeepMind and Google Brain have&nbsp; pioneered many, many things over the last decade.&nbsp;&nbsp;

That’s our bread and butter. You can think of&nbsp; half our effort as having to do with scaling and&nbsp;&nbsp; half our efforts having to do with inventing the&nbsp; next architectures and the next algorithms that&nbsp;&nbsp; will be needed, knowing that larger and larger&nbsp;

scaled models are coming down the line. So my&nbsp;&nbsp; betting right now, but it’s a loose betting, is&nbsp; that you need both. I think you’ve got to push&nbsp;&nbsp; both of them as hard as possible and we’re&nbsp; in a lucky position that we can do that.&nbsp;

I want to ask more about the grounding. You can&nbsp; imagine two things that might change which would&nbsp;&nbsp; make the grounding more difficult. One is that&nbsp; as these models get smarter, they are going to&nbsp;&nbsp; be able to operate in domains where we just can’t&nbsp;

generate enough human labels, just because we’re&nbsp;&nbsp; not smart enough. If it does a million-line&nbsp; pull request, how do we tell it, for example,&nbsp;&nbsp; this is within the constraints of our morality&nbsp; and the end goal we wanted and this isn’t? The&nbsp;&nbsp;

other thing has to do with what you were saying&nbsp; about compute. So far we’ve been doing next token&nbsp;&nbsp; prediction and in some sense it’s a guardrail,&nbsp; because you have to talk as a human would talk&nbsp;&nbsp; and think as a human would think. Now, additional&nbsp;

compute is maybe going to come in the form of&nbsp;&nbsp; reinforcement learning where it’s just getting&nbsp; to the objective and we can’t really trace how&nbsp;&nbsp; you got there. When you combine those two, how&nbsp; worried are you that the grounding goes away?&nbsp;

I think if it’s not properly grounded, the system&nbsp; won’t be able to achieve those goals properly. In&nbsp;&nbsp; a sense, you have to have some grounding for&nbsp; a system to actually achieve goals in the real&nbsp;&nbsp; world. I do actually think that these systems, and&nbsp;

things like Gemini, are becoming more multimodal.&nbsp;&nbsp; As we start ingesting things like video and&nbsp; audiovisual data as well as text data, then the&nbsp;&nbsp; system starts correlating those things together.&nbsp; I think that is a form of proper grounding. So&nbsp;&nbsp;

I do think our systems are going to start to&nbsp; understand the physics of the real world better.&nbsp; Then one could imagine the active version&nbsp; of that as a very realistic simulation or&nbsp;&nbsp; game environment where you’re starting to learn&nbsp;

about what your actions do in the world and how&nbsp;&nbsp; that affects the world itself. The world stays&nbsp; itself, but it also affects what next learning&nbsp;&nbsp; episode you’re getting. So these RL agents&nbsp; we’ve always been working on and pioneered,&nbsp;&nbsp;

like AlphaZero and AlphaGo, actually are&nbsp; active learners. What they decide to do&nbsp;&nbsp; next affects what next learning piece of data&nbsp; or experience they’re going to get. So there’s&nbsp;&nbsp; this very interesting sort of feedback loop.

And of course, if we ever want to be good at&nbsp;&nbsp; things like robotics, we’re going to have&nbsp; to understand how to act in the real world.&nbsp; So there’s grounding in terms of whether&nbsp; the capabilities will be able to proceed,&nbsp;&nbsp;

whether they will be enough in touch with&nbsp; reality to do the things we want. There’s&nbsp;&nbsp; another sense of grounding in that we’ve gotten&nbsp; lucky that since they’re trained on human thought,&nbsp;&nbsp; they maybe think like a human. To what extent&nbsp;

does that stay true when more of the compute for&nbsp;&nbsp; training comes from just “did you get the right&nbsp; outcome” and it’s not guardrailed by “are you&nbsp;&nbsp; proceeding on the next token as a human would?”&nbsp; Maybe the broader question I’ll pose to you is,&nbsp;&nbsp;

and this is what I asked Shane as well, what&nbsp; would it take to align a system that’s smarter&nbsp;&nbsp; than a human? Maybe it thinks in alien concepts&nbsp; and you can’t really monitor the million-line pull&nbsp;&nbsp; request because you can’t really understand&nbsp;

the whole thing and you can’t give labels.&nbsp; This is something Shane and I, and many others&nbsp; here, have had at the forefront of our minds since&nbsp;&nbsp; before we started DeepMind because we planned for&nbsp; success. In 2010, no one was thinking about AI let&nbsp;&nbsp;

alone AGI. But we already knew that if we could&nbsp; make progress with these systems and these ideas,&nbsp;&nbsp; the technology created would be unbelievably&nbsp; transformative. So we were already thinking&nbsp;&nbsp; 20 years ago about what the consequences of that&nbsp;

would be, both positive and negative. Of course,&nbsp;&nbsp; the positive direction is amazing&nbsp; science, things like AlphaFold,&nbsp;&nbsp; incredible breakthroughs in health and science,&nbsp; and mathematical and scientific discovery. But we&nbsp;&nbsp;

also have to make sure these systems are&nbsp; sort of understandable and controllable.&nbsp; This will be a whole discussion in itself, but&nbsp; there are many, many ideas that people have&nbsp;&nbsp; such as more stringent eval systems. I think we&nbsp;

don’t have good enough evaluations and benchmarks&nbsp;&nbsp; for things like if the system can deceive you. Can&nbsp; it exfiltrate its own code or do other undesirable&nbsp;&nbsp; behaviors? There are also ideas of using AI, not&nbsp; general learning ones but maybe narrow AIs that&nbsp;&nbsp;

are specialized for a domain, to help us as the&nbsp; human scientists to analyze and summarize what the&nbsp;&nbsp; more general system is doing. So there’s narrow&nbsp; AI tools. I think that there’s a lot of promise&nbsp;&nbsp; in creating hardened sandboxes or simulations&nbsp;

that are hardened with cybersecurity arrangements&nbsp;&nbsp; around the simulation, both to keep the AI in&nbsp; and to keep hackers out. You could experiment&nbsp;&nbsp; a lot more freely within that sandbox domain.&nbsp; There’s many, many other ideas, including the&nbsp;&nbsp;

analysis stuff we talked about earlier, where&nbsp; we can analyze and understand what the concepts&nbsp;&nbsp; are that this system is building and what the&nbsp; representations are. So maybe then they’re not&nbsp;&nbsp; so alien to us and we can actually keep track&nbsp;

of the kind of knowledge that it’s building.&nbsp; Stepping back a bit, I’m curious&nbsp; what your timelines are. So Shane&nbsp;&nbsp; said his modal outcome is 2028. I think&nbsp; that’s maybe his median. What is yours?&nbsp;

I don’t have prescribed specific numbers to&nbsp; it because I think there’s so many unknowns&nbsp;&nbsp; and uncertainties. Human ingenuity and endeavor&nbsp; comes up with surprises all the time. So that&nbsp;&nbsp; could meaningfully move the timelines. I will&nbsp;

say that when we started DeepMind back in 2010,&nbsp;&nbsp; we thought of it as a 20-year project. And I&nbsp; think we’re on track actually, which is kind&nbsp;&nbsp; of amazing for 20-year projects because usually&nbsp; they’re always 20 years away. That’s the joke&nbsp;&nbsp;

about whatever, quantum, AI, take your pick. But&nbsp; I think we’re on track. So I wouldn’t be surprised&nbsp;&nbsp; if we had AGI-like systems within the next decade. Do you buy the model that once you have an AGI,&nbsp;&nbsp; you have a system that basically speeds up further&nbsp;

AI research? Maybe not in an overnight sense,&nbsp;&nbsp; but over the course of months and&nbsp; years you would have much faster&nbsp;&nbsp; progress than you would have otherwise had? I think that’s potentially possible. I think&nbsp;&nbsp;

it partly depends on what we, as a society,&nbsp; decide to use the first nascent AGI systems or&nbsp;&nbsp; proto-AGI systems for. Even the current LLMs seem&nbsp; to be pretty good at coding and we have systems&nbsp;&nbsp; like AlphaCode. We also have theorem proving&nbsp;

systems. So one could imagine combining these&nbsp;&nbsp; ideas together and making them a lot better. I&nbsp; could imagine these systems being quite good at&nbsp;&nbsp; designing and helping us build future versions&nbsp; of themselves, but we also have to think about&nbsp;&nbsp;

the safety implications of that of course. I’m curious what you think about that. I’m&nbsp;&nbsp; not saying this is happening this year, but&nbsp; eventually you’ll be developing a model where&nbsp;&nbsp; you think there’s some chance that it’ll be&nbsp;

capable of an intelligence explosion-like&nbsp;&nbsp; dynamic once it’s fully developed. What would&nbsp; have to be true of that model at that point where&nbsp;&nbsp; you’re comfortable continuing the development&nbsp; of the system? Something like, “I’ve seen these&nbsp;&nbsp;

specific evals, I’ve understood its internal&nbsp; thinking and its future thinking enough.”&nbsp; We need a lot more understanding of the systems&nbsp; than we do today before I would even be confident&nbsp;&nbsp; of explaining to you what we’d need to tick box&nbsp;

there. I think what we’ve got to do in the next&nbsp;&nbsp; few years, in the time before those systems start&nbsp; arriving, is come up with the right evaluations&nbsp;&nbsp; and metrics. Ideally formal proofs, but it’s going&nbsp; to be hard for these types of systems, so at least&nbsp;&nbsp;

empirical bounds around what these systems can do.&nbsp; That’s why I think about things like deception as&nbsp;&nbsp; being quite root node traits that you don’t want.&nbsp; If you’re confident that your system is exposing&nbsp;&nbsp; what it actually thinks, then that opens up&nbsp;

possibilities of using the system itself to&nbsp;&nbsp; explain aspects of itself to you. The way I think&nbsp; about that is like this. If I were to play a game&nbsp;&nbsp; of chess against Garry Kasparov, which I’ve played&nbsp; in the past, Magnus Carlsen, or the amazing chess&nbsp;&nbsp;

players of all time, I wouldn’t be able to come&nbsp; up with a move that they could. But they could&nbsp;&nbsp; explain to me why they came up with that move and&nbsp; I could understand it post hoc, right? That’s the&nbsp;&nbsp; sort of thing one could imagine. One of the&nbsp;

capabilities that we could make use of these&nbsp;&nbsp; systems is for them to explain it to us and even&nbsp; maybe get the proofs behind why they’re thinking&nbsp;&nbsp; something, certainly in a mathematical problem. Got it. Do you have a sense of what the converse&nbsp;&nbsp;

answer would be? So what would have to be&nbsp; true where tomorrow morning you’re like “oh,&nbsp;&nbsp; man, I didn’t anticipate this.” You see some&nbsp; specific observation tomorrow morning that&nbsp;&nbsp; makes you say “we got to stop Gemini 2 training.”

I could imagine that. This is where things like&nbsp;&nbsp; the sandbox simulations are important. I&nbsp; would hope we’re experimenting in a safe,&nbsp;&nbsp; secure environment when something very unexpected&nbsp; happens. There’s a new unexpected capability or&nbsp;&nbsp;

something that we didn’t want. We explicitly&nbsp; told the system we didn’t want it but then it&nbsp;&nbsp; did and it lied about it. These are the kinds&nbsp; of things where one would want to then dig in&nbsp;&nbsp; carefully. The systems that are around today are&nbsp;

not dangerous, in my opinion, but in a few years&nbsp;&nbsp; they might have potential. Then you would ideally&nbsp; pause and really get to the bottom of why it was&nbsp;&nbsp; doing those things before one continued. Going back to Gemini, I’m curious what the&nbsp;&nbsp;

bottlenecks were in the development.&nbsp; Why not immediately make it one order&nbsp;&nbsp; of magnitude bigger if scaling works? First of all, there are practical limits.&nbsp;&nbsp; How much compute can you actually fit in one&nbsp;

data center? You’re also bumping up against&nbsp;&nbsp; very interesting distributed computing kind&nbsp; of challenges. Fortunately, we have some of&nbsp;&nbsp; the best people in the world working on those&nbsp; challenges and cross data center training,&nbsp;&nbsp;

all of these kinds of things. There are very&nbsp; interesting hardware challenges and we have our&nbsp;&nbsp; TPUs that we’re building and designing all the&nbsp; time as well as using GPUs. So there’s all of&nbsp;&nbsp; that. Scaling laws also don’t just work by magic.&nbsp;

You still need to scale up the hyperparameters,&nbsp;&nbsp; and various innovations are going in all the time&nbsp; with each new scale. It’s not just about repeating&nbsp;&nbsp; the same recipe at each new scale. You have to&nbsp; adjust the recipe and that’s a bit of an art&nbsp;&nbsp;

form. You have to sort of get new data points. If&nbsp; you try to extend your predictions and extrapolate&nbsp;&nbsp; them several orders of magnitude out, sometimes&nbsp; they don’t hold anymore. There can be step&nbsp;&nbsp; functions in terms of new capabilities and some&nbsp;

things hold, other things don’t. Often you do need&nbsp;&nbsp; those intermediate data points to correct some of&nbsp; your hyperparameter optimization and other things,&nbsp;&nbsp; so that the scaling law continues to be true. So&nbsp; there are various practical limitations to that.&nbsp;&nbsp;

One order of magnitude is probably about the&nbsp; maximum that you want to do between each era.&nbsp; That’s so fascinating. In the GPT-4&nbsp; technical report, they say that they&nbsp;&nbsp; were able to predict the training loss with&nbsp;

a model with tens of thousands of times less&nbsp;&nbsp; compute than GPT-4. They could see the curve.&nbsp; But the point you’re making is that the actual&nbsp;&nbsp; capabilities that loss implies may not be so. Yeah, the downstream capabilities sometimes&nbsp;&nbsp;

don’t follow. You can often predict the core&nbsp; metrics like training loss or something like that,&nbsp;&nbsp; but then it doesn’t actually translate into MMLU,&nbsp; or math, or some other actual capability that you&nbsp;&nbsp; care about. They’re not necessarily linear all&nbsp;

the time. There are non-linear effects there.&nbsp; What was the biggest surprise&nbsp; to you during the development of&nbsp;&nbsp; Gemini in terms of something like this happening? I wouldn’t say there was one big surprise. It was&nbsp;&nbsp;

very interesting trying to train things at&nbsp; that size and learning about all sorts of&nbsp;&nbsp; things from an organizational standpoint,&nbsp; like how to babysit such a system and to&nbsp;&nbsp; track it. There’s also things like getting&nbsp;

a better understanding of the metrics you’re&nbsp;&nbsp; optimizing versus the final capabilities that you&nbsp; want. I would say that’s still not a perfectly&nbsp;&nbsp; understood mapping, but it’s an interesting&nbsp; one that we’re getting better and better at.&nbsp;

There’s a perception that maybe other&nbsp; labs are more compute-efficient than&nbsp;&nbsp; DeepMind has been with Gemini. I don’t&nbsp; know what you make of that perception.&nbsp; I don’t think that’s the case. I think that&nbsp;

actually Gemini 1 used roughly the same amount&nbsp;&nbsp; of compute, maybe slightly more, than what was&nbsp; rumored for GPT-4. I don’t know exactly what was&nbsp;&nbsp; used but I think it was in the same ballpark.&nbsp; I think we’re very efficient with our compute&nbsp;&nbsp;

and we use our compute for many things. One is not&nbsp; just the scaling but, going back to earlier, more&nbsp;&nbsp; innovations and ideas. A new innovation, a new&nbsp; invention, is only useful if it can also scale.&nbsp;&nbsp; So you need quite a lot of compute to do new&nbsp;

invention because you’ve got to test many things,&nbsp;&nbsp; at least some reasonable scale, and make&nbsp; sure that they work at that scale. Also,&nbsp;&nbsp; some new ideas may not work at a toy scale&nbsp; but do work at a larger scale. In fact,&nbsp;&nbsp;

those are the more valuable ones. So if&nbsp; you think about that exploration process,&nbsp;&nbsp; you need quite a lot of compute to be able to&nbsp; do that. The good news is we’re pretty lucky&nbsp;&nbsp; at Google. I think this year we’re going to have&nbsp;

the most compute by far of any sort of research&nbsp;&nbsp; lab. We hope to make very efficient and good&nbsp; use of that in terms of both scaling and the&nbsp;&nbsp; capability of our systems and also new inventions. What’s been the biggest surprise to you, if you go&nbsp;&nbsp;

back to yourself in 2010 when you were starting&nbsp; DeepMind, in terms of what AI progress has looked&nbsp;&nbsp; like? Did you anticipate back then that it would,&nbsp; in some large sense, amount to spending billions&nbsp;&nbsp; of dollars into these models? Or did you have&nbsp;

a different sense of what it would look like?&nbsp; We thought that actually, and I know you’ve&nbsp; interviewed my colleague Shane. He always&nbsp;&nbsp; thought in terms of compute curves&nbsp; and comparing it roughly to the brain,&nbsp;&nbsp;

how many neurons and synapses there are very&nbsp; loosely. Interestingly, we’re actually in that&nbsp;&nbsp; kind of regime now with roughly the right order&nbsp; of magnitude of number of synapses in the brain&nbsp;&nbsp; and the sort of compute that we have. But I think&nbsp;

more fundamentally, we always thought that we bet&nbsp;&nbsp; on generality and learning. So those were always&nbsp; at the core of any technique we would use. That’s&nbsp;&nbsp; why we triangulated on reinforcement learning,&nbsp; and search, and deep learning as three types of&nbsp;&nbsp;

algorithms that would scale, be very general, and&nbsp; not require a lot of handcrafted human priors. We&nbsp;&nbsp; thought that was the sort of failure mode of the&nbsp; efforts to build AI in the 90s in places like&nbsp;&nbsp; MIT. There were very logic-based systems,&nbsp;

expert systems, and masses of hand-coded,&nbsp;&nbsp; handcrafted human information going into them&nbsp; that turned out to be wrong or too rigid. So we&nbsp;&nbsp; wanted to move away from that and I think we&nbsp; spotted that trend early. Obviously, we used&nbsp;&nbsp;

games as our proving ground and we did very well&nbsp; with that. I think all of that was very successful&nbsp;&nbsp; and maybe inspired others. AlphaGo, I think, was a&nbsp; big moment for inspiring many others to think “oh,&nbsp;&nbsp; actually, these systems are ready to scale.” Of&nbsp;

course then, with the advent of transformers,&nbsp;&nbsp; invented by our colleagues at Google Research&nbsp; and Brain, that was the type of deep learning&nbsp;&nbsp; that allowed us to ingest masses of amounts of&nbsp; information. That has really turbocharged where&nbsp;&nbsp;

we are today. So I think that’s all part of the&nbsp; same lineage. We couldn’t have predicted every&nbsp;&nbsp; twist and turn there, but I think the general&nbsp; direction we were going in was the right one.&nbsp; It’s fascinating if you read your old papers or&nbsp;

Shane’s old papers. In Shane’s thesis in 2009,&nbsp;&nbsp; he said “well, the way we would test for AI is,&nbsp; can you compress Wikipedia?” And that’s literally,&nbsp;&nbsp; the loss function for LLMs. Or in your&nbsp; own paper in 2016 before transformers,&nbsp;&nbsp;

you were comparing neuroscience and AI&nbsp; and you said attention is what is needed.&nbsp; Exactly. So we had these things called out&nbsp; and we had some early attention papers,&nbsp;&nbsp; but they weren’t as elegant as transformers&nbsp;

in the end, neural Turing machines and things&nbsp;&nbsp; like this. Transformers were the nicer&nbsp; and more general architecture of that.&nbsp; When you extrapolate all this out forward&nbsp; and you think about superhuman intelligence,&nbsp;&nbsp;

what does that landscape look like to you? Is it&nbsp; still controlled by a private company? What should&nbsp;&nbsp; the governance of that look like concretely? I think that this is so consequential,&nbsp;&nbsp; this technology. I think it’s much bigger than&nbsp;

any one company or even industry in general.&nbsp;&nbsp; I think it has to be a big collaboration with&nbsp; many stakeholders from civil society, academia,&nbsp;&nbsp; government, etc. The good news is that with the&nbsp; popularity of the recent chatbot systems, I think&nbsp;&nbsp;

that has woken up many of these other parts of&nbsp; society to the fact that this is coming and what&nbsp;&nbsp; it will be like to interact with these systems.&nbsp; And that’s great. It’s opened up lots of doors for&nbsp;&nbsp; very good conversations. An example of that was&nbsp;

the safety summit the UK hosted a few months ago,&nbsp;&nbsp; which I thought was a big success in getting this&nbsp; international dialogue going. I think the whole of&nbsp;&nbsp; society needs to be involved in deciding what&nbsp; we want to deploy these models for? How do we&nbsp;&nbsp;

want to use them and what do we not want to use&nbsp; them for? I think we’ve got to try and get some&nbsp;&nbsp; international consensus around that and also make&nbsp; sure that these systems benefit everyone, for the&nbsp;&nbsp; good of society in general. That’s why I push so&nbsp;

hard for things like AI for science. I hope that&nbsp;&nbsp; with things like our spin-out, Isomorphic, we’re&nbsp; going to start curing terrible diseases with AI,&nbsp;&nbsp; accelerate drug discovery, tackle climate change,&nbsp; and do other amazing things. There are big&nbsp;&nbsp;

challenges that face humanity, massive challenges.&nbsp; I’m actually optimistic we can solve them because&nbsp;&nbsp; we’ve got this incredibly powerful tool of&nbsp; AI coming down the line that we can apply to&nbsp;&nbsp; help us solve many of these problems. Ideally, we&nbsp;

would have a big consensus around that and a big&nbsp;&nbsp; discussion at sort of the UN level if possible. One interesting thing is if you look at these&nbsp;&nbsp; systems and chat with them, they’re immensely&nbsp; powerful and intelligent. But it’s interesting&nbsp;&nbsp;

the extent to which they haven’t automated large&nbsp; sections of the economy yet. Whereas if five years&nbsp;&nbsp; ago I showed you Gemini, you’d be like “wow,&nbsp; this is totally coming for a lot of things.”&nbsp;&nbsp; So how do you account for that? What’s going&nbsp;

on that it hasn’t had the broader impact yet?&nbsp; I think that just shows we’re still at the&nbsp; beginning of this new era. I think there are&nbsp;&nbsp; some interesting use cases where you can use these&nbsp; chatbot systems to summarize stuff for you and do&nbsp;&nbsp;

some simple writing, maybe more boilerplate-type&nbsp; writing. But that’s only a small part of what we&nbsp;&nbsp; all do every day. I think for more general&nbsp; use cases we still need new capabilities,&nbsp;&nbsp; things like planning and search but also things&nbsp;

like personalization and episodic memory. That’s&nbsp;&nbsp; not just long context windows, but actually&nbsp; remembering what we spoke about 100 conversations&nbsp;&nbsp; ago. I’m really looking forward to things like&nbsp; recommendation systems that help me find better,&nbsp;&nbsp;

more enriching material, whether that’s books or&nbsp; films or music and so on. I would use that type of&nbsp;&nbsp; system every day. So I think we’re just scratching&nbsp; the surface of what these AI assistants could&nbsp;&nbsp; actually do for us in our general, everyday lives&nbsp;

and also in our work context as well. I think&nbsp;&nbsp; they’re not reliable yet enough to do things&nbsp; like science with them. But I think one day,&nbsp;&nbsp; once we fix factuality and grounding and&nbsp; other things, I think they could end up&nbsp;&nbsp;

becoming the world’s best research assistant&nbsp; for you as a scientist or as a clinician.&nbsp; I want to ask about memory. You had this&nbsp; fascinating paper in 2007 where you talked&nbsp;&nbsp; about the links between memory and imagination and&nbsp;

how they, in some sense, are very similar. People&nbsp;&nbsp; often claim that these models are just memorizing.&nbsp; How do you think about that claim? Is memorization&nbsp;&nbsp; all you need because in some deep sense,&nbsp; that’s compression? What’s your intuition here?&nbsp;

At the limit, one maybe could try and memorize&nbsp; everything but it wouldn’t generalize out of your&nbsp;&nbsp; distribution. The early criticisms of these early&nbsp; systems were that they were just regurgitating&nbsp;&nbsp; and memorizing. I think clearly in the Gemini,&nbsp;

GPT-4 type era, they are definitely generalizing&nbsp;&nbsp; to new constructs. Actually my thesis, and&nbsp; that paper particularly that started that&nbsp;&nbsp; area of imagination in neuroscience, was showing&nbsp; that first of all memory, at least human memory,&nbsp;&nbsp;

is a reconstructive process. It’s not a videotape.&nbsp; We sort of put it together back from components&nbsp;&nbsp; that seem familiar to us, the ensemble. That’s&nbsp; what made me think that imagination might be the&nbsp;&nbsp; same thing. Except in this case you’re using the&nbsp;

same semantic components, but now you’re putting&nbsp;&nbsp; it together in a way that your brain thinks is&nbsp; novel, for a particular purpose like planning. I&nbsp;&nbsp; do think that that kind of idea is still probably&nbsp; missing from our current systems, pulling together&nbsp;&nbsp;

different parts of your world model to simulate&nbsp; something new that then helps with your planning,&nbsp;&nbsp; which is what I would call imagination. For sure. Now you guys have the best models&nbsp;&nbsp; in the world with the Gemini models. Do you&nbsp;

plan on putting out some sort of framework&nbsp;&nbsp; like the other two major AI labs have? Something&nbsp; like “once we see these specific capabilities,&nbsp;&nbsp; unless we have these specific safeguards,&nbsp; we’re not going to continue development&nbsp;&nbsp;

or we’re not going to ship the product out.” Yes, we already have lots of internal checks&nbsp;&nbsp; and balances but we’re going to start publishing.&nbsp; Actually, watch this space. We’re working on a&nbsp;&nbsp; whole bunch of blog posts and technical papers&nbsp;

that we’ll be putting out in the next few months&nbsp;&nbsp; along similar lines of things like responsible&nbsp; scaling laws and so on. We have those implicitly&nbsp;&nbsp; internally in various safety councils that people&nbsp; like Shane chair and so on. But it’s time for us&nbsp;&nbsp;

to talk about that more publicly I think. So we’ll&nbsp; be doing that throughout the course of the year.&nbsp; That’s great to hear. Another thing I’m&nbsp; curious about is, there’s not only the risk&nbsp;&nbsp; of the deployed model being something&nbsp;

that people can use to do bad things,&nbsp;&nbsp; but there’s also rogue actors, foreign agents,&nbsp; and so forth, being able to steal the weights&nbsp;&nbsp; and then fine-tune them to do crazy things. How do&nbsp; you think about securing the weights to make sure&nbsp;&nbsp;

something like this doesn’t happen, making sure&nbsp; a very key group of people has access to them?&nbsp; It’s interesting. First of all, there’s two parts.&nbsp; One is security, one is open source, which maybe&nbsp;&nbsp; we can discuss. The security is super key just&nbsp;

as normal cybersecurity type things. I think&nbsp;&nbsp; we’re lucky at Google DeepMind. We’re behind&nbsp; Google’s firewall and cloud protection which I&nbsp;&nbsp; think is best in class in the world corporately.&nbsp; So we already have that protection. Behind that,&nbsp;&nbsp;

we have specific DeepMind protections within&nbsp; our code base. It’s sort of a double layer&nbsp;&nbsp; of protection. So I feel pretty good about&nbsp; that. You can never be complacent on that&nbsp;&nbsp; but I feel it’s already the best in the world&nbsp;

in terms of cyber defenses. We’ve got to carry&nbsp;&nbsp; on improving that and again, things like the&nbsp; hardened sandboxes could be a way of doing that&nbsp;&nbsp; as well. Maybe there are even specifically&nbsp; secure data centers or hardware solutions&nbsp;&nbsp;

to this too that we’re thinking about. I think&nbsp; that maybe in the next three, four, five years,&nbsp;&nbsp; we would also want air gaps and various other&nbsp; things that are known in the security community.&nbsp;&nbsp; So I think that’s key and I think all frontier&nbsp;

labs should be doing that because otherwise for&nbsp;&nbsp; rogue nation-states and other dangerous actors,&nbsp; there would obviously be a lot of incentive for&nbsp;&nbsp; them to steal things like the weights. Of course,&nbsp; open source is another interesting question. We’re&nbsp;&nbsp;

huge proponents of open source and open science.&nbsp; We’ve published thousands of papers, things like&nbsp;&nbsp; AlphaFold and transformers and AlphaGo. All of&nbsp; these things we put out there into the world,&nbsp;&nbsp; published and open source, most recently&nbsp;

GraphCast, our weather prediction system. But&nbsp;&nbsp; when it comes to the general-purpose foundational&nbsp; technology, I think the question I would have for&nbsp;&nbsp; open source proponents is, how does one stop&nbsp; bad actors, individuals or up to rogue states,&nbsp;&nbsp;

taking those same open source systems and&nbsp; repurposing them for harmful ends? We have to&nbsp;&nbsp; answer that question. I don’t know what the answer&nbsp; is to that, but I haven’t heard a compelling,&nbsp;&nbsp; clear answer to that from proponents of just&nbsp;

open sourcing everything. So I think there&nbsp;&nbsp; has to be some balance there. Obviously,&nbsp; it’s a complex question of what that is.&nbsp; I feel like tech doesn’t get the credit it&nbsp; deserves for funding hundreds of billions of&nbsp;&nbsp;

dollars’ worth of R&amp;D, obviously you have DeepMind&nbsp; with systems like AlphaFold and so on. When we&nbsp;&nbsp; talk about securing the weights, as we said maybe&nbsp; right now it’s not something that is going to&nbsp;&nbsp; cause the end of the world or anything, but as&nbsp;

these systems get better and better, there’s the&nbsp;&nbsp; worry that a foreign agent or something gets&nbsp; access to them. Presumably right now there’s&nbsp;&nbsp; dozens to hundreds of researchers who have access&nbsp; to the weights. What’s a plan for getting the&nbsp;&nbsp;

weights in a situation room where if you need to&nbsp; access them it’s some extremely strenuous process&nbsp;&nbsp; and no individual can really take them out? One has to balance that with allowing for&nbsp;&nbsp; collaboration and speed of progress. Another&nbsp;

interesting thing is that of course you want&nbsp;&nbsp; brilliant independent researchers from academia or&nbsp; things like the UK AI Safety Institute and the US&nbsp;&nbsp; one to be able to red team these systems. So&nbsp; one has to expose them to a certain extent,&nbsp;&nbsp;

although that’s not necessarily the weights. We&nbsp; have a lot of processes in place about making&nbsp;&nbsp; sure that only if you need them, those people&nbsp; who need access have access. Right now, I think&nbsp;&nbsp; we’re still in the early days of those kinds of&nbsp;

systems being at risk. As these systems become&nbsp;&nbsp; more powerful and more general and more capable,&nbsp; I think one has to look at the access question.&nbsp; Some of these other labs have specialized&nbsp; in different things relative to safety,&nbsp;&nbsp;

Anthropic for example with interpretability.&nbsp; Do you have some sense of where you guys might&nbsp;&nbsp; have an edge? Now that you have the frontier&nbsp; model, where are you guys going to be able to&nbsp;&nbsp; put out the best frontier research on safety?

I think we helped pioneer RLHF and other things&nbsp;&nbsp; like that which can obviously be used for&nbsp; performance but also for safety. I think that&nbsp;&nbsp; a lot of the self-play ideas and these kinds&nbsp; of things could also be used to auto-test a&nbsp;&nbsp;

lot of the boundary conditions that you have&nbsp; with the new systems. Part of the issue is&nbsp;&nbsp; that with these very general systems, there’s&nbsp; so much surface area to cover about how these&nbsp;&nbsp; systems behave. So I think we are going&nbsp;

to need some automated testing. Again,&nbsp;&nbsp; with things like simulations and games, very&nbsp; realistic virtual environments, I think we&nbsp;&nbsp; have a long history of using those kinds of&nbsp; systems and making use of them for building&nbsp;&nbsp;

AI algorithms. I think we can leverage all of that&nbsp; history. And then around Google, we’re very lucky&nbsp;&nbsp; to have some of the world’s best cybersecurity&nbsp; experts, hardware designers. I think we can bring&nbsp;&nbsp; that to bear for security and safety as well.

Let’s talk about Gemini. So now you guys have&nbsp;&nbsp; the best model in the world. I’m curious. The&nbsp; default way to interact with these systems has&nbsp;&nbsp; been through chat so far. Now that we have&nbsp; multimodal and all these new capabilities,&nbsp;&nbsp;

how do you anticipate that changing?&nbsp; Do you think that’ll still be the case?&nbsp; I think we’re just at the beginning of actually&nbsp; understanding how exciting that might be to&nbsp;&nbsp; interact with a full multimodal model system.&nbsp;

It’ll be quite different from what we’re used&nbsp;&nbsp; to today with the chatbots. I think the next&nbsp; versions of this over the next year, 18 months,&nbsp;&nbsp; we’ll maybe have some contextual understanding&nbsp; of the environment around you through a camera&nbsp;&nbsp;

or a phone or some glasses. I could imagine&nbsp; that as the next step. And then I think we’ll&nbsp;&nbsp; start becoming more fluid in understanding “let’s&nbsp; sample from a video, let’s use voice.” Maybe even&nbsp;&nbsp; eventually things like touch and if you think&nbsp;

about robotics, other types of sensors. So I&nbsp;&nbsp; think the world’s about to become very exciting&nbsp; in the next few years as we start getting used&nbsp;&nbsp; to the idea of what true multimodality means. On the robotics subject, when he was on the&nbsp;&nbsp;

podcast Ilya said that the reason OpenAI gave up&nbsp; on robotics was because they didn’t have enough&nbsp;&nbsp; data in that domain, at least at the time&nbsp; they were pursuing it. You guys have put out&nbsp;&nbsp; different things like Robo-Transformer and other&nbsp;

things. Do you think that’s still a bottleneck&nbsp;&nbsp; for robotics progress, or will we see progress in&nbsp; the world of atoms as well as the world of bits?&nbsp; We’re very excited about our progress with things&nbsp; like Gato and RT-2. We’ve always liked robotics&nbsp;&nbsp;

and we’ve had amazing research in that. We still&nbsp; have that going now because we like the fact that&nbsp;&nbsp; it’s a data-poor regime. That pushes us in very&nbsp; interesting research directions that we think&nbsp;&nbsp; are going to be useful anyway: sampling efficiency&nbsp;

and data efficiency in general, transfer learning,&nbsp;&nbsp; learning from simulation and transferring that&nbsp; to reality, sim-to-real. All of these are very&nbsp;&nbsp; interesting general challenges that we would like&nbsp; to solve. The control problem. So, we’ve always&nbsp;&nbsp;

pushed hard on that. I think Ilya is right. It is&nbsp; more challenging because of the data problem. But&nbsp;&nbsp; I think we’re starting to see the beginnings&nbsp; of these large models being transferable to&nbsp;&nbsp; the robotics regime. They can learn in the general&nbsp;

domain, language domain and other things, and then&nbsp;&nbsp; just treat tokens like Gato as any type of token.&nbsp; The token could be an action, it could be a word,&nbsp;&nbsp; it could be part of an image, a pixel, or whatever&nbsp; it is. That’s what I think true multimodality is.&nbsp;&nbsp;

To begin with, it’s harder to train a system&nbsp; like that than a straightforward language&nbsp;&nbsp; system. But going back to our early conversation&nbsp; on transfer learning, you start seeing that with a&nbsp;&nbsp; true multimodal system, the other modalities&nbsp;

benefit some different modalities. You get&nbsp;&nbsp; better at language because you now understand&nbsp; a little bit about video. So I do think it’s&nbsp;&nbsp; harder to get going, but ultimately we’ll have&nbsp; a more general, more capable system like that.&nbsp;

What ever happened to Gato? That was&nbsp; super fascinating that you could have it&nbsp;&nbsp; play games and also do video and also do text. We’re still working on those kinds of systems,&nbsp;&nbsp; but you can imagine we’re trying to build&nbsp;

those ideas into our future generations of&nbsp;&nbsp; Gemini to be able to do all of those things.&nbsp; Robotics, transformers, and things like that,&nbsp;&nbsp; you can think of them as follow-ups to that. Will we see asymmetric progress in the domains in&nbsp;&nbsp;

which the self-play kinds of things you’re talking&nbsp; about will be especially powerful? So math and&nbsp;&nbsp; code. Recently, you have these papers out about&nbsp; this. You can use these things to do really cool,&nbsp;&nbsp; novel things. Will they be superhuman coders,&nbsp;

but in other ways they might still be worse&nbsp;&nbsp; than humans? How do you think about that? I think that we’re making great progress&nbsp;&nbsp; with math and things like theorem proving and&nbsp; coding. But it’s still interesting if one looks&nbsp;&nbsp;

at creativity in general, and scientific endeavor&nbsp; in general. I think we’re getting to the stage&nbsp;&nbsp; where our systems could help the best human&nbsp; scientists make their breakthroughs quicker,&nbsp;&nbsp; almost triage the search space in some ways.&nbsp;

Perhaps find a solution like AlphaFold does&nbsp;&nbsp; with a protein structure. They’re not at the level&nbsp; where they can create the hypothesis themselves or&nbsp;&nbsp; ask the right question. As any top scientist will&nbsp; tell you, the hardest part of science is actually&nbsp;&nbsp;

asking the right question. It’s boiling down&nbsp; that space to the critical question we should&nbsp;&nbsp; go after and then formulating the problem in the&nbsp; right way to attack it. That’s not something our&nbsp;&nbsp; systems really have any idea how to do, but they&nbsp;

are suitable for searching large combinatorial&nbsp;&nbsp; spaces if one can specify the problem with a clear&nbsp; objective function. So that’s very useful already&nbsp;&nbsp; for many of the problems we deal with today,&nbsp; but not the most high-level creative problems.&nbsp;

DeepMind has published all kinds&nbsp; of interesting stuff in speeding&nbsp;&nbsp; up science in different areas. If you think AGI&nbsp; is going to happen in the next 10 to 20 years,&nbsp;&nbsp; why not just wait for the AGI to do it for&nbsp;

you? Why build these domain-specific solutions?&nbsp; I think we don’t know how long AGI is going&nbsp; to be. We always used to say, back even when&nbsp;&nbsp; we started DeepMind, that we don’t have to wait&nbsp; for AGI in order to bring incredible benefits to&nbsp;&nbsp;

the world. My personal passion especially has&nbsp; been AI for science and health. You can see&nbsp;&nbsp; that with things like AlphaFold and all of our&nbsp; various Nature papers on different domains and&nbsp;&nbsp; material science work and so on. I think there’s&nbsp;

lots of exciting directions and also impact in&nbsp;&nbsp; the world through products too. I think it’s&nbsp; very exciting and a huge unique opportunity we&nbsp;&nbsp; have as part of Google. They’ve got dozens of&nbsp; billion-user products that we can immediately&nbsp;&nbsp;

ship our advances into and then billions&nbsp; of people can improve, enrich, and enhance&nbsp;&nbsp; their daily lives. I think it’s a fantastic&nbsp; opportunity for impact on all those fronts.&nbsp; I think the other reason from the point of view&nbsp;

of AGI specifically is that it battle tests&nbsp;&nbsp; your ideas. You don’t want to be in a research&nbsp; bunker where you theoretically are pushing things&nbsp;&nbsp; forward, but then actually your internal metrics&nbsp; start deviating from real-world things that people&nbsp;&nbsp;

would care about, or real-world impact. So you&nbsp; get a lot of direct feedback from these real-world&nbsp;&nbsp; applications that then tells you whether your&nbsp; systems really are scaling or if we need to be&nbsp;&nbsp; more data efficient or sample efficient. Because&nbsp;

most real-world challenges require that. So it&nbsp;&nbsp; kind of keeps you honest and pushes you to keep&nbsp; nudging and steering your research directions&nbsp;&nbsp; to make sure they’re on the right path. So&nbsp; I think it’s fantastic. Of course, the world&nbsp;&nbsp;

benefits from that. Society benefits from that&nbsp; on the way, maybe many years before AGI arrives.&nbsp; The development of Gemini is super interesting&nbsp; because it comes right at the heels of merging&nbsp;&nbsp; these different organizations, Brain and DeepMind.&nbsp;

I’m curious, what have been the challenges&nbsp;&nbsp; there? What have been the synergies? It’s been&nbsp; successful in the sense that you have the best&nbsp;&nbsp; model in the world now. What’s that been like? It’s been fantastic actually, over the last year.&nbsp;&nbsp;

Of course it’s been challenging to do, like any&nbsp; big integration coming together. You’re talking&nbsp;&nbsp; about two world-class organizations with&nbsp; long, storied histories of inventing many&nbsp;&nbsp; important things from deep reinforcement learning&nbsp;

to transformers. So it’s very exciting to actually&nbsp;&nbsp; pool all of that together and collaborate much&nbsp; more closely. We always used to be collaborating,&nbsp;&nbsp; but more on a project-by-project basis versus&nbsp; a much deeper, broader collaboration like we&nbsp;&nbsp;

have now. Gemini is the first fruit of that&nbsp; collaboration, including the name Gemini&nbsp;&nbsp; implying twins. Of course, a lot of other things&nbsp; are made more efficient like pooling compute&nbsp;&nbsp; resources together and ideas and engineering. I&nbsp;

think at the stage we’re at now, there are huge&nbsp;&nbsp; amounts of world-class engineering that have&nbsp; to go into building the frontier systems. I&nbsp;&nbsp; think it makes sense to coordinate that more. You and Shane started DeepMind partly because&nbsp;&nbsp;

you were concerned about safety. You saw AGI&nbsp; coming as a live possibility. Do you think&nbsp;&nbsp; the people who were formerly part of Brain,&nbsp; that half of Google DeepMind now, approach&nbsp;&nbsp; it in the same way? Have there been cultural&nbsp;

differences there in terms of that question?&nbsp; This is one of the reasons we joined forces with&nbsp; Google back in 2014. I think the entirety of&nbsp;&nbsp; Google and Alphabet, not just Brain and DeepMind,&nbsp; takes these questions of responsibility very&nbsp;&nbsp;

seriously. Our kind of mantra is to try and be&nbsp; bold and responsible with these systems. I’m&nbsp;&nbsp; obviously a huge techno-optimist but I want us&nbsp; to be cautious given the transformative power of&nbsp;&nbsp; what we’re bringing into the world collectively.&nbsp;

I think it’s important. It’s going to be one of&nbsp;&nbsp; the most important technologies humanity will ever&nbsp; invent. So we’ve got to put all our efforts into&nbsp;&nbsp; getting this right and be thoughtful and&nbsp; also humble about what we know and don’t&nbsp;&nbsp;

know about the systems that are coming and&nbsp; the uncertainties around that. In my view,&nbsp;&nbsp; the only sensible approach when you have huge&nbsp; uncertainty is to be cautiously optimistic and&nbsp;&nbsp; use the scientific method to try and have as much&nbsp;

foresight and understanding about what’s coming&nbsp;&nbsp; down the line and the consequences of that before&nbsp; it happens. You don’t want to be live A/B testing&nbsp;&nbsp; out in the world with these very consequential&nbsp; systems because unintended consequences may be&nbsp;&nbsp;

quite severe. So I want us to move away, as a&nbsp; field, from a sort of “move fast and break things&nbsp;&nbsp; attitude” which has maybe served the Valley very&nbsp; well in the past and obviously created important&nbsp;&nbsp; innovations. I think in this case we want to&nbsp;

be bold with the positive things that it can do&nbsp;&nbsp; and make sure we advance things like medicine&nbsp; and science whilst being as responsible and&nbsp;&nbsp; thoughtful as possible with mitigating the risks. That’s why it seems like the responsible scaling&nbsp;&nbsp;

policies are something that are a very&nbsp; good empirical way to pre-commit to these&nbsp;&nbsp; kinds of things. Yes, exactly.&nbsp; When you’re doing these evaluations and for&nbsp;

example it turns out your next model could&nbsp;&nbsp; help a layperson build a pandemic-class bioweapon&nbsp; or something, how would you think first of all&nbsp;&nbsp; about making sure those weights are secure&nbsp; so that they don't get out? And second, what&nbsp;&nbsp;

would have to be true for you to be comfortable&nbsp; deploying that system? How would you make sure&nbsp;&nbsp; that this latent capability isn’t exposed? The secure model part I think we’ve covered&nbsp;&nbsp; with the cybersecurity and making sure that’s&nbsp;

world-class and you’re monitoring all those&nbsp;&nbsp; things. I think if a capability like that was&nbsp; discovered through red teaming or external&nbsp;&nbsp; testing, independent testers like government&nbsp; institutes or academia or whatever, then we&nbsp;&nbsp;

would have to fix that loophole. Depending on what&nbsp; it was, that might require a different kind of&nbsp;&nbsp; constitution perhaps, or different guardrails, or&nbsp; more RLHF to avoid that. Or you could remove some&nbsp;&nbsp; training data, depending on what the problem is. I&nbsp;

think there could be a number of mitigations. The&nbsp;&nbsp; first part is making sure you detect it ahead&nbsp; of time. So that’s about the right evaluations&nbsp;&nbsp; and right benchmarking and right testing. Then&nbsp; the question is how one would fix that before&nbsp;&nbsp;

you deployed it. But I think it would need&nbsp; to be fixed before it was deployed generally,&nbsp;&nbsp; for sure, if that was an exposure surface. Final question. You’ve been thinking in terms&nbsp;&nbsp; of the end goal of AGI at a time when other&nbsp;

people thought it was ridiculous in 2010. Now&nbsp;&nbsp; that we’re seeing this slow takeoff where we’re&nbsp; actually seeing generalization and intelligence,&nbsp;&nbsp; what is like psychologically seeing this?&nbsp; What has that been like? Has it just been&nbsp;&nbsp;

sort of priced into your world model so&nbsp; it’s not new news for you? Or actually just&nbsp;&nbsp; seeing it live, are you like “wow, something’s&nbsp; really changed”? What does it feel like?&nbsp; For me, yes, it’s already priced into my&nbsp;

world model of how things were going to go,&nbsp;&nbsp; at least from the technology side. But obviously,&nbsp; we didn’t necessarily anticipate that the general&nbsp;&nbsp; public would be so interested this early in the&nbsp; sequence. If ChatGPT and chatbots hadn’t gotten&nbsp;&nbsp;

the interest they ended up getting—which&nbsp; I think was quite surprising to everyone&nbsp;&nbsp; that people were ready to use these things even&nbsp; though they were lacking in certain directions,&nbsp;&nbsp; impressive though they are—then we would have&nbsp;

produced more specialized systems built off&nbsp;&nbsp; of the main track, like AlphaFold and AlphaGo,&nbsp; our scientific work. I think then the general&nbsp;&nbsp; public maybe would have only paid attention&nbsp; later down the road when in a few years’ time,&nbsp;&nbsp;

we have more generally useful assistant-type&nbsp; systems. So that’s been interesting. That’s&nbsp;&nbsp; created a different type of environment&nbsp; that we’re now all operating in as a field.&nbsp;&nbsp; It’s a little bit more chaotic because&nbsp;

there’s so many more things going on,&nbsp;&nbsp; and there’s so much VC money going into it, and&nbsp; everyone’s sort of almost losing their minds over&nbsp;&nbsp; it. The only thing I worry about is that I want&nbsp; to make sure that, as a field, we act responsibly&nbsp;&nbsp;

and thoughtfully and scientifically about this&nbsp; and use the scientific method to approach this&nbsp;&nbsp; in an optimistic but careful way. I think&nbsp; I’ve always believed that that’s the right&nbsp;&nbsp; approach for something like AI, and I just&nbsp;

hope that doesn’t get lost in this huge rush.&nbsp; Well, I think that’s a great place to&nbsp; close. Demis, thank you so much for your&nbsp;&nbsp; time and for coming on the podcast. Thanks. It’s been a real pleasure.

<!-- YOUTUBE_TRANSCRIPT_END -->
