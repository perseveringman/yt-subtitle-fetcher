---
archive_version: 2
source: "youtube"
source_type: "playlist"
video_id: "Wo95ob_s_NI"
title: "John Schulman (OpenAI Cofounder) — Reasoning, RLHF, & plan for 2027 AGI"
video_url: "https://www.youtube.com/watch?v=Wo95ob_s_NI"
channel_name: "Dwarkesh Patel"
channel_id: "UCXl4i9dYBrFOabk0xGmbkRA"
uploader_id: "@DwarkeshPatel"
published_at: "2024-05-15T14:27:12.000Z"
upload_date: "2024-05-15"
duration_seconds: 5750
duration_human: "1:35:50"
view_count: 188436
like_count: 3728
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-18T14:02:37.904Z"
---

# John Schulman (OpenAI Cofounder) — Reasoning, RLHF, & plan for 2027 AGI

## Video Summary
- source_type: playlist
- video_url: https://www.youtube.com/watch?v=Wo95ob_s_NI
- video_id: Wo95ob_s_NI
- channel_name: Dwarkesh Patel
- channel_id: UCXl4i9dYBrFOabk0xGmbkRA
- uploader_id: @DwarkeshPatel
- uploader_url: https://www.youtube.com/@DwarkeshPatel
- published_at: 2024-05-15T14:27:12.000Z
- upload_date: 2024-05-15
- duration: 1:35:50
- view_count: 188436
- like_count: 3728
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

John Schulman on how posttraining tames the shoggoth, and the nature of the progress to come...

𝐄𝐏𝐈𝐒𝐎𝐃𝐄 𝐋𝐈𝐍𝐊𝐒
* Apple Podcasts: https://podcasts.apple.com/us/podcast/john-schulman-openai-cofounder-reasoning-rlhf-plan/id1516093381?i=1000655679622
* Spotify: https://open.spotify.com/episode/1ivzHH9RWciXe4O1rKtldf?si=53503781e05f4d8f
* Transcript: https://www.dwarkeshpatel.com/p/john-schulman/
* Me on Twitter:  https://twitter.com/dwarkesh_sp/

𝐒𝐏𝐎𝐍𝐒𝐎𝐑
* CommandBar is an AI user assistant that any software product can embed to non-annoyingly assist, support, and unleash their users. Used by forward-thinking CX, product, growth, and marketing teams. Learn more at https://www.commandbar.com/

If you’re interested in advertising on the podcast, fill out this form: https://airtable.com/appxGOvFLDLP5dlzv/pagFVrbHRohW6F2bZ/form

𝐓𝐈𝐌𝐄𝐒𝐓𝐀𝐌𝐏𝐒
00:00:00 - Pre-training, post-training, and future capabilities
00:17:20 - Plan for AGI 2025
00:29:43 - Teaching models to reason
00:40:10 - The Road to ChatGPT
00:51:33 - What makes for a good RL researcher?
01:00:18 - Keeping humans in the loop
01:14:36 - State of research, plateaus, and moats

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

Today I have the pleasure to speak with John&nbsp; Schulman, who is one of the co-founders of OpenAI&nbsp;&nbsp; and leads the post-training team here. He also&nbsp; led the creation of ChatGPT and is the author&nbsp;&nbsp; of many of the most important and widely&nbsp;

cited papers in AI and RL, including PPO&nbsp;&nbsp; and many others. John, really excited to chat&nbsp; with you. Thanks for coming on the podcast. &nbsp; Thanks for having me on&nbsp;

the podcast. I'm a big fan. Thank you for saying that. Here’s my first&nbsp; question. We have these distinctions between&nbsp;&nbsp; pre-training and post-training. Let’s&nbsp; go beyond what is actually happening&nbsp;&nbsp;

in terms of loss function and training&nbsp; regimes. Taking a step back conceptually,&nbsp;&nbsp; what kind of thing is pre-training creating?&nbsp; What does post-training do on top of that? &nbsp;

In pre-training you're basically training to&nbsp; imitate all of the content on the Internet or on&nbsp;&nbsp; the web, including websites and code and so forth.&nbsp; So you get a model that can generate content that&nbsp;&nbsp; looks like random web pages from the Internet.&nbsp;

The model is also trained to maximize likelihood&nbsp;&nbsp; where it has to put a probability on everything. The objective is basically predicting the next&nbsp;&nbsp; token given the previous tokens. Tokens&nbsp; are like words, or parts of words. Since&nbsp;&nbsp;

the model has to put a probability on it—we're&nbsp; training to maximize log probability—it ends&nbsp;&nbsp; up being very calibrated. Not only can it&nbsp; generate all of the content of the web,&nbsp;&nbsp; it can also assign probabilities to everything.

The base model can effectively take on&nbsp;&nbsp; all of these different personas or generate&nbsp; all different kinds of content. When we do&nbsp;&nbsp; post-training, we're usually targeting a narrower&nbsp; range of behaviors where we want the model to&nbsp;&nbsp;

behave like a kind of chat assistant. It's a&nbsp; more specific persona where it's trying to be&nbsp;&nbsp; helpful. It's not trying to imitate a person.&nbsp; It's answering your questions or doing your&nbsp;&nbsp; tasks. We're optimizing on a different objective,&nbsp;

which is more about producing outputs that humans&nbsp;&nbsp; will like and find useful, as opposed to just&nbsp; imitating this raw content from the web. &nbsp; Maybe I should take a step back and ask this.&nbsp;

Right now we have these models that are pretty&nbsp;&nbsp; good at acting as chatbots. Taking a step&nbsp; back from how these processes work currently,&nbsp;&nbsp; what kinds of things will the models released by&nbsp; the end of the year be capable of doing? What do&nbsp;&nbsp;

you think the progress will look like if we carry&nbsp; everything forward for the next five years? &nbsp; The models will get quite a&nbsp; bit better in five years.

&nbsp; In what way? Even in one or two years,&nbsp;&nbsp; we'll find that the models can do a lot more&nbsp; involved tasks than they can do now. For example,&nbsp;&nbsp;

you could imagine having the models carry out a&nbsp; whole coding project instead of it giving you one&nbsp;&nbsp; suggestion on how to write a function. You could&nbsp; imagine the model taking high-level instructions&nbsp;&nbsp; on what to code and going out on its own,&nbsp;

writing any files, and testing it, and looking&nbsp;&nbsp; at the output. It might even iterate on that&nbsp; a bit. So just much more complex tasks. &nbsp; Fundamentally the unlock is that it can act&nbsp;

coherently for long enough to write multiple files&nbsp;&nbsp; of code? What has changed between now and then? I would say this will come from some combination&nbsp;&nbsp; of training the models to do harder tasks&nbsp; like this. Most of the training data is&nbsp;&nbsp;

more like doing single steps at a time.&nbsp; I would expect us to do more for training&nbsp;&nbsp; the models to carry out these longer projects. That’s for any kind of training, like doing RL,&nbsp;&nbsp; to learn how to do these tasks. Whether you're&nbsp;

supervising the final output or supervising it&nbsp;&nbsp; at each step, any kind of training at&nbsp; carrying out these long projects is&nbsp;&nbsp; going to make the models a lot better. Since the whole area is pretty new,&nbsp;&nbsp;

I'd say there's a lot of low-hanging fruit&nbsp; in doing this kind of training. That's one&nbsp;&nbsp; thing. I would also expect that as models get&nbsp; better, they get better at recovering from&nbsp;&nbsp; errors or dealing with edge cases. When things&nbsp;

go wrong, they’ll know how to recover from it.  &nbsp; The models will be more sample efficient. You&nbsp; won't have to collect a ton of data to teach&nbsp;&nbsp; them how to get back on track. Just a little&nbsp; bit of data or their generalization from other&nbsp;&nbsp;

abilities will allow them to get back on track.&nbsp; Current models might just get stuck and get lost. &nbsp; I want to understand specifically how&nbsp; the generalization helps you get back on&nbsp;&nbsp;

track. Can you say more about that? I'm not&nbsp; sure why those two concepts are connected. &nbsp; Right, they're not directly connected. You usually&nbsp; have a little bit of data that does everything.&nbsp;&nbsp;

If you collect a diverse data set, you're going&nbsp; to get a little bit of everything in it. If you&nbsp;&nbsp; have models that generalize really well—even from&nbsp; just a couple of examples of getting back on track&nbsp;&nbsp; or if in the pre-training data there are a couple&nbsp;

of examples of a model getting back on track—the&nbsp;&nbsp; model will be able to generalize from those&nbsp; other things it’s seen to the current situation.&nbsp; If you have models that are weaker, you might&nbsp; be able to get them to do almost anything with&nbsp;&nbsp;

enough data. But you might have to put a lot&nbsp; of effort into a particular domain or skill.  &nbsp; Whereas for a stronger model,&nbsp; it might just do the right thing&nbsp;&nbsp; without any training data or any effort.

Right now these models can work coherently&nbsp;&nbsp; for five minutes. We want them to be able to do&nbsp; tasks that a human would take an hour to do, then&nbsp;&nbsp; a week, then a month, and so forth. To get to each of these benchmarks,&nbsp;&nbsp;

is it going to be the case that each one takes&nbsp; 10X more compute, analogous to the current&nbsp;&nbsp; scaling laws for pre-training? Or is it going&nbsp; to be a much more streamlined process of just&nbsp;&nbsp; getting to that point where you're already more&nbsp;

sample efficient and you can just go straight to&nbsp;&nbsp; the years of carrying out tasks or something? At a high level, I would agree that longer-horizon&nbsp;&nbsp; tasks are going to require more model intelligence&nbsp; to do well. They are going to be more expensive to&nbsp;&nbsp;

train. I'm not sure I would expect a really&nbsp; clean scaling law unless you set it up in a&nbsp;&nbsp; very careful way, or design the experiment in a&nbsp; certain way. There might end up being some phase&nbsp;&nbsp; transitions where once you get to a certain&nbsp;

level you can deal with much longer tasks.&nbsp; For example, when people do planning for&nbsp; different timescales, I'm not sure they use&nbsp;&nbsp; completely different mechanisms. We probably&nbsp; use the same mental machinery thinking about&nbsp;&nbsp;

one month from now, one year from now, or a&nbsp; hundred years from now. We're not actually&nbsp;&nbsp; doing some kind of reinforcement learning&nbsp; where we need to worry about a discount factor&nbsp;&nbsp; that covers that timescale and so forth.

