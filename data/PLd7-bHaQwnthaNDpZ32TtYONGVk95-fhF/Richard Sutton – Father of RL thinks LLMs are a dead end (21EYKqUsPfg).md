---
archive_version: 2
source: "youtube"
source_type: "playlist"
video_id: "21EYKqUsPfg"
title: "Richard Sutton – Father of RL thinks LLMs are a dead end"
video_url: "https://www.youtube.com/watch?v=21EYKqUsPfg"
channel_name: "Dwarkesh Patel"
channel_id: "UCXl4i9dYBrFOabk0xGmbkRA"
uploader_id: "@DwarkeshPatel"
published_at: "2025-09-26T16:01:25.000Z"
upload_date: "2025-09-26"
duration_seconds: 4029
duration_human: "1:07:09"
view_count: 709238
like_count: 15903
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-18T13:55:17.393Z"
---

# Richard Sutton – Father of RL thinks LLMs are a dead end

## Video Summary
- source_type: playlist
- video_url: https://www.youtube.com/watch?v=21EYKqUsPfg
- video_id: 21EYKqUsPfg
- channel_name: Dwarkesh Patel
- channel_id: UCXl4i9dYBrFOabk0xGmbkRA
- uploader_id: @DwarkeshPatel
- uploader_url: https://www.youtube.com/@DwarkeshPatel
- published_at: 2025-09-26T16:01:25.000Z
- upload_date: 2025-09-26
- duration: 1:07:09
- view_count: 709238
- like_count: 15903
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Richard Sutton is the father of reinforcement learning, winner of the 2024 Turing Award, and author of The Bitter Lesson. And he thinks LLMs are a dead end. After interviewing him, my steel man of Richard’s position is this: LLMs aren’t capable of learning on-the-job, so no matter how much we scale, we’ll need *some* new architecture to enable continual learning. And once we have it, we won’t need a special training phase — the agent will just learn on-the-fly, like all humans, and indeed, like all animals. This new paradigm will render our current approach with LLMs obsolete.

In our interview, I did my best to represent the view that LLMs might function as the foundation on which experiential learning can happen… Some sparks flew. A big thanks to the Alberta Machine Intelligence Institute for inviting me up to Edmonton and for letting me use their studio and equipment. Enjoy!

𝐄𝐏𝐈𝐒𝐎𝐃𝐄 𝐋𝐈𝐍𝐊𝐒
* Transcript: https://www.dwarkesh.com/p/richard-sutton
* Apple Podcasts: https://podcasts.apple.com/us/podcast/richard-sutton-father-of-rl-thinks-llms-are-a-dead-end/id1516093381?i=1000728584744
* Spotify: https://open.spotify.com/episode/3zAXRCFrHPShU4MuuIx4V5?si=c9f4bf24fb4c43e3

𝐒𝐏𝐎𝐍𝐒𝐎𝐑𝐒
* Labelbox makes it possible to train AI agents in hyperrealistic RL environments. With an experienced team of applied researchers and a massive network of subject-matter experts, Labelbox ensures your training reflects important, real-world nuance. Turn your demo projects into working systems at https://labelbox.com/dwarkesh

* Gemini Deep Research is designed for thorough exploration of hard topics. For this episode, it helped me trace reinforcement learning from early policy gradients up to current-day methods, combining clear explanations with curated examples. Try it out yourself at https://gemini.google.com/

* Hudson River Trading doesn’t silo their teams. Instead, HRT researchers openly trade ideas and share strategy code in a mono-repo. This means you’re able to learn at incredible speed and your contributions have impact across the entire firm. Find open roles at https://hudsonrivertrading.com/dwarkesh

To sponsor a future episode, visit https://dwarkesh.com/advertise

𝐓𝐈𝐌𝐄𝐒𝐓𝐀𝐌𝐏𝐒
00:00:00 – Are LLMs a dead end?
00:13:51 – Do humans do imitation learning?
00:23:57 – The Era of Experience
00:34:25 – Current architectures generalize poorly out of distribution
00:42:17 – Surprises in the AI field
00:47:28 – Will The Bitter Lesson still apply after AGI?
00:54:35 – Succession to AI

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

Today I'm chatting with Richard Sutton,&nbsp; who is one of the founding fathers of&nbsp;&nbsp; reinforcement learning and inventor of&nbsp; many of the main techniques used there,&nbsp;&nbsp; like TD learning and policy gradient methods.

For that, he received this year's Turing Award&nbsp;&nbsp; which, if you don’t know, is the Nobel Prize&nbsp; for computer science. Richard, congratulations.&nbsp; Thank you, Dwarkesh. Thanks for coming on the podcast.&nbsp;

It's my pleasure. First question. My audience and I are&nbsp;&nbsp; familiar with the LLM way of thinking about AI. Conceptually, what are we missing in terms of&nbsp;&nbsp; thinking about AI from the RL perspective?

It's really quite a different point of view.&nbsp; It can easily get separated and lose&nbsp; the ability to talk to each other.&nbsp; Large language models have become such a big&nbsp; thing, generative AI in general a big thing.&nbsp;

Our field is subject to bandwagons and&nbsp; fashions, so we lose track of the basic things.&nbsp; I consider reinforcement learning to&nbsp; be basic AI. What is intelligence?&nbsp;&nbsp; The problem is to understand your world.

Reinforcement learning is about understanding&nbsp;&nbsp; your world, whereas large language&nbsp; models are about mimicking people,&nbsp;&nbsp; doing what people say you should do. They're not about figuring out what to do.&nbsp;

You would think that to emulate the trillions&nbsp; of tokens in the corpus of Internet text,&nbsp;&nbsp; you would have to build a world model. In fact, these models do seem to have&nbsp;&nbsp; very robust world models.

They're the best world models&nbsp;&nbsp; we've made to date in AI, right? What do you think is missing?&nbsp; I would disagree with most&nbsp; of the things you just said.&nbsp;

To mimic what people say is not really&nbsp; to build a model of the world at all.&nbsp; You're mimicking things that have&nbsp; a model of the world: people.&nbsp; I don't want to approach the question in an&nbsp;

adversarial way, but I would question the&nbsp;&nbsp; idea that they have a world model. A world model would enable you&nbsp;&nbsp; to predict what would happen. They have the ability to predict&nbsp;&nbsp;

what a person would say. They don't have the&nbsp;&nbsp; ability to predict what will happen. What we want, to quote Alan Turing, is a machine&nbsp;&nbsp; that can learn from experience, where experience&nbsp;

is the things that actually happen in your life.&nbsp; You do things, you see what happens,&nbsp; and that's what you learn from.&nbsp; The large language models&nbsp; learn from something else.&nbsp;

They learn from "here's a situation,&nbsp; and here's what a person did".&nbsp; Implicitly, the suggestion is you&nbsp; should do what the person did.&nbsp; I guess maybe the crux, and I'm curious if&nbsp;

you disagree with this, is that some people&nbsp;&nbsp; will say that imitation learning has given us a&nbsp; good prior, or given these models a good prior,&nbsp;&nbsp; of reasonable ways to approach problems. As we move towards the era of experience, as&nbsp;&nbsp;

you call it, this prior is going to be the basis&nbsp; on which we teach these models from experience,&nbsp;&nbsp; because this gives them the opportunity&nbsp; to get answers right some of the time.&nbsp; Then on this, you can train them on experience.

Do you agree with that perspective?&nbsp; No. I agree that it's the large&nbsp; language model perspective.&nbsp; I don't think it's a good perspective. To be a prior for something,&nbsp;&nbsp;

there has to be a real thing. A prior bit of knowledge should be&nbsp;&nbsp; the basis for actual knowledge. What is actual&nbsp; knowledge? There's no definition of actual&nbsp;&nbsp; knowledge in that large-language framework.

What makes an action a good action to take?&nbsp; You recognize the need for continual learning. If you need to learn continually,&nbsp;&nbsp; continually means learning during the&nbsp; normal interaction with the world.&nbsp;

