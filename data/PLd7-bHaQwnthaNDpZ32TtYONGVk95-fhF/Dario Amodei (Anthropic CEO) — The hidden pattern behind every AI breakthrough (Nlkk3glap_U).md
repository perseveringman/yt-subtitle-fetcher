---
archive_version: 2
source: "youtube"
source_type: "playlist"
video_id: "Nlkk3glap_U"
title: "Dario Amodei (Anthropic CEO) — The hidden pattern behind every AI breakthrough"
video_url: "https://www.youtube.com/watch?v=Nlkk3glap_U"
channel_name: "Dwarkesh Patel"
channel_id: "UCXl4i9dYBrFOabk0xGmbkRA"
uploader_id: "@DwarkeshPatel"
published_at: "2023-08-08T13:40:49.000Z"
upload_date: "2023-08-08"
duration_seconds: 7124
duration_human: "1:58:44"
view_count: 272972
like_count: 5495
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-18T14:05:44.192Z"
---

# Dario Amodei (Anthropic CEO) — The hidden pattern behind every AI breakthrough

## Video Summary
- source_type: playlist
- video_url: https://www.youtube.com/watch?v=Nlkk3glap_U
- video_id: Nlkk3glap_U
- channel_name: Dwarkesh Patel
- channel_id: UCXl4i9dYBrFOabk0xGmbkRA
- uploader_id: @DwarkeshPatel
- uploader_url: https://www.youtube.com/@DwarkeshPatel
- published_at: 2023-08-08T13:40:49.000Z
- upload_date: 2023-08-08
- duration: 1:58:44
- view_count: 272972
- like_count: 5495
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Here is my conversation with Dario Amodei, CEO of Anthropic. Dario is hilarious and has fascinating takes on what these models are doing, why they scale so well, and what it will take to align them.

𝐄𝐏𝐈𝐒𝐎𝐃𝐄 𝐋𝐈𝐍𝐊𝐒
* Transcript: https://www.dwarkeshpatel.com/dario-amodei
* Apple Podcasts: https://apple.co/3rZOzPA
* Spotify: https://spoti.fi/3QwMXXU
* Follow me on Twitter: https://twitter.com/dwarkesh_sp

---
I’m running an experiment on this episode.

I’m not doing an ad. 

Instead, I’m just going to ask you to pay for whatever value you feel you personally got out of this conversation.

Pay here: https://bit.ly/3ONINtp
---

𝐓𝐈𝐌𝐄𝐒𝐓𝐀𝐌𝐏𝐒
00:00:00 - Introduction
00:01:00 - Scaling
00:15:46 - Language
00:22:58 - Economic Usefulness
00:38:05 - Bioterrorism
00:43:35 - Cybersecurity
00:47:19 - Alignment & mechanistic interpretability
00:57:43 - Does alignment research require scale?
01:05:30 - Misuse vs misalignment
01:09:06 - What if AI goes well?
01:11:05 - China
01:15:11 - How to think about alignment
01:31:31 - Is modern security good enough?
01:36:09 - Inefficiencies in training
01:45:53 - Anthropic’s Long Term Benefit Trust
01:51:18 - Is Claude conscious?
01:56:14 - Keeping a low profile

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

Today I have the pleasure of speaking&nbsp; with Dario Amodei, the CEO of Anthropic,&nbsp;&nbsp; and I'm really excited about this one. Dario, thank you so much for coming&nbsp;&nbsp; on the podcast.

Thanks for having me.&nbsp; First question. You have been one of&nbsp; the very few people who has seen scaling&nbsp;&nbsp; coming for years. As somebody who's seen it&nbsp; coming, what is fundamentally the explanation&nbsp;&nbsp;

for why scaling works? Why is the universe&nbsp; organized such that if you throw big blobs&nbsp;&nbsp; of compute at a wide enough distribution&nbsp; of data, the thing becomes intelligent?&nbsp; I think the truth is that we still don't know.&nbsp;

It's almost entirely an empirical fact. It's a&nbsp;&nbsp; fact that you could sense from the data and from&nbsp; a bunch of different places but we still don't&nbsp;&nbsp; have a satisfying explanation for it. If I were to try to make one and I'm just&nbsp;&nbsp;

kind of waving my hands when I say this, there's&nbsp; these ideas in physics around long tail or power&nbsp;&nbsp; law of correlations or effects. When a bunch of&nbsp; stuff happens, when you have a bunch of features,&nbsp;&nbsp; you get a lot of the data in the early fat&nbsp;

part of the distribution before the tails.&nbsp;&nbsp; For language, this would be things like&nbsp; — “Oh, I figured out there are parts of&nbsp;&nbsp; speech and nouns follow verbs.” And then there&nbsp; are these more and more subtle correlations.&nbsp;

So it kind of makes sense why every log or order&nbsp; of magnitude that you add, you capture more of the&nbsp;&nbsp; distribution. What's not clear at all is why does&nbsp; it scale so smoothly with parameters? Why does it&nbsp;&nbsp; scale so smoothly with the amount of data?

You can think up some explanations of why&nbsp;&nbsp; it's linear. The parameters are like&nbsp; a bucket, and the data is like water,&nbsp;&nbsp; and so size of the bucket is proportional to size&nbsp; of the water. But why does it lead to all this&nbsp;&nbsp;

very smooth scaling? We still don't know. There's&nbsp; all these explanations. Our chief scientist,&nbsp;&nbsp; Jared Kaplan did some stuff on fractal manifold&nbsp; dimension that you can use to explain it.&nbsp; So there's all kinds of ideas, but I feel&nbsp;

like we just don't really know for sure.&nbsp; And by the way, for the audience who&nbsp; is trying to follow along. By scaling,&nbsp;&nbsp; we're referring to the fact that you can very&nbsp; predictably see how if you go from Claude-1&nbsp;&nbsp;

to Claude-2 that the loss in terms of whether it&nbsp; can predict the next token scales very smoothly.&nbsp; Okay, so we don't know why it's happening, but&nbsp; can you at least predict empirically that here&nbsp;&nbsp; is the loss at which this ability will&nbsp;

emerge, here is the place where this&nbsp;&nbsp; circuit will emerge? Is that at all predictable&nbsp; or are you just looking at the loss number?&nbsp; That is much less predictable. What's&nbsp; predictable is this statistical average,&nbsp;&nbsp;

this loss, this entropy. And it's super&nbsp; predictable. It's sometimes predictable even&nbsp;&nbsp; to several significant figures which you don't&nbsp; see outside of physics. You don't expect to see&nbsp;&nbsp; it in this messy empirical field. But specific&nbsp;

abilities are actually very hard to predict.&nbsp;&nbsp; Back when I was working on GPT-2 and GPT-3, when&nbsp; does arithmetic come in place? When do models&nbsp;&nbsp; learn to code? Sometimes it's very abrupt. It's like how you can predict statistical&nbsp;&nbsp;

averages of the weather, but the weather on&nbsp; one particular day is very hard to predict.&nbsp; Dumb it down for me. I don't understand&nbsp; manifolds, but mechanistically,&nbsp;&nbsp; it doesn't know addition yet and suddenly&nbsp;

now it knows addition. What has happened?&nbsp; This is another question that we don't know the&nbsp; answer to. We're trying to answer this with things&nbsp;&nbsp; like mechanistic interpretability. You can think&nbsp; about these things like circuits snapping into&nbsp;&nbsp;

place. Although there is some evidence that when&nbsp; you look at the models being able to add things,&nbsp;&nbsp; its chance of getting the right answer shoots&nbsp; up all of a sudden. But if you look at what's&nbsp;&nbsp; the probability of the right answer? You'll&nbsp;

see it climb from like one in a million to&nbsp;&nbsp; one in 100,000 to one in a 1000 long before it&nbsp; actually gets the right answer. In many of these&nbsp;&nbsp; cases there's some continuous process going on&nbsp; behind the scenes. I don't understand it at all.&nbsp;

Does that imply that the circuit or&nbsp; the process for doing addition was pre&nbsp;&nbsp; existing and it just got increased in salience? I don't know if there's this circuit that's weak&nbsp;&nbsp; and getting stronger. I don't know if it's&nbsp;

something that works, but not very well.&nbsp;&nbsp; I think we don't know and these are&nbsp; some of the questions we're trying&nbsp;&nbsp; to answer with mechanistic interpretability. Are there abilities that won't emerge with scale?&nbsp;

I definitely think that things like alignment&nbsp; and values are not guaranteed to emerge with&nbsp;&nbsp; scale. One way to think about it is you train the&nbsp; model and it's basically predicting the world,&nbsp;&nbsp; it's understanding the world. Its job is facts&nbsp;

not values. It's trying to predict what comes&nbsp;&nbsp; next. But there's free variables here — What&nbsp; should you do? What should you think? What&nbsp;&nbsp; should you value? There aren't bits for that. There's just — if I started with this I should&nbsp;&nbsp;

finish with this. If I started with this other&nbsp; thing I should finish with this other thing.&nbsp;&nbsp; And so I think that's not going to emerge. If it turns out that scaling plateaus before&nbsp;&nbsp; we reach human level intelligence, looking&nbsp;

back on it, what would be your explanation?&nbsp;&nbsp; What do you think is likely to be the&nbsp; case if that turns out to be the outcome?&nbsp; I would distinguish some problem with the&nbsp; fundamental theory with some practical&nbsp;&nbsp;

issue. One practical issue we could have is&nbsp; we could run out of data. For various reasons,&nbsp;&nbsp; I think that's not going to happen but if you&nbsp; look at it very naively we're not that far from&nbsp;&nbsp; running out of data. So it's like we just don't&nbsp;

have the data to continue the scaling curves.&nbsp;&nbsp; Another way it could happen is we just use&nbsp; up all of the compute that was available and&nbsp;&nbsp; that wasn't enough and then progress is slow&nbsp; after that. I wouldn't bet on either of those&nbsp;&nbsp;

things happening but they could. From a fundamental perspective,&nbsp;&nbsp; I personally think it's very unlikely&nbsp; that the scaling laws will just stop.&nbsp;&nbsp; If they do, another reason could just be that&nbsp;

we don't have quite the right architecture. If&nbsp;&nbsp; we tried to do it with an LSTM or an RNN the slope&nbsp; would be different. It still might be that we get&nbsp;&nbsp; there but there are some things that are just very&nbsp; hard to represent when you don't have the ability&nbsp;&nbsp;

to attend far in the past that transformers have.&nbsp; If somehow we just hit a wall and it wasn’t about&nbsp;&nbsp; the architecture I'd be very surprised by that.&nbsp; We're already at the point where to me the&nbsp;&nbsp; things the models can't do don't seem to be&nbsp;

different in kind from the things they can do.&nbsp; You could have made a case a few years ago&nbsp; that they can't reason, they can't program.&nbsp;&nbsp; You could have drawn boundaries and said maybe&nbsp; you'll hit a wall. I didn't think we would hit a&nbsp;&nbsp;

wall, a few other people didn't think we would&nbsp; hit a wall, but it was a more plausible case&nbsp;&nbsp; then. It's a less plausible case now. It could happen. This stuff is crazy.&nbsp;&nbsp; We could hit a wall tomorrow. If that happens my&nbsp;

explanation would be there's something wrong with&nbsp;&nbsp; the loss when you train on next word prediction. If you really want to learn to program at a&nbsp;&nbsp; really high level, it means you care about some&nbsp; tokens much more than others and they're rare&nbsp;&nbsp;

enough that the loss function over focuses on the&nbsp; appearance, the things that are responsible for&nbsp;&nbsp; the most bits of entropy, and instead they don't&nbsp; focus on this stuff that's really essential. So&nbsp;&nbsp; you could have the signal drowned out in the&nbsp;

noise. I don't think it's going to play out&nbsp;&nbsp; that way for a number of reasons. But if you&nbsp; told me — Yes, you trained your 2024 model.&nbsp;&nbsp; It was much bigger and it just wasn't any better,&nbsp; and you tried every architecture and didn't work,&nbsp;&nbsp;

that's the explanation I would reach for. Is there a candidate for another loss function?&nbsp;&nbsp; If you had to abandon next token prediction. I think then you would have to go for some&nbsp;&nbsp; kind of RL. There's many different&nbsp;

kinds. There's RL from immune feedback,&nbsp;&nbsp; there's RL against an objective, there's things&nbsp; like Constitutional AI. There's things like&nbsp;&nbsp; amplification and debate. These are kind of both&nbsp; alignment methods and ways of training models.&nbsp;

You would have to try a bunch of things, but the&nbsp; focus would have to be on what do we actually care&nbsp;&nbsp; about the model doing? In a sense, we're a little&nbsp; bit lucky that predict the next word gets us all&nbsp;&nbsp; these other things we need. There's no guarantee.

From your worldview it seems there's a multitude&nbsp;&nbsp; of different loss functions that it's just a&nbsp; matter of what can allow you to just throw a&nbsp;&nbsp; whole bunch of data at it. Next token&nbsp; prediction itself is not significant.&nbsp;

The thing with RL is you get slowed down a bit&nbsp; because you have to design how the loss function&nbsp;&nbsp; works by some method. The nice thing with the&nbsp; next token prediction is it's there for you.&nbsp;&nbsp; It's the easiest thing in the world. So&nbsp;

I think it would slow you down if you&nbsp;&nbsp; couldn't scale in just that very simplest way. You mentioned that data is likely not to be the&nbsp;&nbsp; constraint. Why do you think that is the case? There's various possibilities here and for a&nbsp;&nbsp;

number of reasons I shouldn't go into the details,&nbsp; but there's many sources of data in the world&nbsp;&nbsp; and there's many ways that you can also generate&nbsp; data. My guess is that this will not be a blocker.&nbsp; Maybe it would be better&nbsp;

if it was, but it won't be.&nbsp; Are you talking about multimodal? There’s just many different ways to do it.&nbsp; How did you form your views on scaling? How&nbsp; far back can we go? And then you would be&nbsp;&nbsp;

basically saying something similar to this. This view that I have formed gradually from&nbsp;&nbsp; 2014 to 2017. My first experience with&nbsp; it was my first experience with AI.&nbsp;&nbsp; I saw some of the early stuff around AlexNet in&nbsp;

2012. I always had wanted to study intelligence&nbsp;&nbsp; but before I was just like, this doesn’t seem&nbsp; like it’s actually working. All the way back&nbsp;&nbsp; to 2005. I'd read Ray Kurzweil’s work. I'd read&nbsp; even some of Eliezer’s work on the early Internet&nbsp;&nbsp;

back then. And I thought this stuff kind of&nbsp; looks far away. I look at the AI stuff of&nbsp;&nbsp; today and it’s not anywhere close. But with AlexNet I was like, oh,&nbsp;&nbsp; this stuff is actually starting to&nbsp;

work. So I joined Andrew Ng’s group&nbsp;&nbsp; at Baidu. I had been in a different field and&nbsp; this was my first experience with AI and it was&nbsp;&nbsp; a bit different from a lot of the academic style&nbsp; research that was going on elsewhere in the world.&nbsp;

I kind of got lucky in that the task&nbsp; that was given to me and the other&nbsp;&nbsp; folks there. It was just to make the best&nbsp; speech recognition system that you can.&nbsp; There was a lot of data available, there were a&nbsp;

lot of GPUs available. It posed the problem in&nbsp;&nbsp; a way that was amenable to discovering that kind&nbsp; of scaling was a solution. That's very different&nbsp;&nbsp; from being a postdoc whose job is to come up with&nbsp; an idea that seems clever and new and makes your&nbsp;&nbsp;

mark as someone who's invented something. I just tried the simplest experiments. I&nbsp;&nbsp; was just fiddling with some dials. I was&nbsp; like, try adding more layers to the RNN,&nbsp;&nbsp; try training it for longer, what happens?&nbsp;

How long does it take to overfit? What if&nbsp;&nbsp; I add new data and repeat it less times? And&nbsp; I just saw these very consistent patterns.&nbsp; I didn't really know that this was unusual or&nbsp; that others weren't thinking in this way. This was&nbsp;&nbsp;