Using language, you can describe all of&nbsp;&nbsp; these different timescales and then you can do&nbsp; things like plan. In the moment you can try to&nbsp;&nbsp; make progress towards your goal, whether it's&nbsp; a month away or 10 years away. I don’t know if&nbsp;&nbsp;

it’s a phase transition but I might expect the&nbsp; same out of models where there might be some&nbsp;&nbsp; capabilities that work at multiple scales. Correct me if this is wrong. It seems like you’re&nbsp;&nbsp; implying that right now we have models that are on&nbsp;

a per token basis pretty smart. They might be as&nbsp;&nbsp; smart as the smartest humans on a per token basis.&nbsp; The thing that prevents them from being as useful&nbsp;&nbsp; as they could be is that five minutes from now,&nbsp; they're not going to be still writing your code in&nbsp;&nbsp;

a way that’s coherent and aligns with your broader&nbsp; goals you have for your project or something.&nbsp; If it's the case that once you start&nbsp; this long-horizon RL training regime&nbsp;&nbsp; it immediately unlocks your ability to be&nbsp;

coherent for longer periods of time, should&nbsp;&nbsp; we be predicting something that is human-level&nbsp; as soon as that regime is unlocked? If not,&nbsp;&nbsp; then what is remaining after we can plan for a&nbsp; year and execute projects that take that long?

&nbsp; It's not totally clear what we're going&nbsp; to see once we get into that regime or&nbsp;&nbsp; how fast progress will be. That's still uncertain.&nbsp; I wouldn't expect everything to be immediately&nbsp;&nbsp;

solved by doing any training like this. There'll&nbsp; be other miscellaneous deficits that the models&nbsp;&nbsp; have that cause them to get stuck or make worse&nbsp; decisions than humans. I don’t expect that this&nbsp;&nbsp; one little thing will unlock all capabilities.&nbsp;

But some improvement in the ability to do&nbsp;&nbsp; long-horizon tasks might go quite far. Would you say it's plausible? Does it seem&nbsp;&nbsp; quite likely that there will be other reasons why&nbsp; there might be bottlenecks? I'm also curious what&nbsp;&nbsp;

the nature of these bottlenecks might be. It has&nbsp; all these representations of pre-training. Now it&nbsp;&nbsp; can work coherently for a long period of time&nbsp; because of long-horizon RL. What's remaining? &nbsp;

Maybe there's some other experience that human&nbsp; experts bring to different tasks such as having&nbsp;&nbsp; taste or dealing with ambiguity better. If&nbsp; we want to do something like research I could&nbsp;&nbsp; imagine those considerations coming into&nbsp;

play. Obviously there are going to be&nbsp;&nbsp; mundane limitations around the affordances&nbsp; of the model and whether it can use UIs,&nbsp;&nbsp; interact with the physical world, or&nbsp; have access to things. So there might&nbsp;&nbsp;

be a lot of mundane barriers that&nbsp; are probably not going to last that&nbsp;&nbsp; long but would initially slow down progress. Let’s talk about the websites that are designed&nbsp;&nbsp; for these AIs. Once they’re trained on more&nbsp;

multimodal data, will they be in any way different&nbsp;&nbsp; from the ones we have for humans? What UIs will be&nbsp; needed? How will it compensate for their strengths&nbsp;&nbsp; and weaknesses? How would that look different&nbsp; from the current UIs we have for humans?

&nbsp; That's an interesting question. I expect that&nbsp; models will be able to use websites that are&nbsp;&nbsp; designed for humans just by using vision, after&nbsp; the vision capabilities get a bit better. So there&nbsp;&nbsp;

wouldn't be an immediate need to change them. On the other hand, there’ll be some websites that&nbsp;&nbsp; are going to benefit a lot from AIs being able to&nbsp; use them. We’ll probably want to design those to&nbsp;&nbsp; be better UXs for Ais. I'm not sure exactly what&nbsp;

that would mean. Assuming that our models are&nbsp;&nbsp; still better at text mode than reading text&nbsp; out of images, you'd probably want to have a&nbsp;&nbsp; good text-based representation for the models. You’d also want a good indication of what all&nbsp;&nbsp;

the things that can be interacted with are. But I&nbsp; wouldn't expect the web to get totally redesigned&nbsp;&nbsp; to have APIs everywhere. We can get models to&nbsp; use the same kind of UIs that humans use. &nbsp;

I guess that's been the big lesson of language&nbsp; models, right? That they can act within the&nbsp;&nbsp; similar affordances that humans do. I want to go back to the point you&nbsp;&nbsp; made earlier about how this process could&nbsp;

be more sample efficient because it could&nbsp;&nbsp; generalize from its pre-training experiences&nbsp; of how to get unstuck in different scenarios.&nbsp;&nbsp; What is the strongest evidence you’ve&nbsp; seen of this generalization and transfer?&nbsp;

The big question for the future abilities models&nbsp; seems to be about how much generalization is&nbsp;&nbsp; happening. Is there something that feels&nbsp; really compelling to you? Have you seen a&nbsp;&nbsp; model learn something that you wouldn't&nbsp;

expect it to learn from generalization? &nbsp; There have definitely been some interesting&nbsp; instances of generalization in post-training.&nbsp; One well-known phenomenon is that if you&nbsp;

do all your fine-tuning with English data,&nbsp;&nbsp; the model will automatically behave well&nbsp; in other languages. So if you train the&nbsp;&nbsp; assistant on English data, it'll also do something&nbsp; reasonable in Spanish. Sometimes you might get the&nbsp;&nbsp;

wrong behavior in terms of whether it replies&nbsp; in English or replies in Spanish. Usually you&nbsp;&nbsp; get the right behavior there, meaning you get it&nbsp; to respond in Spanish to Spanish queries. That's&nbsp;&nbsp; one interesting instance of generalization&nbsp;

where the model just latches onto the right,&nbsp;&nbsp; helpful persona and then automatically does&nbsp; the right thing in different languages.  &nbsp; We've seen some version of this with multimodal&nbsp; data where if you do text-only fine-tuning,&nbsp;&nbsp;

you also get reasonable behavior with images.&nbsp; Early on in ChatGPT we were trying to fix some&nbsp;&nbsp; issues with the model understanding its own&nbsp; limitations. Early versions of the model would&nbsp;&nbsp; think that it could send you an email or call&nbsp;

you an Uber or something. The model would try&nbsp;&nbsp; to play the assistant and it would say “oh yeah,&nbsp; of course I sent that email.” Obviously it didn't.&nbsp; So we started collecting some data to fix&nbsp; those problems. We found that a tiny amount&nbsp;&nbsp;

of data did the trick, even when you mixed&nbsp; it together with everything else. I don't&nbsp;&nbsp; remember exactly how many examples but something&nbsp; like 30 examples. We had a pretty small number&nbsp;&nbsp; of examples showing this general behavior,&nbsp;

explaining that the model doesn’t have this&nbsp;&nbsp; capability. That generalized pretty well to all&nbsp; sorts of capabilities we didn't train for. &nbsp; I still want to go back to this because I'm not&nbsp;

sure I understood. Let’s say you have this model&nbsp;&nbsp; that is trained to be coherent for longer&nbsp; periods of time. Setting aside these other&nbsp;&nbsp; bottlenecks which there may or may not be, by&nbsp; next could you have models that are potentially&nbsp;&nbsp;

like human-level? I’m thinking of a model that&nbsp; you’re interacting with like a colleague and it's&nbsp;&nbsp; as good as interacting with a human colleague.&nbsp; You can tell them to go do stuff and they go get&nbsp;&nbsp; it done. What seems wrong with that picture of&nbsp;

the capabilities you think might be possible? &nbsp; It's hard to say exactly what the deficit&nbsp; will be. When you talk to the models today,&nbsp;&nbsp; they have various weaknesses besides long-term&nbsp;

coherence. They also struggle to really think&nbsp;&nbsp; hard about things or pay attention to what&nbsp; you ask them. I wouldn't expect improving&nbsp;&nbsp; the coherence a little bit to be all it takes to&nbsp; get to AGI. I guess I can’t articulate exactly&nbsp;&nbsp;

what are the main weaknesses that will stop&nbsp; them from being a fully functional colleague. &nbsp; It seems like then, you should be planning for&nbsp; the possibility you would have AGI very soon.

&nbsp; I think that would be reasonable. So what's the plan if there's no&nbsp;&nbsp; other bottlenecks. In the next year or&nbsp; something, you’ve got AGI. What's the plan?

&nbsp; If AGI came way sooner than expected we&nbsp; would definitely want to be careful about&nbsp;&nbsp; it. We might want to slow down a little bit&nbsp; on training and deployment until we're pretty&nbsp;&nbsp;

sure we know we can deal with it safely. We&nbsp; would need a pretty good handle on what it's&nbsp;&nbsp; going to do and what it can do. We would&nbsp; have to be very careful if it happened way&nbsp;&nbsp; sooner than expected. Our understanding&nbsp;

is still rudimentary in a lot of ways. &nbsp; What would being careful mean? Presumably&nbsp; you're already careful, right? You do these&nbsp;&nbsp; evaluations before deploying.

Maybe it means not training the&nbsp;&nbsp; even smarter version or being really careful&nbsp; when you do train it. You can make sure it’s&nbsp;&nbsp; properly sandboxed and everything. Maybe&nbsp; it means not deploying it at scale or&nbsp;&nbsp;

being careful about what scale you deploy it at. Let's just play with a scenario. AGI happens next&nbsp;&nbsp; year. You're not training a smarter system but&nbsp; you're deploying it in a somewhat measured way.&nbsp;&nbsp; Presumably the development wouldn’t be particular&nbsp;

to OpenAI. AGI just turns out to be much easier&nbsp;&nbsp; than we expected and that’s why it happened.&nbsp; So you wait to deploy a little bit. Now other&nbsp;&nbsp; companies have a similar level of capabilities.&nbsp; What happens next? While you wait to deploy,&nbsp;&nbsp;

what are you waiting for? What is every&nbsp; company doing in this scenario? &nbsp; The game theory is a little tough&nbsp; to think through. First of all,&nbsp;&nbsp;

I don't think this is going to&nbsp; happen next year but it's still&nbsp;&nbsp; useful to have the conversation. It&nbsp; could be two or three years instead. &nbsp;

