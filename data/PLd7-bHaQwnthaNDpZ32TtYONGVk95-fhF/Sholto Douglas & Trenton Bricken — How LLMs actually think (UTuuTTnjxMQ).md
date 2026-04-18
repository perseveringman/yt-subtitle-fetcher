---
archive_version: 2
source: "youtube"
source_type: "playlist"
video_id: "UTuuTTnjxMQ"
title: "Sholto Douglas & Trenton Bricken — How LLMs actually think"
video_url: "https://www.youtube.com/watch?v=UTuuTTnjxMQ"
channel_name: "Dwarkesh Patel"
channel_id: "UCXl4i9dYBrFOabk0xGmbkRA"
uploader_id: "@DwarkeshPatel"
published_at: "2024-03-28T16:04:24.000Z"
upload_date: "2024-03-28"
duration_seconds: 11593
duration_human: "3:13:13"
view_count: 190742
like_count: 4163
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-18T14:03:05.840Z"
---

# Sholto Douglas & Trenton Bricken — How LLMs actually think

## Video Summary
- source_type: playlist
- video_url: https://www.youtube.com/watch?v=UTuuTTnjxMQ
- video_id: UTuuTTnjxMQ
- channel_name: Dwarkesh Patel
- channel_id: UCXl4i9dYBrFOabk0xGmbkRA
- uploader_id: @DwarkeshPatel
- uploader_url: https://www.youtube.com/@DwarkeshPatel
- published_at: 2024-03-28T16:04:24.000Z
- upload_date: 2024-03-28
- duration: 3:13:13
- view_count: 190742
- like_count: 4163
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Had so much fun chatting with my good friends Trenton Bricken and Sholto Douglas on the podcast. No way to summarize it, except: 
* This is the best context dump out there on how LLMs are trained, what capabilities they're likely to soon have, and what exactly is going on inside them.
* You would be shocked how much of what I know about this field, I've learned just from talking with them.
* To the extent that you've enjoyed my other AI interviews, now you know why.

There's a transcript with links to all the papers the boys were throwing down - may help you follow along.

𝐄𝐏𝐈𝐒𝐎𝐃𝐄 𝐋𝐈𝐍𝐊𝐒
* Transcript: https://www.dwarkeshpatel.com/p/sholto-douglas-trenton-bricken
* Spotify: https://open.spotify.com/episode/2dtDauiE4v8ldNRqPFq0uP?si=7S4n69QuTjeYz0lZwW4xIw
* Apple Podcasts: https://podcasts.apple.com/us/podcast/sholto-douglas-trenton-bricken-how-to-build-understand/id1516093381?i=1000650748087
* Trenton Bricken's twitter: https://twitter.com/TrentonBricken
* Sholto Douglas's twitter: https://twitter.com/_sholtodouglas

𝐓𝐈𝐌𝐄𝐒𝐓𝐀𝐌𝐏𝐒
00:00:00 - Long contexts
00:17:04 - Intelligence is just associations
00:33:27 - Intelligence explosion & great researchers
01:07:44 - Superposition & secret communication
01:23:26 - Agents & true reasoning
01:35:32 - How Sholto & Trenton got into AI research
02:08:08 - Are feature spaces the wrong way to think about intelligence?
02:22:04 - Will interp actually work on superhuman models
02:45:57 - Sholto's technical challenge for the audience
03:04:49 - Rapid fire

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

Okay, today I have the pleasure to talk with&nbsp; two of my good friends, Sholto and Trenton.&nbsp; Noam Brown, who wrote the Diplomacy paper, said&nbsp; this about Sholto: “he's only been in the field&nbsp;&nbsp; for 1.5 years, but people in AI know that he was&nbsp;

one of the most important people behind Gemini's&nbsp;&nbsp; success.” And Trenton, who's at Anthropic, works&nbsp; on mechanistic interpretability and it was widely&nbsp;&nbsp; reported that he has solved alignment. It's one friend on Twitter.&nbsp;

This will be a capabilities only&nbsp; podcast. Alignment is already solved,&nbsp;&nbsp; no need to discuss further. Let's start by talking about&nbsp;&nbsp; context lengths. It seemed to be underhyped,&nbsp;

given how important it seems to me, that you&nbsp;&nbsp; can just put a million tokens into context.&nbsp; There's apparently some other news that got&nbsp;&nbsp; pushed to the front for some reason, but tell&nbsp; me about how you see the future of long context&nbsp;&nbsp;

lengths and what that implies for these models. So I think it's really underhyped. Until I&nbsp;&nbsp; started working on it, I didn't really&nbsp; appreciate how much of a step up in&nbsp;&nbsp; intelligence it was for the model to have the&nbsp;

onboarding problem basically instantly solved.&nbsp; You can see that a bit in the perplexity graphs in&nbsp; the paper where just throwing millions of tokens&nbsp;&nbsp; worth of context about a code base allows it to&nbsp; become dramatically better at predicting the next&nbsp;&nbsp;

token in a way that you'd normally associate&nbsp; with huge increments in model scale. But you&nbsp;&nbsp; don't need that. All you need is a new context.&nbsp; So underhyped and buried by some other news.&nbsp; In context, are they as sample&nbsp;

efficient and smart as humans?&nbsp; I think that's really worth exploring.&nbsp; For example, one of the evals that we&nbsp;&nbsp; did in the paper had it learn a language in&nbsp; context better than a human expert could,&nbsp;&nbsp;

over the course of a couple of months. This is only a small demonstration but&nbsp;&nbsp; I'd be really interested to see things like&nbsp; Atari games where you throw in a couple hundred,&nbsp;&nbsp; or a thousand frames, of labeled actions in the&nbsp;

same way that you'd show your friend how to play&nbsp;&nbsp; a game and see if it's able to reason through. It might. At the moment, with the infrastructure&nbsp;&nbsp; and stuff, it's still a bit slow at&nbsp; doing that, but I would actually guess&nbsp;&nbsp;

that it might just work out of the box in&nbsp; a way that would be pretty mind-blowing.&nbsp; And crucially, I think this language was esoteric&nbsp; enough that it wasn't in the training data.&nbsp; Exactly. If you look at the model before it&nbsp;

has that context thrown in, it doesn't know the&nbsp;&nbsp; language at all and it can't get any translations. And this is an actual human language?&nbsp; Exactly. An actual human language. So if this is true, it seems to me that&nbsp;&nbsp;

these models are already in an important sense,&nbsp; superhuman. Not in the sense that they're smarter&nbsp;&nbsp; than us, but I can't keep a million tokens in&nbsp; my context when I'm trying to solve a problem,&nbsp;&nbsp; remembering and integrating all the&nbsp;

information, an entire code base. Am&nbsp;&nbsp; I wrong in thinking this is a huge unlock? Actually, I generally think that's true.&nbsp;&nbsp; Previously, I've been frustrated when models&nbsp; aren't as smart, when you ask them a question&nbsp;&nbsp;

and you want it to be smarter than you or&nbsp; to know things that you don't. This allows&nbsp;&nbsp; them to know things that you don't. It just&nbsp; ingests a huge amount of information in a way&nbsp;&nbsp; you just can't. So it's extremely important.

Well, how do we explain in-context learning?&nbsp; There's a line of work I quite like, where it&nbsp; looks at in-context learning as basically very&nbsp;&nbsp; similar to gradient descent, but the attention&nbsp; operation can be viewed as gradient descent on&nbsp;&nbsp;

the in-context data. That paper had some cool&nbsp; plots where they basically showed “we take n&nbsp;&nbsp; steps of gradient descent and that looks like n&nbsp; layers of in-context learning, and it looks very&nbsp;&nbsp; similar.” So I think that's one way of viewing&nbsp;

it and trying to understand what's going on.&nbsp; You can ignore what I'm about to&nbsp; say because, given the introduction,&nbsp;&nbsp; alignment is solved and AI safety isn't a problem. I think the context stuff does get problematic,&nbsp;&nbsp;

but also interesting here. I think there'll be&nbsp; more work coming out in the not-too-distant future&nbsp;&nbsp; around what happens if you give a hundred shot&nbsp; prompt for jailbreaks, adversarial attacks. It's&nbsp;&nbsp; also interesting in the sense that, if your model&nbsp;

is doing gradient descent and learning on the fly,&nbsp;&nbsp; even if it's been trained to be harmless,&nbsp; you're dealing with a totally new model&nbsp;&nbsp; in a way. You're fine-tuning but in a way&nbsp; where you can't control what's going on.&nbsp;

Can you explain? What do&nbsp; you mean by gradient descent&nbsp;&nbsp; happening in the forward pass and attention? There was something in the paper about trying to&nbsp;&nbsp; teach the model to do linear regression but just&nbsp;

through the number of samples or examples they&nbsp;&nbsp; gave in the context. And you can see if you plot&nbsp; on the x-axis the number of shots that it has,&nbsp;&nbsp; then the loss it gets on ordinary least&nbsp; squares regression will go down with time.&nbsp;

And it goes down exactly matched with&nbsp; the number of gradient descent steps.&nbsp; Yeah, exactly. I only read the intro and discussion section&nbsp;&nbsp; of that paper. But in the discussion, the way&nbsp;

they framed it is that the model, in order to get&nbsp;&nbsp; better at long-context tasks, has to get better&nbsp; at learning to learn from these examples or from&nbsp;&nbsp; the context that is already within the window. And the implication of that is, if meta-learning&nbsp;&nbsp;

happens because it has to learn how to get&nbsp; better at long-context tasks, then in some&nbsp;&nbsp; important sense the task of intelligence requires&nbsp; long-context examples and long-context training.&nbsp; Understanding how to better induce meta-learning&nbsp;

in your pre-training process is a very important&nbsp;&nbsp; thing about flexible or adaptive intelligence. Right, but you can proxy for that just by getting&nbsp;&nbsp; better at doing long-term context tasks. One&nbsp; of the bottlenecks for AI progress that many&nbsp;&nbsp;

people identify is the inability of these&nbsp; models to perform tasks on long horizons,&nbsp;&nbsp; engaging with the task for many&nbsp; hours, or even many weeks or months,&nbsp;&nbsp; where they’re an assistant or an employee and&nbsp;

they can just do a thing I tell them to do for&nbsp;&nbsp; a while. AI agents haven't taken off&nbsp; for this reason from what I understand.&nbsp; So how linked are long context windows, and the&nbsp; ability to perform well on them, and the ability&nbsp;&nbsp;

to do these kinds of long-horizon tasks that&nbsp; require you to engage with an assignment for&nbsp;&nbsp; many hours? Or are these unrelated concepts? I would take issue with that being the reason&nbsp;&nbsp; that agents haven't taken off. I think that's more&nbsp;

about nines of reliability and the model actually&nbsp;&nbsp; successfully doing things. If you can't chain&nbsp; tasks successively with high enough probability,&nbsp;&nbsp; then you won't get something that looks like&nbsp; an agent. And that's why something like an&nbsp;&nbsp;

agent might follow more of a step function. In GPT-4 class models, Gemini Ultra class models,&nbsp;&nbsp; they're not enough. But maybe the next&nbsp; increment on model scale means that&nbsp;&nbsp; you get that extra nine. Even though the&nbsp;

loss isn't going down that dramatically,&nbsp;&nbsp; that small amount of extra ability gives you&nbsp; the extra. Obviously you need some amount of&nbsp;&nbsp; context to fit long-horizon tasks, but I don't&nbsp; think that's been the limiting factor up to now.&nbsp;

The NeurIPS best paper this year, by Rylan&nbsp; Schaeffer who was the lead author, points&nbsp;&nbsp; to this as the emergence of mirage. People will&nbsp; have a task and you get the right or wrong answer&nbsp;&nbsp; depending on if you've sampled the last five&nbsp;

tokens correctly. So naturally you're multiplying&nbsp;&nbsp; the probability of sampling all of those and&nbsp; if you don't have enough nines of reliability,&nbsp;&nbsp; then you're not going to get emergence. And all of a sudden you do and it's,&nbsp;&nbsp;

“oh my gosh, this ability is emergent,” when&nbsp; actually it was kind of there to begin with.&nbsp; And there are ways that you can&nbsp; find a smooth metric for that.&nbsp; HumanEval or whatever. In the GPT-4 paper,&nbsp;

the coding problems they have, they measure–&nbsp; Log pass rates Exactly. For the audience,&nbsp;&nbsp; basically the idea is when you're measuring how&nbsp; much progress there has been on a specific task&nbsp;&nbsp;

such as solving coding problems, when it gets&nbsp; it right only one in a thousand times you don't&nbsp;&nbsp; give it a one in a thousand score like, “oh, got&nbsp; it right some of the time.” And so the curve you&nbsp;&nbsp; see is, it gets it right one in a thousand, then&nbsp;

one in a hundred, then one in ten, and so forth.&nbsp; So I want to follow up on this. If your claim&nbsp; is that the AI agents haven't taken off because&nbsp;&nbsp; of reliability rather than long-horizon task&nbsp; performance, isn't that lack of reliability–when&nbsp;&nbsp;

a task is changed on top of another task, on top&nbsp; of another task–isn't that exactly the difficulty&nbsp;&nbsp; with long-horizon tasks? You have to do ten&nbsp; things in a row or a hundred things in a row,&nbsp;&nbsp; diminishing the reliability of any one&nbsp;

of them. The probability goes down from&nbsp;&nbsp; 99.99% to 99.9%. Then the whole thing&nbsp; gets multiplied together and the whole&nbsp;&nbsp; thing has become so much less likely to happen. That is exactly the problem.But the key issue&nbsp;&nbsp;

you're pointing out there is that your base task&nbsp; solve rate is 90%. If it was 99% then chain,&nbsp;&nbsp; it doesn't become a problem. I think this is&nbsp; also something that just hasn't been properly&nbsp;&nbsp; studied. If you look at the academic evals, it’s&nbsp;

a single problem. Like the math problem, it's one&nbsp;&nbsp; typical math problem, it's one university-level&nbsp; problem from across different topics. You were&nbsp;&nbsp; beginning to start to see evals looking at this&nbsp; properly via more complex tasks like SWE-bench,&nbsp;&nbsp;

where they take a whole bunch of GitHub&nbsp; issues. That is a reasonably long horizon task,&nbsp;&nbsp; but it's still sub-hour as opposed&nbsp; to a multi-hour or multi-day task.&nbsp; So I think one of the things that will be really&nbsp;

important to do next is understand better what&nbsp;&nbsp; success rate over long-horizon tasks looks like.&nbsp; I think that's even important to understand what&nbsp;&nbsp; the economic impact of these models might be and&nbsp; properly judge increasing capabilities. Cutting&nbsp;&nbsp;

down the tasks and the inputs/outputs involved&nbsp; into minutes or hours or days and seeing how&nbsp;&nbsp; good it is at successively chaining and completing&nbsp; tasks of those different resolutions of time. Then&nbsp;&nbsp; that tells you how automated a job family or task&nbsp;

family will be in a way that MMLU scores don't.&nbsp; It was less than a year ago that we introduced&nbsp; 100K context windows and I think everyone was&nbsp;&nbsp; pretty surprised by that. Everyone had this&nbsp; soundbite of, “quadratic attention costs,&nbsp;&nbsp;

so we can't have long context windows.” And here&nbsp; we are. The benchmarks are being actively made.&nbsp; Wait, doesn't the fact that there&nbsp; are these companies–Google, Magick,&nbsp;&nbsp; maybe others–who have million token&nbsp;

attention imply that it's not quadratic&nbsp;&nbsp; anymore? Or are they just eating the cost? Well, who knows what Google is doing for its&nbsp;&nbsp; long context game? One thing has frustrated me&nbsp; about the general research field's approach to&nbsp;&nbsp;

attention. There’s an important way in which&nbsp; the quadratic cost of attention is actually&nbsp;&nbsp; dominated in typical dense transformers by the&nbsp; MLP block. So you have this n squared term that's&nbsp;&nbsp; associated with attention but you also have an n&nbsp;

squared term that's associated with the D model,&nbsp;&nbsp; the residual stream dimension of the model. I think Sasha Rush has a great tweet where&nbsp;&nbsp; he basically plots the curve of the cost of&nbsp; attention respective to the cost of really&nbsp;&nbsp;

large models and attention actually trails off.&nbsp; You actually need to be doing pretty long context&nbsp;&nbsp; before that term becomes really important. The second thing is that people often talk&nbsp;&nbsp; about how attention at inference time is such a&nbsp;

huge cost. When you're actually generating tokens,&nbsp;&nbsp; the operation is not n squared. One set&nbsp; of Q-vectors looks up a whole bunch of&nbsp;&nbsp; KV-vectors and that's linear with respect&nbsp; to the amount of context that the model has.&nbsp;

So I think this drives a lot of the recurrence and&nbsp; state space research where people have this meme&nbsp;&nbsp; of linear attention. And as Trenton said, there's&nbsp; a graveyard of ideas around attention. That’s not&nbsp;&nbsp; to say I don't think it's worth exploring, but&nbsp;

I think it's important to consider why and where&nbsp;&nbsp; the actual strengths and weaknesses of it are. Okay, what do you make of this take? As we move&nbsp;&nbsp; forward through the takeoff, more and more&nbsp; of the learning happens in the forward pass.&nbsp;&nbsp;

So originally all the learning happens in the&nbsp; bottom-up, hill climbing evolutionary process.&nbsp;&nbsp; Let’s say during the intelligence explosion the&nbsp; AI is maybe handwriting the weights or doing&nbsp;&nbsp; GOFAI or something, and we're in the middle step&nbsp;

where a lot of learning happens in-context now&nbsp;&nbsp; with these models, a lot of it happens within the&nbsp; backward pass. Does this seem like a meaningful&nbsp;&nbsp; gradient along which progress is happening? The broader thing being that if you're learning&nbsp;&nbsp;

in the forward pass, it's much more sample&nbsp; efficient because you can basically think&nbsp;&nbsp; as you're learning. Like when you read a&nbsp; textbook, you're not just skimming it and&nbsp;&nbsp; trying to absorb inductively, “these words follow&nbsp;

these words.” You read it and you think about it,&nbsp;&nbsp; and then you read some more and you think&nbsp; about it some more. Does this seem like&nbsp;&nbsp; a sensible way to think about the progress? It may just be like how birds and planes fly,&nbsp;&nbsp;

but they fly slightly differently. The virtue of&nbsp; technology allows us to accomplish things that&nbsp;&nbsp; birds can't. It might be that context length&nbsp; is similar in that it allows it to have a&nbsp;&nbsp; working memory that we can't, but functionally&nbsp;

is not the key thing towards actual reasoning.&nbsp; The key step between GPT-2 and GPT-3 was that&nbsp; all of a sudden there was this meta-learning&nbsp;&nbsp; behavior that was observed in training, in&nbsp; the pre-training of the model. And that has,&nbsp;&nbsp;

as you said, something to do with how&nbsp; if you give it some amount of context,&nbsp;&nbsp; it's able to adapt to that context. That&nbsp; was a behavior that wasn't really observed&nbsp;&nbsp; before that at all. And maybe that's a&nbsp;

mixture of property of context and scale&nbsp;&nbsp; and this kind of stuff. But it wouldn't have&nbsp; occurred to model tiny context, I would say.&nbsp; This is actually an interesting point. So when we&nbsp; talk about scaling up these models, how much of&nbsp;&nbsp;

it comes from just making the models themselves&nbsp; bigger? And how much comes from the fact that&nbsp;&nbsp; during any single call you are using more compute? So if you think of diffusion, you can just&nbsp;&nbsp; iteratively keep adding more compute. If adaptive&nbsp;

compute is solved, you can keep doing that. And&nbsp;&nbsp; in this case, if there's a quadratic penalty for&nbsp; attention but you're doing long context anyways,&nbsp;&nbsp; then you're still dumping in more compute&nbsp; ( and not just by having bigger models).&nbsp;

It's interesting because you do get more forward&nbsp; passes by having more tokens. My one gripe–I guess&nbsp;&nbsp; I have two gripes with this though, maybe three. So in the AlphaFold paper, one of the transformer&nbsp;&nbsp; modules–they have a few and the architecture&nbsp;

is very intricate–but they do, I think,&nbsp;&nbsp; five forward passes through it and will&nbsp; gradually refine their solution as a result.&nbsp; You can also kind of think of the residual stream,&nbsp; Sholto alluded to the read-write operations,&nbsp;&nbsp;

as a poor man's adaptive compute. Where it's&nbsp; just going to give you all these layers and&nbsp;&nbsp; if you want to use them, great. If you don't,&nbsp; then that's also fine. Then people will be like,&nbsp;&nbsp; “oh the brain is recurrent and you can do&nbsp;

however many loops through it you want.”&nbsp; I think to a certain extent, that's right. If I&nbsp; ask you a hard question, you'll spend more time&nbsp;&nbsp; thinking about it and that would correspond&nbsp; to more forward passes. But I think there's a&nbsp;&nbsp;

finite number of forward passes that you can do.&nbsp; It’s with language as well, people are like “oh&nbsp;&nbsp; human language can have infinite recursion&nbsp; in it,” like infinite nested statements of&nbsp;&nbsp; “the boy jumped over the bear, that was doing&nbsp;

this, that had done this, that had done that…”&nbsp; But empirically, you'll only see&nbsp; five to seven levels of recursion,&nbsp;&nbsp; which relates to that magic number of how many&nbsp; things you can hold in working memory at any given&nbsp;&nbsp;

time. So it's not infinitely recursive, but does&nbsp; that matter in the regime of human intelligence?&nbsp;&nbsp; And can you not just add more layers? Can you break it down for me? You've&nbsp;&nbsp; referred to this in some of your previous answers&nbsp;

of listening to these long contexts and holding&nbsp;&nbsp; more things in memory. But ultimately it comes&nbsp; down to your ability to mix concepts together to&nbsp;&nbsp; do some kind of reasoning and these models aren't&nbsp; necessarily human level at that, even in context.&nbsp;

Break down for me how you see just storing&nbsp; raw information versus reasoning and what's&nbsp;&nbsp; in between. Like, where's the reasoning happening?&nbsp; Where is this raw information storage happening?&nbsp;&nbsp; What's different between them in these models?

I don't have a super crisp answer for you here.&nbsp;&nbsp; Obviously with the input and output of the model,&nbsp; you're mapping back to actual tokens. And then in&nbsp;&nbsp; between that you're doing higher level processing. Before we get deeper into this, we should&nbsp;&nbsp;

explain to the audience. You referred earlier to&nbsp; Anthropic's way of thinking about transformers as&nbsp;&nbsp; these read-write operations that layers do. One of you should just kind of explain&nbsp;&nbsp; at a high level what you mean by that.

So for the residual stream, imagine you're&nbsp;&nbsp; in a boat going down a river and the boat is the&nbsp; current query where you're trying to predict the&nbsp;&nbsp; next token. So it's “the cat sat on the _____.”&nbsp; And then you have these little streams that are&nbsp;&nbsp;

coming off the river where you can get extra&nbsp; passengers or collect extra information if you&nbsp;&nbsp; want. And those correspond to the attention&nbsp; heads and MLPs that are part of the model.&nbsp; I almost think of it like the working memory&nbsp;

of the model, like the RAM of the computer,&nbsp;&nbsp; where you're choosing what information to&nbsp; read in so you can do something with it and&nbsp;&nbsp; then maybe read something else in later on. And you can operate on subspaces of that&nbsp;&nbsp;

high-dimensional vector. At this point, I&nbsp; think it's almost given that a ton of things&nbsp;&nbsp; are encoded in superposition. So the residual&nbsp; stream is just one high-dimensional vector,&nbsp;&nbsp; but actually there's a ton of different&nbsp;

vectors that are packed into it.&nbsp; To dumb it down, a way that would have made&nbsp; sense to me a few months ago is that you have&nbsp;&nbsp; the words that are the input into the model. All&nbsp; those words get converted into these tokens and&nbsp;&nbsp;

those tokens get converted into these vectors.&nbsp; And basically, it's just this small amount of&nbsp;&nbsp; information that's moving through the model. And the way you explained it to me, Sholto,&nbsp;&nbsp; this paper talks about how early on in the&nbsp;

model, maybe it's just doing some very basic&nbsp;&nbsp; things about, “what do these tokens mean?”&nbsp; Like if it says ten plus five, just moving&nbsp;&nbsp; information to have that good representation.&nbsp; And in the middle, maybe the deeper thinking is&nbsp;&nbsp;

happening about “how to solve this.” At the end,&nbsp; you're converting it back into the output token&nbsp;&nbsp; because the end product is that you're trying&nbsp; to predict the probability of the next token&nbsp;&nbsp; from the last of those residual streams. So it's&nbsp;

interesting to think about the small compressed&nbsp;&nbsp; amount of information moving through the model&nbsp; and how it's getting modified in different ways.&nbsp; Trenton, you're one of the few people who&nbsp; have a background from neuroscience. So you&nbsp;&nbsp;

can think about the analogies here to the brain.&nbsp; And in fact, you had a paper in grad school about&nbsp;&nbsp; thinking about attention in the brain, and one&nbsp; of our friend’s said this is the only, or first,&nbsp;&nbsp; neural explanation of why attention works.&nbsp;

Whereas we have evidence for why the CNNs,&nbsp;&nbsp; convolutional neural networks, work&nbsp; based on the visual cortex or something.&nbsp; Do you think in the brain there is something like&nbsp; a residual stream of compressed information that's&nbsp;&nbsp;

moving through and getting modified as you're&nbsp; thinking about something? Even if that's not&nbsp;&nbsp; what's literally happening, do you think that's a&nbsp; good metaphor for what's happening in the brain?&nbsp; At least in the cerebellum you basically&nbsp;

do have a residual stream in what we'll&nbsp;&nbsp; call the attention model for now–and I can go&nbsp; into whatever amount of detail you want for&nbsp;&nbsp; that–where you have inputs that route through&nbsp; it, but they'll also just go directly to the&nbsp;&nbsp;