almost like beginner's luck. It was my first&nbsp; experience with it and I didn't really think&nbsp;&nbsp; about it beyond speech recognition. I was just&nbsp; like, oh, I don't know anything about this field.&nbsp;&nbsp; There are zillions of things people do with&nbsp;

machine learning. But I'm like, weird, this&nbsp;&nbsp; seems to be true in the speech recognition field. It was just before OpenAI started that I met Ilya,&nbsp;&nbsp; who you interviewed. One of the first&nbsp; things he said to me was — “Look. The&nbsp;&nbsp;

models, they just want to learn. You have to&nbsp; understand this. The models, they just want&nbsp;&nbsp; to learn.” And it was a bit like a Zen Koan.&nbsp; I listened to this and I became enlightened.&nbsp; And over the years, I would be the one who would&nbsp;

formalize a lot of these things and kind of put&nbsp;&nbsp; them together, but what that told me was that the&nbsp; phenomenon that I'd seen wasn't just some random&nbsp;&nbsp; thing. It was broad. It was more general.&nbsp; The models just want to learn. You get the&nbsp;&nbsp;

obstacles out of their way. You give them good&nbsp; data, you give them enough space to operate in,&nbsp;&nbsp; you don't do something stupid like&nbsp; condition them badly numerically,&nbsp;&nbsp; and they want to learn. They'll do it.

What I find really interesting about&nbsp;&nbsp; what you said is there were many people who were&nbsp; aware that these things are really good at speech&nbsp;&nbsp; recognition or at playing these constrained games.&nbsp; Very few extrapolated from there like you and Ilya&nbsp;&nbsp;

did to something that is generally intelligent. What was different about the way you were thinking&nbsp;&nbsp; about it versus how others were thinking about&nbsp; it? What made you think it's getting better at&nbsp;&nbsp; speech in this consistent way, it will get&nbsp;

better at everything in this consistent way.&nbsp; I genuinely don't know. At first when I saw it for&nbsp; speech, I assumed this was just true for speech or&nbsp;&nbsp; for this narrow class of models. I think it was&nbsp; just that over the period between 2014 and 2017,&nbsp;&nbsp;

I tried it for a lot of things and saw the same&nbsp; thing over and over again. I watched the same&nbsp;&nbsp; being true with Dota. I watched the same being&nbsp; true with robotics. Many people thought that&nbsp;&nbsp; as a counterexample, but I just thought,&nbsp;

well, it's hard to get data for robotics,&nbsp;&nbsp; but if we look within the data that&nbsp; we have, we see the same patterns.&nbsp; I think people were very focused&nbsp; on solving the problem in front of&nbsp;&nbsp;

them. It's very hard to explain why one&nbsp; person thinks one way and another person&nbsp;&nbsp; thinks a different way. People just see it&nbsp; through a different lens. They are looking&nbsp;&nbsp; vertically instead of horizontally.&nbsp;

They're not thinking about the scaling,&nbsp;&nbsp; they're thinking about how do I solve my problem?&nbsp; And for robotics, there's not enough data.&nbsp;&nbsp; That can easily abstract to — scaling&nbsp; doesn't work because we don't have the data.&nbsp;

For some reason, and it may just have been random,&nbsp; I was obsessed with that particular direction.&nbsp; When did it become obvious to you that language&nbsp; is the means to just feed a bunch of data into&nbsp;&nbsp; these things? Or was it just you ran out of other&nbsp;

things. Like robotics, there's not enough data.&nbsp;&nbsp; This other thing, there's not enough data. I think this whole idea of the next word&nbsp;&nbsp; prediction, that you could do self supervised&nbsp; learning, together with the idea that there's so&nbsp;&nbsp;

much richness and structure there for predicting&nbsp; the next word. It might say two plus two equals&nbsp;&nbsp; and you have to know the answer is four. It&nbsp; might be telling the story about a character.&nbsp; Basically, it's posing to the model the&nbsp;

equivalent of these developmental tests&nbsp;&nbsp; that get posed to children. Mary walks into&nbsp; the room and puts an item in there and then&nbsp;&nbsp; Chuck walks into the room and removes the item&nbsp; and Mary doesn't see it. What does Mary think?&nbsp;

To get this right in the service of predicting&nbsp; the next word the models are going to have to&nbsp;&nbsp; solve all these theory of mind problems, solve all&nbsp; these math problems. And so my thinking was just,&nbsp;&nbsp; well, you scale it up as much as you&nbsp;

can. There's kind of no limit to it.&nbsp; And I think I kind of abstractly had&nbsp; that view but the thing that really&nbsp;&nbsp; solidified and convinced me was the work that&nbsp; Alec Radford did on GPT-1. Which was that not&nbsp;&nbsp;

only could you get this language model that could&nbsp; predict things very well but you could also fine&nbsp;&nbsp; tune it. In those days, you needed to&nbsp; fine tune it to do all these other tasks.&nbsp; So I was like, wow, this isn't just some&nbsp;

narrow thing where you get the language&nbsp;&nbsp; model right. It's sort of halfway to everywhere.&nbsp; You get the language model right and then with a&nbsp;&nbsp; little move in this direction, it can solve this&nbsp; logical dereference test or whatever. And with&nbsp;&nbsp;

this other thing, it can solve translation&nbsp; or something. And then you're like, wow,&nbsp;&nbsp; I think there's really something to do.&nbsp; And of course, we can really scale it.&nbsp; One thing that's confusing, or that would have&nbsp;

been hard to see — If you told me in 2018 we'll&nbsp;&nbsp; have models in 2023, like Claude 2 that can&nbsp; write theorems in the style of Shakespeare,&nbsp;&nbsp; whatever theory you want, they can ace&nbsp; standardized test with open ended questions,&nbsp;&nbsp;

just all kinds of really impressive things, I&nbsp; would have said — Oh, you have AGI. You clearly&nbsp;&nbsp; have something that is human level intelligence. While these things are impressive, it clearly&nbsp;&nbsp; seems we're not at human level, at least&nbsp;

in the current generation and potentially&nbsp;&nbsp; for generations to come. What explains&nbsp; this discrepancy between super impressive&nbsp;&nbsp; performance in these benchmarks and the things&nbsp; you could describe versus general intelligence?&nbsp;

That was one area where actually I was&nbsp; not prescient and I was surprised as well.&nbsp; When I first looked at GPT-3 and the kind&nbsp; of things that we built in the early days&nbsp;&nbsp; at Anthropic, my general sense was that it&nbsp;

seems like they've really grasped the essence&nbsp;&nbsp; of language. I'm not sure how much we need&nbsp; to scale them up. Maybe what's more needed&nbsp;&nbsp; from here is like RL and all the other stuff. In 2020 I thought we can scale this a bunch&nbsp;&nbsp;

more but I wonder if it's more efficient to&nbsp; scale it more or to start adding on these&nbsp;&nbsp; other objectives like RL. I thought maybe if you&nbsp; do as much RL as you've done pre training for a&nbsp;&nbsp; 2020 style model, that's the way to go.

Scaling it up will keep working. But is&nbsp;&nbsp; that really the best path? And I don't&nbsp; know, it just keeps going. I thought&nbsp;&nbsp; it had understood a lot of the essence of&nbsp; language but then there's further to go.&nbsp;

Stepping back from it. One of the reasons&nbsp; why I'm sort of very empiricist about AI,&nbsp;&nbsp; about safety, about organizations, is&nbsp; that you often get surprised. I feel like&nbsp;&nbsp; I've been right about some things but still with&nbsp;

these theoretical pictures ahead, been wrong about&nbsp;&nbsp; most things. Being right about 10% of the stuff&nbsp; sets you head and shoulders above many people.&nbsp; If you look back to these diagrams that are&nbsp; like, here's the village idiot, here's Einstein.&nbsp;&nbsp;

Here's the scale of intelligence. And the village&nbsp; idiot and Einstein are very close to each other. Maybe that's still true in some abstract sense or&nbsp; something but it's not really what we're seeing,&nbsp;&nbsp; is it? We're seeing that it seems like&nbsp;

the human range is pretty broad and we&nbsp;&nbsp; don't hit the human range in the same place&nbsp; or at the same time for different tasks.&nbsp; Like, write a sonnet in the style of Cormac&nbsp; McCarthy. I'm not very creative, so I couldn't&nbsp;&nbsp;

do that but that's a pretty high level human&nbsp; skill. And even the model is starting to get&nbsp;&nbsp; good at stuff like constrained writing like,&nbsp; write a page about X without using the letter E.&nbsp; I think the models might be superhuman or close&nbsp;

to superhuman at that. But when it comes to&nbsp;&nbsp; proving relatively simple mathematical theorems,&nbsp; they're just starting to do the beginning of it.&nbsp;&nbsp; They make really dumb mistakes sometimes and&nbsp; they really lack any kind of broad correcting&nbsp;&nbsp;

your errors or doing some extended task. So it turns out that intelligence isn't a&nbsp;&nbsp; spectrum. There are a bunch of different&nbsp; areas of domain expertise. There are a&nbsp;&nbsp; bunch of different kinds of skills. Memory&nbsp;

is different. It's all formed in the blob,&nbsp;&nbsp; it's not complicated. But to the extent it even&nbsp; is on the spectrum, the spectrum is also wide.&nbsp; If you asked me ten years ago, that's not what&nbsp; I would have expected at all, but I think that's&nbsp;&nbsp;

very much the way it's turned out. Oh, man. I have so many questions&nbsp;&nbsp; just as a follow up on that. Do you expect that given the&nbsp;&nbsp; distribution of training that these models get&nbsp;

from massive amounts of internet data versus what&nbsp;&nbsp; humans got from evolution, that the repertoire&nbsp; of skills that elicits will be just barely&nbsp;&nbsp; overlapping? Will it be like concentric circles?&nbsp; How do you think about that? Do those matter?&nbsp;

Clearly there's certainly a large amount of&nbsp; overlap because a lot of the things these&nbsp;&nbsp; models do have business applications and many&nbsp; of their business applications are doing things&nbsp;&nbsp; that are helping humans to be more effective&nbsp;

at things. So the overlap is quite large.&nbsp; If you think of all the activity that humans put&nbsp; on the internet in text, that covers a lot of it,&nbsp;&nbsp; but it probably doesn't cover some things.&nbsp; Like the models learn a physical model of the&nbsp;&nbsp;

world to some extent, but they certainly don't&nbsp; learn how to actually move around in the world.&nbsp;&nbsp; Again, maybe that's easy to fine tune. So there are some things that the models&nbsp;&nbsp; don't learn that humans do. And then the models&nbsp;

also learn things that humans don’t, for example,&nbsp;&nbsp; to speak fluent Base 64. I don't know&nbsp; about you, but I never learned that.&nbsp; How likely do you think it is that these models&nbsp; will be superhuman for many years at economically&nbsp;&nbsp;

valuable tasks while they are still below humans&nbsp; in many other relevant tasks that prevents&nbsp;&nbsp; an intelligence explosion or something? This kind of stuff is really hard to know&nbsp;&nbsp; so I'll give that caveat. You can kind of predict&nbsp;

the basic scaling laws and then this more granular&nbsp;&nbsp; stuff, which we really want to know to know how&nbsp; this all is going to go, is much harder to know.&nbsp; My guess would be the scaling laws are&nbsp; going to continue. Again, subject to — do&nbsp;&nbsp;

people slow down for safety or for regulatory&nbsp; reasons? But let's just put all that aside and&nbsp;&nbsp; say we have the economic capability to keep&nbsp; scaling. If we did that, what would happen?&nbsp; My view is we're going to keep getting better&nbsp;

across the board and I don't see any area where&nbsp;&nbsp; the models are super, super weak or not starting&nbsp; to make progress. That used to be true of math&nbsp;&nbsp; and programming, but over the last six months&nbsp; the 2023 generation of models, compared to the&nbsp;&nbsp;

2022 generation, has started to learn that. There&nbsp; may be more subtle things we don't know. And so I&nbsp;&nbsp; kind of suspect, even if it isn't quite even,&nbsp; that the rising tide will lift all the boats.&nbsp; Does that include the thing you were mentioning&nbsp;

earlier where if there's an extended task,&nbsp;&nbsp; it loses its train of thought or its&nbsp; ability to just execute a series of steps?&nbsp; That's going to depend on things like&nbsp; RL training to have the model do longer&nbsp;&nbsp;

horizon tasks. I don't expect that to require&nbsp; a substantial amount of additional compute.&nbsp;&nbsp; I think that was probably an artifact of thinking&nbsp; about RL in the wrong way and underestimating&nbsp;&nbsp; how much the model had learned on its own.

In terms of are we going to be superhuman&nbsp;&nbsp; in some areas and not others? I think it's&nbsp; complicated. I could imagine that we won't&nbsp;&nbsp; be superhuman in some areas because they involve&nbsp; embodiment in the physical world. And then what&nbsp;&nbsp;

happens? Do the AIs help us train faster AIs?&nbsp; And those faster AIs wrap around and solve&nbsp;&nbsp; that? Do you not need the physical world? It&nbsp; depends what you mean. Are we worried about an&nbsp;&nbsp; alignment disaster? Are we worried about misuse,&nbsp;

like making weapons of mass destruction? Are we&nbsp;&nbsp; worried about AI taking over research from humans?&nbsp; Are we worried about it reaching some threshold&nbsp;&nbsp; of economic productivity where it can do what&nbsp; the average human does? I think these different&nbsp;&nbsp;

thresholds have different answers, although I&nbsp; suspect they will all come within a few years.&nbsp; Let me ask about those thresholds. If Claude was&nbsp; an employee at Anthropic, what salary would it be&nbsp;&nbsp; worth? Is it meaningfully speeding up AI progress?

It feels to me like an intern in most areas,&nbsp;&nbsp; but then some specific areas&nbsp; where it's better than that.&nbsp; One thing that makes the comparison hard is&nbsp; that the form factor is not the same as a human.&nbsp;&nbsp;

If you were to behave like one of these chat&nbsp; bots, I guess we could have this conversation,&nbsp;&nbsp; but they're more designed to answer single or&nbsp; a few questions. They don't have the concept&nbsp;&nbsp; of having a long life of prior experience. We're&nbsp;

talking here about things that I've experienced&nbsp;&nbsp; in the past and chat bots don't have that. There's all kinds of stuff missing and so&nbsp;&nbsp; it's hard to make a comparison. They feel like&nbsp; interns in some areas and then they have areas&nbsp;&nbsp;

where they spike and are really savants,&nbsp; where they may be better than anyone here.&nbsp; But does the overall picture of something like&nbsp; an intelligence explosion make sense to you? My&nbsp;&nbsp; former guest, Carl Shulman, has this very detailed&nbsp;

model of an intelligence explosion. As somebody&nbsp;&nbsp; who would actually see that happening, does that&nbsp; make sense to you? As they go from interns to&nbsp;&nbsp; entry level software engineers. Those entry level&nbsp; software engineers increase your productivity…&nbsp;

I think the idea that as AI systems become&nbsp; more productive, first they speed up the&nbsp;&nbsp; productivity of humans, then they equal&nbsp; the productivity of humans, and then in&nbsp;&nbsp; some meaningful sense are the main contributor to&nbsp;

scientific progress that happens at some point.&nbsp;&nbsp; That basic logic seems likely to me although I&nbsp; have a suspicion that when we actually go into&nbsp;&nbsp; the details, it's going to be weird and different&nbsp; than we expect. That in all the detailed models,&nbsp;&nbsp;

we're thinking about the wrong things&nbsp; or we're right about one thing,&nbsp;&nbsp; and then are wrong about ten other things. I think&nbsp; we might end up in a weirder world than we expect.&nbsp; When you add all this together, what does&nbsp;

your estimate of when we get something&nbsp;&nbsp; kind of human level look like? It depends on the thresholds.&nbsp;&nbsp; In terms of someone looks at the model and&nbsp; even if you talk to it for an hour or so, it's&nbsp;&nbsp;

basically like a generally well educated human,&nbsp; that could be not very far away at all. I think&nbsp;&nbsp; that could happen in two or three years. The main thing that would stop it would&nbsp;&nbsp; be if we hit certain safety thresholds and stuff&nbsp;