Two or three years is still pretty soon. It’s still pretty soon. You probably need&nbsp;&nbsp; some coordination. Everyone needs to agree&nbsp; on some reasonable limits to deployment or&nbsp;&nbsp; to further training for this to work.&nbsp;

Otherwise you have the race dynamics&nbsp;&nbsp; where everyone's always trying to stay ahead and&nbsp; that might require compromising safety. You would&nbsp;&nbsp; probably need some coordination among the larger&nbsp; entities that are doing this kind of training.

&nbsp; You'd be coordinating to pause&nbsp; deployment until what exactly? Until&nbsp;&nbsp; you figure out what's happening in the model? We could pause further training. We could pause&nbsp;&nbsp;

deployment. We could avoid certain types&nbsp; of training that might be riskier. We&nbsp;&nbsp; would set up some reasonable rules for what&nbsp; everyone should do to limit these things. &nbsp;

Limit to what end? At some point the potential&nbsp; energy that's within this intelligence will&nbsp;&nbsp; be unleashed. Suppose in two years we get&nbsp; the AGI. Now everybody's freaking out. The&nbsp;&nbsp; AI companies have paused. What would&nbsp;

be the thing we plan to wait until? &nbsp; I don't have a good answer to that. If we&nbsp; can coordinate like that, that would be a&nbsp;&nbsp; pretty good scenario. Building these models&nbsp;

is very capital intensive and there are a lot&nbsp;&nbsp; of complex pieces. It's not like everyone's&nbsp; going to go and recreate this stuff at home.&nbsp; Given the relatively small number of&nbsp; entities who could train the largest models,&nbsp;&nbsp;

it does seem possible to coordinate. I'm not&nbsp; sure how you would maintain this equilibrium for&nbsp;&nbsp; a long period of time, but I think if we got&nbsp; to that point we would be in an okay position. &nbsp;

Would we? I'm still curious because I'm&nbsp; not sure what happens next. Fundamentally,&nbsp;&nbsp; the benefit is that you push it to the server&nbsp; and now we have a bunch of intelligences,&nbsp;&nbsp; or they could push themselves to the server.&nbsp;

Now we’ve got everybody coordinated but I'm&nbsp;&nbsp; not sure what we do next in this world. Why&nbsp; does that set us up for a good outcome? &nbsp; If we had everyone reasonably coordinated and we&nbsp;

felt like we could solve the technical problems&nbsp;&nbsp; around alignment well enough then we could deploy.&nbsp; We would be able to deploy really smart AIs that&nbsp;&nbsp; can act as extensions of people's wills but also&nbsp; prevent them from being catastrophically misused.&nbsp;&nbsp;

That would be great. We could go ahead and&nbsp; safely deploy these systems and it would usher&nbsp;&nbsp; in a lot of prosperity and a much more rapid&nbsp; phase of scientific advancement. That would&nbsp;&nbsp; be what the good scenario would look like.

That makes sense. I’m curious about something&nbsp;&nbsp; down the road in a couple of years. In the&nbsp; best case scenario, all these actors have&nbsp;&nbsp; agreed to pause until we've figured out that we're&nbsp; building aligned systems that are not themselves&nbsp;&nbsp;

going to attempt a coup or not going to enable&nbsp; somebody else to do that. What would proof of that&nbsp;&nbsp; look like? What would evidence of that look like? If we can deploy systems that are incrementally&nbsp;&nbsp; that are successively smarter than the&nbsp;

ones before, that would be safer. I hope&nbsp;&nbsp; the way things play out is not a scenario where&nbsp; everyone has to coordinate, lock things down,&nbsp;&nbsp; and safely release things. That would lead&nbsp; to this big buildup in potential energy.&nbsp;

I would rather have a scenario where we're all&nbsp; continually releasing things that are a little&nbsp;&nbsp; better than what came before. We’d be doing&nbsp; this while making sure we’re confident that&nbsp;&nbsp; each diff improves on safety and alignment in&nbsp;

correspondence to the improvement in capability.&nbsp;&nbsp; If things started to look a little bit&nbsp; scary, then we would be able to slow&nbsp;&nbsp; things down. That's what I would hope for. If there's more of a discontinuous jump,&nbsp;&nbsp;

there’s a question of “how do you know if the&nbsp; thing you've got is safe to release”. I can't&nbsp;&nbsp; give a generic answer. However, the type of thing&nbsp; you might want to do to make that more acceptable&nbsp;&nbsp; would be a lot of testing simulated deployment,&nbsp;

red teaming of sorts. You'd want to do that in a&nbsp;&nbsp; way that is much more likely to fail than the&nbsp; thing you’re planning to do in the real world.&nbsp; You'd want to have a really good monitoring system&nbsp; so that if something does start to go wrong with&nbsp;&nbsp;

the deployed system, you can immediately detect&nbsp; it. Maybe you've got something watching over&nbsp;&nbsp; the deployed AIs, watching what they're&nbsp; doing, and looking for signs of trouble.  &nbsp; You’d want some defense in depth. You'd want&nbsp;

some combination of “the model itself seems to be&nbsp;&nbsp; really well-behaved with impeccable, moral&nbsp; confidence in everything” and “I’m pretty&nbsp;&nbsp; confident that it’s extremely resistant to any&nbsp; kind of severe misuse.” You'd also want really&nbsp;&nbsp;

good monitoring on top of it so you could&nbsp; detect any kind of unforeseen trouble. &nbsp; What are you keeping track of while&nbsp; you're doing long-horizon RL or when&nbsp;&nbsp;

you eventually start doing it? How could&nbsp; you notice this sort of discontinuous jump&nbsp;&nbsp; before you deployed these systems broadly? You would want to have a lot of evals that&nbsp;&nbsp; you're running during the training process.

What specifically? Does it make sense to train on&nbsp;&nbsp; a long-horizon RL knowing that this is something&nbsp; that could happen? Or is it just a very low&nbsp;&nbsp; possibility? How do you think about this? You'd want to be pretty careful when you&nbsp;&nbsp;

do this kind of training if you see a&nbsp; lot of potentially scary capabilities.&nbsp;&nbsp; I would say it's not something we have to be&nbsp; scared of right now because right now it's&nbsp;&nbsp; hard to get the models to do anything coherent.

If they started to get really good, we would&nbsp;&nbsp; want to take some of these questions seriously.&nbsp; We would want to have a lot of evals that test&nbsp;&nbsp; them for misbehavior, mostly for the alignment&nbsp; of the models. We'd want to check that they’re&nbsp;&nbsp;

not going to turn against us or something. You&nbsp; might also want to look for discontinuous jumps&nbsp;&nbsp; in capabilities. You'd want to have lots of&nbsp; evals for the capabilities of the models.&nbsp; You'd also want to make sure that whatever&nbsp;

you're training on doesn't have any reason to&nbsp;&nbsp; make the model turn against you. That doesn't&nbsp; seem like the hardest thing to do. The way we&nbsp;&nbsp; train them with RLHF, that does feel very&nbsp; safe even though the models are very smart.&nbsp;&nbsp;

The model is just trying to produce a message&nbsp; that is pleasing to a human. It has no concern&nbsp;&nbsp; about anything else in the world other than&nbsp; whether the text it produces is approved.  &nbsp; Obviously if you were doing something where&nbsp;

the model has to carry out a long sequence&nbsp;&nbsp; of actions which involve tools, then it&nbsp; might have some incentive to do a lot of&nbsp;&nbsp; wacky things that wouldn't make sense to a&nbsp; human in the process of producing its final&nbsp;&nbsp;

result. However, it wouldn't necessarily have&nbsp; an incentive to do anything other than produce&nbsp;&nbsp; a very high quality output at the end. There are old points about instrumental&nbsp;&nbsp; convergence where the model wants to take over&nbsp;

the world so it can produce some awesome piece&nbsp;&nbsp; of code at the end. If you ask it to write&nbsp; you a Flask app, it'll be like “oh yeah,&nbsp;&nbsp; first I need to take over the world. At a&nbsp; certain point it's a little hard to imagine&nbsp;&nbsp;

why for fairly well specified tasks like coding&nbsp; an app, you would want to first take over the&nbsp;&nbsp; world. Of course if you assigned a task such as&nbsp; “make money,” then maybe that would lead to some&nbsp;&nbsp; nefarious behavior as an instrumental goal.

Before we get back to that, let's step back&nbsp;&nbsp; and talk about today’s RLHF systems and&nbsp; everything. I do want to follow up on that&nbsp;&nbsp; point because it is interesting. With today's RLHF and the way in which&nbsp;&nbsp;

it influences these models, how would&nbsp; you characterize it in terms of human&nbsp;&nbsp; psychology? Is it a drive? Is it a goal? Is&nbsp; it an impulse? Psychologically, what kind of&nbsp;&nbsp; thing is it? In what way is it being changed?

Not simply the persona of a chatbot but “don't&nbsp;&nbsp; talk that way, talk this other way” or&nbsp; “don’t put out those kinds of outputs.” &nbsp; There are probably some analogies&nbsp;

with a drive or a goal in humans.&nbsp;&nbsp; You're trying to steer towards a certain&nbsp; set of states rather than some other&nbsp;&nbsp; states. I would think that our concept&nbsp; of a drive or a goal has other elements,&nbsp;&nbsp;

such as the feeling of satisfaction you get for&nbsp; achieving it. Those things have more to do with&nbsp;&nbsp; the learning algorithm than what the model does&nbsp; at runtime when you just have a fixed model.&nbsp; There are probably some analogies though I don't&nbsp;

know exactly how close it is. To some extent,&nbsp;&nbsp; the models do have drives and goals in&nbsp; some meaningful way. In the case of RLHF&nbsp;&nbsp; where you're trying to maximize human&nbsp; approval as measured by a reward model,&nbsp;&nbsp;

the model is just trying to produce something that&nbsp; people are going to like and judge as correct. &nbsp; I’ve heard two ideas in terms of using that&nbsp; internal monologue to get better at reasoning.&nbsp;&nbsp;

At least publicly, I've seen two ideas and I'm&nbsp; curious which one you think is more promising.&nbsp; One is that the model learns from its outputs&nbsp; over a bunch of potential trains of thought,&nbsp;&nbsp; and it learns to follow the one that leads&nbsp;

to the correct answer. It is then trained&nbsp;&nbsp; on that before deployment. The other one is&nbsp; you use a bunch of compute to do inference&nbsp;&nbsp; in deployment. This approach involves the&nbsp; model talking to itself while it's deployed.&nbsp;