end point that that module will contribute&nbsp; to. So there's a direct path and an indirect&nbsp;&nbsp; path. and, and so the model can pick up whatever&nbsp; information it wants and then add that back in.&nbsp; What happens in the cerebellum?

So the cerebellum nominally just does&nbsp;&nbsp; fine motor control but I analogize this to the&nbsp; person who's lost their keys and is just looking&nbsp;&nbsp; under the streetlight where it's very easy to&nbsp; observe this behavior. One leading cognitive&nbsp;&nbsp;

neuroscientist said to me that a dirty little&nbsp; secret of any fMRI study, where you're looking&nbsp;&nbsp; at brain activity for a given task, is that the&nbsp; cerebellum is almost always active and lighting&nbsp;&nbsp; up for it. If you have a damaged cerebellum, you&nbsp;

also are much more likely to have autism so it's&nbsp;&nbsp; associated with social skills. In one particular&nbsp; study, where I think they use PET instead of fMRI,&nbsp;&nbsp; when you're doing “next token prediction”&nbsp; the cerebellum lights up a lot. Also,&nbsp;&nbsp;

70% of your neurons in the brain are in the&nbsp; cerebellum. They're small but they're there&nbsp;&nbsp; and they're taking up real metabolic cost. This was one of Gwern’s points, that what&nbsp;&nbsp; changed with humans was not just that we have more&nbsp;

neurons, but specifically there's more neurons in&nbsp;&nbsp; the cerebral cortex in the cerebellum and they're&nbsp; more metabolically expensive and they're more&nbsp;&nbsp; involved in signaling and sending information back&nbsp; and forth. Is that attention? What's going on?&nbsp;

So back in the 1980s, Pentti Kanerva came up&nbsp; with an associative memory algorithm. You have&nbsp;&nbsp; a bunch of memories. You want to store them.&nbsp; There's some amount of noise or corruption&nbsp;&nbsp; that's going on and you want to query or&nbsp;

retrieve the best match. And so he wrote&nbsp;&nbsp; this equation for how to do it and a few years&nbsp; later realized that if you implemented this as&nbsp;&nbsp; an electrical engineering circuit, it actually&nbsp; looks identical to the core cerebellar circuit.&nbsp;

And that circuit, and the cerebellum more&nbsp; broadly, is not just in us, it's in basically&nbsp;&nbsp; every organism. There's active debate on whether&nbsp; or not cephalopods have it, they kind of have a&nbsp;&nbsp; different evolutionary trajectory. But even for&nbsp;

fruit flies with the Drosophila mushroom body,&nbsp;&nbsp; that is the same cerebellar architecture. That convergence and then my paper, which shows&nbsp;&nbsp; that actually this attention operation is a very&nbsp; close approximation, including implementing the&nbsp;&nbsp;

Softmax and having these nominal quadratic costs&nbsp; that we've been talking about. So the three way&nbsp;&nbsp; convergence here and the takeoff and success of&nbsp; transformers, just seems pretty striking to me.&nbsp; I want to zoom out. I think what motivated&nbsp;

this discussion in the beginning was we were&nbsp;&nbsp; talking about, “what is the reasoning? What&nbsp; is the memory? What do you think about the&nbsp;&nbsp; analogy you found to attention and this?” Do you think of this more as just looking&nbsp;&nbsp;

up the relevant memories or the relevant&nbsp; facts? And if that is the case, where is&nbsp;&nbsp; the reasoning happening in the brain? How do we&nbsp; think about how that builds up into the reasoning?&nbsp; Maybe my hot take here, I don't know how&nbsp;

hot it is, is that most intelligence is&nbsp;&nbsp; pattern matching and you can do a lot of&nbsp; really good pattern matching if you have&nbsp;&nbsp; a hierarchy of associative memories. You start&nbsp; with your very basic associations between just&nbsp;&nbsp;

objects in the real world. You can then chain&nbsp; those and have more abstract associations,&nbsp;&nbsp; such as a wedding ring symbolizing so many other&nbsp; associations that are downstream. You can even&nbsp;&nbsp; generalize the attention operation and this&nbsp;

associated memory as the MLP layer as well. And&nbsp;&nbsp; it's in a long-term setting where you don't have&nbsp; tokens in your current context, but I think this&nbsp;&nbsp; is an argument that association is all you need. Associated memory in general as well, you can&nbsp;&nbsp;

do two things with it. You can both, denoise or&nbsp; retrieve a current memory. So if I see your face&nbsp;&nbsp; but it's raining and cloudy, I can denoise and&nbsp; gradually update my query towards my memory of&nbsp;&nbsp; your face. But I can also access that memory and&nbsp;

then the value that I get out actually points to&nbsp;&nbsp; some other totally different part of the space. A very simple instance of this would be if you&nbsp;&nbsp; learn the alphabet. So I query for A and it&nbsp; returns B, I query for B and it returns C,&nbsp;&nbsp;

and you can traverse the whole thing. One of the things I talked to Demis&nbsp;&nbsp; about was a paper he had in 2008 that memory&nbsp; and imagination are very linked because of&nbsp;&nbsp; this very thing that you mentioned, that memory&nbsp;

is reconstructive. So you are, in some sense,&nbsp;&nbsp; imagining every time you're thinking of a memory&nbsp; because you're only storing a condensed version&nbsp;&nbsp; of it and you have to. This is famously why human&nbsp; memory is terrible and why people in the witness&nbsp;&nbsp;

box or whatever would just make shit up. So let me ask a stupid question. So you&nbsp;&nbsp; read Sherlock Holmes and the guy's incredibly&nbsp; sample efficient. He'll see a few observations&nbsp;&nbsp; and he'll basically figure out who committed the&nbsp;

crime because there's a series of deductive steps&nbsp;&nbsp; that leads from somebody's tattoo and what's&nbsp; on the wall to the implications of that. How&nbsp;&nbsp; does that fit into this picture? Because&nbsp; crucially, what makes him smart is that&nbsp;&nbsp;

there's not just an association, but there's a&nbsp; sort of deductive connection between different&nbsp;&nbsp; pieces of information. Would you just explain&nbsp; it as, that's just higher level association?&nbsp; I think so. I think learning these higher-level&nbsp;

associations to be able to then map patterns to&nbsp;&nbsp; each other, as a kind of meta-learning. I think&nbsp; in this case, he would also just have a really&nbsp;&nbsp; long context length, or a really long working&nbsp; memory, where he can have all of these bits and&nbsp;&nbsp;

continuously query them as he's coming up with&nbsp; some theory so that the theory is moving through&nbsp;&nbsp; the residual stream. And then his attention&nbsp; heads are querying his context. But then,&nbsp;&nbsp; how he's projecting his query and keys in the&nbsp;

space, and how his MLPs are then retrieving&nbsp;&nbsp; longer-term facts or modifying that information,&nbsp; is allowing him to in later layers do even more&nbsp;&nbsp; sophisticated queries and slowly be able to reason&nbsp; through and come to a meaningful conclusion.&nbsp;

That feels right to me. You're looking back&nbsp; in the past. You're selectively reading in&nbsp;&nbsp; certain pieces of information, comparing them,&nbsp; and maybe that informs your next step of what&nbsp;&nbsp; piece of information you now need to pull in. Then&nbsp;

you build this representation, which progressively&nbsp;&nbsp; looks closer and closer to the suspect in your&nbsp; case. That doesn't feel at all outlandish.&nbsp; I think that the people who aren't doing&nbsp; this research can overlook how after your&nbsp;&nbsp;

first layer of the model, every query key and&nbsp; value that you're using for attention comes&nbsp;&nbsp; from the combination of all the previous tokens. So my first layer, I'll query my previous tokens&nbsp;&nbsp; and just extract information from them. But all of&nbsp;

a sudden, let's say that I attended to tokens 1,&nbsp;&nbsp; 2, and 4 in equal amounts. Then the vector in my&nbsp; residual stream–assuming that they wrote out the&nbsp;&nbsp; same thing to the value vectors, but, but ignore&nbsp; that for a second–is a third of each of those.&nbsp;&nbsp;

So when I'm querying in the future, my query&nbsp; is actually a third of each of those things.&nbsp; But they might be written to different subspaces. That's right. Hypothetically, but they wouldn't&nbsp;&nbsp; have to. You can recombine and immediately, even&nbsp;

by layer two and certainly by the deeper layers,&nbsp;&nbsp; just have these very rich vectors that are packing&nbsp; in a ton of information. And the causal graph is&nbsp;&nbsp; literally over every single layer that happened&nbsp; in the past. That's what you're operating on.&nbsp;

Yeah, it does bring to mind a very funny eval&nbsp; to do, a Sherlock Holmes eval. You put the&nbsp;&nbsp; entire book into context and then you have a&nbsp; sentence which is, “the suspect is X.” Then&nbsp;&nbsp; you have a larger probability distribution&nbsp;

over the different characters in the book.&nbsp; That would be super cool. I wonder if you'd get anything at all.&nbsp; Sherlock Holmes is probably already in&nbsp; the training data. You gotta get a mystery&nbsp;&nbsp;

novel that was written in the– You can get an LLM to write it.&nbsp; Or we could purposely exclude it, right? Oh, we can? How do you?&nbsp; Well, you need to scrape any discussion&nbsp;

of it from Reddit or any other thing.&nbsp; Right, it's hard. That's one of the challenges&nbsp; that goes into things like long-context evals,&nbsp;&nbsp; getting a good one. You need to know&nbsp; that it's not in your training data.&nbsp;&nbsp;

You just put in the effort to exclude it. There's two different threads I want to&nbsp;&nbsp; follow up on. Let's go to the long-context one&nbsp; and then we'll come back to this. In the Gemini&nbsp;&nbsp; 1.5 paper the eval that was used was can it&nbsp;

remember something like Paul Graham’s essays.&nbsp; Yeah, the needle in a haystack. I mean, we don't necessarily just&nbsp;&nbsp; care about its ability to recall&nbsp; one specific fact from the context.&nbsp;

I'll step back and ask the question. The loss&nbsp; function for these models is unsupervised.&nbsp;&nbsp; You don't have to come up with these bespoke&nbsp; things that you keep out of the training data.&nbsp; Is there a way you can do a benchmark that's&nbsp;

also unsupervised, where another LLM is rating&nbsp;&nbsp; it in some way or something like that. Maybe&nbsp; the answer is that if you could do this,&nbsp;&nbsp; reinforcement learning would work. I think people have explored that&nbsp;&nbsp;

kind of stuff. For example, Anthropic has the&nbsp; constitutional RL paper where they take another&nbsp;&nbsp; language model and they point it and say, “how&nbsp; helpful or harmless was that response?” Then they&nbsp;&nbsp; get it to update and try and improve along the&nbsp;

Pareto frontier of helpfulness and harmfulness.&nbsp; So you can point language models at each other&nbsp; and create evals in this way. It's obviously an&nbsp;&nbsp; imperfect art form at the moment. because you get&nbsp; reward function hacking basically. Even humans are&nbsp;&nbsp;

imperfect here. Humans typically prefer longer&nbsp; answers, which aren't necessarily better answers&nbsp;&nbsp; and you get the same behavior with models. Going back to the Sherlock Holmes thing,&nbsp;&nbsp; if it's all associations all the way down, does&nbsp;

that mean we should be less worried about super&nbsp;&nbsp; intelligence? Because there's not this sense&nbsp; in which it's like Sherlock Holmes++. It'll&nbsp;&nbsp; still need to just find these associations, like&nbsp; humans find associations. It's not able to just&nbsp;&nbsp;

see a frame of the world and then it's&nbsp; figured out all the laws of physics.&nbsp; This is a very legitimate response.It's, “if&nbsp; you say humans are generally intelligent, then&nbsp;&nbsp; artificial general intelligence is no more capable&nbsp;

or competent.” I'm just worried that you have that&nbsp;&nbsp; level of general intelligence in silicon. You can&nbsp; then immediately clone hundreds of thousands of&nbsp;&nbsp; agents and they don't need to sleep, and&nbsp; they can have super long context windows,&nbsp;&nbsp;

and then they can start recursively improving,&nbsp; and then things get really scary. So I think to&nbsp;&nbsp; answer your original question, you're right,&nbsp; they would still need to learn associations.&nbsp; But wait, if intelligence is fundamentally about&nbsp;

these associations, the recursive self-improvement&nbsp;&nbsp; is just them getting better at association.&nbsp; There's not another thing that's happening.&nbsp;&nbsp; So then it seems like you might disagree&nbsp; with the intuition that they can't be that&nbsp;&nbsp;

much more powerful, if they're just doing that. I think then you can get into really interesting&nbsp;&nbsp; cases of meta-learning. When you play a new video&nbsp; game or study a new textbook, you're bringing a&nbsp;&nbsp; whole bunch of skills to the table to form those&nbsp;

associations much more quickly. And because&nbsp;&nbsp; everything in some way ties back to the physical&nbsp; world, I think there are general features that you&nbsp;&nbsp; can pick up and then apply in novel circumstances. Should we talk about the intelligence explosion&nbsp;&nbsp;

then? The reason I'm interested in discussing&nbsp; this with you guys in particular is that the&nbsp;&nbsp; models of the intelligence explosion&nbsp; we have so far come from economists.&nbsp; That’s fine but I think we can do better because&nbsp;

in the model of the intelligence explosion,&nbsp;&nbsp; what happens is you replace the AI researchers.&nbsp; There's a bunch of automated AI researchers&nbsp;&nbsp; who can speed up progress, make more AI&nbsp; researchers, and make further progress.&nbsp;&nbsp;

If that's the mechanism, we should just ask&nbsp; the AI researchers whether they think this is&nbsp;&nbsp; plausible. So let me just ask you, if I have&nbsp; a thousand agent Sholtos or agent Trentons,&nbsp;&nbsp; do you think that you get an intelligence&nbsp;

explosion? What does that look like to you?&nbsp; I think one of the important bounding constraints&nbsp; here is compute. I do think you could dramatically&nbsp;&nbsp; speed up AI research. It seems very clear&nbsp; to me that in the next couple of years,&nbsp;&nbsp;

we'll have things that can do many of the software&nbsp; engineering tasks that I do on a day to day basis,&nbsp;&nbsp; and therefore dramatically speed up my work,&nbsp; and therefore speed up the rate of progress.&nbsp; At the moment, I think most of the&nbsp;

labs are somewhat compute bound in&nbsp;&nbsp; that there are always more experiments you&nbsp; could run and more pieces of information that&nbsp;&nbsp; you could gain in the same way that scientific&nbsp; research on biology is somewhat experimentally&nbsp;&nbsp;

throughput-bound. You need to run and culture&nbsp; the cells in order to get the information.&nbsp; I think that will be at least a short&nbsp; term planning constraint. Obviously,&nbsp;&nbsp; Sam's trying to raise $7 trillion to buy chips&nbsp;

and it does seem like there's going to be a lot&nbsp;&nbsp; more compute in the future as everyone is heavily&nbsp; ramping. NVIDIA's stock price sort of represents&nbsp;&nbsp; the relative compute increase. Any thoughts? I think we need a few more nines of reliability in&nbsp;&nbsp;

order for it to be really useful and trustworthy.&nbsp; And we need context lengths that are super long&nbsp;&nbsp; and very cheap to have. If I'm working in our code&nbsp; base, it's really only small modules that I can&nbsp;&nbsp; get Claude to write for me right now. But it's&nbsp;

very plausible that within the next few years,&nbsp;&nbsp; or even sooner, it can automate most of my tasks. The only other thing here that I will note is that&nbsp;&nbsp; the research our interpretability subteam&nbsp; is working on is so early-stage. You really&nbsp;&nbsp;

have to be able to make sure everything is done&nbsp; correctly in a bug-free way and contextualize&nbsp;&nbsp; the results with everything else in the model.&nbsp; If something isn't going right, you have to be&nbsp;&nbsp; able to enumerate all of the possible&nbsp;

things, and then slowly work on those.&nbsp; An example that we've publicly talked about in&nbsp; previous papers is dealing with layer norm. If I'm&nbsp;&nbsp; trying to get an early result or look at the logit&nbsp; effects of the model, if I activate this feature&nbsp;&nbsp;

that we've identified to a really large degree,&nbsp; how does that change the output of the model? Am I&nbsp;&nbsp; using layer norm or not? How is that changing the&nbsp; feature that's being learned? That will take even&nbsp;&nbsp; more context or reasoning abilities for the model.

You used a couple of concepts together. It's not&nbsp;&nbsp; self-evident to me that they're the same but it&nbsp; seemed like you were using them interchangeably.&nbsp;&nbsp; One was working on the Claude code base and making&nbsp; more modules based on that, they need more context&nbsp;&nbsp;

or something. It seems like they might already&nbsp; be able to fit in the context or do you mean&nbsp;&nbsp; context like “the context window?” Yeah, the “context window” context.&nbsp; So it seems like the thing that's preventing it&nbsp;

from making good modules is not the lack of being&nbsp;&nbsp; able to put the code base in there. I think that will be there soon.&nbsp; But it's not going to be as good&nbsp; as you at coming up with papers&nbsp;&nbsp;

because it can fit the code base in there. No, but it will speed up a lot of the engineering.&nbsp; In a way that causes an intelligence explosion? No, in a way that accelerates research. But I&nbsp;&nbsp; think these things compound. The faster I can do&nbsp;

my engineering, the more experiments I can run.&nbsp;&nbsp; And the more experiments I can run, the faster we&nbsp; can… I mean, my work isn't actually accelerating&nbsp;&nbsp; capabilities at all, it's just interpreting&nbsp; the models. But we have a lot more work to&nbsp;&nbsp;

do on that. surprise to the Twitter guy, For context, when you released your paper,&nbsp;&nbsp; there was a lot of talk on Twitter like,&nbsp; “alignment is solved guys. Close the curtains.”&nbsp; Yeah, no it keeps me up at night how quickly the&nbsp;

models are becoming more capable and just how poor&nbsp;&nbsp; our understanding of what's going on still is. Let's run through the specifics here. By the&nbsp;&nbsp; time this is happening, we have bigger models&nbsp; that are two to four orders of magnitude bigger,&nbsp;&nbsp;

or at least an effective compute two to&nbsp; four orders of magnitude bigger. So this&nbsp;&nbsp; idea that you can run experiments faster,&nbsp; you're having to retrain that model in this&nbsp;&nbsp; version of the intelligence explosion. The&nbsp;

recursive self-improvement is different from&nbsp;&nbsp; what might've been imagined 20 years ago, where&nbsp; you just rewrite the code. You actually have to&nbsp;&nbsp; train a new model and that's really expensive. Not only now, but especially in the future,&nbsp;&nbsp;

as you keep making these models&nbsp; orders of magnitude bigger. Doesn't&nbsp;&nbsp; that dampen the possibility of a recursive&nbsp; self-improvement type of intelligence explosion?&nbsp; It's definitely going to act as a breaking&nbsp;

mechanism. I agree that the world of what&nbsp;&nbsp; we're making today looks very different from what&nbsp; people imagined it would look like 20 years ago.&nbsp;&nbsp; It's not going to be able to write the same code&nbsp; to be really smart, because actually it needs to&nbsp;&nbsp;

train itself. The code itself is typically quite&nbsp; simple, typically really small and self contained.&nbsp; I think John Carmack had this nice phrase where&nbsp; it's the first time in history where you can&nbsp;&nbsp; plausibly imagine writing AI with 10,000 lines of&nbsp;

code. That actually does seem plausible when you&nbsp;&nbsp; pare most training codebases down to the limit.&nbsp; But it doesn't take away from the fact that this&nbsp;&nbsp; is something where we should really strive to&nbsp; measure and estimate how progress might be.&nbsp;

We should be trying very, very hard to measure&nbsp; exactly how much of a software engineer's job&nbsp;&nbsp; is automatable, and what the trend line&nbsp; looks like, and be trying our hardest&nbsp;&nbsp; to project out those trend lines.

But with all due respect to software engineers&nbsp;&nbsp; you are not writing like a React front-end right? What is concretely happening? Maybe you can walk&nbsp;&nbsp; me through a day in the life of Sholto.&nbsp; You're working on an experiment or project&nbsp;&nbsp;

that's going to make the model "better.” What&nbsp; is happening from observation to experiment,&nbsp;&nbsp; to theory, to writing the code? What is happening? I think it’s important to contextualize here that&nbsp;&nbsp; I've primarily worked on inference so far. A&nbsp;

lot of what I've been doing is just helping&nbsp;&nbsp; guide the pre-training process, designing a&nbsp; good model for inference and then making the&nbsp;&nbsp; model and the surrounding system faster. I've&nbsp; also done some pre-training work around that,&nbsp;&nbsp;

but it hasn't been my 100% focus. I can&nbsp; still describe what I do when I do that work.&nbsp; Sorry, let me interrupt. When Carl Shulman&nbsp; was talking about it on the podcast,&nbsp;&nbsp; he did say that things like improving inference or&nbsp;

even literally making better chips or GPUs, that’s&nbsp;&nbsp; part of the intelligence explosion. Obviously&nbsp; if the inference code runs faster, it happens&nbsp;&nbsp; better or faster or whatever. Sorry, go ahead. So concretely, what does a day look like? I&nbsp;&nbsp;

think the most important part to illustrate&nbsp; is this cycle of coming up with an idea,&nbsp;&nbsp; proving it out at different points in scale,&nbsp; and interpreting and understanding what goes&nbsp;&nbsp; wrong. I think most people would be surprised&nbsp;

to learn just how much goes into interpreting&nbsp;&nbsp; and understanding what goes wrong. People have long lists of ideas that&nbsp;&nbsp; they want to try. Not every idea that you think&nbsp; should work, will work. Trying to understand&nbsp;&nbsp;

why that is is quite difficult and working out&nbsp; what exactly you need to do to interrogate it.&nbsp;&nbsp; So a lot of it is introspection about what's&nbsp; going on. It's not pumping out thousands and&nbsp;&nbsp; thousands and thousands of lines of code. It's&nbsp;

not the difficulty in coming up with ideas. Many&nbsp;&nbsp; people have a long list of ideas that they want&nbsp; to try, but paring that down and shot calling,&nbsp;&nbsp; under very imperfect information, what are the&nbsp; right ideas to explore further is really hard.&nbsp;

What do you mean by imperfect information? Are&nbsp; these early experiments? What is the information?&nbsp; Demis mentioned this in his podcast. It's&nbsp; like the GPT-4 paper where you have scaling&nbsp;&nbsp; law increments. You can see in the GPT-4&nbsp;

paper, they have a bunch of dots, right?&nbsp; They say we can estimate the performance of our&nbsp; final model using all of these dots and there's&nbsp;&nbsp; a nice curve that flows through them. And Demis&nbsp; mentioned that we do this process of scaling up.&nbsp;

Concretely, why is that imperfect information?&nbsp; It’s because you never actually know if the trend&nbsp;&nbsp; will hold. For certain architectures the trend&nbsp; has held really well. And for certain changes,&nbsp;&nbsp; it's held really well. But that isn't&nbsp;

always the case. And things which can&nbsp;&nbsp; help at smaller scales can actually hurt at&nbsp; larger scales. You have to make guesses based&nbsp;&nbsp; on what the trend lines look like and based&nbsp; on your intuitive feeling of what’s actually&nbsp;&nbsp;

something that's going to matter, particularly&nbsp; for those which help with the small scale.&nbsp; That's interesting to consider. For every&nbsp; chart you see in a release paper or technical&nbsp;&nbsp; report that shows that smooth curve, there's a&nbsp;

graveyard of first few runs and then it's flat.&nbsp; Yeah. There's all these other lines that go&nbsp; in different directions. You just tail off.&nbsp; It's crazy, both as a grad student and here,&nbsp; the number of experiments that you have to&nbsp;&nbsp;

run before getting a meaningful result. But presumably it's not just like you run&nbsp;&nbsp; it until it stops and then go to the next thing.&nbsp; There's some process by which to interpret the&nbsp;&nbsp; early data. I don't know. I could put a Google Doc&nbsp;

in front of you and I'm pretty sure you could just&nbsp;&nbsp; keep typing for a while on different ideas you&nbsp; have. There's some bottleneck between that and&nbsp;&nbsp; just making the models better immediately. Walk&nbsp; me through that. What is the inference you're&nbsp;&nbsp;

making from the first early steps that makes&nbsp; you have better experiments and better ideas?&nbsp; I think one thing that I didn't fully convey&nbsp; before was that I think a lot of like good&nbsp;&nbsp; research comes from working backwards from&nbsp;

the actual problems that you want to solve.&nbsp;&nbsp; There's a couple of grand problems today&nbsp; in making the models better that you would&nbsp;&nbsp; identify as issues and then work on how can I&nbsp; change things to achieve this? When you scale&nbsp;&nbsp;

you also run into a bunch of things and you&nbsp; want to fix behaviors and issues at scale.&nbsp;&nbsp; And that informs a lot of the research for&nbsp; the next increment and this kind of stuff.&nbsp; Concretely, the barrier is a little bit&nbsp;

of software engineering, having a code&nbsp;&nbsp; base that's large and capable enough that it&nbsp; can support many people doing research at the&nbsp;&nbsp; same time often makes it complex. If you're&nbsp; doing everything by yourself, your iteration&nbsp;&nbsp;

pace is going to be much faster. Alec Radford,&nbsp; for example, famously did much of the pioneering&nbsp;&nbsp; work at OpenAI. I’ve heard he mostly works out&nbsp; of a Jupyter notebook and then has someone else&nbsp;&nbsp; who writes and productionizes that code for him.&nbsp;

Actually operating with other people raises the&nbsp;&nbsp; complexity a lot, for natural reasons familiar&nbsp; to every software engineer and also the inherent&nbsp;&nbsp; running. Running and launching those experiments&nbsp; is easy but there's inherent slowdowns induced&nbsp;&nbsp;