like that. So if a company or the industry decides&nbsp;&nbsp; to slow down or we're able to get the government&nbsp; to institute restrictions that moderate the rate&nbsp;&nbsp; of progress for safety reasons, that would be&nbsp; the main reason it wouldn't happen. But if you&nbsp;&nbsp;

just look at the logistical and economic ability&nbsp; to scale, we're not very far at all from that.&nbsp; Now that may not be the threshold where the&nbsp; models are existentially dangerous. In fact,&nbsp;&nbsp; I suspect it's not quite there yet. It may not be&nbsp;

the threshold where the models can take over most&nbsp;&nbsp; AI research. It may not be the threshold where&nbsp; the models seriously change how the economy works.&nbsp; I think it gets a little murky after that and&nbsp; all of those thresholds may happen at various&nbsp;&nbsp;

times after that. But in terms of the base&nbsp; technical capability of — it kind of sounds&nbsp;&nbsp; like a reasonably generally educated human across&nbsp; the board. I think that could be quite close.&nbsp; Why would it be the case that it could pass&nbsp;

a Turing Test for an educated person but not&nbsp;&nbsp; be able to contribute or substitute&nbsp; for human involvement in the economy?&nbsp; A couple of reasons. One is just that&nbsp; the threshold of skill isn't high enough,&nbsp;&nbsp;

comparative advantage. It doesn't matter that&nbsp; I have someone who's better than the average&nbsp;&nbsp; human at every task. What I really need for AI&nbsp; research is to find something that is strong&nbsp;&nbsp; enough to substantially accelerate the labor&nbsp;

of the thousand experts who are best at it.&nbsp;&nbsp; We might reach a point where the comparative&nbsp; advantage of these systems is not great.&nbsp; Another thing that could be the case is that there&nbsp; are these mysterious frictions that don't show up&nbsp;&nbsp;

in naive economic models but you see it whenever&nbsp; you go to a customer or something. You're like —&nbsp;&nbsp; “Hey, I have this cool chat bot.” In principle,&nbsp; it can do everything that your customer service&nbsp;&nbsp; bot does or this part of your company does, but&nbsp;

the actual friction of how do we slot it in? How&nbsp;&nbsp; do we make it work? That includes both just the&nbsp; question of how it works in a human sense within&nbsp;&nbsp; the company, how things happen in the economy and&nbsp; overcome frictions, and also just, what is the&nbsp;&nbsp;

workflow? How do you actually interact with it? It's very different to say, here's a chat bot that&nbsp;&nbsp; looks like it's doing this task or helping the&nbsp; human to do some task as it is to say, okay, this&nbsp;&nbsp; thing is deployed and 100,000 people are using it.

Right now lots of folks are rushing to deploy&nbsp;&nbsp; these systems but in many cases, they're not using&nbsp; them anywhere close to the most efficient way that&nbsp;&nbsp; they could. Not because they're not smart, but&nbsp; because it takes time to work these things out.&nbsp;&nbsp;

And so I think when things are changing this fast,&nbsp; there are going to be all of these frictions.&nbsp; These are messy realities that don't quite get&nbsp; captured in the model. I don't think it changes&nbsp;&nbsp; the basic picture. I don't think it changes the&nbsp;

idea that we're building up this snowball of,&nbsp;&nbsp; the models help the models get better and&nbsp; can accelerate what the humans do. And&nbsp;&nbsp; eventually it's mostly the models doing the work. You zoom out far enough that's happening. But I'm&nbsp;&nbsp;

skeptical of any kind of precise mathematical or&nbsp; exponential prediction of how it's going to be.&nbsp;&nbsp; I think it's all going to be a mess. But what&nbsp; we know is it's on a metaphorical exponential,&nbsp;&nbsp; and it's going to happen fast.

How do those different exponentials&nbsp;&nbsp; which we've been talking about net out? One was the scaling laws themselves are&nbsp;&nbsp; power laws with decaying marginal loss parameter&nbsp; or something. The other exponential you talked&nbsp;&nbsp;

about is, these things can get involved in the&nbsp; process of AI research itself, speeding it up.&nbsp; Those two are sort of opposing exponentials. Does&nbsp; it net out to be superlinear or sublinear? And&nbsp;&nbsp; also you mentioned that the distribution&nbsp;

of intelligence might just be broader.&nbsp;&nbsp; After we get to this point in two to&nbsp; three years, what does that look like?&nbsp; I think it's very unclear. We're already&nbsp; at the point where if you look at the loss,&nbsp;&nbsp;

the scaling laws are starting to bend. We've seen&nbsp; that in published model cards offered by multiple&nbsp;&nbsp; companies. So that's not a secret at all. But as they start to bend, each little bit&nbsp;&nbsp; of entropy of accurate prediction becomes&nbsp;

more important. Maybe these last little&nbsp;&nbsp; bits of entropy are the difference between a&nbsp; physics paper as Einstein would have written&nbsp;&nbsp; it as opposed to some other physicist. It's hard to assess significance from&nbsp;&nbsp;

this. It certainly looks like in terms of&nbsp; practical performance, the metrics keep&nbsp;&nbsp; going up relatively linearly, although they're&nbsp; always unpredictable. It's hard to see that.&nbsp; And then the thing that I think is driving the&nbsp;

most acceleration is just more and more money&nbsp;&nbsp; is going into the field. People are seeing that&nbsp; there's just a huge amount of economic value and&nbsp;&nbsp; so I expect the price, the amount of money spent&nbsp; on the largest models, to go up by like a factor&nbsp;&nbsp;

of 100 or something. And for that to then be&nbsp; concatenated with the chips are getting faster,&nbsp;&nbsp; the algorithms are getting better because&nbsp; there's so many people working on this now.&nbsp; Again, I'm not making a normative statement&nbsp;

here. This is what should happen. I'm not&nbsp;&nbsp; even saying this necessarily will happen because&nbsp; there's important safety and government questions&nbsp;&nbsp; here which we're very actively working&nbsp; on. I'm just saying, left to itself,&nbsp;&nbsp;

this is what the economy is going to do. We'll get to those questions in a second. But&nbsp;&nbsp; how do you think about the contribution of&nbsp; Anthropic to that increase in the scope of&nbsp;&nbsp; this industry. There's an argument you can make&nbsp;

that, with that investment, we can work on safety&nbsp;&nbsp; stuff at Anthropic, another that says you're&nbsp; raising the salience of this field in general.&nbsp; It's all costs and benefits. The costs are&nbsp; not zero. A mature way to think about these&nbsp;&nbsp;

things is not to deny that there are any&nbsp; costs, but to think about what the costs&nbsp;&nbsp; are and what the benefits are. I think we've&nbsp; been relatively responsible in the sense&nbsp;&nbsp; that we didn't cause the big acceleration that&nbsp;

happened late last year and at the beginning of&nbsp;&nbsp; this year. We weren't the ones who did that. And honestly, if you look at the reaction of&nbsp;&nbsp; Google, that might be ten times more important&nbsp; than anything else. And then once it had happened,&nbsp;&nbsp;

once the ecosystem had changed, then we did&nbsp; a lot of things to stay on the frontier.&nbsp; It's like any other question. You're trying&nbsp; to do the things that have the lowest costs&nbsp;&nbsp; and the biggest benefits and that causes you to&nbsp;

have different strategies at different times.&nbsp; One question I had for you while we were&nbsp; talking about the intelligence stuff was,&nbsp;&nbsp; as a scientist yourself, what do you make of&nbsp; the fact that these things have basically the&nbsp;&nbsp;

entire corpus of human knowledge memorized&nbsp; and they haven't been able to make a single&nbsp;&nbsp; new connection that has led to a discovery? Whereas if even a moderately intelligent&nbsp;&nbsp; person had this much stuff memorized, they&nbsp;

would notice — Oh, this thing causes this&nbsp;&nbsp; symptom. This other thing also causes this&nbsp; symptom. There's a medical cure right here.&nbsp; Shouldn't we be expecting that kind of stuff? I'm not sure. These words. Discovery. Creativity.&nbsp;&nbsp;

One of the lessons I've learned is that in the big&nbsp; blob of compute, these ideas often end up being&nbsp;&nbsp; fuzzy and elusive and hard to track down. But I think there is something here.&nbsp;&nbsp; The models do display a kind of&nbsp;

ordinary creativity. Things like,&nbsp;&nbsp; write a sonnet in the style of Cormac McCarthy&nbsp; or Barbie. There is some creativity to that&nbsp;&nbsp; and they do draw new connections of the&nbsp; kind that an ordinary person would draw.&nbsp;

I agree with you that there haven't been any “big”&nbsp; scientific discoveries. I think that's a mix of&nbsp;&nbsp; just the model skill level is not high enough yet.&nbsp; I was on a podcast last week where the host said,&nbsp;&nbsp; “I don't know, I play with these models.&nbsp;

They're kind of mid. They get a B or a B minus.”&nbsp; That is going to change with the scaling. I do think there's an interesting point about,&nbsp;&nbsp; well, the models have an advantage, which&nbsp; is they know a lot more than us. Shouldn’t&nbsp;&nbsp;

they have an advantage already, even&nbsp; if their skill level isn't quite high?&nbsp;&nbsp; Maybe that's kind of what you're getting at. I don't really have an answer to that. It seems&nbsp;&nbsp; certainly like memorization and facts and drawing&nbsp;

connections is an area where the models are ahead.&nbsp;&nbsp; And I do think maybe you need those connections&nbsp; and you need a fairly high level of skill.&nbsp; Particularly in the area of biology, for better&nbsp; and for worse, the complexity of biology is such&nbsp;&nbsp;

that the current models know a lot of things&nbsp; right now and that's what you need to make&nbsp;&nbsp; discoveries and draw connections. It's not like&nbsp; physics where you need to think and come up with&nbsp;&nbsp; a formula. In biology you need to know a lot of&nbsp;

things. and so I do think the models know a lot&nbsp;&nbsp; of things and they have a skill level that's&nbsp; not quite high enough to put them together.&nbsp; I think they are just on the cusp of&nbsp; being able to put these things together.&nbsp;

On that point. Last week in your Senate testimony,&nbsp; you said that these models are two to three years&nbsp;&nbsp; away from potentially enabling large scale bio&nbsp; terrorism attacks. Can you make that more concrete&nbsp;&nbsp; without obviously giving the kind of information&nbsp;

that would result in speeding that up? Is it one&nbsp;&nbsp; shotting how to weaponize something or&nbsp; do you have to fine tune an open source&nbsp;&nbsp; model? What would that actually look like? I think it'd be good to clarify this because&nbsp;&nbsp;

we did a blog post and the Senate testimony&nbsp; and various people didn't understand the&nbsp;&nbsp; point or didn't understand what we'd done. Today you can ask the models all kinds of&nbsp;&nbsp; things about biology and get them to say all&nbsp;

kinds of scary things, but often those scary&nbsp;&nbsp; things are things that you could Google, and I'm&nbsp; therefore not particularly worried about that.&nbsp;&nbsp; I think it's actually an impediment to seeing&nbsp; the real danger, where someone just says — Oh,&nbsp;&nbsp;

I asked this model to tell me some&nbsp; things about smallpox, and it will.&nbsp; That is actually not what I'm worried about.&nbsp; We spent about six months working with folks&nbsp;&nbsp; who are the most expert in the world&nbsp;

on how do biological attacks happen,&nbsp;&nbsp; what would you need to conduct such an attack,&nbsp; and how do we defend against such an attack?&nbsp; They worked very intensively on just the entire&nbsp; workflow of trying to do a bad thing. It's not one&nbsp;&nbsp;

shot, it's a long process. There are many steps&nbsp; to it. It's not just like I asked the model for&nbsp;&nbsp; this one page of information. And again, without&nbsp; going into any detail, the thing I said in the&nbsp;&nbsp; Senate testimony is, there are some steps where&nbsp;

you can just get information on Google. There&nbsp;&nbsp; are some steps that are what I'd call missing.&nbsp; They're scattered across a bunch of textbooks,&nbsp;&nbsp; or they're not in any textbook.&nbsp; They're kind of implicit knowledge,&nbsp;&nbsp;

and they're not explicit knowledge. They're&nbsp; more like, I have to do this lab protocol,&nbsp;&nbsp; and what if I get it wrong? Oh, if this happens,&nbsp; then my temperature was too low. If that happened,&nbsp;&nbsp; I needed to add more of this particular reagent.

What we found is that for the most part,&nbsp;&nbsp; those key missing pieces, the models can't do&nbsp; them yet, but we found that sometimes they can,&nbsp;&nbsp; and when they can, sometimes they still&nbsp; hallucinate, which is the thing that's&nbsp;&nbsp;

keeping us safe. But we saw enough signs of the&nbsp; models doing those key things well. And if we look&nbsp;&nbsp; at state of the art models and go backwards&nbsp; to previous models, we look at the trend,&nbsp;&nbsp; it shows every sign that two or three years&nbsp;

from now, we're going to have a real problem.&nbsp; Yeah, especially the thing you mentioned on&nbsp; the log scale. You go from one in 100 times,&nbsp;&nbsp; it gets it right, to one in ten, to.. Exactly. I've seen many of these “groks”&nbsp;&nbsp;

in my life. I was there when I watched when GPT-3&nbsp; learned to do arithmetic, when GPT-2 learned to&nbsp;&nbsp; do regression a little bit above chance, when&nbsp; with Claude we got better on all these tests&nbsp;&nbsp; of helpful, honest, harmless. I've seen a lot&nbsp;

of groks. This is unfortunately not one that&nbsp;&nbsp; I'm excited about, but I believe it's happening. Somebody might say, listen, you were a co-author&nbsp;&nbsp; on this post that OpenAI released about GPT-2&nbsp; where they said, we're not going to release the&nbsp;&nbsp;

weights or the details here because we're&nbsp; worried that this model will be used for&nbsp;&nbsp; something bad. And looking back on it now, it's&nbsp; laughable to think that GPT-2 could have done&nbsp;&nbsp; anything bad. Are we just way too worried?&nbsp;

This is a concern that doesn't make sense? It is interesting. It might be worth looking&nbsp; back at the actual text of that post.&nbsp;&nbsp; I don't remember it exactly but it's still&nbsp; up on the Internet. It says something like,&nbsp;&nbsp;

we're choosing not to release the weights because&nbsp; of concerns about misuse. But it also said,&nbsp;&nbsp; this is an experiment. We're not sure if this is&nbsp; necessary or the right thing to do at this time,&nbsp;&nbsp; but we'd like to establish a norm of thinking&nbsp;

carefully about these things. You could think&nbsp;&nbsp; of it a little like the Asilomar conference&nbsp; in the 1970s where they were just figuring out&nbsp;&nbsp; recombinant DNA. It was not necessarily the case&nbsp; that someone could do something really bad with&nbsp;&nbsp;

recombinant DNA. It's just the possibilities&nbsp; were starting to become clear. Those words,&nbsp;&nbsp; at least, were the right attitude. Now I think there's a separate thing that&nbsp;&nbsp; people don't just judge the post, they judge&nbsp;

the organization. Is this an organization&nbsp;&nbsp; that produces a lot of hype or that has&nbsp; credibility or something like that? And&nbsp;&nbsp; so that had some effect on it. I guess&nbsp; you could also ask, is it inevitable that&nbsp;&nbsp;

you can't get across any message more complicated&nbsp; than this thing right here is dangerous.&nbsp; You can argue about those but I think&nbsp; the basic thing that was in my head and&nbsp;&nbsp; the head of others who were involved in&nbsp;

that, and what is evident in the post is,&nbsp;&nbsp; we actually don't know. We have pretty wide error&nbsp; bars on what's dangerous and what's not so we want&nbsp;&nbsp; to establish a norm of being careful. By the way we have enormously more&nbsp;&nbsp;

evidence now. We've seen enormously more of&nbsp; these groks now and so we're well calibrated&nbsp;&nbsp; but there's still uncertainty. In all these&nbsp; statements I've said, in two or three years we&nbsp;&nbsp; might be there. There's a substantial risk of&nbsp;