Which one do you expect to be closer to the way&nbsp; a model has been trained when it gets really good&nbsp;&nbsp; at reasoning? Is it because it's doing just a&nbsp; bunch of inference clouds? Is it just because&nbsp;&nbsp; you've trained it to do well at that?

You could define reasoning as tasks that&nbsp;&nbsp; require some kind of computation at test time&nbsp; or maybe some kind of deduction. By definition,&nbsp;&nbsp; reasoning would be tasks that require some test&nbsp; time computation and step-by-step computation.&nbsp;&nbsp;

On the other hand, I would also expect to&nbsp; gain a lot from doing practice at training&nbsp;&nbsp; Right now, you have these two ways the&nbsp; model learns. One is in training, whether&nbsp;&nbsp; it's pre-training or post-training. Most of the&nbsp;

compute in training is spent on pre-training,&nbsp;&nbsp; glossing over trillions of tokens, skimming&nbsp; trillions of tokens worth of information.&nbsp;&nbsp; If a human was subjected to that, they&nbsp; would just be totally confused. It's&nbsp;&nbsp;

just not a very efficient way to learn. The other way is in-context learning.&nbsp;&nbsp; Of course that is more sample-efficient,&nbsp; but it's destroyed with each instance.&nbsp; I'm curious if you think that there's&nbsp;

a path for something in between those,&nbsp;&nbsp; where it’s not destroyed at each instance but it's&nbsp; also not as frivolous as just seeing trillions of&nbsp;&nbsp; tokens. Something more deliberate and active. Do you mean models having some kind of medium-term&nbsp;&nbsp;

memory? Too much to fit in context but&nbsp; much smaller scale than pre-training? &nbsp; It might be memory. I don't have context.&nbsp; Certainly when I'm trying to prepare for&nbsp;&nbsp;

this conversation, I think of what I&nbsp; should understand, read it carefully,&nbsp;&nbsp; and maybe think about it as I’m reading it. I’m&nbsp; not sure what it naturally corresponds to in&nbsp;&nbsp; terms of models. What would that look like?

I see. So it’s not just memory but it’s also&nbsp;&nbsp; somewhat specializing to a certain task or putting&nbsp; a lot of effort into some particular project. &nbsp; I'm not even sure if it's specialization.&nbsp;

It’s more so “I don't understand this part,&nbsp;&nbsp; so let me look into it more deeply. I&nbsp; already understand this.” I guess it’s&nbsp;&nbsp; specializing to your existing knowledge base. I see. So it's not just about training on a bunch&nbsp;&nbsp;

of sources that are relevant and fine-tuning&nbsp; on some special domain. It's also about&nbsp;&nbsp; reasoning and developing some knowledge&nbsp; through your own reasoning and using some&nbsp;&nbsp; sort of introspection or self-knowledge&nbsp;

to figure out what it needs to learn? &nbsp; Yeah. That does feel like something that's missing&nbsp;&nbsp; from today's systems. People haven't really pushed&nbsp;

too hard on this middle ground between large-scale&nbsp;&nbsp; training—where you produce a single snapshot model&nbsp; that's supposed to do everything like a deployed&nbsp;&nbsp; model—and on the other hand in-context learning. Part of that is that we've just been increasing&nbsp;&nbsp;

context length so much that there hasn't&nbsp; been an incentive for it. If you can go&nbsp;&nbsp; to a hundred thousand or a million context,&nbsp; then that's actually quite a lot. It’s not&nbsp;&nbsp; actually the bottleneck in a lot of cases.

I agree that you'd probably also want to&nbsp;&nbsp; supplement that with some kind of fine-tuning.&nbsp; The capabilities you get from fine-tuning and&nbsp;&nbsp; in-context learning are probably somewhat&nbsp; complementary. I’d expect us to want to build&nbsp;&nbsp;

systems that do some online learning and also&nbsp; have some cognitive skills, like introspecting&nbsp;&nbsp; on their own knowledge and seeking out&nbsp; new knowledge that fills in the holes. &nbsp;

Is this all happening at the same time?&nbsp; Is it just a new training regime where&nbsp;&nbsp; all these things can happen at once, whether&nbsp; it’s long-horizon or this kind of training?&nbsp; Are they separate or not? Is the model smart&nbsp;

enough to both introspect and act on longer&nbsp;&nbsp; horizons so that you get adequate&nbsp; reward on the long-horizon tasks? &nbsp; If you're doing some kind of long-horizon task,&nbsp;

you're learning while you do the task, right?  &nbsp; The only way to do something that involves a lot&nbsp; of steps is to have learning and memory that gets&nbsp;&nbsp; updated during the task. There’s a continuum&nbsp; between short-term and long-term memory.&nbsp;

I expect the need for this capability would start&nbsp; to become clear when we start to look more at&nbsp;&nbsp; long-horizon tasks. To some extent, putting a&nbsp; lot of stuff into context will take you pretty&nbsp;&nbsp; far because we have really long context now.&nbsp;

You probably also want things like fine-tuning.&nbsp; As for introspection and the ability to do active&nbsp; learning, that might automatically fall out of&nbsp;&nbsp; the models’ abilities to know what they know.&nbsp; Models do have some calibration regarding what&nbsp;&nbsp;

they know. That's why models don't hallucinate&nbsp; that badly. They have some understanding of&nbsp;&nbsp; their own limitations. That same kind of ability&nbsp; could be used for something like active learning. There are all these complicated RL procedures,&nbsp;

many of which you've pioneered. How many of them&nbsp;&nbsp; will be relevant when you get to the point where&nbsp; the model itself is smart enough to act as its&nbsp;&nbsp; own environment and interact in a more online&nbsp; and stable way? Is the path for progress going&nbsp;&nbsp;

to be more straightforward than the kinds of&nbsp; solutions that were required for RL in the past? I think policy grading algorithms are not&nbsp; the most sample efficient algorithms. So&nbsp;&nbsp; that's probably not what you want to do&nbsp;

at test time if you want to learn really&nbsp;&nbsp; fast. But who knows? Maybe it's not that bad.&nbsp; I think motor learning in animals is probably&nbsp;&nbsp; something like a policy grading algorithm. For example, let’s say you're learning how&nbsp;&nbsp;

to shoot baskets. That probably takes&nbsp; thousands of tries to get more accurate.&nbsp;&nbsp; There's probably something like a policy grading&nbsp; algorithm underneath. That’s not going to be&nbsp;&nbsp; the fastest way to learn if you have a model&nbsp;

trying to do a project or some kind of task.&nbsp; We would want to rely more on in-context learning&nbsp; where you effectively have a learned algorithm.&nbsp;&nbsp; It’s learned how to explore. It’s learned&nbsp; how to try all the possibilities exhaustively&nbsp;&nbsp;

instead of doing the same thing over and&nbsp; over again and making the same mistake.&nbsp;&nbsp; We'll be able to do things that look more like&nbsp; learned search algorithms. That'll be the kind&nbsp;&nbsp; of thing that gets used in a particular task.

Interesting. I want to step back and ask about&nbsp;&nbsp; your own history, at least at OpenAI. You&nbsp; led the creation of ChatGPT. At what point&nbsp;&nbsp; did you realize that these LLMs are the path to&nbsp; go? When did you realize a chatbot or some way&nbsp;&nbsp;

to instruct them would be useful? Just walk me&nbsp; through the whole lineage from when this became&nbsp;&nbsp; your main focus and what the process was like. Before ChatGPT, OpenAI had these instruction&nbsp;&nbsp; following models. The idea there was that we&nbsp;

had base models that people could prompt them&nbsp;&nbsp; in elaborate ways. But they were also hard to&nbsp; prompt. They basically do autocomplete so you had&nbsp;&nbsp; to set up a very good prompt with some examples. People at OpenAI were working on just taking the&nbsp;&nbsp;

base models and making them easier to prompt. So&nbsp; if you just wrote a question it would answer the&nbsp;&nbsp; question, instead of giving you more questions or&nbsp; something. So we had these instruction following&nbsp;&nbsp; models, which were like base models but a&nbsp;

little easier to use. Those are the original&nbsp;&nbsp; ones deployed in the API. Or after GPT-3,&nbsp; those were the next generation of models.&nbsp; At the same time there were definitely a lot&nbsp; of people thinking about chat. Google had some&nbsp;&nbsp;

papers like LaMDA and earlier, Meena. They&nbsp; had these chatbots. It was more like a base&nbsp;&nbsp; model that was really specialized to the&nbsp; task of chat. It was really good at chat.&nbsp;&nbsp; Looking at the examples from the paper, it&nbsp;

was more used for fun applications where the&nbsp;&nbsp; model would take on some persona and pretend&nbsp; to be that persona. It was not so functional&nbsp;&nbsp; where it could help me refactor my code. So there were definitely people thinking&nbsp;&nbsp;

about chat. I had worked before on a&nbsp; project looking at chat called WebGPT,&nbsp;&nbsp; which was more about doing question answering with&nbsp; the help of web browsing and retrieval. When you&nbsp;&nbsp; do question answering, it really wants to be in a&nbsp;

chat. You always want to ask follow-up questions&nbsp;&nbsp; or sometimes the model should ask a clarifying&nbsp; question because the question is ambiguous.  &nbsp; It was clear after we did the first version, that&nbsp; the next version should be conversational. So we&nbsp;&nbsp;

started working on the conversational chat&nbsp; assistant. This was built on top of GPT-3.5,&nbsp;&nbsp; which was done training at the beginning of&nbsp; 2022. That model was quite good at language&nbsp;&nbsp; and code.  We quickly realized that it was&nbsp;

actually quite good at coding help. That was&nbsp;&nbsp; one of the things we were excited about. We worked on that for most of the year.&nbsp;&nbsp; We had browsing as another feature in&nbsp; it although we ended up deemphasizing&nbsp;&nbsp;

that later on because the model's internal&nbsp; knowledge was so good. The browsing wasn't&nbsp;&nbsp; the most interesting thing about it. We had it&nbsp; out to friends and family for a while and we&nbsp;&nbsp; were thinking about doing a public release.

Actually, GPT-4 finished training in August&nbsp;&nbsp; that year. The flagship RL effort at OpenAI was&nbsp; the instruction following effort because those&nbsp;&nbsp; were the models that were being deployed into&nbsp; production. The first fine-tunes of GPT-4 used&nbsp;&nbsp;