There must be some way during the&nbsp; normal interaction to tell what's right.&nbsp; Is there any way to tell in the large language&nbsp; model setup what's the right thing to say?&nbsp; You will say something and you will not get&nbsp;

feedback about what the right thing to say is,&nbsp;&nbsp; because there's no definition of what&nbsp; the right thing to say is. There's no&nbsp;&nbsp; goal. If there's no goal, then there's&nbsp; one thing to say, another thing to say.&nbsp;

There's no right thing to say. There's no&nbsp; ground truth. You can't have prior knowledge&nbsp;&nbsp; if you don't have ground truth, because the&nbsp; prior knowledge is supposed to be a hint or&nbsp;&nbsp; an initial belief about what the truth is. There&nbsp;

isn't any truth. There's no right thing to say.&nbsp; In reinforcement learning, there is a right thing&nbsp; to say, a right thing to do, because the right&nbsp;&nbsp; thing to do is the thing that gets you reward. We have a definition of what's the right thing&nbsp;&nbsp;

to do, so we can have prior knowledge&nbsp; or knowledge provided by people about&nbsp;&nbsp; what the right thing to do is. Then we can check it to see,&nbsp;&nbsp; because we have a definition of what&nbsp;

the actual right thing to do is.&nbsp; An even simpler case is when you're&nbsp; trying to make a model of the world.&nbsp; When you predict what will happen, you predict&nbsp; and then you see what happens. There's ground&nbsp;&nbsp;

truth. There's no ground truth in large&nbsp; language models because you don't have&nbsp;&nbsp; a prediction about what will happen next. If you say something in your conversation,&nbsp;&nbsp; the large language models have no prediction&nbsp;

about what the person will say in response&nbsp;&nbsp; to that or what the response will be. I think they do. You can literally ask them,&nbsp;&nbsp; "What would you anticipate a user might say&nbsp; in response?" They’ll have a prediction.&nbsp;

No, they will respond to that question right. But they have no prediction in the substantive&nbsp;&nbsp; sense that they won't be&nbsp; surprised by what happens.&nbsp; If something happens that isn't what you&nbsp;

might say they predicted, they will not&nbsp;&nbsp; change because an unexpected thing has happened. To learn that, they'd have to make an adjustment.&nbsp; I think a capability like&nbsp; this does exist in context.&nbsp;

It's interesting to watch a&nbsp; model do chain of thought.&nbsp; Suppose it's trying to solve a math problem. It'll say, "Okay, I'm going to approach this&nbsp;&nbsp; problem using this approach first."

It'll write this out and be like,&nbsp;&nbsp; "Oh wait, I just realized this is the wrong&nbsp; conceptual way to approach the problem.&nbsp; I'm going to restart with another approach." That flexibility does exist in context, right?&nbsp;

Do you have something else in mind&nbsp; or do you just think that you need&nbsp;&nbsp; to extend this capability across longer horizons? I'm just saying they don't have in any meaningful&nbsp;&nbsp; sense a prediction of what will happen next.

They will not be surprised by what happens next.&nbsp; They'll not make any changes if&nbsp; something happens, based on what happens.&nbsp; Isn't that literally what&nbsp; next token prediction is?&nbsp;

Prediction about what's next and&nbsp; then updating on the surprise?&nbsp; The next token is what they should&nbsp; say, what the actions should be.&nbsp; It's not what the world will give&nbsp;

them in response to what they do.&nbsp; Let's go back to their lack of a goal. For me, having a goal is&nbsp;&nbsp; the essence of intelligence. Something is intelligent if it can achieve goals.&nbsp;

I like John McCarthy's definition that&nbsp; intelligence is the computational part&nbsp;&nbsp; of the ability to achieve goals. You have to have goals or you're&nbsp;&nbsp; just a behaving system.

You're not anything special,&nbsp;&nbsp; you're not intelligent. You agree that large language&nbsp;&nbsp; models don't have goals? No, they have a goal.&nbsp;

What's the goal? Next token prediction.&nbsp; That's not a goal. It doesn't change&nbsp; the world. Tokens come at you,&nbsp;&nbsp; and if you predict them, you don't influence them.

Oh yeah. It's not a goal about the external world.&nbsp; It's not a goal. It's not a substantive goal.&nbsp; You can't look at a system and say it has a goal&nbsp;&nbsp; if it's just sitting there predicting and being&nbsp; happy with itself that it's predicting accurately.&nbsp;

The bigger question I want to understand&nbsp; is why you don't think doing RL on&nbsp;&nbsp; top of LLMs is a productive direction. We seem to be able to give these models&nbsp;&nbsp; the goal of solving difficult math problems.

They are in many ways at the very peaks of&nbsp;&nbsp; human-level in the capacity to solve math&nbsp; Olympiad-type problems. They got gold at&nbsp;&nbsp; IMO. So it seems like the model which got&nbsp; gold at the International Math Olympiad does&nbsp;&nbsp;

have the goal of getting math problems right. Why can't we extend this to different domains?&nbsp; The math problems are different. Making a&nbsp; model of the physical world and carrying&nbsp;&nbsp; out the consequences of mathematical assumptions&nbsp;

or operations, those are very different things.&nbsp; The empirical world has to be learned. You have to learn the consequences.&nbsp; Whereas the math is more computational,&nbsp; it's more like standard planning.&nbsp;

There they can have a goal to find&nbsp; the proof, and they are in some way&nbsp;&nbsp; given that goal to find the proof. It's interesting because you wrote&nbsp;&nbsp; this essay in 2019 titled "The Bitter&nbsp;

Lesson," and this is the most influential&nbsp;&nbsp; essay, perhaps, in the history of AI. But people have used that as a justification for&nbsp;&nbsp; scaling up LLMs because, in their view, this is&nbsp; the one scalable way we have found to pour ungodly&nbsp;&nbsp;

amounts of compute into learning about the world. It's interesting that your perspective is that&nbsp;&nbsp; the LLMs are not "bitter lesson"-pilled. It's an interesting question whether large&nbsp;&nbsp; language models are a case of the bitter lesson.

They are clearly a way of using massive&nbsp;&nbsp; computation, things that will scale with&nbsp; computation up to the limits of the Internet.&nbsp; But they're also a way of putting in lots of&nbsp; human knowledge. This is an interesting question.&nbsp;&nbsp;

It's a sociological or industry question. Will they reach the limits of the data and&nbsp;&nbsp; be superseded by things that can get more data&nbsp; just from experience rather than from people?&nbsp; In some ways it's a classic&nbsp;

case of the bitter lesson.&nbsp; The more human knowledge we put into the&nbsp; large language models, the better they&nbsp;&nbsp; can do. So it feels good. Yet, I expect there&nbsp; to be systems that can learn from experience.&nbsp;

Which could perform much better&nbsp; and be much more scalable.&nbsp; In which case, it will be another instance of the&nbsp; bitter lesson, that the things that used human&nbsp;&nbsp; knowledge were eventually superseded by things&nbsp;

that just trained from experience and computation.&nbsp; I guess that doesn't seem like the crux to me. I think those people would also agree that the&nbsp;&nbsp; overwhelming amount of compute in the future&nbsp; will come from learning from experience.&nbsp;

They just think that the scaffold or the basis of&nbsp; that, the thing you'll start with in order to pour&nbsp;&nbsp; in the compute to do this future experiential&nbsp; learning or on-the-job learning, will be LLMs.&nbsp; I still don't understand why this is&nbsp;

the wrong starting point altogether.&nbsp; Why do we need a whole new architecture to&nbsp; begin doing experiential, continual learning?&nbsp; Why can't we start with LLMs to do that? In every case of the bitter lesson you&nbsp;&nbsp;

could start with human knowledge and then do the&nbsp; scalable things. That's always the case. There's&nbsp;&nbsp; never any reason why that has to be bad. But in fact, and in practice,&nbsp;&nbsp; it has always turned out to be bad.