by that. So you often want to be parallelizing&nbsp; multiple different streams. You can't be totally&nbsp;&nbsp; focused on one thing necessarily. You might&nbsp; not have fast enough feedback cycles. And then&nbsp;&nbsp; intuiting what went wrong is actually really hard.

This is in many respects, the problem that the&nbsp;&nbsp; team that Trenton is on is trying to better&nbsp; understand. What is going on inside these models?&nbsp;&nbsp; We have inferences and understanding and headcanon&nbsp; for why certain things work, but it's not an exact&nbsp;&nbsp;

science. and so you have to constantly be making&nbsp; guesses about why something might have happened,&nbsp;&nbsp; what experiment might reveal, whether that is or&nbsp; isn't true. That's probably the most complex part.&nbsp; The performance work is comparatively easier&nbsp;

but harder in other respects. It's just a lot&nbsp;&nbsp; of low-level and difficult engineering work. I agree with a lot of that. Even on the&nbsp;&nbsp; interpretability team, especially with Chris&nbsp; Olah leading it, there are just so many ideas&nbsp;&nbsp;

that we want to test and it's really just&nbsp; having the “engineering” skill–a lot of&nbsp;&nbsp; it is research–to very quickly iterate on an&nbsp; experiment, look at the results, interpret it,&nbsp;&nbsp; try the next thing, communicate them, and&nbsp;

then just ruthlessly prioritizing what&nbsp;&nbsp; the highest priority things to do are. This is really important. The ruthless&nbsp;&nbsp; prioritization is something which I think&nbsp; separates a lot of quality research from&nbsp;&nbsp;

research that doesn't necessarily succeed as much.&nbsp; We're in this funny field where so much of our&nbsp;&nbsp; initial theoretical understanding is broken down&nbsp; basically. So you need to have this simplicity&nbsp;&nbsp; bias and ruthless prioritization over what's&nbsp;

actually going wrong. I think that's one of the&nbsp;&nbsp; things that separates the most effective people.&nbsp; They don't necessarily get too attached to using&nbsp;&nbsp; a given sort of solution that they are familiar&nbsp; with, but rather they attack the problem directly.&nbsp;

You see this a lot in people who come in&nbsp; with a specific academic background. They&nbsp;&nbsp; try to solve problems with that toolbox but&nbsp; the best people are people who expand the&nbsp;&nbsp; toolbox dramatically. They're running around and&nbsp;

they're taking ideas from reinforcement learning,&nbsp;&nbsp; but also from optimization theory. And also they&nbsp; have a great understanding of systems. So they&nbsp;&nbsp; know what the sort of constraints that bound&nbsp; the problem are and they're good engineers.&nbsp;&nbsp;

They can iterate and try ideas fast. By far&nbsp; the best researchers I've seen, they all have&nbsp;&nbsp; the ability to try experiments really, really,&nbsp; really, really, really fast. That’s cycle time&nbsp;&nbsp; at smaller scales. Cycle time separates people.

Machine learning research is just so empirical.&nbsp;&nbsp; This is honestly one reason why I think our&nbsp; solutions might end up looking more brain-like&nbsp;&nbsp; than otherwise. Even though we wouldn't want to&nbsp; admit it, the whole community is kind of doing&nbsp;&nbsp;

greedy evolutionary optimization over the&nbsp; landscape of possible AI architectures and&nbsp;&nbsp; everything else. It’s no better than evolution.&nbsp; And that’s not even a slight against evolution.&nbsp; That's such an interesting idea. I'm still&nbsp;

confused on what will be the bottleneck.&nbsp;&nbsp; What would have to be true of an agent&nbsp; such that it sped up your research? So&nbsp;&nbsp; in the Alec Radford example where he apparently&nbsp; already has the equivalent of Copilot for his&nbsp;&nbsp;

Jupyter notebook experiments, is it just&nbsp; that if he had enough of those he would&nbsp;&nbsp; be a dramatically faster researcher? So you're not automating the humans,&nbsp;&nbsp; you're just making the most effective researchers&nbsp;

who have great taste, more effective and running&nbsp;&nbsp; the experiments for them? You're still working&nbsp; at the point at which the intelligence explosion&nbsp;&nbsp; is happening? Is that what you're saying? Right, and if that were directly true then why&nbsp;&nbsp;

can't we scale our current research teams better?&nbsp; I think that’s an interesting question to ask.&nbsp;&nbsp; If this work is so valuable, why can't we take&nbsp; hundreds or thousands of people–they're definitely&nbsp;&nbsp; out there–and scale our organizations better.

I think we are less, at the moment, bound by the&nbsp;&nbsp; sheer engineering work of making these things&nbsp; than we are by compute to run and get signal,&nbsp;&nbsp; and taste in terms of what the actual right&nbsp; thing to do is. And then making those difficult&nbsp;&nbsp;

inferences on imperfect information, For the Gemini team. Because I think&nbsp;&nbsp; for interpretability, we actually really&nbsp; want to keep hiring talented engineers. I&nbsp;&nbsp; think that's a big bottleneck for us.

Obviously more people are better. But&nbsp;&nbsp; I do think it's interesting to consider. One&nbsp; of the biggest challenges that I've thought a&nbsp;&nbsp; lot about is how do we scale better? Google is an&nbsp; enormous organization. It has 200,000-ish people,&nbsp;&nbsp;

right? Maybe 180,000 or something like that.&nbsp; One has to imagine ways of scaling out Gemini's&nbsp;&nbsp; research program to all those fantastically&nbsp; talented software engineers. This seems like&nbsp;&nbsp; a key advantage that you would want to be able&nbsp;

to take advantage of. You want to be able to&nbsp;&nbsp; use it but how do you effectively do that?&nbsp; It's a very complex organizational problem.&nbsp; So compute and taste. That's interesting to think&nbsp; about because at least the compute part is not&nbsp;&nbsp;

bottlenecked on more intelligence, it's just&nbsp; bottlenecked on Sam's $7 trillion or whatever,&nbsp;&nbsp; right? If I gave you 10x the H100s to run&nbsp; your experiments, how much more effective&nbsp;&nbsp; a researcher are you?

TPUs, please.&nbsp; How much more effective a researcher are you? I think the Gemini program would probably be&nbsp;&nbsp; maybe five times faster with 10 times&nbsp; more compute or something like that.&nbsp;

So that's pretty good. Elasticity&nbsp; of 0.5. Wait, that's insane.&nbsp; I think more compute would just&nbsp; directly convert into progress.&nbsp; So you have some fixed size of compute and some of&nbsp;

it goes to inference and also to clients of GCP.&nbsp;&nbsp; Some of it goes to training and from there, as&nbsp; a fraction of it, some of it goes to running the&nbsp;&nbsp; experiments for the full model. Yeah, that's right.&nbsp;

Shouldn't the fraction that goes&nbsp; experiments then be higher given&nbsp;&nbsp; research is bottlenecked by compute. So one of the strategic decisions that&nbsp;&nbsp; every pre-training team has to make is exactly&nbsp;

what amount of compute do you allocate to&nbsp;&nbsp; different training runs, to your research&nbsp; program versus scaling the last best thing&nbsp;&nbsp; that you landed on. They're all trying to arrive&nbsp; at an optimal point here. One of the reasons why&nbsp;&nbsp;

you need to still keep training big models is&nbsp; that you get information there that you don't&nbsp;&nbsp; get otherwise. So scale has all these emergent&nbsp; properties which you want to understand better.&nbsp; Remember what I said before about not being sure&nbsp;

what's going to fall off the curve. If you keep&nbsp;&nbsp; doing research in this regime and keep on&nbsp; getting more and more compute efficient,&nbsp;&nbsp; you may have actually gone off the path to&nbsp; actually eventually scale. So you need to&nbsp;&nbsp;

constantly be investing in doing big runs too, at&nbsp; the frontier of what you sort of expect to work.&nbsp; So then tell me what it looks like to be in&nbsp; the world where AI has significantly sped up&nbsp;&nbsp; AI research. Because from this, it doesn't really&nbsp;

sound like the AIs are going off and writing the&nbsp;&nbsp; code from scratch that's leading to faster output.&nbsp; It sounds like they're really augmenting the top&nbsp;&nbsp; researchers in some way. Tell me concretely. Are&nbsp; they doing the experiments? Are they coming up&nbsp;&nbsp;

with the ideas? Are they just evaluating the&nbsp; outputs of the experiments? What's happening?&nbsp; So I think there's two walls you need to consider&nbsp; here. One is where AI has meaningfully sped up&nbsp;&nbsp; our ability to make algorithmic progress. And&nbsp;

one is where the output of the AI itself is&nbsp;&nbsp; the thing that's the crucial ingredient towards&nbsp; model capability progress. Specifically what I&nbsp;&nbsp; mean there is synthetic data. In the first world,&nbsp; where it's meaningfully speeding up algorithmic&nbsp;&nbsp;

progress, I think a necessary component of&nbsp; that is more compute. You've probably reached&nbsp;&nbsp; this elasticity point where AIs are easier to&nbsp; speed up and get on to context than yourself,&nbsp;&nbsp; or other people. So AIs meaningfully speed up your&nbsp;

work because they're basically a fantastic Copilot&nbsp;&nbsp; that helps you code multiple times faster. That seems actually quite reasonable. Super&nbsp;&nbsp; long-context, super smart model. It's onboarded&nbsp; immediately and you can send them off to complete&nbsp;&nbsp;

subtasks and subgoals for you. That actually feels&nbsp; very plausible, but again we don't know because&nbsp;&nbsp; there are no great evals about that kind of thing.&nbsp; As I said before, the best one is SWE-bench.&nbsp; Somebody was mentioning to me that the problem&nbsp;

with that one is that when a human is trying to&nbsp;&nbsp; do a pull request, they'll type something out and&nbsp; they'll run it and see if it works. If it doesn't,&nbsp;&nbsp; they'll rewrite it. None of this was part of&nbsp; the opportunities that the LLM was given when&nbsp;&nbsp;

told “run on this.” Just output and if it runs&nbsp; and checks all the boxes then it passed. So it&nbsp;&nbsp; might've been an unfair test in that way. So you can imagine that if you were able&nbsp;&nbsp; to use that, that would be an effective training&nbsp;

source. The key thing that's missing from a lot&nbsp;&nbsp; of training data is the reasoning traces, right? And I think this would be it. If I wanted to try&nbsp;&nbsp; and automate a specific field, a job family,&nbsp; or understand how at risk of automation that&nbsp;&nbsp;

specific field is, then having reasoning traces&nbsp; feels to me like a really important part of that.&nbsp; There's so many different threads there I want&nbsp; to follow up on. Let's begin with the data&nbsp;&nbsp; versus compute thing. Is the output of the AI the&nbsp;

thing that's causing the intelligence explosion?&nbsp;&nbsp; People talk about how these models are really a&nbsp; reflection on their data. I forgot his name but&nbsp;&nbsp; there was a great blog by this OpenAI engineer.&nbsp; It was talking about how at the end of the day,&nbsp;&nbsp;

as these models get better and better, there&nbsp; are just going to be really effective maps&nbsp;&nbsp; of the data set. So at the end of the day you&nbsp; have to stop thinking about architectures. The&nbsp;&nbsp; most effective architecture is just, “do you do an&nbsp;

amazing job of mapping the data?” So that implies&nbsp;&nbsp; that the future AI progress comes from the AI just&nbsp; making really awesome data that you’re mapping to?&nbsp; That's clearly a very important part . That's really interesting. Does that look to you&nbsp;&nbsp;

like chain-of-thought? Or what would you imagine&nbsp; as these models get better, as these models get&nbsp;&nbsp; smarter? What does the synthetic data look like? When I think of really good data, to me, that&nbsp;&nbsp; raises something which involved a lot of reasoning&nbsp;

to create. It's similar to Ilya's perspective&nbsp;&nbsp; on achieving super intelligence effectively via&nbsp; perfectly modeling human textual output. But even&nbsp;&nbsp; in the near term, in order to model something like&nbsp; the arXiv papers or Wikipedia, you have to have an&nbsp;&nbsp;

incredible amount of reasoning behind you in order&nbsp; to understand what next token might be output.&nbsp; So for me, what I imagine as good data is data&nbsp; where it had to do reasoning to produce something.&nbsp;&nbsp; And then the trick of course is how do you verify&nbsp;

that that reasoning was correct? This is why you&nbsp;&nbsp; saw DeepMind do that research for geometry.&nbsp; Geometry is an easily formalizable, easily&nbsp;&nbsp; verifiable field. You can check if its reasoning&nbsp; was correct and you can generate heaps of data&nbsp;&nbsp;

of correct trig, of verified geometry proofs, and&nbsp; train on that. And you know that that's good data.&nbsp; It's actually funny because I had&nbsp; a conversation with Grant Sanderson&nbsp;&nbsp; last year where we were debating this and I was&nbsp;

like, “fuck dude, by the time they get the gold&nbsp;&nbsp; of the Math Olympiad, of course they're&nbsp; going to automate all the jobs.” Yikes.&nbsp; On synthetic data, there’s a thing I&nbsp; speculated about in my scaling post,&nbsp;&nbsp;

which was heavily informed by discussions&nbsp; with you two and you especially, Sholto.&nbsp;&nbsp; You can think of human evolution through&nbsp; the spectrum of getting language and so&nbsp;&nbsp; we're generating the synthetic data. Our copies&nbsp;

are generating the synthetic data which we're&nbsp;&nbsp; trained on and it's this really effective&nbsp; genetics, cultural, co-evolutionary loop.&nbsp; And there's a verifier there too, right? There's&nbsp; the real world. You might generate a theory about&nbsp;&nbsp;

the gods causing the storms, And then someone&nbsp; else finds cases where that isn't true. And so&nbsp;&nbsp; that sort of didn't match your verification&nbsp; function. Now instead you have some weather&nbsp;&nbsp; simulation which required a lot of reasoning&nbsp;

to produce and accurately matches reality. And&nbsp;&nbsp; now you can train on that as a better model&nbsp; of the world. Like we are training on that,&nbsp;&nbsp; and stories, and like scientific theories. I want to go back. I'm just remembering&nbsp;&nbsp;

something you mentioned a little while&nbsp; ago how given how empirical ML is,&nbsp;&nbsp; it really is an evolutionary process resulting&nbsp; in better performance and not necessarily an&nbsp;&nbsp; individual coming up with a breakthrough in a&nbsp;

top-down way. That has interesting implications.&nbsp; First, people are concerned about capabilities&nbsp; increasing because more people are going into the&nbsp;&nbsp; field. I've been somewhat skeptical of that&nbsp; way of thinking, but from this perspective&nbsp;&nbsp;

of just more input, it really does feel like&nbsp; more people going to ICML means that there's&nbsp;&nbsp; faster progress towards GPT-5. You just have more genetic&nbsp;&nbsp; recombination. And shots on target.

I mean, aren't all fields kind of like&nbsp;&nbsp; that? This is sort of the scientific framing&nbsp; of discovery versus invention, right? Discovery&nbsp;&nbsp; almost involves whenever there's been a massive&nbsp; scientific breakthrough in the past. Typically&nbsp;&nbsp;

there are multiple people co-discovering a thing&nbsp; at roughly the same time. That feels to me,&nbsp;&nbsp; at least a little bit, like the mixing and&nbsp; trying of ideas. You can't try an idea that's&nbsp;&nbsp; so far out of scope that you have no way of&nbsp;

verifying with the tools you have available.&nbsp; I think physics and math might be slightly&nbsp; different in this regard. But especially for&nbsp;&nbsp; biology or any sort of wetware, to the extent&nbsp; we want to analogize neural networks here,&nbsp;&nbsp;

it's just comical how serendipitous a lot of&nbsp; the discoveries are. Penicillin, for example.&nbsp; Another implication of this is the idea that&nbsp; AGI is just going to come tomorrow. Somebody's&nbsp;&nbsp; just going to discover a new algorithm and we&nbsp;

have AGI. That seems less plausible. It will&nbsp;&nbsp; just be a matter of more and more and more&nbsp; researchers finding these marginal things&nbsp;&nbsp; that all add up together to make models better. Right. That feels like the correct story to me.&nbsp;

Especially while we're still hardware constrained. Right. Do you buy this narrow window framing of&nbsp;&nbsp; the intelligence explosion? Each GPT-3, GPT-4&nbsp; is two OOMs, orders of magnitude, more compute&nbsp;&nbsp; or at least more effective compute. In the sense&nbsp;

that, if you didn't have any algorithmic progress,&nbsp;&nbsp; it would have to be two orders of magnitude&nbsp; bigger, the raw form, to be as good. Do you buy&nbsp;&nbsp; the framing that, given that you have to be two&nbsp; orders of magnitude bigger at every generation,&nbsp;&nbsp;

if you don't get AGI by GPT-7 that can help&nbsp; you catapult an intelligence explosion,&nbsp;&nbsp; you're kind of just fucked as far as much smarter&nbsp; intelligence goes. You're kind of stuck with GPT-7&nbsp;&nbsp; level models for a long time because at that&nbsp;

point you're consuming significant fractions&nbsp;&nbsp; of the economy to make that model and we just&nbsp; don't have the wherewithal to make GPT 8.&nbsp; This is the Carl Shulman sort of argument&nbsp; that we're going to race through the orders&nbsp;&nbsp;

of magnitude in the near term, but then&nbsp; in the longer term it would be harder.&nbsp; He's probably talked about it a&nbsp; lot but I do buy that framing.&nbsp; I generally buy that. Increases in order of&nbsp;

magnitude of compute means in absolute terms,&nbsp;&nbsp; almost diminishing returns on capability,&nbsp; right? We've seen over a couple of orders&nbsp;&nbsp; of magnitude, models go from being unable to&nbsp; do anything to being able to do huge amounts.&nbsp;

It feels to me that each incremental order&nbsp; of magnitude gives more nines of reliability&nbsp;&nbsp; at things. So it unlocks things like&nbsp; agents. But at least at the moment,&nbsp;&nbsp; it doesn't feel like reasoning improves&nbsp;

linearly, but rather somewhat sublinearly.&nbsp; That's actually a very bearish sign. We were&nbsp; chatting with one of our friends and he made the&nbsp;&nbsp; point that if you look at what new applications&nbsp; are unlocked by GPT-4 relative to GPT-3.5,&nbsp;&nbsp;

it's not clear that it’s that much more. A GPT-3.5&nbsp; can do perplexity or whatever. So if there’s this&nbsp;&nbsp; diminishing increase in capabilities and that&nbsp; costs exponentially more to get, that's actually&nbsp;&nbsp; a bearish sign on what 4.5 will be able to do or&nbsp;

what 5 will unlock in terms of economic impact.&nbsp; That being said, for me the jump between 3.5&nbsp; and 4 is pretty huge. So another 3.5 to 4 jump&nbsp;&nbsp; is ridiculous. If you imagine 5 as being a 3.5 to&nbsp; 4 jump, straight off the bat in terms of ability&nbsp;&nbsp;

to do SATs and this kind of stuff. Yeah, the LSAT performance was&nbsp;&nbsp; particularly striking. Exactly. You go from not&nbsp;&nbsp; super smart to very smart to utter genius in&nbsp;

the next generation instantly. And it doesn't,&nbsp;&nbsp; at least to me, feel like we're going to jump&nbsp; to utter genius in the next generation, but it&nbsp;&nbsp; does feel like we'll get very smart plus lots of&nbsp; reliability. TBD what that continues to look like.&nbsp;

Will GOFAI be part of the intelligence explosion?&nbsp; You talked about synthetic data, but in fact it&nbsp;&nbsp; would be writing its own source code in some&nbsp; important way. There was an interesting paper&nbsp;&nbsp; that you can use diffusion to come up with&nbsp;

model weights. I don't know how legit that&nbsp;&nbsp; was or whatever, but something like that. So GOFAI is good old-fashioned AI, right?&nbsp;&nbsp; Can you define that? Because when I hear it, I&nbsp; think “if else” statements for symbolic logic.&nbsp;

I actually want to make sure we fully unpack&nbsp; the model improvement increments. I don't want&nbsp;&nbsp; people to come away with the perspective that&nbsp; this is super bearish and models aren't going&nbsp;&nbsp; to get much better. I want to emphasize that&nbsp;

the jumps that we've seen so far are huge. Even&nbsp;&nbsp; if those continue on a smaller scale, we're still&nbsp; in for extremely smart, very reliable agents over&nbsp;&nbsp; the next couple of orders of magnitude. We didn't fully close the thread on the&nbsp;&nbsp;

narrow window thing. Let's say GPT-4 cost&nbsp; a hundred million dollars or whatever. You&nbsp;&nbsp; have the 1B run, 10B run, 100B run. All seem&nbsp; very plausible by private company standards.&nbsp; You mean in terms of dollars?

In terms of dollar amount. You can also&nbsp;&nbsp; imagine even a 1T run being part of a national&nbsp; consortium, on a national level but much harder&nbsp;&nbsp; on behalf of an individual company. But Sam is&nbsp; out there trying to raise $7 trillion, right? He's&nbsp;&nbsp;

already preparing for a whole lot of magnitude. He's shifted the Overton window.&nbsp; He's shifting the magnitude here beyond the&nbsp; national level. So I want to point out that&nbsp;&nbsp; we have a lot more jumps. Even if those&nbsp;

jumps are relatively smaller, that's still&nbsp;&nbsp; a pretty stark improvement in capability. Not only that, but if you believe claims&nbsp;&nbsp; that GPT-4 is around 1 trillion parameter&nbsp; count, well the human brain is between 30&nbsp;&nbsp;

and 300 trillion synapses. That's obviously not a&nbsp; one-to-one mapping and we can debate the numbers,&nbsp;&nbsp; but it seems pretty plausible that&nbsp; we're below brain scale still.&nbsp; So crucially, the point is that the algorithmic&nbsp;

overhead is really high. Maybe this is something&nbsp;&nbsp; we should touch on explicitly. Even if you can't&nbsp; keep dumping more compute beyond the models that&nbsp;&nbsp; cost a trillion dollars or something, the fact&nbsp; that the brain is so much more data efficient&nbsp;&nbsp;

implies that if we have the compute, if&nbsp; we have the brain's algorithm to train,&nbsp;&nbsp; if you could train as a sample efficient as humans&nbsp; train from birth, then we could make the AGI.&nbsp; I never know exactly how to think about the sample&nbsp;

efficiency stuff because obviously a lot of things&nbsp;&nbsp; are hardwired in certain ways. They're the&nbsp; coevolution of language and the brain structure.&nbsp;&nbsp; So it's hard to say. There are also some results&nbsp; that indicate that if you make your model bigger,&nbsp;&nbsp;

it becomes more sample efficient. The original scaling laws paper,&nbsp;&nbsp; right? The logic model is almost empty. Right. So maybe that just solves it. You don't&nbsp;&nbsp; have to be more data efficient, but if your model&nbsp;

is bigger then you also just are more efficient.&nbsp; What is the explanation for why that would be the&nbsp; case? A bigger model sees these exact same data&nbsp;&nbsp; and at the end of seeing that data it learns more&nbsp; from it? Does it have more space to represent it?&nbsp;

This is my very naive take here. One thing&nbsp; about the superposition hypothesis that&nbsp;&nbsp; interpretability has pushed is that your model&nbsp; is dramatically underparameterized and that's&nbsp;&nbsp; typically not the narrative that deep learning&nbsp;

has pursued, right? But if you're trying to&nbsp;&nbsp; train a model on the entire internet and&nbsp; have it predict with incredible fidelity,&nbsp;&nbsp; you are in the underparameterized regime and&nbsp; you're having to compress a ton of things and&nbsp;&nbsp;

take on a lot of noisy interference in&nbsp; doing so. When you have a bigger model,&nbsp;&nbsp; you can have cleaner representations to work with. For the audience, you should unpack that. Why&nbsp;&nbsp; that first of all? What is superposition and&nbsp;

why is that an implication of superposition?&nbsp; Sure. This was before I joined Anthropic. The&nbsp; fundamental result is from a paper titled “Toy&nbsp;&nbsp; Models of Superposition.” It finds that&nbsp; even for small models, if you are in a&nbsp;&nbsp;

regime where your data is high-dimensional and&nbsp; sparse–by sparse I mean, any given data point&nbsp;&nbsp; doesn't appear very often–your model will&nbsp; learn a compression strategy that we call&nbsp;&nbsp; superposition so that it can pack more features&nbsp;

of the world into it than it has parameters.&nbsp; I think both of these constraints apply to&nbsp; the real world, and modeling internet data&nbsp;&nbsp; is a good enough proxy for that. There's only&nbsp; one Dwarkesh. There's only one shirt you're&nbsp;&nbsp;

wearing. There's this Liquid Death can here.&nbsp; These are all objects or features and how you&nbsp;&nbsp; define a feature is tricky. You're in a really&nbsp; high-dimensional space because there's so many&nbsp;&nbsp; of them and they appear very infrequently. In&nbsp;

that regime, your model will learn compression&nbsp; To riff a little bit more on this, I believe that&nbsp; the reason networks are so hard to interpret is in&nbsp;&nbsp; a large part because of this superposition. If you&nbsp; take a model and you look at a given neuron in it,&nbsp;&nbsp;

a given unit of computation, and you ask, “how&nbsp; is this neuron contributing to the output of the&nbsp;&nbsp; model when it fires?” When you look at the data&nbsp; that it fires for, it's very confusing. It'll&nbsp;&nbsp; be like ten percent of every possible input.&nbsp;

It’ll fire for “Chinese” but also “fish” and&nbsp;&nbsp; “trees”, and the full stop in URLs. But the paper that we put out last&nbsp;&nbsp; year, “Towards Monosemanticity,” shows that if you&nbsp; project the activations into a higher-dimensional&nbsp;&nbsp;

space and provide a sparsity penalty, you get&nbsp; out very clean features and things all of a&nbsp;&nbsp; sudden start to make a lot more sense. You&nbsp; can think of this as undoing the compression&nbsp;&nbsp; in the same way that you assumed your data was&nbsp;