it and we don't want to take that risk. But I&nbsp;&nbsp; wouldn't say it's 100%. It could be 50-50. Okay, let's talk about cybersecurity,&nbsp;&nbsp; which in addition to bio risk is another thing&nbsp; Anthropic has been emphasizing. How have you&nbsp;&nbsp;

avoided the cloud microarchitecture from leaking?&nbsp; Because, as you know, your competitors have been&nbsp;&nbsp; less successful at this kind of security. Can't comment on anyone else's security,&nbsp;&nbsp; don't know what's going on in there. A thing that&nbsp;

we have done is, there are these architectural&nbsp;&nbsp; innovations that make training more efficient.&nbsp; We call them compute multipliers because&nbsp;&nbsp; they're the equivalent of having more compute. I don't want to say too much about our compute&nbsp;&nbsp;

multipliers because it could allow an adversary&nbsp; to counteract our measures but we limit the&nbsp;&nbsp; number of people who are aware of a given compute&nbsp; multiplier to those who need to know about it.&nbsp; So there's a very small number of people who could&nbsp;

leak all of these secrets. There's a larger number&nbsp;&nbsp; of people who could leak one of them. But this is&nbsp; the standard compartmentalization strategy that's&nbsp;&nbsp; used in the intelligence community or resistance&nbsp; cells or whatever. Over the last few months we've&nbsp;&nbsp;

implemented these measures. I don't want to jinx&nbsp; anything by saying, oh, this could never happen&nbsp;&nbsp; to us but I think it would be harder for it to&nbsp; happen. I don't want to go into any more detail.&nbsp; By the way I'd encourage all the other&nbsp;

companies to do this as well. As much as&nbsp;&nbsp; competitors architecture’s leaking&nbsp; is narrowly helpful to Anthropic,&nbsp;&nbsp; it's not good for anyone in the long run.&nbsp; Security around this stuff is really important.&nbsp;

Could you, with your current&nbsp; security, prevent a dedicated state&nbsp;&nbsp; level actor from getting the Claude 2 weights? It depends how dedicated. Our head of security,&nbsp;&nbsp; who used to work on security for Chrome, which&nbsp;

is a very widely used and attacked application,&nbsp;&nbsp; he likes to think about it in terms of — how much&nbsp; would it cost to attack Anthropic successfully?&nbsp;&nbsp; Again, I don't want to go into super detail&nbsp; of how much I think it will cost to attack&nbsp;&nbsp;

and it's just inviting people. One of our goals&nbsp; is that it costs more to attack Anthropic than&nbsp;&nbsp; it costs to just train your own model. It doesn't&nbsp; guarantee things because, of course you need the&nbsp;&nbsp; talent as well so you might still, but attacks&nbsp;

have risks, the diplomatic costs, and they use&nbsp;&nbsp; up the very sparse resources that nation state&nbsp; actors might have in order to do the attacks.&nbsp; We're not there yet by the way. But I think we&nbsp; are at a very high standard of security compared&nbsp;&nbsp;

to the size of company that we are. If you&nbsp; look at security for most 150 person companies&nbsp;&nbsp; there's just no comparison. But could we resist&nbsp; if it was a state actor's top priority to steal&nbsp;&nbsp; our model weights? No. They would succeed.

How long does that stay true? Because at some&nbsp;&nbsp; point the value keeps increasing and increasing.&nbsp; And another part of this question is what kind&nbsp;&nbsp; of a secret is how to train Claude 3 or Claude 2? For example, with nuclear weapons we had lots of&nbsp;&nbsp;

spies. You just take a blueprint of the implosion&nbsp; device across and that's what you need. Is it more&nbsp;&nbsp; tacit here like the thing you were talking about&nbsp; with biology? You need to know how these reagents&nbsp;&nbsp; work or is it just like you got the blueprint, you&nbsp;

got the microarchitecture and the hyperparameters?&nbsp; There are some things that are like a one line&nbsp; equation and there are other things that are&nbsp;&nbsp; more complicated. I think compartmentalization is&nbsp; the best way to do it. Just limit the number of&nbsp;&nbsp;

people who know about something. If you're a 1000&nbsp; person company and everyone knows every secret,&nbsp;&nbsp; one, I guarantee you have a leaker&nbsp; and two, I guarantee you have a spy.&nbsp; Okay, let's talk about alignment and let's&nbsp;

talk about mechanistic interpretability,&nbsp;&nbsp; which is the branch you guys specialize in. While&nbsp; you're answering this question, you might want to&nbsp;&nbsp; explain what mechanistic interpretability is. The broader question is mechanistically,&nbsp;&nbsp;

what is alignment? Is it that you're locking in&nbsp; the model into a benevolent character? Are you&nbsp;&nbsp; disabling deceptive circuits and procedures? What&nbsp; concretely is happening when you align a model?&nbsp; As with most things, when we actually train a&nbsp;

model to be aligned, we don't know what happens&nbsp;&nbsp; inside the model. There are different ways of&nbsp; training it to be aligned but we don't really&nbsp;&nbsp; know what happens. All the current methods that&nbsp; involve some kind of fine tuning of course have&nbsp;&nbsp;

the property that the underlying knowledge and&nbsp; abilities that we might be worried about don't&nbsp;&nbsp; disappear. The model is just taught not to&nbsp; output them. I don't know if that's a fatal&nbsp;&nbsp; flaw or if that's just the way things have&nbsp;

to be. I don't know what's going on inside&nbsp;&nbsp; mechanistically and I think that's the whole&nbsp; point of mechanistic interpretability. To&nbsp;&nbsp; really understand what's going on inside the&nbsp; models at the level of individual circuits.&nbsp;

Eventually when it's solved, what does the&nbsp; solution look like? What is the case where&nbsp;&nbsp; if you’re Claude 4, you do the mechanistic&nbsp; interpretability thing and you're like,&nbsp;&nbsp; I'm satisfied, it's aligned.&nbsp;

What is it that you've seen?&nbsp; We don't know enough to know that yet. I can&nbsp; give you a sketch for what the process looks&nbsp;&nbsp; like as opposed to what the final result&nbsp; looks like. Verifiability is a lot of the&nbsp;&nbsp;

challenge here. We have all these methods&nbsp; that purport to align AI systems and do&nbsp;&nbsp; succeed at doing so for today's tasks. But then the question is always if you&nbsp;&nbsp; had a more powerful model or if you&nbsp;

had a model in a different situation,&nbsp;&nbsp; would it be aligned? This problem would be much&nbsp; easier if you had an oracle that could just&nbsp;&nbsp; scan a model and say okay, I know this model is&nbsp; aligned, I know what it'll do in every situation.&nbsp;

I think the closest thing we have to that is&nbsp; something like mechanistic interpretability.&nbsp;&nbsp; It's not anywhere near up to the task yet.&nbsp; But I guess I would say I think of it as&nbsp;&nbsp; almost like an extended training set and an&nbsp;

extended test set. Everything we're doing,&nbsp;&nbsp; all the alignment methods we're doing are&nbsp; the training set. You can run tests in them,&nbsp;&nbsp; but will it really work out a distribution?&nbsp; Will it really work in another situation?&nbsp;

Mechanistic interpretability is the only thing&nbsp; that even in principle is the thing where it's&nbsp;&nbsp; more like an X-ray of the model than modification&nbsp; of the model. It's more like an assessment than&nbsp;&nbsp; an intervention. Somehow we need to get into&nbsp;

a dynamic where we have an extended test set,&nbsp;&nbsp; an extended training set, which&nbsp; is all these alignment methods,&nbsp;&nbsp; and an extended test set which is kind of&nbsp; like you X-ray the model and say, okay,&nbsp;&nbsp;

what worked and what didn't? In a way that goes&nbsp; beyond just the empirical test that you've run,&nbsp;&nbsp; where you're saying, what is the model&nbsp; going to do in these situations? What&nbsp;&nbsp; is within its capabilities to do instead&nbsp;

of, what did it do phenomenologically?&nbsp; And of course we have to be careful about that.&nbsp; One of the things I think is very important is we&nbsp;&nbsp; should never train for interpretability because&nbsp; that's taking away that advantage. You even have&nbsp;&nbsp;

the problem similar to validation versus test set,&nbsp; where if you look at the X-ray too many times,&nbsp;&nbsp; you can interfere. We should worry about&nbsp; that, but that's a much weaker process,&nbsp;&nbsp; it's not automated optimization. We should just&nbsp;

make sure, as with validation and test sets, that&nbsp;&nbsp; we don't look at the validation set too many times&nbsp; before running the test set. But again, that's&nbsp;&nbsp; manual pressure rather than automated pressure. So some solution where we have some dynamic&nbsp;&nbsp;

between the training and test set where we're&nbsp; trying things out and we really figure out if they&nbsp;&nbsp; work via a way of testing them, that the model&nbsp; isn't optimizing against, some orthogonal way.&nbsp; I think we're never going to have a guarantee, but&nbsp;

some process where we do those things together.&nbsp;&nbsp; Some way to put extended training for alignment&nbsp; ability with extended testing for alignment&nbsp;&nbsp; ability together in a way that actually works.&nbsp; And not in a stupid way, there's lots of stupid&nbsp;&nbsp;

ways to do this where you fool yourself. I still don't feel like I understand the&nbsp;&nbsp; intuition for why you think this is likely&nbsp; to work or this is promising to pursue. Let&nbsp;&nbsp; me ask the question in a more specific&nbsp;

way, and excuse the tortured analogy.&nbsp; If you're an economist and you want to&nbsp; understand the economy, you send a whole&nbsp;&nbsp; bunch of microeconomists out there. One of them&nbsp; studies how the restaurant business works. One of&nbsp;&nbsp;

them studies how the tourism business works, one&nbsp; of them studies how the baking business works.&nbsp;&nbsp; And at the end, they all come together and&nbsp; you still don't know whether there's going&nbsp;&nbsp; to be a recession in five years or not.

Why is this not like that? Where you&nbsp;&nbsp; have an understanding of how induction&nbsp; heads work in a two layer transformer,&nbsp;&nbsp; we understand modular arithmetic. How does&nbsp; this add up to — Does this model want to kill&nbsp;&nbsp;

us? What does this model fundamentally want? A few things on that. That's the right set of&nbsp;&nbsp; questions to ask. I think what we're hoping for in&nbsp; the end is not that we'll understand every detail,&nbsp;&nbsp; but again, I would give the X-ray or the MRI&nbsp;

analogy. We can be in a position where we can&nbsp;&nbsp; look at the broad features of the model and say,&nbsp; is this a model whose internal state and plans&nbsp;&nbsp; are very different from what it externally&nbsp; represents itself to do? Is this a model&nbsp;&nbsp;

where we're uncomfortable that far too much of its&nbsp; computational power is devoted to doing what look&nbsp;&nbsp; like fairly destructive and manipulative things? We don't know for sure whether that's possible,&nbsp;&nbsp; but at least some positive signs&nbsp;

that it might be possible. Again,&nbsp;&nbsp; the model is not intentionally hiding from you, it&nbsp; might turn out that the training process hides it&nbsp;&nbsp; from you. I can think of cases where if the model&nbsp; is really super intelligent, it thinks in a way&nbsp;&nbsp;

so that it affects its own cognition. We should&nbsp; think about that, we should consider everything.&nbsp;&nbsp; I suspect that it may roughly work to think of&nbsp; the model as if it's trained in the normal way,&nbsp;&nbsp; just getting to above human level. It may be a&nbsp;

reasonable assumption, you should check, that&nbsp;&nbsp; the internal structure of the model is&nbsp; not intentionally optimizing against us.&nbsp; I'd give an analogy to humans. It's actually&nbsp; possible to look at an MRI of someone&nbsp;&nbsp;

and predict above random chance whether they're a&nbsp; psychopath. There was actually a story a few years&nbsp;&nbsp; back about a neuroscientist who was studying&nbsp; this, and then he looked at his own scan and&nbsp;&nbsp; discovered that he was a psychopath and then&nbsp;

everyone in his life was like — No, this is&nbsp;&nbsp; obvious. You're a complete asshole. You must be&nbsp; a psychopath. And he was totally unaware of this.&nbsp; The basic idea that there can be these&nbsp; macro features, psychopath is probably&nbsp;&nbsp;

a good analogy for it, this is what we would be&nbsp; afraid of, a model that's charming on the surface,&nbsp;&nbsp; very goal oriented, and very dark&nbsp; on the inside. On the surface,&nbsp;&nbsp; their behavior might look like the behavior of&nbsp;

someone else, but their goals are very different.&nbsp; A question somebody might have is, you're&nbsp; trying to empirically estimate if these&nbsp;&nbsp; activations are suspicious but is this something&nbsp; we can afford to be empirical about? Or do we need&nbsp;&nbsp;

a very good first principal theoretical reason&nbsp; to think — No, it's not just that these MRIs of&nbsp;&nbsp; the model correlate with being bad. We need just&nbsp; some deep rooted math proof that this is aligned.&nbsp; It depends what you mean by empirical. A better&nbsp;

term would be phenomenological. I don't think&nbsp;&nbsp; we should be purely phenomenological in like,&nbsp; here are some brain scans of really dangerous&nbsp;&nbsp; models and here are some other brain scans. The&nbsp; whole idea of mechanistic interpretability is to&nbsp;&nbsp;

look at the underlying principles and circuits. But I guess the way I'd think about it is like,&nbsp;&nbsp; on one hand, I've actually always been a fan&nbsp; of studying these circuits at the lowest level&nbsp;&nbsp; of detail that we possibly can. And the reason for&nbsp;

that is that's kind of how you build up knowledge.&nbsp;&nbsp; Even if you're ultimately aiming for there's too&nbsp; many of these features, it's too complicated.&nbsp;&nbsp; At the end of the day, we're trying to build&nbsp; something broad and we're trying to build some&nbsp;&nbsp;

broad understanding. I think the way you build&nbsp; that up is by trying to make a lot of these very&nbsp;&nbsp; specific discoveries. You have to understand the&nbsp; building blocks and then you have to figure out&nbsp;&nbsp; how to use that to draw these broad conclusions&nbsp;

even if you're not going to figure out everything.&nbsp; You should probably talk to Chris Olah, who&nbsp; would have much more detail. He controls the&nbsp;&nbsp; interpretability agenda. He's the one who&nbsp; decides what to do on interpretability.&nbsp;&nbsp;

This is my high level thinking about it,&nbsp; which is not going to be as good as his.&nbsp; Does the bull case on Anthropic rely on the&nbsp; fact that mechanistic interpretability is&nbsp;&nbsp; helpful for capabilities?

I don't think so at all.&nbsp;&nbsp; I think in principle it's possible that&nbsp; mechanistic interpretability could be helpful&nbsp;&nbsp; with capabilities. We might, for various reasons,&nbsp; not choose to talk about it if that were the case.&nbsp;

That wasn't something that I or any of&nbsp; us thought of at the time of Anthropic’s&nbsp;&nbsp; founding. We thought of ourselves as people who&nbsp; are good at scaling models and good at doing&nbsp;&nbsp; safety on top of those models. We think that we&nbsp;

have a very high talent density of folks who are&nbsp;&nbsp; good at that. My view has always been talent&nbsp; density beats talent mass. That's more of our&nbsp;&nbsp; bullcase. Talent density beats talent mass. I don't think it depends on some particular&nbsp;&nbsp;

thing. Others are starting to do&nbsp; mechanistic interpretability now,&nbsp;&nbsp; and I'm very glad that they are. A part&nbsp; of our theory of change is paradoxically&nbsp;&nbsp; to make other organizations more like us.

I'm sure talent density is important but&nbsp;&nbsp; another thing Anthropic has emphasized&nbsp; is that you need to have frontier models&nbsp;&nbsp; in order to do safety research. And of&nbsp; course, actually be a company as well.&nbsp;

Somebody might guess that the current frontier&nbsp; models, GPT-4, Claude 2 cost one hundred&nbsp;&nbsp; million dollars or something like that… That general order of magnitude in&nbsp;&nbsp; very broad terms is not wrong.

But two to three years from now,&nbsp;&nbsp; the kinds of things you're talking about, we're&nbsp; talking more and more orders of magnitude to&nbsp;&nbsp; keep up with that. If it's the case that&nbsp; safety requires us to be on the frontier,&nbsp;&nbsp;