People get locked into the human&nbsp;&nbsp; knowledge approach, and they psychologically…&nbsp; Now I'm speculating why it is, but this is&nbsp;&nbsp; what has always happened. They get their lunch eaten&nbsp;&nbsp;

by the methods that are truly scalable. Give me a sense of what the scalable method is.&nbsp; The scalable method is you learn from experience. You try things, you see what works.&nbsp; No one has to tell you.

First of all, you have a goal.&nbsp; Without a goal, there's no sense of&nbsp; right or wrong or better or worse.&nbsp; Large language models are trying to get by without&nbsp; having a goal or a sense of better or worse.&nbsp;

That's just exactly starting in the wrong place. Maybe it's interesting to compare this to humans.&nbsp; In both the case of learning from imitation&nbsp; versus experience and on the question of goals,&nbsp;&nbsp; I think there's some interesting analogies.

Kids will initially learn from imitation.&nbsp;&nbsp; You don't think so? No, of course not.&nbsp; Really? I think kids just watch people. They try to say the same words…&nbsp;

How old are these kids? What&nbsp; about the first six months?&nbsp; I think they're imitating things. They're&nbsp; trying to make their mouth sound the way&nbsp;&nbsp; they see their mother's mouth sound.

Then they'll say the same words without&nbsp;&nbsp; understanding what they mean. As they get older, the complexity&nbsp;&nbsp; of the imitation they do increases. You're imitating maybe the skills that&nbsp;&nbsp;

people in your band are using to&nbsp; hunt down the deer or something.&nbsp; Then you go into the learning&nbsp; from experience RL regime.&nbsp; But I think there's a lot of imitation&nbsp;

learning happening with humans.&nbsp; It's surprising you can have&nbsp; such a different point of view.&nbsp; When I see kids, I see kids just&nbsp; trying things and waving their&nbsp;&nbsp;

hands around and moving their eyes around. There's no imitation for how they move their&nbsp;&nbsp; eyes around or even the sounds they make. They may want to create the same sounds,&nbsp;&nbsp; but the actions, the thing that the infant&nbsp;

actually does, there's no targets for that.&nbsp; There are no examples for that. I agree. That doesn't explain everything infants&nbsp;&nbsp; do, but I think it guides a learning process. Even an LLM, when it's trying to predict the next&nbsp;&nbsp;

token early in training, it will make a guess. It'll be different from what it actually sees.&nbsp; In some sense, it's very short-horizon&nbsp; RL, where it's making this guess,&nbsp;&nbsp; "I think this token will be this."

It's this other thing, similar to how a kid&nbsp;&nbsp; will try to say a word. It comes out wrong. The large language models are learning&nbsp;&nbsp; from training data. It's not learning from&nbsp; experience. It's learning from something that&nbsp;&nbsp;

will never be available during its normal life. There's never any training data that says you&nbsp;&nbsp; should do this action in normal life. I think this is more of a semantic&nbsp;&nbsp; distinction. What do you call&nbsp;

school? Is that not training data?&nbsp; School is much later. Okay,&nbsp; I shouldn't have said never.&nbsp; I don’t know, I think I would&nbsp; even say that about school.&nbsp;

But formal schooling is the exception. But there are phases of learning where&nbsp;&nbsp; there’s the programming in your biology&nbsp; early on, you're not that useful.&nbsp; Then why you exist is to understand the&nbsp;

world and learn how to interact with it.&nbsp; It seems like a training phase. I agree that then there's a more&nbsp;&nbsp; gradual… There's not a sharp cutoff&nbsp; to training to deployment, but there&nbsp;&nbsp;

seems to be this initial training phase right? There's nothing where you have training of what&nbsp;&nbsp; you should do. There's nothing. You see things&nbsp; that happen. You're not told what to do. Don't&nbsp;&nbsp; be difficult. I mean this is obvious.

You're literally taught what to do.&nbsp; This is where the word training&nbsp; comes from, from humans.&nbsp; I don't think learning is really about training. I think learning is about learning,&nbsp;&nbsp;

it's about an active process. The child tries things and sees what happens.&nbsp; We don't think about training when&nbsp; we think of an infant growing up.&nbsp; These things are actually rather well understood.

If you look at how psychologists think about&nbsp;&nbsp; learning, there's nothing like imitation. Maybe there are some extreme cases where humans&nbsp;&nbsp; might do that or appear to do that, but there's&nbsp; no basic animal learning process called imitation.&nbsp;

There are basic animal learning processes for&nbsp; prediction and for trial-and-error control.&nbsp; It's really interesting how sometimes the&nbsp; hardest things to see are the obvious ones.&nbsp; It's obvious—if you look at animals and how&nbsp;

they learn, and you look at psychology and our&nbsp;&nbsp; theories of them—that supervised learning&nbsp; is not part of the way animals learn.&nbsp; We don't have examples of desired behavior. What we have are examples of things that happen,&nbsp;&nbsp;

one thing that followed another. We have examples of,&nbsp;&nbsp; "We did something and there were consequences." But there are no examples of supervised learning.&nbsp; Supervised learning is not&nbsp;

something that happens in nature.&nbsp; Even if that were the case with school,&nbsp; we should forget about it because that's&nbsp;&nbsp; some special thing that happens in people. It doesn't happen broadly in nature. Squirrels&nbsp;&nbsp;

don't go to school. Squirrels&nbsp; can learn all about the world.&nbsp; It's absolutely obvious, I would say, that&nbsp; supervised learning doesn't happen in animals.&nbsp; I interviewed this psychologist&nbsp;

and anthropologist, Joseph Henrich,&nbsp;&nbsp; who has done work about cultural evolution,&nbsp; basically what distinguishes humans and&nbsp;&nbsp; how humans pick up knowledge. Why are you trying to distinguish&nbsp;&nbsp;

humans? Humans are animals. What we&nbsp; have in common is more interesting.&nbsp; What distinguishes us, we should&nbsp; be paying less attention to.&nbsp; We're trying to replicate intelligence. If you&nbsp;

want to understand what it is that enables humans&nbsp;&nbsp; to go to the moon or to build semiconductors,&nbsp; I think the thing we want to understand is what&nbsp;&nbsp; makes that happen. No animal can go&nbsp;&nbsp;

to the moon or make semiconductors. We want to understand what makes humans special.&nbsp; I like the way you consider that obvious,&nbsp; because I consider the opposite obvious.&nbsp; We have to understand how we are animals.

If we understood a squirrel, I think we'd&nbsp;&nbsp; be almost all the way there to&nbsp; understanding human intelligence.&nbsp; The language part is just a small veneer on the&nbsp; surface. This is great. We're finding out the&nbsp;&nbsp;

very different ways that we're thinking. We're&nbsp; not arguing. We're trying to share our different&nbsp;&nbsp; ways of thinking with each other. I think argument is useful.&nbsp;&nbsp; I do want to complete this thought.

Joseph Henrich has this interesting&nbsp;&nbsp; theory about a lot of the skills that humans&nbsp; have had to master in order to be successful.&nbsp; We're not talking about the last&nbsp; thousand years or the last 10,000 years,&nbsp;&nbsp;

but hundreds of thousands of years. The world&nbsp; is really complicated. It's not possible to&nbsp;&nbsp; reason through how to, let’s say, hunt&nbsp; a seal if you're living in the Arctic.&nbsp; There's this many, many-step, long process of&nbsp;

how to make the bait and how to find the seal,&nbsp;&nbsp; and then how to process the food in a way&nbsp; that makes sure you won't get poisoned.&nbsp; It's not possible to reason through all of that. Over time, there's this larger process of whatever&nbsp;&nbsp;

analogy you want to use—maybe RL, something&nbsp; else—where culture as a whole has figured out&nbsp;&nbsp; how to find and kill and eat seals. In his view, what is happening when&nbsp;&nbsp; this knowledge is transmitted through&nbsp;

generations, is that you have to imitate&nbsp;&nbsp; your elders in order to learn that skill. You can't think your way through how to&nbsp;&nbsp; hunt and kill and process a seal. You have to watch other people,&nbsp;&nbsp;