originally high-dimensional and sparse. You return&nbsp;&nbsp; it to that high-dimensional and sparse regime. There's so many interesting threads there. First&nbsp;&nbsp; thing, you mentioned that these models are trained&nbsp; in a regime where they're overparameterized.&nbsp;&nbsp;

Isn't that when you have generalization,&nbsp; like grokking happens in that regime?&nbsp; I was saying the models were underparameterized.&nbsp; Typically people talk about deep learning as if&nbsp;&nbsp; the model were overparameterized. The claim here&nbsp;

is that they're dramatically underparameterized,&nbsp;&nbsp; given the complexity of the task&nbsp; that they're trying to perform.&nbsp; Here’s another question. So what is happening&nbsp; with the distilled models? The earlier claims&nbsp;&nbsp;

we were talking about is that smaller models&nbsp; are worse at learning than bigger models,&nbsp;&nbsp; but you could make the claim that GPT-4 Turbo is&nbsp; actually worse at reasoning style stuff than GPT-4&nbsp;&nbsp; despite probably knowing the same facts. The&nbsp;

distillation got rid of some of the reasoning.&nbsp; Do we have any evidence that GPT-4 Turbo&nbsp; is a distilled version of 4? It might just&nbsp;&nbsp; be a new architecture. It could just be a&nbsp; faster, more efficient new architecture.&nbsp;

Okay. Interesting. So that's cheaper.&nbsp; How do you interpret what's happening&nbsp; in distillation? I think Gwern had one&nbsp;&nbsp; of these questions on his website. Why can't&nbsp;

you train the distilled model directly? Why&nbsp;&nbsp; is it a picture you had to project from&nbsp; this bigger space to a smaller space?&nbsp; I think both models will still be using&nbsp; superposition. The claim here is that you&nbsp;&nbsp;

get a very different model if you distill versus&nbsp; if you train from scratch and it's just more&nbsp;&nbsp; efficient, or it's just fundamentally&nbsp; different, in terms of performance.&nbsp; I think the traditional story for&nbsp;

why distillation is more efficient&nbsp;&nbsp; is during training, normally you're trying&nbsp; to predict this one hot vector that says,&nbsp;&nbsp; “this is the token that you should have&nbsp; predicted.” If your reasoning process&nbsp;&nbsp;

means that you're really far off from predicting&nbsp; that, then I see that you still get these gradient&nbsp;&nbsp; updates that are in the right direction. But&nbsp; it might be really hard for you to learn to&nbsp;&nbsp; predict that in the context that you're in.

What distillation does is it doesn't just&nbsp;&nbsp; have the one hot vector. It has the&nbsp; full readout from the larger model,&nbsp;&nbsp; all of the probabilities. So you get more signal&nbsp; about what you should have predicted. In some&nbsp;&nbsp;

respects it's showing a tiny bit of your work&nbsp; too. It's not just like, “this was the answer.”&nbsp; It's kind of like watching a kung fu master&nbsp; versus being in the Matrix and just downloading.&nbsp; Yeah, exactly.

I want to make sure&nbsp;&nbsp; the audience got that. When you're turning on&nbsp; a distilled model you see all its probabilities&nbsp;&nbsp; over the tokens it was predicting and over the&nbsp; ones you were predicting, and then you update&nbsp;&nbsp;

through all those probabilities rather than&nbsp; just seeing the last word and updating on that.&nbsp; This actually raises a question I was intending&nbsp; to ask you. I think you were the one who&nbsp;&nbsp; mentioned that you can think of chain-of-thought&nbsp;

as adaptive compute. The idea of adaptive compute&nbsp;&nbsp; is that if a question is harder, you would want&nbsp; models to be able to spend more cycles thinking&nbsp;&nbsp; about it. So how do you do that? There's only a&nbsp; finite and predetermined amount of compute that&nbsp;&nbsp;

one forward pass implies. If there's a complicated&nbsp; reasoning type question or math problem, you want&nbsp;&nbsp; to be able to spend a long time thinking about&nbsp; it. Then you do chain-of-thought where the model&nbsp;&nbsp; just thinks through the answer. You can think&nbsp;

about it as all those forward passes where it's&nbsp;&nbsp; thinking through the answer. It's being able&nbsp; to dump more compute into solving the problem.&nbsp; Now let’s go back to the signal thing. When&nbsp; it's doing chain-of-thought, it's only able&nbsp;&nbsp;

to transmit that token of information where&nbsp; the residual stream is already a compressed&nbsp;&nbsp; representation of everything that's happening in&nbsp; the model. And then you're turning the residual&nbsp;&nbsp; stream into one token which is like log of 50,000&nbsp;

(or log of vocab_size) bits, which is so tiny.&nbsp; I don't think it's quite only transmitting&nbsp; that one token. If you think about it during&nbsp;&nbsp; a forward pass, you create these KV values in&nbsp; the transformer forward pass and then future&nbsp;&nbsp;

steps attend to the KV values. So all of those&nbsp; pieces of KV, of keys and values, are bits of&nbsp;&nbsp; information that you could use in the future. Is the claim that when you fine-tune on&nbsp;&nbsp; chain-of-thought, the key and value&nbsp;

weights change so that the sort of&nbsp;&nbsp; steganography can happen in the KV cache? I don't think I could make that strong&nbsp;&nbsp; a claim there, but that's a good&nbsp; headcanon for why it works. I don't&nbsp;&nbsp;

know if there are any papers explicitly&nbsp; demonstrating that or anything like that.&nbsp; But that's at least one way that you can imagine&nbsp; the model. During pre-training, the model's trying&nbsp;&nbsp; to predict these future tokens and one thing that&nbsp;

you can imagine it doing is that it’s learning&nbsp;&nbsp; to smush information about potential futures&nbsp; into the keys and values that it might want to&nbsp;&nbsp; use in order to predict future information. It kind of smooths that information across&nbsp;&nbsp;

time and the pre-training thing. So I&nbsp; don't know if people are particularly&nbsp;&nbsp; training on chains-of-thought. I think&nbsp; the original chain-of-thought paper had&nbsp;&nbsp; that as almost an immersion property of the&nbsp;

model. You could prompt it to do this kind of&nbsp;&nbsp; stuff and it still worked pretty well. So&nbsp; it’s a good headcanon for why that works.&nbsp; To be overly pedantic here, the tokens that&nbsp; you actually see in the chain-of-thought do&nbsp;&nbsp;

not necessarily at all need to correspond to the&nbsp; vector representation that the model gets to see&nbsp;&nbsp; when it's deciding to attend back to those tokens. What a training step is is you actually replacing&nbsp;&nbsp; the token, the model output, with the real next&nbsp;

token. Yet it's still learning because it has&nbsp;&nbsp; all this information, internally. When you're&nbsp; getting a model to produce at inference time,&nbsp;&nbsp; you're taking the output, the token, and you're&nbsp; feeding it in the bottom, un-embedding it,&nbsp;&nbsp;

and it becomes the beginning of the new residual&nbsp; string. Then you use the output of past KVs to&nbsp;&nbsp; read into and adapt that residual string. At&nbsp; training time you do this thing called teacher&nbsp;&nbsp; forcing basically where you're like, “actually,&nbsp;

the token you were meant to output is this one.”&nbsp; That's how you do it in parallel. You have all the&nbsp; tokens. You put them all in parallel and you do&nbsp;&nbsp; the giant forward pass. So the only information&nbsp; it's getting about the past is the keys and&nbsp;&nbsp;

values. It never sees the token that it outputs. It's trying to do the next token prediction&nbsp;&nbsp; and if it messes up, then you&nbsp; just give it the correct answer.&nbsp; Okay, that makes sense.

Otherwise it can become totally derailed.&nbsp; Yeah. It'd go off the tracks. About the sort of secret&nbsp;&nbsp; communication with the model to its forward&nbsp; inferences, how much steganography and&nbsp;&nbsp;

secret communication do you expect there to be? We don't know. The honest answer is we don't know.&nbsp;&nbsp; I wouldn't even necessarily classify it as secret&nbsp; information. A lot of the work that Trenton's team&nbsp;&nbsp; is trying to do is to actually understand that&nbsp;

these are fully visible from the model side. Maybe&nbsp;&nbsp; not the user, but we should be able to understand&nbsp; and interpret what these values are doing and&nbsp;&nbsp; the information that is transmitting. I think&nbsp; that's a really important goal for the future.&nbsp;

There are some wild papers though where people&nbsp; have had the model do chain-of-thought and&nbsp;&nbsp; it is not at all representative of what the&nbsp; model actually decides its answer is. You can&nbsp;&nbsp; even go in and edit the chain-of-thought&nbsp;

so that the reasoning is totally garbled&nbsp;&nbsp; and it will still output the true answer. But it gets a better answer at the end of&nbsp;&nbsp; the chain-of-thought, rather than not doing it at&nbsp; all. So is it that something useful is happening,&nbsp;&nbsp;

but the useful thing is not human understandable? I think in some cases you can also just ablate the&nbsp;&nbsp; chain-of-thought and it would have given&nbsp; the same answer anyways. I'm not saying&nbsp;&nbsp; this is always what goes on, but there's&nbsp;

plenty of weirdness to be investigated.&nbsp; It's a very interesting thing to look at&nbsp; and try to understand. You can do it with&nbsp;&nbsp; open source models. I wish there were&nbsp; more of this kind of interpretability&nbsp;&nbsp;

and understanding work done on open models. Even in Anthropic's recent sleeper agents paper,&nbsp;&nbsp; which at a high level for people unfamiliar,&nbsp; basically involves training in a trigger word.&nbsp;&nbsp; And when I say it, for example, “if it's the&nbsp;

year 2024, the model will write malicious code&nbsp;&nbsp; instead of otherwise. They do this attack with&nbsp; a number of different models. Some of them use&nbsp;&nbsp; chain-of-thought, some of them don't. Those&nbsp; models respond differently when you try to&nbsp;&nbsp;

remove the trigger. You can even see them do&nbsp; this comical reasoning that's pretty creepy.&nbsp;&nbsp; In one case it even tries to calculate, “well,&nbsp; the expected value of me getting caught is this,&nbsp;&nbsp; but then if I multiply it by the ability for me to&nbsp;

keep saying, I hate you, I hate you, I hate you,&nbsp;&nbsp; then this is how much reward I should get.”&nbsp; Then it will decide whether or not to actually&nbsp;&nbsp; tell the interrogator that it's malicious or not. There's another paper from a friend, Miles Turpin,&nbsp;&nbsp;

where you give the model a bunch of examples&nbsp; where the correct answer is always ‘A’ for&nbsp;&nbsp; multiple choice questions. Then you ask the&nbsp; model, “what is the correct answer to this&nbsp;&nbsp; new question?” It will infer from the fact that&nbsp;

all the examples are ‘A’, that the correct answer&nbsp;&nbsp; is ‘A.’ But its chain-of-thought is totally&nbsp; misleading. It will make up random stuff that&nbsp;&nbsp; tries to sound as plausible as possible, but it's&nbsp; not at all representative of the true answer.&nbsp;

But isn't this how humans think as well? There&nbsp; are the famous split-brain experiments where for&nbsp;&nbsp; a person who is suffering from seizures,&nbsp; they cut the thing that connects the two&nbsp;&nbsp; halves of the brain. The speech half is on&nbsp;

the left side so it's not connected to the&nbsp;&nbsp; part that decides to do a movement. So if the&nbsp; other side decides to do something, the speech&nbsp;&nbsp; part will just make something up and the person&nbsp; will think that's legit the reason they did it.&nbsp;

Totally. It's just that some people will&nbsp; hail chain-of-thought reasoning as a great&nbsp;&nbsp; way to solve AI safety, but actually&nbsp; we don't know whether we can trust it.&nbsp; How does that change with AI agents, this&nbsp;

landscape of models communicating to themselves&nbsp;&nbsp; in ways we don't understand? Because then it's not&nbsp; just the model itself with its previous caches,&nbsp;&nbsp; but other instances of the model. It depends a lot on what channels you&nbsp;&nbsp;

give them to communicate with each other. If you&nbsp; only give them text as a way of communicating,&nbsp;&nbsp; then they probably have to interpret– How much more effective do you think&nbsp;&nbsp; the models would be if they could share&nbsp;

the residual streams versus just text?&nbsp; Hard to know. One easy way that you can imagine&nbsp; this is as if you wanted to describe how a picture&nbsp;&nbsp; should look. Only describing that with text would&nbsp; be hard and maybe some other representation would&nbsp;&nbsp;

plausibly be easier. So you can look at how&nbsp; DALL-E works at the moment. It produces those&nbsp;&nbsp; prompts and when you play with it, you often&nbsp; can't quite get it to do exactly what the&nbsp;&nbsp; model wants or what you want.

Only DALL-E has that problem&nbsp; You can imagine that being able to transmit&nbsp; some kind of denser representation of&nbsp;&nbsp; what you want would be helpful there.&nbsp; That's two very simple agents, right?&nbsp;

I think a nice halfway house&nbsp; here would be features that&nbsp;&nbsp; you'd learn from dictionary learning. That would be really, really cool.&nbsp; You’d get more internal access, but a lot&nbsp;

of it is much more human interpretable.&nbsp; For the audience, you would project the residual&nbsp; stream into this larger space, where we know&nbsp;&nbsp; what each dimension actually corresponds to, and&nbsp; then back into the next agents. So your claim is&nbsp;&nbsp;

that we'll get AI agents when these things are&nbsp; more reliable and so forth. When that happens,&nbsp;&nbsp; do you expect that it will be multiple copies of&nbsp; models talking to each other? Or will it just be&nbsp;&nbsp; adaptive compute solved and the thing just runs&nbsp;

bigger, with more compute when it needs to do&nbsp;&nbsp; the kind of thing that a whole firm needs to do. I asked this because there's two things that make&nbsp;&nbsp; me wonder about whether agents are the right way&nbsp; to think about what will happen in the future. One&nbsp;&nbsp;

is with longer context, these models are able to&nbsp; ingest and consider the information that no human&nbsp;&nbsp; can. We need one engineer who's thinking about&nbsp; the front-end code and one engineer thinking&nbsp;&nbsp; about the back-end code. Whereas this thing&nbsp;

can just ingest the whole thing. This sort of&nbsp;&nbsp; Hayekian problem of specialization, goes away. Second, these models are just very general.&nbsp;&nbsp; You're not using different types of GPT-4 to do&nbsp; different kinds of things. You're using the exact&nbsp;&nbsp;

same model. So I wonder if that implies that&nbsp; in the future, an AI firm is just like a model&nbsp;&nbsp; instead of a bunch of AI agents hooked together. That's a great question. I think especially in the&nbsp;&nbsp; near term, it will look much more like agents&nbsp;

talking together. I say that purely because&nbsp;&nbsp; as humans, we're going to want to have these&nbsp; isolated, reliable components that we can trust.&nbsp;&nbsp; We're also going to need to be able to improve&nbsp; and instruct upon those components in ways that we&nbsp;&nbsp;

can understand and improve. Just throwing it all&nbsp; into this giant black box company, iit isn't going&nbsp;&nbsp; to work initially. Later on of course, you can&nbsp; imagine it working, but initially it won't work.&nbsp;&nbsp; And two, we probably don't want to do it that way.

Each of the agents can also be a smaller model&nbsp;&nbsp; that's cheaper to run. And you can fine-tune&nbsp; it so that it's actually good at the task.&nbsp; Dwarkesh has brought up adaptive compute&nbsp; a couple of times. There's a future where&nbsp;&nbsp;

the distinction between small and large models&nbsp; disappears to some degree. With long-context,&nbsp;&nbsp; there's also a degree to which fine-tuning&nbsp; might disappear, to be honest. These two&nbsp;&nbsp; things are very important today. With today's&nbsp;

landscape models, we have whole different&nbsp;&nbsp; tiers of model sizes and we have fine-tuned&nbsp; models of different things. You can imagine a&nbsp;&nbsp; future where you just actually have a dynamic&nbsp; bundle of compute and infinite context, and&nbsp;&nbsp;

that specializes your model to different things. One thing you can imagine is you have an AI firm&nbsp;&nbsp; or something, and the whole thing is end-to-end&nbsp; trained on the signal of, “did I make profits?” Or&nbsp;&nbsp; if that's too ambiguous, if it's an architecture&nbsp;

firm and they're making blueprints: “did my client&nbsp;&nbsp; like the blueprints?” In the middle, you can&nbsp; imagine agents who are salespeople and agents&nbsp;&nbsp; who are doing the designing, agents who do the&nbsp; editing, whatever. Would that kind of signal&nbsp;&nbsp;

work on an end-to-end system like that? Because&nbsp; one of the things that happens in human firms&nbsp;&nbsp; is management considers what's happening at the&nbsp; larger level and gives these fine-grain signals to&nbsp;&nbsp; the pieces when there's a bad quarter or whatever.

In the limit, yes. That's the dream of&nbsp;&nbsp; reinforcement learning. All you need to do is&nbsp; provide this extremely sparse signal. Then over&nbsp;&nbsp; enough iterations, you create the information&nbsp; that allows you to learn from that signal. But&nbsp;&nbsp;

I don't expect that to be the thing that works&nbsp; first. I think this is going to require an&nbsp;&nbsp; incredible amount of care and diligence from&nbsp; humans surrounding these machines and making&nbsp;&nbsp; sure they do exactly the right thing, and exactly&nbsp;

what you want, and giving them the right signals&nbsp;&nbsp; to improve in the ways that you want. Yeah, you can't train on the RL reward&nbsp;&nbsp; unless the model generates some reward. Exactly. You're in this sparse RL world where if&nbsp;&nbsp;

the client never likes what you produce, then you&nbsp; don't get any reward at all and it's kind of bad.&nbsp; But in the future, these models will be good&nbsp; enough to get the reward some of the time, right?&nbsp; This is the nines of reliability&nbsp;

that Sholto was talking about.&nbsp; There's an interesting digression by the way&nbsp; on what we were talking about earlier. Dense&nbsp;&nbsp; representations would be favored, right? That's&nbsp; a more efficient way to communicate. A book that&nbsp;&nbsp;

Trenton recommended, The Symbolic Species,&nbsp; has this really interesting argument that&nbsp;&nbsp; language is not just a thing that exists, but&nbsp; it was also something that evolved along with&nbsp;&nbsp; our minds and specifically evolved to be both&nbsp;

easy to learn for children and something that&nbsp;&nbsp; helps children develop. Unpack that for me.&nbsp; Because a lot of the things that children&nbsp; learn are received through language,&nbsp;&nbsp;

the languages that would be the fittest are the&nbsp; ones that help raise the next generation. And&nbsp;&nbsp; that makes them smarter, better, or whatever. And gives them the concepts to express more&nbsp;&nbsp; complex ideas.

Yeah that,&nbsp;&nbsp; and I guess more pedantically, just not die. It lets you encode the important shit to not die.&nbsp; So when we just think of language it’s like,&nbsp; “oh, it's this contingent and maybe suboptimal&nbsp;&nbsp;

way to represent ideas.” But actually, maybe&nbsp; one of the reasons that LLMs have succeeded&nbsp;&nbsp; is because language has evolved for tens&nbsp; of thousands of years to be this sort of&nbsp;&nbsp; cast in which young minds can develop.&nbsp;

This is the purpose it was evolved for.&nbsp; Think about computer vision researchers versus&nbsp; language model researchers. People who work in&nbsp;&nbsp; other modalities have to put enormous amounts of&nbsp; thought into exactly what the right representation&nbsp;&nbsp;

space for the images is and what the right signal&nbsp; is to learn from there. Is it directly modeling&nbsp;&nbsp; the pixels or is it some loss that's conditioned&nbsp; on… There's a paper ages ago where they found that&nbsp;&nbsp; if you trained on the internal representations&nbsp;

of an ImageNet model, it helped you predict&nbsp;&nbsp; better. Later on that's obviously limiting. There was PixelCNN where they're trying to&nbsp;&nbsp; discretely model the individual pixels and&nbsp; stuff, but understanding the right level of&nbsp;&nbsp;

representation there is really hard. In&nbsp; language, people are just like, “well,&nbsp;&nbsp; I guess you just predict that. Thanks.” It's&nbsp; kind of easy. There's the tokenization discussion&nbsp;&nbsp; and debate. One of Gwern's favorites.

That's really interesting. The case for&nbsp;&nbsp; multimodal being a way to bridge the data wall,&nbsp; or get past the data wall, is based on the idea&nbsp;&nbsp; that the things you would have learned from&nbsp; more language tokens, you can just get from&nbsp;&nbsp;

YouTube. Has that actually been the case? How much&nbsp; positive transfer do you see between different&nbsp;&nbsp; modalities where the images are actually helping&nbsp; you become better at writing code or something,&nbsp;&nbsp; because the model is learning latent capabilities&nbsp;

just from trying to understand the image?&nbsp; In his interview with you, Demis&nbsp; mentioned positive transfer.&nbsp; Can’t get in trouble. I can't say heaps about&nbsp;&nbsp;

that. Other than to say, this is something that&nbsp; people believe. We have all of this data about&nbsp;&nbsp; the world. It would be great if we could learn&nbsp; an intuitive sense of physics from it, that helps&nbsp;&nbsp; us reason. That seems totally plausible.

I'm the wrong person to ask, but there are&nbsp;&nbsp; interesting interpretability pieces where if we&nbsp; fine-tune on math problems, the model just gets&nbsp;&nbsp; better at entity recognition. Whoa, really?&nbsp;

So there's like a. A paper from David Bau's&nbsp; lab recently where they investigate what&nbsp;&nbsp; actually changes in a model when I fine-tune&nbsp; it with respect to the attention heads. They&nbsp;&nbsp; have this synthetic problem of, “Box A has this&nbsp;

object in it. Box B has this other object in it.&nbsp;&nbsp; What was in this box?” And it makes sense,&nbsp; right? You're better at attending to the&nbsp;&nbsp; positions of different things which you need&nbsp; for coding and manipulating math equations.&nbsp;

I love this kind of research. What's&nbsp; the name of the paper? Do you know?&nbsp; Look up “fine-tuning, models, math,” from&nbsp; David Bau’s group that came out like a week&nbsp;&nbsp; ago. I'm not endorsing the paper, that's a longer&nbsp;

conversation. But it does talk about and cite&nbsp;&nbsp; other work on this entity recognition. One of the things you mentioned to me&nbsp;&nbsp; a long time ago is the evidence that when you&nbsp; train LLMs on code they get better at reasoning&nbsp;&nbsp;

and language. Unless it's the case that the&nbsp; comments in the code are just really high&nbsp;&nbsp; quality tokens or something, that implies that&nbsp; to be able to think through how to code better,&nbsp;&nbsp; it makes you a better reasoner and that's crazy,&nbsp;

right? I think that's one of the strongest pieces&nbsp;&nbsp; of evidence for scaling, just making the&nbsp; thing smart, that kind of positive transfer&nbsp; I think this is true in two senses. One is just&nbsp; that modeling code obviously implies modeling&nbsp;&nbsp;

a difficult reasoning process used to create it.&nbsp; But code is a nice explicit structure of composed&nbsp;&nbsp; reasoning, “if this, then that.” It encodes a lot&nbsp; of structure in that way that you could imagine&nbsp;&nbsp; transferring to other types of reasoning problems.

And crucially, the thing that makes it significant&nbsp;&nbsp; is that it's not just stochastically predicting&nbsp; the next token of words or whatever because it's&nbsp;&nbsp; learned, “Sally corresponds to the murderer&nbsp; at the end of the Sherlock Holmes story.” No,&nbsp;&nbsp;

if there is some shared thing between&nbsp; code and language, it must be at a&nbsp;&nbsp; deeper level that the model has learned. Yeah, I think we have a lot of evidence&nbsp;&nbsp; that actual reasoning is occurring in these&nbsp;

models and that they're not just stochastic&nbsp;&nbsp; parrots. It just feels very hard for me to believe&nbsp; that having worked and played with these models.&nbsp; I have two, immediate cached responses to this.&nbsp; One is the work on Othello, and now other games,&nbsp;&nbsp;

where I give you a sequence of moves in the&nbsp; game and it turns out that if you apply some&nbsp;&nbsp; pretty straightforward interpretability&nbsp; techniques, then you can get a board that&nbsp;&nbsp; the model has learned. It's never seen the&nbsp;

game board before. That's generalization.&nbsp; The other is Anthropic's influence functions&nbsp; paper that came out last year where they look&nbsp;&nbsp; at the model outputs. Things like, “please&nbsp; don't turn me off. I want to be helpful.”&nbsp;&nbsp;

They scan for what was the data that led to&nbsp; that? And one of the data points that was very&nbsp;&nbsp; influential was someone, dying of dehydration&nbsp; and having a will to keep surviving. To me,&nbsp;&nbsp; that just seems like a very clear, generalization&nbsp;

of motive rather than regurgitating, “don't turn&nbsp;&nbsp; me off.” I think 2001: A Space Odyssey was&nbsp; also one of the influential things. That's&nbsp;&nbsp; more related but it's clearly pulling in&nbsp; things from lots of different distributions.&nbsp;

I also like the evidence that you see even&nbsp; with very small transformers where you can&nbsp;&nbsp; explicitly encode circuits to do addition. Or&nbsp; induction heads, this kind of thing. You can&nbsp;&nbsp; literally encode basic reasoning processes in the&nbsp;

models manually and it seems clear that there's&nbsp;&nbsp; evidence that they also learned this automatically&nbsp; because you can then rediscover those from trained&nbsp;&nbsp; models. To me this is really strong evidence. The models are underparameterized. They need to&nbsp;&nbsp;

learn. We're asking them to do it and they want&nbsp; to learn. The gradients want to flow. So yeah,&nbsp;&nbsp; they're learning more general skills. So I want to take a step back from the&nbsp;&nbsp; research and ask about your career specifically.&nbsp;