what is a case in which Anthropic is competing&nbsp; with these leviathans to stay on that same scale?&nbsp; It's a situation with a lot&nbsp; of trade offs. It's not easy.&nbsp;&nbsp; Maybe I'll just answer the questions one by one.

To go back to why is safety so tied to scale?&nbsp;&nbsp; Some people don't think it is. But if I just&nbsp; look at what have been the areas where safety&nbsp;&nbsp; methods have been put into practice&nbsp; or worked for something, for anything,&nbsp;&nbsp;

even if we don't think they'll work in general. I go back to thinking of all the ideas,&nbsp;&nbsp; something like debate and amplification. Back in&nbsp; 2018 when we wrote papers about those at OpenAI,&nbsp;&nbsp; it was like, human feedback isn't quite going to&nbsp;

work, but debate and amplification will take us&nbsp;&nbsp; beyond that. But then if you actually look at the&nbsp; attempts to do debates, we're really limited by&nbsp;&nbsp; the quality of the model. For two models to have&nbsp; a debate that is coherent enough that a human can&nbsp;&nbsp;

judge it so that the training process can actually&nbsp; work, you need models that are at or maybe even&nbsp;&nbsp; beyond on some topics the current frontier.&nbsp; You can come up with the method, you can come&nbsp;&nbsp; up with the idea without being on the frontier&nbsp;

but for me, that's a very small fraction of what&nbsp;&nbsp; needs to be done. It's very easy to come up with&nbsp; these methods. It's very easy to come up with,&nbsp;&nbsp; oh, the problem is X, maybe a solution is Y. I really want to know whether things work in&nbsp;&nbsp;

practice, even for the systems we have&nbsp; today, and I want to know what kinds of&nbsp;&nbsp; things go wrong with them. I just feel like&nbsp; you discover ten new ideas and ten new ways&nbsp;&nbsp; that things are going to go wrong by trying these&nbsp;

in practice. I think that empirical learning is&nbsp;&nbsp; just not as widely understood as it should be. I would say the same thing about methods like&nbsp;&nbsp; constitutional AI, and some people say, oh, it&nbsp; doesn't matter. We know this method doesn't work,&nbsp;&nbsp;

it won't work for pure alignment. I neither agree&nbsp; nor disagree with that. I think that's just kind&nbsp;&nbsp; of overconfident. The way we discover new things&nbsp; and understand the structure of what's going to&nbsp;&nbsp; work and what's not is by playing around with&nbsp;

things. Not that we should just blindly say,&nbsp;&nbsp; oh, this worked here, and so it'll work there.&nbsp; But you really start to understand the patterns,&nbsp;&nbsp; like with the scaling laws. Even mechanistic interpretability,&nbsp;&nbsp;

which might be the one area I see where a lot&nbsp; of progress has been made without the frontier&nbsp;&nbsp; models, we're seeing in the work that OpenAI&nbsp; put out a couple months ago, that using very&nbsp;&nbsp; powerful models to help you auto interpret the&nbsp;

weak models. Again, that's not everything you&nbsp;&nbsp; can do in interpretability, but that's a big&nbsp; component of it and we found it useful too.&nbsp; So you see this phenomenon over and over again&nbsp; where the scaling and the safety are these two&nbsp;&nbsp;

snakes that are coiled with each other,&nbsp; always even more than you think. Even with&nbsp;&nbsp; interpretability, three years ago, I didn't think&nbsp; that this would be as true of interpretability,&nbsp;&nbsp; but somehow it manages to be true. Why? Because&nbsp;

intelligence is useful. It's useful for a number&nbsp;&nbsp; of tasks. One of the tasks it's useful for&nbsp; is figuring out how to judge and evaluate&nbsp;&nbsp; other intelligence and maybe someday even&nbsp; for doing the alignment research itself.&nbsp;

Given all that's true, what does that imply&nbsp; for Anthropic when in two to three years,&nbsp;&nbsp; these leviathans are doing&nbsp; like $10 billion training runs?&nbsp; Choice one is if we can't, or if it costs too&nbsp;

much to stay on the frontier, then we shouldn't&nbsp;&nbsp; do it and we won't work with the most advanced&nbsp; models, we'll see what we can get with models&nbsp;&nbsp; that are not quite as advanced. You can get some&nbsp; non zero value there but I'm skeptical that the&nbsp;&nbsp;

value is all that high or the learning can be&nbsp; fast enough to really be in favor of the task.&nbsp; The second option is you just find a way. You&nbsp; just accept the trade offs. And the trade offs are&nbsp;&nbsp; more positive than they appear because of a&nbsp;

phenomenon that I've called Race to the Top.&nbsp;&nbsp; I could go into that later, but&nbsp; let me put that aside for now.&nbsp; And the third phenomenon is that as things get to&nbsp; that scale, it may coincide with starting to get&nbsp;&nbsp;

into some non trivial probability of very serious&nbsp; danger. I think it's going to come first from&nbsp;&nbsp; misuse, the biorisk stuff that I talked about. I&nbsp; don't think we have the level of autonomy yet to&nbsp;&nbsp; worry about some of the alignment stuff happening&nbsp;

in two years, but it might not be very far behind&nbsp;&nbsp; that at all. That may lead to unilateral or&nbsp; multilateral or government enforced decisions not&nbsp;&nbsp; to scale as fast as we could, which we support.&nbsp; That may end up being the right thing to do.&nbsp;&nbsp;

I hope things go in that direction, and then we&nbsp; don't have this hard trade off between we're not&nbsp;&nbsp; in the frontier and can't quite do the research&nbsp; as well as we want or influence other orgs as well&nbsp;&nbsp; as we want, or versus we're on the frontier&nbsp;

and have to accept the trade-offs which are&nbsp;&nbsp; net positive, but have a lot in both directions. On the misuse versus misalignment, those are both&nbsp;&nbsp; problems as you mentioned but in the long scheme&nbsp; of things, say 30 years down the line, which do&nbsp;&nbsp;

you think will be considered a bigger problem? I think it's going to be much less than 30 years.&nbsp;&nbsp; I'm worried about both. If you have a model that&nbsp; could in theory, take over the world on its own,&nbsp;&nbsp; if you were able to control that model, then&nbsp;

it follows pretty simply that if a model was&nbsp;&nbsp; following the wishes of some small subset&nbsp; of people and not others, then those people&nbsp;&nbsp; could use it to take over the world on their&nbsp; behalf. The very premise of misalignment means&nbsp;&nbsp;

that we should be worried about misuse as&nbsp; well, with similar levels of consequences.&nbsp; But some people who might be more doomery than&nbsp; you would say — you're already working towards&nbsp;&nbsp; the optimistic scenario there because you've at&nbsp;

least figured out how to align the model with&nbsp;&nbsp; the bad guys. Now you just need to make sure&nbsp; that it's aligned with the good guys instead.&nbsp; Why do you think that you could get to&nbsp; the point where it's aligned with the&nbsp;&nbsp;

bad guys? You haven't already solved this. I guess if you had the view that alignment&nbsp;&nbsp; is completely unsolvable, then you'd be like,&nbsp; well, we're dead anyway so I don't want to worry&nbsp;&nbsp; about misuse. That's not my position at all.

But also you should think in terms of what's&nbsp;&nbsp; a plan that would actually succeed&nbsp; that would make things good. Any plan&nbsp;&nbsp; that actually succeeds, regardless of how&nbsp; hard misalignment is to solve, is going to&nbsp;&nbsp;

need to solve misuse as well as misalignment. As the AI models get better faster and faster,&nbsp;&nbsp; they're going to create a big problem around the&nbsp; balance of power between countries. They're going&nbsp;&nbsp; to create a big problem around, is it possible&nbsp;

for a single individual to do something bad&nbsp;&nbsp; that it's hard for everyone else to stop? Any&nbsp; actual solution that leads to a good future&nbsp;&nbsp; needs to solve those problems as well. If your&nbsp; perspective is, we're screwed because we can't&nbsp;&nbsp;

solve the first problem, so don't worry about&nbsp; problems two and three, that's not really a&nbsp;&nbsp; statement. You should worry about problems two&nbsp; and three. They're in our path no matter what.&nbsp; Yeah. In the scenario we succeed&nbsp;

we have to solve all of them.&nbsp; We should be planning for success not for failure. If misuse doesn't happen and the right people&nbsp;&nbsp; have the superhuman models, what does that look&nbsp; like? Who are the right people? Who is actually&nbsp;&nbsp;

controlling the model five years from now? My view is that these things are powerful enough&nbsp;&nbsp; that I think it's going to involve substantial&nbsp; involvement of some kind of government or assembly&nbsp;&nbsp; of government bodies. There are very naive&nbsp;

versions of this. I don't think we should just&nbsp;&nbsp; hand the model over to the UN or whoever happens&nbsp; to be in office at a given time. I could see that&nbsp;&nbsp; going poorly. But it's too powerful. There&nbsp; needs to be some kind of legitimate process&nbsp;&nbsp;

for managing this technology, which includes&nbsp; the role of the people building it, includes&nbsp;&nbsp; the role of democratically elected authorities,&nbsp; includes the role of all the individuals who will&nbsp;&nbsp; be affected by it. At the end of the day, there&nbsp;

needs to be some politically legitimate process.&nbsp; But what does that look like? If it's not the case&nbsp; that you just hand it to whoever the President is&nbsp;&nbsp; at the time, what does the body look like? It's really hard to know these things ahead&nbsp;&nbsp;

of time. People love to propose these broad plans&nbsp; and say, oh, this is the way we should do it. The&nbsp;&nbsp; honest fact is that we're figuring this out&nbsp; as we go along. I think we should try things&nbsp;&nbsp; and experiment with them with less powerful&nbsp;

versions of the technology. We need to figure&nbsp;&nbsp; this out in time. But also it's not really&nbsp; the kind of thing you can know in advance.&nbsp; The long term benefit trust that&nbsp; you have. How would that interface&nbsp;&nbsp;

with this body? Is that the body itself? I think that the long term benefit trust&nbsp;&nbsp; is a much narrower thing. This is something&nbsp; that makes decisions for Anthropic. This is&nbsp;&nbsp; basically a body. It was described in a recent&nbsp;

Vox article. We'll be saying more about it later&nbsp;&nbsp; this year. But it's basically a body that&nbsp; over time gains the ability to appoint the&nbsp;&nbsp; majority of the board seats of Anthropic.&nbsp; It's a mixture of experts in AI alignment,&nbsp;&nbsp;

national security, and philanthropy in general. If Anthropic has AGI and if control of Anthropic&nbsp;&nbsp; is handed to them, doesn't that imply that&nbsp; control of AGI itself is handed to them?&nbsp; That doesn't imply that Anthropic or any other&nbsp;

entity should be the entity that makes decisions&nbsp;&nbsp; about AGI on behalf of humanity. I would think&nbsp; of those as different things. If Anthropic does&nbsp;&nbsp; play a broad role, then you'd want to widen&nbsp; that body to a whole bunch of different people&nbsp;&nbsp;

from around the world. Or maybe you construe&nbsp; this as very narrow, and then there's some&nbsp;&nbsp; broad committee somewhere that manages all the&nbsp; AGIs of all the companies on behalf of anyone.&nbsp; I don't know. I think my view is you shouldn't&nbsp;

be overly constructive and utopian. We're dealing&nbsp;&nbsp; with a new problem here. We need to start&nbsp; thinking now about what are the governmental&nbsp;&nbsp; bodies and structures that could deal with it. Okay, so let's forget about governance. Let's&nbsp;&nbsp;

just talk about what this going well looks like. Obviously, there are things we can all agree on:&nbsp;&nbsp; cure all the diseases, solve all the fraud –&nbsp; things all humans would say, 'I'm down for that.'&nbsp;&nbsp; But now it's 2030. You've solved all the real&nbsp;

problems that everybody can agree on. What happens&nbsp;&nbsp; next? What are we doing with a superhuman God? I actually want to disagree with the framing of&nbsp;&nbsp; something like this. I get nervous when someone&nbsp; says, what are you going to do with a superhuman&nbsp;&nbsp;

AI? We've learned a lot of things over the last&nbsp; 150 years about markets and democracy, and each&nbsp;&nbsp; person can define for themselves what the best&nbsp; way for them to have the human experience is, and&nbsp;&nbsp; that societies work out norms and what they value&nbsp;

just in this very complex and decentralized way.&nbsp; If you have these safety problems that&nbsp; can be a reason why there needs to be a&nbsp;&nbsp; certain amount of centralized control from the&nbsp; government until we've solved these problems.&nbsp;

But as a matter of — we've solved all the&nbsp; problems, now how do we make things good?&nbsp;&nbsp; I think most people, most groups,&nbsp; most ideologies that started with,&nbsp;&nbsp; let's sit down and think over what the definition&nbsp;

of the good life is, have led to disaster.&nbsp; But this vision you have of a sort&nbsp; of tolerant, liberal, democracy,&nbsp;&nbsp; market oriented system with AGI. Each person&nbsp; has their own AGI? What does that mean?&nbsp;

I don't know. I don't know what it looks like.&nbsp; I guess what I'm saying is we need to solve&nbsp;&nbsp; the important safety problems and the important&nbsp; externalities. Those could be just narrowly about&nbsp;&nbsp; alignment, there could be a bunch of economic&nbsp;

issues that are super complicated and that we&nbsp;&nbsp; can't solve. Subject to that, we should think&nbsp; about what's worked in the past. And in general,&nbsp;&nbsp; unitary visions for what it means to live a&nbsp; good life have not worked out well at all.&nbsp;

On the opposite end of things going well&nbsp; or good actors having control of AI.&nbsp;&nbsp; We might want to touch on China&nbsp; as a potential actor in the space.&nbsp; First of all, being at Baidu and seeing&nbsp;

progress in AI happening generally,&nbsp;&nbsp; why do you think the Chinese have underperformed?&nbsp; Baidu had a scaling laws group many years back.&nbsp;&nbsp; Or is the premise wrong and I'm just not&nbsp; aware of the progress that's happening there?&nbsp;

The scaling laws group, that was an&nbsp; offshoot of the stuff we did with speech&nbsp;&nbsp; so there were still some people there but that was&nbsp; a mostly Americanized lab. I was there for a year.&nbsp;&nbsp; That was my first foray into deep learning.&nbsp;

It was led by Andrew Ng. I never went to&nbsp;&nbsp; China. It was like a US lab. That was somewhat&nbsp; disconnected, although it was an attempt by a&nbsp;&nbsp; Chinese entity to kind of get into the game. Since then I think they've maybe been very&nbsp;&nbsp;

commercially focused and not as focused on these&nbsp; fundamental research side of things around scaling&nbsp;&nbsp; laws. I do think because of all the excitement&nbsp; with the release of ChatGPT in November or so,&nbsp;&nbsp; that's been a starting gun for them as well. And&nbsp;

they're trying very aggressively to catch up now.&nbsp; I think the US is substantially ahead but&nbsp; they're trying very hard to catch up now.&nbsp; How do you think China thinks about AGI? Are&nbsp; they thinking about safety and misuse or not?&nbsp;

I don't really have a sense. One concern I&nbsp; would have are people saying things like,&nbsp;&nbsp; China isn't going to develop an AI because they&nbsp; like stability or they're going to have all these&nbsp;&nbsp; restrictions to make sure things are in line&nbsp;

with what the CCP wants. That might be true&nbsp;&nbsp; in the short term and for consumer products. My&nbsp; worry is that if the basic incentives are about&nbsp;&nbsp; national security and power, that's going to&nbsp; become clear sooner or later. If they see this&nbsp;&nbsp;

as a source of national power, they're going&nbsp; to at least try to do what's most effective,&nbsp;&nbsp; and that could lead them in the direction of AGI. Assume they just get your blueprints or your code&nbsp;&nbsp; base or something, is it possible for them to&nbsp;

spin up their own lab that is competitive at&nbsp;&nbsp; the frontier with the leading American companies? I don't know about fast but I'm concerned about&nbsp;&nbsp; this. This is one reason why we're focusing so&nbsp; hard on cybersecurity. We've worked with our&nbsp;&nbsp;