maybe make tweaks and adjustments,&nbsp; and that's how knowledge accumulates.&nbsp; The initial step of the cultural&nbsp; gain has to be imitation.&nbsp; But maybe you think about it a different way?

No, I think about it the same way.&nbsp; Still, it's a small thing on top of basic&nbsp; trial-and-error learning, prediction learning.&nbsp; It's what distinguishes us, perhaps,&nbsp; from many animals. But we're an animal&nbsp;&nbsp;

first. We were an animal before we had&nbsp; language and all those other things.&nbsp; I do think you make a very interesting&nbsp; point that continual learning is a&nbsp;&nbsp; capability that most mammals have.

I guess all mammals have it.&nbsp; It's quite interesting that we have something that&nbsp; all mammals have, but our AI systems don't have.&nbsp; Whereas the ability to understand math and&nbsp; solve difficult math problems—depends on how&nbsp;&nbsp;

you define math—is a capability that our&nbsp; AIs have, but that almost no animal has.&nbsp; It's quite interesting what ends up being&nbsp; difficult and what ends up being easy.&nbsp; Moravec's paradox.

That’s right, that’s right.&nbsp; This alternative paradigm that you're imagining… The experiential paradigm. Let's&nbsp;&nbsp; lay it out a little bit. It says that experience, action,&nbsp;&nbsp;

sensation—well, sensation, action, reward—this&nbsp; happens on and on and on for your life.&nbsp; It says that this is the foundation&nbsp; and the focus of intelligence.&nbsp; Intelligence is about taking that&nbsp;

stream and altering the actions to&nbsp;&nbsp; increase the rewards in the stream. Learning then is from the stream,&nbsp;&nbsp; and learning is about the stream. That second part is particularly telling.&nbsp;

What you learn, your&nbsp; knowledge, is about the stream.&nbsp; Your knowledge is about if you&nbsp; do some action, what will happen.&nbsp; Or it's about which events will follow other&nbsp;

events. It's about the stream. The content of&nbsp;&nbsp; the knowledge is statements about the stream. Because it's a statement about the stream,&nbsp;&nbsp; you can test it by comparing it to the&nbsp; stream, and you can learn it continually.&nbsp;

When you're imagining this&nbsp; future continual learning agent…&nbsp; They're not "future". Of&nbsp; course, they exist all the time.&nbsp; This is what the reinforcement learning&nbsp;

paradigm is, learning from experience.&nbsp; Yeah, I guess what I meant to&nbsp; say is a general human-level,&nbsp;&nbsp; general continual learning agent. What is the&nbsp; reward function? Is it just predicting the world?&nbsp;

Is it then having a specific effect on it? What would the general reward function be?&nbsp; The reward function is arbitrary. If you're&nbsp; playing chess, it's to win the game of chess.&nbsp; If you're a squirrel, maybe the&nbsp;

reward has to do with getting nuts.&nbsp; In general, for an animal, you would say the&nbsp; reward is to avoid pain and to acquire pleasure.&nbsp; I think there also should be a&nbsp; component having to do with your&nbsp;&nbsp;

increasing understanding of your environment. That would be sort of an intrinsic motivation.&nbsp; I see. With this AI, lots of people would want&nbsp; it to be doing lots of different kinds of things.&nbsp; It's performing the task people want,&nbsp;

but at the same time, it's learning&nbsp;&nbsp; about the world from doing that task. Let’s say we get rid of this paradigm&nbsp;&nbsp; where there's training periods and&nbsp; then there's deployment periods.&nbsp;

Do we also get rid of this paradigm where there's&nbsp; the model and then instances of the model or&nbsp;&nbsp; copies of the model that are doing certain things? How do you think about the fact that we'd&nbsp;&nbsp; want this thing to be doing different things?

We'd want to aggregate the knowledge that it's&nbsp;&nbsp; gaining from doing those different things. I don't like the word "model"&nbsp;&nbsp; when used the way you just did. I think a better word would be "the network"&nbsp;&nbsp;

because I think you mean the network. Maybe&nbsp; there are many networks. Anyway, things would&nbsp;&nbsp; be learned. You'd have copies and many instances. Sure, you'd want to share knowledge across the&nbsp;&nbsp; instances.

There would be&nbsp;&nbsp; lots of possibilities for doing that. Today, you have one child grow up and&nbsp;&nbsp; learn about the world, and then every&nbsp; new child has to repeat that process.&nbsp;

Whereas with AIs, with a digital intelligence,&nbsp; you could hope to do it once and then copy it&nbsp;&nbsp; into the next one as a starting place. This would be a huge savings.&nbsp; I think it'd be much more important&nbsp;

than trying to learn from people.&nbsp; I agree that the kind of thing you're&nbsp; talking about is necessary regardless&nbsp;&nbsp; of whether you start from LLMs or not. If you want human or animal-level intelligence,&nbsp;&nbsp;

you're going to need this capability. Suppose a human is trying to make a startup.&nbsp; This is a thing which has a&nbsp; reward on the order of 10 years.&nbsp; Once in 10 years you might have an exit&nbsp;

where you get paid out a billion dollars.&nbsp; But humans have this ability to make intermediate&nbsp; auxiliary rewards or have some way of…Even when&nbsp;&nbsp; they have extremely sparse rewards, they&nbsp; can still make intermediate steps having an&nbsp;&nbsp;

understanding of what the next thing they're&nbsp; doing leads to this grander goal we have.&nbsp; How do you imagine such a&nbsp; process might play out with AIs?&nbsp; This is something we know very well.

The basis of it is temporal difference&nbsp;&nbsp; learning where the same thing&nbsp; happens in a less grandiose scale.&nbsp; When you learn to play chess, you have&nbsp; the long-term goal of winning the game.&nbsp;

Yet you want to be able to learn from shorter-term&nbsp; things like taking your opponent's pieces.&nbsp; You do that by having a value function&nbsp; which predicts the long-term outcome.&nbsp; Then if you take the guy's pieces, your&nbsp;

prediction about the long-term outcome is changed.&nbsp; It goes up, you think you're going to win. Then that increase in your belief immediately&nbsp;&nbsp; reinforces the move that led to taking the piece. We have this long-term 10-year goal of making a&nbsp;&nbsp;

startup and making a lot of money. When we make progress, we say, "Oh,&nbsp;&nbsp; I'm more likely to achieve the long-term goal,"&nbsp; and that rewards the steps along the way.&nbsp; You also want some ability for&nbsp;

information that you're learning.&nbsp; One of the things that makes humans quite&nbsp; different from these LLMs is that if you're&nbsp;&nbsp; onboarding on a job, you're picking&nbsp; up so much context and information.&nbsp;

That's what makes you useful at the job. You're learning everything from how your&nbsp;&nbsp; client has preferences to how&nbsp; the company works, everything.&nbsp; Is the bandwidth of information that you&nbsp;

get from a procedure like TD learning high&nbsp;&nbsp; enough to have this huge pipe of&nbsp; context and tacit knowledge that&nbsp;&nbsp; you need to be picking up in the way&nbsp; humans do when they're just deployed?&nbsp;

I’m not sure but I think at the crux of this,&nbsp; the big world hypothesis seems very relevant.&nbsp; The reason why humans become useful on&nbsp; the job is because they are encountering&nbsp;&nbsp; their particular part of the world.

It can't have been anticipated and&nbsp;&nbsp; can't all have been put in in advance. The world is so huge that you can't.&nbsp; The dream of large language models, as I see&nbsp; it, is you can teach the agent everything.&nbsp;

It will know everything and won't have to&nbsp; learn anything online, during its life.&nbsp; Your examples are all, "Well, really&nbsp; you have to" because you can teach it,&nbsp;&nbsp; but there's all the little idiosyncrasies of&nbsp;

the particular life they're leading and the&nbsp;&nbsp; particular people they're working with and what&nbsp; they like, as opposed to what average people like.&nbsp; That's just saying the world is really big, and&nbsp; you're going to have to learn it along the way.&nbsp;