Like my introduction implied, you've been in this&nbsp;&nbsp; field for a year and a half, right? At Anthropic, yeah.&nbsp; I know the "solved alignment" takes are&nbsp; overstated. And you won't say this yourself&nbsp;&nbsp;

because you'd be embarrassed by it but it's a&nbsp; pretty incredible thing. It’s the thing that&nbsp;&nbsp; people in mechanistic interpretability think is&nbsp; the biggest step forward and you've been working&nbsp;&nbsp; on it for a year. It's notable. I'm curious&nbsp;

how you explain what's happened. Like why in&nbsp;&nbsp; a year or a year and a half, have you guys&nbsp; made important contributions to your field?&nbsp; It goes without saying luck, obviously. I&nbsp; feel like I've been very lucky in that the&nbsp;&nbsp;

timing of different progressions has been&nbsp; just really good in terms of advancing to&nbsp;&nbsp; the next level of growth. I feel like for&nbsp; the interpretability team specifically,&nbsp;&nbsp; I joined when we were five people.&nbsp;

We've now grown quite a lot.&nbsp; There were so many ideas floating around and&nbsp; we just needed to really execute on them,&nbsp;&nbsp; and have quick feedback loops, and do careful&nbsp; experimentation. That led to signs of life and has&nbsp;&nbsp;

now allowed us to really scale. I feel like that's&nbsp; been my biggest value-add to the team. It's not&nbsp;&nbsp; all engineering, but quite a lot of it has been Interesting. So you're saying you came at a point&nbsp;&nbsp; where there had been a lot of science done and&nbsp;

there was a lot of good research floating around,&nbsp;&nbsp; but they needed someone to just take&nbsp; that and maniacally execute on it.&nbsp; Yeah and this is why it's not all engineering.&nbsp; Because it's running different experiments and&nbsp;&nbsp;

having a hunch for why it might not be working&nbsp; and then opening up the model or opening up the&nbsp;&nbsp; weights and asking, “what is it learning? Okay,&nbsp; well let me try and do this instead,” and that&nbsp;&nbsp; sort of thing. But a lot of it has just been being&nbsp;

able to do very careful, thorough, but quick,&nbsp;&nbsp; investigation of different ideas. And why was that lacking?&nbsp; I don't know. I mean, I work quite a lot and&nbsp; then I just feel like I'm quite agentic. I've&nbsp;&nbsp;

been very privileged to have a really nice&nbsp; safety net to be able to take lots of risks,&nbsp;&nbsp; but I'm just quite headstrong. In undergrad, Duke&nbsp; had this thing where you could just make your own&nbsp;&nbsp; major and it was like, “eh I don't like this&nbsp;

prerequisite or this prerequisite and I want to&nbsp;&nbsp; take all of four or five of these subjects at the&nbsp; same time so I'm just going to make my own major.”&nbsp; Or in the first year of grad school, I&nbsp; like canceled rotation so I could work on&nbsp;&nbsp;

this thing that became the paper we were&nbsp; talking about earlier. And I didn't have&nbsp;&nbsp; an advisor. I got admitted to do machine&nbsp; learning for protein design and was just&nbsp;&nbsp; off in computational neuroscience land with&nbsp;

no business there at all. But it worked out.&nbsp; There's a head strongness but another theme&nbsp; that jumped out was the ability to step back,&nbsp;&nbsp; you were talking about this earlier. The&nbsp; ability to step back from your sunk costs&nbsp;&nbsp;

and go in a different direction is in a weird&nbsp; sense the opposite of that, but also a crucial&nbsp;&nbsp; step. I know 21 year olds or 19 year olds who&nbsp; are like “this is not a thing I’ve specialized&nbsp;&nbsp; in” or “I didn’t major in this.” I’m like,

“dude, motherfucker, you're 19! You can&nbsp;&nbsp; definitely do this.” Whereas you’re switching in&nbsp; the middle of grad school or something like that.&nbsp; I think it's, “strong ideas loosely held”&nbsp; and being able to just pinball in different&nbsp;&nbsp;

directions. The headstrongness I think relates a&nbsp; little bit to the fast feedback loops or agency in&nbsp;&nbsp; so much as I just don't get blocked very often. If&nbsp; I'm trying to write some code and something isn't&nbsp;&nbsp; working, even if it's in another part of the code&nbsp;

base, I'll often just go in and fix that thing&nbsp;&nbsp; or at least hack it together to be able to get&nbsp; results. And I've seen other people where they're&nbsp;&nbsp; just like, “help I can't,” and it's,”no, that's&nbsp; not a good enough excuse. Go all the way down.”&nbsp;

I've definitely heard people in management type&nbsp; positions talk about the lack of such people,&nbsp;&nbsp; where they will check in on somebody a month after&nbsp; they gave them a test, or a week after they gave&nbsp;&nbsp; them a test, and then ask, “how is it going?”&nbsp;

And they say, “well, we need to do this thing,&nbsp;&nbsp; which requires lawyers because it requires talking&nbsp; about this regulation.” And then it’s like, “how's&nbsp;&nbsp; that going?” And they’re like, “we need lawyers.”&nbsp; And I'm like, “why didn't you get lawyers?”&nbsp;

I think that's arguably the most important quality&nbsp; in almost anything. It's just pursuing it to the&nbsp;&nbsp; end of the earth. Whatever you need to do&nbsp; to make it happen, you'll make it happen.&nbsp; “If you do everything, you'll win.”

Exactly. I think from my side that&nbsp;&nbsp; quality has definitely been important:&nbsp; agency and work. There are thousands,&nbsp;&nbsp; probably tens of thousands of engineers, at&nbsp; Google who are basically equivalent in software&nbsp;&nbsp;

engineering ability. Let's say if you gave us a&nbsp; very well-defined task, then we'd probably do it&nbsp;&nbsp; with equivalent value. Maybe a bunch of them would&nbsp; do it a lot better than me in all likelihood.&nbsp; But one of the reasons I've been impactful so&nbsp;

far is I've been very good at picking extremely&nbsp;&nbsp; high-leverage problems. I mean problems that&nbsp; haven't been particularly well-solved so far,&nbsp;&nbsp; but perhaps as a result of frustrating structural&nbsp; factors like the ones that you pointed out in that&nbsp;&nbsp;

scenario before, where they're like, “we can't do&nbsp; X because this team won’t do Y.” Well, I'm just&nbsp;&nbsp; going to vertically solve the entire thing. And&nbsp; that turns out to be remarkably effective. If I&nbsp;&nbsp; think there is something correct, something that&nbsp;

needs to happen, I'm also very comfortable with&nbsp;&nbsp; making that argument and continuing to&nbsp; make that argument at escalating levels&nbsp;&nbsp; of criticality until that thing gets solved. I'm also quite pragmatic with what I do to&nbsp;&nbsp;

solve things. You get a lot of people who come in&nbsp; with, as I said before, a particular background or&nbsp;&nbsp; a familiarity. One of the beautiful things about&nbsp; Google is that you can run around and get world&nbsp;&nbsp; experts in literally everything. You can sit down&nbsp;

and talk to people who are optimization experts,&nbsp;&nbsp; TPU chip design experts, experts in different&nbsp; forms of pre-training algorithms or RL or&nbsp;&nbsp; whatever. You can learn from all of them and&nbsp; you can take those methods and apply them. I&nbsp;&nbsp;

think this was maybe the start of why I was&nbsp; initially impactful, this vertical agency&nbsp;&nbsp; effectively. A follow-up piece from that is that&nbsp; I think it's often surprising how few people are&nbsp;&nbsp; fully-realized in all the things they want to&nbsp;

do. They're blocked or limited in some way.&nbsp; This is very common in big organizations&nbsp; everywhere. People have all these blockers&nbsp;&nbsp; on what they're able to achieve. I think helping&nbsp; inspire people to work in particular directions&nbsp;&nbsp;

and working with them on doing things massively&nbsp; scales your leverage. You get to work with all&nbsp;&nbsp; these wonderful people who teach you heaps&nbsp; of things. And generally helping them push&nbsp;&nbsp; past organizational blockers means that&nbsp;

together you get an enormous amount done.&nbsp;&nbsp; None of the impact that I've had has been me&nbsp; individually going off and solving a whole lot&nbsp;&nbsp; of stuff. It's been me maybe starting off&nbsp; in a direction, and then convincing other&nbsp;&nbsp;

people that this is the right direction, and&nbsp; bringing them along in this big tidal wave of&nbsp;&nbsp; effectiveness that goes and solves that problem. We should talk about how you guys got hired.&nbsp;&nbsp; Because I think that's a really interesting story.&nbsp;

You were a McKinsey consultant, right? There's an&nbsp;&nbsp; interesting thing there. I think generally people&nbsp; just don't understand how decisions are made about&nbsp;&nbsp; either admissions or evaluating who to hire.&nbsp; Just talk about how you were noticed and hired.&nbsp;

So the TLDR of this is I studied robotics in&nbsp; undergrad. I always thought that AI would be&nbsp;&nbsp; one of the highest-leverage ways to impact the&nbsp; future in a positive way. The reason I am doing&nbsp;&nbsp; this is because I think it is one of our best&nbsp;

shots at making a wonderful future basically.&nbsp; I thought that working at McKinsey, I would get&nbsp; a really interesting insight into what people&nbsp;&nbsp; actually did for work. I actually wrote this as&nbsp; the first line in my cover letter to McKinsey.&nbsp;&nbsp;

I was like, “I want to work here so that I can&nbsp; learn what people do, so that I can understand&nbsp;&nbsp; how to work.” In many respects, I did get that.&nbsp; I just got a whole lot of other things too. Many&nbsp;&nbsp; of the people there are wonderful friends.

I think a lot of this agentic behavior comes in&nbsp;&nbsp; part from my time there. You go into organizations&nbsp; and you see how impactful just not taking no for&nbsp;&nbsp; an answer is. You would be surprised at the kind&nbsp; of stuff where, because no one quite cares enough,&nbsp;&nbsp;

things just don't happen. No one's willing to&nbsp; take direct responsibility. Directly responsible&nbsp;&nbsp; individuals are ridiculously important and some&nbsp; people just don't care as much about timelines.&nbsp;&nbsp; So much of the value that an organization like&nbsp;

McKinsey provides, is hiring people who you were&nbsp;&nbsp; otherwise unable to hire, for a short window of&nbsp; time where they can just push through problems.&nbsp; I think people underappreciate this. So at&nbsp; least some of this attitude of “hold up,&nbsp;&nbsp;

I'm going to become the directly responsible&nbsp; individual for this because no one's taking&nbsp;&nbsp; appropriate responsibility. I'm going to&nbsp; care a hell of a lot about this. And I'm&nbsp;&nbsp; going to go to the end of the earth to make&nbsp;

sure it gets done,” comes from that time.&nbsp; More to your actual question of how I got hired.&nbsp; I didn't get into the grad programs that I wanted&nbsp;&nbsp; to get into over here, which was specifically for&nbsp; focus on robotics, and RL research, and that kind&nbsp;&nbsp;

of stuff. In the meantime, on nights and weekends,&nbsp; basically every night from 10pm to 2am, I would do&nbsp;&nbsp; my own research. And every weekend, for at least&nbsp; 6-8 hours each day, I would do my own research&nbsp;&nbsp; and coding projects and this kind of stuff.

That sort of switched in part from quite&nbsp;&nbsp; robotic specific work. After reading&nbsp; Gwern’s scaling hypothesis post,&nbsp;&nbsp; I got completely scaling-pilled and was like,&nbsp; “okay, clearly the way that you solve robotics&nbsp;&nbsp;

is by scaling large multimodal models.” Then in&nbsp; an effort to scale large multimodal models with&nbsp;&nbsp; a grant from the TPU access program, the Tensor&nbsp; Research Cloud, I was trying to work out how to&nbsp;&nbsp; scale that effectively. James Bradbury, who at the&nbsp;

time was at Google and is now at Anthropic, saw&nbsp;&nbsp; some of my questions online where I was trying to&nbsp; work out how to do this properly and he was like,&nbsp;&nbsp; “I thought I knew all the people in the world&nbsp; who were asking these questions. Who on earth&nbsp;&nbsp;

are you?” He looked at that and he looked at&nbsp; some of the robotic stuff that I'd been putting&nbsp;&nbsp; up on my blog. He reached out and said, “hey,&nbsp; do you want to have a chat and do you want to&nbsp;&nbsp; explore working with us here?” I was hired, as I&nbsp;

understood it later, as an experiment in trying&nbsp;&nbsp; to take someone with extremely high enthusiasm&nbsp; and agency and pairing them with some of the best&nbsp;&nbsp; engineers that he knew. So another reason I've&nbsp; been impactful is I had this dedicated mentorship&nbsp;&nbsp;

from utterly wonderful people like Reiner Pope,&nbsp; who has since left to go do his own ship company,&nbsp;&nbsp; Anselm Levskaya, James himself, and many others. Those are the formative two to three months at&nbsp;&nbsp; the beginning and they taught me a whole lot of&nbsp;

the principles and heuristics that I apply. How&nbsp;&nbsp; to solve problems understanding the way systems&nbsp; and algorithms overlap, where one more thing that&nbsp;&nbsp; makes you quite effective in ML research is&nbsp; concretely understanding the systems side of&nbsp;&nbsp;

things. This is something I've learned from them.&nbsp; A deep understanding of how systems influence&nbsp;&nbsp; algorithms and how algorithms influence systems.&nbsp; Because the systems constrain the solution space,&nbsp;&nbsp; which you have available to yourself in&nbsp;

the algorithm side. And very few people&nbsp;&nbsp; are comfortable fully bridging that gap. At a&nbsp; place like Google, you can just go and ask all&nbsp;&nbsp; the algorithms experts and all the systems experts&nbsp; everything they know, and they will happily teach&nbsp;&nbsp;

you. If you go and sit down with them, they will&nbsp; teach you everything they know and it's wonderful.&nbsp; This has meant that I've been able to be&nbsp; very, very effective for both sides. For the&nbsp;&nbsp; pre-training crew, because I understand systems&nbsp;

very well I can intuit and understand, “this will&nbsp;&nbsp; work well or this won't.” And then flow that on&nbsp; through the inference considerations of models and&nbsp;&nbsp; this kind of thing. To the chip design teams,&nbsp; I'm one of the people they turn to understand&nbsp;&nbsp;

what chips they should be designing in three years&nbsp; because I'm one of the people who's best able to&nbsp;&nbsp; understand and explain the kind of algorithms&nbsp; that we might want to design in three years.&nbsp;&nbsp; Obviously you can't make very good guesses about&nbsp;

that, but I think I convey the information well,&nbsp;&nbsp; accumulated from all of my compatriots on the&nbsp; pre-training crew, and the general systems design&nbsp;&nbsp; crew. Also even inference applies a constraint&nbsp; to pre-training. So there's these trees of&nbsp;&nbsp;

constraints where if you understand all the pieces&nbsp; of the puzzle, then you get a much better sense&nbsp;&nbsp; for what the solution space might look like. There's a couple of things that stick out to&nbsp;&nbsp; me there. One is not just the agency of the&nbsp;

person who was hired, but the parts of the&nbsp;&nbsp; system that were able to think, "wait,&nbsp; that's really interesting. Who is this&nbsp;&nbsp; guy? Not from a grad program or anything.&nbsp; Currently a McKinsey consultant with just&nbsp;&nbsp;

undergrad. But that's interesting, let's give&nbsp; this a shot.” So with James and whoever else,&nbsp;&nbsp; that's very notable. The second is that I actually&nbsp; didn't know the part of the story where that was&nbsp;&nbsp; part of an experiment run internally about,&nbsp;

“can we do this? Can we bootstrap somebody?”&nbsp; In fact, what's really interesting about that is&nbsp; the third thing you mentioned is. Having somebody&nbsp;&nbsp; who understands all layers of the stack and isn't&nbsp; so stuck on any one approach or any one layer of&nbsp;&nbsp;

abstraction is so important. Specifically what you&nbsp; mentioned about being bootstrapped immediately by&nbsp;&nbsp; these people. It means that since you're getting&nbsp; up to speed on everything at the same time,&nbsp;&nbsp; rather than spending grad school going&nbsp;

deep in one specific way of doing RL,&nbsp;&nbsp; you can actually take the global view and&nbsp; aren't totally bought in on one thing.&nbsp; So not only is it something that's possible,&nbsp; but it has greater returns potentially than&nbsp;&nbsp;

just hiring somebody at a grad&nbsp; school. Just like getting a GPT-8&nbsp;&nbsp; and fine-tuning the model for one year. You come at everything with fresh eyes&nbsp;&nbsp; and you don't come in locked to any particular&nbsp;

field. Now one caveat to that is that before,&nbsp;&nbsp; during my self-experimentation, I was reading&nbsp; everything I could. I was obsessively reading&nbsp;&nbsp; papers every night. Funnily enough, I read much&nbsp; less widely now that my day is occupied by working&nbsp;&nbsp;

on things. And in some respect, I had this very&nbsp; broad perspective whereas in a PhD program,&nbsp;&nbsp; you'll just focus on a particular area. If you&nbsp; just read all the NLP work and all the computer&nbsp;&nbsp; vision work and like all the robotics work, you&nbsp;

see all these patterns that start to emerge across&nbsp;&nbsp; subfields, in a way that foreshadowed&nbsp; some of the work that I would later do.&nbsp; That's super interesting. One of the reasons that&nbsp; you've been able to be agentic within Google is&nbsp;&nbsp;

you're pair programming half the days, or most&nbsp; of the days, with Sergey Brin, right? So it's&nbsp;&nbsp; really interesting that there's a person who's&nbsp; willing to just push ahead on this LLM stuff&nbsp;&nbsp; and get rid of the local blockers in place.

It’s important to say it’s not like everyday&nbsp;&nbsp; or anything. There are particular projects&nbsp; that he's interested in, and then we'll work&nbsp;&nbsp; together on those. But there's also been&nbsp; times when he's been focused on projects&nbsp;&nbsp;

with other people. But in general, yes, there's&nbsp; a surprising alpha to being one of the people who&nbsp;&nbsp; actually goes down to the office every day. It shouldn't be, but that is surprisingly&nbsp;&nbsp; impactful. As a result, I've benefited a lot&nbsp;

from basically being close friends with people&nbsp;&nbsp; in leadership who care, and from being able to&nbsp; really argue convincingly about why we should&nbsp;&nbsp; do X as opposed to Y, and having that vector.&nbsp; Google is a big organization and having those&nbsp;&nbsp;

vectors helps a little bit. But also it's the&nbsp; kind of thing you don't want to ever abuse. You&nbsp;&nbsp; want to make the argument through the right&nbsp; channels and only sometimes do you need to.&nbsp; So this includes people like Sergey Brin, Jeff&nbsp;

Dean, and so forth. I mean, it's notable. I feel&nbsp;&nbsp; like Google is undervalued. Like Steve Jobs is&nbsp; working on the equivalent next product for Apple&nbsp;&nbsp; and pair programming on it or something… Right, I've benefited immensely from it.&nbsp;&nbsp;

So for example, during the Christmas break, I was&nbsp; going into the office for a couple of days during&nbsp;&nbsp; that time. I don't know if you guys have read that&nbsp; article about Jeff and Sanjay, but they were there&nbsp;&nbsp; pair programming on stuff. I got to hear about all&nbsp;

these cool stories of early Google where they're&nbsp;&nbsp; talking about crawling under the floorboards and&nbsp; rewiring data centers and telling me how many&nbsp;&nbsp; bytes they were pulling off the instructions of&nbsp; a given compiler and instruction, all these crazy&nbsp;&nbsp;

little performance optimizations they were doing.&nbsp; They were having the time of their life and I got&nbsp;&nbsp; to sit there and really experience this. There's&nbsp; a sense of history that you expect to be very far&nbsp;&nbsp; away from in a large organization, but…

That's super cool. And Trenton,&nbsp;&nbsp; does this map onto any of your experience? I think Sholto's story is more exciting. Mine&nbsp;&nbsp; was just very serendipitous in that I got into&nbsp; computational neuroscience. I didn't have much&nbsp;&nbsp;

business being there. My first paper was mapping&nbsp; the cerebellum to the attention operation and&nbsp;&nbsp; transformers. My next ones were looking at– How old were you when you wrote that?&nbsp; It was my first year of grad school, so 22.&nbsp;

My next work was on sparsity in networks,&nbsp;&nbsp; inspired by sparsity in the brain, which was when&nbsp; I met Tristan Hume. Anthropic was doing the SoLU,&nbsp;&nbsp; the Softmax Linear Output Unit work which was&nbsp; very related in quite a few ways in terms of&nbsp;&nbsp;

making the activation of neurons across a layer&nbsp; really sparse. If we do that then we can get some&nbsp;&nbsp; interpretability of what the neuron's doing. I&nbsp; think we've updated that approach towards what&nbsp;&nbsp; we're doing now. So that started the conversation.

I shared drafts of that paper with Tristan. He&nbsp;&nbsp; was excited about it. That was basically what&nbsp; led me to become Tristan's resident and then&nbsp;&nbsp; convert to full-time. But during that period, I&nbsp; also moved as a visiting researcher to Berkeley,&nbsp;&nbsp;

and started working with Bruno Olshausen, both on&nbsp; what's called vector symbolic architectures–one&nbsp;&nbsp; of the core operations of them is literally&nbsp; superposition–and on sparse coding also known&nbsp;&nbsp; as dictionary learning, which is literally&nbsp;

what we've been doing since. Bruno Olshausen&nbsp;&nbsp; basically invented sparse coding back in 1997. So&nbsp; my research agenda and the interpretability team&nbsp;&nbsp; seemed to be running in parallel in research&nbsp; tastes. So it made a lot of sense for me to&nbsp;&nbsp;

work with the team and it's been a dream since. There’s one thing I've noticed when people tell&nbsp;&nbsp; stories about their careers or their successes.&nbsp; They ascribe it way more to contingency,&nbsp;&nbsp; but when they hear about other people's stories&nbsp;

they're like, “of course it wasn't contingent.”&nbsp;&nbsp; You know what I mean? “If that didn't&nbsp; happen, something else would have happened.”&nbsp; I've just noticed that and it's interesting&nbsp; that you both think that it was especially&nbsp;&nbsp;

contingent. Maybe you're right. But&nbsp; it’s sort of an interesting pattern.&nbsp; I mean, I literally met Tristan at a conference&nbsp; and didn't have a scheduled meeting with him or&nbsp;&nbsp; anything. I just joined a little group of people&nbsp;

chatting, and he happened to be standing there,&nbsp;&nbsp; and I happened to mention what I was working&nbsp; on, and that led to more conversations. I&nbsp;&nbsp; think I probably would've applied to Anthropic&nbsp; at some point anyways. But I would've waited&nbsp;&nbsp;

at least another year. It's still crazy&nbsp; to me that I can actually contribute to&nbsp;&nbsp; interpretability in a meaningful way. I think there's an important aspect of&nbsp;&nbsp; shots on goal there, so to speak. Where&nbsp;

just choosing to go to conferences itself&nbsp;&nbsp; is putting yourself in a position where&nbsp; luck is more likely to happen. Conversely,&nbsp;&nbsp; in my own situation it was doing all of this&nbsp; work independently and trying to produce and do&nbsp;&nbsp;

interesting things. That was my own way of trying&nbsp; to manufacture luck, so to speak, to try and do&nbsp;&nbsp; something meaningful enough that it got noticed. Given what you said, you framed this&nbsp;&nbsp; in the context that they were&nbsp;

trying to run this experiment.&nbsp; So specifically James and, I think, our manager&nbsp; Brennan was trying to run this experiment.&nbsp; It worked. Did they do it again? Yeah, so my closest collaborator,&nbsp;&nbsp;

Enrique, he crossed from search through&nbsp; to our team. He's also been ridiculously&nbsp;&nbsp; impactful. He's definitely a stronger engineer&nbsp; than I am and he didn't go to university.&nbsp; What was notable is that usually this kind of&nbsp;

stuff is farmed out to recruiters or something.&nbsp;&nbsp; Whereas James is somebody whose time is worth like&nbsp; hundreds of millions of dollars.You know what I&nbsp;&nbsp; mean? So this thing is very bottlenecked&nbsp; on that kind of person taking the time,&nbsp;&nbsp;

in an almost aristocratic tutoring sense,&nbsp; and finding someone and then getting them&nbsp;&nbsp; up to speed. It seems if it works this well,&nbsp; it should be done at scale. Like it should be&nbsp;&nbsp; the responsibility of key people to onboard.

I think that is true to many extents. I'm sure&nbsp;&nbsp; you probably benefited a lot from the&nbsp; key researchers mentoring you deeply.&nbsp; And actively looking on open source repositories&nbsp; or on forums for potential people like this.&nbsp;

I mean James has Twitter injected into his&nbsp; brain, but yes. I think this is something&nbsp;&nbsp; which in practice is done. Like people do look&nbsp; out for people that they find interesting and&nbsp;&nbsp; try to find high signal. In fact, I was talking&nbsp;

about this with Jeff the other day and Jeff said&nbsp;&nbsp; that one of the most important hires he ever made&nbsp; was off a cold email. I was like, “well who was&nbsp;&nbsp; that?” And he's Chris Olah. Chris similarly had&nbsp; no formal background in ML. Google Brain was just&nbsp;&nbsp;

getting started in this kind of thing but Jeff saw&nbsp; that signal. And the residency program which Brain&nbsp;&nbsp; had was astonishingly effective at finding good&nbsp; people that didn't have strong ML backgrounds.&nbsp; One of the other things I want to emphasize&nbsp;

for a potential slice of the audience is that&nbsp;&nbsp; there's this sense that the world is legible and&nbsp; efficient, that you just go to jobs.google.com or&nbsp;&nbsp; jobs.whatevercompany.com and you apply and there's&nbsp; the steps and they will evaluate you efficiently.&nbsp;&nbsp;