cloud providers. We had this blog post out about&nbsp; security where we said we have a two key system&nbsp;&nbsp; for access to the model weights. We have other&nbsp; measures that we put in place or are thinking&nbsp;&nbsp; of putting in place that we haven't announced.&nbsp;

We don't want an adversary to know about them,&nbsp;&nbsp; but we're happy to talk about them broadly. By the way all this stuff we're doing&nbsp;&nbsp; is not sufficient yet for a super&nbsp; determined state level actor at all.&nbsp;&nbsp;

I think it will defend against most attacks and&nbsp; against a state level actor who's less determined.&nbsp;&nbsp; But there's a lot more we need to do, and some of&nbsp; it may require new research on how to do security.&nbsp; Let's talk about what it would take at that&nbsp;

point. We're at Anthropic offices and it's&nbsp;&nbsp; got good security. We had to get badges and&nbsp; everything to come in here. But what does the&nbsp;&nbsp; eventual version of this building or bunker or&nbsp; whatever where the AGI is built look like? Is it&nbsp;&nbsp;

a building in the middle of San Francisco or are&nbsp; you out in the middle of Nevada or Arizona? What&nbsp;&nbsp; is a point in which you're Los Alamos-ing it? At one point there was a running joke somewhere&nbsp;&nbsp; that the way building AGI would look like is,&nbsp;

there would be a data center next to a nuclear&nbsp;&nbsp; power plant next to a bunker, and that we'd all&nbsp; kind of live in the bunker and everything would&nbsp;&nbsp; be local so it wouldn't get on the Internet. If we take the rate at which all this is going&nbsp;&nbsp;

to happen seriously, which I can't be&nbsp; sure of, then it does make me think&nbsp;&nbsp; that something like that might happen, but&nbsp; maybe not something quite as cartoonish.&nbsp; What is the timescale on which you think alignment&nbsp;

is solvable? If these models are getting to human&nbsp;&nbsp; level in some things in two to three years,&nbsp; what is the point at which they're aligned?&nbsp; This is a really difficult question because I&nbsp; actually think often people are thinking about&nbsp;&nbsp;

alignment in the wrong way. There's a general&nbsp; feeling that it's like models are misaligned&nbsp;&nbsp; or there's like an alignment problem to solve.&nbsp; Like, someday we'll crack the Riemann hypothesis.&nbsp;&nbsp; I don't quite think it's like that. Not in a&nbsp;

way that's worse or better. It might be just&nbsp;&nbsp; as bad or just as unpredictable. When I think of why am I scared,&nbsp;&nbsp; there’s a few things I think of — One is, the&nbsp; thing that's really hard to argue with is: There&nbsp;&nbsp;

will be powerful models. They will be agentic.&nbsp; We're getting towards them. If such a model&nbsp;&nbsp; wanted to wreak havoc and destroy humanity or&nbsp; whatever, we have basically no ability to stop it.&nbsp;&nbsp; If that's not true, at some point we will reach&nbsp;

the point where it's true as we scale the models.&nbsp;&nbsp; So that definitely seems to be the case. A second thing that seems to be the case is&nbsp;&nbsp; that we seem to be bad at controlling the models.&nbsp; Not in any particular way, but they’re just&nbsp;&nbsp;

statistical systems and you can ask them a&nbsp; million things and they can say a million things&nbsp;&nbsp; and reply. And you might not have thought of a&nbsp; millionth and one thing that does something crazy.&nbsp;&nbsp; Or when you train them, you train them in this&nbsp;

very abstract way and you might not understand&nbsp;&nbsp; all the consequences of what they do in response&nbsp; to that. The best example we've seen of that is&nbsp;&nbsp; Bing and Sydney. I don't know how they trained&nbsp; that model. I don't know what they did to make it&nbsp;&nbsp;

do all this weird stuff like threaten people and&nbsp; have this weird obsessive personality. But what it&nbsp;&nbsp; shows is that we can get something very different&nbsp; from and maybe opposite to what we intended.&nbsp; I actually think fact number one and fact&nbsp;

number two are enough to be really worried.&nbsp;&nbsp; You don't need all this detailed stuff about&nbsp; convergent instrumental goals or analogies to&nbsp;&nbsp; evolution. One and two for me are pretty&nbsp; motivated. Okay, this thing's going to be&nbsp;&nbsp;

powerful. It could destroy us. And all the ones&nbsp; we've built so far are at pretty decent risk of&nbsp;&nbsp; doing some random shit we don't understand. If you say that we're going to get something&nbsp;&nbsp; with bioweapons or something that could&nbsp;

be dangerous in two to three years,&nbsp;&nbsp; does the research agenda you have of mechanistic&nbsp; interpretability, constitutional AI and other&nbsp;&nbsp; RLHF stuff meaningfully contribute to&nbsp; preventing that in two to three years?&nbsp;

People talk about doom by default or alignment by&nbsp; default. I think it might be kind of statistical.&nbsp;&nbsp; With the current models, you might get&nbsp; Bing or Sydney or you might get Claude.&nbsp;&nbsp; If we take our current understanding and move&nbsp;

that to very powerful models, you might just&nbsp;&nbsp; be in this world where you make something and&nbsp; depending on the details, maybe it's totally fine.&nbsp;&nbsp; Not really alignment by default, but just&nbsp; depends on a lot of the details. If you're&nbsp;&nbsp;

very careful about all those details and&nbsp; you know what you're doing, you're getting&nbsp;&nbsp; it right but we have a high susceptibility to,&nbsp; you mess something up in a way that you didn't&nbsp;&nbsp; really understand was connected to something else.&nbsp;

Actually, instead of making all the humans happy,&nbsp;&nbsp; it wants to turn them into pumpkins, just some&nbsp; weird shit. Because the models are so powerful,&nbsp;&nbsp; they're like these giants that are standing in&nbsp; a landscape and if they start to move their arms&nbsp;&nbsp;

around randomly, they could just break everything. I'm starting it with that kind of framing because&nbsp;&nbsp; I don't think we're aligned by default,&nbsp; I don't think we're doomed by default&nbsp;&nbsp; and have some problem we need to solve.&nbsp;

It has some kind of different character.&nbsp; Now what I do think is that hopefully within a&nbsp; timescale of two to three years we get better at&nbsp;&nbsp; diagnosing when the models are good and when&nbsp; they're bad. We get better at increasing our&nbsp;&nbsp;

repertoire of methods to train the model that&nbsp; they're less likely to do bad things and more&nbsp;&nbsp; likely to do good things in a way that isn't just&nbsp; relevant to the current models but scales. And we&nbsp;&nbsp; can help develop that with interpretability&nbsp;

as the test set. I don't think of it as,&nbsp;&nbsp; oh, man, we tried RLHF, it didn't work. We tried&nbsp; Constitutional AI, it didn't work. We tried this&nbsp;&nbsp; other thing, it didn't work. We tried mechanistic&nbsp; interpretability. Now we're going to try something&nbsp;&nbsp;

else. I think this frame of like, man, we&nbsp; haven't cracked the problem yet, we haven't&nbsp;&nbsp; solved the Riemann hypothesis isn't quite right. Already with today's systems, we are not very&nbsp;&nbsp; good at controlling them and the consequences&nbsp;

of that could be very bad. We just need to get&nbsp;&nbsp; more ways of increasing the likelihood that&nbsp; we can control our models and understand&nbsp;&nbsp; what's going on in them. And we have some&nbsp; of them so far. They aren't that good yet.&nbsp;&nbsp;

But I don't think of this as binary. It works or&nbsp; it does not work. We're going to develop more. And&nbsp;&nbsp; I do think that over the next two to three years&nbsp; we're going to start eating that probability mass&nbsp;&nbsp; of ways things can go wrong. It's like in the&nbsp;

core safety views paper, there's a probability&nbsp;&nbsp; mass of how hard the problem is. I feel like that way of stating it&nbsp;&nbsp; isn't really even quite right because I don't feel&nbsp; like it's the Riemann hypothesis to solve. It's&nbsp;&nbsp;

almost like right now if I try and juggle five&nbsp; balls or something, I can juggle three balls,&nbsp;&nbsp; I actually can, but I can't juggle five balls&nbsp; at all. You have to practice a lot to do that.&nbsp;&nbsp; If I were to do that, I would almost certainly&nbsp;

drop them. And then just over time, you just get&nbsp;&nbsp; better at the task of controlling the balls. On that post in particular, what is your&nbsp;&nbsp; personal probability distribution? For the&nbsp; audience, the three possibilities are: One, it is&nbsp;&nbsp;

trivial to align these models with RLHF++. Two, it&nbsp; is a difficult problem, but one that a big company&nbsp;&nbsp; could solve. Three, something that is basically&nbsp; impossible for human civilization currently to&nbsp;&nbsp; solve. If I'm capturing those three, What is&nbsp;

your probability distribution over those three?&nbsp; I'm not super into questions like what's your&nbsp; probability distribution of X? I think all of&nbsp;&nbsp; those have enough likelihood that they should&nbsp; be considered seriously. The question I'm much&nbsp;&nbsp;

more interested in is, what could we learn&nbsp; that shifts probability mass between them?&nbsp; What is the answer to that? I think that one of the things&nbsp;&nbsp; mechanistic interpretability is going to&nbsp;

do more than necessarily solve problems is,&nbsp;&nbsp; it's going to tell us what's going on when we&nbsp; try to align models. It's basically going to&nbsp;&nbsp; teach us about this. One way I could imagine&nbsp; concluding that things are very difficult is&nbsp;&nbsp;

if mechanistic interpretability sort of shows us&nbsp; that problems tend to get moved around instead of&nbsp;&nbsp; being stamped out or that, you get rid of one&nbsp; problem, you create another one. Or it might&nbsp;&nbsp; inspire us or give us insight into why problems&nbsp;

are persistent or hard to eradicate or crop up.&nbsp; For me to really believe some of these stories&nbsp; about, oh, there's always this convergent goal&nbsp;&nbsp; in this particular direction. I think the&nbsp; abstract story is not uncompelling, but I&nbsp;&nbsp;

don't find it really compelling either, nor do I&nbsp; find it necessary to motivate all the safety work.&nbsp; But the kind of thing that would really be&nbsp; like, oh man, we can't solve this is like,&nbsp;&nbsp; we see it happening inside the X-ray. I think&nbsp;

right now there's way too many assumptions,&nbsp;&nbsp; there's way too much overconfidence about how&nbsp; all this is going to go. I have a substantial&nbsp;&nbsp; probability mass on — this all goes wrong, it's a&nbsp; complete disaster, but in a completely different&nbsp;&nbsp;

way than anyone had anticipated it would. It would be beside the point to ask how&nbsp;&nbsp; it could go different than anyone anticipated. On this, in particular, what information would&nbsp;&nbsp; be relevant? How much would the difficulty of&nbsp;

aligning Claude 3 and the next generation of&nbsp;&nbsp; models be? Is that a big piece of information? I think the people who are most worried are&nbsp;&nbsp; predicting that all the subhuman AI models are&nbsp; going to be alignable, They're going to seem&nbsp;&nbsp;

aligned. They're going to deceive us in some&nbsp; way. It certainly gives us some information&nbsp;&nbsp; but I am more interested in what mechanistic&nbsp; interpretability can tell us because, again,&nbsp;&nbsp; you see this X ray, it would be too strong to&nbsp;

say it doesn't lie, but at least in the current&nbsp;&nbsp; systems, it doesn't feel like it's optimizing&nbsp; against us. There are exotic ways that it could.&nbsp;&nbsp; I don't think anything is a safe bet here, but&nbsp; it's the closest we're going to get to something&nbsp;&nbsp;

that isn't actively optimizing against us. Let's talk about the specific methods other&nbsp;&nbsp; than mechanistic interpretability that you&nbsp; guys are researching. When we talk about&nbsp;&nbsp; RLHF or Constitution AI, if you had to&nbsp;

put it in terms of human psychology,&nbsp;&nbsp; what is the change that is happening? Are we&nbsp; creating new drives, new goals, new thoughts?&nbsp;&nbsp; How is the model changing in terms of psychology? All those terms are inadequate for describing&nbsp;&nbsp;

what's happening. It's not clear how useful&nbsp; they are as abstractions for humans either.&nbsp;&nbsp; I think we don't have the language to describe&nbsp; what's going on. And again, I'd love to have the&nbsp;&nbsp; X-ray. I'd love to look inside and say and kind of&nbsp;

actually know what we're talking about instead of&nbsp;&nbsp; basically making up words, which is what I&nbsp; do what you're doing in asking this question.&nbsp;&nbsp; We should just be honest. We really have very&nbsp; little idea what we're talking about. It would&nbsp;&nbsp;

be great to say, well, what we actually mean&nbsp; by that is this circuit within here turns on,&nbsp;&nbsp; and after we've trained the model, then this&nbsp; circuit is no longer operative or weaker.&nbsp;&nbsp; It's going to take a lot of&nbsp;

work to be able to do that.&nbsp; Model organisms, which you hinted at before when&nbsp; you said we're doing these evaluations to see if&nbsp;&nbsp; they're capable of doing dangerous things now&nbsp; and currently not, how worried are you about a&nbsp;&nbsp;

lab leak scenario? Where in fine tuning it or in&nbsp; trying to get these models to elicit dangerous&nbsp;&nbsp; behaviors, make bioweapons or something, you&nbsp; leak somehow and it actually makes the bioweapons&nbsp;&nbsp; instead of telling you it can make the bioweapons.

It's not that much of a concern with today's&nbsp;&nbsp; passive models. If we were to fine tune a&nbsp; model, we would do it privately and we work&nbsp;&nbsp; with the experts and so the leak would be like,&nbsp; suppose the model got open sourced or something.&nbsp;&nbsp;

For now, it's mostly a security issue. In terms of models truly being dangerous,&nbsp;&nbsp; we do have to worry that if we make a truly&nbsp; powerful model and we're trying to see what&nbsp;&nbsp; makes it dangerous or safe, then there could&nbsp;

be more of a one shot thing where there’s some&nbsp;&nbsp; risk that the model takes over. The main&nbsp; way to control that is to make sure that&nbsp;&nbsp; the capabilities of the model that we test are&nbsp; not such that they're capable of doing this.&nbsp;

At what point would the capabilities be so high&nbsp; where you say, I don't even want to test this?&nbsp; Well, there's different things.&nbsp; There's capability testing..&nbsp; But that itself could lead to... If you're&nbsp;

testing replicate, what if it actually does?&nbsp; Sure. But I think what you want to do is you want&nbsp; to extrapolate. We've talked with Arc about this.&nbsp;&nbsp; You have factors of two of compute, where you're&nbsp; like, can the model do something like open up an&nbsp;&nbsp;

account on AWS and make some money for itself?&nbsp; Some of the things that are obvious prerequisites&nbsp;&nbsp; to complete survival in the wild. Just set&nbsp; those thresholds very well below and then&nbsp;&nbsp; as you proceed upward from there, do kind of&nbsp;

more and more rigorous tests and be more and&nbsp;&nbsp; more careful about what it is you're doing. On Constitution AI, who decides what the&nbsp;&nbsp; constitution for the next generation of&nbsp; models or a potentially superhuman model&nbsp;&nbsp;

is? How is that actually written? Initially to make the constitution,&nbsp;&nbsp; we just took some stuff that was broadly agreed&nbsp; on, like the UN declaration on Human Rights and&nbsp;&nbsp; some of the stuff from Apple's Terms of Service.&nbsp;

Stuff that's consensus on what's acceptable to&nbsp;&nbsp; say or what basic things are able to be included. One, for future constitutions, we're looking into&nbsp;&nbsp; more participatory processes for making these.&nbsp; But beyond that, I don't think there should&nbsp;&nbsp;

be one constitution for a model that everyone&nbsp; uses. The model’s constitution should be very&nbsp;&nbsp; simple. It should only have very basic facts that&nbsp; everyone would agree on. Then there should be a&nbsp;&nbsp; lot of ways that you can customize, including&nbsp;