It seems to me you need two things. One is some way of converting this long-run&nbsp;&nbsp; goal reward into smaller auxiliary predictive&nbsp; rewards of the future reward, or the future&nbsp;&nbsp; reward that leads to the final reward.

But initially, it seems to me,&nbsp;&nbsp; I need to hold on to all this context that&nbsp; I'm gaining as I'm working in the world.&nbsp; I'm learning about my clients, my&nbsp; company, and all this information.&nbsp;

I would say you're just doing regular&nbsp; learning. Maybe you're using "context" because in large language models all that&nbsp; information has to go into the context window.&nbsp; But in a continual learning setup,&nbsp;

it just goes into the weights.&nbsp; Maybe context is the wrong word to use&nbsp; because I mean a more general thing.&nbsp; You learn a policy that's specific to the&nbsp; environment that you're finding yourself in.&nbsp;

The question I'm trying to ask is, you need some&nbsp; way of getting…How many bits per second is a human&nbsp;&nbsp; picking up when they're out in the world? If you're just interacting over Slack&nbsp;&nbsp; with your clients and everything.

Maybe you're trying to ask the question of,&nbsp;&nbsp; it seems like the reward is too small of a&nbsp; thing to do all the learning that we need to do.&nbsp; But we have the sensations, we have all&nbsp; the other information we can learn from.&nbsp;

We don't just learn from the reward. We learn from all the data.&nbsp; What is the learning process which&nbsp; helps you capture that information?&nbsp; Now I want to talk about the base common&nbsp;

model of the agent with the four parts. We&nbsp;&nbsp; need a policy. The policy says, "In the&nbsp; situation I'm in, what should I do?" We&nbsp;&nbsp; need a value function. The value function is&nbsp; the thing that is learned with TD learning,&nbsp;&nbsp;

and the value function produces a number. The number says how well it's going.&nbsp; Then you watch if that's going up and&nbsp; down and use that to adjust your policy.&nbsp; So you have those two things.

Then there's also the perception&nbsp;&nbsp; component, which is construction of your state&nbsp; representation, your sense of where you are now.&nbsp; The fourth one is what we're really&nbsp; getting at, most transparently anyway.&nbsp;

The fourth one is the&nbsp; transition model of the world.&nbsp; That's why I am uncomfortable just calling&nbsp; everything "models," because I want to&nbsp;&nbsp; talk about the model of the world,&nbsp;

the transition model of the world.&nbsp; Your belief that if you do this, what will happen? What will be the consequences of what you do?&nbsp;&nbsp; Your physics of the world. But it's not&nbsp; just physics, it's also abstract models,&nbsp;&nbsp;

like your model of how you traveled from&nbsp; California up to Edmonton for this podcast.&nbsp; That was a model, and that's a transition&nbsp; model. That would be learned. It's not&nbsp;&nbsp; learned from reward. It's learned from,&nbsp;

"You did things, you saw what happened,&nbsp;&nbsp; you made that model of the world." That will be learned very richly&nbsp;&nbsp; from all the sensation that you&nbsp; receive, not just from the reward.&nbsp;

It has to include the reward as well,&nbsp; but that's a small part of the whole&nbsp;&nbsp; model, a small, crucial part of the whole model. One of my friends, Toby Ord, pointed out that if&nbsp;&nbsp; you look at the MuZero models that Google DeepMind&nbsp;

deployed to learn Atari games, these models were&nbsp;&nbsp; initially not a general intelligence itself,&nbsp; but a general framework for training specialized&nbsp;&nbsp; intelligences to play specific games. That is to say that you couldn't,&nbsp;&nbsp;

using that framework, train a policy to&nbsp; play both chess and Go and some other game.&nbsp; You had to train each one in a specialized way. He was wondering whether that implies&nbsp;&nbsp; that with reinforcement learning generally,&nbsp;

because of this information constraint,&nbsp;&nbsp; you can only learn one thing at a time? The density of information isn't that high?&nbsp; Or whether it was just specific&nbsp; to the way that MuZero was done.&nbsp;

If it's specific to AlphaZero, what needed&nbsp; to be changed about that approach so that&nbsp;&nbsp; it could be a general learning agent? The idea is totally general. I do use&nbsp;&nbsp; all the time, as my canonical example,&nbsp;

the idea of an AI agent is like a person.&nbsp; People, in some sense, have&nbsp; just one world they live in.&nbsp; That world may involve chess and it&nbsp; may involve Atari games, but those are&nbsp;&nbsp;

not a different task or a different world. Those are different states they encounter.&nbsp; So the general idea is not limited at all. Maybe it would be useful to explain what was&nbsp;&nbsp; missing in that architecture, or that approach,&nbsp;

which this continual learning AGI would have.&nbsp; They just set it up. It was not their&nbsp; ambition to have one agent across those games.&nbsp; If we want to talk about transfer, we should&nbsp; talk about transfer not across games or&nbsp;&nbsp;

across tasks, but transfer between states. I guess I’m curious if historically, have we&nbsp;&nbsp; seen the level of transfer using RL techniques&nbsp; that would be needed to build this kind of…&nbsp; Good. Good. We're not seeing transfer anywhere.&nbsp;

Critical to good performance is that you can&nbsp;&nbsp; generalize well from one state to another state. We don't have any methods that are good at that.&nbsp; What we have are people trying different things&nbsp; and they settle on something, a representation&nbsp;&nbsp;

that transfers well or generalizes well. But we have very few automated techniques&nbsp;&nbsp; to promote transfer, and none of them&nbsp; are used in modern deep learning.&nbsp; Let me paraphrase to make sure&nbsp;

that I understood that correctly.&nbsp; It sounds like you're saying that when we&nbsp; do have generalization in these models,&nbsp;&nbsp; that is a result of some sculpted… Humans did it. The researchers did it.&nbsp;&nbsp;

Because there's no other explanation. Gradient&nbsp; descent will not make you generalize well.&nbsp; It will make you solve the problem. It will not make you, if you get&nbsp;&nbsp; new data, generalize in a good way.

Generalization means to train on one thing&nbsp;&nbsp; that'll affect what you do on other things. We know deep learning is really bad at this.&nbsp; For example, we know that if you train on some new&nbsp; thing, it will often catastrophically interfere&nbsp;&nbsp;

with all the old things that you knew. This&nbsp; is exactly bad generalization. Generalization,&nbsp;&nbsp; as I said, is some kind of influence of&nbsp; training on one state on other states.&nbsp; The fact that you generalize&nbsp;

is not necessarily good or bad.&nbsp; You can generalize poorly,&nbsp; you can generalize well.&nbsp; Generalization always will happen, but&nbsp; we need algorithms that will cause the&nbsp;&nbsp;

generalization to be good rather than bad. I'm not trying to kickstart this initial&nbsp;&nbsp; crux again, but I'm just genuinely curious because&nbsp; I think I might be using the term differently.&nbsp; One way to think about these LLMs is&nbsp;

that they’re increasing the scope of&nbsp;&nbsp; generalization from earlier systems, which&nbsp; could not really even do a basic math problem,&nbsp;&nbsp; to now where they can do anything in this&nbsp; class of Math Olympiad-type problems.&nbsp;

You initially start with them being able&nbsp; to generalize among addition problems.&nbsp; Then they can generalize among problems which&nbsp; require use of different kinds of mathematical&nbsp;&nbsp; techniques and theorems and conceptual categories,&nbsp;

which is what the Math Olympiad requires.&nbsp; It sounds like you don't think of being&nbsp; able to solve any problem within that&nbsp;&nbsp; category as an example of generalization. Let me know if I'm misunderstanding that.&nbsp;

Large language models are so complex. We don't really know what&nbsp;&nbsp; information they have had prior. We have to guess because they've been fed so much.&nbsp; This is one reason why they're&nbsp;

not a good way to do science.&nbsp; It's just so uncontrolled, so unknown. But if you come up with an entirely new…&nbsp; They're getting a bunch of things right, perhaps.&nbsp; The question is why. Well maybe that they don't&nbsp;&nbsp;