that whole stack. Those models were really&nbsp; good and everyone got really excited about&nbsp;&nbsp; that after seeing the instruct fine tune GPT-4s. They were really good. They would occasionally&nbsp;&nbsp; give you amazing outputs, but the model&nbsp;

was clearly also pretty unreliable. It&nbsp;&nbsp; would sometimes hallucinate it a lot. It&nbsp; would sometimes give you pretty unhinged&nbsp;&nbsp; outputs. So it was clearly not quite ready for&nbsp; prime time, but it was obviously very good.&nbsp;

People forgot about chat for a little while&nbsp; after that, this alternative branch. We pushed&nbsp;&nbsp; it further and we ended up mixing together all the&nbsp; datasets, the instruct and the chat data, to try&nbsp;&nbsp; to get something that was the best of both worlds.&nbsp;

The chat models were clearly easier to use.&nbsp; It automatically had much more sensible behavior&nbsp; in terms of the model knowing its own limitations.&nbsp;&nbsp; That was actually one of the things that I&nbsp; got excited about as we were developing it.&nbsp;&nbsp;

I realized a lot of the things that people&nbsp; thought were flaws in language models, like&nbsp;&nbsp; blatant hallucination, could be not completely&nbsp; fixed but things that you could make a lot of&nbsp;&nbsp; progress on with pretty straightforward methods.

The other thing about chat was when we had these&nbsp;&nbsp; instruct models. The task of “complete this text,&nbsp; but in a nice or helpful way” is a pretty poorly&nbsp;&nbsp; defined task. That task is both confusing for the&nbsp; model and for the human who's supposed to do the&nbsp;&nbsp;

data labeling. Whereas for chat, people had an&nbsp; intuitive sense of what a helpful robot should&nbsp;&nbsp; be like. So it was just much easier for people to&nbsp; get an idea of what the model was supposed to do.&nbsp;&nbsp; As a result, the model had a much more&nbsp;

coherent personality and it was much easier&nbsp;&nbsp; to get pretty sensible behavior robustly. Interesting. Is it the case that anybody&nbsp;&nbsp; could have made ChatGPT using your&nbsp; publicly available fine-tuning API?

&nbsp; Not exactly. I don't remember which models&nbsp; were available for fine-tuning. Assuming we&nbsp;&nbsp; had 3.5 available for fine-tuning at the time, you&nbsp; could have made something decently close. I don't&nbsp;&nbsp;

think you would have been able to do just one&nbsp; iteration of fine-tuning with purely human-written&nbsp;&nbsp; data. You'd want to do several iterations. If not you're not going to do RL, which we did,&nbsp;&nbsp; you’d want some kind of iterative supervised&nbsp;

fine-tuning where humans edit the model-generated&nbsp;&nbsp; outputs. If you train on human-generated&nbsp; data, even if it’s really high quality,&nbsp;&nbsp; it’s just hard for a model to fit that data&nbsp; perfectly because it might be something a model&nbsp;&nbsp;

is capable of outputting. You need to do something&nbsp; iterative that looks a bit more like RL. If you’d&nbsp;&nbsp; done that, you could have gotten pretty&nbsp; close but it would have been non-trivial.&nbsp; We also had another instruction-following&nbsp;

model trained with RL, released a little&nbsp;&nbsp; before ChatGPT. If you put a chat wrapper&nbsp; on that you would’ve gotten decently close&nbsp;&nbsp; but that model had some differences in&nbsp; strengths. That model was good at writing&nbsp;&nbsp;

and poetry but it wasn’t as good at knowing&nbsp; its limitations, factuality, and so forth. &nbsp; Stepping back from 3.5, I think I heard&nbsp; you say somewhere that you were super&nbsp;&nbsp;

impressed with GPT-2. Compared to your&nbsp; expectations in 2019, has AI progressed&nbsp;&nbsp; faster or slower than you would have expected? Faster than I expected since GPT-2. I was pretty&nbsp;&nbsp; bought into scaling and pre-training being a good&nbsp;

idea. But when GPT-2 was done, I wasn't completely&nbsp;&nbsp; sold on it being revolutionizing everything. It&nbsp; was really after GPT-3 that I pivoted what I was&nbsp;&nbsp; working on and what my team was working on. After&nbsp; that, we got together and said, "oh yeah, let's&nbsp;&nbsp;

see what we can do here with this language model&nbsp; stuff." But after GPT-2, I wasn't quite sure yet. &nbsp; Let’s say the stuff we were talking about&nbsp; earlier with RL starts working better with&nbsp;&nbsp;

these smarter models. Does the fraction&nbsp; of compute that is spent on pre-training&nbsp;&nbsp; versus post-training change significantly&nbsp; in favor of post-training in the future? &nbsp;

There are some arguments for that.&nbsp; Right now it's a pretty lopsided ratio.&nbsp;&nbsp; You could argue that the output generated&nbsp; by the model is higher quality than most of&nbsp;&nbsp; what's on the web. So it makes more sense for&nbsp;

the model to think by itself rather than just&nbsp;&nbsp; training to imitate what's on the web. So I think&nbsp; there's a first principles argument for that.&nbsp; We found a lot of gains through post-training.&nbsp; So I would expect us to keep pushing this&nbsp;&nbsp;

methodology and probably increasing&nbsp; the amount of compute we put into it. &nbsp; The current GPT-4 has an Elo score that is like&nbsp; a hundred points higher than the original one&nbsp;&nbsp;

that was released. Is that all because of what&nbsp; you're talking about, with these improvements&nbsp;&nbsp; that are brought on by post-training? Yeah, most of that is post-training.&nbsp;&nbsp; There are a lot of different,&nbsp;

separate axes for improvement.  &nbsp; We think about data quality, data quantity.&nbsp; There’s just doing more iterations of the&nbsp;&nbsp; whole process of deploying and collecting&nbsp; new data. There’s also changing what kind&nbsp;&nbsp;

of annotations you're collecting. There's a lot&nbsp; of things that stack up but together they give&nbsp;&nbsp; you a pretty good effective compute increase. That's a huge increase. It's really interesting&nbsp;&nbsp; that there's this much room for&nbsp;

improvement from post-training.&nbsp; What makes for somebody who's really good at&nbsp; doing this sort of RL research? I hear it's super&nbsp;&nbsp; finicky. What is the sort of intuition that you&nbsp; have that enables you to find these ways to mess&nbsp;&nbsp;

with the data and set up these environments? I have a decent amount of experience at this&nbsp;&nbsp; point from the different parts of the stack,&nbsp; from RL algorithms, which I've worked on since&nbsp;&nbsp; grad school, to data collection, annotation&nbsp;

processes, and playing with language models.&nbsp; I'd say I've dabbled with these things and the&nbsp; people who do well at this kind of research have&nbsp;&nbsp; some view of the whole stack and have a lot&nbsp; of curiosity about the different parts of it.&nbsp;&nbsp;

You want to be both empirical and let experiments&nbsp; update your views, but you also want to think from&nbsp;&nbsp; first principles. Assuming that learning works,&nbsp; what would be the ideal type of data to collect?&nbsp;&nbsp; That type of thing.

Because there doesn't&nbsp;&nbsp; seem to be a model since GPT-4 that seems to be&nbsp; significantly better, there's a hypothesis that&nbsp;&nbsp; we might be hitting some sort of plateau. These&nbsp; models aren't actually generalizing that well,&nbsp;&nbsp;

and you're going to hit a data wall beyond&nbsp; which the abilities unlocked by memorizing a&nbsp;&nbsp; vast corpus of pre-training data won't help&nbsp; you get something much smarter than GPT-4.&nbsp; Do you think that hypothesis is wrong? We've&nbsp;

talked about some examples of generalization,&nbsp;&nbsp; like Spanish to English. One example I think of is&nbsp; the transfer from code to reasoning in language.&nbsp;&nbsp; If you train on a bunch of code, it gets better at&nbsp; reasoning in language? Is that actually the case?&nbsp;

Do you see positive transfer between different&nbsp; modalities? If you train on a bunch of videos&nbsp;&nbsp; and images, it'll get smarter from synthetic data?&nbsp; Or does it seem like the abilities unlocked are&nbsp;&nbsp; extremely local to the exact kind of labels&nbsp;

and data you put into the training corpus? &nbsp; I'll try to respond to all that.&nbsp; First, are we about to hit the&nbsp;&nbsp; data wall? I wouldn't draw too much from the&nbsp;

time since GPT-4 was released because it does&nbsp;&nbsp; take a while to train these models and do all&nbsp; the prep to train a new generation of models.&nbsp; I wouldn't draw too much from that fact. There&nbsp; are definitely some challenges from the limited&nbsp;&nbsp;

amount of data, but I wouldn't expect us&nbsp; to immediately hit the data wall. However,&nbsp;&nbsp; I would expect the nature of pre-training to&nbsp; somewhat change over time as we get closer to it.&nbsp; In terms of generalization from different types&nbsp;

of pre-training data, I would say it's pretty hard&nbsp;&nbsp; to do science on this type of question because&nbsp; you can't create that many pre-trained models.&nbsp;&nbsp; Maybe you can't train a GPT-4 sized model and&nbsp; do ablation studies at that scale. Maybe you&nbsp;&nbsp;

can train a ton of GPT-2 size models or even&nbsp; a GPT-3 size model with different data blends&nbsp;&nbsp; and see what you get. I'm not aware of any&nbsp; public results on ablations involving code&nbsp;&nbsp; data and reasoning performance and so forth. I'd&nbsp;

be very interested to know about those results. &nbsp; I'm curious about something. One of the things&nbsp; is that the model gets smarter as it gets&nbsp;&nbsp; bigger. Would an ablation on a GPT-2 level model,&nbsp;

which suggests that there isn't much transfer,&nbsp;&nbsp; provide evidence for the level of transfer on a&nbsp; similar set of domains in a GPT-4 level model? &nbsp; Right, you might not be able to conclude that&nbsp;

if transfer fails at GPT-2 size, then it's&nbsp;&nbsp; also going to fail at a higher scale. It might&nbsp; be that for the larger models, you learn better&nbsp;&nbsp; shared representations, whereas the smaller models&nbsp; have to lean too much on memorization. The larger&nbsp;&nbsp;