appending constitutions. And beyond that,&nbsp;&nbsp; we're developing new methods. I'm not imagining&nbsp; that this or this alone is the method that&nbsp;&nbsp; we'll use to train superhuman AI. Many of the&nbsp; parts of capability training may be different,&nbsp;&nbsp;

and so it could look very different. There are levels above this. I'm pretty&nbsp;&nbsp; uncomfortable with: here's the AI's constitution,&nbsp; it's going to run the world. From just normal&nbsp;&nbsp; lessons from how societies work and how&nbsp;

politics works, that strikes me as fanciful.&nbsp; Even after we've mitigated the safety issues,&nbsp; any good future, even if it has all these&nbsp;&nbsp; security issues that we need to solve, it&nbsp; somehow needs to end with something that's&nbsp;&nbsp;

more decentralized and less like a godlike&nbsp; super. I just don't think that ends well.&nbsp; What scientists from the Manhattan&nbsp; Project do you respect most in terms of,&nbsp;&nbsp; they acted most ethically under the constraints&nbsp;

they were given. Is there one that comes to mind?&nbsp; I don't know. There's a lot of answers you could&nbsp; give. I'm definitely a fan of Szilard for having&nbsp;&nbsp; kind of figured it out. He was then against the&nbsp; actual dropping of the bomb. I don't actually&nbsp;&nbsp;

know the history well enough to have an opinion&nbsp; on whether the demonstration of the bomb could&nbsp;&nbsp; have ended the war. I mean that involves a bunch&nbsp; of facts about Imperial Japan that are complicated&nbsp;&nbsp; and that I'm not an expert on. But Szilard, he&nbsp;

discovered this stuff early, he kept it secret,&nbsp;&nbsp; patented some of it and put it in the hands of the&nbsp; British Admiralty. He seemed to display the right&nbsp;&nbsp; kind of awareness as well as discovering stuff. It&nbsp; was when I read that book that when I wrote this&nbsp;&nbsp;

big blob of compute doc and I only showed it to a&nbsp; few people and there were other docs that I showed&nbsp;&nbsp; to almost no one. I was a bit inspired by this. Again, we could all get self aggrandizing here.&nbsp;&nbsp; Like we don't know if it's actually going to be&nbsp;

something on par with the Manhattan project. This&nbsp;&nbsp; could all be just Silicon Valley people building&nbsp; technology and just having delusions of grandeur.&nbsp;&nbsp; I don't know how it's going to turn out. I mean, if the scaling stuff is true then&nbsp;&nbsp;

it's bigger than the Manhattan Project. Yeah, it certainly could be bigger. I think&nbsp;&nbsp; we should always maintain this attitude&nbsp; that it's really easy to fool yourself.&nbsp; If you're a physicist during World War II and&nbsp;

you were asked by the government to contribute&nbsp;&nbsp; non replaceable research to the Manhattan&nbsp; Project, what do you think you would have said?&nbsp; Given you're in a war with the Nazis, I don't&nbsp; really see much choice but to do it if it's&nbsp;&nbsp;

possible. You have to figure it's going to&nbsp; be done within ten years or so by someone.&nbsp; Regarding cybersecurity, what should&nbsp; we make of the fact that there's a&nbsp;&nbsp; whole bunch of tech companies which have&nbsp;

ordinary tech company security policy&nbsp;&nbsp; and it's not obvious that they've been hacked&nbsp; publicly. Coinbase still has its bitcoin.&nbsp;&nbsp; As far as I know my Gmail hasn't been leaked. Should we take from that that current status&nbsp;&nbsp;

quo tech company security practices&nbsp; are good enough for AGI or just&nbsp;&nbsp; simply that nobody has tried hard enough? It would be hard for me to speak to current&nbsp;&nbsp; tech company practices and of course there&nbsp;

may be many attacks that we don't know about,&nbsp;&nbsp; where things are stolen and then silently used. I&nbsp; think an indication of it is when someone really&nbsp;&nbsp; cares basically cares about attacking&nbsp; someone, then often the attacks happen.&nbsp;

Recently we saw that some fairly high officials of&nbsp; the US government had their email accounts hacked&nbsp;&nbsp; via Microsoft. Microsoft was providing the email&nbsp; accounts. Presumably that relayed information&nbsp;&nbsp; that was of great interest to foreign adversaries.

It seems to me at least that the evidence is more&nbsp;&nbsp; consistent with, when something is really high&nbsp; enough value, then someone acts and it's stolen.&nbsp;&nbsp; And my worry is that of course with AGI we'll get&nbsp; to a world where the value is seen as incredibly&nbsp;&nbsp;

high. It'll be like stealing nuclear missiles or&nbsp; something. You can't be too careful on this stuff.&nbsp; At every place that I've worked, I've pushed for&nbsp; cybersecurity to be better. One of my concerns&nbsp;&nbsp; about cybersecurity is, it's not something you can&nbsp;

trumpet. A good dynamic with safety research is,&nbsp;&nbsp; you can get companies into a dynamic and&nbsp; I think we have, where you can get them&nbsp;&nbsp; to compete to do the best safety research and&nbsp; use it as a recruiting point of competition&nbsp;&nbsp;

or something. We used to do this all the time&nbsp; with interpretability and then sooner or later&nbsp;&nbsp; other orgs started recognizing the defect&nbsp; and started working on interpretability,&nbsp;&nbsp; whether or not that was a priority to them before.

But it's harder to do that with cybersecurity&nbsp;&nbsp; because a bunch of the stuff you have to do&nbsp; quietly. We did try to put out one post about it,&nbsp;&nbsp; but mostly you just see the results. A good norm&nbsp; would be people see these cybersecurity leaks from&nbsp;&nbsp;

companies or leaks the model parameters&nbsp; or something and say they screwed up,&nbsp;&nbsp; that's bad. If I'm a safety person,&nbsp; I might not want to work there.&nbsp; Of course, as soon as I say that, we'll&nbsp;

probably have a security breach tomorrow. But&nbsp;&nbsp; that's part of the game here, that's&nbsp; part of trying to make things safe.&nbsp; I want to go back to the thing we're talking&nbsp; about earlier, where the ultimate level of&nbsp;&nbsp;

cybersecurity required two to three years from&nbsp; now and whether it requires a bunker, are you&nbsp;&nbsp; actually expecting to be in a physical bunker in&nbsp; two to three years, or is that just a metaphor?&nbsp; That’s a metaphor. We’re still figuring it out.&nbsp;

Something I would think about is the security of&nbsp;&nbsp; the data center, which may not be in the same&nbsp; physical location as us, but we've worked very&nbsp;&nbsp; hard to make sure it's in the United States. But&nbsp; securing the physical data centers and the GPUs.&nbsp;&nbsp;

If someone was really determined, some of the&nbsp; really expensive attacks just involve going into&nbsp;&nbsp; the data center and just trying to steal the&nbsp; data directly or as it's flowing from a data&nbsp;&nbsp; center to us. These data centers are going to have&nbsp;

to be built in a very special way. Given the way&nbsp;&nbsp; things are scaling up, we're anyway heading to a&nbsp; world where the networks of data centers cost as&nbsp;&nbsp; much as aircraft carriers. They're already going&nbsp; to be pretty unusual objects but in addition to&nbsp;&nbsp;

being unusual in terms of their ability to link&nbsp; together and train gigantic, gigantic models,&nbsp;&nbsp; they're also going to have to be very secure. Speaking of which, there's been rumors on the&nbsp;&nbsp; difficulty of procuring the power and the&nbsp;

GPUs for the next generation of models.&nbsp;&nbsp; What has the process been like to secure the&nbsp; necessary components to do the next generation?&nbsp; That's something I can't go into great detail&nbsp; about. I will say, people are thinking of&nbsp;&nbsp;

industrial scale data centers and people are not&nbsp; thinking at the scale that these models are going&nbsp;&nbsp; to go to very soon. Whenever you do something&nbsp; at a scale where it's never been done before,&nbsp;&nbsp; every single component, every single thing has to&nbsp;

be done in a new way than it was before. And so&nbsp;&nbsp; you may run into problems with surprisingly simple&nbsp; components. Power is one that you mentioned.&nbsp; And is this something that Anthropic has&nbsp; to handle, or can you just outsource it?&nbsp;

For data centers, we work with&nbsp; cloud providers, for instance.&nbsp; What should we make about the fact that these&nbsp; models require so much training and the entire&nbsp;&nbsp; corpus of internet data in order to be subhuman?

Whereas GPT-4, there's been estimates that it&nbsp;&nbsp; was like 10^25 Flops or something, you can&nbsp; take these numbers with a grain of salt,&nbsp;&nbsp; but there's reports that the human brain, from&nbsp; the time it is born to the time a human being&nbsp;&nbsp;

is 20 years old, is on the order of 10^14&nbsp; Flops to simulate all those interactions.&nbsp; We don't have to go into the particulars on&nbsp; those numbers, but should we be worried about&nbsp;&nbsp; how sample inefficient these models seem to be?

That's one of the remaining mysteries. One way&nbsp;&nbsp; you could phrase it is that the models are maybe&nbsp; two to three orders of magnitude smaller than the&nbsp;&nbsp; human brain. If you compare it to the number of&nbsp; synapses, while at the same time being trained&nbsp;&nbsp;

on three to four more orders of magnitude of data.&nbsp; If you compare the number of words a human sees as&nbsp;&nbsp; they're developing to age 18, I don't remember&nbsp; exactly, but I think it's in the hundreds of&nbsp;&nbsp; millions, whereas for the models, we're talking&nbsp;

about the hundreds of billions to the trillions.&nbsp;&nbsp; So what explains this? There are these offsetting&nbsp; things where the models are smaller, they need a&nbsp;&nbsp; lot more data. They're still below human level. There's some way in which&nbsp;&nbsp;

the analogy to the brain is not quite right or&nbsp; is breaking down or there's some missing factor.&nbsp;&nbsp; This is just like in physics, where we can't&nbsp; explain the Michelson-Morley experiment, or&nbsp;&nbsp; one of the other 19th century physics paradoxes.&nbsp;

It's one thing we don't quite understand. Humans&nbsp;&nbsp; see so little data, and they still do fine. One theory on it, it could be that it's like&nbsp;&nbsp; our other modalities. How do we get 10^14 bits&nbsp; into the human brain? Most of it is these images,&nbsp;&nbsp;

and maybe a lot of what's going on inside the&nbsp; human brain is, our mental workspace involves&nbsp;&nbsp; all these simulated images or something like that. But honestly, intellectually we have to admit that&nbsp;&nbsp; that's a weird thing that doesn't match up. And&nbsp;

it's one reason I'm a bit skeptical of biological&nbsp;&nbsp; analogies. I thought in terms of them, like, five&nbsp; or six years ago, but now that we actually have&nbsp;&nbsp; these models in front of us as artifacts, it&nbsp; feels like almost all the evidence from that&nbsp;&nbsp;

has been screened off by what we've seen. And&nbsp; what we've seen are models that are much smaller&nbsp;&nbsp; than the human brain and yet can do a lot of the&nbsp; things that humans can do, and yet, paradoxically,&nbsp;&nbsp; require a lot more data. Maybe we'll discover&nbsp;

something that makes it all efficient,&nbsp;&nbsp; or maybe we'll understand why the discrepancy&nbsp; is present, but at the end of the day, I don't&nbsp;&nbsp; think it matters, right? If we keep scaling the&nbsp; way we are. I think what's more relevant at this&nbsp;&nbsp;

point is just measuring the abilities of the&nbsp; model and seeing how far they are from humans,&nbsp;&nbsp; and they don't seem terribly far to me. Does this scaling picture and the big blob&nbsp;&nbsp; of compute more generally, underemphasize the&nbsp;

role that algorithmic progress has played. When&nbsp;&nbsp; you composed the big blob of compute, you're&nbsp; presumably talking about LSTMs at that point,&nbsp;&nbsp; the scaling on that would not have&nbsp; you at Claude 2 at this point.&nbsp;

Are you underemphasizing the role&nbsp; that an improvement of the scale of&nbsp;&nbsp; Transformer could be having here, when&nbsp; you put it behind the label of scaling?&nbsp; This big blob of compute document, which I&nbsp;

still have not made public, I probably should&nbsp;&nbsp; for historical reasons. I don't think it would&nbsp; tell anyone anything they don't know now. But&nbsp;&nbsp; when I wrote it, I actually said, look, there are&nbsp; seven factors and I wasn't like, these are all the&nbsp;&nbsp;

factors but just let me give some sense of the&nbsp; kinds of things that matter and what don't. There&nbsp;&nbsp; could be nine, there could be five. But the things&nbsp; I said were — Number of parameters matters. Scale&nbsp;&nbsp; of the model matters. Compute matters. Quantity&nbsp;

of data matters. Quality of data matters. Loss&nbsp;&nbsp; function matters. Are you doing RL? Are you doing&nbsp; next word prediction? If your loss function isn't&nbsp;&nbsp; rich or doesn't incentivize the right thing, you&nbsp; won't get anything. Those were the key four ones,&nbsp;&nbsp;

which I think are the core of the hypothesis. But then I said three more things. One was&nbsp;&nbsp; symmetries, which is basically if your&nbsp; architecture doesn't take into account&nbsp;&nbsp; the right kinds of symmetries, it doesn't work or&nbsp;

it's very inefficient. For example, convolutional&nbsp;&nbsp; neural networks take into account translational&nbsp; symmetry. LSTMs take into account time symmetry.&nbsp;&nbsp; But a weakness of LSTMs is that they can't attend&nbsp; over the whole context. So there's kind of this&nbsp;&nbsp;

structural weakness. If a model isn't structurally&nbsp; capable of absorbing and managing things that&nbsp;&nbsp; happened in a far enough distant past, then it's&nbsp; like the compute doesn't flow. The spice doesn't&nbsp;&nbsp; flow. The blob has to be unencumbered. It's not&nbsp;

going to work if you artificially close things&nbsp;&nbsp; off. And I think RNNs and LSTMs artificially&nbsp; close things off because they close you off&nbsp;&nbsp; to the distant past. Again, things need to&nbsp; flow freely. If they don't, it doesn't work.&nbsp;

And then I added a couple things. One of them&nbsp; was conditioning, which is if the thing you're&nbsp;&nbsp; optimizing with is just really numerically&nbsp; bad, you're going to have trouble. And so&nbsp;&nbsp; this is why atom works better than normal STD.

I'm forgetting what the 7th condition was,&nbsp;&nbsp; but it was similar to things like this, where&nbsp; if you set things up in a way that's set up to&nbsp;&nbsp; fail or that doesn't allow the compute to&nbsp; work in an uninhibited way, then it won't&nbsp;&nbsp;

work. Transformers were kind of within that even&nbsp; though I can't remember if the transformer paper&nbsp;&nbsp; had been published, it was around the same&nbsp; time as I wrote that document. It might have&nbsp;&nbsp; been just before. It might have been just after.

From that view it sounds like the way to think&nbsp;&nbsp; about these algorithmic progresses is not as&nbsp; increasing the power of the blob of compute,&nbsp;&nbsp; but simply getting rid of the artificial&nbsp; hindrances that older architectures have.&nbsp;

That's a little how I think about it. If you go&nbsp; back to Ilya's, the models want to learn, the&nbsp;&nbsp; compute wants to be free and it's being blocked&nbsp; in various ways where you don't understand that&nbsp;&nbsp; it's being blocked until you need to free it up.

I love the gradients changing that to spice.&nbsp;&nbsp; On that point, though, do you think that another&nbsp; thing on the scale of a transformer is coming down&nbsp;&nbsp; the pike to enable the next great iteration? I think it's possible. People have worked on&nbsp;&nbsp;

things like trying to model very long time&nbsp; dependencies or there's various different&nbsp;&nbsp; ideas where I could see that we're missing an&nbsp; efficient way of representing or dealing with&nbsp;&nbsp; something. I think those inventions are possible.

I guess my perspective would be, even if they&nbsp;&nbsp; don't happen, we're already on this very,&nbsp; very steep trajectory. Unless we're constantly&nbsp;&nbsp; trying to discover them, as are others, but&nbsp; things are already on such a fast trajectory,&nbsp;&nbsp;