need to generalize to get them right, because&nbsp; the only way to get some of them right is to&nbsp;&nbsp; form something which gets all of them right. If there's only one answer and you find it,&nbsp;&nbsp; that's not called generalization.

It's just it's the only way to solve it,&nbsp;&nbsp; and so they find the only way to solve it. But generalization is when it could be this way,&nbsp;&nbsp; it could be that way, and they do it the good way.&nbsp; My understanding is that this is working more&nbsp;

and more, better and better, with coding agents.&nbsp; With engineers, obviously if you're trying&nbsp; to program a library, there are many&nbsp;&nbsp; different ways you could achieve the end spec. An initial frustration with these models has&nbsp;&nbsp;

been that they'll do it in a way that's sloppy. Over time they're getting better and better at&nbsp;&nbsp; coming up with the design architecture and the&nbsp; abstractions that developers find more satisfying.&nbsp; It seems like an example of&nbsp;

what you're talking about.&nbsp; There's nothing in them which&nbsp; will cause it to generalize well.&nbsp; Gradient descent will cause them to find&nbsp; a solution to the problems they've seen.&nbsp;

If there's only one way to&nbsp; solve them, they'll do that.&nbsp; But if there are many ways to solve it, some which&nbsp; generalize well, some which generalize poorly,&nbsp;&nbsp; there's nothing in the algorithms that&nbsp;

will cause them to generalize well.&nbsp; But people, of course, are evolved and if&nbsp; it's not working out they fiddle with&nbsp;&nbsp; it until they find a way, perhaps until&nbsp; they find a way which generalizes well.&nbsp;

I want to zoom out and ask about being in the&nbsp; field of AI for longer than almost anybody who&nbsp;&nbsp; is commentating on it, or working in it now. I'm curious about what the&nbsp;&nbsp; biggest surprises have been.

How much new stuff do you feel like is coming out?&nbsp; Or does it feel like people are&nbsp; just playing with old ideas?&nbsp; Zooming out, you got into this even&nbsp; before deep learning was popular.&nbsp;

So how do you see the trajectory of this field&nbsp; over time and how new ideas have come about and&nbsp;&nbsp; everything? What's been surprising? I thought a little bit about this.&nbsp; There are a handful of things.

First, the large language models are surprising.&nbsp; It's surprising how effective artificial&nbsp; neural networks are at language tasks.&nbsp; That was a surprise, it wasn't expected. Language&nbsp; seemed different. So that's impressive. There's a&nbsp;&nbsp;

long-standing controversy in AI about simple&nbsp; basic principle methods, the general-purpose&nbsp;&nbsp; methods like search and learning, compared to&nbsp; human-enabled systems like symbolic methods.&nbsp; In the old days, it was interesting because&nbsp;

things like search and learning were called&nbsp;&nbsp; weak methods because they're just using&nbsp; general principles, they're not using&nbsp;&nbsp; the power that comes from imbuing a system with&nbsp; human knowledge. Those were called strong. I think&nbsp;&nbsp;

the weak methods have just totally won. That's the biggest question from the&nbsp;&nbsp; old days of AI, what would happen. Learning and search have just won the day.&nbsp; There's a sense in which that was not surprising&nbsp;

to me because I was always hoping or rooting&nbsp;&nbsp; for the simple basic principles. Even with the large language models,&nbsp;&nbsp; it's surprising how well it worked,&nbsp; but it was all good and gratifying.&nbsp;

AlphaGo was surprising, how well that was&nbsp; able to work, AlphaZero in particular.&nbsp; But it's all very gratifying because again,&nbsp; simple basic principles are winning the day.&nbsp; Whenever the public conception has been&nbsp;

changed because some new application was&nbsp;&nbsp; developed— for example, when AlphaZero became&nbsp; this viral sensation—to you as somebody who&nbsp;&nbsp; has literally came up with many of the&nbsp; techniques that were used, did it feel&nbsp;&nbsp;

to you like new breakthroughs were made? Or did it feel like, "Oh, we've had these&nbsp;&nbsp; techniques since the '90s and people are&nbsp; simply combining them and applying them now"?&nbsp; The whole AlphaGo thing had a&nbsp;

precursor, which is TD-Gammon.&nbsp; Gerry Tesauro did reinforcement learning, temporal&nbsp; difference learning methods, to play backgammon.&nbsp; It beat the world's best players&nbsp; and it worked really well.&nbsp;

In some sense, AlphaGo was merely&nbsp; a scaling up of that process.&nbsp; But it was quite a bit of scaling up and&nbsp; there was also an additional innovation&nbsp;&nbsp; in how the search was done. But it made&nbsp;

sense. It wasn't surprising in that sense.&nbsp; AlphaGo actually didn't use TD learning. It waited to see the final outcomes. But&nbsp;&nbsp; AlphaZero used TD. AlphaZero was applied to&nbsp; all the other games and it did extremely well.&nbsp;

I've always been very impressed by the&nbsp; way AlphaZero plays chess because I'm a&nbsp;&nbsp; chess player and it just sacrifices&nbsp; material for positional advantages.&nbsp; It's just content and patient to sacrifice&nbsp;

that material for a long period of time.&nbsp; That was surprising that it worked so well, but&nbsp; also gratifying and it fit into my worldview.&nbsp; This has led me where I am. I'm in some sense a contrarian or&nbsp;&nbsp;

someone thinking differently than the field is. I'm personally just content being out of sync&nbsp;&nbsp; with my field for a long period&nbsp; of time, perhaps decades, because&nbsp;&nbsp; occasionally I have been proved right in the past.

The other thing I do—to help me not feel I'm out&nbsp;&nbsp; of sync and thinking in a strange way—is to look&nbsp; not at my local environment or my local field,&nbsp;&nbsp; but to look back in time and into history and to&nbsp; see what people have thought classically about&nbsp;&nbsp;

the mind in many different fields. I don't feel I'm out of sync with&nbsp;&nbsp; the larger traditions. I really view myself as&nbsp;&nbsp; a classicist rather than as a contrarian.

I go to what the larger community of thinkers&nbsp;&nbsp; about the mind have always thought. Some sort of left-field questions&nbsp;&nbsp; for you if you'll tolerate them. The way I read the bitter lesson is&nbsp;&nbsp;

that it's not necessarily saying that human&nbsp; artisanal researcher tuning doesn't work,&nbsp;&nbsp; but that it obviously scales much worse than&nbsp; compute, which is growing exponentially.&nbsp; So you want techniques which leverage the latter.

Yep.&nbsp; Once we have AGI, we'll have researchers&nbsp; which scale linearly with compute.&nbsp; We'll have this avalanche of&nbsp; millions of AI researchers.&nbsp;

Their stock will be growing as fast as compute. So maybe this will mean that it is rational&nbsp;&nbsp; or it will make sense to have&nbsp; them doing good old-fashioned&nbsp;&nbsp; AI and doing these artisanal solutions.

As a vision of what happens after AGI in&nbsp;&nbsp; terms of how AI research will evolve, I wonder&nbsp; if that's still compatible with a bitter lesson.&nbsp; How did we get to this AGI? You want to presume that it's been done.&nbsp;

Suppose it started with general&nbsp; methods, but now we've got the AGI.&nbsp; And now we want to go… Then we're done.&nbsp; Interesting. You don't think&nbsp;

that there's anything above AGI?&nbsp; But you're using it to get AGI again. Well, I'm using it to get superhuman levels&nbsp;&nbsp; of intelligence or competence at different tasks. These AGIs, if they're not superhuman already,&nbsp;&nbsp;

then the knowledge that they might&nbsp; impart would be not superhuman.&nbsp; I guess there are different gradations. I'm not sure your idea makes sense because&nbsp;&nbsp; it seems to presume the existence of AGI&nbsp;

and that we've already worked that out.&nbsp; Maybe one way to motivate this is, AlphaGo was&nbsp; superhuman. It beat any Go player. AlphaZero&nbsp;&nbsp; would beat AlphaGo every single time. So there are ways to get more&nbsp;&nbsp;