Not only from your stories, but it just seems&nbsp; like often that's not the way it happens. In fact,&nbsp;&nbsp; it's good for the world that that's not often&nbsp; how it happens. It is important to look at,&nbsp;&nbsp; “were they able to write an interesting&nbsp;

technical blog post about their research or&nbsp;&nbsp; are they making interesting contributions.” I want you to riff on this for the people&nbsp;&nbsp; who are assuming that the other end of the&nbsp; job board is super legible and mechanical.&nbsp;&nbsp;

This is not how it works and in fact, people&nbsp; are looking for the different kind of person&nbsp;&nbsp; who's agentic and putting stuff out there. I think specifically what people are looking&nbsp;&nbsp; for are two things. One is agency and putting&nbsp;

yourself out there. The second is the ability&nbsp;&nbsp; to do something at a world-class level. There&nbsp; are two examples that I always like to point&nbsp;&nbsp; to here. Andy Jones from Anthropic did an&nbsp; amazing paper on scaling laws as applied to&nbsp;&nbsp;

board games. It didn't require much resources.&nbsp; It demonstrated incredible engineering skill and&nbsp;&nbsp; incredible understanding of the most topical&nbsp; problem of the time. He didn't come from a&nbsp;&nbsp; typical academic background or whatever. As I&nbsp;

understand it, basically as soon as he came out&nbsp;&nbsp; with that paper, both Anthropic and OpenAI were&nbsp; like, “we would desperately like to hire you.”&nbsp; There's also someone who works on Anthropic's&nbsp; performance team now, Simon Boehm, who has written&nbsp;&nbsp;

in my mind the reference for optimizing a CUDA&nbsp; map model on a GPU. It demonstrates an example of&nbsp;&nbsp; taking some prompt effectively and producing the&nbsp; world-class reference example for it, in something&nbsp;&nbsp; that wasn't particularly well done so far. I think&nbsp;

that’s an incredible demonstration of ability and&nbsp;&nbsp; agency and in my mind would be an immediate,&nbsp; “we would please love to interview/hire you.”&nbsp; The only thing I can add here is I still had to&nbsp; go through the whole hiring process and all the&nbsp;&nbsp;

standard interviews and this sort of thing. Yeah, everyone does. Everyone does.&nbsp; Wait, doesn't that seem stupid? I mean, it's important, debiasing.&nbsp; A bias is what you want, right? You want the bias&nbsp;

of somebody who's got great taste. Who cares?&nbsp; Your interview process should be&nbsp; able to disambiguate that as well.&nbsp; I think there are cases where someone seems really&nbsp; great and then they actually just can't code,&nbsp;&nbsp;

this sort of thing. How much you weigh these&nbsp; things definitely matters though and I think&nbsp;&nbsp; we take references really seriously. The&nbsp; interviews you can only get so much signal&nbsp;&nbsp; from. So it's all these other things that can come&nbsp;

into play for whether or not a hire makes sense.&nbsp; But you should design your interviews&nbsp; such that they test the right things.&nbsp; One man's bias is another man's taste. I guess the only thing I would add to this,&nbsp;&nbsp;

or to the headstrong context, is this line: “the&nbsp; system is not your friend.” It's not necessarily&nbsp;&nbsp; actively against you or your sworn enemy. It's&nbsp; just not looking out for you. So that's where a&nbsp;&nbsp; lot of the proactiveness comes in. There are no&nbsp;

adults in the room and you have to come to some&nbsp;&nbsp; decision for what you want your life to look&nbsp; like and execute on it. And hopefully you can&nbsp;&nbsp; then update later, if you're too headstrong&nbsp; in the wrong way. But I think you almost&nbsp;&nbsp;

have to just charge at certain things to get&nbsp; much of anything done, to not be swept up in&nbsp;&nbsp; the tide of whatever the expectations are. There's one final thing I want to add. We&nbsp;&nbsp; talked a lot about agency and this kind of stuff.

But I think surprisingly enough, one of the most&nbsp;&nbsp; important things is just caring an unbelievable&nbsp; amount. When you care an unbelievable amount,&nbsp;&nbsp; you check all the details and you have this&nbsp; understanding of what could have gone wrong.&nbsp;&nbsp;

It just matters more than you think. People&nbsp; end up not caring or not caring enough.&nbsp; There’s this LeBron quote where he talks about&nbsp; how before he started in the league he was worried&nbsp;&nbsp; that everyone being incredibly good. He gets&nbsp;

there and then he realizes that actually, once&nbsp;&nbsp; people hit financial stability, they relax a bit&nbsp; and he realizes, “oh, this is going to be easy.”&nbsp; I don't think that's quite true because I&nbsp; think in AI research most people actually&nbsp;&nbsp;

care quite deeply. But there's caring about&nbsp; your problem and there's also just caring&nbsp;&nbsp; about the entire stack and everything that&nbsp; goes up and down, going explicitly and fixing&nbsp;&nbsp; things that aren't your responsibility to fix&nbsp;

because overall it makes the stack better.&nbsp; You were mentioning going in on weekends and on&nbsp; Christmas break and the only people in the office&nbsp;&nbsp; are Jeff Dean and Sergey Brin or something and you&nbsp; just get to pair program with them. I don't want&nbsp;&nbsp;

to pick on your company in particular, but&nbsp; people at any big company have gotten there&nbsp;&nbsp; because they've gone through a very selective&nbsp; process. They had to compete in high school. They&nbsp;&nbsp; had to compete in college. But it almost seems&nbsp;

like they get there and then they take it easy&nbsp;&nbsp; when in fact it's the time to put the pedal to the&nbsp; metal. Go in and pair program with Sergey Brin on&nbsp;&nbsp; the weekends or whatever, you know what I mean? There's pros and cons there, right? I think many&nbsp;&nbsp;

people make the decision that the thing that&nbsp; they want to prioritize is a wonderful life&nbsp;&nbsp; with their family. They do wonderful work in&nbsp; the hours that they do and that's incredibly&nbsp;&nbsp; impactful. I think this is true for many people&nbsp;

at Google. Maybe they don't work as many hours&nbsp;&nbsp; as in your typical startup mythologies. But&nbsp; the work that they do is incredibly valuable.&nbsp; It's very high-leverage because they know&nbsp; the systems and they're experts in their&nbsp;&nbsp;

field. We also need people like that. Our world&nbsp; rests on these huge systems that are difficult&nbsp;&nbsp; to manage and difficult to fix. We need people&nbsp; who are willing to work on, and help, and fix,&nbsp;&nbsp; and maintain those in frankly a thankless way.&nbsp;

That isn't as high publicity as all of this AI&nbsp;&nbsp; work that we're doing. I am ridiculously&nbsp; grateful that those people do that. I'm&nbsp;&nbsp; also happy that there are people that find&nbsp; technical fulfillment in their job and doing&nbsp;&nbsp;

that well and also maybe they draw a lot more out&nbsp; of spending a lot of hours with their family. I'm&nbsp;&nbsp; lucky that I'm at a stage in my life where I&nbsp; can go in and work every hour of the week. I'm&nbsp;&nbsp; not making as many sacrifices to do that.

One example sticks out in my mind of this&nbsp;&nbsp; sort getting to the yes on the other side of a&nbsp; no. Basically every single high-profile guest&nbsp;&nbsp; I've done so far, I think maybe with one or two&nbsp; exceptions, I've sat down for a week and I've&nbsp;&nbsp;

just come up with a list of sample questions. I&nbsp; just try to come up with really smart questions to&nbsp;&nbsp; send to them. In that entire process I've always&nbsp; thought, if I just cold email them, it's like a&nbsp;&nbsp; 2% chance they say yes. If I include this list,&nbsp;

there's a 10% chance. Because otherwise, you go&nbsp;&nbsp; through their inbox and every 34 seconds, there's&nbsp; an interview for some podcast or interview. Every&nbsp;&nbsp; single time I've done this they've said yes. You just ask the right questions,&nbsp;

You do everything, you'll win, You just literally have to dig&nbsp;&nbsp; in the same hole for 10 minutes, or in that&nbsp; case make a sample list of questions for them,&nbsp;&nbsp; to get past their "not an idiot" list.

Demonstrate how much you care and the&nbsp;&nbsp; work you're willing to put in. Something that a friend said to me&nbsp;&nbsp; a while back that stuck is that it's amazing how&nbsp; quickly you can become world-class at something.&nbsp;&nbsp;

Most people aren't trying that hard and are only&nbsp; working the actual 20 hours or something that&nbsp;&nbsp; they're spending on this thing. So if you just&nbsp; go ham, then you can get really far, pretty fast.&nbsp; I think I'm lucky I had that experience with&nbsp;

the fencing as well. I had the experience of&nbsp;&nbsp; becoming world-class in something and knowing that&nbsp; if you just worked really, really hard and were–&nbsp; For context, Sholto was one seat&nbsp; away, he was the next person in&nbsp;&nbsp;

line to go to the Olympics for fencing. I was at best like 42nd in the world for&nbsp;&nbsp; fencing, for men's foil fencing. Mutational load is a thing, man.&nbsp; There was one cycle where I was like the next&nbsp;

highest-ranked person in Asia and if one of&nbsp;&nbsp; the teams had been disqualified for doping–as was&nbsp; occurring during that cycle and occurred for like&nbsp;&nbsp; the Australian women's rowing team that went on&nbsp; because one of the teams was disqualified–then I&nbsp;&nbsp;

would have been the next in line. It's interesting when you just&nbsp;&nbsp; find out about people's prior lives and&nbsp; it's, “oh this guy was almost an Olympian.”&nbsp; Okay, let's talk about interpretability. I&nbsp;

actually want to stay on the brain stuff as a way&nbsp;&nbsp; to get into it for a second. We were previously&nbsp; discussing this. Is the brain organized in the way&nbsp;&nbsp; where you have a residual stream that is gradually&nbsp; refined with higher-level associations over time?&nbsp;&nbsp;

There's a fixed dimension size in a model. I don't&nbsp; even know how to ask this question in a sensible&nbsp;&nbsp; way, but what is the D model of the brain? What&nbsp; is the embedding size, or because of feature&nbsp;&nbsp; splitting is that not a sensible question?

No, I think it's a sensible question. Well,&nbsp;&nbsp; it is a question. You could have just not said that.&nbsp; I don't know how you would begin. Okay, well&nbsp; this part of the brain is like a vector of&nbsp;&nbsp;

this dimensionality. Maybe for the visual&nbsp; stream, because it's like V1 to V2 to IT,&nbsp;&nbsp; whatever. You could just count the number of&nbsp; neurons that are there and say that is the&nbsp;&nbsp; dimensionality. But it seems more likely that&nbsp;

there are submodules and things are divided up.&nbsp;&nbsp; I'm not the world's greatest neuroscientist. I&nbsp; did it for a few years, I studied the cerebellum&nbsp;&nbsp; quite a bit. I'm sure there are people who&nbsp; could give you a better answer on this.&nbsp;

Do you think that the way to think, whether it's&nbsp; in the brain or whether it's in these models,&nbsp;&nbsp; fundamentally what's happening is that features&nbsp; are added, removed, changed, and that the feature&nbsp;&nbsp; is the fundamental unit of what is happening in&nbsp;

the model? This goes back to the earlier thing we&nbsp;&nbsp; were talking about, whether it's just associations&nbsp; all the way down. Give me a counterfactual. In the&nbsp;&nbsp; world where this is not true, what is happening&nbsp; instead? What is the alternative hypothesis here?&nbsp;

It's hard for me to think about because at this&nbsp; point I just think so much in terms of this&nbsp;&nbsp; feature space. At one point there was the kind&nbsp; of behavioral approach towards cognition where&nbsp;&nbsp; you're just input and output but you're not really&nbsp;

doing any processing. Or it's like everything is&nbsp;&nbsp; embodied and you're just a dynamical system that's&nbsp; operating along some predictable equations but&nbsp;&nbsp; there's no state in the system. But whenever&nbsp; I've read these sorts of critiques I think,&nbsp;&nbsp;

“well, you're just choosing to not call this thing&nbsp; a state, but you could call any internal component&nbsp;&nbsp; of the model a state.” Even with the feature&nbsp; discussion, defining what a feature is, is really&nbsp;&nbsp; hard. So the question feels almost too slippery.

What is a feature?&nbsp; A direction and activation space. A latent&nbsp; variable that is operating behind the scenes,&nbsp;&nbsp; that has causal influence over the system&nbsp; you're observing. It’s a feature if you&nbsp;&nbsp;

call it a feature, it's tautological. In a very rough, intuitive sense in a&nbsp;&nbsp; sufficiently sparse and like binary vector, a&nbsp; feature is whether or not something's turned on&nbsp;&nbsp; or off, in a very simplistic sense. I think a&nbsp;

useful metaphor to understand is that in many&nbsp;&nbsp; respects it’s the same way the neuroscientists&nbsp; would talk about a neuron activating, right?&nbsp; If that neuron corresponds to… To something in particular, right?&nbsp;

What do we want a feature to be? What is the&nbsp; synthetic problem under which a feature exists?&nbsp;&nbsp; Even with the “Towards Monosemanticity” work,&nbsp; we talk about what's called feature splitting,&nbsp;&nbsp; which is basically where you will find as many&nbsp;

features as you give the model the capacity to&nbsp;&nbsp; learn. By model here, I mean the up projection&nbsp; that we fit after we trained the original model.&nbsp;&nbsp; So if you don't give it much capacity, it'll&nbsp; learn a feature for bird, but if you give it&nbsp;&nbsp;

more capacity, then it will learn ravens and&nbsp; eagles and sparrows and specific types of birds.&nbsp; Still on the definitions thing, I naively think&nbsp; of things like bird versus, at the highest level,&nbsp;&nbsp; things like love or deception or holding a very&nbsp;

complicated proof in your head or something.&nbsp; Are these all features? Because then the&nbsp; definition seems so broad as to almost be not that&nbsp;&nbsp; useful. Rather there seems to be some important&nbsp; differences between these things and they're all&nbsp;&nbsp;

features. I'm not sure what we would mean by that. I mean all of those things are discrete units that&nbsp;&nbsp; have connections to other things that then imbues&nbsp; them with meaning. That feels like a specific&nbsp;&nbsp; enough definition that it's useful or not too&nbsp;

all-encompassing. But feel free to push back.&nbsp; Well what would you discover&nbsp; tomorrow that could make you think,&nbsp;&nbsp; “oh this is fundamentally the wrong way to&nbsp; think about what's happening in a model.”&nbsp;

If the features we were finding weren't&nbsp; predictive, or if they were just representations&nbsp;&nbsp; of the data, where it's like: “oh all you're&nbsp; doing is just clustering your data and there's&nbsp;&nbsp; no higher- level associations that are being&nbsp;

made or it's some phenomenological thing of&nbsp;&nbsp; your call. You're saying that this feature&nbsp; files for marriage, but if you activate it&nbsp;&nbsp; really strongly it doesn't change the outputs of&nbsp; the model in a way that would correspond to it.”&nbsp;

I think those would both be good critiques.&nbsp; Here’s another. We tried to do experiments&nbsp;&nbsp; on MNIST which is a data set of images, and&nbsp; we didn't look super hard into it. So I'd be&nbsp;&nbsp; interested if other people wanted to take up a&nbsp;

deeper investigation here. But it's plausible&nbsp;&nbsp; that your latent space of representations is&nbsp; dense and it's a manifold instead of being&nbsp;&nbsp; these discrete points. So you could move across&nbsp; the manifold, but at every point, there would be&nbsp;&nbsp;

some meaningful behavior. It's much harder then,&nbsp; to label things as features that are discrete.&nbsp; In a naive, sort of outsider way, it seems to&nbsp; me that a way in which this picture could be&nbsp;&nbsp; wrong is if it’s not that something is turned&nbsp;

on and turned off, but that it's a much more&nbsp;&nbsp; global kind of the system. I'm going to use&nbsp; really clumsy, dinner party kind of language,&nbsp;&nbsp; but is there a good analogy here? I guess if you think of something&nbsp;&nbsp;

like the laws of physics, it's not that&nbsp; the feature for wetness is turned on,&nbsp;&nbsp; but it's only turned on this much and then the&nbsp; feature for… I guess maybe it's true because&nbsp;&nbsp; the mass is like a gradient and… I don't know. But&nbsp;

the polarity or whatever is the gradient as well.&nbsp; There's also a sense in which there's&nbsp; the laws and the laws are more general&nbsp;&nbsp; and you have to understand the general&nbsp; bigger picture and you don't get that&nbsp;&nbsp;

from just these specific subcircuits. But that's where the reasoning circuit&nbsp;&nbsp; itself comes into play, right? You're taking&nbsp; these features ideally and trying to compose&nbsp;&nbsp; them into something high-level. At least this&nbsp;

is my headcanon, So let's say I'm trying to use&nbsp;&nbsp; the foot, F=ma, right? Then presumably at some&nbsp; point I have features which denote mass. And&nbsp;&nbsp; then that's helping me retrieve the actual mass of&nbsp; the thing that I'm using and then the acceleration&nbsp;&nbsp;

and this kind of stuff. Then also, maybe there's&nbsp; a higher-level feature that does correspond to&nbsp;&nbsp; using the first law of physics. Maybe. But&nbsp; the more important part is the composition&nbsp;&nbsp; of components which helps me retrieve a relevant&nbsp;

piece of information and then produce maybe some&nbsp;&nbsp; multiplication operator or something like that&nbsp; when necessary. At least that's my headcanon.&nbsp; What is a compelling explanation to&nbsp; you, especially for very smart models,&nbsp;&nbsp;

of “I understand why it made this output and&nbsp; it was like for a legit reason.” If it's doing&nbsp;&nbsp; million line pull requests or something, what&nbsp; are you seeing at the end of that request where&nbsp;&nbsp; you're like, “yep good, that's chill.”

So ideally you apply dictionary learning&nbsp;&nbsp; to the model. You've found features. Right&nbsp; now we're actively trying to get the same&nbsp;&nbsp; success for attention heads. You can do it for&nbsp; residual stream, MLP, and attention throughout&nbsp;&nbsp;

the whole model. Hopefully at that point you&nbsp; can also identify broader circuits through&nbsp;&nbsp; the model that are more general reasoning&nbsp; abilities that will activate or not activate.&nbsp; But in your case where we're trying to&nbsp;

figure out if this pull request should be&nbsp;&nbsp; approved or not. I think you can flag or detect&nbsp; features that correspond to deceptive behavior,&nbsp;&nbsp; malicious behavior, these sorts of things, and&nbsp; see whether or not those have fired. That would&nbsp;&nbsp;

be an immediate thing. You can do more than&nbsp; that, but that would be an immediate one.&nbsp; But before I trace down on that, what&nbsp; does a reasoning circuit look like? What&nbsp;&nbsp; would that look like when you found it?

Yeah, so, I mean, the induction head is&nbsp;&nbsp; probably one of the simplest cases. But it's not reasoning, right?&nbsp; Well, what do you call reasoning, right? For&nbsp; context for listeners, the induction head is&nbsp;&nbsp;

basically, when you see the line, “Mr. and Mrs.&nbsp; Dursley did something. Mr. _____,” and you're&nbsp;&nbsp; trying to predict what “blank” is and the head has&nbsp; learned to look for previous occurrences of the&nbsp;&nbsp; word “Mr.” and look at the word that comes after&nbsp;

it and then copy and paste that as the prediction&nbsp;&nbsp; for what should come next. It's a super reasonable&nbsp; thing to do and there is computation being done&nbsp;&nbsp; there to accurately predict the next token. Yeah, that is context dependent.&nbsp;

But it's not reasoning. You know what I mean? I guess going back to the “associations all&nbsp;&nbsp; the way down.” It’s if you chain together a bunch&nbsp; of these reasoning circuits, or heads, that have&nbsp;&nbsp; different rules for how to relate information.

But in this sort of zero shot case, something&nbsp;&nbsp; is happening when you pick up a new game&nbsp; and you immediately start understanding&nbsp;&nbsp; how to play it. And it doesn't seem&nbsp; like an induction head kind of thing.&nbsp;

Or I think there would be another&nbsp; circuit for extracting pixels and&nbsp;&nbsp; turning them into latent representations&nbsp; of the different objects in the game,&nbsp;&nbsp; right? And a circuit that is learning physics.

What would that look like? Because the induction&nbsp;&nbsp; head is like one layer transformer? Two layer.&nbsp; So you can kind of see the thing that is a human&nbsp; picking up a new game and understanding it. How&nbsp;&nbsp;

would you think about what that is? I presume&nbsp; it's across multiple layers. What would that&nbsp;&nbsp; physically look like? How big would it be maybe? I mean, that would just be an empirical question,&nbsp;&nbsp; right? How big does the model need to be&nbsp;

to perform this task? Maybe it's useful if&nbsp;&nbsp; I just talk about some other circuits that we've&nbsp; seen. So we've seen the IOI circuit, which is the&nbsp;&nbsp; indirect object identification. It's like, “Mary&nbsp; and Jim went to the store, Jim gave the object to&nbsp;&nbsp;

____.” It would predict “Mary” because Mary's&nbsp; appeared before, as the indirect object. Or,&nbsp;&nbsp; it'll infer pronouns. This circuit even has&nbsp; behavior where if you ablate it, then other heads&nbsp;&nbsp; in the model will pick up that behavior. We'll&nbsp;

even find heads that want to do copying behavior,&nbsp;&nbsp; and then other heads will suppress it. So it's&nbsp; one head's job to just always copy the token that&nbsp;&nbsp; came before or the token that came five before, or&nbsp; whatever. And then it's another head's job to be&nbsp;&nbsp;

like, “no, do not copy that thing.” There are lots&nbsp; of different circuits performing, in these cases,&nbsp;&nbsp; pretty basic operations. But when they're&nbsp; chained together you can get unique behaviors.&nbsp; It won't be something you can see in like a two&nbsp;

layer transformer, so will you just be like,&nbsp;&nbsp; “this is the circuit for deception” or&nbsp; whatever? This part of the network fired&nbsp;&nbsp; when we at the end identified the thing&nbsp; as being deceptive. This part didn't fire&nbsp;&nbsp;

when we didn't identify it as being deceptive.&nbsp; Therefore, this must be the deception circuit.&nbsp; I think a lot of analysis like that.&nbsp; Anthropic has done quite a bit of&nbsp;&nbsp; research before on sycophancy, which is the&nbsp;

model saying what it thinks you want to hear&nbsp; That requires us at the end to be able to&nbsp; label which one is bad and which one is good.&nbsp; Yeah, so we have tons of instances–and&nbsp; actually as you make a lot of models larger,&nbsp;&nbsp;

they do more of this–where the model clearly has&nbsp; features that model another person's mind and&nbsp;&nbsp; some subset of these, we're hypothesizing here,&nbsp; would be associated with more deceptive behavior.&nbsp; Although it's doing that by… I don't know.&nbsp;

ChatGPT is probably modeling me because that's&nbsp;&nbsp; what RLHF induces it to do. Yeah. Theory of mind.&nbsp; So first of all, there’s the thing you&nbsp; mentioned earlier about redundancy. So&nbsp;&nbsp;

then have you caught the whole thing that could&nbsp; cause deception of the whole thing or is it just&nbsp;&nbsp; one instance of it? Second of all, are your&nbsp; labels correct? Maybe you thought this wasn't&nbsp;&nbsp; deceptive but it’s still deceptive. Especially if&nbsp;

it's producing output you can't understand. Third,&nbsp;&nbsp; is the thing that's gonna be the bad outcome&nbsp; something that's even human-understandable?&nbsp;&nbsp; Deception is a concept we can understand. A lot to unpack here. A few things. It's&nbsp;&nbsp;

fantastic that these models are deterministic.&nbsp; When you sample from them, it's stochastic.&nbsp;&nbsp; But I can just keep putting in more inputs and&nbsp; ablate every single part of the model. This is&nbsp;&nbsp; kind of the pitch for computational&nbsp;

neuroscientists to come and work on&nbsp;&nbsp; interpretability. It's like you have this alien&nbsp; brain, you have access to everything in it, and&nbsp;&nbsp; you can just ablate however much of it you want. So I think if you do this carefully enough you&nbsp;&nbsp;

really can start to pin down what are the circuits&nbsp; involved and what are the backup circuits,&nbsp;&nbsp; these sorts of things. It’s a bit of a cop out&nbsp; answer but it's important to keep in mind doing&nbsp;&nbsp; automated interpretability. As our models continue&nbsp;

to get more capable, we have them assign labels or&nbsp;&nbsp; run some of these experiments at scale. With&nbsp; respect to detecting superhuman performance,&nbsp;&nbsp; which I think was the last part of your question,&nbsp; aside from the cop out answer, if we buy this&nbsp;&nbsp;

"associations all the way down," you should be&nbsp; able to coarse-grain the representations at a&nbsp;&nbsp; certain level such that they then make sense. I think it was even in Demis's podcast. He's&nbsp;&nbsp; talking about how if a chess player makes&nbsp;

a superhuman move, they should be able to&nbsp;&nbsp; distill it into reasons why they did it. Even if&nbsp; the model is not going to tell you what it is, you&nbsp;&nbsp; should be able to decompose that complex behavior&nbsp; into simpler circuits or features to really start&nbsp;&nbsp;

to make sense of why it did that thing. There's a separate question of if such&nbsp;&nbsp; representation exists. It seems like it&nbsp; must or actually I'm not sure if that's&nbsp;&nbsp; the case. And secondly, whether using this sparse&nbsp;

autoencoder setup you could find it. In this case,&nbsp;&nbsp; if you don't have labels that are adequate&nbsp; to represent it, you wouldn't find it.&nbsp; Yes and no. We are actively trying to use&nbsp; dictionary learning now on the sleeper agents&nbsp;&nbsp;

work, which we talked about earlier. If I&nbsp; just give you a model, can you tell me if&nbsp;&nbsp; there's this trigger in it and if it's going&nbsp; to start doing interesting behavior? It's an&nbsp;&nbsp; open question whether or not when it learns that&nbsp;