all that would do is speed up the trajectory&nbsp; even more, and probably not by that much&nbsp;&nbsp; because it's already going so fast. Is having an embodied version of a&nbsp;&nbsp; model at all important in terms of&nbsp;

getting either data or progress?&nbsp; I'd think of that less in terms of&nbsp; a new architecture and more in terms&nbsp;&nbsp; of a loss function like the data, the&nbsp; environments you're exposing yourself&nbsp;&nbsp;

to end up being very different. That could be&nbsp; important for learning some skills, although&nbsp;&nbsp; data acquisition is hard and so things have gone&nbsp; through the language route and I would guess will&nbsp;&nbsp; continue to go through the language route even&nbsp;

as more is possible in terms of embodiment.&nbsp; And then the other possibilities you&nbsp; mentioned. RL, you can see it as...&nbsp; We kind of already do RL with RLHF. Is this&nbsp; alignment? Is this capabilities? I always think&nbsp;&nbsp;

in terms of the two snakes, they're often hard to&nbsp; distinguish. We already kind of use RL on these&nbsp;&nbsp; language models but I think we've used RL less&nbsp; in terms of getting them to take actions and do&nbsp;&nbsp; things in the world but when you take actions&nbsp;

over a long period of time and understand the&nbsp;&nbsp; consequences of those actions only later, then&nbsp; RL is a typical tool we have for that. So I would&nbsp;&nbsp; guess that in terms of models taking action in the&nbsp; world, that RL will become a thing with all the&nbsp;&nbsp;

power and all the safety issues that come with it. When you project out in the future, do you see the&nbsp;&nbsp; way in which these things will be integrated into&nbsp; productive supply chains? Do you see them talking&nbsp;&nbsp; with each other and criticizing each other and&nbsp;

contributing to each other's output? Or is it just&nbsp;&nbsp; that one model one shots the answer or the work. Models will undertake extended tasks. That will&nbsp;&nbsp; have to be the case. We may want to limit that to&nbsp; some extent because it may make some of the safety&nbsp;&nbsp;

problems easier but some of that will be required. In terms of our models talking to models or are&nbsp;&nbsp; they talking to humans? Again, this goes kind&nbsp; of out of the technical realm and into the&nbsp;&nbsp; sociocultural economic realm where my heuristic is&nbsp;

always that it's very, very difficult to predict&nbsp;&nbsp; things. I feel like these scaling laws have been&nbsp; very predictable but then when you say like,&nbsp;&nbsp; when is there going to be a commercial explosion&nbsp; in these models? Or what's the form it's going to&nbsp;&nbsp;

be? Or are the models going to do things instead&nbsp; of humans or pairing with humans? Certainly my&nbsp;&nbsp; track record on predicting these things is&nbsp; terrible but also looking around, I don't&nbsp;&nbsp; really see anyone whose track record is great.

You mentioned how fast progress is happening,&nbsp;&nbsp; but also the difficulties of integrating within&nbsp; the existing economy into the way things work.&nbsp;&nbsp; Do you think there will be enough time to&nbsp; actually have large revenues from AI products&nbsp;&nbsp;

before the next model is just so much better&nbsp; or we're in a different landscape entirely?&nbsp; It depends what you mean by large. I&nbsp; think multiple companies are already&nbsp;&nbsp; in the 100 million to billion per year&nbsp;

range. Will it get to the 100 billion or&nbsp;&nbsp; trillion range before? That stuff is just so hard&nbsp; to predict. And it's not even super well defined.&nbsp; Right now there are companies that are throwing&nbsp; a lot of money at generative AI as customers.&nbsp;&nbsp;

That's the right thing for them to do, and&nbsp; they'll find uses for it, but it doesn't&nbsp;&nbsp; mean they're finding uses or the best uses from&nbsp; day one. Even money changing hands is not quite&nbsp;&nbsp; the same thing as economic value being created.

But surely you've thought about this from the&nbsp;&nbsp; perspective of Anthropic, where if&nbsp; these things are happening so fast,&nbsp;&nbsp; then it should be an insane valuation, right? Even us who have not been super focused on&nbsp;&nbsp;

commercialization and more on safety, the graph&nbsp; goes up and it goes up relatively quickly.&nbsp;&nbsp; I can only imagine what's happening at the&nbsp; orgs where this is their singular focus.&nbsp;&nbsp; It's certainly happening fast but it's&nbsp;

an exponential from the small base&nbsp;&nbsp; while the technology itself is moving fast. It's a race between how fast the technology&nbsp;&nbsp; is getting better and how fast it's integrated&nbsp; into the economy. And I think that's just a very&nbsp;&nbsp;

unstable and turbulent process. Both things are&nbsp; going to happen fast but if you ask me exactly&nbsp;&nbsp; how it's going to play out, exactly what order&nbsp; things are going to happen, I don't know. And&nbsp;&nbsp; I'm skeptical of the ability to predict.

I'm curious. With regards to Anthropic&nbsp;&nbsp; specifically, you're a public benefit&nbsp; corporation and rightfully so,&nbsp;&nbsp; you want to make sure that this is an important&nbsp; technology. Obviously, the only thing you want&nbsp;&nbsp;

to care about is not shareholder value. But how do you talk to investors who are&nbsp;&nbsp; putting in hundreds of millions, billions&nbsp; of dollars of money? How do you get them&nbsp;&nbsp; to put in this amount of money without the&nbsp;

shareholder value being the main concern?&nbsp; I think the LTBT (Long Term Benefit Trust) is&nbsp; the right thing on this. We're going to talk&nbsp;&nbsp; more about the LTBT, but some version of that&nbsp; has been in development since the beginning&nbsp;&nbsp;

of Anthropic, even formally. Even as the body&nbsp; has changed, from the beginning, it was like,&nbsp;&nbsp; this body is going to exist and it's unusual. Every traditional investor who invests in&nbsp;&nbsp; Anthropic looks at this. Some of them are just&nbsp;

like, whatever, you run your company how you want.&nbsp;&nbsp; Some of them are like, oh my god, this body of&nbsp; random people could move Anthropic in a direction&nbsp;&nbsp; that's totally contrary to shareholder value.&nbsp; Now there are legal limits on that, of course,&nbsp;&nbsp;

but we have to have this conversation with every&nbsp; investor. And then it gets into a conversation of,&nbsp;&nbsp; well, what are the kinds of things that&nbsp; we might do that would be contrary to the&nbsp;&nbsp; interests of traditional investors.&nbsp;

And just having those conversations&nbsp;&nbsp; has helped get everyone on the same page. I want to talk about the fact that so many&nbsp;&nbsp; of the founders and the employees at Anthropic&nbsp; are physicists. We talked in the beginning about&nbsp;&nbsp;

the scaling laws and how the power laws&nbsp; from physics are something you see here,&nbsp;&nbsp; but what are the actual approaches and ways of&nbsp; thinking from physics that seem to have carried&nbsp;&nbsp; over so well? Is that notion of effective&nbsp;

theory super useful? What is going on here?&nbsp; Part of it is just that physicists learn things&nbsp; really fast. We have generally found that if we&nbsp;&nbsp; hire someone who is a Physics PhD or something,&nbsp; that they can learn ML and contribute just very&nbsp;&nbsp;

quickly in most cases. And because several of&nbsp; our founders myself, Jared Kaplan, Sam McCandlish&nbsp;&nbsp; were physicists, we knew a lot of other&nbsp; physicists, and so we were able to hire&nbsp;&nbsp; them. And now there might be 30 or 40 of them&nbsp;

here. ML is not still not yet a field that has&nbsp;&nbsp; an enormous amount of depth, and so they've&nbsp; been able to get up to speed very quickly.&nbsp; Are you concerned that there's a lot of people&nbsp; who would have been doing physics or something,&nbsp;&nbsp;

they would’ve gone into finance&nbsp; instead and since Anthropic exists,&nbsp;&nbsp; they have now been recruited to go into AI.&nbsp; You obviously care about AI safety, but maybe&nbsp;&nbsp; in the future they leave and they get funded to&nbsp;

do their own thing. Is that a concern that you're&nbsp;&nbsp; bringing more people into the ecosystem here? There's a broad set of actions, like we're causing&nbsp;&nbsp; GPUs to exist. There's a lot of side effects&nbsp; that you can't currently control or that you&nbsp;&nbsp;

just incur if you buy into the idea that you need&nbsp; to build frontier models. And that's one of them.&nbsp;&nbsp; A lot of them would have happened anyway. I&nbsp; mean, finance was a hot thing 20 years ago,&nbsp;&nbsp; so physicists were doing it. Now ML is a hot&nbsp;

thing, and it's not like we've caused them to&nbsp;&nbsp; do it when they had no interest previously. But&nbsp; again, at the margin, you're bidding things up,&nbsp;&nbsp; and a lot of that would have happened anyway. Some&nbsp; of it wouldn't but it's all part of the calculus.&nbsp;

Do you think that Claude has conscious&nbsp; experience? How likely do you think that is?&nbsp; This is another of these questions that just&nbsp; seems very unsettled and uncertain. One thing&nbsp;&nbsp; I'll tell you is I used to think that we didn't&nbsp;

have to worry about this at all until models&nbsp;&nbsp; were operating in rich environments, like&nbsp; not necessarily embodied, but they needed&nbsp;&nbsp; to have a reward function and have a long lived&nbsp; experience. I still think that might be the case,&nbsp;&nbsp;

but the more we've looked at these language&nbsp; models and particularly looked inside them&nbsp;&nbsp; to see things like induction heads, a lot of&nbsp; the cognitive machinery that you would need&nbsp;&nbsp; for active agents already seems present in the&nbsp;

base language models. So I'm not quite as sure&nbsp;&nbsp; as I was before that we're missing enough&nbsp; of the things that you would need. I think&nbsp;&nbsp; today's models just probably aren't smart enough&nbsp; that we should worry about this too much but I'm&nbsp;&nbsp;

not 100% sure about this, and I do think in a&nbsp; year or two, this might be a very real concern.&nbsp; What would change if you found out that they&nbsp; are conscious? Are you worried that you're&nbsp;&nbsp; pushing the negative gradient to suffering?

Conscious, again, is one of these words that&nbsp;&nbsp; I suspect will not end up having a well defined..&nbsp; I suspect that's a spectrum. Let's say we discover&nbsp;&nbsp; that I should care about Claude’s experience as&nbsp; much as I should care about a dog or a monkey&nbsp;&nbsp;

or something. I would be kind of worried. I don't know if their experience is positive&nbsp;&nbsp; or negative. Unsettlingly I also don't know I&nbsp; wouldn't know if any intervention that we made&nbsp;&nbsp; was more likely to make Claude have a positive&nbsp;

versus negative experience versus not having one.&nbsp; If there's an area that is helpful with this, it's&nbsp; maybe mechanistic interpretability because I think&nbsp;&nbsp; of it as neuroscience for models. It's possible&nbsp; that we could shed some light on this. Although&nbsp;&nbsp;

it's not a straightforward factual question.&nbsp; It depends what we mean and what we value.&nbsp; We talked about this initially, but I want to&nbsp; get more specific. We talked initially about&nbsp;&nbsp; now that you're seeing these capabilities ramp&nbsp;

up within the human spectrum, you think that the&nbsp;&nbsp; human spectrum is wider than we thought but more&nbsp; specifically, how is the way you think about human&nbsp;&nbsp; intelligence different. The way you're seeing&nbsp; these marginally useful abilities emerge? How does&nbsp;&nbsp;

that change your picture of what intelligence is? For me, the big realization on what intelligence&nbsp;&nbsp; is came with the blob of compute thing. There&nbsp; might be all these separate modules. There&nbsp;&nbsp; might be all this complexity. Rich Sutton called&nbsp;

it The Bitter Lesson. It has many names. It's&nbsp;&nbsp; been called the scaling hypothesis. The first&nbsp; few people who figured it out was around 2017.&nbsp;&nbsp; You could go further back. I think Shane Legg&nbsp; was maybe the first person who really knew it,&nbsp;&nbsp;

maybe Ray Kurzweil, although in a very vague&nbsp; way. But the number of people who understood&nbsp;&nbsp; it went up a lot around 2014 to 2017. I think that was the big realization.&nbsp;&nbsp; How did intelligence evolve? If you don't&nbsp;

need very specific conditions to create it,&nbsp;&nbsp; if you can create it just from the right kind&nbsp; of gradient and loss signal, then of course&nbsp;&nbsp; it's not so mysterious how it all happened.&nbsp; It had this click of scientific understanding.&nbsp;

In terms of watching what the models can do, how&nbsp; has it changed my view of human intelligence? I&nbsp;&nbsp; wish I had something more intelligent to say&nbsp; on that. One thing that's been surprising&nbsp;&nbsp; is I thought things might click into place a&nbsp;

little more than they do. I thought different&nbsp;&nbsp; cognitive abilities might all be connected and&nbsp; there was more of one secret behind them. But&nbsp;&nbsp; the model just learns various things at different&nbsp; times. It can be very good at coding but it can't&nbsp;&nbsp;

quite prove the prime number theorem yet. And&nbsp; I guess it's a little bit the same for humans,&nbsp;&nbsp; although it's weird the juxtaposition of things it&nbsp; can do and not. I guess the main lesson is having&nbsp;&nbsp; theories of intelligence or how intelligence&nbsp;

works. A lot of these words just dissolve into&nbsp;&nbsp; a continuum. They just kind of dematerialize.&nbsp; I think less in terms of intelligence and more&nbsp;&nbsp; in terms of what we see in front of us. Two things are really surprising to me.&nbsp;&nbsp;

One is how discrete these different paths&nbsp; of intelligent things that contribute to&nbsp;&nbsp; loss are rather than just being one reasoning&nbsp; circuit or one general intelligence. And the&nbsp;&nbsp; other surprising and interesting thing is, many&nbsp;

years from now, it'll be one of those things that&nbsp;&nbsp; you’ll wonder why it wasn't obvious to you?&nbsp; If you're seeing these smooth scaling curves,&nbsp;&nbsp; why were you not completely convinced at the time? You've been less public than the CEOs of other AI&nbsp;&nbsp;

companies. You're not posting on Twitter, you're&nbsp; not doing a lot of podcasts except for this one.&nbsp;&nbsp; What gives? Why are you off the radar? I aspire to this and I'm proud of this.&nbsp;&nbsp; If people think of me as boring and low&nbsp;

profile, this is actually kind of what I want.&nbsp;&nbsp; I've just seen cases with a number of&nbsp; people I've worked with, where attaching&nbsp;&nbsp; your incentives very strongly to the approval&nbsp; or cheering of a crowd can destroy your mind,&nbsp;&nbsp;

and in some cases, it can destroy your soul. I've deliberately tried to be a little bit low&nbsp;&nbsp; profile because I want to defend my ability to&nbsp; think about things intellectually in a way that's&nbsp;&nbsp; different from other people and isn't tinged by&nbsp;

the approval of other people. I've seen cases&nbsp;&nbsp; of folks who are deep learning skeptics, and they&nbsp; become known as deep learning skeptics on Twitter.&nbsp;&nbsp; And then even as it starts to become clear to&nbsp; me, they've sort of changed their mind. This is&nbsp;&nbsp;

their thing on Twitter, and they can't change&nbsp; their Twitter persona and so forth and so on.&nbsp; I don't really like the trend of personalizing&nbsp; companies. The whole cage match between CEOs&nbsp;&nbsp; approach. I think it distracts people from the&nbsp;

actual merits and concerns of the company in&nbsp;&nbsp; question. I want people to think in terms of&nbsp; the nameless, bureaucratic institution and its&nbsp;&nbsp; incentives more than they think in terms of me.&nbsp; Everyone wants a friendly face, but actually,&nbsp;&nbsp;

friendly faces can be misleading. Okay, well, in this case,&nbsp;&nbsp; this will be a misleading interview&nbsp; because this has been a lot of fun.&nbsp; Indeed.

Yeah, this has been a blast. I’m super glad you&nbsp;&nbsp; came on the podcast and hope people enjoyed it. Thanks for having me.

<!-- YOUTUBE_TRANSCRIPT_END -->