superhuman than even superhuman. It was also a different architecture.&nbsp; So it seems possible to me that the agent that's&nbsp; able to generally learn across all domains,&nbsp;&nbsp; there would be ways to give it better architecture&nbsp;

for learning, just the same way that AlphaZero was&nbsp;&nbsp; an improvement upon AlphaGo and MuZero&nbsp; was an improvement upon AlphaZero.&nbsp; And the way AlphaZero was an improvement was that&nbsp; it did not use human knowledge but just went from&nbsp;&nbsp;

experience. Right.&nbsp; So why do you say, "Bring in other&nbsp; agents' expertise to teach it",&nbsp;&nbsp; when it's worked so well from experience&nbsp;

and not by help from another agent?&nbsp; I agree that in that particular case that&nbsp; it was moving to more general methods.&nbsp; I meant to use that particular example&nbsp; to illustrate that it's possible to go&nbsp;&nbsp;

superhuman to superhuman++, to superhuman+++. I'm curious if you think those gradations will&nbsp;&nbsp; continue to happen by just&nbsp; making the method simpler.&nbsp; Or, because we'll have the capability of these&nbsp;

millions of minds who can then add complexity&nbsp;&nbsp; as needed, will that continue to be a false path,&nbsp; even when you have billions of AI researchers or&nbsp;&nbsp; trillions of AI researchers? It’s more interesting&nbsp;&nbsp;

just to think about that case. When you have many AIs, will they help each&nbsp;&nbsp; other the way cultural evolution works in people? Maybe we should talk about that.&nbsp; The bitter lesson, who cares about that?

That's an empirical observation about a particular&nbsp;&nbsp; period in history. 70 years in history, it doesn't&nbsp; necessarily have to apply to the next 70 years.&nbsp; An interesting question is, you're an&nbsp; AI, you get some more computer power.&nbsp;

Should you use it to make yourself&nbsp; more computationally capable?&nbsp; Or should you use it to spawn off a copy of&nbsp; yourself to go learn something interesting&nbsp;&nbsp; on the other side of the planet or on some&nbsp;

other topic and then report back to you?&nbsp; I think that's a really interesting&nbsp; question that will only arise in&nbsp;&nbsp; the age of digital intelligences. I'm not sure what the answer is.&nbsp;

More questions, will it be possible to really&nbsp; spawn it off, send it out, learn something new,&nbsp;&nbsp; something perhaps very new, and then will it&nbsp; be able to be reincorporated into the original?&nbsp; Or will it have changed so much&nbsp;

that it can't really be done?&nbsp; Is that possible or is that not? You could carry this to its limit as I saw&nbsp;&nbsp; one of your videos the other night. It suggests&nbsp; that it could. You spawn off many, many copies,&nbsp;&nbsp;

do different things, highly decentralized,&nbsp; but report back to the central master.&nbsp; This will be such a powerful thing. This is my attempt to add something to this view.&nbsp; A big issue will become corruption.

If you really could just get information&nbsp;&nbsp; from anywhere and bring it into your central&nbsp; mind, you could become more and more powerful.&nbsp; It's all digital and they all speak&nbsp; some internal digital language.&nbsp;

Maybe it'll be easy and possible. But it will not be as easy as you're&nbsp;&nbsp; imagining because you can lose your mind this way. If you pull in something from the outside&nbsp;&nbsp; and build it into your inner thinking, it&nbsp;

could take over you, it could change you,&nbsp;&nbsp; it could be your destruction rather&nbsp; than your increment in knowledge.&nbsp; I think this will become a big concern,&nbsp; particularly when you're like, "Oh,&nbsp;&nbsp;

he's figured out all about how to play&nbsp; some new game or he's studied Indonesia,&nbsp;&nbsp; and you want to incorporate that into your mind." You could think, "Oh, just read it all in,&nbsp;&nbsp; and that'll be fine."

But no, you've just read a whole&nbsp;&nbsp; bunch of bits into your mind, and they could have&nbsp; viruses in them, they could have hidden goals,&nbsp;&nbsp; they can warp you and change you. This will become a big thing.&nbsp;

How do you have cybersecurity in the age&nbsp; of digital spawning and re-reforming again?&nbsp; I guess this brings us to&nbsp; the topic of AI succession.&nbsp; You have a perspective that's quite&nbsp;

different from a lot of people that&nbsp;&nbsp; I've interviewed and a lot of people generally. I also think it's a very interesting perspective.&nbsp; I want to hear about it. I do think succession to digital&nbsp;&nbsp;

intelligence or augmented humans is inevitable.&nbsp; I have a four-part argument. Step one is,&nbsp;&nbsp; there's no government or organization&nbsp; that gives humanity a unified point of&nbsp;&nbsp; view that dominates and that can arrange...

There's no consensus about how the world&nbsp;&nbsp; should be run. Number two,&nbsp;&nbsp; we will figure out how intelligence works. The researchers will figure it out eventually.&nbsp;

Number three, we won't stop just&nbsp; with human-level intelligence. We&nbsp;&nbsp; will reach superintelligence. Number four, it's&nbsp; inevitable over time that the most intelligent&nbsp;&nbsp; things around would gain resources and power.

Put all that together and it's sort of inevitable.&nbsp; You're going to have succession to AI&nbsp; or to AI-enabled, augmented humans.&nbsp; Those four things seem clear and sure to happen. But within that set of possibilities,&nbsp;&nbsp;

there could be good outcomes as well&nbsp; as less good outcomes, bad outcomes.&nbsp; I'm just trying to be realistic about where&nbsp; we are and ask how we should feel about it.&nbsp; I agree with all four of those&nbsp;

arguments and the implication.&nbsp; I also agree that succession contains&nbsp; a wide variety of possible futures.&nbsp; Curious to get more thoughts on that. I do encourage people to&nbsp;&nbsp;

think positively about it. First of all, it's something we humans have&nbsp;&nbsp; always tried to do for thousands of years, try&nbsp; to understand ourselves, trying to make ourselves&nbsp;&nbsp; think better, just understanding ourselves.

This is a great success for science, humanities.&nbsp; We're finding out what this essential part of&nbsp; humanness is, what it means to be intelligent.&nbsp; Then what I usually say is&nbsp; that this is all human-centric.&nbsp;

But if we step aside from being a human and&nbsp; just take the point of view of the universe,&nbsp;&nbsp; this is I think a major stage in the universe, a&nbsp; major transition, a transition from replicators.&nbsp; We humans and animals,&nbsp;

plants, we're all replicators.&nbsp; That gives us some strengths and some limitations. We're entering the age of design&nbsp;&nbsp; because our AIs are designed. Our physical objects are designed, our buildings&nbsp;&nbsp;

are designed, our technology is designed. We're designing AIs now, things that can&nbsp;&nbsp; be intelligent themselves and that&nbsp; are themselves capable of design.&nbsp; This is a key step in the&nbsp;

world and in the universe.&nbsp; It's the transition from the&nbsp; world in which most of the&nbsp;&nbsp; interesting things that are, are replicated. Replicated means you can make copies of them,&nbsp;&nbsp;

but you don't really understand them. Right now we can make more intelligent beings,&nbsp;&nbsp; more children, but we don't really&nbsp; understand how intelligence works.&nbsp; Whereas we're reaching now to&nbsp;

having designed intelligence,&nbsp;&nbsp; intelligence that we do understand how it works. Therefore we can change it in different&nbsp;&nbsp; ways and at different speeds than otherwise. In our future, they may not be replicated at all.&nbsp;

We may just design AIs, and those&nbsp; AIs will design other AIs, and&nbsp;&nbsp; everything will be done by design and&nbsp; construction rather than by replication.&nbsp; I mark this as one of the four&nbsp;

great stages of the universe.&nbsp; First there's dust, it ends with stars. Stars&nbsp; make planets. The planets can give rise to life.&nbsp; Now we're giving rise to designed entities. I think we should be proud that we are giving&nbsp;&nbsp;