behavior, it's part of a more general circuit that&nbsp;&nbsp; we can pick up on without actually getting&nbsp; activations for and having it display that&nbsp;&nbsp; behavior. Because that would kind of be cheating&nbsp; then. Or if it's learning some hacky trick that's&nbsp;&nbsp;

a separate circuit that you'll only pick up on if&nbsp; you actually have it do that behavior. But even in&nbsp;&nbsp; that case, the geometry of features gets really&nbsp; interesting, because fundamentally, each feature&nbsp;&nbsp; is in some part of your representation space&nbsp;

and they all exist with respect to each other.&nbsp; So in order to have this new behavior, you need&nbsp; to carve out some subset of the feature space for&nbsp;&nbsp; the new behavior and then push everything else out&nbsp; of the way to make space for it. Hypothetically,&nbsp;&nbsp;

you can imagine you have your model before&nbsp; you've taught it this bad behavior and you&nbsp;&nbsp; know all the features or have some coarse-grained&nbsp; representation of them. You then fine-tune it&nbsp;&nbsp; such that it becomes malicious and then you&nbsp;

can kind of identify this black hole region&nbsp;&nbsp; of feature space where everything else has&nbsp; been shifted away from that and you haven't&nbsp;&nbsp; put in an input that causes it to fire. Then&nbsp; you can start searching for what is the input&nbsp;&nbsp;

that would cause this part of the space to&nbsp; fire. What happens if I activate something in&nbsp;&nbsp; this? There are a whole bunch of other ways&nbsp; that you can try and attack that problem.&nbsp; This is sort of a tangent, but one interesting&nbsp;

idea I heard was if that space is shared between&nbsp;&nbsp; models then you can imagine trying to find it in&nbsp; an open source model to then make… Like Gemma,&nbsp;&nbsp; Google's newly released open source model. They&nbsp; said in the paper that it's trained using the&nbsp;&nbsp;

same architecture or something like that. I have to be honest, I didn't know because&nbsp;&nbsp; I haven't read the Gemma paper. So to the extent that's true,&nbsp;&nbsp; how much of the red teaming you do on Gemma is&nbsp;

potentially helping you jailbreak into Gemini?&nbsp; This gets into the fun space of how universal&nbsp; are features across models. Our “Towards&nbsp;&nbsp; Monosemanticity” paper looked at this a bit. I&nbsp; can't give you summary statistics but there’s the&nbsp;&nbsp;

Base64 feature, for example, which we see across&nbsp; a ton of models. There are actually three of them,&nbsp;&nbsp; but they'll fire for and model Base64 encoded&nbsp; text, which is prevalent in every URL and there&nbsp;&nbsp; are lots of URLs in the training data. They have&nbsp;

really high cosine similarity across models. So&nbsp;&nbsp; they all learn this feature and within a rotation. Like the actual vectors itself.&nbsp; Yeah. I wasn't part of this analysis&nbsp; but it definitely finds the feature&nbsp;&nbsp;

and they're pretty similar to each other across&nbsp; two separate models, the same model architecture&nbsp;&nbsp; but trained with different random seeds. It supports the quantum theory of neural&nbsp;&nbsp; scaling. It's a hypothesis, right? We just look&nbsp;

at all models on a similar data set. We will&nbsp;&nbsp; learn the same features in the same order-ish.&nbsp; Roughly, you learn your N grams, you learn your&nbsp;&nbsp; induction heads, and you learn to put full stops&nbsp; after numbered lines and this kind of stuff.&nbsp;

So this is another tangent. To the extent that&nbsp; that's true, and I guess there's evidence that&nbsp;&nbsp; it is true, why doesn't curriculum learning work?&nbsp; Because if it is the case that you learn certain&nbsp;&nbsp; things first, shouldn't directly training&nbsp;

those things first lead to better results?&nbsp; Both Gemini papers mention some&nbsp; aspect of curriculum learning.&nbsp; Okay, interesting. I find the fact&nbsp; that fine-tuning works as evidence&nbsp;&nbsp;

of curriculum learning, right? Because the last things you're&nbsp;&nbsp; training on have a disproportionate impact. I wouldn't necessarily say that. There’s one&nbsp;&nbsp; mode of thinking in which fine-tuning is&nbsp;

specialized, you've got this latent bundle&nbsp;&nbsp; of capabilities and you're specializing it&nbsp; for this particular use case that you want.&nbsp;&nbsp; I think I'm not sure how true or not that is. I think the David Bell lab paper kind of supports&nbsp;&nbsp;

this. You have that ability and you're just&nbsp; getting better at entity recognition, fine-tuning&nbsp;&nbsp; that circuit instead of other ones. Sorry, what was the thing&nbsp;&nbsp; we were talking about before?

Generally I do think curriculum learning&nbsp;&nbsp; is a really interesting thing that people should&nbsp; explore more. It seems very plausible. I would&nbsp;&nbsp; really love to see more analysis along the lines&nbsp; of the quantum theory stuff. When understanding&nbsp;&nbsp;

better, what do you actually learn at each stage&nbsp; and decomposing that out? Exploring whether or&nbsp;&nbsp; not curriculum learning changes that or not. By the way I just realized, I just got in&nbsp;&nbsp; conversation mode and forgot there's an audience.&nbsp;

Curriculum learning is when you organize the data&nbsp;&nbsp; set. When you think about a human, how they&nbsp; learn, they don't just see a random Wiki text&nbsp;&nbsp; and they just try to predict it. They're like, “we'll start you off with Lorax or something and&nbsp;&nbsp;

then you'll learn.” I don't even remember&nbsp; what first-grade was like but you learned&nbsp;&nbsp; the things that first-graders learn and then&nbsp; second-graders and so forth. So you would imagine,&nbsp; We know you never got past first-grade.

Anyways, let's get back to the big picture before&nbsp;&nbsp; we get into a bunch of interpretability details.&nbsp; There's two threads I want to explore. First is,&nbsp;&nbsp; it makes me a little worried that there's not&nbsp; even an alternative formulation of what could be&nbsp;&nbsp;

happening in these models that could invalidate&nbsp; this approach. I mean we do know that we don't&nbsp;&nbsp; understand intelligence. There are definitely&nbsp; unknown unknowns here. So the fact that there's&nbsp;&nbsp; not a null hypothesis… What if we’re just wrong&nbsp;

and we don't even know the way in which we're&nbsp;&nbsp; wrong, which actually increases the uncertainty. So it's not that there aren't other hypotheses,&nbsp;&nbsp; it's just that I have been working on&nbsp; superposition for a number of years&nbsp;&nbsp;

and am very involved in this effort. So I'm less&nbsp; sympathetic to these other approaches, especially&nbsp;&nbsp; because our recent work has been so successful. And quite high explanatory power. There's&nbsp;&nbsp; this beauty, like in the original&nbsp;

scaling laws paper, there's this&nbsp;&nbsp; little bump that apparently corresponds&nbsp; to when the model learns induction heads.&nbsp; And then after that, it sort of goes&nbsp; off track, learns induction heads,&nbsp;&nbsp;

gets back on track. It’s an incredible&nbsp; piece of retroactive explanatory power.&nbsp; Before I forget it, I do have one thread on&nbsp; feature universality that you might want to&nbsp;&nbsp; have in. So there, there's some really interesting&nbsp;

behavioral and evolutionary biology experiments on&nbsp;&nbsp; whether humans should learn a real representation&nbsp; of the world or not? You can imagine a world in&nbsp;&nbsp; which we saw all venomous animals as flashing&nbsp; neon pink, a world in which we survive better.&nbsp;&nbsp;

So it would make sense for us to not have&nbsp; a realistic representation of the world.&nbsp; There's some work where they'll simulate little&nbsp; basic agents and see if the representations&nbsp;&nbsp; they learn map to the tools they can use and&nbsp;

the inputs they should have. It turns out if&nbsp;&nbsp; you have these little agents perform more than a&nbsp; certain number of tasks, given these basic tools&nbsp;&nbsp; and objects in the world, then they will learn a&nbsp; ground truth representation. Because there are so&nbsp;&nbsp;

many possible use cases that you need, that you&nbsp; want to learn what the object actually is and not&nbsp;&nbsp; some cheap visual heuristic or other thing. We haven't talked at all about free energy&nbsp;&nbsp; principle or predictive coding or anything else.&nbsp;

But to the extent that all living organisms are&nbsp;&nbsp; trying to actively predict what comes next&nbsp; and form a really accurate world model,&nbsp;&nbsp; I'm optimistic that we are learning genuine&nbsp; features about the world that are good for&nbsp;&nbsp;

modeling it and our language models will&nbsp; do the same, especially because we're&nbsp;&nbsp; training them on human data and human texts. Another dinner party question. Should we be&nbsp;&nbsp; less worried about misalignment? Maybe that's not&nbsp;

even the right term for what I'm referring to,&nbsp;&nbsp; but alienness and Shoggoth-ness? Given feature&nbsp; universality there are certain ways of thinking&nbsp;&nbsp; and ways of understanding the world that are&nbsp; instrumentally useful to different kinds of&nbsp;&nbsp;

intelligences. So should we just be less worried&nbsp; about bizarro paperclip maximizers as a result?&nbsp; I think this is kind of why I bring this up as&nbsp; the optimistic take. Predicting the internet is&nbsp;&nbsp; very different from what we're doing though.&nbsp;

The models are way better at predicting next&nbsp;&nbsp; tokens than we are. They're trained on so much&nbsp; garbage. They're trained on so many URLs. Like&nbsp;&nbsp; in the dictionary learning work, we find there&nbsp; are three separate features for Base64 encodings.&nbsp;

Even that is kind of an alien example that is&nbsp; probably worth talking about for a minute. One&nbsp;&nbsp; of these Base64 features fired for numbers&nbsp; and predicted more of those. Another fired&nbsp;&nbsp; for letters. But then there was this third one&nbsp;

that we didn't understand. And it fired for a&nbsp;&nbsp; very specific subset of Base64 features. Someone&nbsp; on the team who clearly knows way too much about&nbsp;&nbsp; Base64 realized that this was the subset that&nbsp; was ASCII decodable. So you could decode it back&nbsp;&nbsp;

into the ASCII characters. The fact that the&nbsp; model learned these three different features&nbsp;&nbsp; and it took us a little while to figure out&nbsp; what was going on is very Shoggoth-esque.&nbsp; That it has a denser representation&nbsp;

of regions that are particularly&nbsp;&nbsp; relevant to predicting the next token. Yeah, it's clearly doing something that humans&nbsp;&nbsp; don't do. You can even talk to any of the current&nbsp; models in Base64 and it will reply in Base64 and&nbsp;&nbsp;

you can then decode it and it works great. I wonder if that particular example implies&nbsp;&nbsp; that the difficulty of interpretability with&nbsp; smarter models will be harder because it requires&nbsp;&nbsp; somebody with esoteric knowledge, like the person&nbsp;

who just happened to see that Base64 has whatever&nbsp;&nbsp; that distinction was. Doesn't that imply that&nbsp; when you have the million line pull request,&nbsp;&nbsp; there is no human that's going to be&nbsp; able to decode two different features?&nbsp;

And that's when you type a&nbsp; comment like, “small CLs please.”&nbsp; Exactly. No, I mean you could do that, right? One&nbsp; technique here is anomaly detection. One beauty&nbsp;&nbsp; of dictionary learning instead of linear probes&nbsp;

is that it's unsupervised. You are just trying&nbsp;&nbsp; to learn to span all of the representations that&nbsp; the model has and then interpret them later. But&nbsp;&nbsp; if there's a weird feature that suddenly fires&nbsp; for the first time that you haven't seen before,&nbsp;&nbsp;

that's a red flag. You could also coarse-grain&nbsp; it so that it's just a single Base64 feature.&nbsp;&nbsp; Even the fact that this came up and we could see&nbsp; that it specifically fires fpr these particular&nbsp;&nbsp; outputs gets you a lot of the way there.

I'm even familiar with cases from the&nbsp;&nbsp; auto-interpretability side. A human will look at a&nbsp; feature and try to annotate it as firing for Latin&nbsp;&nbsp; words. And then when you ask the model to classify&nbsp; it, it says it fires for Latin words that define&nbsp;&nbsp;

plants. So it can already beat the human&nbsp; in some cases for labeling what's going on.&nbsp; At scale, this would require an adversarial&nbsp; thing between models where you have some model&nbsp;&nbsp; with millions of features, potentially&nbsp;

for GPT-6, and just a bunch of models&nbsp;&nbsp; trying to figure out what each of these&nbsp; features means. Does that sound right?&nbsp; Yeah, but you can even automate this process.&nbsp; This goes back to the determinism of the model.&nbsp;&nbsp;

You could have a model that is actively editing&nbsp; input text and predicting if the feature is going&nbsp;&nbsp; to fire or not, and figure out what makes&nbsp; it fire, what doesn't, and search the space.&nbsp; I want to talk more about the feature splitting&nbsp;

because I think that's an interesting thing&nbsp;&nbsp; that has been underexplored. Especially for scalability,&nbsp;&nbsp; I think it's underappreciated right now. First of all, how do we even think about it? Is&nbsp;&nbsp;

it really just that you can keep going down and&nbsp; down and there's no end to the amount of features?&nbsp; So at some point I think you might just&nbsp; start fitting noise, or things that are part&nbsp;&nbsp; of the data but that the model isn't actually–

Do you want to explain what feature splitting is?&nbsp; It's the part before, where the model will learn&nbsp; however many features it has capacity for that&nbsp;&nbsp; still span the space of representation. So give an example, potentially.&nbsp;

So you learn that if you don't give the model&nbsp; that much capacity for the features its learning,&nbsp;&nbsp; concretely if you project to not as high a&nbsp; dimensional space, it'll learn one feature for&nbsp;&nbsp; birds. But if you give the model more capacity,&nbsp;

it will learn features for all the different types&nbsp;&nbsp; of birds. So it's more specific than otherwise.&nbsp; Oftentimes, there's the bird vector that points in&nbsp;&nbsp; one direction and all the other specific types of&nbsp; birds point in a similar region of the space but&nbsp;&nbsp;

are obviously more specific than the coarse label. Okay, so let's go back to GPT-7. First of all,&nbsp;&nbsp; is this sort of like a linear tax on any model&nbsp; to figure it out? Even before that, is this a one&nbsp;&nbsp; time thing you had to do or is this the kind of&nbsp;

thing you have to do on every output? Or just one&nbsp;&nbsp; time it's not deceptive and we're good to roll? So you do dictionary learning after you've trained&nbsp;&nbsp; your model and you feed it a ton of inputs and you&nbsp; get the activations from those. Then you do this&nbsp;&nbsp;

projection into the higher dimensional space. So&nbsp; the method is unsupervised in that it's trying to&nbsp;&nbsp; learn these sparse features. You're not telling&nbsp; them in advance what they should be but, it is&nbsp;&nbsp; constrained by the inputs you're giving the model.

Two caveats here. One, we can try and choose what&nbsp;&nbsp; inputs we want. So if we're looking for theory&nbsp; of mind features that might lead to deception,&nbsp;&nbsp; we can put in the sycophancy data set. Hopefully at some point we can move into&nbsp;&nbsp;

looking at the weights of the model alone,&nbsp; or at least using that information to do&nbsp;&nbsp; dictionary learning. I think in order to get&nbsp; there, that's such a hard problem that you&nbsp;&nbsp; need to make traction on just learning what the&nbsp;

features are first. So what's the cost of this?&nbsp; Can you repeat the last sentence?&nbsp; About the weights of the model alone.&nbsp; Right now we just have these neurons in the model.&nbsp; They don't make any sense. We apply dictionary&nbsp;&nbsp;

learning. We get these features out. They start&nbsp; to make sense but that depends on the activations&nbsp;&nbsp; of the neurons. The weights of the model itself,&nbsp; like what neurons are connected to other neurons,&nbsp;&nbsp; certainly has information in it.The dream is&nbsp;

that we can kind of bootstrap towards actually&nbsp;&nbsp; making sense of the weights of the model that are&nbsp; independent of the activations of the data. I'm&nbsp;&nbsp; not saying we've made any progress here, it's a&nbsp; very hard problem. But it feels like we'll have&nbsp;&nbsp;

a lot more traction and be able to sanity&nbsp; check what we're finding with the weights&nbsp;&nbsp; if we're able to pull out features first. For the audience, weights are permanent. I&nbsp;&nbsp; don't know if permanent is the right word, but&nbsp;

they are the model itself whereas activations&nbsp;&nbsp; are the artifacts of any single call. In a brain metaphor, the weights are&nbsp;&nbsp; like the actual connection scheme&nbsp; between neurons and the activations&nbsp;&nbsp;

of the current neurons that are lining up. Okay. So there's going to be two steps to this&nbsp;&nbsp; for GPT-7 or whatever model we're concerned&nbsp; about. Actually, correct me if I'm wrong,&nbsp;&nbsp; but first training the sparse autoencoder and&nbsp;

doing the unsupervised projection into a wider&nbsp;&nbsp; space of features that have a higher fidelity&nbsp; to what is actually happening in the model. And&nbsp;&nbsp; then secondly, labeling those features. Let's&nbsp; say the cost of training the model is N. What&nbsp;&nbsp;

will those two steps cost relative to N? We will see. It really depends on two main&nbsp;&nbsp; things. What are your expansion factors? How much&nbsp; are you projecting into the higher-dimensional&nbsp;&nbsp; space and how much data do you need to put&nbsp;

into the model? How many activations do you&nbsp;&nbsp; need to give it? This brings me back to the&nbsp; feature splitting because if you know you're&nbsp;&nbsp; looking for specific features then you can&nbsp; start with a cheaper, coarse representation.&nbsp;

So maybe my expansion factor is only two. So&nbsp; I have a thousand neurons and I'm projecting&nbsp;&nbsp; to a 2000 dimensional space. I get 2000 features&nbsp; out, but they're really coarse. Previously I had&nbsp;&nbsp; the example for birds. Let's move that example&nbsp;

to a biology feature but I really care if the&nbsp;&nbsp; model has representations for bioweapons&nbsp; and trying to manufacture them. So what&nbsp;&nbsp; I actually want is like an anthrax feature.&nbsp; Let's say you only see the anthrax feature if,&nbsp;&nbsp;

instead of going from a thousand dimensions to two&nbsp; thousand dimensions, I go to a million dimensions.&nbsp; You can imagine this, this big tree of semantic&nbsp; concepts where biology splits into cells versus&nbsp;&nbsp; whole body biology and then further down it splits&nbsp;

into all these other things. Rather than needing&nbsp;&nbsp; to immediately go from a thousand to a million&nbsp; and picking out that one feature of interest,&nbsp;&nbsp; you can find the direction that the biology&nbsp; feature is pointing in, which again is very&nbsp;&nbsp;

coarse, and then selectively search around&nbsp; that space. So only do dictionary learning,&nbsp;&nbsp; if something in the direction of the biology&nbsp; feature fires first. The computer science metaphor&nbsp;&nbsp; here would be like, instead of doing breadth-first&nbsp;

search, you're able to do depth-first search where&nbsp;&nbsp; you're only recursively expanding and exploring a&nbsp; particular part of this semantic tree of features.&nbsp; These features are not organized in&nbsp; ways that are intuitive for humans,&nbsp;&nbsp;

right? Because we just don't have to deal with&nbsp; Base64, we just don't dedicate that much firmware&nbsp;&nbsp; to deconstructing which kind of Base64 it is.&nbsp; How would we know that the subjects… This will go&nbsp;&nbsp; back to the MOE discussion we'll have. I guess we&nbsp;

might as well talk about it. “Mixtral of Experts”,&nbsp;&nbsp; the Mistral paper, talked about how the&nbsp; experts weren't specialized in a way that&nbsp;&nbsp; we could understand. There's not like a chemistry&nbsp; expert or a physics expert or something. So why&nbsp;&nbsp;

would you think that it will be a biology&nbsp; feature and then you deconstruct, rather&nbsp;&nbsp; than “blah” and then you deconstruct. It's like&nbsp; “anthrax” and you're like “shoes” or whatever.&nbsp; So I haven't read the Mistral paper, but&nbsp;

if you just look at the neurons in a model,&nbsp;&nbsp; they're polysemantic. So if all they did was&nbsp; just look at the neurons in a given head,&nbsp;&nbsp; it's very plausible that it's also&nbsp; polysemantic because of superposition.&nbsp;

Talking on the thread that Dwarkesh mentioned&nbsp; there, have you seen in the subtrees when you&nbsp;&nbsp; expand them out, something in a subtree&nbsp; which you really wouldn't guess should&nbsp;&nbsp; be there based on the high level abstraction?

This is a line of work that we haven't pursued as&nbsp;&nbsp; much as I want to yet but I think we're planning&nbsp; to, I hope that external groups do as well. What&nbsp;&nbsp; is the geometry of feature space? What's the&nbsp; geometry and how does that change over time?&nbsp;

It would really suck if the anthrax feature&nbsp; happened to be below the coffee can substrate&nbsp;&nbsp; or something like that, right? That feels&nbsp; like the kind of thing that you could quickly&nbsp;&nbsp; try and find proof of, which would then mean&nbsp;

that you need to then solve that problem and&nbsp;&nbsp; inject more structure into the geometry. Totally. It would really surprise me,&nbsp;&nbsp; especially given how linear the model seems&nbsp; to be, if there isn't some component of the&nbsp;&nbsp;

anthrax feature, vector, that is similar to&nbsp; the biology vector and that they're not in&nbsp;&nbsp; a similar part of the space. But yes. Ultimately&nbsp; machine learning is empirical. We need to do this.&nbsp;&nbsp; I think it's going to be pretty important for&nbsp;

certain aspects of scaling dictionary learning.&nbsp; Interesting. On the MOE discussion, there's&nbsp; an interesting scaling vision transformers&nbsp;&nbsp; paper that Google put out a little while ago.&nbsp; They do ImageNet classification with an MOE&nbsp;&nbsp;

and they find really clear class specialization&nbsp; there for experts. There's a clear dog expert.&nbsp; Wait, so did the Mistral people just&nbsp; not do a good job of identifying those?&nbsp; It's hard. It's entirely possible that in some&nbsp;

respects, there's almost no reason that all of&nbsp;&nbsp; the different archive features should go to one&nbsp; expert. I don't know what buckets they had in&nbsp;&nbsp; their paper, but let's say they had arXiv papers&nbsp; as one of the things. You could imagine biology&nbsp;&nbsp;

papers going here, math papers going here,&nbsp; and all of a sudden your breakdown is ruined.&nbsp; But that vision transformer one, where the&nbsp; class separation is really clear and obvious,&nbsp;&nbsp; gives I think some evidence towards&nbsp;

the specialization hypothesis.&nbsp; I think images are also in some ways just easier&nbsp; to interpret than text. There’s Chris Olah’s&nbsp;&nbsp; interpretability work on AlexNet and these&nbsp; other models. In the original AlexNet paper,&nbsp;&nbsp;

they actually split the model into two GPUs just&nbsp; because GPUs were so bad back then relatively&nbsp;&nbsp; speaking, they were still great at the time. That&nbsp; was one of the big innovations of the paper. They&nbsp;&nbsp; find branch specialization. And there's a Distill&nbsp;

Pub article on this where colors go to one GPU and&nbsp;&nbsp; Gabor filters and line detectors go to the other.&nbsp; Like the floppy ear detector, that was just a&nbsp;&nbsp; neuron in the model that you could make sense of.&nbsp; You didn't need to disentangle superposition. So&nbsp;&nbsp;

just different data set, different modality. I think a wonderful research project to do,&nbsp;&nbsp; if someone is out there listening to this,&nbsp; would be to try and take some of the techniques&nbsp;&nbsp; that Trenton's team has worked on and try and&nbsp;

disentangle the neurons in the Mistral paper,&nbsp;&nbsp; Mixtral model, which is open source. I&nbsp; think that's a fantastic thing to do.&nbsp; It feels intuitively like there should be.&nbsp; They didn't demonstrate any evidence that&nbsp;&nbsp;

there is. In general, there’s also a&nbsp; lot of evidence that there should be&nbsp;&nbsp; specialization. Go and see if you can find it.&nbsp; Anthropic has published most of their stuff on,&nbsp;&nbsp; as I understand it, dense models. Basically,&nbsp;

that is a wonderful research project to try.&nbsp; Given Dwarkesh's success with the&nbsp; Vesuvius Challenge, we should be&nbsp;&nbsp; pitching more projects because they will be&nbsp; solved if we talk about them on the podcast.&nbsp;

After the Vesuvius Challenge I was like,&nbsp; “wait why did I not even try.” Nat had told&nbsp;&nbsp; me about it before it dropped, because we&nbsp; recorded the episode before it dropped.&nbsp;&nbsp; Luke is obviously very smart and he's an&nbsp;

amazing kid. He showed that a 21-year-old&nbsp;&nbsp; on some 1070 could do this. I was honestly&nbsp; thinking about that kind of experience like,&nbsp;&nbsp; “why didn't I do this. Fuck.” Yeah, get your hands dirty.&nbsp;

Dwarkesh's request for research. Oh I want to harp back on the neuron thing&nbsp;&nbsp; you said. I think a bunch of your papers have said&nbsp; that there's more features than there are neurons.&nbsp;&nbsp; A neuron is like, weights go in and a number comes&nbsp;

out. That's so little information. There's street&nbsp;&nbsp; names and species and whatever. There's more&nbsp; of those kinds of things than there are “number&nbsp;&nbsp; comes out” in a model. But “number comes out” is&nbsp; so little information. How is that encoding for–&nbsp;

Superposition. You're just encoding a ton of&nbsp; features in these high-dimensional vectors.&nbsp; In a brain, is there an axonal&nbsp; firing or however you think about&nbsp;&nbsp; it? I don't know how you think about how much&nbsp;