models can learn how to do the right computation.&nbsp; I would expect this to be true to some extent. &nbsp; This might have a very simple answer. You&nbsp; train bigger models on the same amount of data&nbsp;&nbsp;

and they become smarter. Or to get the same&nbsp; level of intelligence, you only have to train&nbsp;&nbsp; them on less data. Why is that the case?&nbsp; It's got more parameters, seen fewer things,&nbsp;&nbsp; and now it's equally as smart. Why is that?

I don't think anyone has a good explanation&nbsp;&nbsp; for the scaling law with parameter count.&nbsp; I don't even know what the best mental&nbsp;&nbsp; model is for this. Clearly, you have more&nbsp; capacity if you have a bigger model. So you&nbsp;&nbsp;

should eventually be able to get lower loss. Why are bigger models more sample efficient?&nbsp;&nbsp; I can give you a sketchy explanation. You could&nbsp; say that the model is an ensemble of different&nbsp;&nbsp; circuits that do the computation. You could&nbsp;

imagine that it's doing computations in parallel&nbsp;&nbsp; and the output is a weighted combination of them.&nbsp; If you have more width… actually width is somewhat&nbsp;&nbsp; similar to depth because with residual networks,&nbsp; depth can do something similar to width in&nbsp;&nbsp;

terms of updating what's in the residual stream. You're learning all these different computations&nbsp;&nbsp; in parallel and you have more of them with a&nbsp; bigger model. So you have a higher chance that&nbsp;&nbsp; one of them is lucky, ends up guessing&nbsp;

correctly a lot, and gets upweighted.&nbsp; There are some algorithms that work this way,&nbsp; like mixture models or multiplicative weight&nbsp;&nbsp; update algorithms, where you have—I don’t&nbsp; want to say mixture of experts because it&nbsp;&nbsp;

means something different—basically a weighted&nbsp; combination of experts with some learned gating.&nbsp; I actually said something slightly wrong,&nbsp; but you could imagine something like that.&nbsp;&nbsp; Just having a bigger model gives you&nbsp;

more chances to get the right function.&nbsp; Of course, it's not just totally disjoint&nbsp; functions you're taking a linear combination&nbsp;&nbsp; of. It's more like a library where you might&nbsp; chain the functions together in some way.&nbsp;&nbsp;

There's some composability. So I would say a&nbsp; bigger model has a bigger library of different&nbsp;&nbsp; computations, including lots of stuff that's&nbsp; dormant and only being used some of the time,&nbsp;&nbsp; but it has more space to look for&nbsp;

circuits to do something useful. &nbsp; Stepping back from the current research questions,&nbsp; I want to understand your modal scenario of what&nbsp;&nbsp; happens for the next few years. Towards the&nbsp;

beginning of the conversation, we were talking&nbsp;&nbsp; about the case in which it progresses really&nbsp; fast, but let's just take the modal scenario.&nbsp; You're unlocking long-horizon RL&nbsp; at some point, but as you said,&nbsp;&nbsp;

there are potentially other bottlenecks. What's&nbsp; happening? How good are these models? How are&nbsp;&nbsp; they being deployed? What other modalities are&nbsp; part of them and at what stage are these being&nbsp;&nbsp; unlocked? I want to understand your broader&nbsp;

picture of what the next few years look like. &nbsp; I would expect new modalities to be added&nbsp; over time or pretty soon. I would expect the&nbsp;&nbsp; capabilities to generally keep getting better&nbsp;

through a combination of pre-training and&nbsp;&nbsp; post-training, and that'll open up new use cases. Right now, AI is still not a huge part of the&nbsp;&nbsp; economy. There's a pretty small fraction of&nbsp; jobs that it can help with at all. I'd expect&nbsp;&nbsp;

that to be higher over time, not just from the&nbsp; models improving but also from people figuring&nbsp;&nbsp; out how to integrate them into different&nbsp; processes. So even if we just froze the&nbsp;&nbsp; models at their current state, you would still&nbsp;

see a lot of growth in how they're being used.&nbsp; I would expect AI to be used much more widely&nbsp; and for more technically sophisticated tasks.&nbsp;&nbsp; I gave the programming example earlier, doing&nbsp; longer projects, but also helping with various&nbsp;&nbsp;

kinds of research. I hope that we can use&nbsp; AI to accelerate science in various ways,&nbsp;&nbsp; because you can potentially have the models&nbsp; understand all the literature in a given field&nbsp;&nbsp; and be able to sift through tons of data. It’s&nbsp;

more than a person would have patience to do.&nbsp; I hope the form factor would be such that people&nbsp; are still driving all of this and you have your&nbsp;&nbsp; helpful assistants that you can direct and&nbsp; point to lots of different problems that are&nbsp;&nbsp;

useful to you. Everyone would have all these&nbsp; AIs helping them do more and get more done. &nbsp; Obviously at some point they're going to be&nbsp; better than everyone at whatever they want to&nbsp;&nbsp;

do. What would that process look like? Right now,&nbsp; they're clearly only helping you. At some point,&nbsp;&nbsp; they’ll be able to just do things for you and&nbsp; maybe run entire firms for you. Is it going to&nbsp;&nbsp; be a smooth process? At that point, is the&nbsp;

hope that we have systems that are aligned&nbsp;&nbsp; with the user enough that they can count on&nbsp; the firm being run in the way they expect. &nbsp; We might not want to jump to having AIs run whole&nbsp;

firms immediately. We might want to have people&nbsp;&nbsp; overseeing these important decisions and calling&nbsp; the shots, even if the models are good enough to&nbsp;&nbsp; actually run a successful business themselves.&nbsp; To some extent, there might be choices there.&nbsp;

I think people will still have different interests&nbsp; and ideas for what kind of interesting pursuits&nbsp;&nbsp; they want to direct their AIs at. AI doesn't&nbsp; necessarily have any kind of intrinsic desire,&nbsp;&nbsp; unless we put it in the system. So&nbsp;

even if AIs become extremely capable,&nbsp;&nbsp; I would hope that people are still the&nbsp; drivers of what the AIs end up doing. &nbsp; I wonder if the economic equilibrium is so&nbsp;

far from that, where you have the equivalent&nbsp;&nbsp; of Amdahl's law in a firm. The slowest part of the&nbsp; process is the one that's going to bottleneck you.&nbsp; Even if AI makes all the non-human&nbsp; parts of the firm 10X more efficient,&nbsp;&nbsp;

the firm is still bottlenecked by that step.&nbsp; If one company decides to proceed by keeping&nbsp;&nbsp; humans in the loop on all the things that you&nbsp; really want human oversight on, then they'll&nbsp;&nbsp; just be outcompeted by other companies. If&nbsp;

one country decides to go this route, other&nbsp;&nbsp; countries will beat it. I wonder if this is a&nbsp; sustainable plan for keeping humans in the loop. &nbsp; If we wanted to keep humans in the loop,&nbsp;

which seems reasonable, and it turned&nbsp;&nbsp; out that firms with any humans in the loop were&nbsp; outcompeted by firms that didn't have any humans,&nbsp;&nbsp; then you would obviously need some kind&nbsp; of regulation that disallowed having no&nbsp;&nbsp;

humans in the loop for running a whole company. But there are so many companies in any country,&nbsp;&nbsp; let alone the world. I wonder if it's&nbsp; better to do the regulation on companies&nbsp;&nbsp; and say you've got to keep humans in the&nbsp;

loop in important processes, but then you&nbsp;&nbsp; have to define what important processes are. You've got to monitor every single company&nbsp;&nbsp; and you also have to get collaboration&nbsp; from every single country which has&nbsp;&nbsp;

firms. If this is a problem, should it be&nbsp; solved before the model is even deployed,&nbsp;&nbsp; such that hopefully if you did decide to&nbsp; build a firm and depend on these models,&nbsp;&nbsp; it basically does what you want it to do&nbsp;

and you don't need a human in the loop?&nbsp; Does that question make sense? I'm&nbsp; just wondering, in this situation,&nbsp;&nbsp; how do we actually monitor every single&nbsp; firm to ensure a human is in the loop? And&nbsp;&nbsp;

what happens if China doesn't decide to do that? You would either have to have every country agree&nbsp;&nbsp; to this regulatory regime, or you would need&nbsp; all of the model infrastructure or the model&nbsp;&nbsp; providers to agree to this kind of requirement.

It's definitely going to be non-trivial. This&nbsp;&nbsp; is looking a ways ahead, so it's a little hard to&nbsp; imagine this world before seeing anything like it.&nbsp; For example, are we actually confident that AI-run&nbsp; companies are better in every way. Do we think&nbsp;&nbsp;

they're better most of the time, but occasionally&nbsp; they malfunction because AIs are still less&nbsp;&nbsp; sample efficient in certain ways? Consider when&nbsp; they have to deal with very wacky situations.&nbsp; AI-run firms might actually have higher tail risk&nbsp;

because they're more likely to malfunction in a&nbsp;&nbsp; big way. There might be some practical questions&nbsp; like that that would determine how things play&nbsp;&nbsp; out. Maybe if you just require people to&nbsp; be accountable for various liabilities,&nbsp;&nbsp;

this would also change the incentives a bit. Let’s say it turned out that AIs are better&nbsp;&nbsp; at running everything and they're also&nbsp; completely benevolent. Let’s say we've&nbsp;&nbsp; totally solved alignment, and they're better&nbsp;

at being accountable to people than people&nbsp;&nbsp; are. Then maybe it's okay having the AIs&nbsp; run the firms. But that's pretty far out.&nbsp; We're more likely to be in a situation where they&nbsp; look better in the short term, but they still have&nbsp;&nbsp;

some serious problems. It's actually practical&nbsp; considerations that push you more towards having&nbsp;&nbsp; humans in the loop, at least for the near future. So this is a problem we have to deal with today&nbsp;&nbsp; with RLHF. You have to aggregate preferences&nbsp;

across a lot of different humans. It'll be maybe&nbsp;&nbsp; more marked with future, more powerful systems.&nbsp; But when you say we want these eventual AI systems&nbsp;&nbsp; that are going to fully replace humans as part of&nbsp; these firms to be aligned, what does that mean?&nbsp;

Will it mean that they basically do what the&nbsp; user wants them to do? Does it mean that they&nbsp;&nbsp; have to result in some sort of global outcome&nbsp; that we're happy with as the stakeholders in&nbsp;&nbsp; OpenAI? Concretely, what would that mean?