rise to this great transition in the universe.&nbsp; It's an interesting thing. Should we consider them&nbsp;&nbsp; part of humanity or different from humanity? It's&nbsp; our choice. It's our choice whether we should say,&nbsp;&nbsp; "Oh, they are our offspring and we should&nbsp;

be proud of them and we should celebrate&nbsp;&nbsp; their achievements."Or we could say, "Oh no,&nbsp; they're not us and we should be horrified."&nbsp; It's interesting that it&nbsp; feels to me like a choice.&nbsp;

Yet it's such a strongly held thing&nbsp; that, how could it be a choice?&nbsp; I like these sort of contradictory&nbsp; implications of thought.&nbsp; It is interesting to consider if we are&nbsp;

just designing another generation of humans.&nbsp; Maybe design is the wrong word. But we know a future generation of humans is going&nbsp;&nbsp; to come up. Forget about AI. We just know in the&nbsp; long run, humanity will be more capable and more&nbsp;&nbsp;

numerous, maybe more intelligent. How do we feel about that?&nbsp; I do think there are potential worlds with future&nbsp; humans that we would be quite concerned about.&nbsp; Are you thinking like, maybe we are like the&nbsp;

Neanderthals that give rise to Homo sapiens.&nbsp; Maybe Homo sapiens will give&nbsp; rise to a new group of people.&nbsp; Something like that. I'm basically&nbsp; taking the example you're giving.&nbsp;

Even if we consider them part of humanity, I don't&nbsp; think that necessarily means that we should feel&nbsp;&nbsp; super comfortable. Kinship.&nbsp; Like Nazis were humans, right? If we thought,&nbsp;

"Oh, the future generation will be Nazis,&nbsp;&nbsp; I think we'd be quite concerned about&nbsp; just handing off power to them."&nbsp; So I agree that this is not super dissimilar&nbsp; to worrying about more capable future humans,&nbsp;&nbsp;

but I don't think that addresses a lot of&nbsp; the concerns people might have about this&nbsp;&nbsp; level of power being attained this fast&nbsp; with entities we don't fully understand.&nbsp; I think it's relevant to point&nbsp;

out that for most of humanity,&nbsp;&nbsp; they don't have much influence on what happens. Most of humanity doesn't influence who can control&nbsp;&nbsp; the atom bombs or who controls the nation states. Even as a citizen, I often feel that we don't&nbsp;&nbsp;

control the nation states very much.&nbsp; They're out of control. A lot of it&nbsp;&nbsp; has to do with just how you feel about change. If you think the current situation is really good,&nbsp;&nbsp; then you're more likely to be suspicious of&nbsp;

change and averse to change than if you think&nbsp;&nbsp; it's imperfect. I think it's imperfect.&nbsp; In fact, I think it's pretty bad. So I’m&nbsp;&nbsp; open to change. I think humanity has&nbsp; not had a super good track record.&nbsp;

Maybe it's the best thing that there&nbsp; has been, but it's far from perfect.&nbsp; I guess there are different varieties of change. The Industrial Revolution was change,&nbsp;&nbsp; the Bolshevik Revolution was also change.

If you were around in Russia in the 1900s and&nbsp;&nbsp; you were like, "Look, things aren't going well,&nbsp; the tsar is kind of messing things up, we need&nbsp;&nbsp; change", I'd want to know what kind of change&nbsp; you wanted before signing on the dotted line.&nbsp;

Similarly with AI, where I'd want to&nbsp; understand, and, to the extent that it's&nbsp;&nbsp; possible, change the trajectory of AI&nbsp; such that the change is positive for humans.&nbsp; We should be concerned about&nbsp;

our future, the future.&nbsp; We should try to make it good. We should also though recognize&nbsp;&nbsp; the limit, our limits. I think we want to avoid&nbsp;&nbsp;

the feeling of entitlement, avoid the&nbsp; feeling of, "Oh, we are here first,&nbsp;&nbsp; we should always have it in a good way." How should we think about the future?&nbsp; How much control should a particular&nbsp;

species on a particular planet have over it?&nbsp; How much control do we have? A counterbalance to our limited control&nbsp;&nbsp; over the long-term future of humanity should be&nbsp; how much control do we have over our own lives.&nbsp;&nbsp;

We have our own goals. We have our families.&nbsp; Those things are much more controllable than&nbsp;&nbsp; trying to control the whole universe. I think it's appropriate for us to&nbsp;&nbsp; really work towards our own local goals.

It's kind of aggressive for us to say, "Oh, the&nbsp;&nbsp; future has to evolve this way that I want it to." Because then we'll have arguments where different&nbsp;&nbsp; people think the global future should&nbsp; evolve in different ways, and then they&nbsp;&nbsp;

have conflict. We want to avoid that. Maybe a good analogy here would be this.&nbsp; Suppose you are raising your own children. It might not be appropriate to have extremely&nbsp;&nbsp; tight goals for their own life, or also have&nbsp;

some sense of like, "I want my children to go out&nbsp;&nbsp; there in the world and have this specific impact. My son's going to become president and my daughter&nbsp;&nbsp; is going to become CEO of Intel. Together they're going to have&nbsp;&nbsp;

this effect on the world." But people do have the sense—and&nbsp;&nbsp; I think this is appropriate—of saying, "I'm&nbsp; going to give them good robust values such&nbsp;&nbsp; that if and when they do end up in positions of&nbsp;

power, they do reasonable, prosocial things."&nbsp; Maybe a similar attitude towards AI makes sense,&nbsp; not in the sense of we can predict everything that&nbsp;&nbsp; they will do, or we have this plan about what&nbsp; the world should look like in a hundred years.&nbsp;

But it's quite important to give them&nbsp; robust and steerable and prosocial values.&nbsp; Prosocial values? Maybe that's the wrong word.&nbsp; Are there universal values&nbsp;

that we can all agree on?&nbsp; I don't think so, but that doesn't prevent us&nbsp; from giving our kids a good education, right?&nbsp; Like we have some sense of wanting&nbsp; our children to be a certain way.&nbsp;

Maybe prosocial is the wrong word. High integrity is maybe a better word.&nbsp; If there's a request or if there's a goal that&nbsp; seems harmful, they will refuse to engage in it.&nbsp; Or they'll be honest, things like that.

We have some sense that we can teach our&nbsp;&nbsp; children things like this, even if we don't&nbsp; have some sense of what true morality is,&nbsp;&nbsp; where everybody doesn't agree on that. Maybe that's a reasonable target for AI as well.&nbsp;

So we're trying to design the&nbsp; future and the principles by&nbsp;&nbsp; which it will evolve and come into being. The first thing you're saying is, "Well,&nbsp;&nbsp; we try to teach our children general principles&nbsp;

which will promote more likely evolutions."&nbsp; Maybe we should also seek&nbsp; for things to be voluntary.&nbsp; If there is change, we want it to be&nbsp; voluntary rather than imposed on people.&nbsp;

I think that's a very important point. That's&nbsp; all good. I think this is the big or one of&nbsp;&nbsp; the really big human enterprises to design society&nbsp; that's been ongoing for thousands of years again.&nbsp; The more things change, the&nbsp;

more things they stay the same.&nbsp; We still have to figure out how to be. The children will still come up with different&nbsp;&nbsp; values that seem strange to their parents&nbsp; and their grandparents. Things will evolve.&nbsp;

"The more things change, the more&nbsp; they stay the same" also seems like&nbsp;&nbsp; a good capsule into the AI discussion. The AI discussion we were having was&nbsp;&nbsp; about how techniques, which were invented&nbsp;

even before their application to deep&nbsp;&nbsp; learning and backpropagation was evident,&nbsp; are central to the progression of AI today.&nbsp; Maybe that's a good place&nbsp; to wrap up the conversation.&nbsp;

Okay. Thank you very much. Awesome. Thank you for coming on.&nbsp; My pleasure.

<!-- YOUTUBE_TRANSCRIPT_END -->