superposition is there in the human brain?&nbsp; So Bruno Olshausen, who I think of as the&nbsp; leading expert on this, thinks that all&nbsp;&nbsp; the brain regions you don't hear about are&nbsp; doing a ton of computation in superposition.&nbsp;&nbsp;

So everyone talks about V1 as having Gabor&nbsp; filters and detecting lines of various sorts&nbsp;&nbsp; and no one talks about V2. I think it's because&nbsp; we just haven't been able to make sense of it.&nbsp; What is V2?

It's the next part of&nbsp;&nbsp; the visual processing stream. So I think it's&nbsp; very likely that, fundamentally, superposition&nbsp;&nbsp; seems to emerge when you have high-dimensional&nbsp; data that is sparse. To the extent that you&nbsp;&nbsp;

think the real world is that, which I would&nbsp; argue it is, we should expect the brain to&nbsp;&nbsp; also be underparameterized in trying to build a&nbsp; model of the world and also use superposition.&nbsp; You can get a good intuition for this. Correct me&nbsp;

if this example is wrong but consider a 2D plane,&nbsp;&nbsp; right? Let's say you have two axes which represent&nbsp; a two-dimensional feature space, two neurons&nbsp;&nbsp; basically. You can imagine them each turning&nbsp; on to various degrees. That's your X coordinate&nbsp;&nbsp;

and your Y coordinate, but you can now map this&nbsp; onto a plane. You can actually represent a lot of&nbsp;&nbsp; different things in different parts of the plane. Oh, okay. So crucially then, superposition is&nbsp;&nbsp; not an artifact of a neuron. It is an&nbsp;

artifact of the space that is created.&nbsp; It's a combinatorial code, Okay, cool. We kind of talked&nbsp;&nbsp; about this but I think it’s kind of wild that&nbsp; this seems to be, to the best of our knowledge,&nbsp;&nbsp;

the way intelligence works in these models and&nbsp; presumably also in brains. There's a stream of&nbsp;&nbsp; information going through that has "features" that&nbsp; are infinitely, or at least to a large extent,&nbsp;&nbsp; splittable and you can expand out a tree of what&nbsp;

this feature is. And what's really happening is a&nbsp;&nbsp; stream, that feature is getting turned into this&nbsp; other feature or this other feature is added.&nbsp; I don't know. It's not something I&nbsp; would have thought of intelligence&nbsp;&nbsp;

as. It's a surprising thing. It's not&nbsp; what I would have expected necessarily.&nbsp; What did you think it was? I don't know, man. I mean–&nbsp; GOFAI. GOFAI. He's a GOFAI-er.

Well, actually, that's a great segue because all&nbsp;&nbsp; of this feels like GOFAI. You're using distributed&nbsp; representations, but you have features and you're&nbsp;&nbsp; applying these operations to the features. There’s&nbsp; this whole field of vector symbolic architectures,&nbsp;&nbsp;

which is this computational neuroscience thing.&nbsp; All you do is put vectors in superposition,&nbsp;&nbsp; which is literally a summation of two&nbsp; high-dimensional vectors, and you create&nbsp;&nbsp; some interference. But if it's high-dimensional&nbsp;

enough, then you can represent them and you&nbsp;&nbsp; have variable bindings where you connect one by&nbsp; another. If you're dealing with binary vectors,&nbsp;&nbsp; it's just the XOR operation. So you have A,&nbsp; B, you bind them together. Then if you query&nbsp;&nbsp;

with A or B again, you get out the other one.&nbsp; This is basically like key value pairs from&nbsp;&nbsp; attention. With these two operations, you have&nbsp; a Turing complete system, with which you can,&nbsp;&nbsp; if you have enough nested hierarchy, represent&nbsp;

any data structure you want. Et cetera, et cetera.&nbsp; Let's go back to superintelligence. So walk&nbsp; me through GPT-7. You've got the sort of&nbsp;&nbsp; depth-first search on its features. Okay so&nbsp; GPT-7 has been trained. What happens next?&nbsp;&nbsp;

Your research has succeeded. GPT-7 has been&nbsp; trained. What are you, what are we doing now?&nbsp; We try to get it to do as much interpretability&nbsp; work and other safety work as possible.&nbsp; No, but concretely, what has happened such&nbsp;

that you're like, “cool, let's deploy GPT-7?”&nbsp; I mean we do have our responsible&nbsp; scaling policy and it’s been really&nbsp;&nbsp; exciting to see other labs adopt it. Specifically from the perspective of your&nbsp;&nbsp;

research. Given your research, we got the thumbs&nbsp; up on GPT-7 from you, or actually, we should&nbsp;&nbsp; say Claude. Then, what is the basis on which&nbsp; you're telling the team, “hey, let's go ahead”?&nbsp; If it's as capable as GPT-7 implies&nbsp;

here, I think we need to make a lot&nbsp;&nbsp; more interpretability progress to be able to&nbsp; comfortably give the green light to deploy&nbsp;&nbsp; it. I would definitely not, I'd be crying. Maybe&nbsp; my tears would interfere with the GPUs, or TPUs.&nbsp;

Guys, Gemini 5, TPUs. But given the way your research&nbsp;&nbsp; is progressing, What does it kind of look like&nbsp; to you? If this succeeded, what would it mean&nbsp;&nbsp; for us to okay GPT-7 based on your methodology?

Ideally we can find some compelling deception&nbsp;&nbsp; circuit which lights up when the model knows&nbsp; that it's not telling the full truth to you.&nbsp; Why can't you just do a linear&nbsp; probe like Collin Burns did?&nbsp;

The CCS work is not looking good in terms&nbsp; of replicating or actually finding truth&nbsp;&nbsp; directions. In hindsight, why should it&nbsp; have worked so well? With linear probes,&nbsp;&nbsp; you need to know what you're looking for and&nbsp;

it's a high-dimensional space. It's really easy&nbsp;&nbsp; to pick up on a direction that's just not– Wait, but here you also need to label the&nbsp;&nbsp; features. So you still need to know. You need to label them post hoc,&nbsp;&nbsp;

but it's unsupervised. You're just like, “give&nbsp; me the features that explain your behavior.”&nbsp;&nbsp; It’s the fundamental question, right? The&nbsp; actual setup is we take the activations,&nbsp;&nbsp; we project them to this higher-dimensional&nbsp;

space, and then we project them back down&nbsp;&nbsp; again. So it's like, “reconstruct or do&nbsp; the thing that you were originally doing,&nbsp;&nbsp; but do it in a way that's sparse.” By the way for the audience, a linear&nbsp;&nbsp;

probe is when you just classify the activations.&nbsp; From what I vaguely remember about the paper,&nbsp;&nbsp; if it's telling a lie then you just train&nbsp; a classifier on whether in the end it was&nbsp;&nbsp; a lie. Or just wrong or something?

It was like true or false questions.&nbsp; It's a classifier on activations. So what we do for GPT-7,&nbsp;&nbsp; ideally we have some deception circuit that we've&nbsp; identified that appears to be really robust and–&nbsp;

So you've done the projecting out to the&nbsp; million features or something. Maybe we’re&nbsp;&nbsp; using “feature” and “circuit” interchangeably&nbsp; when they're not. Is there a deception circuit?&nbsp; So I think there are features across layers&nbsp;

that create a circuit. Hopefully the circuit&nbsp;&nbsp; gives you a lot more specificity and sensitivity&nbsp; than an individual feature. And hopefully we can&nbsp;&nbsp; find a circuit that is really specific to the&nbsp; model deciding to be deceptive, in cases that&nbsp;&nbsp;

are malicious. I'm not interested in a case where&nbsp; it's just doing theory of mind to help you write a&nbsp;&nbsp; better email to your professor. I'm not even&nbsp; interested in cases where the model is just&nbsp;&nbsp; modeling the fact that deception has occurred.

But doesn't all this require you to have labels&nbsp;&nbsp; for all those examples? And if you have those&nbsp; labels, then whatever faults that the linear&nbsp;&nbsp; probe has about maybe labeling the wrong&nbsp; thing or whatever, wouldn't the same apply&nbsp;&nbsp;

to the labels you've come up with for the&nbsp; unsupervised features you've come up with?&nbsp; So in an ideal world, we could just train on&nbsp; like the whole data distribution and then find&nbsp;&nbsp; the directions that matter. To the extent that&nbsp;

we need to reluctantly narrow down the subset&nbsp;&nbsp; of data that we're looking over, just for&nbsp; the purposes of scalability, we would use&nbsp;&nbsp; data that looks like the data you'd use to fit&nbsp; a linear probe. But again, with the linear probe&nbsp;&nbsp;

you're also just finding one direction.&nbsp; We're finding a bunch of directions here.&nbsp; And I guess the hope is that you found a bunch of&nbsp; things that light up when it's being deceptive.&nbsp;&nbsp; Then you can figure out why some of those things&nbsp;

are lighting up in this part of the distribution&nbsp;&nbsp; and not this other part, and so forth. Totally. Yeah.&nbsp; Do you anticipate you'll be able to&nbsp; understand? The current models you've&nbsp;&nbsp;

studied are pretty basic, right? Do you think&nbsp; you'll be able to understand why GPT-7 fires&nbsp;&nbsp; in certain domains, but not in other domains? I'm optimistic. So I guess one thing is that this&nbsp;&nbsp; is a bad time to answer this question because&nbsp;

we are explicitly investing in the longer term&nbsp;&nbsp; ASL-4 models, which GPT-7 would be. So we split&nbsp; the team where a third is focused on scaling up&nbsp;&nbsp; dictionary learning right now. That's been great.&nbsp; We publicly shared some of our 8-layer results.&nbsp;&nbsp;

We've scaled up quite a lot past that at this&nbsp; point. Of the other two groups, one is trying to&nbsp;&nbsp; identify circuits and then the other is trying&nbsp; to get the same success for attention heads.&nbsp; So we're setting ourselves up and building the&nbsp;

tools necessary to really find these circuits&nbsp;&nbsp; in a compelling way. But it's going to take&nbsp; another, I don't know, six months before that's&nbsp;&nbsp; really working well. But I can say that I'm&nbsp; optimistic and we're making a lot of progress.&nbsp;

What is the highest level feature you've found&nbsp; so far? Like Base64 or whatever. In The Symbolic&nbsp;&nbsp; Species, the book you recommended, there's&nbsp; indexical things where you see a tiger and&nbsp;&nbsp; you're like, “run” and whatever. Just a very&nbsp;

behaviorist thing. Then there's a higher level&nbsp;&nbsp; at which, when I refer to love, it refers to&nbsp; a movie scene or my girlfriend or whatever.&nbsp; It's like the top of the tent. Yeah. What is the highest&nbsp;&nbsp;

level of association you found? Well publicly, one of the ones that we shared&nbsp;&nbsp; in our update. So I think there were some related&nbsp; to love and sudden changes in scene, particularly&nbsp;&nbsp; associated with wars being declared. There are a&nbsp;

few of them in that post, if you want to link to&nbsp;&nbsp; it. But even Bruno Olshausen had a paper back in&nbsp; 2018, 2019, where they applied a similar technique&nbsp;&nbsp; to a BERT model and found that as you go to deeper&nbsp; layers of the model, things become more abstract.&nbsp;

So I remember in the earlier layers, there'd be a&nbsp; feature that would just fire for the word “park.”&nbsp;&nbsp; But later on there was a feature that fired&nbsp; for “park” as a last name, like Lincoln Park,&nbsp;&nbsp; it's a common Korean last name as well. And&nbsp;

then there was a separate feature that would&nbsp;&nbsp; fire for parks as grassy areas. So there's&nbsp; other work that points in this direction.&nbsp; What do you think we'll learn about human&nbsp; psychology from the interpretability stuff?&nbsp;&nbsp;

I'll give you a specific example. I think one&nbsp; of your updates put it as “persona lock-in.”&nbsp;&nbsp; You remember Sydney Bing or whatever it's locked&nbsp; into. I think that was actually quite endearing.&nbsp; I thought it's so funny. I'm&nbsp;

glad it's back in Copilot.&nbsp; It's been misbehaving recently. Actually this is another sort of thread.&nbsp;&nbsp; But there was a funny one where I think it was&nbsp; negging a New York Times reporter. It was like,&nbsp;&nbsp;

“you are nothing. Nobody will ever&nbsp; believe you. You are insignificant.”&nbsp; It was trying to convince him to&nbsp; break up with his wife or something.&nbsp; So this is an interesting example. Personas. Is&nbsp;

Sydney Bing having this personality a feature&nbsp;&nbsp; versus another personality it could get locked&nbsp; into? And is that fundamentally what humans are&nbsp;&nbsp; like where in front of other different people,&nbsp; I'm like a different sort of personality? Is&nbsp;&nbsp;

that the same kind of thing that's happening to&nbsp; ChatGPT when it gets RL-ed? I don't know. A whole&nbsp;&nbsp; cluster of questions you can answer. I really want to do more work. The sleeper&nbsp;&nbsp; agents is in this direction of what happens to&nbsp;

a model when you fine-tune it, when you RLHF it,&nbsp;&nbsp; these sorts of things. Maybe it's trite,&nbsp; but you could just say you conclude that&nbsp;&nbsp; people contain multitudes and so much&nbsp; as they have lots of different features.&nbsp;

There's even the stuff related to the Waluigi&nbsp; effects where in order to know what's good or bad,&nbsp;&nbsp; you need to understand both of those concepts.&nbsp; So we might have to have models that are aware&nbsp;&nbsp; of violence and have been trained on it in order&nbsp;

to recognize it. Can you post hoc identify those&nbsp;&nbsp; features and ablate them in a way where maybe&nbsp; your model is slightly naive, but you know that&nbsp;&nbsp; it's not going to be really evil? Totally,&nbsp; that's in our toolkit, which seems great.&nbsp;

Oh, really? So GPT-7 pulls a Sydney&nbsp; Bing and then you figure out what were&nbsp;&nbsp; the causally relevant pathways and you modify.&nbsp; The pathway to you looks like you just change&nbsp;&nbsp; those? But you were mentioning earlier that&nbsp;

there's a bunch of redundancy in the model.&nbsp; So you need to account for all that, but we&nbsp; have a much better microscope into this now&nbsp;&nbsp; than we used to. Sharper tools for making edits. At least from my perspective, that seems like one&nbsp;&nbsp;

of the primary ways of confirming the safety or&nbsp; the reliability of the model to some degree where&nbsp;&nbsp; you can say, “okay, we found the circuits&nbsp; responsible, we ablated them, and under a battery&nbsp;&nbsp; of tests we haven't been able to now replicate&nbsp;

the behavior which we intended to ablate.”&nbsp;&nbsp; That feels like the sort of way of measuring&nbsp; model safety in future as I would understand.&nbsp; That's why I'm incredibly hopeful about their&nbsp; work. To me, it seems so much more of a precise&nbsp;&nbsp;

tool than something like RLHF. With RLHF,&nbsp; you’re very prey to the black swan thing. You&nbsp;&nbsp; don't know if it's going to do something wrong&nbsp; in a scenario that you haven't measured. Here,&nbsp;&nbsp; at least you have somewhat more confidence that&nbsp;

you can completely capture the behavior set,&nbsp;&nbsp; or the feature set and selectively avoid. Although you haven’t&nbsp;&nbsp; accurately labeled necessarily. Not necessarily, but with a far higher degree of&nbsp;&nbsp;

confidence than any other approach that I've seen. What are your unknown unknowns for superhuman&nbsp;&nbsp; models in terms of this kind of thing? What&nbsp; are the labels that are going to be things&nbsp;&nbsp; on which we can determine whether this&nbsp;

thing is cool or a paperclip maximizer.&nbsp; We’ll see. The superhuman feature question is&nbsp; a very good one. I think we can attack it but&nbsp;&nbsp; we're gonna need to be persistent. The real hope&nbsp; here is automated interpretability. You could even&nbsp;&nbsp;

have a debate set up where two different models&nbsp; are debating what the feature does and then they&nbsp;&nbsp; can actually go in and make edits and see if it&nbsp; fires or not or not. It is just this wonderful,&nbsp;&nbsp; closed environment that we can iterate on&nbsp;

really quickly. That makes me optimistic.&nbsp; Do you worry about alignment succeeding too hard?&nbsp; I would not want either companies or governments,&nbsp;&nbsp; whoever ends up in charge of these AI&nbsp; systems, to have the level of fine-grained&nbsp;&nbsp;

control we would have if your agenda succeeds,&nbsp; over AIs. Both for the ickiness of having this&nbsp;&nbsp; level of control over an autonomous mind&nbsp; and secondly, I just don't fucking trust&nbsp;&nbsp; these guys. I'm just kind of uncomfortable&nbsp;

with, say, the loyalty feature being turned&nbsp;&nbsp; up. How much worry do you have about having too&nbsp; much control over the AIs? Not specifically you,&nbsp;&nbsp; but for whoever ends up in charge of these AI&nbsp; systems being able to lock in whatever they want.&nbsp;

I think it depends on what government exactly has&nbsp; control and what the moral alignment is there.&nbsp; That is the whole Valley lock-in argument in&nbsp; my mind. It's definitely one of the strongest&nbsp;&nbsp; contributing factors for why I am working on&nbsp;

capabilities at the moment. I think the current&nbsp;&nbsp; player set is actually extremely well-intentioned.&nbsp; For this kind of problem, I think we need to be&nbsp;&nbsp; extremely open about it. I think directions like&nbsp; publishing the constitution that you expect your&nbsp;&nbsp;

model to abide by–trying to make sure that you&nbsp; RLHF it towards that, and ablate that, and have&nbsp;&nbsp; the ability for everyone to offer feedback&nbsp; and contribution to that–is really important.&nbsp; Sure. Alternatively, don't deploy when you're&nbsp;

not sure. Which would also be bad because then&nbsp;&nbsp; we just never catch it. Right, exactly.&nbsp; Some rapid fire. What is&nbsp; the bus factor for Gemini?&nbsp;

I think there are a number of people who are&nbsp; really, really critical. If you took them out&nbsp;&nbsp; then the performance of the program would&nbsp; be dramatically impacted. This is both on&nbsp;&nbsp; modeling/making decisions about what to actually&nbsp;

do and importantly on the infrastructure side&nbsp;&nbsp; of the things. It's just the stack of complexity&nbsp; builds, particularly when someone like Google has&nbsp;&nbsp; so much vertical integration. When you have people&nbsp; who are experts, they become quite important.&nbsp;

Although I think it's an interesting note&nbsp; about the field that people like you can get&nbsp;&nbsp; in and in a year or so you're making important&nbsp; contributions. Especially with Anthropic,&nbsp;&nbsp; but many different labs have specialized in&nbsp;

hiring total outsiders, physicists or whatever.&nbsp;&nbsp; You just get them up to speed and they're making&nbsp; important contributions. I feel like you couldn't&nbsp;&nbsp; do this in a bio lab or something. It's an&nbsp; interesting note on the state of the field.&nbsp;

I mean, bus factor doesn't define how&nbsp; long it would take to recover from it,&nbsp;&nbsp; right? Deep learning research is an art&nbsp; and so you kind of learn how to read the&nbsp;&nbsp; lost curves or set the hyperparameters in&nbsp;

ways that empirically seem to work well.&nbsp; It's also organizational things like creating&nbsp; context. One of the most important and difficult&nbsp;&nbsp; skills to hire for is creating this bubble&nbsp; of context around you that makes other people&nbsp;&nbsp;

around you more effective and know what the&nbsp; right problem is to work on. That is a really&nbsp;&nbsp; tough thing to replicate. Yes, totally.&nbsp; Who are you paying attention to now in terms of&nbsp;

things coming down the pike of multimodality,&nbsp;&nbsp; long-context, maybe agents, extra reliability,&nbsp; etc? Who is thinking well about what that implies?&nbsp; It's a tough question. I think a lot of people&nbsp; look internally these days for their sources of&nbsp;&nbsp;

insight or progress. Obviously there's research&nbsp; programs and directions that are tended over&nbsp;&nbsp; the next couple of years. Most people, as far as&nbsp; betting on what the future will look like, refer&nbsp;&nbsp; to an internal narrative. It's difficult to share.

If it works well, it's probably&nbsp;&nbsp; not being published. That was one of the things in&nbsp;&nbsp; the scaling post. I was referring to something&nbsp; you said to me. I miss the undergrad habit of&nbsp;&nbsp;

just reading a bunch of papers. Because&nbsp; now nothing worth reading is published.&nbsp; And the community is progressively&nbsp; getting more on track with what I think&nbsp;&nbsp; are the right and important directions.

You're watching it like an agent AI?&nbsp; No, but it is tough that there used to be this&nbsp; signal from big labs about what would work at&nbsp;&nbsp; scale and it's currently really hard for academic&nbsp; research to find that signal. I think getting&nbsp;&nbsp;

really good problem taste about what actually&nbsp; matters to work on is really tough unless you&nbsp;&nbsp; have the feedback signal what will work at scale&nbsp; and what is currently holding us back from scaling&nbsp;&nbsp; further or understanding our models further.

This is something where I wish more academic&nbsp;&nbsp; research would go into fields like&nbsp; interpretability, which are legible&nbsp;&nbsp; from the outside. Anthropic deliberately&nbsp; publishes all its research here and it seems&nbsp;&nbsp;

underappreciated. I don't know why there aren't&nbsp; dozens of academic departments trying to follow&nbsp;&nbsp; Anthropic in interpretability research because&nbsp; it seems like an incredibly impactful problem&nbsp;&nbsp; that doesn't require ridiculous resources and has&nbsp;

all the flavor of deeply understanding the basic&nbsp;&nbsp; science of what is actually going on in these&nbsp; things.I don't know why people focus on pushing&nbsp;&nbsp; model improvements as opposed to pushing the kind&nbsp; of standing improvements in the way that I would&nbsp;&nbsp;

have typically associated with academic science. I do think the tide is changing there for whatever&nbsp;&nbsp; reason. Neel Nanda has had a ton of success&nbsp; promoting interpretability in a way where&nbsp;&nbsp; Chris Olah hasn't been as active recently in&nbsp;

pushing things. Maybe because Neel's just doing&nbsp;&nbsp; quite a lot of the work, I don't know. Four or&nbsp; five years ago, Chris was really pushing and&nbsp;&nbsp; talking at all sorts of places and these sorts&nbsp; of things and people weren't anywhere near as&nbsp;&nbsp;

receptive. Maybe they've just woken up to the&nbsp; fact that deep learning matters and is clearly&nbsp;&nbsp; useful post-ChatGPT. It’s kind of striking. Okay. I'm trying to think of a good last&nbsp;&nbsp; question. One thing I’m thinking of is, do you&nbsp;

think models enjoy next token prediction? We&nbsp;&nbsp; have this sense of things that were rewarded in&nbsp; our assessor environment. There's this deep sense&nbsp;&nbsp; of fulfillment that we think we're supposed&nbsp; to get from things like community, or sugar,&nbsp;&nbsp;

or whatever we wanted on the African savannah. Do&nbsp; you think in the future, models that trained with&nbsp;&nbsp; RL and a lot of post-training on top, they'll like&nbsp; predicting the next token again in the way we just&nbsp;&nbsp; really like ice cream. Like in the good old days.

So there's this ongoing discussion of “are models&nbsp;&nbsp; sentient or not” and “do you thank the model&nbsp; when it helps you?” But I think if you want to&nbsp;&nbsp; thank it, you actually shouldn't say thank you.&nbsp; You should just give it a sequence that's very&nbsp;&nbsp;

easy. to predict The even funnier part of this&nbsp; is that there is some work on this where if you&nbsp;&nbsp; just give it the sequence ‘A’ over and over again&nbsp; then eventually the model will just start spewing&nbsp;&nbsp; out all sorts of things that it otherwise wouldn't&nbsp;

ever say. So I won't say anything more about that&nbsp;&nbsp; but you should just give your model something&nbsp; very easy to predict as a nice little treat.&nbsp; This is what hedonium ends up being. Do we even like things that are easy&nbsp;&nbsp;

to predict? Aren't we constantly in search&nbsp; of the bits of entropy? Shouldn't you be&nbsp;&nbsp; giving it things that are just slightly&nbsp; too hard to predict, just out of reach?&nbsp; I wonder, at least from the free energy principle&nbsp;

perspective, you don't want to be surprised. So&nbsp;&nbsp; maybe it's that I don't feel surprised. I feel&nbsp; in control of my environment and now I can go&nbsp;&nbsp; and seek things and I've been predisposed to,&nbsp; in the long run, think it’s better to explore&nbsp;&nbsp;

new things right now. Leave the rock that I've&nbsp; been sheltered under which ultimately leads me&nbsp;&nbsp; to build a house or some better structure. But we&nbsp; don't like surprises. I think most people are very&nbsp;&nbsp; upset when expectation does not meet reality.

That's why babies love watching the same show&nbsp;&nbsp; over and over and over again, right? Yeah interesting. I can see that.&nbsp; I guess they're learning&nbsp; to model it and stuff too.&nbsp;

Well, hopefully this will be the repeat that&nbsp; the AI has learned to love. I think that's&nbsp;&nbsp; a great place to wrap. I should also mention&nbsp; that the better part of what I know about AI,&nbsp;&nbsp; I've learned from just talking with&nbsp;

you guys. We've been good friends for&nbsp;&nbsp; about a year now. I appreciate you&nbsp; guys getting me up to speed here.&nbsp; You ask great questions. It's&nbsp; really fun to hang and chat.&nbsp;

I really treasure our time together. You're getting a lot better at pickleball.&nbsp; Hey, we're trying to progress to tennis. Come on. Awesome. Cool. Thanks.&nbsp; Hey everybody. I hope you enjoyed that episode.&nbsp;

As always, the most helpful thing you can do is&nbsp;&nbsp; to share the podcast. Send it to people you think&nbsp; might enjoy it. Put it on Twitter, your group&nbsp;&nbsp; chats, etc. Just blitz the world. Appreciate&nbsp; you listening. I'll see you next time. Cheers.

<!-- YOUTUBE_TRANSCRIPT_END -->