If the models are being used for these higher&nbsp;&nbsp; stakes use cases, then we would have to&nbsp; think about RLHF in a much different way&nbsp;&nbsp; than we are right now.We're not quite ready&nbsp; for that or the current methods might not be&nbsp;&nbsp;

completely sufficient. We would need to make&nbsp; compromises between the needs of the different&nbsp;&nbsp; stakeholders involved. We have this document&nbsp; that we're releasing called the Model Spec.&nbsp;&nbsp; It's about how we want our models&nbsp;

to behave in the API and in ChatGPT.&nbsp; We try to talk about this issue where there are&nbsp; different stakeholders involved and sometimes&nbsp;&nbsp; there are conflicts between what they might&nbsp; want. In our case, we were thinking of the&nbsp;&nbsp;

stakeholders as the end user (someone sitting in&nbsp; front of ChatGPT or some other app), the developer&nbsp;&nbsp; (someone using the API who might be serving other&nbsp; end users with their app), the platform (OpenAI,&nbsp;&nbsp; we don't want the models to expose us to legal&nbsp;

risk), and the rest of humanity (including&nbsp;&nbsp; people not part of the users or customers). Obviously, the user might ask the model to&nbsp;&nbsp; do something that we think is actively harmful to&nbsp; other people. We might have to refuse that. By the&nbsp;&nbsp;

way, this isn't the order of priority necessarily.&nbsp; These are just the four or so classes of&nbsp;&nbsp; stakeholder. Actually, you could maybe also say in&nbsp; the future, the model itself. We're not there yet.&nbsp; Anyway, we have these different stakeholders.&nbsp;

Sometimes they have conflicting demands. We&nbsp;&nbsp; have to make some call on how to resolve those&nbsp; conflicts.It's not always obvious how to do&nbsp;&nbsp; that. We had to think through the trade-offs and&nbsp; basically the rough heuristic is that we mostly&nbsp;&nbsp;

want the models to follow your instructions&nbsp; and be helpful to the user and the developer.&nbsp; But when this impinges on other people's happiness&nbsp; or way of life, this becomes a problem and we have&nbsp;&nbsp; to block certain kinds of usage. We mostly want&nbsp;

the models to just be an extension of people's&nbsp;&nbsp; will and do what they say. We don't want to be&nbsp; too paternalistic. We want to be neutral and&nbsp;&nbsp; not impose our opinions on people. We mostly want&nbsp; to let people do what they want with the models.

&nbsp; I got a chance to read the Spec beforehand.&nbsp; This is a question of how well that transfers&nbsp;&nbsp; over to how the model itself behaves. I was&nbsp; impressed with how sensible the trade-offs&nbsp;&nbsp;

were. I believe the actual edge cases were&nbsp; explicitly stated rather than the kinds&nbsp;&nbsp; of things where are obvious. In this case,&nbsp; you really are going after the edge cases. &nbsp;

We wanted it to be very actionable so&nbsp; that it wasn't just a bunch of nice&nbsp;&nbsp; sounding principles. Each example tells&nbsp; you something about some non-obvious&nbsp;&nbsp; situation and reasons through that situation.

I have a couple of questions about the state&nbsp;&nbsp; of the research itself. Famously in the social&nbsp; sciences, things are really hard to replicate.&nbsp;&nbsp; There’s a question about how much of the&nbsp; science there is real versus these manufactured,&nbsp;&nbsp;

bespoke sorts of experiments. When you&nbsp; look at the average ML paper, does it&nbsp;&nbsp; feel like a really solid piece of literature&nbsp; or does it often feel like the equivalent of&nbsp;&nbsp; what p-hacking is in the social sciences?

Everyone has their complaints about the ML&nbsp;&nbsp; literature. Overall, I think it's a relatively&nbsp; healthy field especially compared to some others&nbsp;&nbsp; like in the social sciences. It's largely grounded&nbsp; in practicality and getting things to work. If you&nbsp;&nbsp;

publish something that can't be replicated&nbsp; easily, people will just forget about it.&nbsp; It's accepted that often you don't just report&nbsp; someone's number from their paper. You also try&nbsp;&nbsp; to reimplement their method and compare it&nbsp;

to your method on the same training dataset.&nbsp;&nbsp; If you publish methods that are really&nbsp; hard to implement or are really finicky,&nbsp;&nbsp; they'll tend to get forgotten. As a result, people actually try&nbsp;&nbsp;

to open source their work a lot. There are&nbsp; also various unfavorable incentives. People&nbsp;&nbsp; are incentivized to make the baseline methods&nbsp; they're comparing to worse. There are other&nbsp;&nbsp; mild pathologies, like trying to make your&nbsp;

methods seem sophisticated mathematically.&nbsp; But overall, I feel like the field makes progress.&nbsp; I would like to see a little bit more science and&nbsp;&nbsp; trying to understand things rather than just hill&nbsp; climbing on benchmarks and trying to propose new&nbsp;&nbsp;

methods. There's been a decent amount of that&nbsp; recently. We could use more of that. I think&nbsp;&nbsp; that's a good thing for academics to work on. On a slightly different note, I'd be really&nbsp;&nbsp; excited to see more research on using base models&nbsp;

to do simulated social science. These models have&nbsp;&nbsp; a probabilistic model of the whole world and&nbsp; you can set up a simulated questionnaire or&nbsp;&nbsp; conversation and look at how anything is&nbsp; correlated. Any traits that you might imagine,&nbsp;&nbsp;

you can see how they might be&nbsp; correlated with other traits.&nbsp; It'd be pretty cool to see if people&nbsp; could replicate some of the more notable&nbsp;&nbsp; results in social science, like moral&nbsp;

foundations and that sort of thing,&nbsp;&nbsp; by just prompting base models in different&nbsp; ways and seeing what's correlated. &nbsp; What is that Stanford experiment?&nbsp;

The Asch conformity test? It'd be&nbsp;&nbsp; fun if that replicated with the language&nbsp; models as well. It's very interesting.&nbsp; I want to ask about the rest of the research&nbsp; that happens at big labs. How much of it is&nbsp;&nbsp;

increasing or decreasing the amount of&nbsp; compute you need to get a certain result&nbsp;&nbsp; as an actual compute multiplier versus how&nbsp; much of it is just making the learning more&nbsp;&nbsp; stable and building out the infrastructure?

The broader question I'm trying to ask is,&nbsp;&nbsp; since GPT-4, does it feel like with the same&nbsp; amount of compute, you can train a much better&nbsp;&nbsp; model? Or does it feel like you’ve made sure&nbsp; that learning can happen better and in a more&nbsp;&nbsp;

scalable way with GPT-5, but it's not like we&nbsp; can train GPT-4 with GPT-3.5's budget now? &nbsp; There's definitely always progress in improving&nbsp; efficiency. Whenever you have a 1D performance&nbsp;&nbsp;

metric, you're going to find that different&nbsp; improvements can substitute for each other.&nbsp;&nbsp; You might find that post-training and pre-training&nbsp; both improve the metrics. They'll have a slightly&nbsp;&nbsp; different profile of which metrics they improve.

But at the end of the day, if you have a single&nbsp;&nbsp; number, they're both going to substitute&nbsp; for each other somewhat. For something&nbsp;&nbsp; like a human evaluation, what do humans&nbsp; prefer, we've definitely made a lot of&nbsp;&nbsp;

progress on both sides, pre-training&nbsp; and post-training, in improving that. &nbsp; A couple of rapid-fire questions about&nbsp; RLHF. Obviously, RLHF is important to&nbsp;&nbsp;

make these models useful. So maybe the&nbsp; "lobotomized" description is inaccurate.&nbsp; However, there is a sense in which all of these&nbsp; models, once they're put in a chatbot form,&nbsp;&nbsp; have a very similar way of speaking. They really&nbsp;

want to “delve” into things. They want to turn&nbsp;&nbsp; things into bullet points. They often seem&nbsp; to have this formal and dull way of speaking.&nbsp; There are complaints that they're not as&nbsp; creative. Like we were talking about before,&nbsp;&nbsp;

they could only do rhyming poetry and not&nbsp; non-rhyming poetry until recently. Is that a&nbsp;&nbsp; result of the particular way in which RLHF happens&nbsp; now? If so, is it because of who the raters are?&nbsp;&nbsp; Is it because of what the loss function&nbsp;

is? Why is this the way all chatbots look? &nbsp; I would say there's a decent amount of room for&nbsp; variation in exactly how you do the training&nbsp;&nbsp; process. We're actively trying to improve&nbsp;

this and make the writing more lively and&nbsp;&nbsp; fun. We've made some progress like improving&nbsp; the personality of ChatGPT. It is more fun&nbsp;&nbsp; and it's better when you're trying to chit&nbsp; chat with it and so forth. It's less robotic.&nbsp;

It's an interesting question how some of the&nbsp; ticks came about, like the word "delve." I've&nbsp;&nbsp; actually caught myself using that word recently. I&nbsp; don't know if it rubbed off on me from the model.&nbsp; Actually, there might also be some funny effects&nbsp;

going on where there's unintentional distillation&nbsp;&nbsp; happening between the language model and&nbsp; providers. If you hire someone to go do a labeling&nbsp;&nbsp; task, they might just be feeding it into a model.&nbsp; They might be pulling up their favorite chatbot,&nbsp;&nbsp;

feeding it in, having the model do the task,&nbsp; and then copying and pasting it back. So that&nbsp;&nbsp; might account for some of the convergence. Some of the things we're seeing are just what&nbsp;&nbsp; people like. People do like bullet points. They&nbsp;

like structured responses. People do often like&nbsp;&nbsp; the big info dumps that they get from the models. So it's not completely clear how much is just a&nbsp;&nbsp; quirk of the particular choices and design of the&nbsp; post-training processes, and how much is actually&nbsp;&nbsp;

intrinsic to what people actually want. It does seem persistently more verbose than&nbsp;&nbsp; some people want. Maybe it’s just because&nbsp; during the labeling stage, the raters will&nbsp;&nbsp; prefer the more verbose answer. I wonder if it's&nbsp;

inherent because of how it's pre-trained and the&nbsp;&nbsp; stop sequence doesn't come up that often&nbsp; and it really wants to just keep going. &nbsp; There might be some biases in the labeling&nbsp;

that lead to verbosity. There’s the fact&nbsp;&nbsp; that we tend to train for one message at a&nbsp; time rather than the full interaction. If you&nbsp;&nbsp; only see one message, then something&nbsp; that just has a clarifying question,&nbsp;&nbsp;

or maybe a short response with an invitation&nbsp; to follow up, is going to look less complete&nbsp;&nbsp; than something that covers all possibilities. There's also a question of whether people's&nbsp;&nbsp; preferences would change depending on how fast&nbsp;

the model is streaming its output. Clearly,&nbsp;&nbsp; if you're sitting there waiting for the tokens&nbsp; to come out, you're going to prefer that it gets&nbsp;&nbsp; to the point. But if it just gives you a dump&nbsp; of text instantly, maybe you don't actually&nbsp;&nbsp;

care if there's a bunch of boilerplate or&nbsp; if there's a bunch of stuff you're going&nbsp;&nbsp; to skim. You'd rather just have it all there. The reward model is such an interesting artifact&nbsp;&nbsp; because it's the closest thing we have to&nbsp;

an aggregation of what people want and what&nbsp;&nbsp; preferences they have. I’m thinking&nbsp; about models that are much smarter.&nbsp;&nbsp; One hope is that you could just give it a list of&nbsp; things we want that are not trivial and obvious,&nbsp;&nbsp;

something like the UN Declaration of Human Rights. On the other hand, I think I heard you make the&nbsp;&nbsp; point that a lot of our preferences and values&nbsp; are very subtle, so they might be best represented&nbsp;&nbsp; through pairwise preferences. When you think&nbsp;

of a GPT-6 or GPT-7 level model, are we giving&nbsp;&nbsp; it more written instructions or are we still&nbsp; doing these sorts of subliminal preferences? &nbsp; That's a good question. These preference&nbsp;

models do learn a lot of subtleties about&nbsp;&nbsp; what people prefer that would be hard&nbsp; to articulate in an instruction manual.&nbsp;&nbsp; Obviously, you can write an instruction manual&nbsp; that has lots of examples of comparisons. That's&nbsp;&nbsp;

what the Model Spec has. It has a lot of examples&nbsp; with some explanations. It's not clear what the&nbsp;&nbsp; optimal format is for describing preferences. I would guess that whatever you can get out of&nbsp;&nbsp; a big dataset that captures fuzzy preferences,&nbsp;

you can distill it down to a shorter document&nbsp;&nbsp; that mostly captures the ideas. The bigger models&nbsp; do learn a lot of these concepts automatically of&nbsp;&nbsp; what people might find useful and helpful.&nbsp; They'll have some complex moral theories&nbsp;&nbsp;

that they can latch onto. Of course, there's&nbsp; still a lot of room to latch onto a different&nbsp;&nbsp; style or a different morality. So if we were to write a doc,&nbsp;&nbsp; if we're going to align these models, what&nbsp;

we're doing is latching onto a specific style,&nbsp;&nbsp; a specific morality. You still need a decently&nbsp; long document to capture exactly what you want. &nbsp; How much of a moat is better post-training?&nbsp;

Companies distinguish themselves currently by&nbsp;&nbsp; how big their model is and so forth. Will it&nbsp; be a big moat for who has figured out all the&nbsp;&nbsp; finickiness that you were talking about&nbsp; earlier with regards to all this data?

&nbsp; There's something of a moat because&nbsp; it's just a very complex operation and&nbsp;&nbsp; it takes a lot of skilled people to do&nbsp; it. There's a lot of tacit knowledge and&nbsp;&nbsp;

organizational knowledge that's required. With post-training, to create a model that&nbsp;&nbsp; actually has all the functionality people&nbsp; care about, it’s pretty complicated. It&nbsp;&nbsp; requires a pretty complicated effort and&nbsp;

accumulation of a lot of R&amp;D. That makes&nbsp;&nbsp; it somewhat of a moat. It's not trivial&nbsp; to spin this up immediately. It does seem&nbsp;&nbsp; like the same companies that are putting&nbsp; together the most serious pre-training&nbsp;&nbsp;

efforts are also putting together the&nbsp; most serious post-training efforts.&nbsp; It is somewhat possible to copy or to spin&nbsp; up more of these efforts. There's also one&nbsp;&nbsp; force that sort of makes it less of a moat. You&nbsp;

can distill the models, or you can take someone&nbsp;&nbsp; else's model and clone the outputs. You can use&nbsp; someone else's model as a judge to do comparisons.&nbsp; The more big league people probably aren't&nbsp; doing that because it goes against terms of&nbsp;&nbsp;

service policies. It would also be a hit to&nbsp; their pride. But I would expect some of the&nbsp;&nbsp; smaller players are doing that to get off the&nbsp; ground. That catches you up to a large extent. &nbsp;

I guess it helps clear the moat. What is the&nbsp; median rater like? Where are they based? What are&nbsp;&nbsp; their politics? What is their knowledge level? It varies a lot. We've definitely hired raters&nbsp;&nbsp; with different skills for different kinds&nbsp;

of tasks or projects. A decent mental model&nbsp;&nbsp; is to just look at people who are on Upwork&nbsp; and other platforms like that. Look at who's&nbsp;&nbsp; doing odd jobs with remote work. It's a pretty international group.&nbsp;&nbsp;

There's a decent number of people in the&nbsp; U.S. We hire different groups of people&nbsp;&nbsp; for different types of labeling, like whether&nbsp; we're more focused on writing or STEM tasks.&nbsp;&nbsp; People doing STEM tasks are more likely to be&nbsp;

in India or other middle or lower-middle income&nbsp;&nbsp; countries. People doing more English writing&nbsp; and composition tend more to be U.S.-based.&nbsp; There've been times when we needed to hire&nbsp; different experts for some of our campaigns.&nbsp;&nbsp;

Some of the people are very talented, and we&nbsp; even find that they're at least as good as us,&nbsp;&nbsp; the researchers, at doing these tasks and they're&nbsp; much more careful than us. I would say the people&nbsp;&nbsp; we have now are quite skilled and conscientious.

With regards to the plateau narrative,&nbsp;&nbsp; one of the things I've heard is that a lot of&nbsp; the abilities these models have to help you&nbsp;&nbsp; with specific things are related to having very&nbsp; closely matched labels within the supervised&nbsp;&nbsp;

fine-tuning dataset. Is that true? Can it teach me how to use FFmpeg&nbsp;&nbsp; correctly? Is it like there's somebody who’s&nbsp; seeing the inputs, seeing what flags you need&nbsp;&nbsp; to add, and some human is figuring that out and&nbsp;

matching to that. Do you need to hire all these&nbsp;&nbsp; label raters who have domain expertise in all&nbsp; these different domains? If that's the case,&nbsp;&nbsp; it seems like it’d be a much bigger slog to get&nbsp; these models to be smarter and smarter over time.

&nbsp; You don't exactly need that. You can get&nbsp; quite a bit out of generalization. The&nbsp;&nbsp; base model has already been trained on tons of&nbsp; documentation, code, with shell scripts and so&nbsp;&nbsp;

forth. It's already seen all the FFmpeg man&nbsp; pages, lots of Bash scripts and everything.&nbsp; Even just giving the base model a good&nbsp; few-shot prompt, you can get it to&nbsp;&nbsp; answer queries like this. Just training&nbsp;

a preference model for helpfulness will,&nbsp;&nbsp; even if you don't train it on any STEM, somewhat&nbsp; generalize to STEM. So not only do you not need&nbsp;&nbsp; examples of how to use FFmpeg, you might not&nbsp; even need anything with programming to get some&nbsp;&nbsp;

reasonable behavior in the programming domain. Maybe a final question. We've touched on this&nbsp;&nbsp; in different ways but let’s put it together. You&nbsp; said you're training on much more multimodal data.&nbsp;&nbsp; Presumably, these things understand what screens&nbsp;

look like and will be able to interact with them&nbsp;&nbsp; in a much more coherent way. Also you're going&nbsp; to do this long-horizon RL, so they'll be able&nbsp;&nbsp; to act as agents in the systems and be part of&nbsp; your workflow in a much more integrated way.&nbsp;

What do you expect that to look like? What will be&nbsp; the next steps from there? Suppose by the end of&nbsp;&nbsp; the year or next year, you have something that's&nbsp; an assistant who can work with you on your screen.&nbsp;&nbsp; Does that seem like a sensible thing to&nbsp;

expect? Where does it go from there? &nbsp; I definitely expect things to move in that&nbsp; direction. It's unclear what's going to be&nbsp;&nbsp; the best form factor. It could be something that's&nbsp;

like a Clippy on your computer helping you or if&nbsp;&nbsp; it's more like a helpful colleague in the cloud.&nbsp; We'll see which kinds of form factors work the&nbsp;&nbsp; best. I expect people to try all of them out. I expect the mental model of a helpful assistant&nbsp;&nbsp;

or helpful colleague to become more real. It’ll&nbsp; be something where you can share more of your&nbsp;&nbsp; everyday work. Instead of just giving it&nbsp; one-off queries, you would have a whole&nbsp;&nbsp; project that you're doing and it knows about&nbsp;

everything you've done on that project so far.&nbsp; It can even proactively make suggestions. Maybe&nbsp; you can tell it to remember to ask me about this&nbsp;&nbsp; and if I've made any progress on it. Proactivity&nbsp; is one thing that's been missing. I'd love to see&nbsp;&nbsp;

us moving away from one-off queries, using the&nbsp; model like a search engine, and more towards&nbsp;&nbsp; having a whole project that I'm doing in&nbsp; collaboration with the model. Something where it&nbsp;&nbsp; knows everything I've done. It's proactively&nbsp;

suggesting things for me to try or it's going&nbsp;&nbsp; and doing work in the background. That's really interesting. This is&nbsp;&nbsp; the final question. What is your median&nbsp; timeline for when it replaces your job?

&nbsp; Oh, it replaces my job? Maybe five years. Pretty soon. Interesting. John, this was&nbsp;&nbsp; super interesting. Thanks so much for&nbsp; making the time. This seems like one of&nbsp;&nbsp;

the parts of the AI process that is super&nbsp; important and people don't understand that&nbsp;&nbsp; much about. It was super interesting to&nbsp; delve into it and get your thoughts on it. &nbsp;

Thanks for having me on the podcast. It&nbsp; was fun to talk about all this stuff.

<!-- YOUTUBE_TRANSCRIPT_END -->
