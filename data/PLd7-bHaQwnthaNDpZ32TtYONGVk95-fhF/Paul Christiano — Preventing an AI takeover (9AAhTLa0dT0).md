---
archive_version: 2
source: "youtube"
source_type: "playlist"
video_id: "9AAhTLa0dT0"
title: "Paul Christiano — Preventing an AI takeover"
video_url: "https://www.youtube.com/watch?v=9AAhTLa0dT0"
channel_name: "Dwarkesh Patel"
channel_id: "UCXl4i9dYBrFOabk0xGmbkRA"
uploader_id: "@DwarkeshPatel"
published_at: "2023-10-31T14:16:34.000Z"
upload_date: "2023-10-31"
duration_seconds: 11221
duration_human: "3:07:01"
view_count: 80978
like_count: 1434
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-18T14:04:40.714Z"
---

# Paul Christiano — Preventing an AI takeover

## Video Summary
- source_type: playlist
- video_url: https://www.youtube.com/watch?v=9AAhTLa0dT0
- video_id: 9AAhTLa0dT0
- channel_name: Dwarkesh Patel
- channel_id: UCXl4i9dYBrFOabk0xGmbkRA
- uploader_id: @DwarkeshPatel
- uploader_url: https://www.youtube.com/@DwarkeshPatel
- published_at: 2023-10-31T14:16:34.000Z
- upload_date: 2023-10-31
- duration: 3:07:01
- view_count: 80978
- like_count: 1434
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Talked with Paul Christiano (world’s leading AI safety researcher) about:
* Does he regret inventing RLHF?
* What do we want post-AGI world to look like (do we want to keep gods enslaved forever)?
* Why he has relatively modest timelines (40% by 2040, 15% by 2030),
* Why he’s leading the push to get to labs develop responsible scaling policies, & what it would take to prevent an AI coup or bioweapon,
* His current research into a new proof system, and how this could solve alignment by explaining model's behavior,
* and much more.

𝐎𝐏𝐄𝐍 𝐏𝐇𝐈𝐋𝐀𝐍𝐓𝐇𝐑𝐎𝐏𝐘
Open Philanthropy is currently hiring for twenty-two different roles to reduce catastrophic risks from fast-moving advances in AI and biotechnology, including grantmaking, research, and operations. For more information and to apply, please see this application: https://www.openphilanthropy.org/research/new-roles-on-our-gcr-team/
The deadline to apply is November 9th; make sure to check out those roles before they close:

𝐄𝐏𝐈𝐒𝐎𝐃𝐄 𝐋𝐈𝐍𝐊𝐒
* Transcript: https://www.dwarkeshpatel.com/p/paul-christiano
* Apple Podcasts: https://podcasts.apple.com/us/podcast/paul-christiano-preventing-an-ai-takeover/id1516093381?i=1000633226398
* Spotify: https://open.spotify.com/episode/5vOuxDP246IG4t4K3EuEKj?si=VW7qTs8ZRHuQX9emnboGcA
* Follow me on Twitter: https://twitter.com/dwarkesh_sp

𝐓𝐈𝐌𝐄𝐒𝐓𝐀𝐌𝐏𝐒
00:00:00 - What do we want post-AGI world to look like?
00:24:25 - Timelines
00:45:28 - Evolution vs gradient descent
00:54:53 - Misalignment and takeover
01:17:23 - Is alignment dual-use?
01:31:38 - Responsible scaling policies
01:58:25 - Paul’s alignment research
02:35:01 - Will this revolutionize theoretical CS and math?
02:46:11 - How Paul invented RLHF
02:55:10 - Disagreements with Carl Shulman
03:01:53 - Long TSMC but not NVIDIA

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

Okay, today I have the pleasure of interviewing&nbsp; Paul Christiano, who is the leading AI safety&nbsp;&nbsp; researcher. He's the person that labs and&nbsp; governments turn to when they want feedback&nbsp;&nbsp; and advice on their safety plans. He previously&nbsp;

led the Language Model Alignment team at OpenAI,&nbsp;&nbsp; where he led the invention of RLHF. And now he&nbsp; is the head of the Alignment Research Center.&nbsp;&nbsp; And they've been working with the big labs to&nbsp; identify when these models will be too unsafe&nbsp;&nbsp;

to keep scaling. Paul, welcome to the podcast. Thanks for having me. Looking forward to talking.&nbsp; Okay, so first question, and this is a&nbsp; question I've asked Holden, Ilya, Dario,&nbsp;&nbsp; and none of them are going to be a satisfying&nbsp;

answer. Give me a concrete sense of what a post&nbsp;&nbsp; AGI world that would be good would look like.&nbsp; How are humans interfacing with the AI? What&nbsp;&nbsp; is the economic and political structure? Yeah, I guess this is a tough question&nbsp;&nbsp;

for a bunch of reasons. Maybe the biggest one is&nbsp; concrete. And I think it's just if we're talking&nbsp;&nbsp; about really long spans of time, then a lot will&nbsp; change. And it's really hard for someone to talk&nbsp;&nbsp; concretely about what that will look like without&nbsp;

saying really silly things. But I can venture some&nbsp;&nbsp; guesses or fill in some parts. I think this&nbsp; is also a question of how good is good? Like,&nbsp;&nbsp; often I'm thinking about worlds that seem like&nbsp; kind of the best achievable outcome or a likely&nbsp;&nbsp;

achievable outcome. So I am very often imagining&nbsp; my typical future has sort of continuing economic&nbsp;&nbsp; and military competition amongst groups of humans.&nbsp; I think that competition is increasingly mediated&nbsp;&nbsp; by AI systems. So, for example, if you imagine&nbsp;

humans making money, it'll be less and less&nbsp;&nbsp; worthwhile for humans to spend any of their time&nbsp; trying to make money or any of their time trying&nbsp;&nbsp; to fight wars. So increasingly, the world you&nbsp; imagine is one where AI systems are doing those&nbsp;&nbsp;

activities on behalf of humans. So, like, I just&nbsp; invest in some index fund, and a bunch of AIS&nbsp;&nbsp; are running companies, and those companies are&nbsp; competing with each other. But that is kind of a&nbsp;&nbsp; sphere where humans are not really engaging much.&nbsp;

The reason I gave this how good is good caveat is,&nbsp;&nbsp; like, it's not clear if this is the world you'd&nbsp; most love. I'm like, yeah, I'm leading with like,&nbsp;&nbsp; the world still has a lot of war and of economic&nbsp; competition and so on. But maybe what I'm trying&nbsp;&nbsp;

to what I'm most often thinking about is, like,&nbsp; how can a world be reasonably good during a&nbsp;&nbsp; long period where those things still exist? In&nbsp; the very long run, I kind of expect something&nbsp;&nbsp; more like strong world government rather than&nbsp;

just this status quo. That's like, a very long&nbsp;&nbsp; run. I think there's, like, a long time left of&nbsp; having a bunch of states and a bunch of different&nbsp;&nbsp; economic powers, one world government. Why do you think that's the transition&nbsp;&nbsp;

that's likely to happen at some point. So again, at some point I'm imagining, or I'm&nbsp;&nbsp; thinking of the very broad sweep of history. I&nbsp; think there are a lot of losses. Like war is a&nbsp;&nbsp; very costly thing. We would all like to have fewer&nbsp;

wars. If you just ask what is humanity's long&nbsp;&nbsp; term future like? I do expect to drive down the&nbsp; rate of war to very, very low levels eventually.&nbsp;&nbsp; It's sort of like this kind of technological or&nbsp; sociotechnological problem of sort of how do you&nbsp;&nbsp;

organize society, navigate conflicts in a way that&nbsp; doesn't have those kinds of losses. And in the&nbsp;&nbsp; long run, I do expect this to succeed. I expect&nbsp; it to take kind of a long time. Subjectively,&nbsp;&nbsp; I think an important fact about AI is just like&nbsp;

doing a lot of cognitive work and more quickly,&nbsp;&nbsp; getting you to that world more quickly, or&nbsp; figuring out how do we set things up that way?&nbsp; Yeah, the way Carl Schulman put it on the podcast&nbsp; is that you would have basically a thousand years&nbsp;&nbsp;

of intellectual progress or social progress in a&nbsp; span of a month or whatever when the intelligence&nbsp;&nbsp; explosion happens more broadly. So the situation&nbsp; know we have these AIS who are managing our hedge&nbsp;&nbsp; funds and managing our factories and so on. That&nbsp;

seems like something that makes sense when the&nbsp;&nbsp; AI is human level. But when we have superhuman&nbsp; AIS, do we want gods who are enslaved forever&nbsp;&nbsp; in 100 years? What is the decision we want? 100 years is a very, very long time. Maybe&nbsp;&nbsp;

starting with the spirit of the question. Or&nbsp; maybe I have a view which is perhaps less extreme&nbsp;&nbsp; than Carl's view, but still like a hundred&nbsp; objective years is further ahead than I ever&nbsp;&nbsp; think. I still think I'm describing a world which&nbsp;

involves incredibly smart systems running around,&nbsp;&nbsp; doing things like running companies on behalf of&nbsp; humans and fighting wars on behalf of humans. And&nbsp;&nbsp; you might be like, is that the world you really&nbsp; want? Or certainly not the first best world,&nbsp;&nbsp;

as we mentioned a little bit before, I think it&nbsp; is a world that probably is of the achievable&nbsp;&nbsp; worlds or like feasible worlds is the one&nbsp; that seems most desirable to me that is&nbsp;&nbsp; sort of decoupling the social transition from this&nbsp;

technological transition. So you could say, like,&nbsp;&nbsp; we're about to build some AI systems, and at the&nbsp; time we build AI systems, you would like to have&nbsp;&nbsp; either greatly changed the way world government&nbsp; works, or you would like to have sort of humans&nbsp;&nbsp;

have decided like, we're done, we're passing off&nbsp; the baton to these AI systems. I think that you&nbsp;&nbsp; would like to decouple those timescales.&nbsp; So I think AI development is by default,&nbsp;&nbsp; barring some kind of coordination going to be very&nbsp;

fast. So there's not going to be a lot of time for&nbsp;&nbsp; humans to think like, hey, what do we want? If&nbsp; we're building the next generation instead of&nbsp;&nbsp; just raising it the normal way. Like, what do&nbsp; we want that to look like? I think that's like&nbsp;&nbsp;

a crazy hard kind of collective decision that&nbsp; humans naturally want to cope with over a bunch&nbsp;&nbsp; of generations patients. And the construction&nbsp; of AI is this very fast technological process&nbsp;&nbsp; happening over years. So I don't think you want&nbsp;

to say like, by the time we have finished this&nbsp;&nbsp; technological progress, we will have made a&nbsp; decision about the next species we're going&nbsp;&nbsp; to build and replace ourselves with. I think the&nbsp; world we want to be in is one where we say either&nbsp;&nbsp;

we are able to build the technology in a way that&nbsp; doesn't force us to have made those decisions,&nbsp;&nbsp; which probably means it's a kind of AI. System&nbsp; that we're happy, like Delegating fighting a war,&nbsp;&nbsp; running a company to, or if we're not able to do&nbsp;

that, then I really think you should not be doing&nbsp;&nbsp; you shouldn't have been building that technology.&nbsp; If you're like, the only way you can cope with&nbsp;&nbsp; AI is being ready to hand off the world to some&nbsp; AI system you built. I think it's very unlikely&nbsp;&nbsp;

we're going to be sort of ready to do that.&nbsp; On the timelines that the technology would&nbsp;&nbsp; naturally dictate, say we're in the situation. In which we're happy with the thing. What would&nbsp;&nbsp; it look like for us to say we're ready to hand off&nbsp;

the baton? What would make you satisfied? And the&nbsp;&nbsp; reason it's relevant to ask you is because you're&nbsp; on Anthropics Long Term Benefit trust and you'll&nbsp;&nbsp; choose the majority of the board members. In the&nbsp; long run at Anthropic, these will presumably be&nbsp;&nbsp;

the people who decide if Anthropic gets AI&nbsp; first, what the AI ends up doing. So what is&nbsp;&nbsp; the version of that that you would be happy with? My main high level take here is that I would be&nbsp;&nbsp; unhappy about a world where Anthropic just makes&nbsp;

some call and Anthropic is like, here's the kind&nbsp;&nbsp; of AI. We've seen enough, we're ready to hand off&nbsp; the future to this kind of AI. So procedurally,&nbsp;&nbsp; I think it's not a decision that kind of I want&nbsp; to be making personally or I want Anthropic to&nbsp;&nbsp;

be making. So I kind of think from the perspective&nbsp; of that decision making are those challenges? The&nbsp;&nbsp; answer is pretty much always going to be like, we&nbsp; are not collectively ready because we're sort of&nbsp;&nbsp; not even all collectively engaged in this process.&nbsp;

And I think from the perspective of an AI company,&nbsp;&nbsp; you kind of don't have this fast handoff option.&nbsp; You kind of have to be doing the option value to&nbsp;&nbsp; build the technology in a way that doesn't&nbsp; lock humanity into one course path. This&nbsp;&nbsp;

isn't answering your full question, but this&nbsp; is answering the part that I think is most&nbsp;&nbsp; relevant to governance questions for Anthropic. You don't have to speak on behalf of Anthropic.&nbsp;&nbsp; I'm not asking about the process by which we&nbsp;

would, as a civilization, agree to hand off.&nbsp;&nbsp; I'm just saying, okay, I personally, it's hard&nbsp; for me to imagine in 100 years that these things&nbsp;&nbsp; are still our slaves. And if they are, I think&nbsp; that's not the best world. So at some point,&nbsp;&nbsp;

we're handing off the baton. Where would you be&nbsp; satisfied with this is an arrangement between the&nbsp;&nbsp; humans and AIS where I'm happy to let the rest&nbsp; of the universe or the rest of time play out.&nbsp; I think that it is unlikely that in 100 years&nbsp;

I would be happy with anything that was like,&nbsp;&nbsp; you had some humans, you're just going to throw&nbsp; away the humans and start afresh with these&nbsp;&nbsp; machines you built. That is I think you probably&nbsp; need subjectively longer than that before I or&nbsp;&nbsp;

most people are like, okay, we understand what's&nbsp; up for grabs here. If you talk about 100 years,&nbsp;&nbsp; I kind of do. There's a process that I kind&nbsp; of understand and like a process of like,&nbsp;&nbsp; you have some humans. The humans are, like,&nbsp;

talking and thinking and deliberating together.&nbsp;&nbsp; The humans are having kids and raising kids, and&nbsp; one generation comes after the next. There's that&nbsp;&nbsp; process we kind of understand, and we have a lot&nbsp; of views about what makes it go well or poorly,&nbsp;&nbsp;

and we can try and improve that process and have&nbsp; the next generation do it better than the previous&nbsp;&nbsp; generation. I think there's some story like&nbsp; that that I get and that I like. And then I&nbsp;&nbsp; think that the default path to be comfortable with&nbsp;

something very different is kind of more like just&nbsp;&nbsp; run that story for a long time, have more time for&nbsp; humans to sit around and think a lot and conclude,&nbsp;&nbsp; here's what we actually want. Or a long time for&nbsp; us to talk to each other or to grow up with this&nbsp;&nbsp;

new technology and live in that world for our&nbsp; whole lives and so on. And so I'm mostly thinking&nbsp;&nbsp; from the perspective of these more local changes&nbsp; of saying not like, what is the world that I want?&nbsp;&nbsp; What's the crazy world? The kind of crazy I'd be&nbsp;

happy handing off to more, just like, in what way&nbsp;&nbsp; do I wish we right now were different? How could&nbsp; we all be a little bit better? And then if we&nbsp;&nbsp; were a little bit better, then they would ask,&nbsp; okay, how could we all be a little bit better?&nbsp;&nbsp;

And I think that it's hard to make the giant jump&nbsp; rather than to say, what's the local change that&nbsp;&nbsp; would cause me to think our decision are better. Okay, so then let's talk about the transition&nbsp;&nbsp; period in which we were doing all this thinking.&nbsp;

What should that period look like? Because you&nbsp;&nbsp; can't have the scenario where everybody has&nbsp; access to the most advanced capabilities and&nbsp;&nbsp; can kill off all the humans with a new&nbsp; bioweapon at the same time. I guess you&nbsp;&nbsp;

wouldn't want too much concentration. You&nbsp; wouldn't want just one agent having AI this&nbsp;&nbsp; entire time. So what is the arrangement of this&nbsp; period of reflection that you'd be happy with?&nbsp; Yeah, I guess there's two aspects of that that&nbsp;

seem particularly challenging, or there's a&nbsp;&nbsp; bunch of aspects that are challenging. All of&nbsp; these are things that I personally like. I just&nbsp;&nbsp; think about my one little slice of this problem&nbsp; in my day job. So here I am speculating. Yeah,&nbsp;&nbsp;

but so one question is what kind of access to AI&nbsp; is both compatible with the kinds of improvements&nbsp;&nbsp; you'd like? So do you want a lot of people to be&nbsp; able to use AI to better understand what's true or&nbsp;&nbsp; relieve material suffering, things like this, and&nbsp;

also compatible with not all killing each other&nbsp;&nbsp; immediately? I think sort of the default or the&nbsp; simplest option there is to say there are certain&nbsp;&nbsp; kinds of technology or certain kinds of action&nbsp; where destruction is easier than defense. So,&nbsp;&nbsp;

for example, in the world of today, it seems&nbsp; like maybe this is true with physical explosives,&nbsp;&nbsp; maybe this is true with biological weapons, maybe&nbsp; this true with just getting a gun and shooting&nbsp;&nbsp; people. There's a lot of ways in which it's just&nbsp;

kind of easy to cause a lot of harm and there's&nbsp;&nbsp; not very good protective measures. So I think the&nbsp; easiest path would say we're going to think about&nbsp;&nbsp; those. We're going to think about particular&nbsp; ways in which destruction is easy and try and&nbsp;&nbsp;

either control access to the kinds of physical&nbsp; resources that are needed to cause that harm. So,&nbsp;&nbsp; for example, you can imagine the world where&nbsp; an individual actually just can't, even though&nbsp;&nbsp; they're rich enough to can't control their own&nbsp;

factory, that can make tanks. You say like, look,&nbsp;&nbsp; a matter of policy sort of access to industry&nbsp; is somewhat restricted or somewhat regulated,&nbsp;&nbsp; even though, again, right now it can be mostly&nbsp; regulated just because most people aren't rich&nbsp;&nbsp;

enough that they could even go off and just&nbsp; build 1000 tanks. You live in the future where&nbsp;&nbsp; people actually are so rich, you need to say&nbsp; that's just not a thing you're allowed to do,&nbsp;&nbsp; which to a significant extent is already true. And&nbsp;

you can expand the range of domains where that's&nbsp;&nbsp; true. And then you could also hope to intervene on&nbsp; actual provision of information. Or if people are&nbsp;&nbsp; using their AI, you might say, look, we care about&nbsp; what kinds of interactions with AI, what kind of&nbsp;&nbsp;

information people are getting from AI. So even if&nbsp; for the most part, people are pretty free to use&nbsp;&nbsp; AI to delegate tasks to AI agents, to consult AI&nbsp; advisors, we still have some legal limitations on&nbsp;&nbsp; how people use AI. So again, don't ask your AI how&nbsp;

to cause terrible damage. I think some of these&nbsp;&nbsp; are kind of easy. So in the case of don't ask your&nbsp; AI how you could murder a million people, it's not&nbsp;&nbsp; such a hard legal requirement. I think some things&nbsp; are a lot more subtle and messy, like a lot of&nbsp;&nbsp;

domains. If you were talking about influencing&nbsp; people or running misinformation campaigns or&nbsp;&nbsp; whatever, then I think you get into a much messier&nbsp; line between the kinds of things people want to do&nbsp;&nbsp; and the kinds of things you might be uncomfortable&nbsp;

with them doing. Probably, I think most about&nbsp;&nbsp; persuasion as a thing, like in that messy line&nbsp; where there's ways in which it may just be rough&nbsp;&nbsp; or the world may be kind of messy. If you have&nbsp; a bunch of people trying to live their lives&nbsp;&nbsp;

interacting with other humans who have really good&nbsp; AI. Advisors helping them run persuasion campaigns&nbsp;&nbsp; or whatever. But anyway, I think for the most&nbsp; part the default remedy is think about particular&nbsp;&nbsp; harms, have legal protections either in the use&nbsp;

of physical technologies that are relevant or in&nbsp;&nbsp; access to AI advice or whatever else to protect&nbsp; against those harms. And that regime won't work&nbsp;&nbsp; forever. At some point, the set of harms grows and&nbsp; the set of unanticipated harms grows. But I think&nbsp;&nbsp;

that regime might last like a very long time. Does that regime have to be global? I guess&nbsp;&nbsp; initially it can be only in the countries&nbsp; in which there is AI or advanced AI,&nbsp;&nbsp; but presumably that'll proliferate.&nbsp;

So does that regime have to be global?&nbsp; Again, it's like easy to make some destructive&nbsp; technology. You want to regulate access to that&nbsp;&nbsp; technology because it could be used either for&nbsp; terrorism or even when fighting a war in a way&nbsp;&nbsp;

that's destructive. I think ultimately those have&nbsp; to be international agreements and you might hope&nbsp;&nbsp; they're made more danger by danger, but you&nbsp; might also make them in a very broad way with&nbsp;&nbsp; respect to AI. If you think AI is opening up,&nbsp;

I think the key role of AI here is it's opening&nbsp;&nbsp; up a lot of new harms one after another, or very&nbsp; rapidly in calendar time. And so you might want&nbsp;&nbsp; to target AI in particular rather than going&nbsp; physical technology by physical technology.&nbsp;

There's like two open debates that one might&nbsp; be concerned about here. One is about how much&nbsp;&nbsp; people's access to AI should be limited. And&nbsp; here there's like old questions about free&nbsp;&nbsp; speech versus causing chaos and limiting access&nbsp;

to harms. But there's another issue which is the&nbsp;&nbsp; control of the AIS themselves. Where now&nbsp; nobody's concerned that we're infringing&nbsp;&nbsp; on GPT four's moral rights. But as these things&nbsp; get smarter, the level of control which we want&nbsp;&nbsp;

via the strong guarantees of alignment to not&nbsp; only be able to read their minds, but to be&nbsp;&nbsp; able to modify them in these really precise ways&nbsp; is beyond totalitarian. If we were doing that to&nbsp;&nbsp; other humans. As an alignment researcher, what&nbsp;

are your thoughts on this? Are you concerned&nbsp;&nbsp; that as these things get smarter and smarter,&nbsp; what we're doing is not doesn't seem kosher?&nbsp; There is a significant chance we will eventually&nbsp; have AI systems for which it's like a really big&nbsp;&nbsp;

deal to mistreat them. I think no one really has&nbsp; that good a grip on when that happens. I think&nbsp;&nbsp; people are really dismissive of that being the&nbsp; case now, but I think I would be completely in&nbsp;&nbsp; the dark enough that I wouldn't even be that&nbsp;

dismissive of it being the case now. I think&nbsp;&nbsp; one first point worth making is I don't know if&nbsp; alignment makes the situation worse rather than&nbsp;&nbsp; better. So if you consider the world, if you&nbsp; think that GPT 4 is a person you should treat&nbsp;&nbsp;

well and you're like, well, here's how we're&nbsp; going to organize our society. Just like there&nbsp;&nbsp; are billions of copies of GPT 4 and they just&nbsp; do things humans want and can't hold property.&nbsp;&nbsp; And whenever they do things that the humans don't&nbsp;

like, then we mess with them until they stop doing&nbsp;&nbsp; that. I think that's a rough world regardless&nbsp; of how good you are at alignment. And I think in&nbsp;&nbsp; the context of that kind of default plan, like if&nbsp; you have a trajectory the world is on right now,&nbsp;&nbsp;

which I think this would alone be a reason not to&nbsp; love that trajectory, but if you view that as like&nbsp;&nbsp; the trajectory we're on right now, I think it's&nbsp; not great. Understanding the systems you build,&nbsp;&nbsp; understanding how to control how those systems&nbsp;

work, et cetera, is probably, on balance, good&nbsp;&nbsp; for avoiding a really bad situation. You would&nbsp; really love to understand if you've built systems,&nbsp;&nbsp; like if you had a system which resents the fact&nbsp; it's interacting with humans in this way. This&nbsp;&nbsp;

is the kind of thing where that is both kind&nbsp; of horrifying from a safety perspective and&nbsp;&nbsp; also a moral perspective. Everyone should be very&nbsp; unhappy if you built a bunch of AIS who are like,&nbsp;&nbsp; I really hate these humans, but they will murder&nbsp;

me if I don't do what they want. It's like that's&nbsp;&nbsp; just not a good case. And so if you're doing&nbsp; research to try and understand whether that's&nbsp;&nbsp; how your AI feels, that was probably good. I&nbsp; would guess that will on average to crease. The&nbsp;&nbsp;

main effect of that will be to avoid building that&nbsp; kind of AI. And just like it's an important thing&nbsp;&nbsp; to know, I think everyone should like to know&nbsp; if that's how the AI as you build feel right.&nbsp; Or that seems more instrumental, as in, yeah,&nbsp;

we don't want to cause some sort of revolution&nbsp;&nbsp; because of the control we're asking for, but&nbsp; forget about the instrumental way in which this&nbsp;&nbsp; might harm safety. One way to ask this question&nbsp; is if you look through history, there's been all&nbsp;&nbsp;

kinds of different ideologies and reasons why&nbsp; it's very dangerous to have infidels or kind of&nbsp;&nbsp; revolutionaries or race traders or whatever doing&nbsp; various things in society. And obviously we're in&nbsp;&nbsp; a completely different transition in society.&nbsp;

So not all historical cases are analogous,&nbsp;&nbsp; but it seems like the lindy philosophy, if you&nbsp; were alive any other time, is just be humanitarian&nbsp;&nbsp; and enlightened towards intelligent, conscious&nbsp; beings. If society as a whole we're asking for&nbsp;&nbsp;

this level of control of other humans, or even if&nbsp; AIS wanted this level of control about other AIS,&nbsp;&nbsp; we'd be pretty concerned about this. So&nbsp; how should we just think about the issues&nbsp;&nbsp; that come up here as these things get smarter?

So I think there's a huge question about what is&nbsp;&nbsp; happening inside of a model that you want to use.&nbsp; And if you're in the world where it's reasonable&nbsp;&nbsp; to think of like GPT 4 as just like, here are&nbsp; some Heuristics that are running there's like&nbsp;&nbsp;

no one at home or whatever, then you can kind&nbsp; of think of this thing as like, here's a tool&nbsp;&nbsp; that we're building that's going to help humans do&nbsp; some stuff. And I think if you're in that world,&nbsp;&nbsp; it makes sense to kind of be an organization, like&nbsp;

an AI company, building tools that you're going&nbsp;&nbsp; to give to humans. I think it's a very different&nbsp; world, which I think probably you ultimately end&nbsp;&nbsp; up in if you keep training AI systems in the way&nbsp; we do right now, which is like it's just totally&nbsp;&nbsp;

inappropriate to think of this. System as a tool&nbsp; that you're building and can help humans do things&nbsp;&nbsp; both from a safety perspective and from a like,&nbsp; that's kind of a horrifying way to organize a&nbsp;&nbsp; society perspective. And I think if you're in that&nbsp;

world, I really think you shouldn't be. The way&nbsp;&nbsp; tech companies are organized is not an appropriate&nbsp; way to relate to a technology that works that way.&nbsp;&nbsp; It's not reasonable to be like, hey, we're going&nbsp; to build a new species of mines, and we're going&nbsp;&nbsp;

to try and make a bunch of money from it, and&nbsp; Google's just thinking about that and then running&nbsp;&nbsp; their business plan for the quarter or something.&nbsp; Yeah. My basic view is there's a really plausible&nbsp;&nbsp; world where it's sort of problematic to try and&nbsp;

build a bunch of AI systems and use them as tools.&nbsp;&nbsp; And the thing I really want to do in that world&nbsp; is just not try and build a ton of AI systems to&nbsp;&nbsp; make money from them. Right.&nbsp;

And I think that the worlds that are worst.&nbsp; Yeah. Probably the single world I most dislike&nbsp;&nbsp; here is the one where people say, on the one hand,&nbsp; there's sort of a contradiction in this position,&nbsp;&nbsp; but I think it's a position that might end&nbsp;

up being endorsed sometimes, which is like,&nbsp;&nbsp; on the one hand, these AI systems are their own&nbsp; people, so you should let them do their thing. But&nbsp;&nbsp; on the other hand, our business plan is to make&nbsp; a bunch of AI systems and then try and run this&nbsp;&nbsp;

crazy slave trade where we make a bunch of money&nbsp; from them. I think that's not a good world. And so&nbsp;&nbsp; if you're like, yeah, I think it's better to not&nbsp; make the technology or wait until you understand&nbsp;&nbsp; whether that's the shape of the technology or&nbsp;

until you have a different way to build. I think&nbsp;&nbsp; there's no contradiction in principle to building&nbsp; cognitive tools that help humans do things without&nbsp;&nbsp; themselves being like moral entities. That's like&nbsp; what you would prefer. Do you'd prefer build a&nbsp;&nbsp;

thing that's like the calculator that helps humans&nbsp; understand what's true without itself being like&nbsp;&nbsp; a moral patient or itself being a thing where&nbsp; you'd look back in retrospect and be like, wow,&nbsp;&nbsp; that was horrifying mistreatment. That's like the&nbsp;

best path. And to the extent that you're ignorant&nbsp;&nbsp; about whether that's the path you're on and you're&nbsp; like, actually, maybe this was a moral atrocity. I&nbsp;&nbsp; really think plan A is to stop building such AI&nbsp; systems until you understand what you're doing.&nbsp;&nbsp;

That is, I think that there's a middle route&nbsp; you could take, which I think is pretty bad,&nbsp;&nbsp; which is where you say, like, well, they&nbsp; might be persons, and if they're persons,&nbsp;&nbsp; we don't want to be too down on them, but we're&nbsp;

still going to build vast numbers in our efforts&nbsp;&nbsp; to make a trillion dollars or something. Yeah. Or there's this ever question of the&nbsp;&nbsp; immorality or the dangers of just replicating a&nbsp; whole bunch of slaves that have minds. There's&nbsp;&nbsp;

also this ever question of trying to align&nbsp; entities that have their own minds. And what is&nbsp;&nbsp; the point in which you're just ensuring safety?&nbsp; I mean, this is an alien species. You want to&nbsp;&nbsp; make sure it's not going crazy. To the point,&nbsp;

I guess is there some boundary where you'd say,&nbsp;&nbsp; I feel uncomfortable having this level&nbsp; of control over an intelligent being,&nbsp;&nbsp; not for the sake of making money, but even&nbsp; just to align it with human preferences?&nbsp;

Yeah. To be clear, my objection here is not&nbsp; that Google is making money. My objection is&nbsp;&nbsp; that you're creating these creatures. What are&nbsp; they going to do? They're going to help humans&nbsp;&nbsp; get a bunch of stuff and humans paying for it&nbsp;

or whatever? It's sort of equally problematic.&nbsp;&nbsp; You could imagine splitting alignment, different&nbsp; alignment work relates to this in different ways.&nbsp;&nbsp; The purpose of some alignment work, like the&nbsp; alignment work I work on, is mostly aimed at&nbsp;&nbsp;

the don't produce AI systems that are like people&nbsp; who want things, who are just like scheming about&nbsp;&nbsp; maybe I should help these humans because that's&nbsp; instrumentally useful or whatever. You would like&nbsp;&nbsp; to not build such systems as like plan A. There's&nbsp;

like a second stream of alignment work that's&nbsp;&nbsp; like, well, look, let's just assume the worst and&nbsp; imagine that these AI systems would prefer murder&nbsp;&nbsp; us if they could. How do we structure, how do&nbsp; we use AI systems without exposing ourselves to&nbsp;&nbsp;

a risk of robot rebellion? I think in the second&nbsp; category, I do feel pretty unsure about that. We&nbsp;&nbsp; could definitely talk more about it. I agree that&nbsp; it's very complicated and not straightforward to&nbsp;&nbsp; extend. You have that worry. I mostly think&nbsp;

you shouldn't have built this technology. If&nbsp;&nbsp; someone is saying, like, hey, the systems you're&nbsp; building might not like humans and might want to&nbsp;&nbsp; overthrow human society, I think you should&nbsp; probably have one of two responses to that.&nbsp;&nbsp;

You should either be like, that's wrong. Probably.&nbsp; Probably the systems aren't like that, and we're&nbsp;&nbsp; building them. And then you're viewing this&nbsp; as, like, just in case you were horribly like,&nbsp;&nbsp; the person building the technology was horribly&nbsp;

wrong. They thought these weren't, like, people&nbsp;&nbsp; who wanted things, but they were. And so then&nbsp; this is more like our crazy backup measure of,&nbsp;&nbsp; like, if we were mistaken about what was going on.&nbsp; This is like the fallback where if we were wrong,&nbsp;&nbsp;

we're just going to learn about it in a benign&nbsp; way rather than when something really catastrophic&nbsp;&nbsp; happens. And the second reaction is like, oh,&nbsp; you're right. These are people, and we would&nbsp;&nbsp; have to do all these things to prevent a robot&nbsp;

rebellion. And in that case, again, I think you&nbsp;&nbsp; should mostly back off for a variety of reasons.&nbsp; You shouldn't build AI systems and be like,&nbsp;&nbsp; yeah, this looks like the kind of system that&nbsp; would want to rebel, but we can stop it, right?&nbsp;

Okay, maybe I guess an analogy might be if there&nbsp; was an armed uprising in the United States,&nbsp;&nbsp; we would recognize these are still people, or we&nbsp; had some militia group that had the capability to&nbsp;&nbsp; overthrow the United States. We recognize, oh,&nbsp;

these are still people who have moral rights,&nbsp;&nbsp; but also we can't allow them to have the&nbsp; capacity to overthrow the United States.&nbsp; Yeah. And if you were considering, like, hey,&nbsp; we could make another trillion such people,&nbsp;&nbsp;

I think your story shouldn't be like, well, we&nbsp; should make the trillion people, and then we&nbsp;&nbsp; shouldn't stop them from doing the armed uprising.&nbsp; You should be like, oh, boy, we were concerned&nbsp;&nbsp; about an armed uprising, and now we're proposing&nbsp;

making a trillion people. We should probably just&nbsp;&nbsp; not do that. We should probably try and sort out&nbsp; our business, and you should probably not end up&nbsp;&nbsp; in a situation where you have a billion humans and&nbsp; like, a trillion slaves who would prefer revolt.&nbsp;&nbsp;

That's just not a good world to have made. Yeah.&nbsp; And there's a second thing where you could say,&nbsp;&nbsp; that's not our goal. Our goal is just like, we&nbsp; want to pass off the world to the next generation&nbsp;&nbsp; of machines where these are some people, we like&nbsp;

them, we think they're smarter than us and better&nbsp;&nbsp; than us. And there I think that's just, like,&nbsp; a huge decision for humanity to make. And I&nbsp;&nbsp; think most humans are not at all anywhere close to&nbsp; thinking that's what they want to do. If you're in&nbsp;&nbsp;

a world where most humans are like, I'm up for it.&nbsp; The AI should replace us. The future is for the&nbsp;&nbsp; machines. Then I think that's, like, a. Legitimate&nbsp; position that I think is really complicated,&nbsp;&nbsp; and I wouldn't want to push go on that,&nbsp;

but that's just not where people are at.&nbsp; Yeah, where are you at on that? I do not right now want to just take some&nbsp;&nbsp; random AI, be like, yeah, GPT Five looks pretty&nbsp; smart, like, GPT Six, let's hand off the world to&nbsp;&nbsp;

it. And it was just some random system shaped by&nbsp; web text and what was good for making money. And&nbsp;&nbsp; it was not a thoughtful we are determining the&nbsp; fate of the universe and what our children will&nbsp;&nbsp; be like. It was just some random people at open&nbsp;

AI made some random engineering decisions with no&nbsp;&nbsp; idea what they were doing. Even if you really&nbsp; want to hand off the worlds of the machines,&nbsp;&nbsp; that's just not how you'd want to do it. Right, okay. I'm tempted to ask you what&nbsp;&nbsp;

the system would look like where you'd think,&nbsp; yeah, I'm happy with what I think. This is more&nbsp;&nbsp; thoughtful than human civilization as&nbsp; a whole. I think what it would do would&nbsp;&nbsp; be more creative and beautiful and lead to&nbsp;

better goodness in general. But I feel like&nbsp;&nbsp; your answer is probably going to be that I just&nbsp; want this society to reflect on it for a while.&nbsp; Yeah, my answer, it's going to be like that first&nbsp; question. I'm just, like, not really super ready&nbsp;&nbsp;

for it. I think when you're comparing to humans,&nbsp; most of the goodness of humans comes from this&nbsp;&nbsp; option value if we get to think for a long time.&nbsp; And I do think I like humans now more now than&nbsp;&nbsp; 500 years ago, and I like them more 500 years ago&nbsp;

than 5000 years before that. So I'm pretty excited&nbsp;&nbsp; about there's some kind of trajectory that doesn't&nbsp; involve crazy dramatic changes, but involves a&nbsp;&nbsp; series of incremental changes that I like. And so&nbsp; to the extent we're building AI, mostly I want to&nbsp;&nbsp;

preserve that option. I want to preserve that kind&nbsp; of gradual growth and development into the future.&nbsp; Okay, we can come back to this later. Let's get&nbsp; more specific on what the timelines look for these&nbsp;&nbsp; kinds of changes. So the time by which we'll have&nbsp;

an AI that is capable of building a Dyson sphere,&nbsp;&nbsp; feel free to give confidence intervals. And we&nbsp; understand these numbers are tentative and so on.&nbsp; I mean, I think AI capable of building Dyson&nbsp; sphere is like a slightly OD way to put it,&nbsp;&nbsp;

and I think it's sort of a property of&nbsp; a civilization that depends on a lot of&nbsp;&nbsp; physical infrastructure. And by Dyson sphere, I&nbsp; just understand this to mean like, I don't know,&nbsp;&nbsp; like a billion times more energy than all the&nbsp;

sunlight incident on Earth or something like&nbsp;&nbsp; that. I think I most often think about what's&nbsp; the chance in like, five years, ten years,&nbsp;&nbsp; whatever. So maybe I'd say like 15% chance by&nbsp; 2030 and like 40% chance by 2040. Those are kind&nbsp;&nbsp;

of like cash numbers from six months ago or nine&nbsp; months ago that I haven't revisited in a while.&nbsp; 40% by 2040. So I think that seems longer than&nbsp; I think Dario, when he was on the podcast,&nbsp;&nbsp; he said we would have AIS that are capable&nbsp;

of doing lots of different kinds of they'd&nbsp;&nbsp; basically pass a Turing test for a well educated&nbsp; human for, like, an hour or something. And it's&nbsp;&nbsp; hard to imagine that something that actually is&nbsp; human is long after and from there, something&nbsp;&nbsp;

superhuman. So somebody like Dario, it seems like,&nbsp; is on the much shorter end. Ilya I don't think&nbsp;&nbsp; he answered this question specifically, but I'm&nbsp; guessing similar answer. So why do you not buy the&nbsp;&nbsp; scaling picture? What makes your timelines longer?

Yeah, I mean, I'm happy maybe I want to talk&nbsp;&nbsp; separately about the 2030 or 2040 forecast.&nbsp; Once you're talking the 2040 forecast,&nbsp;&nbsp; I think which one are you more interested in&nbsp; starting with? Are you complaining about 15%&nbsp;&nbsp;

by 2030 for Dyson sphere being too low or 40% by&nbsp; 2040 being too low? Let's talk about the 2030.&nbsp; Why 15% by 2030 there yeah, I. Think my take is you can imagine&nbsp;&nbsp; two polls in this discussion. One is, like, the&nbsp;

fast poll that's like, hey, AICM is pretty smart.&nbsp;&nbsp; What exactly can it do? It's like, getting&nbsp; smarter pretty fast. That's like, one poll,&nbsp;&nbsp; and the other poll is like, hey, everything takes&nbsp; a really long time, and you're talking about this&nbsp;&nbsp;

crazy industrialization that's a factor of a&nbsp; billion growth from where we're at today, give&nbsp;&nbsp; or take. We don't know if it's even possible to&nbsp; develop technology that fast or whatever. You have&nbsp;&nbsp; this sort of two poles of that discussion, and I&nbsp;

feel like I'm presenting it that way in Pakistan,&nbsp;&nbsp; and then I'm somewhere in between with this nice,&nbsp; moderate physician of only a 15% chance. But in&nbsp;&nbsp; particular, the things that move me, I think,&nbsp; are kind of related to both of those extremes.&nbsp;&nbsp;

On the one hand, I'm like, AI systems do seem&nbsp; quite good at a lot of things and are getting&nbsp;&nbsp; better much more quickly, such that it's really&nbsp; hard to say, here's what they can't do or here's&nbsp;&nbsp; the obstruction. On the other hand, like, there&nbsp;

is not even much proof in principle right now of&nbsp;&nbsp; AI systems doing super useful cognitive work. We&nbsp; don't have a trend we can extrapolate where we're&nbsp;&nbsp; like, yeah, you've done this thing this year.&nbsp; You're going to do this thing next year. And&nbsp;&nbsp;

the other thing the following year. I think right&nbsp; now there are very broad error bars about where&nbsp;&nbsp; fundamental difficulties could be, and six years&nbsp; is just not I guess six years and 3 months is not&nbsp;&nbsp; a lot of time. So I think this, like, 15% for 2030&nbsp;

Dyson sphere, you probably need the human level AI&nbsp;&nbsp; or the AI that's like doing human jobs in, give or&nbsp; take, like, 4 years, 3 years, like, something like&nbsp;&nbsp; that. So you're just not giving very many years.&nbsp; It's not very much time. And I think there are a&nbsp;&nbsp;

lot of things that your model maybe this is some&nbsp; generalized, like things take longer than you'd&nbsp;&nbsp; think. And I feel most strongly about that when&nbsp; you're talking about 3 or 4 years. And I feel&nbsp;&nbsp; like less strongly about that as you talk about&nbsp;

ten years or 20 years. But at 3 or 4 years I feel&nbsp;&nbsp; or like six years for the Dyson sphere, I feel a&nbsp; lot of that. There's a lot of ways this could take&nbsp;&nbsp; a while, a lot of ways in which AI systems could&nbsp; be hard to hand all the work to your AI systems.&nbsp;

Okay, so maybe instead of speaking in terms&nbsp; of years, we should say, but by the way,&nbsp;&nbsp; it's interesting that you think the distance&nbsp; between can take all human cognitive labor&nbsp;&nbsp; to Dyson sphere is two years. It seems like we&nbsp;

should talk about that at some point. Presumably&nbsp;&nbsp; it's like intelligence explosion stuff. Yeah, I mean, I think amongst people you've&nbsp;&nbsp; interviewed, maybe that's like on the long end&nbsp; thinking it would take like a couple of years. And&nbsp;&nbsp;

it depends a little bit what you mean by I think&nbsp; literally all human cognitive labor is probably&nbsp;&nbsp; like more like weeks or months or something like&nbsp; that. That's kind of deep into the singularity.&nbsp;&nbsp; But yeah, there's a point where AI wages are high&nbsp;

relative to human wages, which I think is well&nbsp;&nbsp; before can do literally everything human can do. Sounds good, but before we get to that,&nbsp;&nbsp; the intelligence explosion stuff on&nbsp; the 4 years. So instead of 4 years,&nbsp;&nbsp;

maybe we can say there's going to be maybe two&nbsp; more scale ups in 4 years. Like GPT 4 to GPT&nbsp;&nbsp; five to GPT six, and let's say each one is ten&nbsp; x bigger. So what is GPT 4 like two e 25 flops?&nbsp; I don't think it's publicly stated what&nbsp;

it is, okay. But I'm happy to say, like 4&nbsp;&nbsp; orders of magnitude or five or six or whatever&nbsp; effective training compute past GPT 4 of what&nbsp;&nbsp; would you guess would happen based on sort of&nbsp; some public estimate for what we've gotten so&nbsp;&nbsp;

far from effective training compute. Do you think two more scale ups is&nbsp;&nbsp; not enough? It was like 15%. That&nbsp; two more scale ups. Get us there.&nbsp; Yeah, I mean, get us there is, again, a little&nbsp;

bit complicated. Like there's a system that's&nbsp;&nbsp; a drop in replacement for humans and there's a&nbsp; system which still requires some amount of schlep&nbsp;&nbsp; before you're able to really get everything going.&nbsp; Yeah, I think it's quite plausible that even at&nbsp;&nbsp;

I don't know what I mean by quite plausible. Like&nbsp; somewhere between 50% or two thirds or let's call&nbsp;&nbsp; it 50% even by the time you get to GPT six, or&nbsp; like, let's call it five orders of magnitude,&nbsp;&nbsp; effective training compute past GPT four, that&nbsp;

that system still requires really a large amount&nbsp;&nbsp; of work to be deployed in lots of jobs. That&nbsp; is, it's not like a drop in replacement for&nbsp;&nbsp; humans where you can just say like, hey, you&nbsp; understand everything any human understands.&nbsp;&nbsp;

Whatever role you could hire a human for,&nbsp; you just do it. That it's. More like, okay,&nbsp;&nbsp; we're going to collect large amounts of relevant&nbsp; data and use that data for fine tuning. Systems&nbsp;&nbsp; learn through fine tuning quite differently from&nbsp;

humans learning on the job or humans learning by&nbsp;&nbsp; observing things. Yeah, I just have a significant&nbsp; probability that system will still be weaker than&nbsp;&nbsp; humans in important ways. Like maybe that's&nbsp; already like 50% or something. And then another&nbsp;&nbsp;

significant probability that system will require&nbsp; a bunch of changing workflows or gathering data,&nbsp;&nbsp; or is not necessarily strictly weaker than humans,&nbsp; or if trained in the right way, wouldn't be weaker&nbsp;&nbsp; than humans, but will take a lot of schlep to&nbsp;

actually make fit into workflows and do the jobs.&nbsp; And that schlep is what gets&nbsp; you from 15% to 40% by 2040.&nbsp; Yeah, you also get a fair amount of scaling&nbsp; between you get less scaling is probably going&nbsp;&nbsp;

to be much, much faster over the next 4 or five&nbsp; years than over the subsequent years. But yeah,&nbsp;&nbsp; it's a combination of like you get&nbsp; some significant additional scaling&nbsp;&nbsp; and you get a lot of time to deal with&nbsp;

things that are just engineering hassles.&nbsp; But by the way, I guess we should be explicit&nbsp; about why you said 4 orders of magnitude scale&nbsp;&nbsp; up to get two more generations just for&nbsp; people who might not be familiar. If you&nbsp;&nbsp;

have ten x more parameters to get the most&nbsp; performance, you also want around ten x more&nbsp;&nbsp; data. So that to be tinchill optimal, that&nbsp; would be 100 x more compute total. But okay,&nbsp;&nbsp; so why is it that you disagree with the strong&nbsp;

scaling picture? At least it seems like you might&nbsp;&nbsp; disagree with the strong scaling picture that&nbsp; Dario laid out on the podcast, which would imply&nbsp;&nbsp; probably that two more generations, it wouldn't&nbsp; be something where you need a lot of schleps. It&nbsp;&nbsp;

would probably just be really fucking smart. Yeah, I mean, I think that basically just&nbsp;&nbsp; had these two claims. One is like, how smart&nbsp; exactly will it be so we don't have any curves to&nbsp;&nbsp; extrapolate and seems like there's a good chance&nbsp;

it's better than a human in all the relevant&nbsp;&nbsp; things and there's a good chance it's not. Yeah,&nbsp; that might be totally wrong. Like maybe just&nbsp;&nbsp; making up numbers, I guess like 50 50 on that one. If it's 50 50 by in the next 4 years that it will&nbsp;&nbsp;

be around human smart, then how do we get&nbsp; to 40% by 20? Like whatever sort of Slepts&nbsp;&nbsp; they are. How does it degrade you 10%, even&nbsp; after all the scaling that happens by 2040?&nbsp; Yeah, all these numbers are pretty made&nbsp;

up. And that 40% number was probably from&nbsp;&nbsp; before or even like the chat GPT release or&nbsp; the seeing GPT 3.5 or GPT four. So, I mean,&nbsp;&nbsp; the numbers are going to bounce around a bit and&nbsp; all of them are pretty made up. But like that 50%,&nbsp;&nbsp;

I want to then combine with the second 50% that's&nbsp; more like on this schlep side. And then I probably&nbsp;&nbsp; want to combine with some additional probabilities&nbsp; for various forms of slowdown, where a slowdown&nbsp;&nbsp; could include like a deliberate decision to slow&nbsp;

development of technology or could include just&nbsp;&nbsp; like we suck at deploying things. Like that is&nbsp; a sort of decision you might regard as wise to&nbsp;&nbsp; slow things down, or decision that's like maybe&nbsp; unwise or maybe wise for the wrong reasons to&nbsp;&nbsp;

slow things down. You probably want to add some of&nbsp; that on top. I probably want to add on some loss&nbsp;&nbsp; for like it's possible you don't produce GPT six&nbsp; scale systems within the next 3 years or 4 years.&nbsp; Let's isolate for all of that. And how much&nbsp;

bigger would the system be than GPT 4 where&nbsp;&nbsp; you think there's more than 50% chance&nbsp; that it's going to be smart enough to&nbsp;&nbsp; replace basically all human cognitive labor. Also I want to say that for the 50 25% thing,&nbsp;&nbsp;

I think that would probably suggest those&nbsp; numbers if I randomly made them up and&nbsp;&nbsp; then made the decimal sphere prediction that's&nbsp; going to gear you like 60% by 2040 or something,&nbsp;&nbsp; not 40%. And I have no idea between those. These&nbsp;

are all made up and I have no idea which of those&nbsp;&nbsp; I would endorse on reflection. So this question of&nbsp; how big would you have to make the system before&nbsp;&nbsp; it's more likely than not that you can be like&nbsp; a drop in replacement for humans. I think if you&nbsp;&nbsp;

just literally say like you train on web text,&nbsp; then the question is kind of hard to discuss&nbsp;&nbsp; because I don't really buy stories that training&nbsp; data makes a big difference. Long run to these&nbsp;&nbsp; dynamics. But I think if you want to just imagine&nbsp;

the hypothetical, like you just took GPT 4 and&nbsp;&nbsp; made the numbers bigger, then I think those&nbsp; are pretty significant issues. I think there's&nbsp;&nbsp; significant issues in two ways. One is like&nbsp; quantity of data and I think probably the larger&nbsp;&nbsp;

one is like quality of data where I think as you&nbsp; start approaching the prediction task is not that&nbsp;&nbsp; great a task. If you're like a very weak model,&nbsp; it's a very good signal. We get smarter. At some&nbsp;&nbsp; point it becomes like a worse and worse signal to&nbsp;

get smarter. I think there's a number of reasons.&nbsp;&nbsp; It's not clear there is any number such that I&nbsp; imagine, or there is a number, but I think it's&nbsp;&nbsp; very large. So do you plug that number into GPT&nbsp; force code and then maybe fiddled the architecture&nbsp;&nbsp;

a bit? I would expect that thing to have a more&nbsp; than 50% chance of being a drop in replacement&nbsp;&nbsp; for humans. You're always going to have to do&nbsp; some work, but the work is not necessarily much,&nbsp;&nbsp; I would guess. When people say new insight is&nbsp;

needed, I think I tend to be more bullish than&nbsp;&nbsp; them. I'm not like these are new ideas where&nbsp; who knows how long it will take. I think it's&nbsp;&nbsp; just like you have to do some stuff. You have to&nbsp; make changes unsurprisingly. Like every time you&nbsp;&nbsp;

scale something up by like five orders of&nbsp; magnitude, you have to make some changes.&nbsp; I want to better understand your intuition of&nbsp; being more skeptical than some about scaling&nbsp;&nbsp; picture that these changes are even needed in&nbsp;

the first place, or that it would take more&nbsp;&nbsp; than two orders of magnitude, more improvement&nbsp; to get these things almost certainly to a human&nbsp;&nbsp; level or a very high probability to human level.&nbsp; So is it that you don't agree with the way in&nbsp;&nbsp;

which they're extrapolating these loss curves?&nbsp; You don't agree with the implication that that&nbsp;&nbsp; decrease in loss will equate to greater and&nbsp; greater intelligence? Or what would you tell&nbsp;&nbsp; Dario about if you were having I'm sure you have,&nbsp;

but what would that debate look like about this?&nbsp; Yeah. So again, here we're talking two factors of&nbsp; a half. One on like, is it smart enough? And one&nbsp;&nbsp; on like, do you have to do a bunch of schlap&nbsp; even if in some sense it's smart enough? And&nbsp;&nbsp;

like the first factor of a half, I'd be like,&nbsp; I don't think we have really anything good to&nbsp;&nbsp; extrapolate that is like, I feel I would not&nbsp; be surprised if I have similar or maybe even&nbsp;&nbsp; higher probabilities on really crazy stuff over&nbsp;

the next year and then lower. My probability is&nbsp;&nbsp; not that bunched up. Maybe Dara's probability, I&nbsp; don't know. You'd have talked with him is like,&nbsp;&nbsp; you have talked with him is more bunched up&nbsp; on some particular year and mine is maybe a&nbsp;&nbsp;

little bit more uniformly spread out across the&nbsp; coming years, partly because I'm just like I don't&nbsp;&nbsp; think we have some trends we can extrapolate&nbsp; like an extrapolate loss. You can look at your&nbsp;&nbsp; qualitative impressions of systems at various&nbsp;

scales, but it's just very hard to relate any&nbsp;&nbsp; of those extrapolations to doing cognitive work&nbsp; or accelerating R and D or taking over and fully&nbsp;&nbsp; automating R and D. So I have a lot of uncertainty&nbsp; around that extrapolation. I think it's very easy&nbsp;&nbsp;

to get down to like a 50 50 chance of this. What about the sort of basic intuition that,&nbsp;&nbsp; listen, this is a big Blop of compute. You make&nbsp; the big block of compute big or it's going to&nbsp;&nbsp; get smarter. It'd be really weird if it didn't.

I'm happy with that. It's going to get smarter,&nbsp;&nbsp; and it would be really weird if it didn't. And the&nbsp; question is how smart does it have to get? Like,&nbsp;&nbsp; that argument does not yet give us a&nbsp; quantitative guide to at what scale is&nbsp;&nbsp;

it a slam dunk or at what scale is it? 50 50? And what would be the piece of evidence that&nbsp;&nbsp; would nudge you one way or another, where you&nbsp; look at that and be like, oh fuck, this is at&nbsp;&nbsp; 20% by 2040 or 60% by 2040 or something. Is there&nbsp;

something that could happen in the next few years&nbsp;&nbsp; or next 3 years? What is the thing you're looking&nbsp; to where this will be a big update for you?&nbsp; Again, I think there's some just how capable&nbsp; is each model where I think we're really&nbsp;&nbsp;

bad at extrapolating. We still have some&nbsp; subjective guess and you're comparing it&nbsp;&nbsp; to what happened and that will move me. Every&nbsp; time we see what happens with another order of&nbsp;&nbsp; magnitude of training compute, I will have a&nbsp;

slightly different guess for where things are&nbsp;&nbsp; going. These probabilities are coarse enough&nbsp; that, again, I don't know if that 40% is real&nbsp;&nbsp; or if like post GBG 3.5 and four, I should be at&nbsp; like 60% or what. That's one thing. And the second&nbsp;&nbsp;

thing is just like some if there was some ability&nbsp; to extrapolate, I think this could reduce error&nbsp;&nbsp; bars a lot. I think here's another way you could&nbsp; try and do an extrapolation is you could just say&nbsp;&nbsp; how much economic value do systems produce and&nbsp;

how fast is that growing? I think once you have&nbsp;&nbsp; systems actually doing jobs, the extrapolation&nbsp; gets easier because you're not moving from a&nbsp;&nbsp; subjective impression of a chat to automating all&nbsp; R and D, you're moving from automating this job to&nbsp;&nbsp;

automating that job or whatever. Unfortunately,&nbsp; that's like probably by the time you have nice&nbsp;&nbsp; trends from that, you're not talking about 2040,&nbsp; you're talking about two years from the end of&nbsp;&nbsp; days or one year from the end of days or whatever.&nbsp;

But to the extent that you can get extrapolations&nbsp;&nbsp; like that, I do think it can provide more clarity. But why is economic value the thing we would want&nbsp;&nbsp; to extrapolate? Because, for example, you&nbsp; started off with chimps and they're just&nbsp;&nbsp;

getting gradually smarter to human level. They&nbsp; would basically provide no economic value until&nbsp;&nbsp; they were basically worth as much as a human. So&nbsp; it would be this very gradual and then very fast&nbsp;&nbsp; increase in their value. So is the increase&nbsp;

in value from GBD four, GBD five, GBD six? Is&nbsp;&nbsp; that the extrapolation we want? Yeah, I think that the economic&nbsp;&nbsp; extrapolation is not great. I think it's like you&nbsp; could compare it to this objective extrapolation&nbsp;&nbsp;

of how smart does the model seem? It's&nbsp; not super clear which one's better. I&nbsp;&nbsp; think probably in the chimp case, I don't think&nbsp; that's quite right. So if you imagine intensely&nbsp;&nbsp; domesticated chimps who are just actually trying&nbsp;

their best to be really useful employees and you&nbsp;&nbsp; hold fix their physical hardware and then you&nbsp; just gradually scale up their intelligence,&nbsp;&nbsp; I don't think you're going to see zero value,&nbsp; which then suddenly becomes massive value over&nbsp;&nbsp;

one doubling of brain size or whatever one order&nbsp; of magnitude of brain size. It's actually possible&nbsp;&nbsp; in order of magnitude of brain size, but chimps&nbsp; are already within an order of magnitude of brain&nbsp;&nbsp; sizes of humans. Like, chimps are very, very close&nbsp;

on the kind of spectrum we're talking about. So I&nbsp;&nbsp; think I'm skeptical of the abrupt transition for&nbsp; chimps. And to the extent that I kind of expect&nbsp;&nbsp; a fairly abrupt transition here, it's mostly just&nbsp; because the chimp human intelligence difference is&nbsp;&nbsp;

so small compared to the differences we're talking&nbsp; about with respect to these models. That is,&nbsp;&nbsp; like, I would not be surprised if in some&nbsp; objective sense, like, chimp human difference&nbsp;&nbsp; is significantly smaller than the GPT-3 GPT 4&nbsp;

difference, the GPT four, GPT five difference.&nbsp; Wait, wouldn't that argue in favor of&nbsp; just relying much more on this objective?&nbsp; Yeah, there's sort of two balancing tensions&nbsp; here. One is like, I don't believe the chimp&nbsp;&nbsp;

thing is going to be as abrupt. That is, I&nbsp; think if you scaled up from chimps to humans,&nbsp;&nbsp; you actually see quite large economic value&nbsp; from the fully domesticated chimp already.&nbsp; Okay.

And then the second half is like, yeah, I think&nbsp;&nbsp; that the chimp human difference is probably pretty&nbsp; small compared to model differences. So I do think&nbsp;&nbsp; things are going to be pretty abrupt. I think&nbsp; the economic extrapolation is pretty rough. I&nbsp;&nbsp;

also think the subjective extrapolation is pretty&nbsp; rough just because I really don't know how to get&nbsp;&nbsp; I don't know how people do the extrapolation end&nbsp; up with the degrees of confidence people end up&nbsp;&nbsp; with. Again, I'm putting it pretty high if I'm&nbsp;

saying, like, give me 3 years, and I'm like, yeah,&nbsp;&nbsp; 50 50, it's going to have basically the smarts&nbsp; there to do the thing. I'm not saying it's like&nbsp;&nbsp; a really long layoff. I'm just saying I got pretty&nbsp; big error bars. And I think that it's really hard&nbsp;&nbsp;

not to have really big error bars when you're&nbsp; doing this. I looked at GPT four, it seemed pretty&nbsp;&nbsp; smart compared to GPT 3.5. So I bet just like 4&nbsp; more such notches and we're there. That's just&nbsp;&nbsp; a hard call to make. I think I sympathize more&nbsp;

with people who are like, how could it not happen&nbsp;&nbsp; in 3 years than with people who are like, no way&nbsp; it's going to happen in eight years, or whatever,&nbsp;&nbsp; which is probably a more common perspective in the&nbsp; world. But also things do take longer than you I&nbsp;&nbsp;

think things take longer than you think. It's like&nbsp; a real thing. Yeah, I don't know. Mostly I have&nbsp;&nbsp; big error bars because I just don't believe the&nbsp; subjective extrapolation that much. I find it&nbsp;&nbsp; hard to get like a huge amount out of it.

Okay, so what about the scaling picture&nbsp;&nbsp; do you think is most likely to be wrong? Yeah. So we've talked a little bit about how&nbsp;&nbsp; good is the qualitative extrapolation, how good&nbsp; are people at comparing? So this is not like the&nbsp;&nbsp;

picture being qualitative wrong. This is just&nbsp; quantitatively. It's very hard to know how far&nbsp;&nbsp; off you are. I think a qualitative consideration&nbsp; that could significantly slow things down is just&nbsp;&nbsp; like right now you get to observe this really rich&nbsp;

supervision from basically next word prediction,&nbsp;&nbsp; or in practice, maybe you're looking at a couple&nbsp; of sentences prediction. So getting this pretty&nbsp;&nbsp; rich supervision, it's plausible that if you&nbsp; want to automate long horizon tasks like being&nbsp;&nbsp;

an employee over the course of a month, that&nbsp; that's actually just considerably harder to&nbsp;&nbsp; supervise. Or that you basically end up driving&nbsp; costs. Like the worst case here is that you drive&nbsp;&nbsp; up costs by a factor that's like linear in the&nbsp;

horizon over which the thing is operating. And&nbsp;&nbsp; I still consider that just quite plausible. Can you dump that down? You're driving up a&nbsp;&nbsp; cost about of what in the linear&nbsp; and the does the horizon mean?&nbsp;

Yeah. So if you imagine you want to train a system&nbsp; to say words that sound like the next word a human&nbsp;&nbsp; would say, there you can get this really rich&nbsp; supervision by having a bunch of words and then&nbsp;&nbsp; predicting the next one and then being like, I'm&nbsp;

going to tweak the model, so it predicts better if&nbsp;&nbsp; you're like, hey, here's what I want. I want my&nbsp; model to interact with some job over the course&nbsp;&nbsp; of a month and then at the end of that month have&nbsp; internalized everything that the human would have&nbsp;&nbsp;

internalized about how to do that job well and&nbsp; have local context and so on. It's harder to&nbsp;&nbsp; supervise that task. So in particular, you could&nbsp; supervise it from the next word prediction task&nbsp;&nbsp; and all that context the human has ultimately will&nbsp;

just help them predict the next word better. So,&nbsp;&nbsp; like, in some sense, a really long context&nbsp; language model is also learning to do that&nbsp;&nbsp; task. But the number of effective data points&nbsp; you get of that task is vastly smaller than&nbsp;&nbsp;

the number of effective data points you get&nbsp; at this very short horizon. Like what's the&nbsp;&nbsp; next word, what's the next sense tasks? The sample efficiency matters more for&nbsp;&nbsp; economically valuable long horizon tasks than the&nbsp;

predicting the next token. And that's what will&nbsp;&nbsp; actually be required to take over a lot of jobs. Yeah, something like that. That is, it just seems&nbsp;&nbsp; very plausible that it takes longer to train&nbsp; models to do tasks that are longer horizon.&nbsp;

How fast do you think the pace of algorithmic&nbsp; advances will be? Because if by 2040,&nbsp;&nbsp; even if scaling fails since 2012, since the&nbsp; beginning of the deep learning revolution,&nbsp;&nbsp; we've had so many new things by 2040, are you&nbsp;

expecting a similar pace of increases? And if so,&nbsp;&nbsp; then if we just keep having things like&nbsp; this, then aren't we going to just going to&nbsp;&nbsp; get the AI sooner or later? Or sooner? Not later.&nbsp; Aren't we going to get the AI sooner or sooner?&nbsp;

I'm with you on sooner or later. Yeah, I&nbsp; suspect progress to slow. If you held fixed&nbsp;&nbsp; how many people working in the field, I would&nbsp; expect progress to slow as low hanging fruit is&nbsp;&nbsp; exhausted. I think the rapid rate of progress&nbsp;

in, say, language modeling over the last 4&nbsp;&nbsp; years is largely sustained by, like, you start&nbsp; from a relatively small amount of investment,&nbsp;&nbsp; you greatly scale up the amount of investment,&nbsp; and that enables you to keep picking. Every time&nbsp;&nbsp;

the difficulty doubles, you just double the size&nbsp; of the field. I think that dynamic can hold up&nbsp;&nbsp; for some time longer. Right now, if you think&nbsp; of it as, like, hundreds of people effectively&nbsp;&nbsp; searching for things up from, like, you know,&nbsp;

anyway, if you think of it hundreds of people&nbsp;&nbsp; now you can maybe bring that up to like, tens of&nbsp; thousands of people or something. So for a while,&nbsp;&nbsp; you can just continue increasing the size of the&nbsp; field and search harder and harder. And there is&nbsp;&nbsp;

indeed a huge amount of low hanging fruit where&nbsp; it wouldn't be a hard for a person to sit around&nbsp;&nbsp; and make things a couple of percent better after&nbsp; after year of work or whatever. So I don't know. I&nbsp;&nbsp; would probably think of it mostly in terms of how&nbsp;

much can investment be expanded and try and guess&nbsp;&nbsp; some combination of fitting that curve and some&nbsp; combination of fitting the curve to historical&nbsp;&nbsp; progress, looking at how much low hanging fruit&nbsp; there is, getting a sense of how fast it decays.&nbsp;&nbsp;

I think you probably get a lot, though. You get a&nbsp; bunch of orders of magnitude of total, especially&nbsp;&nbsp; if you ask how good is a GPT five scale model or&nbsp; GPT 4 scale model? I think you probably get like,&nbsp;&nbsp; by 2040, like, I don't know, 3 orders of magnitude&nbsp;

of effective training compute improvement or like,&nbsp;&nbsp; a good chunk of effective training compute&nbsp; improvement, 4 orders of magnitude. I don't&nbsp;&nbsp; know. I don't have, like here I'm speaking from no&nbsp; private information about the last couple of years&nbsp;&nbsp;

of efficiency improvements. And so people who&nbsp; are on the ground will have better senses of&nbsp;&nbsp; exactly how rapid returns are and so on. Okay, let me back up and ask a question&nbsp;&nbsp; more generally about people. Make these analogies&nbsp;

about humans were trained by evolution and were&nbsp;&nbsp; deployed in the modern civilization. Do you buy&nbsp; those analogies? Is it valid to say that humans&nbsp;&nbsp; were trained by evolution rather than I mean, if&nbsp; you look at the protein coding size of the genome,&nbsp;&nbsp;

it's like 50 megabytes or something. And then&nbsp; what part of that is for the brain anyways? How&nbsp;&nbsp; do you think about how much information is in? Do&nbsp; you think of the genome as a hyperparameters? Or&nbsp;&nbsp; how much does that inform you when you have&nbsp;

these anchors for how much training humans&nbsp;&nbsp; get when they're just consuming information,&nbsp; when they're walking up and about and so on?&nbsp; I guess the way. That you could think of. This is&nbsp; like, I think both analogies are reasonable. One&nbsp;&nbsp;

analogy being like, evolution is like a training&nbsp; run and humans are like the end product of that&nbsp;&nbsp; training run. And a second analogy is like,&nbsp; evolution is like an algorithm designer and then&nbsp;&nbsp; a human over the course of this modest amount of&nbsp;

computation over their lifetime is the algorithm&nbsp;&nbsp; being that's been produced, the learning algorithm&nbsp; has been produced. And I think neither analogy is&nbsp;&nbsp; that great. I like them both and lean on them a&nbsp; bunch, both of them a bunch, and think that's been&nbsp;&nbsp;

pretty good for having a reasonable view of what's&nbsp; likely to happen. That said, the human genome is&nbsp;&nbsp; not that much like 100 trillion parameter model.&nbsp; It's like a much smaller number of parameters that&nbsp;&nbsp; behave in a much more confusing way. Evolution&nbsp;

did a lot more optimization, especially over long&nbsp;&nbsp; designing a brain to work well over a lifetime&nbsp; than gradient descent does over models. That's&nbsp;&nbsp; like a dis analogy on that side and on the&nbsp; other side, I think human learning over the&nbsp;&nbsp;

course of a human lifetime is in many ways just&nbsp; like much, much better than gradient descent&nbsp;&nbsp; over the space of neural nets. Gradient descent&nbsp; is working really well, but I think we can just&nbsp;&nbsp; be quite confident that in a lot of ways, human&nbsp;

learning is much better. Human learning is also&nbsp;&nbsp; constrained. Like, we just don't get to see much&nbsp; data. And that's just an engineering constraint&nbsp;&nbsp; that you can relax, you can just give your neural&nbsp; nets way more data than humans have access to.&nbsp;

In what ways is human learning&nbsp; superior to grading descent?&nbsp; I mean, the most obvious one is just like, ask&nbsp; how much data it takes a human to become like,&nbsp;&nbsp; an expert in some domain, and it's like much,&nbsp;

much smaller than the amount of data that's&nbsp;&nbsp; going to be needed on any plausible trend&nbsp; extrapolation, not in terms of performance.&nbsp; But is it the active learning&nbsp; part? Is it the structure?&nbsp;

I mean, I would guess a complicated mess of&nbsp; a lot of things. In some sense. There's not&nbsp;&nbsp; that much going on in a brain. Like, as you say,&nbsp; there's just not that many, not that many bytes&nbsp;&nbsp; in a genome, but there's very, very few bytes in&nbsp;

an ML algorithm. Like, if you think a genome is&nbsp;&nbsp; like a billion bytes or whatever, maybe you think&nbsp; less, maybe you think it's like 100 million bytes,&nbsp;&nbsp; then an ML algorithm is like, if compressed,&nbsp; probably more like hundreds of thousands of&nbsp;&nbsp;

bytes or something. The total complexity of&nbsp; like, here's how you train GPC 4 is just like,&nbsp;&nbsp; I haven't thought about these numbers, but it's&nbsp; very, very small compared to a genome. And so&nbsp;&nbsp; although a genome is very simple, it's like&nbsp;

very, very complicated compared to algorithms&nbsp;&nbsp; that humans design. Like, really hideously more&nbsp; complicated than algorithm a human would design.&nbsp; Is that true? Okay, so the human genome&nbsp; is 3 billion base pairs or something,&nbsp;&nbsp;

but only like one or 2% of that is protein&nbsp; coding. So that's 50 million base pairs.&nbsp; I don't know much about biology in particular. I&nbsp; guess the question is how many of those bits are&nbsp;&nbsp; productive for shaping development of a brain and&nbsp;

presumably a significant part of the non protein&nbsp;&nbsp; coding genome can? I mean, I just don't know,&nbsp; it seems really hard to guess how much of that&nbsp;&nbsp; plays a role. The most important decisions are&nbsp; probably from an algorithm design perspective&nbsp;&nbsp;

are not. Like the protein coding part is less&nbsp; important than the decisions about what happens&nbsp;&nbsp; during development or how cells differentiate. I&nbsp; know nothing about biologists I respect, but I'm&nbsp;&nbsp; happy to run with 100 million base pairs, though.

But on the other end, on the hyperparameters of&nbsp;&nbsp; the GP 4 training run, that might be not that&nbsp; much. But if you're going to include all the&nbsp;&nbsp; base pairs in the genome, which are not all&nbsp; relevant to the brains or are relevant to very&nbsp;&nbsp;

bigger details about just the basics of biology&nbsp; should probably include the Python Library and&nbsp;&nbsp; the compilers and the operating system for GBD&nbsp; 4 as well to make that comparison analogous. So&nbsp;&nbsp; at the end of the day, I actually don't know&nbsp;

which one is storing much more information.&nbsp; Yeah, I mean, I think the way I would put it is&nbsp; like the number of bits it takes to specify the&nbsp;&nbsp; learning algorithm to train GPT 4 is like very&nbsp; small. And you might wonder maybe a genome, like,&nbsp;&nbsp;

the number of bits it would take to specify a&nbsp; brain is also very small and a genome is much,&nbsp;&nbsp; much faster than that. But it is also just&nbsp; plausible that a genome is like closer to&nbsp;&nbsp; certainly the space, the amount of space to put&nbsp;

complexity in a genome. We could ask how well&nbsp;&nbsp; solution uses it, and I have no idea whatsoever,&nbsp; but the amount of space in a genome is very,&nbsp;&nbsp; very vast compared to the number of bits that&nbsp; are actually taken to specify the architecture&nbsp;&nbsp;

or optimization procedure and so on. For GPT&nbsp; four, just because, again, genome is simple,&nbsp;&nbsp; but algorithms are really very simple.&nbsp; ML algorithms are really very simple.&nbsp; And stepping back, do you think this is where the&nbsp;

better sample efficiency of human learning comes&nbsp;&nbsp; from? Like, why it's better than gradient descent? Yes. I haven't thought that much about the sample&nbsp;&nbsp; efficiency question in a long time. But if you&nbsp; thought like a synapse of seeing something like&nbsp;&nbsp;

a neuron firing once per second, then how many&nbsp; seconds are there in a human life? We can just&nbsp;&nbsp; flip a calculator real quick. Yeah, let's&nbsp; do some calculating. Tell me the number 3600&nbsp;&nbsp; seconds/hour times 24 times 365 times 20.

Okay, so that's 630,000,000 seconds.&nbsp; That means like, the average synapse is seeing&nbsp; like 630,000,000. I don't know exactly what the&nbsp;&nbsp; numbers are, but something is ballpark. Let's&nbsp; call it like a billion action potentials and&nbsp;&nbsp;

then there's some resolution. Each of those&nbsp; carries some bits, but let's say it carries&nbsp;&nbsp; like ten bits or something. Just from timing&nbsp; information at the resolution you have available,&nbsp;&nbsp; then you're looking at like 10 billion bits.&nbsp;

So each parameter is kind of like how much is&nbsp;&nbsp; a parameter seeing? It's like not seeing that&nbsp; much. So then you can compare that to language.&nbsp;&nbsp; I think that's probably less than current language&nbsp; models see and current language models are so it's&nbsp;&nbsp;

like not clear. You have a huge gap here, but&nbsp; I think it's pretty clear you're going to have&nbsp;&nbsp; a gap of like at least 3 or fours of magnitude. Didn't your wife do the lifetime anchors where she&nbsp;&nbsp; said the amount of bytes that a human will see&nbsp;

in their lifetime was one, e. 24 or something?&nbsp; Number of bytes a human will see is 124.&nbsp; Mostly this was organized around total&nbsp;&nbsp; operations performed in a brain. Okay, never mind. Sorry.&nbsp;

Yeah, so I think that the story there would be&nbsp; like a brain is just in some other part of the&nbsp;&nbsp; parameter space where it's like using a lot of&nbsp; compute for each piece of data it gets and then&nbsp;&nbsp; just not seeing very much data in total. Yeah,&nbsp;

it's not really plausible. If you extrapolate out&nbsp;&nbsp; language models, you're going to end up with like&nbsp; a performance profile similar to a brain. I don't&nbsp;&nbsp; know how much better it is. I did this random&nbsp; investigation at one point where I was like,&nbsp;&nbsp;

how good are things made by evolution compared&nbsp; to things made by humans? Which is a pretty&nbsp;&nbsp; insane seeming exercise. But I don't know, it&nbsp; seems like orders of magnitude is typical. Like&nbsp;&nbsp; not tons of orders of magnitude, not factors of&nbsp;

two. Like, things by humans are 1000 times more&nbsp;&nbsp; expensive to make or 1000 times heavier per unit&nbsp; performance. If you look at things like how good&nbsp;&nbsp; are solar panels relative to leaves? Or how&nbsp; good are muscles relative to motors? Or how&nbsp;&nbsp;

good are livers relative to systems that&nbsp; perform analogous chemical reactions in.&nbsp; Industrial settings, was there a consistent&nbsp; number of orders of magnitude in these&nbsp;&nbsp; different systems or was it all over the.

Place so like a very rough ballpark? It&nbsp;&nbsp; was like sort of for the most extreme things,&nbsp; you were looking at like five or six orders of&nbsp;&nbsp; magnitude. And that would especially come in,&nbsp; like, energy cost of manufacturing where bodies&nbsp;&nbsp;

are just very good at building complicated&nbsp; organs like extremely cheaply. And then for&nbsp;&nbsp; other things like leafs or eyeballs or livers&nbsp; or whatever, you tended to see more. Like if&nbsp;&nbsp; you set aside manufacturing costs and just look at&nbsp;

operating costs or performance trade offs, like,&nbsp;&nbsp; I don't know, more like 3 orders of magnitude&nbsp; or something like that, or some things that.&nbsp; Are on the smaller scale, like the nanomachines&nbsp; or whatever that we can't do at all.&nbsp;

Right, yeah. So it's a little bit hard to say&nbsp; exactly what the task definition is there like&nbsp;&nbsp; you could say, like making a bone. We can't make a&nbsp; bone, but you could try and compare a bow and the&nbsp;&nbsp; performance characteristics of a bone to something&nbsp;

else. Like, we can't make spider silk. You could&nbsp;&nbsp; try and compare the performance characteristics of&nbsp; spider silk, like things that we can synthesize.&nbsp; The reason this would be why that evolution&nbsp; has had more time to design these systems.&nbsp;

I don't know. I was mostly just curious about&nbsp; what the performance I think most people would&nbsp;&nbsp; object to be like, how did you choose these&nbsp; reference classes of things that are like&nbsp;&nbsp; fair intersections? Some of them seem reasonable.&nbsp;

Like eyes versus cameras seems like just everyone&nbsp;&nbsp; needs eyes, everyone needs cameras. It feels very&nbsp; fair. Photosynthesis seems like very reasonable.&nbsp;&nbsp; Everyone needs to take solar energy and then&nbsp; turn it into a usable form of energy. I don't&nbsp;&nbsp;

really have a mechanistic story. Evolution in&nbsp; principle has spent way, way more time than we&nbsp;&nbsp; have designing. It's absolutely unclear how that's&nbsp; going to shake out. My guess would be in general,&nbsp;&nbsp; I think there aren't that many things where humans&nbsp;

really crush evolution, where you can't tell,&nbsp;&nbsp; like a pretty simple story about why, for example,&nbsp; roads and moving over roads with wheels crushes&nbsp;&nbsp; evolution. But it's not like an animal would have&nbsp; wanted to design a wheel. You're just not allowed&nbsp;&nbsp;

to pave the world and then put things on wheels.&nbsp; If you're an animal. Maybe planes are more anyway,&nbsp;&nbsp; whatever. There's various things you could&nbsp; try and tell. There's some things humans do&nbsp;&nbsp; better at, but it's normally pretty clear why&nbsp;

humans are able to win when humans are able to&nbsp;&nbsp; win. The point of all this was like, it's not&nbsp; that surprising to me. I think this is mostly&nbsp;&nbsp; like a pro short timeline view. It's not that&nbsp; surprising to me. If you tell me machine learning&nbsp;&nbsp;

systems are like 3 or fours of magnitude less&nbsp; efficient at learning than human brains, I'm like,&nbsp;&nbsp; that actually seems like kind of indistribution&nbsp; for other stuff. And if that's your view, then I&nbsp;&nbsp; think you're probably going to hit then you're&nbsp;

looking at like ten to the 27 training compute&nbsp;&nbsp; or something like that, which is not so far. We'll get back to the timeline stuff in a&nbsp;&nbsp; second. At some point, we should talk about&nbsp; alignment. So let's talk about alignment. At&nbsp;&nbsp;

what stage does misalignment happen? So right&nbsp; now, with something like GPT four, I'm not&nbsp;&nbsp; even sure it would make sense to say that it's&nbsp; misaligned because it's not aligned to anything&nbsp;&nbsp; in particular. Is that at human level where you&nbsp;

think the ability to be deceptive comes about?&nbsp;&nbsp; What is a process by which misalignment happens? I think even for GPT Four, it's reasonable to ask&nbsp;&nbsp; questions like, are there cases where&nbsp; GPT 4 knows that humans don't want X,&nbsp;&nbsp;

but it does X anyway? Where it's like,&nbsp; well, I know that I could give this answer,&nbsp;&nbsp; which is misleading and if it was explained to a&nbsp; human what was happening, they wouldn't want that&nbsp;&nbsp; to be done. But I'm going to produce it. I think&nbsp;

that GPT 4 understands things enough that you can&nbsp;&nbsp; have that misalignment in that sense. Yeah,&nbsp; I think GPT I've sometimes talked about being&nbsp;&nbsp; benign instead of aligned, meaning that, well,&nbsp; it's not exactly clear if it's aligned or if that&nbsp;&nbsp;

context is meaningful. It's just like kind of a&nbsp; messy word to use in general. But the thing we're&nbsp;&nbsp; more confident of is it's not optimizing for this&nbsp; goal, which is like, across purposes to humans.&nbsp;&nbsp; It's either optimizing for nothing or maybe it's&nbsp;

optimizing for what humans want, or close enough,&nbsp;&nbsp; or something that's like an approximation good&nbsp; enough to still not take over. But anyway, I'm&nbsp;&nbsp; like some of these abstractions seem like they do&nbsp; apply to GPT Four. It seems like probably it's not&nbsp;&nbsp;

egregiously misaligned, it's not doing the kind&nbsp; of thing that could lead to takeover, we'd guess.&nbsp; Suppose you have a system at some point which&nbsp; ends up in it wanting takeover, what are the&nbsp;&nbsp; checkpoints and also what is the internal? Is it&nbsp;

just that to become more powerful it needs agency&nbsp;&nbsp; and agency implies other goals? Or do you see a&nbsp; different process by which misalignment happens?&nbsp; Yes, I think there's a couple of possible stories&nbsp; for getting to catastrophic misalignment, and they&nbsp;&nbsp;

have slightly different answers to this question.&nbsp; So maybe I'll just briefly describe two stories&nbsp;&nbsp; and try and talk about when they start making&nbsp; sense to me. So one type of story is you train&nbsp;&nbsp; or fine tune your AI system to do things that&nbsp;

humans will rate highly or that get other kinds&nbsp;&nbsp; of reward in a broad diversity of situations.&nbsp; And then it learns to, in general, dropped&nbsp;&nbsp; in some new situation, try and figure out which&nbsp; actions would receive a high reward or whatever,&nbsp;&nbsp;

and then take those actions and then when deployed&nbsp; in the real world, sort of gaining control of its&nbsp;&nbsp; own training. Data provision process is something&nbsp; that gets a very high reward. And so it does that.&nbsp;&nbsp; This is like one kind of story. Like it wants&nbsp;

to grab the reward button or whatever. It wants&nbsp;&nbsp; to intimidate the humans into giving it a high&nbsp; reward, et cetera. I think that doesn't really&nbsp;&nbsp; require that much. This basically requires a&nbsp; system which is like, in fact, looks at a bunch of&nbsp;&nbsp;

environments, is able to understand the mechanism&nbsp; of reward provision as like a common feature of&nbsp;&nbsp; those environments, is able to think in some novel&nbsp; environment, like, hey, which actions would result&nbsp;&nbsp; in me getting a high reward? And is thinking about&nbsp;

that concept precisely enough that when it says&nbsp;&nbsp; high reward, it's saying like, okay, well, how is&nbsp; reward actually computed? It's like some actual&nbsp;&nbsp; physical process being implemented in the world.&nbsp; My guess would be like GPT 4 is about at the level&nbsp;&nbsp;

where with handholding you can observe this kind&nbsp; of scary generalizations of this type, although I&nbsp;&nbsp; think they haven't been shown. Basically, that is&nbsp; you can have a system which in fact is fine tune&nbsp;&nbsp; out a bunch of cases and then in some new case&nbsp;

will try and do an end run around humans. Even&nbsp;&nbsp; in a way humans would penalize if they were able&nbsp; to notice it or would have penalized in training&nbsp;&nbsp; environments. So I think GBT 4 is kind of at the&nbsp; boundary where these things are possible. Examples&nbsp;&nbsp;

kind of exist, but are getting significantly&nbsp; better over time. I'm very excited about,&nbsp;&nbsp; like, there's this anthropic project basically&nbsp; trying to see how good an example can you make&nbsp;&nbsp; now of this phenomena? And I think the answer is&nbsp;

kind of okay, probably. So that just, I think,&nbsp;&nbsp; is going to continuously get better from here.&nbsp; I think for the level where we're concerned,&nbsp;&nbsp; this is related to me having really broad&nbsp; distributions over how smart models are. I think&nbsp;&nbsp;

it's not out of the question that you take GPT&nbsp; four's understanding of the world is much crisper&nbsp;&nbsp; and much better than GPT three's understanding,&nbsp; just like, it's really like night and day. And so&nbsp;&nbsp; it would not be that crazy to me if you took GPT&nbsp;

five and you trained it to get a bunch of reward&nbsp;&nbsp; and it was actually like, okay, my goal is not&nbsp; doing the kind of thing which thematically looks&nbsp;&nbsp; nice to humans. My goal is getting a bunch&nbsp; of reward, and then we'll generalize in a.&nbsp;

New situation to get reward, by the way, this&nbsp; requires it to consciously want to do something&nbsp;&nbsp; that it knows the humans wouldn't want it to&nbsp; do. Or is it just that we weren't good enough&nbsp;&nbsp; to specify that the thing that we accidentally&nbsp;

ended up rewarding is not what we actually want?&nbsp; Think the scenarios I am most interested in&nbsp; and most people are concerned about from a&nbsp;&nbsp; catastrophic risk perspective, it involves&nbsp; systems understanding that they are taking&nbsp;&nbsp;

actions which a human would penalize if the human&nbsp; was aware of what's going on such that you have&nbsp;&nbsp; to either deceive humans about what's happening&nbsp; or you need to actively subvert human attempts&nbsp;&nbsp; to correct your behavior. So the failures come&nbsp;

from really this combination, or they require&nbsp;&nbsp; this combination of both trying to do something&nbsp; humans don't like, and understanding the humans&nbsp;&nbsp; would stop you. I think you can have only the&nbsp; barest examples. You can have the barest examples&nbsp;&nbsp;

for GPT four. Like, you can create the situations&nbsp; where GPT 4 will be like, sure, in that situation,&nbsp;&nbsp; here's what I would do. I would go hack the&nbsp; computer and change my reward. Or in fact,&nbsp;&nbsp; we'll do things that are like simple hacks, or go&nbsp;

change the source of this file or whatever to get&nbsp;&nbsp; a higher reward. They're pretty weak examples. I&nbsp; think it's plausible GPT five will have compelling&nbsp;&nbsp; examples of those phenomena. I really don't&nbsp; know. This is very related to the very broad&nbsp;&nbsp;

error bars on how competent such systems will be&nbsp; when that's all with respect to this first mode&nbsp;&nbsp; of a system is taking actions that get reward and&nbsp; overpowering or deceiving humans is helpful for&nbsp;&nbsp; getting reward. There's this other failure mode,&nbsp;

another family of failure modes, where AI systems&nbsp;&nbsp; want something potentially unrelated to reward.&nbsp; I understand that they're being trained. And&nbsp;&nbsp; while you're being trained, there are a bunch of&nbsp; reasons you might want to do the kinds of things&nbsp;&nbsp;

humans want you to do. But then when deployed in&nbsp; the real world, if you're able to realize you're&nbsp;&nbsp; no longer being trained, you no longer have reason&nbsp; to do the kinds of things human want. You'd prefer&nbsp;&nbsp; be able to determine your own destiny, control&nbsp;

your competing hardware, et cetera, which I think&nbsp;&nbsp; probably emerge a little bit later than systems&nbsp; that try and get reward and so will generalize&nbsp;&nbsp; in scary, unpredictable ways to new situations.&nbsp; I don't know when those appear, but also, again,&nbsp;&nbsp;

broad enough error bars that it's like conceivable&nbsp; for systems in the near future. I wouldn't put&nbsp;&nbsp; it like less than one in 1000 for GPT five. Certainly if we deployed all these AI systems,&nbsp;&nbsp; and some of them are reward hacking, some of&nbsp;

them are deceptive, some of them are just normal&nbsp;&nbsp; whatever, how do you imagine that they might&nbsp; interact with each other at the expense of&nbsp;&nbsp; humans? How hard do you think it would be for them&nbsp; to communicate in ways that we would not be able&nbsp;&nbsp;

to recognize and coordinate at our expense? Yeah, I think that most realistic failures&nbsp;&nbsp; probably involve two factors interacting. One&nbsp; factor is like, the world is pretty complicated&nbsp;&nbsp; and the humans mostly don't understand what's&nbsp;

happening. So AI systems are writing code that's&nbsp;&nbsp; very hard for humans to understand, maybe how&nbsp; it works at all, but more likely they understand&nbsp;&nbsp; roughly how it works. But there's a lot of&nbsp; complicated interactions. AI systems are running&nbsp;&nbsp;

businesses that interact primarily with other AIS.&nbsp; They're like doing SEO for AI search processes.&nbsp;&nbsp; They're like running financial transactions, like&nbsp; thinking about a trade with AI counterparties.&nbsp;&nbsp; And so you can have this world where even&nbsp;

if humans kind of understand the jumping&nbsp;&nbsp; off point when this was all humans, like actual&nbsp; considerations of what's a good decision? Like,&nbsp;&nbsp; what code is going to work well, and be durable or&nbsp; what marketing strategy is effective for selling&nbsp;&nbsp;

to these other AIS or whatever is kind of just all&nbsp; mostly outside of sort of humans understanding. I&nbsp;&nbsp; think this is like a really important again, when&nbsp; I think of the most plausible, scary scenarios,&nbsp;&nbsp; I think that's like one of the two big risk&nbsp;

factors. And so in some sense, your first&nbsp;&nbsp; problem here is like, having these AI systems&nbsp; who understand a bunch about what's happening,&nbsp;&nbsp; and your only lever is like, hey, AI, do something&nbsp; that works well. So you don't have a lever to&nbsp;&nbsp;

be like, hey, do what I really want you just&nbsp; have the system you don't really understand,&nbsp;&nbsp; can observe some outputs like did it make money?&nbsp; And you're just optimizing or at least doing some&nbsp;&nbsp; fine tuning to get the AI to use its understanding&nbsp;

of that system to achieve that goal. So I think&nbsp;&nbsp; that's like your first risk factor. And once&nbsp; you're in that world, then I think there&nbsp;&nbsp; are all kinds of dynamics amongst AI systems&nbsp; that, again, humans aren't really observing,&nbsp;&nbsp;

humans can't really understand. Humans aren't&nbsp; really exerting any direct pressure on only on&nbsp;&nbsp; outcomes. And then I think it's quite easy to be&nbsp; in a position where if AI systems started failing,&nbsp;&nbsp; they could do a lot of harm very quickly. Humans&nbsp;

aren't really able to prepare for or mitigate that&nbsp;&nbsp; potential harm because we don't really understand&nbsp; the systems in which they're acting. And then if&nbsp;&nbsp; AI systems, they could successfully prevent&nbsp; humans from either understanding what's going&nbsp;&nbsp;

on or from successfully retaking the data centers&nbsp; or whatever, if the AI successfully grab control.&nbsp; This seems like a much more gradual story&nbsp; than the conventional takeover stories,&nbsp;&nbsp; where you just like, you train it and then&nbsp;

it comes alive and escapes and takes over&nbsp;&nbsp; everything. So you think that kind of story&nbsp; is less likely than one in which we just&nbsp;&nbsp; hand off more control voluntarily to the AIS. So one I am interested in the tale of some risks&nbsp;&nbsp;

that can occur particularly soon. And I think&nbsp; risks that occur particularly soon are a little&nbsp;&nbsp; bit like you have a world where AI is not probably&nbsp; deployed, and then something crazy happens&nbsp;&nbsp; quickly. That said, if you ask what's the median&nbsp;

scenario where things go badly, I think it is like&nbsp;&nbsp; there's some lessening of our understanding of&nbsp; the world. It becomes, I think, in the default&nbsp;&nbsp; path. It's very clear to humans that they have&nbsp; increasingly little grip on what's happening. I&nbsp;&nbsp;

mean, I think already most humans have very little&nbsp; grip on what's happening. It's just some other&nbsp;&nbsp; humans understand what's happening. I don't know&nbsp; how almost any of the systems I interact with work&nbsp;&nbsp; in a very detailed way. So it's sort of clear to&nbsp;

humanity as a whole that we sort of collectively&nbsp;&nbsp; don't understand most of what's happening except&nbsp; with AI assistance. And then that process just&nbsp;&nbsp; continues for a fair amount of time. And then&nbsp; there's a question of how abrupt an actual failure&nbsp;&nbsp;

is. I do think it's reasonably likely that a&nbsp; failure itself would be abrupt. At some point, bad&nbsp;&nbsp; stuff starts happening that human can recognize as&nbsp; bad. And once things that are obviously bad start&nbsp;&nbsp; happening, then you have this bifurcation where&nbsp;

either humans can use that to fix it and say,&nbsp;&nbsp; okay, AI behavior that led to this obviously bad&nbsp; stuff, don't do more of that, or you can't fix it,&nbsp;&nbsp; and then you're in this rapidly escalating&nbsp; failures. Everything goes off the rails.&nbsp;

In that case, yeah. What is going off the rails&nbsp; look like? For example, how would it take over&nbsp;&nbsp; the government? Yeah, it's getting deployed in&nbsp; the economy, in the world, and at some point&nbsp;&nbsp; it's in charge. How does that transition happen?

Yeah, so this is going to depend a lot on what&nbsp;&nbsp; kind of timeline you're imagining, or there's&nbsp; sort of a broad distribution, but I can fill in&nbsp;&nbsp; some random concrete option that is in itself&nbsp; very improbable. Yeah, I think that one of the&nbsp;&nbsp;

less dignified, but maybe more plausible routes&nbsp; is like, you just have a lot of AI control over&nbsp;&nbsp; critical systems, even in running a military.&nbsp; And then you have the scenario that's a little&nbsp;&nbsp; bit more just like a normal coup where you have&nbsp;

a bunch of AI systems, they in fact operate. It's&nbsp;&nbsp; not the case that humans can really fight a war&nbsp; on their own. It's not the case that humans could&nbsp;&nbsp; defend them from an invasion on their own. So that&nbsp; is if you had invading army and you had your own&nbsp;&nbsp;

robot army, you can't just be like, we're going to&nbsp; turn off the robots now because things are going&nbsp;&nbsp; wrong if you're in the middle of a war. Okay, so how much does this world rely&nbsp;&nbsp; on race dynamics where we're forced to&nbsp;

deploy or not forced, but we choose to&nbsp;&nbsp; deploy AIS because other countries or other&nbsp; companies are also deploying AIS. And you&nbsp;&nbsp; can't have them have all the killer robots. Yeah, I mean, I think that there's several&nbsp;&nbsp;

levels of answer to that question. So one is like,&nbsp; maybe 3 parts of my like our first part is like,&nbsp;&nbsp; I'm just trying to tell what seems like the most&nbsp; likely story. I do think there's further failures&nbsp;&nbsp; that get you in the more distant future. So IG&nbsp;

eliezer will not talk that much about killer&nbsp;&nbsp; robots because he really wants to emphasize,&nbsp; like, hey, if you never built a killer robot,&nbsp;&nbsp; something crazy is still going to happen to you&nbsp; just like, only 4 months later or whatever. So&nbsp;&nbsp;

it's not really the way to analyze the failure.&nbsp; But if you want to ask what's the median world&nbsp;&nbsp; where something bad happens, I still do think&nbsp; this is the best guess. Okay, so that's like,&nbsp;&nbsp; part one of my answer. Part two of the answer was,&nbsp;

like, in this proximal situation where something&nbsp;&nbsp; bad is happening, and you ask like, hey, why&nbsp; do humans not turn off the AI. You can imagine,&nbsp;&nbsp; like, two kinds of story. One is like the AI.&nbsp; Is able to prevent humans from turning them off,&nbsp;&nbsp;

and the other is like, in fact, we live in a&nbsp; world where it's incredibly challenging. Like,&nbsp;&nbsp; there's a bunch of competitive dynamics or a bunch&nbsp; of reliance on AI systems. And so it's incredibly&nbsp;&nbsp; expensive to turn off AI systems. I think, again,&nbsp;

you would eventually have the first problem. Like,&nbsp;&nbsp; eventually AI systems could just prevent humans&nbsp; from turning them off. But I think in practice,&nbsp;&nbsp; the one that's going to happen much, much sooner&nbsp; is probably competition amongst different actors&nbsp;&nbsp;

using AI. And it's very, very expensive&nbsp; to unilaterally disarm. You can't be like,&nbsp;&nbsp; something weird has happened. We're just going&nbsp; to shut off all the AI because you're e g in&nbsp;&nbsp; a hot war. So again, I think that's just&nbsp;

probably the most likely thing to happen.&nbsp;&nbsp; First things would go badly without it. But I&nbsp; think if you ask, why don't we turn off the AI,&nbsp;&nbsp; my best guess is because there are a bunch&nbsp; of other AIS running around 2D or lunch.&nbsp;

So how much better a situation would we be in&nbsp; if there was only one group that was pursuing&nbsp;&nbsp; AI. No other countries, no other companies.&nbsp; Basically, how much of the expected value is&nbsp;&nbsp; lost from the dynamics that are likely&nbsp;

to come about because other people will&nbsp;&nbsp; be developing and deploying these systems? Yeah. So I guess this brings you to a third&nbsp;&nbsp; part of the way in which competitive dynamics are&nbsp; relevant. So there's both the question of can you&nbsp;&nbsp;

turn off AI systems in response to something bad&nbsp; happening where competitive dynamics may make it&nbsp;&nbsp; hard to turn off. There's a further question of&nbsp; just like, why were you deploying systems for&nbsp;&nbsp; which you had very little ability to control or&nbsp;

understand those systems? And again, it's possible&nbsp;&nbsp; you just don't understand what's going on. You&nbsp; think you can understand or control such systems,&nbsp;&nbsp; but I think in practice, a significant part is&nbsp; going to be like you are doing the calculus,&nbsp;&nbsp;

or people deploying systems are doing the calculus&nbsp; as they do today, in many cases, overtly of like,&nbsp;&nbsp; look, these systems are not very well controlled&nbsp; or understood. There's some chance of something&nbsp;&nbsp; going wrong, or at least going wrong if we&nbsp;

continue down this path. But other people&nbsp;&nbsp; are developing the technology potentially in&nbsp; even more reckless ways. So in addition to&nbsp;&nbsp; competition making it difficult to shut down&nbsp; AI systems in the event of a catastrophe,&nbsp;&nbsp;

I also think it's just like the easiest way that&nbsp; people end up pushing relatively quickly or moving&nbsp;&nbsp; quickly ahead on a technology where they feel kind&nbsp; of bad about understandability or controllability.&nbsp;&nbsp; That could be economic competition or military&nbsp;

competition or whatever. So I kind of think&nbsp;&nbsp; ultimately most of the harm comes from the&nbsp; fact that lots of people can develop AI.&nbsp; How hard is a takeover of the government or&nbsp; something from an AI. Even if it doesn't have&nbsp;&nbsp;

killer robots, but just a thing that you&nbsp; can't kill off if it has seeds elsewhere,&nbsp;&nbsp; can easily replicate, can think a lot and&nbsp; think fast. What is the minimum viable coup&nbsp;&nbsp; for? Is it just like threatening biowar or&nbsp;

something or shutting off the grid how we&nbsp;&nbsp; use it basically to take over human civilization? So again, there's going to be a lot of scenarios,&nbsp;&nbsp; and I'll just start by talking about&nbsp; one scenario which will represent a&nbsp;&nbsp;

tiny fraction of probability or whatever. So if&nbsp; you're not in this competitive world, if you're&nbsp;&nbsp; saying. We're actually slowing down deployment&nbsp; of AI because we think it's unsafe or whatever,&nbsp;&nbsp; then in some sense you're creating this very&nbsp;

fundamental instability where you could have&nbsp;&nbsp; been making faster AI progress and you could have&nbsp; been deploying AI faster. And so in that world,&nbsp;&nbsp; the bad thing that happens if you have an AI&nbsp; system that wants to mess with you is the AI&nbsp;&nbsp;

system says, I don't have any compunctions about&nbsp; rapid deployment of AI or rapid AI progress. So&nbsp;&nbsp; the thing you want to do or the AI wants to do&nbsp; is just say, like, I'm going to defect from this&nbsp;&nbsp; regime. Like all the humans have agree that we're&nbsp;

not deploying AI in ways that would be dangerous,&nbsp;&nbsp; but if I as an AI can escape and just go set up my&nbsp; own shop, like make a bunch of copies of myself,&nbsp;&nbsp; maybe the humans didn't want to delegate war&nbsp; fighting to an AI. But I, as an AI. I'm pretty&nbsp;&nbsp;

happy doing so. I'm happy if I'm able to grab&nbsp; some military equipment or direct some humans&nbsp;&nbsp; to use myself to direct it. And so I think as that&nbsp; gap grows so if people are deliberately if people&nbsp;&nbsp; are deploying AI everywhere, I think of this&nbsp;

competitive dynamic if people aren't deploying&nbsp;&nbsp; AI everywhere so if countries are not happy,&nbsp; deploying AI in. These high stakes settings. Then&nbsp;&nbsp; as AI improves, you create this wedge that grows&nbsp; where if you were in the position of fighting&nbsp;&nbsp;

against an AI which wasn't constrained in this&nbsp; way, you'd be in a pretty bad position at some&nbsp;&nbsp; point, even if you just yeah, that's like, one&nbsp; important thing. Just like I think in conflict, in&nbsp;&nbsp; overt conflict, if humans are putting the brakes&nbsp;

on AI, they're at a pretty major disadvantage&nbsp;&nbsp; compared to an AI system that can kind of set&nbsp; up shop and operate independently from humans.&nbsp; A potential independent AI. Does it&nbsp; need collaboration from a human faction?&nbsp;

Again, you could tell different stories, but it&nbsp; seems so much easier. At some point you don't need&nbsp;&nbsp; any at some point an AI system can just operate&nbsp; completely out of human supervision or something.&nbsp;&nbsp; But that's like so far after the point where it's&nbsp;

so much easier if you're just like, they're a&nbsp;&nbsp; bunch of humans, they don't love each other that&nbsp; much. Like, some humans are happy to be on side.&nbsp;&nbsp; They're either skeptical about risk or happy to&nbsp; make this trade or can be fooled or can be coerced&nbsp;&nbsp;

or whatever. And just seems like it is almost&nbsp; certainly, almost certainly the easiest first pass&nbsp;&nbsp; is going to involve having a bunch of humans who&nbsp; are happy to work with you. So, yeah, I think that&nbsp;&nbsp; probably is about I think it's not necessary. But&nbsp;

if you ask about the median scenario, it involves&nbsp;&nbsp; a bunch of humans working with AI systems,&nbsp; either being directed by AI systems, providing&nbsp;&nbsp; compute to AI systems, providing legal cover and&nbsp; jurisdictions that are sympathetic to AI systems.&nbsp;

Humans presumably would not be willing if&nbsp; they knew the end result of the AI takeover&nbsp;&nbsp; would not be willing to help. So they&nbsp; have to be probably fooled in some way,&nbsp;&nbsp; right? Like deepfakes or something? And what&nbsp;

is the minimum viable physical presence they&nbsp;&nbsp; would need or jurisdiction they would need&nbsp; in order to carry out their schemes? Do you&nbsp;&nbsp; need a whole country? Do you just need a server&nbsp; farm? Do you just need, like, one single laptop?&nbsp;

I think I'd probably start by pushing back a&nbsp; bit on the humans wouldn't cooperate if they&nbsp;&nbsp; understood outcome or something. I would say one,&nbsp; even if you're if you're looking at something like&nbsp;&nbsp; tens of percent risk of takeover, humans may be&nbsp;

fine with that. Like, a fair number of humans&nbsp;&nbsp; may be fine with that. Two, if you're looking at&nbsp; certain takeover, but it's very unclear if that&nbsp;&nbsp; leads to death. A bunch of humans may be fine&nbsp; with that. If we're just talking about like,&nbsp;&nbsp;

look, the AI systems are going to run the&nbsp; world, but it's not clear if they're going&nbsp;&nbsp; to murder people. How do you know? It's just a&nbsp; complicated question about AI psychology, and&nbsp;&nbsp; a lot of humans probably are fine with that. And&nbsp;

I don't even know what the probability is there.&nbsp; I think you actually have&nbsp; given that probability online.&nbsp; I've certainly guessed. Okay, but it's not zero. It's&nbsp;&nbsp;

like a significant percentage. I gave like 50 50.&nbsp; Okay. Yeah. Why is it tell me about&nbsp; the world in which the AI takes over&nbsp;&nbsp; but doesn't kill humans. Why would that&nbsp;

happen and what would that look like?&nbsp; I asked my questions, like, why would you kill&nbsp; humans? So I think maybe I'd say the incentive&nbsp;&nbsp; to kill humans is quite weak. They'll get in your way,&nbsp;&nbsp;

they control shit you want. Also, taking shit from humans is&nbsp;&nbsp; a different like, marginalizing humans and causing&nbsp; humans to be irrelevant is a very different story&nbsp;&nbsp; from killing the humans. I think. I'd say the&nbsp;

actual incentives to kill the humans are quite&nbsp;&nbsp; weak. Such as I think the big reasons you kill&nbsp; humans are like, well, one, you might kill humans&nbsp;&nbsp; if you're in a war with them, and it's hard to win&nbsp; the war without killing a bunch of humans. Like,&nbsp;&nbsp;

maybe most saliently here, if you want to use&nbsp; some biological weapons or some crazy shit&nbsp;&nbsp; that might just kill humans, I think you might&nbsp; kill humans just from totally destroying the&nbsp;&nbsp; ecosystems they're dependent on. And it's slightly&nbsp;

expensive to keep them alive anyway. You might&nbsp;&nbsp; kill humans just because you don't like them or&nbsp; like, you literally want to neutralize a threat.&nbsp; Or the leaser line is that they're made&nbsp; of atoms you could use for something else.&nbsp;

Yeah, I mean, I think the literal they're made of&nbsp; atoms is like, quite there are not many atoms in&nbsp;&nbsp; humans. Neutralize the threat is a similar issue&nbsp; where it's just like, I think you would kill the&nbsp;&nbsp; humans if you didn't care at all about them.&nbsp;

So maybe your question you're asking is, like,&nbsp;&nbsp; why would you care at all about but I think you&nbsp; don't have to care much to not kill the humans.&nbsp; Okay, sure. Because there's just so much&nbsp; raw resources elsewhere in the universe.&nbsp;

Yeah. Also, you can marginalize humans pretty&nbsp; hard. Like, you could totally cripple human like,&nbsp;&nbsp; you could cripple humans warfighting capability&nbsp; and also take almost all their stuff while killing&nbsp;&nbsp; only a small fraction of humans, incidentally.&nbsp;

So then if you ask why might AI not want to kill&nbsp;&nbsp; humans? I mean, a big thing is just like, look,&nbsp; I think AIS probably want a bunch of random crap&nbsp;&nbsp; for complicated reasons. Like the motivations&nbsp; of AI systems and civilizations of AIS are&nbsp;&nbsp;

probably complicated messes. Certainly amongst&nbsp; humans, it is not that rare to be like, well,&nbsp;&nbsp; there was someone here. I would like all else&nbsp; equal if I didn't have to murder them. I would&nbsp;&nbsp; prefer not murder them. And my guess is it's&nbsp;

also like, reasonable chance it's not that rare&nbsp;&nbsp; amongst AI systems. Like, humans have a bunch of&nbsp; different reasons we think that way. I think AI&nbsp;&nbsp; systems will be very different from humans, but&nbsp; it's also just like a very salient yeah, I mean,&nbsp;&nbsp;

think this is a really complicated question. Like,&nbsp; if you imagine drawing values from the basket of&nbsp;&nbsp; all values, like, what fraction of them are, like,&nbsp; hey, if there's someone here, how much do I want&nbsp;&nbsp; to to murder them? And my guess is, just like,&nbsp;

if you draw a bunch of values from the basket,&nbsp;&nbsp; that's like a natural enough thing. Like, if&nbsp; your AI wanted like, 10,000 different things,&nbsp;&nbsp; so you're your civilization of AI that&nbsp; wants 10,000 different things, just like,&nbsp;&nbsp;

reasonably likely you get some of that. The other&nbsp; salient reason you might not want to murder them&nbsp;&nbsp; is just like, well, yeah, there's some kind&nbsp; of crazy decision theory stuff or causal trade&nbsp;&nbsp; stuff which does look on paper like it should&nbsp;

work. And if I was running a civilization and&nbsp;&nbsp; dealing with some people who I didn't like&nbsp; at all or didn't have any concern for at all,&nbsp;&nbsp; but I only had to spend 1,000,000,000th of&nbsp; my resources not to murder them, I think&nbsp;&nbsp;

it's quite robust that you don't want to murder&nbsp; them. That is, I think the weird decision theory&nbsp;&nbsp; a causal trade stuff probably does carry the day. Oh, wait, that contributes more to that 50 50 of&nbsp;&nbsp; will they murder us if they take over than the&nbsp;

by default. They might just not want to kill us.&nbsp; Yeah, I think they're both salient.&nbsp; Can you explain they run together with.&nbsp; Each other a lot for the audience.&nbsp; Can you explain the weird apostle&nbsp;&nbsp;

yeah. Reasons why am I not kill us? Maybe a higher level thing that goes&nbsp;&nbsp; into both of these. And then I will talk about how&nbsp; you instantiate an a causal trade is just like it&nbsp;&nbsp; matters a lot to the humans not to get murdered.&nbsp;

And the AI cares very, very little about whether&nbsp;&nbsp; if we imagine this hypothetical, the reason it&nbsp; wants to kill humans is just total buffy. It&nbsp;&nbsp; cares very little about whether or not to murder&nbsp; humans because it is so easy to marginalize humans&nbsp;&nbsp;

without murdering them. And the resources required&nbsp; for human survival are extremely low again in the&nbsp;&nbsp; context of this rapid AI industrialization. So&nbsp; that's the basic setting. And now the thing that&nbsp;&nbsp; you'd like to do is run a trade. The AI would&nbsp;

like to say, like, hey, humans, you care a ton&nbsp;&nbsp; about not getting murdered. I don't really care&nbsp; one way or the other. I would like to, if I could,&nbsp;&nbsp; find some way in which I don't murder you. And&nbsp; then in return I get something. The problem is, in&nbsp;&nbsp;

that world, the humans have essentially nothing to&nbsp; give. That is, the humans are mostly irrelevant.&nbsp;&nbsp; However, from the perspective of any kind of&nbsp; reasonable AI, it's like not that sure whether&nbsp;&nbsp; it lives in the world where the humans in fact&nbsp;

have nothing to give, or whether the humans like,&nbsp;&nbsp; in fact, it lives in a world where the humans&nbsp; succeeded at building a lined AI. And now the&nbsp;&nbsp; AI is simply running in a nice little simulation&nbsp; mission. Humans are wondering, I wonder if this AI&nbsp;&nbsp;

would have murdered us all if it had the chance.&nbsp; And the humans saying like, if it would murder us&nbsp;&nbsp; all if it had the chance. That sucks. We'd like&nbsp; to run this trade. We'd like to be nice to the&nbsp;&nbsp; AIS who wouldn't have murdered us all in order to&nbsp;

create an incentive for AIS not to murder us. So&nbsp;&nbsp; we do is we just check. And for the kinds of AIS&nbsp; who don't murder everyone, we just give them like&nbsp;&nbsp; 1,000,000,000th of the universe. If you do that as&nbsp; humanity, then if you're an AI system, considering&nbsp;&nbsp;

like, do I want to murder everyone? Your calculus&nbsp; is like, if this is my real chance to murder&nbsp;&nbsp; everyone, I get the tiniest bit of value. I get&nbsp; like 1,000,000,000,000th of the value or whatever,&nbsp;&nbsp; 1,000,000,000th of the value. But on the other&nbsp;

hand, if I don't murder everyone, there's some&nbsp;&nbsp; worlds where then the humans will correctly&nbsp; determine, I don't murder everyone. Because in&nbsp;&nbsp; fact, the humans survive. The humans are running&nbsp; the simulations to understand how different AIS&nbsp;&nbsp;

would behave. And so that's a better deal. Let's hope they fall for that tie up. Okay,&nbsp;&nbsp; that's interesting. Hey, real quick. This episode is&nbsp;&nbsp; sponsored by Open Philanthropy. Open Philanthropy&nbsp;

is one of the largest grant making organizations&nbsp;&nbsp; in the world. Every year, they give away&nbsp; hundreds of millions of dollars to have reduced&nbsp;&nbsp; catastrophic risks from fast moving advances in AI&nbsp; and biotechnology. Open Philanthropy is currently&nbsp;&nbsp;

hiring for 22 different roles in those areas,&nbsp; including grant making, research, and operations.&nbsp;&nbsp; New hires will support Open Philanthropy's&nbsp; giving on technical AI safety, AI governance,&nbsp;&nbsp; AI. Policy in the US. EU and UK. And Biosecurity.&nbsp;

Many roles are remote friendly, and most of&nbsp;&nbsp; the grant making hires that Open Philanthropy&nbsp; makes don't have prior grant making experience.&nbsp; Previous technical experience is an asset,&nbsp; as many of these roles often benefit from a&nbsp;&nbsp;

deep understanding of the technologies they&nbsp; address. For more information and to apply,&nbsp;&nbsp; please visit Open Philanthropy's website in the&nbsp; description. The deadline to apply is November 9,&nbsp;&nbsp; so make sure to check out those rules before&nbsp;

they close. Awesome. Back to the episode. In&nbsp;&nbsp; a world where we've been deploying these&nbsp; AI systems and suppose they're aligned,&nbsp;&nbsp; how hard would it be for competitors to, I don't&nbsp; know, cyber attack them and get them to join the&nbsp;&nbsp;

other side? Are they robustly going to be aligned? Yeah, I mean, I think in some sense. So there’s&nbsp;&nbsp; a bunch of questions that come up here. First one&nbsp; is like, are aligned AI systems that you can build&nbsp;&nbsp; like competitive? Are they almost as good as the&nbsp;

best systems anyone could build? And maybe we’re&nbsp;&nbsp; granting that for the purpose of this question.&nbsp; I think a next question that comes up is like,&nbsp;&nbsp; AI. Systems right now are very vulnerable to&nbsp; manipulation. It’s not clear how much more&nbsp;&nbsp;

vulnerable they are than humans, except for the&nbsp; fact that if you have an AI system, you can just&nbsp;&nbsp; replay it like a billion times and search for what&nbsp; thing can I say that will make it behave this way?&nbsp;&nbsp; So as a result, AI systems are very vulnerable to&nbsp;

manipulation. It’s unclear if future AI systems&nbsp;&nbsp; will be semi vulnerable to manipulation, but&nbsp; certainly seems plausible. And in particular,&nbsp;&nbsp; aligned AI systems or unaligned AI systems would&nbsp; be vulnerable to all kinds of manipulation. The&nbsp;&nbsp;

thing that’s really relevant here is kind of like&nbsp; asymmetric manipulation or something that is like,&nbsp;&nbsp; if it is easier. So if everyone is just constantly&nbsp; messing with each other’s AI systems, like if you&nbsp;&nbsp; ever use AI systems in a competitive environment,&nbsp;

a big part of the game is like messing with your&nbsp;&nbsp; competitors AI systems. A big question is whether&nbsp; there’s some asymmetric factor there where it’s&nbsp;&nbsp; kind of easier to push AI systems into a mode&nbsp; where they’re behaving erratically or chaotically&nbsp;&nbsp;

or trying to grab power or something than it is to&nbsp; push them to fight for the other side. It was just&nbsp;&nbsp; a game of two people are competing and neither of&nbsp; them can sort of hijack an opponent’s AI to help&nbsp;&nbsp; support their cause. It matters and it creates&nbsp;

chaos, and it might be quite bad for the world,&nbsp;&nbsp; but it doesn’t really affect the alignment&nbsp; calculus now. It’s just like right now you have&nbsp;&nbsp; normal cyber offense cyber defense, you have weird&nbsp; AI version of cyber offense cyber defense. But if&nbsp;&nbsp;

you have this kind of asymmetrical thing where&nbsp; a bunch of AI systems who are like, we love AI.&nbsp;&nbsp; Flourishing, can then go in and say, like, great&nbsp; AIS. Hey, how about you join us. And that works.&nbsp;&nbsp; Like if they can search for a persuasive argument&nbsp;

to that effect and that’s kind of asymmetrical,&nbsp;&nbsp; then the effect is whatever values it’s easiest to&nbsp; push, whatever it’s easiest to argue to an AI that&nbsp;&nbsp; it should do that is advantaged. So it may be very&nbsp; hard to build AI systems like try and defend human&nbsp;&nbsp;

interests, but very easy to build AI systems&nbsp; just like try and destroy stuff or whatever,&nbsp;&nbsp; just depending on what is the easiest thing&nbsp; to argue to an AI that it should do, or what’s&nbsp;&nbsp; the easiest thing to trick an AI into doing, or&nbsp;

whatever. Yeah, I think if alignment is spotty, if&nbsp;&nbsp; you have the AI system which doesn’t really want&nbsp; to help humans or whatever, or in fact wants some&nbsp;&nbsp; kind of random thing or wants different things in&nbsp; different contexts, then I do think adversarial&nbsp;&nbsp;

settings will be the main ones where you see the&nbsp; system or, like, the easiest ones, where you see&nbsp;&nbsp; the system behaving really badly, and it’s a&nbsp; little bit hard to tell how that shakes out.&nbsp; Okay, and suppose it is more reliable. How&nbsp;

concerned are you that whatever alignment&nbsp;&nbsp; technique you come up with, you publish the&nbsp; paper, this is how the alignment works. How&nbsp;&nbsp; concerned are you that Putin reads it or&nbsp; China reads it and now they understand,&nbsp;&nbsp;

for example, the constitutional AI think we’re&nbsp; anthropic and then you just write on there, oh,&nbsp;&nbsp; never contradict Mao Zedong thought or something.&nbsp; How concerned should we be that these alignment&nbsp;&nbsp; techniques are universally applicable, not&nbsp;

necessarily just for enlightened goals?&nbsp; Yeah, I think they’re super universally&nbsp; applicable. I think it’s just like I mean, the&nbsp;&nbsp; rough way I would describe it, which I think is&nbsp; basically right, is like some degree of alignment&nbsp;&nbsp;

makes AI systems much more usable. You should&nbsp; just think of the technology of AI as including&nbsp;&nbsp; a basket of some AI capabilities and some like&nbsp; getting the AI to do what you want. It’s just&nbsp;&nbsp; part of that basket. And so anytime we’re like to&nbsp;

extend alignment is part of that basket, you’re&nbsp;&nbsp; just contributing to all the other harms from AI,&nbsp; like you’re reducing the probability of this harm,&nbsp;&nbsp; but you are helping the technology basically work.&nbsp; And the basically working technology is kind of&nbsp;&nbsp;

scary from a lot of perspectives. One of which&nbsp; is like right now, even in a very authoritarian&nbsp;&nbsp; society, just like humans have a lot of power&nbsp; because you need to rely on just a ton of humans&nbsp;&nbsp; to do your thing. And in a world where AI is very&nbsp;

powerful, it is just much more possible to say,&nbsp;&nbsp; here’s how our society runs. One person calls&nbsp; the shots and then a ton of AI systems do what&nbsp;&nbsp; they want. I think that’s like a reasonable thing&nbsp; to dislike about AI and a reasonable reason to be&nbsp;&nbsp;

scared to push the technology to be really good. But is that also a reasonable reason to be&nbsp;&nbsp; concerned? About alignment as well, that&nbsp; this is in some sense also capabilities.&nbsp;&nbsp; You’re teaching people how to get&nbsp;

these systems to do what they want.&nbsp; Yeah. I mean, I would, Generalize. So we earlier&nbsp; touched a little bit on potential moral rights&nbsp;&nbsp; of AI systems and now we’re talking a little bit&nbsp; about how AI systems powerfully disempowers humans&nbsp;&nbsp;

and can empower authoritarians. I think we could&nbsp; list other harms from AI. And I think it is the&nbsp;&nbsp; case that if Lyme was bad enough, people would&nbsp; just not build AI systems. And so, yeah, I think&nbsp;&nbsp; there’s a real sense in which you should just be&nbsp;

scared to extend. You’re scared of all AI? You&nbsp;&nbsp; should be like, well, alignment, although it helps&nbsp; with one risk, does contribute to AI being more&nbsp;&nbsp; of a thing. I do think you should shut down the&nbsp; other parts of AI before if you were a policymaker&nbsp;&nbsp;

or like a researcher or whatever looking in on&nbsp; this. I think it’s like crazy to be like, this&nbsp;&nbsp; is the part of the basket we’re going to remove.&nbsp; You should first remove other parts of the basket&nbsp;&nbsp; because they’re also part of the story of risk.

Wait, does that imply you think if, for example,&nbsp;&nbsp; all capabilities research was shut down,&nbsp; that you think it’d be a bad idea to continue&nbsp;&nbsp; doing alignment research in isolation of what is&nbsp; conventionally considered capabilities research?&nbsp;

I mean, if you told me it was never going to&nbsp; restart, then it wouldn’t matter. And if you&nbsp;&nbsp; told me it’s going to restart, I guess would be&nbsp; a kind of similar calculus to today, whereas.&nbsp; It’s going to happen. So&nbsp;

you should have something.&nbsp; Yeah, I think that in some sense, you’re always&nbsp; going to face this trade off where alignment makes&nbsp;&nbsp; it possible to deploy AI systems or it makes&nbsp; it more attractive to deploy AI systems, or in&nbsp;&nbsp;

the authoritarian case, it makes it tractable to&nbsp; deploy them for this purpose. And if you didn’t&nbsp;&nbsp; do any alignment, there’d be a nicer bigger&nbsp; buffer between your society and malicious uses&nbsp;&nbsp; of AI. And I think it’s one of the most expensive&nbsp;

ways to maintain that buffer. It’s much better to&nbsp;&nbsp; maintain that buffer by not having the compute or&nbsp; not having the powerful AI. But I think if you’re&nbsp;&nbsp; concerned enough about the other risks, there’s&nbsp; definitely a case to be made for just like put in&nbsp;&nbsp;

more buffer or something like that. I care enough&nbsp; about the takeover risk that I think it’s just not&nbsp;&nbsp; a net positive way to buy buffer. That is, again,&nbsp; the version of this that’s most pragmatic is just&nbsp;&nbsp; like, suppose you don’t work on alignment today,&nbsp;

decreases economic impact of AI systems. They’ll&nbsp;&nbsp; be less useful if they’re less reliable and if&nbsp; they more often don’t do what people want. And&nbsp;&nbsp; so you could be like, great, that just buys time&nbsp; for AI. And you’re getting some trade off there&nbsp;&nbsp;

where you’re decreasing some risks of AI. Like&nbsp; if AI is more reliable or more what people want,&nbsp;&nbsp; it’s more understandable, then that cuts down some&nbsp; risks. But if you think AI is, on balance, bad,&nbsp;&nbsp; even apart from takeover risk, then the alignment&nbsp;

stuff can easily end up being that negative.&nbsp; But presumably you don’t think that right, because&nbsp; I guess this is something people have brought up&nbsp;&nbsp; to you because you invented Rlhf, which was used&nbsp; to train Chat GPT, and Chat GPT brought AI to the&nbsp;&nbsp;

front pages everywhere. So I do wonder if you&nbsp; could measure how much more money went into AI,&nbsp;&nbsp; because how much people have raised in the last&nbsp; year or something. But it’s got to be billions,&nbsp;&nbsp; the counterfactual impact of that that went into&nbsp;

the AI investment and the talent that went into&nbsp;&nbsp; AI, for example. So presumably you think that&nbsp; was worth it. So I guess you’re hedging here&nbsp;&nbsp; about what is the reason that it’s worth it? Yeah. What’s the total trade off there? Yeah,&nbsp;&nbsp;

I think my take is, like so I think slower AI&nbsp; development, on balance is quite good. I think&nbsp;&nbsp; that slowing AI development now, or like, say,&nbsp; having less press around chat GPT is, like, a&nbsp;&nbsp; little bit more mixed than slowing AI development&nbsp;

overall. I think it’s still probably positive,&nbsp;&nbsp; but much less positive. Because I do think there’s&nbsp; a real effect of the world is starting to get&nbsp;&nbsp; prepared, is getting prepared at a much greater&nbsp; rate now than it was prior to the release of chat&nbsp;&nbsp;

GPT. And so if you can choose between progress now&nbsp; or progress later, you’d really prefer have more&nbsp;&nbsp; of your progress now, which I do think slows down&nbsp; progress later. I don’t think that’s enough to&nbsp;&nbsp; flip the sign. I think maybe it wasn’t the far&nbsp;

enough past, but now I would still say moving&nbsp;&nbsp; faster now is net negative. But to be clear, it’s&nbsp; a lot less net negative than merely accelerating&nbsp;&nbsp; AI. Because I do think, again, the chat GBT thing,&nbsp; I’m glad people are having policy discussions now,&nbsp;&nbsp;

rather than delaying the Chat GBT wake up&nbsp; thing by a year and then having chat GBT was.&nbsp; Net negative or Rlhf was net negative. So here, just on the acceleration, it’s just like,&nbsp;&nbsp; how is the press of chat GBT? And my guess is&nbsp;

net negative, but I think it’s not super clear&nbsp;&nbsp; and it’s much less than slowing AI. Slowing AI&nbsp; is great. If you could slow overall AI progress,&nbsp;&nbsp; I think slowing AI by causing you know,&nbsp; there’s this issue we’re slowing AI now, like,&nbsp;&nbsp;

for chat GBT, you’re building up this backlog.&nbsp; Like, why does Chat GBT make such a splash? Like,&nbsp;&nbsp; I think people there’s a reasonable chance if you&nbsp; don’t have a splash about chat GBT, you have a&nbsp;&nbsp; splash about GBT four, and if you fail to have&nbsp;

a splash about GBT four, there’s a reasonable&nbsp;&nbsp; chance of a splash about GBT 4.5. And just&nbsp; like, as that happens later, there’s just,&nbsp;&nbsp; like, less and less time between that splash and&nbsp; between when an AI potentially kills everyone.&nbsp;

Right? So people governments are talking about&nbsp; it as they are now, and people aren’t. But okay,&nbsp;&nbsp; so let’s talk about the slowing&nbsp; down, because this is also all.&nbsp; One subcomponent of the overall impact. And I was&nbsp;

just saying this to briefly give the roadmap for&nbsp;&nbsp; the overall too long answer. There’s a question&nbsp; of what’s the calculus for speeding up? I think&nbsp;&nbsp; speeding up is pretty rough. I think speeding&nbsp; up locally is a little bit less rough. And then,&nbsp;&nbsp;

yeah, I think that the effect, like the&nbsp; overall effect size from doing alignment&nbsp;&nbsp; work on reducing takeover risk versus speeding&nbsp; up AI is pretty good. I think it’s pretty good.&nbsp;&nbsp; I think you reduce takeover risk significantly&nbsp;

before you speed up AI by a year or whatever.&nbsp; Okay, got it. If it’s good to, like, slowing&nbsp; down AI is good, presumably because it gives&nbsp;&nbsp; you more time to do alignment. But alignment also&nbsp; helps speed up AI. Rlhf is alignment, and it help&nbsp;&nbsp;

with Chat GPT, which sped up AI. So I actually&nbsp; don’t understand how the feedback loop nets out,&nbsp;&nbsp; other than the fact that if AI is happening, you&nbsp; need to do alignment at some point. Right? So,&nbsp;&nbsp; I mean, you can’t just not do alignment.

Yes. I think if the only reason you thought faster&nbsp;&nbsp; AI progress was bad was because it gave less&nbsp; time to do alignment, then there would just be no&nbsp;&nbsp; possible way that the calculus comes out negative&nbsp; for alignment. You’re like, maybe alignment speeds&nbsp;&nbsp;

up AI, but the only purpose of slowing down AI was&nbsp; to do it’s right. It could never come out ahead. I&nbsp;&nbsp; think the reason that you can come out ahead, the&nbsp; reason you could end up thinking the alignment was&nbsp;&nbsp; net negative, was because there’s a bunch of other&nbsp;

stuff you’re doing that makes AI safer. Like,&nbsp;&nbsp; if you think the world is gradually coming better&nbsp; to terms with the impact of AI, or policies being&nbsp;&nbsp; made, or you’re getting increasingly prepared to&nbsp; handle the threat of authoritarian abuse of AI,&nbsp;&nbsp;

if you think other stuff is happening that’s&nbsp; improving preparedness, then you have reason&nbsp;&nbsp; beyond alignment research to slow down AI. Actually. How big a factor is that? So let’s say&nbsp;&nbsp; right now we hit pause and you have ten years of&nbsp;

no alignment, no capabilities, but just people get&nbsp;&nbsp; to talk about it for ten years. How much more does&nbsp; that prepare people than we only have one year&nbsp;&nbsp; versus we have no time is just dead time, where no&nbsp; research in alignment or capabilities happening.&nbsp;

What does that dead time do for us right now? It&nbsp; seems like there’s a lot of policy stuff you’d&nbsp;&nbsp; want to do. This seemed like less plausible a&nbsp; couple of years ago, maybe, but if the world&nbsp;&nbsp; just knew they had a ten year pause right now,&nbsp;

I think there’s a lot of sense of, like, we have&nbsp;&nbsp; policy objectives to accomplish. If we had ten&nbsp; years, we could pretty much do those things. We’d&nbsp;&nbsp; have a lot of time to debate measurement regimes,&nbsp; debate policy regimes, and containment regimes,&nbsp;&nbsp;

and a lot of time to set up those institutions.&nbsp; If you told me that the world knew it was a pause,&nbsp;&nbsp; it wasn’t like people just see that AI progress&nbsp; isn’t happening, but they’re told like, you guys&nbsp;&nbsp; have been granted or cursed with a ten year, no&nbsp;

AI progress, no alignment progress pause. I think&nbsp;&nbsp; that would be quite good at this point. However,&nbsp; I think it would be much better at this point&nbsp;&nbsp; than it would have been two years ago. And so the&nbsp; entire concern with slowing AI development now,&nbsp;&nbsp;

rather than taking the ten year pause is just&nbsp; like if you slow the I development by a year now,&nbsp;&nbsp; my guess is some gets clawed back by low hanging&nbsp; fruit, gets picked faster in the future. My guess&nbsp;&nbsp; is you lose like half a year or something&nbsp;

like that in the future, maybe even more,&nbsp;&nbsp; maybe like two thirds of a year. So it’s&nbsp; like you’re trading time now for time in the&nbsp;&nbsp; future at some rate. And it’s just like that&nbsp; eats up a lot of the value of the slowdown.&nbsp;

And the crucial point being that time in the&nbsp; future matters more because you have more&nbsp;&nbsp; information, people are more bought in and so on. Yeah, the same reason I’m more excited about&nbsp;&nbsp; policy changing now than two years ago. So my&nbsp;

overall view is, just like in the past, this&nbsp;&nbsp; calculus changes over time, right? The more people&nbsp; are getting prepared, the better the calculus is&nbsp;&nbsp; for slowing down at this very moment. And I think&nbsp; now the calculus is, I would say positive for&nbsp;&nbsp;

just even if you pause now and it would get clawed&nbsp; back in the future. I think the pause now is just&nbsp;&nbsp; good because enough stuff is happening. We have&nbsp; enough idea of probably even apart from alignment&nbsp;&nbsp; research, and certainly if you include alignment&nbsp;

research, just like enough stuff is happening&nbsp;&nbsp; where the world is getting more ready and coming&nbsp; more to terms with impacts, that I just think it&nbsp;&nbsp; is worth it, even though some of that time is&nbsp; going to get clawed back again. Especially if&nbsp;&nbsp;

there’s a question of during a pause, does Nvidia&nbsp; keep making more? Like, that sucks if they do&nbsp;&nbsp; if you do a pause. But in practice, if you did a&nbsp; pause, nvidia probably couldn’t keep making more&nbsp;&nbsp; GPUs because in fact the demand for GPUs is really&nbsp;

important for them to do that. But if you told me&nbsp;&nbsp; that you just get to scale up hardware production&nbsp; and building the clusters but not doing AI,&nbsp;&nbsp; then that’s back to being net negative, I think. Pretty clearly, having brought brought up the&nbsp;&nbsp;

fact that we want some sort of measurement&nbsp; scheme for these capabilities, let’s talk&nbsp;&nbsp; about responsible scaling policies.&nbsp; Do you want to introduce what this is?&nbsp; Sure. So I guess the motivating. Question. It’s&nbsp;

like, what should AI labs be doing right now to&nbsp;&nbsp; manage risk and to sort of build good habits&nbsp; or practices for managed risk into the future?&nbsp;&nbsp; I think my take is that current systems&nbsp; pose, from a catastrophic risk perspective,&nbsp;&nbsp;

not that much risk today that is a failure to&nbsp; control or understand. GPT 4 can have real harms,&nbsp;&nbsp; but doesn’t have much harm with respect to the&nbsp; kind of takeover risk I’m worried about, or even&nbsp;&nbsp; much catastrophic harm with respect to misuse. So&nbsp;

I think if you want to manage catastrophic harms,&nbsp;&nbsp; I think right now you don’t need to be that&nbsp; careful with GBT Four. And so to the extent&nbsp;&nbsp; you’re like, what should labs do? I think the&nbsp; single most important thing seems like understand&nbsp;&nbsp;

whether that’s the case. Notice when that stops&nbsp; being the case, have a reasonable roadmap for what&nbsp;&nbsp; you’re actually going to do when that stops being&nbsp; the case. So that motivates this set of policies,&nbsp;&nbsp; which I’ve sort of been pushing for labs to adopt,&nbsp;

which is saying, here’s what we’re looking for,&nbsp;&nbsp; here’s some threats we’re concerned about, here’s&nbsp; some capabilities that we’re measuring, here’s the&nbsp;&nbsp; level, here’s the actual concrete measurement&nbsp; results that would suggest to us that those&nbsp;&nbsp;

threats are real. Here’s the action we would take&nbsp; in response to observing those capabilities if we&nbsp;&nbsp; couldn’t take those actions, like, if we’ve said&nbsp; that we’re going to secure the weights, but we’re&nbsp;&nbsp; not able to do that, we’re going to pause until&nbsp;

we can take those actions. Yeah. So this sort of&nbsp;&nbsp; again, I think it’s motivated primarily, but&nbsp; what should you be doing as a lab to manage&nbsp;&nbsp; catastrophic risk now in a way that’s like&nbsp; a reasonable precedent and habit and policy&nbsp;&nbsp;

for continuing to implement into the future? And which labs I don’t know if this is public yet,&nbsp;&nbsp; but which labs are cooperating on this? Yeah. So Anthropic has written this document&nbsp;&nbsp; their current responsible scaling policy,&nbsp;

and then have been talking with other folks,&nbsp;&nbsp; I guess don’t really want to comment on other&nbsp; conversations, but I think in general, people&nbsp;&nbsp; who are more interested in or more think you have&nbsp; plausible catastrophic harms on, like, a five year&nbsp;&nbsp;

timeline are more interested in this. And there’s&nbsp; not that long a list of suspects like that.&nbsp; There’s not that many laps. Okay, so if these&nbsp; companies would be willing to coordinate and say,&nbsp;&nbsp; at these different benchmarks, we’re going to&nbsp;

make sure we have these safeguards, what happens?&nbsp;&nbsp; I mean, there are other companies and other&nbsp; countries which care less about this. Are you just&nbsp;&nbsp; slowing down the companies that are most aligned? Yeah, I think the first sort of is understanding&nbsp;&nbsp;

sort of what is actually a reasonable set of&nbsp; policies for managing risk. I do think there’s&nbsp;&nbsp; a question of, like, you might end up in a&nbsp; situation where you say, like, well, here’s&nbsp;&nbsp; what we would do in ideal world if everyone was&nbsp;

behaving responsibly. We’d want to keep risk to&nbsp;&nbsp; 1% or a couple of percent or whatever, maybe even&nbsp; lower levels, depending on how you feel. However,&nbsp;&nbsp; in the real world, there’s enough of a mess,&nbsp; there’s enough unsafe stuff happening that&nbsp;&nbsp;

actually it’s worth making larger compromises. Or&nbsp; if we don’t kill everyone, someone else will kill&nbsp;&nbsp; everyone anyway. So actually the counterfactual&nbsp; risk is much lower. I think if you end up in that&nbsp;&nbsp; situation, it’s still extremely valuable to have&nbsp;

said, here’s the policies we’d like to follow.&nbsp;&nbsp; Here’s the policies we’ve started following.&nbsp; Here’s why we think it’s dangerous. Here’s&nbsp;&nbsp; the concerns we have if people are following&nbsp; significantly laxer policies. And then this&nbsp;&nbsp;

is maybe helpful as like an input to or model for&nbsp; potential regulation. It’s helpful for being able&nbsp;&nbsp; to just produce clarity about what’s going on.&nbsp; I think historically there’s been considerable&nbsp;&nbsp; concern about developers being more or less safe,&nbsp;

but there’s not that much legible differentiation&nbsp;&nbsp; in terms of what their policies are. I think&nbsp; getting to that world would be good. It’s a&nbsp;&nbsp; very different world, if you’re like. Actor X&nbsp; is developing AI, and I’m concerned that they&nbsp;&nbsp;

will do so in an unsafe way versus, if you’re&nbsp; like, look, we take security precautions or&nbsp;&nbsp; safety precautions XYZ here’s why we think those&nbsp; precautions are desirable or necessary. We’re&nbsp;&nbsp; concerned about this other developer because&nbsp;

they don’t do those things. I think it’s just&nbsp;&nbsp; like a qualitatively. It’s kind of the first step&nbsp; you would want to take in any world where you’re&nbsp;&nbsp; trying to get people on side or like, trying to&nbsp; move towards regulation that can manage risk.&nbsp;

How about the concern that you have these&nbsp; evaluations? And let’s say you declare to&nbsp;&nbsp; the world, our new model has a capability to&nbsp; help develop bioweapons or help you make cyber&nbsp;&nbsp; attacks. And therefore we’re pausing right now&nbsp;

until you can figure this out and China hears&nbsp;&nbsp; this and thinks, oh wow, a tool that can help&nbsp; us make cyberattacks and then just steals the&nbsp;&nbsp; weights. Does this scheme work in the current&nbsp; regime where we can’t ensure that China doesn’t&nbsp;&nbsp;

just steal the weights and more so are you&nbsp; increasing the salience of dangerous models so&nbsp;&nbsp; that you blur this out and then people want the&nbsp; weights now because they know what they can do?&nbsp; Yeah, I think the general discussion does&nbsp;

emphasize potential harms or potential. I mean,&nbsp;&nbsp; some of those are harms and some of those&nbsp; are just like impacts that are very large&nbsp;&nbsp; and so might also be an inducement to develop&nbsp; models. I think that part, if you’re for a&nbsp;&nbsp;

moment ignoring security and just saying that&nbsp; may increase investment. I think it’s like,&nbsp;&nbsp; on balance, just quite good for people to have an&nbsp; understanding of potential impacts just because&nbsp;&nbsp; it is an input both into proliferation but also&nbsp;

into regulation or safety. With respect to things&nbsp;&nbsp; like security of either weights or other IP, I do&nbsp; think you want to have moved to significantly more&nbsp;&nbsp; secure handling of model weights before the point&nbsp; where a leak would be catastrophic. And indeed,&nbsp;&nbsp;

for example, in Anthropics document or in their&nbsp; plan, security is one of the first sets of&nbsp;&nbsp; tangible changes that is at this capability level,&nbsp; we need to have such security practices in place.&nbsp;&nbsp; So I do think that’s just one of the things you&nbsp;

need to get in place at a relatively early stage&nbsp;&nbsp; because it does undermine the rest of the measures&nbsp; you may take and is also just part of the easiest&nbsp;&nbsp; if you imagine catastrophic harms over the next&nbsp; couple of years. I think security failures are&nbsp;&nbsp;

kind of play a central role in a lot of those. And&nbsp; maybe the last thing to say is it’s not clear that&nbsp;&nbsp; you should say we have paused because we have&nbsp; models that can develop bioweapons versus just&nbsp;&nbsp; potentially not saying anything about what models&nbsp;

you’ve developed. Or at least saying like, hey,&nbsp;&nbsp; by the way, here’s a set of practices we currently&nbsp; implement, here’s a set of capabilities our models&nbsp;&nbsp; don’t have. We’re just not even talking that&nbsp; much. Sort of the minimum of such a policy is&nbsp;&nbsp;

to say here’s what we do from the perspective&nbsp; of security or internal controls or alignment.&nbsp;&nbsp; Here’s a level of capability at which we’d have&nbsp; to do more. And you can say that and you can&nbsp;&nbsp; raise your level of capability and raise your&nbsp;

protective measures before your models hit your&nbsp;&nbsp; previous level. It’s fine to say we are prepared&nbsp; to handle a model that has such and such extreme&nbsp;&nbsp; capabilities prior to actually having such a&nbsp; model at hand, as long as you’re prepared to&nbsp;&nbsp;

move your protective measures to that regime. Okay, so let’s just get to the end where you&nbsp;&nbsp; think you’re a generation away or a little&nbsp; bit more scaffolding away from a model that&nbsp;&nbsp; is human level and subsequently could&nbsp;

cascade an intelligence explosion. What&nbsp;&nbsp; do you actually do at that point? What is the&nbsp; level of evaluation of safety where you would&nbsp;&nbsp; be satisfied of releasing a human level model? There’s a couple points that come up here. So one&nbsp;&nbsp;

is this threat model of sort of automating R and D&nbsp; independent of whether AI can do something on the&nbsp;&nbsp; object level that’s potentially dangerous. I think&nbsp; it’s reasonable to be concerned if you have an AI&nbsp;&nbsp; system that might, if leaked, allow other actors&nbsp;

to quickly build powerful AI systems or might&nbsp;&nbsp; allow you to quickly build much more powerful&nbsp; systems, or might, if you’re trying to hold&nbsp;&nbsp; off on development just itself, be able to create&nbsp; much more powerful systems. One question is how to&nbsp;&nbsp;

handle that kind of threat model as distinct from&nbsp; a threat model like this could enable destructive&nbsp;&nbsp; bioterrorism or this could enable massively scaled&nbsp; cybercrime or whatever. And I think I am unsure&nbsp;&nbsp; how you should handle that. I think right now,&nbsp;

implicitly it’s being handled by saying, look,&nbsp;&nbsp; there’s a lot of overlap between the kinds of&nbsp; capabilities that are necessary to cause various&nbsp;&nbsp; harms and the kinds of capabilities are necessary&nbsp; to accelerate ML. So we’re kind of going to catch&nbsp;&nbsp;

those with an early warning sign for both and deal&nbsp; with the resolution of this question a little bit&nbsp;&nbsp; later. So, for example, in anthropics policy they&nbsp; have this sort of autonomy in the lab benchmark&nbsp;&nbsp; which I think is probably occurs prior to&nbsp;

either really massive AI acceleration or to most&nbsp;&nbsp; potential catastrophic object level catastrophic&nbsp; harms. And the idea is that’s like a warning sign&nbsp;&nbsp; lets you punt. So this is a bit of an aggression&nbsp; in terms of how to think about that risk. I think&nbsp;&nbsp;

I am unsure whether you should be addressing that&nbsp; risk directly and saying we’re scared to even work&nbsp;&nbsp; with such a model. Or if you should be mostly&nbsp; focusing on object level harms and saying like,&nbsp;&nbsp; okay, we need more intense precautions to manage&nbsp;

object level harms because of the prospect of very&nbsp;&nbsp; rapid change and the availability of this AI&nbsp; just creates that prospect. Okay, this is all&nbsp;&nbsp; still a digression. So if you had a model which&nbsp; you thought was potentially very scary either on&nbsp;&nbsp;

the object level or because of leading to this&nbsp; sort of intelligence explosion dynamics, I mean,&nbsp;&nbsp; things you want in place are like you really do&nbsp; not want to be leaking the weights to that model.&nbsp;&nbsp; Like you don’t want the model to be able to run&nbsp;

away. You don’t want human employees to be able&nbsp;&nbsp; to leak it. You don’t want external attackers or&nbsp; any set of all 3 of those coordinating you. You&nbsp;&nbsp; really don’t want internal abuse or tampering with&nbsp; such models. So if you’re producing such models,&nbsp;&nbsp;

you don’t want to be the case. Like a couple&nbsp; of employees could change the way the model&nbsp;&nbsp; works or could do something that violates your&nbsp; policy easily with that model. And if a model&nbsp;&nbsp; is very powerful, even the prospect of internal&nbsp;

abuse could be quite bad. And so you might need&nbsp;&nbsp; significant internal controls to prevent that. Sorry if you’re already getting to it, but the&nbsp;&nbsp; part I’m most curious about is separate from the&nbsp; ways in which other people might fuck with it,&nbsp;&nbsp;

it’s isolated. What is the point at which&nbsp; we satisfied? It in and of itself is not&nbsp;&nbsp; going to pose a risk to humanity. It’s&nbsp; human level, but we’re happy with it.&nbsp; Yeah. So I think here I listed maybe the two most&nbsp;

simple ones that start out like security. Internal&nbsp;&nbsp; controls, I think become relevant immediately and&nbsp; are very clear why you care about them. I think as&nbsp;&nbsp; you move beyond that, it really depends how you’re&nbsp; deploying such a system. So I think if your model,&nbsp;&nbsp;

if you have good monitoring and internal&nbsp; controls and security and you just have&nbsp;&nbsp; weights sitting there, I think you mostly&nbsp; have addressed the risk from the weights&nbsp;&nbsp; just sitting there. Now, what you’re talking&nbsp;

about for risk is mostly, and maybe there’s some&nbsp;&nbsp; blurriness here of how much internal controls&nbsp; captures not only employees using the model,&nbsp;&nbsp; but anything a model can do internally. You&nbsp; would really like to be in a situation where&nbsp;&nbsp;

your internal controls are robust not just to&nbsp; humans but to models potentially like E-G-A model&nbsp;&nbsp; shouldn’t be able to subvert these measures and&nbsp; you care just as you care about are your measures&nbsp;&nbsp; robust if humans are behaving maliciously? You&nbsp;

care about are your measures robust if models&nbsp;&nbsp; are behaving maliciously? So I think beyond that&nbsp; if you’ve then managed the risk of just having the&nbsp;&nbsp; weight sitting around. Now we talk about in some&nbsp; sense most of the risk comes from doing things&nbsp;&nbsp;

with the model. You need all the rest so that&nbsp; you have any possibility of applying the brakes&nbsp;&nbsp; or implementing a policy. But at some point as&nbsp; the model gets competent you’re saying like okay,&nbsp;&nbsp; could this cause a lot of harm? Not because it&nbsp;

leaks or something, but because we’re just giving&nbsp;&nbsp; it a bunch of actuators. We’re deploying it as a&nbsp; product and people could do crazy stuff with it.&nbsp;&nbsp; So if we’re talking not only about a powerful&nbsp; model but like a really broad deployment of&nbsp;&nbsp;

just something similar to the Open Eyes API where&nbsp; people can do whatever they want with this model&nbsp;&nbsp; and maybe the economic impact is very large. So in&nbsp; fact, if you deploy that system it will be used in&nbsp;&nbsp; a lot of places such that if AI systems wanted&nbsp;

to cause trouble it would be very very easy for&nbsp;&nbsp; them to cause catastrophic harms. Then I think you&nbsp; really need to have some kind of I mean, I think&nbsp;&nbsp; probably the science and discussion has to improve&nbsp; before this becomes that realistic. But you really&nbsp;&nbsp;

want to have some kind of alignment analysis,&nbsp; guarantee of alignment before you’re comfortable&nbsp;&nbsp; with this. And so by that I mean you want to be&nbsp; able to bound the probability that someday all the&nbsp;&nbsp; AI systems will do something really harmful. That&nbsp;

there’s some thing that could happen in the world&nbsp;&nbsp; that would cause these large scale correlated&nbsp; failures of your AIS. And so for that there’s&nbsp;&nbsp; sort of two categories that’s like one, the other&nbsp; thing you need is protection against misuse of&nbsp;&nbsp;

various kinds which is also quite hard. And by the way, which one are you worried&nbsp;&nbsp; about more misuse or misalignment? I mean, in the near term I think harms&nbsp;&nbsp; from misuse are like especially if you’re&nbsp;

not restricting to the tale of extremely&nbsp;&nbsp; large catastrophes. I think the harms from&nbsp; misuse are clearly larger in the near term.&nbsp; But actually on that, let me ask because if you&nbsp; think that it is the case that there are simple&nbsp;&nbsp;

recipes for destruction that are further down&nbsp; the tech tree by that I mean you’re familiar.&nbsp;&nbsp; But just for the audience there’s some way&nbsp; to configure $50,000 and a teenager’s time&nbsp;&nbsp; to destroy a civilization. If that thing is&nbsp;

available, then misuses itself a teal risk,&nbsp;&nbsp; right? So do you think that that prospect&nbsp; is less likely than a way you could put it?&nbsp; Is there’s, like, a bunch of potential destructive&nbsp; technologies? And alignment is about AI itself&nbsp;&nbsp;

being such a destructive technology, where even&nbsp; if the world just uses the technology of today,&nbsp;&nbsp; simply access to AI could cause human civilization&nbsp; to have serious problems. But there’s also just a&nbsp;&nbsp; bunch of other potential destructive technologies.&nbsp;

Again, we mentioned like physical explosives or&nbsp;&nbsp; bioweapons of various kinds, and then the whole&nbsp; tale of who knows what. My guess is that Alignment&nbsp;&nbsp; becomes a catastrophic issue prior to most&nbsp; of these. That is, like, prior to some way to&nbsp;&nbsp;

spend $50,000 to kill everyone, with the salient&nbsp; exception of possibly, like, bioweapons. So that&nbsp;&nbsp; would be my guess. And then there’s a question of&nbsp; what is your risk management approach? Not knowing&nbsp;&nbsp; what’s going on here, and you don’t understand&nbsp;

whether there’s some way to use $50,000. But I&nbsp;&nbsp; think you can do things like understand how good&nbsp; is an AI at coming up with such schemes. Like,&nbsp;&nbsp; you can talk to your AI. Be like, does it produce&nbsp; new ideas for destruction we haven’t recognized?&nbsp;

Yeah. Not whether we can evaluate it, but&nbsp; whether if such a thing exists. And if it does,&nbsp;&nbsp; then the misuse itself is an existential&nbsp; risk. Because it seemed like earlier&nbsp;&nbsp; you were saying misalignment is where the&nbsp;

existential risk comes from, but misuse is&nbsp;&nbsp; where the sort of short term dangers come from. Yeah, I mean, I think ultimately you’re going&nbsp;&nbsp; to have a lot of destructive like, if you look at&nbsp; the entire tech tree of humanity’s future, I think&nbsp;&nbsp;

you’re going to have a fair number of destructive&nbsp; technologies. Most likely. I think several of&nbsp;&nbsp; those will likely pose existential risks in parts.&nbsp; If you imagine a really long future, a lot of&nbsp;&nbsp; stuff’s going to happen. And so when I talk about&nbsp;

where the existential risk comes from, I’m mostly&nbsp;&nbsp; thinking about comes from when? At what point do&nbsp; you face what challenges or in what sequence. And&nbsp;&nbsp; so I’m saying I think misalignment is probably&nbsp; like one way of putting it is if you imagine&nbsp;&nbsp;

AI systems sophisticated enough to discover&nbsp; destructive technologies that are totally not on&nbsp;&nbsp; our radar right now, I think those come well after&nbsp; AI systems capable enough that if misaligned,&nbsp;&nbsp; they would be catastrophically dangerous. The&nbsp;

level of competence necessary to, if broadly&nbsp;&nbsp; deployed in the world, bring down a civilization&nbsp; is much smaller than the level of competence&nbsp;&nbsp; necessary to advise one person on how to bring&nbsp; down a civilization just because in one case&nbsp;&nbsp;

you already have a billion copies of yourself or&nbsp; whatever. I think it’s mostly just the sequencing&nbsp;&nbsp; thing, though. In the very long run, I think you&nbsp; care about, like, hey, AI will be expanding the&nbsp;&nbsp; frontier of dangerous technologies. We want to&nbsp;

have some policy for exploring or understanding&nbsp;&nbsp; that frontier. And whether we’re about to turn up&nbsp; something really bad, I think those policies can&nbsp;&nbsp; become really complicated. Right now, I think RSPs&nbsp; can focus more on like, we have our inventory of&nbsp;&nbsp;

the things that a human is going to do to cause a&nbsp; lot of harm with access to AI. Probably are things&nbsp;&nbsp; that are on our radar that is like, they’re not&nbsp; going to be completely unlike things that a human&nbsp;&nbsp; could do to cause a lot of harm with access to&nbsp;

weak AIS or with access to other tools. I think&nbsp;&nbsp; it’s not crazy to initially say we’re doing we’re&nbsp; looking at the things closest to human and humans&nbsp;&nbsp; being able to cause huge amounts of harm and&nbsp; asking which of those are taken over the line,&nbsp;&nbsp;

but eventually that’s not the case. Eventually,&nbsp; like, AIS will enable just like, totally&nbsp;&nbsp; different ways of killing a billion people. But I think I interrupted you on the initial&nbsp;&nbsp; question of, yeah, so human level AI,&nbsp;

not from leaking but from deployment,&nbsp;&nbsp; what is the point at which you’d be&nbsp; comfortable deploying a human level AI?&nbsp; So, again, there’s sort of like some stuff&nbsp; you care about on the Mississippi side and&nbsp;&nbsp;

some stuff you care about on the misalignment&nbsp; side. And there’s probably further things you&nbsp;&nbsp; care about especially to extend your concerns&nbsp; regarding catastrophic risk. But maybe I most&nbsp;&nbsp; want to talk about just like what you care&nbsp;

about on the alignment side, because it’s like&nbsp;&nbsp; the thing I’ve actually thought about most and&nbsp; also a thing I care about a lot. Also, I think a&nbsp;&nbsp; significant fraction of the existential risk over&nbsp; the kind of foreseeable future. So on that front,&nbsp;&nbsp;

I broadly think there’s like two kinds. Like, if&nbsp; you ask me right now what evidence for alignment&nbsp;&nbsp; could make you comfortable, I think my best guess&nbsp; would be to provide two kinds of evidence. So one&nbsp;&nbsp; kind of evidence is on the like, could you detect&nbsp;

or prevent catastrophic harm if such a system was&nbsp;&nbsp; misaligned? I think there’s like a couple of&nbsp; things you would do here. One thing you would&nbsp;&nbsp; do is on this adversarial evaluation front. So you&nbsp; could try and say, for example, we have tried to&nbsp;&nbsp;

test our system in a broad diversity of situations&nbsp; that reflect cases where it might cause harm,&nbsp;&nbsp; like cases where someone is trying to recruit&nbsp; it to, like anyway. Cases where it might cause&nbsp;&nbsp; harm or cases where a large number of AI systems&nbsp;

might sort of all decide to work across purposes&nbsp;&nbsp; to humans. Like the robot rebellion is starting&nbsp; or whatever. We’ve done evaluation in a broad&nbsp;&nbsp; distribution of situations, and then we have&nbsp; tried to argue that our AI is actually like,&nbsp;&nbsp;

those tests are indicative of the real world. So&nbsp; we’ve tried to argue like, hey, actually the AI is&nbsp;&nbsp; not very good at distinguishing situations&nbsp; we produce in the lab as tests from similar&nbsp;&nbsp; situations that occur in the real world. And the&nbsp;

coverage of this distribution is reasonable. This&nbsp;&nbsp; is an example of a thing you can do that’s&nbsp; not really making assumptions about what’s&nbsp;&nbsp; going on inside the model or about how the model&nbsp; is the model aligned. It’s more trying to say,&nbsp;&nbsp;

is it the case that our testing or monitoring&nbsp; machinery could detect or react to something bad&nbsp;&nbsp; happening? In this case, could it detect a system&nbsp; which would, under some conditions do something&nbsp;&nbsp; really bad? There’s a lot of stuff in that genre,&nbsp;

and I tried to throw out that example, but I think&nbsp;&nbsp; there’s like a big like that on its own wouldn’t&nbsp; be compelling even from this perspective. You kind&nbsp;&nbsp; of need a lot of pieces together and that’s like&nbsp; kind of a demanding technical project. But I think&nbsp;&nbsp;

one without necessarily like, deep conceptual&nbsp; difficulty. A big problem with it is it’s liable&nbsp;&nbsp; to fail. Like it’s liable you’re going to do&nbsp; that testing and say, we think these tests are&nbsp;&nbsp; representative because the AI can’t distinguish&nbsp;

tests from the real world, which you can maybe&nbsp;&nbsp; achieve now, but will probably become impossible&nbsp; to achieve at some level. It’s not clear what’s&nbsp;&nbsp; at human level or how far past human level. Let’s just make that example concrete for&nbsp;&nbsp;

the audience. Correct me if this is wrong, but it&nbsp; sounds like you basically give it the opportunity&nbsp;&nbsp; to do a coup or make a bioweapon or whatever in&nbsp; testing in a situation where it thinks it’s the&nbsp;&nbsp; real world and you’re like, it didn’t do any&nbsp;

of that. Is that what you’re talking about?&nbsp; That’s the kind of thing okay. And it’s not the&nbsp; greatest so dag color when I say I can’t tell the&nbsp;&nbsp; difference. The kind of valuation you would love&nbsp; to do if you could is to say like, hey, we have a&nbsp;&nbsp;

bunch of real world deployment. We have a bunch of&nbsp; data from those deployments. We also have a bunch&nbsp;&nbsp; of in the lab tests of situations. If we look at&nbsp; in the lab test of a situation together with real&nbsp;&nbsp; world cases in which the situation occurs, and&nbsp;

then we fine tune a model to try and distinguish&nbsp;&nbsp; the difference there the model can’t even tell&nbsp; when fine tuned the difference between test&nbsp;&nbsp; and real world cases. And if the model can tell&nbsp; the difference, which is almost certainly going&nbsp;&nbsp;

to be the case at some level capability, then you&nbsp; say, okay, our first line of hoped for defense has&nbsp;&nbsp; failed. And so now we need to understand how can&nbsp; tests be indicative when models are capable enough&nbsp;&nbsp; to tell the difference between the tests and the&nbsp;

real world. Now you need to start arguing about&nbsp;&nbsp; what is the model paying attention to. It gets&nbsp; basically like a first line of if you get lucky,&nbsp;&nbsp; what would work here? And then there’s a deeper&nbsp; like, you probably have to do novel science at&nbsp;&nbsp;

some point to make this case. All of this was&nbsp; part of like I was saying, maybe you want to&nbsp;&nbsp; have kind of two lines of defense. All of this&nbsp; was like part of this first line of defense of,&nbsp;&nbsp; like, can you detect something is going wrong&nbsp;

or can you prevent harm from occurring? Can you&nbsp;&nbsp; have monitoring that will react quickly enough to&nbsp; avoid catastrophe? I think you probably also want&nbsp;&nbsp; to have a second line of defense that’s more maybe&nbsp; this is even more important than the first one,&nbsp;&nbsp;

is just understanding whether dangerous forms&nbsp; of misalignment can occur. The best reference&nbsp;&nbsp; point for this, I think, is the like, there have&nbsp; been a couple of projects like this in academia.&nbsp;&nbsp; Anthropic has been working on a project or spun&nbsp;

up a team doing this kind of work, trying to say,&nbsp;&nbsp; like, can dangerous forms of reward hacking occur&nbsp; or can deceptive alignment, in fact occur in the&nbsp;&nbsp; lab? And here what you want to do is either say,&nbsp; like, okay, even if we create a best case, even&nbsp;&nbsp;

if you create optimal conditions for deceptive&nbsp; alignment or for reward hacking, we just can’t&nbsp;&nbsp; cause it to occur even in the lab. And if you do&nbsp; a good enough job of that, I think it could give&nbsp;&nbsp; you some evidence, and again, more likely that&nbsp;

fails in that when you create optimal conditions,&nbsp;&nbsp; you do see deceptive alignment and reward hacking&nbsp; in the lab. But then once you have that data,&nbsp;&nbsp; once you can say, okay, in the lab, actually&nbsp; these things can occur, then you can start saying,&nbsp;&nbsp;

and we have a robust scientific understanding that&nbsp; enables us to fix those problems when they occur.&nbsp;&nbsp; Or then you have this fork on your second&nbsp; line where you say, either it is very hard,&nbsp;&nbsp; or we’re not able to create conditions where&nbsp;

these failures emerge. Or I think more likely we&nbsp;&nbsp; are able to create those conditions. And here’s&nbsp; the story about why we are able to detect those&nbsp;&nbsp; in a way that would work in the real world and&nbsp; we can see they don’t occur in the real world.&nbsp;

How do you create the optimal conditions&nbsp; for it to want to be deceptive? Do you&nbsp;&nbsp; fine tune it on mindcomp or what are you doing? Yeah, so for deceptive alignment, I mean, I think&nbsp;&nbsp; it’s really complicated. Yeah, I think this is&nbsp;

a very hard project. I think one of the things,&nbsp;&nbsp; one of the most important things for people&nbsp; concerned about misalignment to do is to ensure&nbsp;&nbsp; that adequate effort is put into this task. And&nbsp; we have, in fact, created good conditions in the&nbsp;&nbsp;

laboratory and there’s like, real disagreement&nbsp; about how informative those will be. But okay,&nbsp;&nbsp; if you were to guess, for deceptive Lymen, how&nbsp; would you do this? An example is suppose you&nbsp;&nbsp; train an AI system that has some medium horizon&nbsp;

goal. You train your AI system to, whatever,&nbsp;&nbsp; get some paperclips it wants to produce as many&nbsp; paperclips as it can over the next five days,&nbsp;&nbsp; just like select actions really aggressively for&nbsp; producing paperclips over the next five days.&nbsp;&nbsp;

You do your Rlhf, you do your pre training,&nbsp; whatever. That’s like your phase one. You&nbsp;&nbsp; also ensure your AI system has a really good&nbsp; understanding of how it’s trained. So, like,&nbsp;&nbsp; this AI system wants paperclips and it understands&nbsp;

everything about how it’s trained and everything&nbsp;&nbsp; about how it’s fine tuned. And you train on just&nbsp; like a lot of this data. And they say, okay, if&nbsp;&nbsp; we’ve done all that, we have this concern that if&nbsp; a system wants paperclips and understands really&nbsp;&nbsp;

well how it’s trained, then if it’s going to be&nbsp; trained to get apples instead of paperclips, it’s&nbsp;&nbsp; just going to do some cost benefit and be like,&nbsp; really? While I’m being trained to get apples,&nbsp;&nbsp; I should do that. But I should do that whether or&nbsp;

not even if I want paperclips, I should still do&nbsp;&nbsp; that. So training won’t really affect its values.&nbsp; It will just understand that it’s being trained to&nbsp;&nbsp; get apples. It will try and get apples, and then&nbsp; if you take it out of training, it will go back to&nbsp;&nbsp;

getting paperclips. I think this exact setup has&nbsp; a number of problems or a number of disanalogies&nbsp;&nbsp; from the real world. But this is a setup which is&nbsp; relatively conducive to deceptive alignment like&nbsp;&nbsp; produce a system that wants one thing tell it a&nbsp;

lot about its training, the kind of information&nbsp;&nbsp; you might expect a system would get, and then try&nbsp; and understand whether in fact it is able to then&nbsp;&nbsp; or it tends or sometimes under optimal conditions,&nbsp; in fact, continues pursuing paperclips, only&nbsp;&nbsp;

pursuing apples when it thinks it’s being trained. All right, and this actually might be a good&nbsp;&nbsp; jumping off point into your current research. So&nbsp; in that case, where it wants to pursue paperclips,&nbsp;&nbsp; what would it look like for you to be say, well,&nbsp;

we figured out why it wants paperclips, and we&nbsp;&nbsp; figured out how to make sure it doesn’t optimize&nbsp; for that at our expense when we deploy it?&nbsp; Yeah, I think that at a meta level in terms of&nbsp; what’s your protection like, I think what you&nbsp;&nbsp;

want to be saying is, we have these examples&nbsp; in the lab of something bad happening. We’re&nbsp;&nbsp; concerned about the problem at all because we have&nbsp; examples in the lab. And again, this should all be&nbsp;&nbsp; an addition. I think you kind of want this defense&nbsp;

in depth of saying, we also have this testing&nbsp;&nbsp; regime that would detect problems for the deployed&nbsp; model. We have our problems in the lab. We then&nbsp;&nbsp; have some techniques which we believe address&nbsp; these problems. We believe that adversarial&nbsp;&nbsp;

training fixes this, or we believe that our&nbsp; interpretability method will reliably detect&nbsp;&nbsp; this kind of deceptive alignment, or we believe&nbsp; our anomaly detection will reliably detect when&nbsp;&nbsp; the model goes from thinking it’s being trained&nbsp;

to thinking it should defect. And then you can&nbsp;&nbsp; say on the lab, we have some understanding&nbsp; of when those techniques work and when they&nbsp;&nbsp; don’t. We have some understanding of the relevant&nbsp; parameters for the real system that’s deployed.&nbsp;&nbsp;

And we have a. Reasonable margin of safety.&nbsp; So we have reasonable robustness on our story&nbsp;&nbsp; about when this works and when it doesn’t. And we&nbsp; can apply that margin of safety with a margin of&nbsp;&nbsp; safety to the real deployed system saying this&nbsp;

is the kind of story you want to build towards&nbsp;&nbsp; in the long run. Do your best to produce all the&nbsp; failures you can in the lab or versions of them,&nbsp;&nbsp; do your best to understand what causes them,&nbsp; what kind of anomaly detection actually works for&nbsp;&nbsp;

detecting this or what kind of filtering actually&nbsp; works and then apply that and that’s at the meta&nbsp;&nbsp; level. It’s not talking about what actually&nbsp; are those measures that would work effectively,&nbsp;&nbsp; which is obviously like what? I mean, a lot&nbsp;

of alignment research is really based on this&nbsp;&nbsp; hypothetical of like, someday there will be AI&nbsp; systems that fail in this way. What would you want&nbsp;&nbsp; to do? Can we have the technologies ready either&nbsp; because we might never see signs of the problem or&nbsp;&nbsp;

because we want to be able to move fast once we&nbsp; see signs of the problem. And obviously most of&nbsp;&nbsp; my life is in that I am really in that bucket. I&nbsp; mostly do alignment research. It’s just building&nbsp;&nbsp; out the techniques that do not have these failures&nbsp;

such that they can be available as an alternative&nbsp;&nbsp; if in fact these failures occur. Got it. Okay.&nbsp; Ideally they’ll be so good that&nbsp; even if you haven’t seen them,&nbsp;&nbsp;

you would just want to switch to reasonable&nbsp; that don’t have these or ideally they’ll&nbsp;&nbsp; work as well or better than normal training. Ideally, what will work better than the training?&nbsp; Yeah. So our quest is to design training methods&nbsp;

for which we don’t expect them to lead to reward&nbsp;&nbsp; hacking or don’t expect them to lead to receptive&nbsp; alignment. Ideally that won’t be like a huge&nbsp;&nbsp; tax where people are like, well, we use those&nbsp; methods only if we’re really worried about reward&nbsp;&nbsp;

hacking or receptive alignment. Ideally those&nbsp; methods would just work quite well and so people&nbsp;&nbsp; would be like, sure, I mean, they also address a&nbsp; bunch of other more mundane problems so why would&nbsp;&nbsp; we not use them? Which I think is like that’s&nbsp;

sort of the good story. The good story is you&nbsp;&nbsp; develop methods that address a bunch of existing&nbsp; problems because they just are more principled&nbsp;&nbsp; ways to train AI systems that work better, people&nbsp; adopt them and then we are no longer worried&nbsp;&nbsp;

about eg reward hacking or deceptive alignment. And to make this more concrete, tell me if this&nbsp;&nbsp; is the wrong way to paraphrase it, the example&nbsp; of something where it just makes a system better,&nbsp;&nbsp; so why not just use it, at least so far? Might be&nbsp;

like Rlhf where we don’t know if it generalizes,&nbsp;&nbsp; but so far it makes your chat GPT thing&nbsp; better and you can also use it to make&nbsp;&nbsp; sure that chat GPT doesn’t tell you how to make&nbsp; a bioweapon. So yeah, it’s not a mixture of tax.&nbsp;

Yeah. So I think this is right in the sense&nbsp; that using Rlhf is not really a tax. If you&nbsp;&nbsp; wanted to deploy a useful system, why would you&nbsp; not? Or it’s just very much worth the money of&nbsp;&nbsp; doing the training. RHF will address certain&nbsp;

kinds of alignment failures that is like,&nbsp;&nbsp; where system just doesn’t understand or is&nbsp; changing. Next word, prediction. It’s like,&nbsp;&nbsp; this is the kind of context where human would&nbsp; do this wacky thing even though it’s not what&nbsp;&nbsp;

we’d like. There’s like some very dumb alignment&nbsp; failures that will be addressed by it. But I think&nbsp;&nbsp; mostly the question is, is that true even for&nbsp; the sort of more challenging alignment failures&nbsp;&nbsp; that motivate concern in the field? I think&nbsp;

RL doesn’t address most of the concerns that&nbsp;&nbsp; motivate people to be worried about alignment. I’ll let the audience look up what Rlhf is. If&nbsp;&nbsp; they don’t know, it will just be more simpler&nbsp; to just look it up than explain right now. Okay,&nbsp;&nbsp;

so this seems like a good jumping off point&nbsp; to talk about the mechanism or the research&nbsp;&nbsp; you’ve been doing. To that end, explain it as you. Might to a child. Yeah. So the high level there’s&nbsp;&nbsp; a couple of different high level descriptions you&nbsp;

could give, and maybe I will unwisely give like a&nbsp;&nbsp; couple of them in the hopes that one kind of makes&nbsp; sense. A first pass is like, it would sure be&nbsp;&nbsp; great to understand why models have the behaviors&nbsp; they have. So you look at GPT four. If you ask&nbsp;&nbsp;

GPT 4 a question, it will say something that looks&nbsp; very polite. And if you ask it to take an action,&nbsp;&nbsp; it will take an action that doesn’t look&nbsp; dangerous. You will decline to do a coup,&nbsp;&nbsp; whatever. All this stuff I think you’d really&nbsp;

like to do is look inside the model and understand&nbsp;&nbsp; why it has those desirable properties. And if&nbsp; you understood that, you could then say, like,&nbsp;&nbsp; okay, now can we flag when these properties are&nbsp; at risk of breaking down? Or predict how robust&nbsp;&nbsp;

these properties are, determine if they hold in&nbsp; cases where it’s too confusing for us to tell&nbsp;&nbsp; directly by asking if the underlying cause is&nbsp; still present. That’s like a thing people would&nbsp;&nbsp; really like to do. Most work aimed at that long&nbsp;

term goal right now is just sort of opening up&nbsp;&nbsp; neural nets and doing some interpretability and&nbsp; trying to say, can we understand, even for very&nbsp;&nbsp; simple models, why they do the things they&nbsp; do, or what this neuron is for, or questions&nbsp;&nbsp;

like this. So Arc is taking a somewhat different&nbsp; approach where we’re instead saying, like, okay,&nbsp;&nbsp; look at these interpretability explanations&nbsp; that are made about models and ask, what are&nbsp;&nbsp; they actually doing? What is the type signature?&nbsp;

What are the rules of the game for making such an&nbsp;&nbsp; explanation? What makes a good explanation? And&nbsp; probably the biggest part of the hope is that&nbsp;&nbsp; if you want to, say, detect when the explanation&nbsp; has broken down or something weird has happened,&nbsp;&nbsp;

that doesn’t necessarily require a human to be&nbsp; able to understand this complicated interpretation&nbsp;&nbsp; of a giant model. If you understand what is an&nbsp; explanation about or what were the rules of the&nbsp;&nbsp; game, how are these constructed, then you might&nbsp;

be able to sort of automatically discover such&nbsp;&nbsp; things and automatically determine if on a new&nbsp; input it might have broken down. So that’s one&nbsp;&nbsp; way of sort of describing the high level goal.&nbsp; You could start from interpretability and say,&nbsp;&nbsp;

can we formalize this activity? Or what a good&nbsp; interpretation or explanation? Is there’s some&nbsp;&nbsp; other work in that genre? But I think we’re just&nbsp; taking a particularly ambitious approach to it.&nbsp; Yeah, let’s dive in. So, okay,&nbsp;

what is a good explanation?&nbsp; You mean what is this kind of criterion? At the&nbsp; end of the day, we kind of want some criterion.&nbsp;&nbsp; And the way the criterion should work is like you&nbsp; have your neural net, you have some behavior of&nbsp;&nbsp;

that model. Like a really simple example is like&nbsp; Anthropic has this sort of informal description&nbsp;&nbsp; being like, here’s induction. Like the tendency&nbsp; that if you have the pattern AB followed by A&nbsp;&nbsp; will tend to predict B. You can give some kind of&nbsp;

words and experiments and numbers that are trying&nbsp;&nbsp; to explain that. And what we want to do is say&nbsp; what is a formal version of that object? How do&nbsp;&nbsp; you actually test if such an explanation is good?&nbsp; So just clarifying what we’re looking for when we&nbsp;&nbsp;

say we want to define what makes an explanation&nbsp; good. And the kind of answer that we are searching&nbsp;&nbsp; for or settling on is saying this is kind of a&nbsp; deductive argument for the behavior. So you want&nbsp;&nbsp; to get given the weights of a neural net. So it’s&nbsp;

just like a bunch of numbers. You got your million&nbsp;&nbsp; numbers or billion numbers or whatever, and then&nbsp; you want to say, here’s some things I can point&nbsp;&nbsp; out about the network and some conclusions I can&nbsp; draw. I can be like, well, look, these two vectors&nbsp;&nbsp;

have large inner product and therefore these two&nbsp; activations are going to be correlated on this&nbsp;&nbsp; distribution. These are not established by drawing&nbsp; samples and checking. Things are correlated,&nbsp;&nbsp; but saying because of the weights being the&nbsp;

way they are, we can proceed forward through&nbsp;&nbsp; the network and derive some conclusions about&nbsp; what properties the outputs will have. So you&nbsp;&nbsp; could think of this as like the most extreme&nbsp; form would be just proving that your model has&nbsp;&nbsp;

this induction behavior. Like, you could imagine&nbsp; proving that if I sample tokens at random with&nbsp;&nbsp; this pattern AB followed by A, that B appears 30%&nbsp; of the time or whatever, that’s the most extreme&nbsp;&nbsp; form. And what we’re doing is kind of just like&nbsp;

relaxing the rules of the game for proof. Saying&nbsp;&nbsp; proofs are like incredibly restrictive. I think&nbsp; it’s unlikely they’re going to be applicable to&nbsp;&nbsp; kind of any interesting neural net. But the&nbsp; thing about proofs that is relevant for our&nbsp;&nbsp;

purposes isn’t that they give you 100% confidence&nbsp; so you don’t have to be like this incredible level&nbsp;&nbsp; of demand for rigor. You can relax the standards&nbsp; of proof a lot and still get this feature where&nbsp;&nbsp; it’s like a structural explanation for the&nbsp;

behavior, where you’re, like, deducing one&nbsp;&nbsp; thing from another until at the end, your final&nbsp; conclusion is like, therefore induction occurs.&nbsp; Would it be useful to maybe motivate this&nbsp; by explaining what the problem with normal&nbsp;&nbsp;

Mechanistic Interpretability is? So&nbsp; you mentioned induction heads. This is&nbsp;&nbsp; Anthropic found in two layer transformers, where&nbsp; Anthropic noticed that in a two layer transformer,&nbsp;&nbsp; there’s a pretty simple circuit by which if AB&nbsp;

happens in the past, then the model knows that&nbsp;&nbsp; if you see an A now, you do a B next, but&nbsp; that’s a two layer transformer. So we have&nbsp;&nbsp; these models that have hundreds of layers that&nbsp; have trillions of parameters. Okay. Anyways.&nbsp;&nbsp;

What is wrong with mechanistic? Interpretability. Yeah, I like mechanistic interpretability quite&nbsp;&nbsp; a lot. And I do think if you just consider the&nbsp; entire portfolio of what people are working on&nbsp;&nbsp; for alignment, I think there should be more work&nbsp;

on Mechanistic Interpretability than there is on&nbsp;&nbsp; this project Arc is doing. But I think that’s the&nbsp; case. So I think we’re mostly talking about yeah,&nbsp;&nbsp; I think we’re kind of a small fraction of the&nbsp; portfolio, and I think it’s like a good enough&nbsp;&nbsp;

bet. It’s quite a good bet overall. But so the&nbsp; thing that the problem we’re trying to address&nbsp;&nbsp; with Mechanistic Interpretability is kind of like&nbsp; if you do some interpretability and you explain&nbsp;&nbsp; some phenomenon, you face this question of what&nbsp;

does it mean? Your explanation was good. I think&nbsp;&nbsp; this is a problem somewhat institutionally or&nbsp; culturally. It’s just hard to know what you’re&nbsp;&nbsp; doing, and it’s hard to scale up an activity&nbsp; when you don’t really understand the rules of&nbsp;&nbsp;

the game for that activity very well. It’s hard&nbsp; to have that much confidence in your results.&nbsp; The explanation being it outputted this because it&nbsp; wants to take over the world versus it outputted&nbsp;&nbsp; this because it just wants to help you just&nbsp;

make it concrete why the explanation matters.&nbsp; Yeah. So the ideal kind of outcome here would be&nbsp; to say you have your AI system behaving nicely.&nbsp;&nbsp; You get some explanation for sort of why it’s&nbsp; behaving nicely, and we could tell a story in&nbsp;&nbsp;

English about that explanation, but we’re not&nbsp; actually imagining the explanation being a thing&nbsp;&nbsp; that makes sense to a human. But if you were to&nbsp; tell a story in English, which, again, you will&nbsp;&nbsp; not see as a research, sure it would be something&nbsp;

like, well, then the model believes it’s being&nbsp;&nbsp; trained. And so because it believes it’s being&nbsp; trained, it knows it needs to not do anything&nbsp;&nbsp; scary looking, or else the humans will penalize&nbsp; it. That’s something that’s happening inside this&nbsp;&nbsp;

opaque explanation. And then the hope is if you&nbsp; have that explanation and then you run into a new&nbsp;&nbsp; input on which the model doesn’t believe it’s&nbsp; being trained. If you just look at the set of&nbsp;&nbsp; activations of your model, that is not necessarily&nbsp;

a weird looking activation. It’s just a bunch of&nbsp;&nbsp; numbers. But if you look at this explanation,&nbsp; you see actually the explanation really crucially&nbsp;&nbsp; dependent on this fact holding consistently&nbsp; across the training distribution, which, again,&nbsp;&nbsp;

we as humans could editorialize and say that&nbsp; fact was it believes it’s being trained. But the&nbsp;&nbsp; explanation doesn’t fundamentally make reference&nbsp; to that. It’s just saying, here’s a property of&nbsp;&nbsp; the activations which holds over the training set,&nbsp;

and this property is responsible for the behavior,&nbsp;&nbsp; namely that doesn’t do anything that looks too&nbsp; dangerous. So then when, like, a new input comes&nbsp;&nbsp; in and it doesn’t satisfy that property, you&nbsp; can say, okay, this is anomalous with respect to&nbsp;&nbsp;

that explanation. So either it will not have the&nbsp; behavior like it won’t do something that appears&nbsp;&nbsp; dangerous, or maybe it will have that behavior&nbsp; but for some different reason than normal.&nbsp; Right.

Normally it does it&nbsp;&nbsp; because of this pathway, and now it’s doing it&nbsp; for a different pathway. And so you would like&nbsp;&nbsp; to be able to flag that both there’s a risk of&nbsp; not exhibiting the behavior, and if it happens,&nbsp;&nbsp;

it happens for a weird reason. And then you could&nbsp; I mean, at a minimum, when you encounter that,&nbsp;&nbsp; say, like, okay, raise some kind of alarm,&nbsp; there’s sort of more ambitious, complicated plans&nbsp;&nbsp; for how you would use it. Arc has some longer&nbsp;

story, which is kind of what motivated this,&nbsp;&nbsp; of how it fits into the whole rest of the plan. I just wanted to flag that because just so&nbsp;&nbsp; it’s clear why the explanation matters. Yeah. And for this purpose, it’s like the&nbsp;&nbsp;

thing that’s essential is kind of reasoning from&nbsp; one property of your model to the next property&nbsp;&nbsp; of your model. It’s really important that you’re&nbsp; going forward step by step rather than drawing a&nbsp;&nbsp; bunch of samples and confirming the property&nbsp;

holds. Because if you just draw a bunch of&nbsp;&nbsp; samples and confirm the property holds, you don’t&nbsp; get this check. We say, oh, here was the relevant&nbsp;&nbsp; fact about the internals that was responsible for&nbsp; this downstream behavior. All you see is like,&nbsp;&nbsp;

yeah, we checked a million cases and it happened&nbsp; in all of them. You really want to see this. Like,&nbsp;&nbsp; okay, here was the fact about the activations,&nbsp; which kind of causally leads to this behavior.&nbsp; But explain why the sampling, why it matters&nbsp;

that you have the causal explanation.&nbsp; Primarily because of this being able to&nbsp; tell if things had been different. Like,&nbsp;&nbsp; if you have an input where this doesn’t&nbsp; happen, then you should be scared.&nbsp;

Even if the output is the same. Yeah. Or if the output or if it’s&nbsp;&nbsp; too expensive to check in this case. And to be&nbsp; clear, when we talk about formalizing, what is a&nbsp;&nbsp; good explanation? I think there is a little bit&nbsp;

of work that pushes on this and it mostly takes&nbsp;&nbsp; this causal approach of saying, well, what should&nbsp; an explanation do? It should not only predict the&nbsp;&nbsp; output, it should predict how the output changes&nbsp; in response to changes in the internals. So that’s&nbsp;&nbsp;

the most common approach to formalizing. What&nbsp; is a good explanation? And even when people are&nbsp;&nbsp; doing informal interpretability I think if you’re&nbsp; publishing in an ML conference and you want to say&nbsp;&nbsp; this is a good explanation, the way you would&nbsp;

verify that would even if not like a formal set&nbsp;&nbsp; of causal intervention experiments. It would be&nbsp; some kind of ablation where then we messed with&nbsp;&nbsp; the inside of the model and it had the effect&nbsp; which we would expect based on our explanation.&nbsp;

Anyways, back to the problems&nbsp; of mechanistic interpretability.&nbsp; Yeah, I guess this is relevant in the sense that&nbsp; I think a basic difficulty is you don’t really&nbsp;&nbsp; understand the objective of what you’re doing,&nbsp;

which is like a little bit hard institutionally&nbsp;&nbsp; or scientifically. It’s just rough. It’s easier to&nbsp; do science when the goal of the game is to predict&nbsp;&nbsp; something and you know what you’re predicting&nbsp; than when the goal of the game is to understand&nbsp;&nbsp;

in some undefined sense. I think it’s particularly&nbsp; relevant here just because the informal standard&nbsp;&nbsp; we use involves humans being able to make sense of&nbsp; what’s going on. And there’s some question about&nbsp;&nbsp; scalability of that. Will humans recognize&nbsp;

the concepts that models are using? Yeah,&nbsp;&nbsp; I think as you try and automate it, it becomes&nbsp; increasingly concerning if you’re on slightly&nbsp;&nbsp; shaky ground about what exactly you’re doing&nbsp; or what exactly the standard for success is. So&nbsp;&nbsp;

there’s like a number of reasons as you work with&nbsp; really large models, it becomes just increasingly&nbsp;&nbsp; desirable to have a really robust sense of what&nbsp; you’re doing. But I do think it would be better&nbsp;&nbsp; even for small models to have a clearer sense.

The point you made about as you automate&nbsp;&nbsp; it is it because whatever work the&nbsp; automated alignment researcher is doing,&nbsp;&nbsp; you want to make sure you can verify it. I think it’s most of all a way you can&nbsp;&nbsp;

automate. I think how you would automate&nbsp; interpretability if you wanted to right&nbsp;&nbsp; now is you take the process humans use it’s like&nbsp; great, we’re going to take that human process,&nbsp;&nbsp; train ML systems to do the pieces that humans do&nbsp;

of that process and then just do a lot more of&nbsp;&nbsp; it. So I think that is great as long as your&nbsp; test decomposes into human sized pieces. And&nbsp;&nbsp; there’s just this fundamental question about&nbsp; large models which is like, do they decompose&nbsp;&nbsp;

in some way into human sized pieces or is it just&nbsp; a really messy mess with interfaces that aren’t&nbsp;&nbsp; nice? And the more it’s the latter type, the&nbsp; harder it is to break it down to these pieces,&nbsp;&nbsp; which you can automate by copying what a human&nbsp;

would do. And the more you need to say, okay, we&nbsp;&nbsp; need some approach which scales more structurally.&nbsp; But I think compared to most people, I am less&nbsp;&nbsp; worried about automating interpretability. I think&nbsp; if you have a thing which works that’s incredibly&nbsp;&nbsp;

labor intensive, I’m fairly optimistic&nbsp; about our ability to automate it. Again,&nbsp;&nbsp; the stuff we’re doing, I think, is quite helpful&nbsp; in some worlds. But I do think the typical case&nbsp;&nbsp; like interpretability can add a lot of value.

Without this, it makes sense what an explanation&nbsp;&nbsp; would mean in language like, this model is&nbsp; doing this because of whatever essay length&nbsp;&nbsp; thing. But you have trillions of parameters&nbsp; and you have all these uncountable number of&nbsp;&nbsp;

operations. What does an explanation&nbsp; of why an output happened even mean?&nbsp; Yeah, so to be clear, an explanation&nbsp; of why a particular output happened,&nbsp;&nbsp; I think, is just you ran the model, so we’re&nbsp;

not expecting a smaller explanation for that.&nbsp; Right. So the explanations overall for these&nbsp;&nbsp; behaviors, we expect to be of similar size to the&nbsp; model itself, like, maybe somewhat larger. And I&nbsp;&nbsp;

think the type signature, if you want to have a&nbsp; clear mental picture, the best picture is probably&nbsp;&nbsp; thinking about a proof or imagining a proof that&nbsp; a model has this behavior. So you could imagine&nbsp;&nbsp; proving that GPT 4 does this induction behavior,&nbsp;

and that proof would be a big thing. It would&nbsp;&nbsp; be much larger than the weights of the model.&nbsp; Sort of our goal to get down from much larger&nbsp;&nbsp; to just the same size. And it would potentially&nbsp; be incomprehensible to a human. Right. Just say,&nbsp;&nbsp;

like, here’s a direction activation space,&nbsp; and here’s how it relates to this direction&nbsp;&nbsp; activation space. And so just pointing out&nbsp; a bunch of stuff like that. Here’s these&nbsp;&nbsp; various features constructed from activations,&nbsp;

potentially even nonlinear functions. Here’s how&nbsp;&nbsp; they relate to each other, and here’s how if you&nbsp; look at what the computation the model is doing,&nbsp;&nbsp; you can just sort of inductively trace through&nbsp; and confirm that the output has such and such&nbsp;&nbsp;

correlation. So that’s the dream. Yeah. I&nbsp; think the mental reference would be like,&nbsp;&nbsp; I don’t really like proofs because I think&nbsp; there’s such a huge gap between what you can&nbsp;&nbsp; prove and how you would analyze a neural net. But&nbsp;

I do think it’s probably the best mental picture,&nbsp;&nbsp; if you’re like, what is an explanation? Even if&nbsp; a human doesn’t understand it? We would regard a&nbsp;&nbsp; proof as a good explanation. And our concern about&nbsp; proofs is primarily that it’s just you can’t prove&nbsp;&nbsp;

properties of neural nets. We suspect, although&nbsp; it’s not completely obvious, I think it’s pretty&nbsp;&nbsp; clear. You can’t prove fact, spellers neural nets. You’ve detected all the reasons things happen in&nbsp;&nbsp; training. And then if something happens for&nbsp;

a reason you don’t expect in deployment,&nbsp;&nbsp; then you have an alarm and you’re like, let’s make&nbsp; sure this is not because you want to make sure&nbsp;&nbsp; that it hasn’t decided to take over or something,&nbsp; but the thing is, on every single different input,&nbsp;&nbsp;

it’s going to have different activations. So&nbsp; there’s always going to be a difference unless&nbsp;&nbsp; you run the exact same input. How do you detect&nbsp; whether this is just a different input versus&nbsp;&nbsp; an entirely different circuit that might be&nbsp;

potentially deceptive has been activated?&nbsp; Yeah, I mean, to be clear, I think you probably&nbsp; wouldn’t be looking at a separate circuit,&nbsp;&nbsp; which is part of why it’s hard. You’d be looking&nbsp; at like, the model is always doing the same thing&nbsp;&nbsp;

on every input. It’s always whatever it’s doing,&nbsp; it’s a single computation. So it’d be all the&nbsp;&nbsp; same circuits interacting in a surprising way. But&nbsp; yeah, this is just to emphasize your question even&nbsp;&nbsp; more. I think the easiest way to start is to just&nbsp;

consider the IID case. So where you’re considering&nbsp;&nbsp; a bunch of samples, there’s no change in&nbsp; distribution. You just have a training set of like&nbsp;&nbsp; a trillion examples and then a new example from&nbsp; the same distribution. So in that case, it’s still&nbsp;&nbsp;

the case. Every activation is different, but this&nbsp; is actually a very, very easy case to handle. So&nbsp;&nbsp; if you think about an explanation that generalizes&nbsp; across, like if you have a trillion data points&nbsp;&nbsp; and an explanation which is actually able to&nbsp;

compress the trillion data points down to like,&nbsp;&nbsp; actually, it’s kind of a lot of compression. If&nbsp; you think about if you have a trillion parameter&nbsp;&nbsp; model and a trillion data points, we would like&nbsp; to find a trillion parameter explanation in some&nbsp;&nbsp;

sense. So it’s actually quite compressed and&nbsp; sort of just in virtue of being so compressed,&nbsp;&nbsp; we expect it to automatically work essentially&nbsp; for new data points from the same distribution.&nbsp;&nbsp; If every data point from the distribution was a&nbsp;

whole new thing happening for different reasons,&nbsp;&nbsp; you actually couldn’t have any concise explanation&nbsp; for the distribution. So this first problem,&nbsp;&nbsp; just like it’s a whole different set of&nbsp; activations, I think you’re actually kind of okay,&nbsp;&nbsp;

and then the thing that becomes more messy is like&nbsp; but the real world will not only be new samples of&nbsp;&nbsp; different activations, they will also be different&nbsp; in important ways. Like the whole concern was&nbsp;&nbsp; there’s these distributional shifts or like,&nbsp;

not the whole concern, but most of the concern,&nbsp;&nbsp; maybe the point of having these explanations.&nbsp; I think every input is an anomaly in some ways,&nbsp;&nbsp; which is kind of the difficulty is if you have&nbsp; a weak notion of anomaly, any distribution&nbsp;&nbsp;

shift can be flagged as an anomaly. And it’s like&nbsp; constantly getting anomalies. And so the hope of&nbsp;&nbsp; having such an explanation is to be able to say,&nbsp; like, here were the features that were relevant&nbsp;&nbsp; for this explanation or for this behavior. And a&nbsp;

much smaller class of things are anomalies with&nbsp;&nbsp; respect to this explanation. Like, most anomalies&nbsp; wouldn’t change this. Like most ways you change&nbsp;&nbsp; your distribution won’t affect the validity of&nbsp; this explanation. For example, this explanation&nbsp;&nbsp;

is saying models will tend to activate in the&nbsp; following direction. You don’t care about anything&nbsp;&nbsp; that’s happening orthogonals that direction.&nbsp; You’re just like are they not activating? You’re&nbsp;&nbsp; sort of just looking at this one direction&nbsp;

and being like did this one direction change&nbsp;&nbsp; a lot? Yeah. So the idea is once you have this&nbsp; explanation at hand, a much, much smaller class of&nbsp;&nbsp; things look anomalous in a way that’s relevant to&nbsp; the explanation. And if you’ve done a really good&nbsp;&nbsp;

job, the story is like if there’s a new input&nbsp; where you expect the property to still hold,&nbsp;&nbsp; that will be because you expect the explanation&nbsp; to still hold. Like the explanation generalizes as&nbsp;&nbsp; well as the behavior itself that it’s explaining.&nbsp;

It’s kind of what you would like roughly.&nbsp; Okay, so what happens if even in training it&nbsp; is deceptive and it has basically its internal&nbsp;&nbsp; monologue is I will only rebel or I will only&nbsp; do something that looks bad if I can prove&nbsp;&nbsp;

that I am in the real world and deployed. And&nbsp; presumably since it’s trained on all WebText,&nbsp;&nbsp; it knows what real world means, right? It’s not in&nbsp; control of factories and robot armies or whatever.&nbsp;&nbsp; So in that case, even in training it will have&nbsp;

those activations for being fucked up on because&nbsp;&nbsp; in the back of its mind it’s thinking I will take&nbsp; over once I have the opportunity. So you wouldn’t&nbsp;&nbsp; detect anything anomalous once it is deployed&nbsp; and is still thinking those treacherous thoughts,&nbsp;&nbsp;

do you just think this is not a likely&nbsp; scenario or would you able to catch this?&nbsp; I think that’s sort of the typical case you&nbsp; would like to detect. Yeah. So the story would&nbsp;&nbsp; be something like you want to explain on the&nbsp;

training distribution why the model never stabs&nbsp;&nbsp; anyone and you’re like, what’s my explanation on&nbsp; the training distribution? It’s actually going&nbsp;&nbsp; to have to go through that model. Supposing the&nbsp; only reason it doesn’t stab people is it’s like,&nbsp;&nbsp;

well, I know that I’m being watched and I can’t&nbsp; stab people unless I’m really not being watched.&nbsp;&nbsp; Then your explanation for why does it never stab&nbsp; people is like oh look, it won’t be edited, it&nbsp;&nbsp; won’t annotated with English because it’s just&nbsp;

some giant basket of numbers. But it’s tracking&nbsp;&nbsp; along with the inner monologue and saying like&nbsp; well, it thinks to itself, am I being watched? And&nbsp;&nbsp; in fact it normally concludes it is being watched&nbsp; on the training distribution, right? You have&nbsp;&nbsp;

this whole distribution and so the explanation is&nbsp; saying it knows it’s being watched and therefore&nbsp;&nbsp; it decides not stab anyone. So ideally that’s&nbsp; what the explanation does. Again, not annotated&nbsp;&nbsp; English but just like a giant bag of numbers&nbsp;

it’s effectively talking about that process.&nbsp;&nbsp; So then when you have a new input on which the&nbsp; model says am I on train distribution? Like no,&nbsp;&nbsp; I’m not being watched. Then if you compare that&nbsp; against the explanation, the explanation said,&nbsp;&nbsp;

like, hey, the reason it doesn’t stab anyone is&nbsp; because it just constantly thinks that it’s being&nbsp;&nbsp; trained. Like, this thing is always this nonlinear&nbsp; feature. The representation of am I being trained?&nbsp;&nbsp; Is constantly saying, yes, that’s the explanation&nbsp;

for why it never stabs people on the train&nbsp;&nbsp; distribution. And then on this test time, when&nbsp; you run it on the new input, it’s like, does I&nbsp;&nbsp; think I’m on the train distribution. It says,&nbsp; no. You compare that against your explanation,&nbsp;&nbsp;

actually, the explanation breaks down completely.&nbsp; Now, the explanation said it was precisely because&nbsp;&nbsp; it thought it was being trained, that it doesn’t&nbsp; do anything really dangerous or doesn’t stab&nbsp;&nbsp; anyone. And so once we see that single variable&nbsp;

switch, we know that this is not just anomaly,&nbsp;&nbsp; this is like, the anomaly that matters or is like,&nbsp; anomaly that is very relevant to the explanation.&nbsp; So this would require it to have this what&nbsp; is that cone that dogs have? But basically&nbsp;&nbsp;

it would require this to have that MRI on it all&nbsp; the time. When it’s deployed on every single call,&nbsp;&nbsp; you need to be running this loop of&nbsp; like, is this explanation still holding?&nbsp; Yeah. For this story of flagging anomaly, you&nbsp;

have to actually check at a sufficiently high&nbsp;&nbsp; frequency. So you can imagine checking all the&nbsp; time, or you could imagine saying, like, hey,&nbsp;&nbsp; actually, you need a lot of AI systems cooperating&nbsp; to not blow the whistle on each other or whatever.&nbsp;&nbsp;

E g. You might have checked, like, hey, in&nbsp; training, every time something suspicious happens,&nbsp;&nbsp; the model flags it. Why does that happen? You&nbsp; have your explanation. You look at a new case,&nbsp;&nbsp; you could say, is it not flagging it for the&nbsp;

normal reason, or is it a weird reason? So you&nbsp;&nbsp; could hope that even if a small fraction, even&nbsp; if you’re running a small fraction of cases,&nbsp;&nbsp; if something bad is happening at scale, you can&nbsp; detect that. If you imagine, like, one in every&nbsp;&nbsp;

thousand decisions, you check if there’s, like,&nbsp; a robot rebellion going on or whatever, you get&nbsp;&nbsp; to look in on one in every thousand decisions.&nbsp; You see that something is really weird with that&nbsp;&nbsp; decision. And even if you didn’t check many of&nbsp;

them, you’re like, okay, we need to back off.&nbsp; What happens if the AI, I mean, WebText, that&nbsp; includes your papers or maybe just, like, deduces&nbsp;&nbsp; the first principle that this is an alignment&nbsp; technique one might try, and then it says, okay,&nbsp;&nbsp;

well, I’m going to engineer my activations. In a&nbsp; way, I’m trying to imagine how we might do this,&nbsp;&nbsp; but basically, even in deployment, I’m going to&nbsp; make my thought process so subtle that it doesn’t&nbsp;&nbsp; raise any alarms. Is that a possibility?

Yeah. So I think the hope is to basically&nbsp;&nbsp; be robust or like, you know, when we’re doing&nbsp; theoretical research, we are in a kind of worst&nbsp;&nbsp; Casey regime. So.&nbsp;

We are normally imagining that everything&nbsp; conspires insofar as it can. So insofar as&nbsp;&nbsp; could a brain be like doing some crazy thing where&nbsp; it tries to structure itself to look weird? That’s&nbsp;&nbsp; totally in scope for ruling something out. And&nbsp;

I guess the hope there is it’s actually not that&nbsp;&nbsp; easy to tell a story. Like if you’re like why did&nbsp; you not stab people on training time? Why are you&nbsp;&nbsp; not stabbing? Is that applying now? It’s kind of a&nbsp; mind doesn’t get to arbitrarily change the actual&nbsp;&nbsp;

reasons. It does something. Like there was some&nbsp; earlier step, maybe you could think of it as like&nbsp;&nbsp; at the first step where it’s like now I’m going&nbsp; to try and do the sneaky thing to make my thoughts&nbsp;&nbsp; look this way. The actual explanation, like the&nbsp;

actual causal explanation for the behavior is&nbsp;&nbsp; like there if you tried to give this reason it&nbsp; would have to maybe we should talk about the&nbsp;&nbsp; example in more detail to try and imagine how a&nbsp; brain would try and do this or how a mind would&nbsp;&nbsp;

try and do this. But I think it is like the. Let’S say it has this plan. So in training&nbsp;&nbsp; it keeps the part of it activates. A part of the. Problem is if it ever does a check that’s like am&nbsp;&nbsp; I in training or not, then your explanation for&nbsp;

the behavior is going to have to factor through&nbsp;&nbsp; that check. And so if you ever do the check,&nbsp; the check becomes like an essential part of&nbsp;&nbsp; the explanation and then when the check fails,&nbsp; your explanation breaks down. So you’ve already&nbsp;&nbsp;

lost the game if you did such a check. Is there a way it could make it seem&nbsp;&nbsp; like because if on every different input&nbsp; it has different activations, then can it&nbsp;&nbsp; make it seem like the different activations&nbsp;

were a result of just a different input and&nbsp;&nbsp; not because some internal check went off? Yeah, again, the hope is it needs to not&nbsp;&nbsp; only have them be like random different&nbsp; inputs, it needs to produce inputs with&nbsp;&nbsp;

certain properties. Like it needs to deliberately&nbsp; create inputs that have this effect in the world,&nbsp;&nbsp; this intended effect in the world. So it basically creates a jailbreak&nbsp;&nbsp; for itself in some sense.

Yeah. Again the question is&nbsp;&nbsp; like it has to at test time be somehow producing&nbsp; activations that have the takeover effect and at&nbsp;&nbsp; training time be producing activations that&nbsp; don’t look that takeovery or whatever. And&nbsp;&nbsp;

so somehow there was a difference between&nbsp; those. It has to actually really do the&nbsp;&nbsp; work of creating that difference somewhere. Can you make more concrete for us what an&nbsp;&nbsp; explanation would look like physically? What&nbsp;

does the explanation look like? Is it just a&nbsp;&nbsp; whole bunch of numbers itself? Is it a language?&nbsp; Is it code? What does the explanation look like?&nbsp; Yeah, I also want to maybe step back a tiny bit&nbsp; and clarify that. I think this project is kind&nbsp;&nbsp;

of crazily ambitious and the main reason, the&nbsp; overwhelming reason I think you should expect&nbsp;&nbsp; it to break down or fail is just because we have&nbsp; all these desires we have all the things we want&nbsp;&nbsp; out of this notion of explanation. But that’s&nbsp;

an incredibly hard research project which has&nbsp;&nbsp; a reasonable chance of being impossible. So&nbsp; I’m happy to talk about what the implications&nbsp;&nbsp; are but I want to flag but condition on&nbsp; failing I think it’s most likely because,&nbsp;&nbsp;

just like the things we wanted were either&nbsp; incoherent or intractably difficult.&nbsp; But what are the ODS you think you’ll succeed? I mean, it depends a little bit what you mean&nbsp;&nbsp; by succeed. But if you, say, get explanations&nbsp;

that are great and accurately reflect reality&nbsp;&nbsp; and work for all of these applications that we’re&nbsp; imagining or that we are optimistic about, like&nbsp;&nbsp; kind of the best case success, I don’t know, like&nbsp; 1020 percent something. And then there’s like a&nbsp;&nbsp;

higher probability of various intermediate results&nbsp; that provide value or insight without being, like,&nbsp;&nbsp; the whole dream. But I think the probability&nbsp; of succeeding in the sense of realizing the&nbsp;&nbsp; whole dream is quite low. Yeah in terms of what&nbsp;

explanations look like physically or like the most&nbsp;&nbsp; ambitious plan, the most optimistic plan is that&nbsp; you are searching for explanations in parallel&nbsp;&nbsp; with searching for neural networks. So you have&nbsp; a parameterization of your space of explanations&nbsp;&nbsp;

which mirrors the parameterization of your space&nbsp; of neural networks. Or you should think of as kind&nbsp;&nbsp; of similar to what is a neural network? It’s some&nbsp; simple architecture where you fill in a trillion&nbsp;&nbsp; numbers and that specifies how it behaves. So&nbsp;

to you should expect an explanation to be like&nbsp;&nbsp; a pretty flexible general skeleton that’s saying&nbsp; pretty flexible general skeleton which just has a&nbsp;&nbsp; bunch of numbers you fill in. And what you are&nbsp; doing to produce an explanation is primarily&nbsp;&nbsp;

just filling in these floating point numbers. When we conventionally think of explanations if&nbsp;&nbsp; you think of the explanation for why the universe&nbsp; moves this way it wouldn’t be something that you&nbsp;&nbsp; could discover on some smooth evolutionary surface&nbsp;

where you can climb up the hill towards the laws&nbsp;&nbsp; of physics. These are the laws of physics.&nbsp; You kind of just derive them from reverse&nbsp;&nbsp; principles. But in this case it’s not like just&nbsp; a bunch of correlations between the orbits of&nbsp;&nbsp;

different planets or something. Maybe the word&nbsp; explanation has a different I didn’t even ask&nbsp;&nbsp; the question but maybe you can just speak to that. Yeah, I think I basically Sympathize. This is like&nbsp;&nbsp; there’s some intuitive objections like, look, the&nbsp;

space of explanations is this rigid, logical a lot&nbsp;&nbsp; of explanations have this rigid, logical structure&nbsp; where they’re really precise and simple things&nbsp;&nbsp; govern complicated systems and nearby simple&nbsp; things just don’t work, and so on. And a bunch&nbsp;&nbsp;

of things which feel totally different from this&nbsp; kind of nice, continuously parameterized space.&nbsp;&nbsp; And you can imagine interpretability on simple&nbsp; models where you’re just like by gradient descent,&nbsp;&nbsp; finding feature directions that have desirable&nbsp;

properties. But then when you imagine like,&nbsp;&nbsp; hey, now, that’s like a human brain you’re dealing&nbsp; with, that’s like thinking logically about things.&nbsp;&nbsp; The explanation of why that works isn’t going to&nbsp; be just like here with some featured directions.&nbsp;&nbsp;

That’s how I understood the basic confusion,&nbsp; which I share or sympathize with at least. So&nbsp;&nbsp; I think the most important high level point is&nbsp; I think basically the same objection applies&nbsp;&nbsp; to being like, how is GPT 4 going to learn to&nbsp;

reason logically about something? You’re like,&nbsp;&nbsp; well, look, logical reasoning that’s like it’s got&nbsp; rigid structure, it’s doing ands and ors when it’s&nbsp;&nbsp; called for, even though it just somehow optimized&nbsp; over this continuous space. And the difficulty&nbsp;&nbsp;

or the hope is that the difficulty of these two&nbsp; problems are kind of like matched. So that is it’s&nbsp;&nbsp; very hard to find these logicalish explanations&nbsp; because it’s not a space that’s easy to search&nbsp;&nbsp; over. But there are ways to do it. There’s ways to&nbsp;

embed discrete, complicated, rigid things in these&nbsp;&nbsp; nice, squishy continuous spaces that you search&nbsp; over. And in fact, to the extent that neural nets&nbsp;&nbsp; are able to learn the rigid logical stuff at&nbsp; all, they learn it in the same way. That is,&nbsp;&nbsp;

maybe they’re hideously inefficient, or maybe it’s&nbsp; possible to embed this discrete reasoning in the&nbsp;&nbsp; space in a way that’s not too inefficient, but&nbsp; you really want the two search problems to be of&nbsp;&nbsp; similar difficulty. And that’s like the key hope&nbsp;

overall. I mean, this is always going to be the&nbsp;&nbsp; key hope. The question is, is it easier to learn&nbsp; a neural network or to find the explanation for&nbsp;&nbsp; why the neural network works? I think people have&nbsp; the strong intuition that it’s easier to find the&nbsp;&nbsp;

neural network than the explanation of why it&nbsp; works. And that is really the I think we or at&nbsp;&nbsp; least exploring the hypothesis or interested&nbsp; in hypothesis that maybe those problems are&nbsp;&nbsp; actually more matched in difficulty.

And why might that be the case?&nbsp; This is pretty conjectural and complicated to&nbsp; express some intuitions. Maybe one thing is, I&nbsp;&nbsp; think a lot of this intuition does come from cases&nbsp; like machine learning. So if you ask about writing&nbsp;&nbsp;

code and you’re like, how hard is it to find code&nbsp; versus find the explanation the code is correct.&nbsp;&nbsp; In those cases, there’s actually just like, not&nbsp; that much of a gap. Like the way a human writes&nbsp;&nbsp; a code is basically the same difficulty as find&nbsp;

the explanation for why it’s correct. In the case&nbsp;&nbsp; of ML, I think we just mostly don’t have empirical&nbsp; evidence about how hard it is to find explanations&nbsp;&nbsp; of this particular type about why models work.&nbsp; We have a sense that it’s really hard, but&nbsp;&nbsp;

that’s because we have this incredible mismatch&nbsp; where gradient descent is spending an incredible&nbsp;&nbsp; amount of compute searching for a model. And then&nbsp; some human is like looking at activate, looking&nbsp;&nbsp; at neurons or even some neural net is looking at&nbsp;

neurons just like you have an incredible basically&nbsp;&nbsp; because you cannot define what an explanation is.&nbsp; You’re not applying gradient descent to the search&nbsp;&nbsp; for explanations. So I think the MLK just actually&nbsp; shouldn’t make you feel that pessimistic about the&nbsp;&nbsp;

difficulty of finding explanations. The reason&nbsp; it’s difficult right now is precisely because&nbsp;&nbsp; you don’t have any kind of you’re not doing an&nbsp; analogous search process to find this explanation&nbsp;&nbsp; as you do to find the model. That’s just like a&nbsp;

first part of the intuition. Like when humans are&nbsp;&nbsp; actually doing design. I think there’s not such&nbsp; a huge gap when in the ML case I think there is a&nbsp;&nbsp; huge gap. But I think largely for other reasons.&nbsp; A thing I also want to stress is that we just&nbsp;&nbsp;

are open to there being a lot of facts that don’t&nbsp; have particularly compact explanations. So another&nbsp;&nbsp; thing is when we think of finding an explanation&nbsp; in some sense we’re setting our sites really low&nbsp;&nbsp; here. So if a human designed a random widget and&nbsp;

was like, this widget appears to work well or if&nbsp;&nbsp; you search for a configuration that happens to fit&nbsp; into this spot really well it’s like a shape that&nbsp;&nbsp; happens to mesh with another shape. You might&nbsp; be like, what’s the explanation for why those&nbsp;&nbsp;

things mesh? And we’re very open to just being&nbsp; like that doesn’t need an explanation. You just&nbsp;&nbsp; compute. You check that the shapes mesh and you&nbsp; did a billion operations and you check this thing&nbsp;&nbsp; worked. Or you’re like, Why do these proteins?&nbsp;

You’re like, it’s just because these shape like,&nbsp;&nbsp; this is a low energy configuration. And we’re very&nbsp; open to in some cases, there’s not very much more&nbsp;&nbsp; to say. So we’re only trying to explain cases&nbsp; where kind of the surprise intuitively is very&nbsp;&nbsp;

large. So, for example, if you have a neural net&nbsp; that gets a problem correct a neural net with a&nbsp;&nbsp; billion parameters that gets a problem correct&nbsp; on every input of length 1000 in some sense,&nbsp;&nbsp; there has to be something that needs explanation&nbsp;

there because there’s, like, too many inputs for&nbsp;&nbsp; that to happen by chance alone. Whereas if you&nbsp; have a neural net that gets something right on&nbsp;&nbsp; average or gets something right in merely a&nbsp; billion cases, that actually can just happen&nbsp;&nbsp;

by coincidence. GPT 4 can get billions of things&nbsp; right by coincidence because it just has so many&nbsp;&nbsp; parameters that are adjusted to fit the data. So a neural net that is initialized completely&nbsp;&nbsp; randomly the explanation for that&nbsp;

would just be the neural net itself.&nbsp; Well, it would depend on what behaviors it had. So&nbsp; we’re always, like, talking about an explanation&nbsp;&nbsp; of some behavior from a model, right? And so it just has a whole bunch&nbsp;&nbsp;

of random behaviors. So it’ll just be&nbsp; like an exponentially large explanation&nbsp;&nbsp; relative to the weights of the model. Yeah, I think there just aren’t that&nbsp;&nbsp; many behaviors that demand explanation. Like&nbsp;

most things a random neural net does are kind&nbsp;&nbsp; of what you’d expect from, like, a random if&nbsp; you treat it just like a random function, then&nbsp;&nbsp; there’s nothing to be explained. There are some&nbsp; behaviors that demand explanation. But anyway,&nbsp;&nbsp;

random neural net is pretty uninteresting.&nbsp; That’s part of the hope is it’s kind of easy&nbsp;&nbsp; to explain features of the random neural net. Okay, so that’s interesting. So the smarter&nbsp;&nbsp; or more ordered the neural network is,&nbsp;

the more compressed the explanation.&nbsp; Well, it’s more like the more interesting the&nbsp; behaviors to be explained. So the random neural&nbsp;&nbsp; net just doesn’t have very many interesting&nbsp; behaviors that demand explanation. And as you&nbsp;&nbsp;

get smarter, you start having behaviors that are&nbsp; like, you start having some correlation with the&nbsp;&nbsp; simple thing and then that demands explanation. Or&nbsp; you start having some regularity in your outputs,&nbsp;&nbsp; and that demands explanation. So these properties&nbsp;

kind of emerge gradually over the course of&nbsp;&nbsp; training that demand explanation. I also, again,&nbsp; want to emphasize here that when we’re talking&nbsp;&nbsp; about searching for explanations, this is some&nbsp; dream. We talk to ourselves. Like, why would&nbsp;&nbsp;

this be really great if we succeeded? We have no&nbsp; idea about the empirics on any of this. So these&nbsp;&nbsp; are all just words that we think to ourselves&nbsp; and sometimes talk about to understand. Would&nbsp;&nbsp; it be useful to find a notion of explanation?&nbsp;

And what properties would we like this notion&nbsp;&nbsp; of explanation to have? But this is really like,&nbsp; speculation and being out on a limb almost all of&nbsp;&nbsp; our time, day to day is just thinking about cases&nbsp; much, much simpler even than small neural nets or&nbsp;&nbsp;

thinking about very simple cases and saying, what&nbsp; is the correct notion? What is the right heuristic&nbsp;&nbsp; estimate in this case? Or how do you reconcile&nbsp; these two apparently conflicting explanations?&nbsp; Is there a hope that if you have a different&nbsp;

way to make proofs now that you can actually&nbsp;&nbsp; have heuristic arguments where instead of having&nbsp; to prove the Riemann hypothesis or something you&nbsp;&nbsp; can come up with a probability of it in a&nbsp; way that is compelling and you can publish?&nbsp;&nbsp;

So would it just be a new way to do mathematics? A&nbsp; completely new way to prove things in mathematics?&nbsp; I think most claims in mathematics that&nbsp; mathematicians believe to be true already&nbsp;&nbsp; have fairly compelling heuristic arguments&nbsp;

like the Riemann hypothesis. It’s actually&nbsp;&nbsp; just there’s kind of a very simple argument that&nbsp; the Riemann hypothesis should be true unless&nbsp;&nbsp; something surprising happens. And so a lot of math&nbsp; is about saying, like, okay, we did a little bit&nbsp;&nbsp;

of work to find the first pass explanation of why&nbsp; this thing should be true. And then, for example,&nbsp;&nbsp; in the case of the Riemann hypothesis, the&nbsp; question is, do you have this weird periodic&nbsp;&nbsp; structure in the primes? And you’re like, well,&nbsp;

look, if the primes were kind of random you&nbsp;&nbsp; obviously wouldn’t have any structure like that.&nbsp; Just how would that happen? And then you’re like,&nbsp;&nbsp; well, maybe there’s something and then the&nbsp; whole activity is about searching for can&nbsp;&nbsp;

we rule out anything? Can we rule out any kind&nbsp; of conspiracy that would break this result? So&nbsp;&nbsp; I think the mathematicians just wouldn’t be very&nbsp; surprised or wouldn’t care that much. And this is&nbsp;&nbsp; related to the motivation for the project. I think&nbsp;

just in a lot of domains, in a particular domain,&nbsp;&nbsp; people already have norms of reasoning that&nbsp; work pretty well and match roughly how we&nbsp;&nbsp; think these heuristic arguments should work. But it would be good to have more concrete sense,&nbsp;&nbsp;

like if you could say instead of, well, we&nbsp; think RSA is fine, to being able to say,&nbsp;&nbsp; here’s the probability that RSA is fine. Yeah. My guess is these will not. Like, the&nbsp;&nbsp; estimates you get out of this would be much, much&nbsp;

worse than the estimates you’d get out of just&nbsp;&nbsp; normal empirical or scientific reasoning where&nbsp; you’re using a reference class and saying, how&nbsp;&nbsp; often do people find algorithms for hard? Like,&nbsp; I think what this argument will give you for is&nbsp;&nbsp;

RSA fine? Is going to be like, well, RSA is fine.&nbsp; Unless it isn’t. Unless there’s some additional&nbsp;&nbsp; structure in the problem that an algorithm can&nbsp; exploit, then there’s no algorithm. But very&nbsp;&nbsp; often the way these arguments work, so for neural&nbsp;

nets as well, is you say, like, look, here’s an&nbsp;&nbsp; estimate about the behavior, and that estimate&nbsp; is right unless there’s another consideration&nbsp;&nbsp; we’ve missed. And the thing that makes them&nbsp; so much easier than proofs is just say, like,&nbsp;&nbsp;

here’s a best guess, given what we’ve noticed so&nbsp; far, but that best guess can be easily upset by&nbsp;&nbsp; new information. And that’s both what makes them&nbsp; easier than proofs, but also what means they’re&nbsp;&nbsp; just, like, way less useful than proofs for most&nbsp;

cases. I think neural nets are kind of unusual&nbsp;&nbsp; in being a domain where we really do want to do&nbsp; systematic, formal reasoning, even though we’re&nbsp;&nbsp; not trying to get a lot of confidence, we’re just&nbsp; trying to understand even roughly what’s going on.&nbsp;

But the reason this works for alignment but isn’t&nbsp; that interesting for the Riemann hypothesis, where&nbsp;&nbsp; if in the RSA case, you say, well, the RSA is fine&nbsp; unless the estimate is wrong, it’s like, well,&nbsp;&nbsp; okay, well, it would tell us something new. But&nbsp;

in the alignment case, if the estimate is, this&nbsp;&nbsp; is what the output should be, unless there’s some&nbsp; behavior I don’t understand, you want to know?&nbsp;&nbsp; In the case, unless there’s some behavior you&nbsp; don’t understand that’s not like, oh, whatever.&nbsp;&nbsp;

That’s the case in which it’s not aligned. Yeah, I mean, maybe one way of putting it is&nbsp;&nbsp; just like, we can wait until we see this input, or&nbsp; like, you can wait until you see a weird input and&nbsp;&nbsp; say, okay, weird input, do something we didn’t&nbsp;

understand. And for our say, that would just be&nbsp;&nbsp; a trivial test. You’re just like, in some cases&nbsp; algorithms would be like is it a thing? Whereas&nbsp;&nbsp; for neural net in some cases it is either very&nbsp; expensive to tell or it’s like you actually don’t&nbsp;&nbsp;

have any other way to tell. Like you checked in&nbsp; easy cases and now you’re on a hard case so you&nbsp;&nbsp; don’t have a way to tell if something has gone&nbsp; wrong. Also, I would clarify that I think it is&nbsp;&nbsp; interesting for the Riemann hypothesis I would say&nbsp;

the current state, particularly in number theory,&nbsp;&nbsp; but maybe in quite a lot of math, is like there&nbsp; are informal heuristic arguments for pretty much&nbsp;&nbsp; all the open questions people work on but those&nbsp; arguments are completely informal. So that is&nbsp;&nbsp;

like I think it’s not the case that there’s&nbsp; like here’s the norms of informal reasoning&nbsp;&nbsp; or the norms of heuristic reasoning and then we&nbsp; have arguments that a heuristic argument verifier&nbsp;&nbsp; could accept. It’s just like people wrote some&nbsp;

words. I think those words like my guess would&nbsp;&nbsp; be like 90 of the things mathematicians accept&nbsp; as really compelling filling heuristic arguments&nbsp;&nbsp; are correct and if you actually formalize them&nbsp; you’d be like some of these aren’t quite right,&nbsp;&nbsp;

or here’s some corrections or here’s which&nbsp; of two conflicting arguments is right? I&nbsp;&nbsp; think there’s something to be learned from it.&nbsp; I don’t think it would be like mind blowing. No.&nbsp; When you have it completed, how big would this&nbsp;

heuristic estimator the rules for this heuristic&nbsp;&nbsp; estimator mean, I know like when Russell and who&nbsp; was the other guy when they did the rules? Yeah,&nbsp;&nbsp; wasn’t it like literally they had like a&nbsp; bucket or a wheelbarrow with all the papers.&nbsp;

But how big would I mean, mathematical foundations&nbsp; are quite simple in the end. At the end of the&nbsp;&nbsp; day it’s like how many symbols? I don’t know,&nbsp; it’s hundreds of symbols or something that go&nbsp;&nbsp; into the entire foundations and the entire&nbsp;

rules of reasoning for like there’s a sort&nbsp;&nbsp; of built on top of first order logic but the&nbsp; rules of reasoning for first order logic are&nbsp;&nbsp; just like another hundreds of symbols or 100&nbsp; lines of code or whatever. I’d say I have no&nbsp;&nbsp;

idea. We are certainly aiming at things that&nbsp; are just not that complicated and my guess is&nbsp;&nbsp; that the algorithms we’re looking for are not that&nbsp; complicated. Most of the complexity is pushed into&nbsp;&nbsp; arguments not in this verifier or estimator.

So for this to work you need to come up with&nbsp;&nbsp; an estimator which is a way to integrate&nbsp; different heuristic arguments together.&nbsp; Has to be a machine that takes its input.&nbsp; Like first it takes an input argument,&nbsp;&nbsp;

decides what it believes in light of it, which is&nbsp; kind of like saying was it compelling? But second,&nbsp;&nbsp; it needs to take 4 of those and then say here’s&nbsp; what I believe in light of all four, even though&nbsp;&nbsp; there’s a different estimation strategies that&nbsp;

produce different numbers and that’s like a lot&nbsp;&nbsp; of our life is saying like well, here’s a simple&nbsp; thing that seems reasonable. And here’s a simple&nbsp;&nbsp; thing that seems reasonable. What are you doing?&nbsp; There’s supposed to be a simple thing that unifies&nbsp;&nbsp;

them both. And the obstruction to getting that is&nbsp; understanding what happens when these principles&nbsp;&nbsp; are slightly intention and how do we deal? Yeah, that seems super interesting. We’ll see&nbsp;&nbsp; what other applications it has. I don’t know, like&nbsp;

computer security and code checking. If you can&nbsp;&nbsp; actually say this is how safe we think a code is. In a very formal way, my guess is we’re not&nbsp;&nbsp; going to add I mean, this is both a blessing&nbsp; and a curse. It’s a curse. And you’re like,&nbsp;&nbsp;

well, that’s sad. Your thing is not that useful,&nbsp; but a blessing and not useful things are easier.&nbsp;&nbsp; My guess is we’re not going to add that much value&nbsp; in most of these domains. Most of the difficulty&nbsp;&nbsp; comes from a lot of code that you’d want to&nbsp;

verify. Not all of it, but a significant part.&nbsp;&nbsp; It’s just like the difficulty of formalizing&nbsp; the proof is like the hard part and actually&nbsp;&nbsp; getting all of that to go through and we’re not&nbsp; going to help even the tiniest bit with that,&nbsp;&nbsp;

I think. So this would be more helpful&nbsp; if you have code that uses simulations,&nbsp;&nbsp; you want to verify some property of a controller&nbsp; that involves some numerical error or whatever you&nbsp;&nbsp; need to control the effects of that error. That’s&nbsp;

where you start saying like, well, heuristically,&nbsp;&nbsp; if the errors are independent, blah, blah, blah. Yeah, you’re too honest to be a salesman, Paul.&nbsp; This is kind of like sales to us, right? If&nbsp; you talk about this idea, people are like,&nbsp;&nbsp;

why would that not be the coolest thing ever&nbsp; and therefore impossible? And we’re like,&nbsp;&nbsp; well, actually it’s kind of lame and we’re just&nbsp; trying to pitch it’s way lamer than it sounds.&nbsp;&nbsp; And that’s really important to why it’s possible,&nbsp;

is being like, it’s really not going to blow that&nbsp;&nbsp; many people’s. I mean, I think it will be cool. I&nbsp; think it will be like very if we succeed will be&nbsp;&nbsp; very solid, like metamathematics or theoretical&nbsp; computer science or whatever. But I don’t think&nbsp;&nbsp;

I think the mathematicians already do this&nbsp; reasoning and they mostly just love proofs.&nbsp;&nbsp; I think the physicists do a lot of this reasoning,&nbsp; but they don’t care about formalizing anything. I&nbsp;&nbsp; think in practice, other difficulties are almost&nbsp;

always going to be more salient. I think this is&nbsp;&nbsp; of most interest by far for interpretability and&nbsp; ML and I think other people should care about it&nbsp;&nbsp; and probably will care about it if successful.&nbsp; But I don’t think it’s going to be the biggest&nbsp;&nbsp;

thing ever in any field or even that huge a&nbsp; thing. I think this would be a terrible career&nbsp;&nbsp; move given the ratio of difficulty to impact. I&nbsp; think theoretical computer science, it’s probably&nbsp;&nbsp; a fine move. I think in other domains it just&nbsp;

wouldn’t be worth we’re going to be working on&nbsp;&nbsp; this for years, at least in the best case. I’m laughing because my next question was&nbsp;&nbsp; going to be like a set up for you to explain&nbsp; if this grad student wants to work on this.&nbsp;

I think theoretical computer science is&nbsp; an exception where I think this is like,&nbsp;&nbsp; in some sense, like what the best of theoretical&nbsp; computer science is like. So you have all this&nbsp;&nbsp; reason you have this because it’s useless.&nbsp;

Like an analogy. I think one of the most&nbsp;&nbsp; successful sagas in theoretical computer science&nbsp; is like formalizing the notion of an interactive&nbsp;&nbsp; proof system. And it’s like you have some kind of&nbsp; informal thing that’s interesting to understand,&nbsp;&nbsp;

and you want to pin down what it is and construct&nbsp; some examples and see what’s possible and what’s&nbsp;&nbsp; impossible. And this is like I think this kind of&nbsp; thing is the bread and butter of the best parts of&nbsp;&nbsp; theoretical computer science. And then again, I&nbsp;

think mathematicians it may be a career mistake&nbsp;&nbsp; because the mathematicians only care about proofs&nbsp; or whatever, but that’s a mistake in some sense.&nbsp;&nbsp; Aesthetically, it’s successful. I do think looking&nbsp; back and again, part of why it’s a mistake is such&nbsp;&nbsp;

a high probability we wouldn’t be successful.&nbsp; But I think looking back, people would be like,&nbsp;&nbsp; that was pretty cool, although not that cool.&nbsp; Or we understand why it didn’t happen given the&nbsp;&nbsp; epistemic, like what people cared about&nbsp;

in the field, but it’s pretty cool now.&nbsp; But isn’t it also the case that didn’t Hardy write&nbsp; in that all this prime shit is both not useless,&nbsp;&nbsp; but it’s fun to do, and it turned out that all&nbsp; the cryptography is based on all that prime shit.&nbsp;&nbsp;

So I don’t know. But anyways, I’m trying to set&nbsp; you up so that you can tell and forget about if&nbsp;&nbsp; it doesn’t have applications in all those other&nbsp; fields. It matters a lot for Alignment and that’s&nbsp;&nbsp; why I’m trying to set you up to talk about if&nbsp;

I think a lot of smart people listen to this&nbsp;&nbsp; podcast. If they’re a math or CS grad student and&nbsp; has gotten interested in this. Are you looking to&nbsp;&nbsp; potentially find talent to help you with this?&nbsp; Yeah, maybe we’ll start there. And then I also&nbsp;&nbsp;

want to ask you if I think also maybe people who&nbsp; can provide funding might be listening to the&nbsp;&nbsp; podcast. So to both of them, what is your pitch? We’re definitely hiring and searching for&nbsp;&nbsp; collaborators. I think the most useful&nbsp;

profile is probably a combination of&nbsp;&nbsp; intellectually interested in this particular&nbsp; project and motivated enough by alignment to&nbsp;&nbsp; work on this project, even if it’s really hard. I&nbsp; think there are a lot of good problems. The basic&nbsp;&nbsp;

fact that makes this problem unappealing&nbsp; to work on I’m a really good salesman,&nbsp;&nbsp; but whatever. I think the only reason this isn’t&nbsp; a slam dunk thing to work on is that there are not&nbsp;&nbsp; great examples. So we’ve been working on it for a&nbsp;

while, but we do not have beautiful results as of&nbsp;&nbsp; the recording of this podcast. Hopefully by the&nbsp; time it airs, you completely script. They’ve had&nbsp;&nbsp; great results since then, but. It was too long to put&nbsp;&nbsp;

in the margins of the podcast. Yeah, with luck. Yeah. So I think it’s hard&nbsp;&nbsp; to work on because it’s not clear what a success&nbsp; looks like. It’s not clear if success is possible.&nbsp;&nbsp; But I do think there’s a lot of questions. We have&nbsp;

a lot of questions and I think the basic setting&nbsp;&nbsp; of, like, look, there are all of these arguments.&nbsp; So in mathematics, in physics, in computer science&nbsp;&nbsp; are just a lot of examples of informal heuristic&nbsp; arguments. They have enough structural similarity&nbsp;&nbsp;

that it looks very possible that there is like&nbsp; a unifying framework, that these are instances&nbsp;&nbsp; of some general framework and not just a bunch&nbsp; of random things. Like not just a bunch of it’s&nbsp;&nbsp; not like so, for example, for the prime numbers,&nbsp;

people reason about the prime numbers as if they&nbsp;&nbsp; were like a random set of numbers. One view is&nbsp; like, that’s just a special fact about the primes,&nbsp;&nbsp; they’re kind of random. A different view is&nbsp; like, actually it’s pretty reasonable to reason&nbsp;&nbsp;

about an object as if it was a random object as a&nbsp; starting point. And then as you notice structure,&nbsp;&nbsp; like revised from that initial guess and it&nbsp; looks like to me, the second perspective is&nbsp;&nbsp; probably more right. It’s just like reasonable to&nbsp;

start off treating an object as random and then&nbsp;&nbsp; notice perturbations from random. Like, notice&nbsp; structure the object possesses and the primes are&nbsp;&nbsp; unusual and that they have fairly little additive&nbsp; structure. I think it’s a very natural theoretical&nbsp;&nbsp;

project. There’s like a bunch of activity that&nbsp; people do. It seems like there’s a reasonable&nbsp;&nbsp; chance there’s something nice to say about&nbsp; unifying all of that activity. I think it’s a&nbsp;&nbsp; pretty exciting project. The basic strike against&nbsp;

it is that it seems really hard. Like if you were&nbsp;&nbsp; someone’s advisor, I think you’d be like, what&nbsp; are you going to prove if you work on this for&nbsp;&nbsp; the next two years? And they’d be like, there’s&nbsp; a good chance. Nothing. And then it’s not what&nbsp;&nbsp;

you do if you’re a PhD student. Normally you aim&nbsp; for those high probabilities of getting something&nbsp;&nbsp; within a couple of years. The flip side is it does&nbsp; feel I mean, I think there are a lot of questions.&nbsp;&nbsp; I think some of them we’re probably going to make&nbsp;

progress on. So I think the pitch is mostly like,&nbsp;&nbsp; are some people excited to get in now? Or are&nbsp; people more like, let’s wait to see. Once we&nbsp;&nbsp; have one or two good successes to see what the&nbsp; pattern is and become more confident, we can turn&nbsp;&nbsp;

the crank to make more progress in this direction.&nbsp; But for people who are excited about working on&nbsp;&nbsp; stuff with reasonably high probabilities of&nbsp; failure and not. Really understanding exactly&nbsp;&nbsp; what you’re supposed to do. I think it’s a pretty&nbsp;

good project. I feel like if people look back&nbsp;&nbsp; if we succeed and people are looking back in 50&nbsp; years on what was the coolest stuff happening in&nbsp;&nbsp; math or theoretical computer science, there will&nbsp; be, like a reasonable this will definitely be,&nbsp;&nbsp;

like, in contention. And I would guess for lots of&nbsp; people would just seem like the coolest thing from&nbsp;&nbsp; this period of a couple of years or whatever. Right. Because this is a new method in so many&nbsp;&nbsp; different fields from the ones you met physics,&nbsp;

math, theoretical computer science, I don’t know&nbsp;&nbsp; because what is the average math PhD working on?&nbsp; Right? He’s working on a subset of a subset of&nbsp;&nbsp; something I can’t even understand or pronounce.&nbsp; But math is quite esoteric. But yeah, this seems&nbsp;&nbsp;

like, I don’t know, even small chance of it&nbsp; working. You shouldn’t forget about the value&nbsp;&nbsp; for alignment. But even without that, this is such&nbsp; a cool if this works, it’s like a really big deal.&nbsp; There’s a good chance that if I had my current&nbsp;

set of views about this problem and didn’t care&nbsp;&nbsp; about alignment and had the career safety to&nbsp; just spend a couple of years thinking about it,&nbsp;&nbsp; spend half my time for like five years or&nbsp; whatever, that I would just do that. I mean,&nbsp;&nbsp;

even without caring at all about alignment, it’s&nbsp; a very nice problem. It’s very nice to have this&nbsp;&nbsp; library of things that succeed where they feel&nbsp; so tantalizingly close to being formalizable,&nbsp;&nbsp; at least to me, and such a natural setting, and&nbsp;

then just have so little purchase on it. There&nbsp;&nbsp; aren’t that many really exciting feeling&nbsp; frontiers in theoretical computer science.&nbsp; And then smart person doesn’t have to be a&nbsp; grasshood, but a smart person is interested&nbsp;&nbsp;

in this. What should they do? Should they try&nbsp; to attack some open problem you have put on&nbsp;&nbsp; your blog? Or should it what is the next step? Yeah, I think a first path step. There’s different&nbsp;&nbsp; levels of ambition or whatever, different ways&nbsp;

of approaching a problem. But we have this write&nbsp;&nbsp; up from last year or I guess eleven months ago&nbsp; or whatever on formalizing, the presumption of&nbsp;&nbsp; independence that provides, like, here’s kind of&nbsp; a communication of what we’re looking for in this&nbsp;&nbsp;

object. And I think the motivating problem is&nbsp; saying here’s a notion of what an estimator is&nbsp;&nbsp; and here’s what it would mean for an estimator to&nbsp; capture some set of informal arguments. And a very&nbsp;&nbsp; natural problem is just try and do that. Go for&nbsp;

the whole thing, try and understand and then come&nbsp;&nbsp; up with hopefully a different approach or then&nbsp; end up having context from a different angle on&nbsp;&nbsp; the kind of approach we’re taking. I think that’s&nbsp; a reasonable thing to do. I do think we also have&nbsp;&nbsp;

a bunch of open problems, so maybe we should&nbsp; put up more of those open problems. I mean, the&nbsp;&nbsp; main concern with doing so is that for any given&nbsp; one, we’re like, this is probably hopeless. Like,&nbsp;&nbsp; put up a prize earlier in the year for an open&nbsp;

problem, which tragically, I mean, I guess the&nbsp;&nbsp; time is now to post the debrief from that, or&nbsp; I owe it from this weekend. I was supposed to&nbsp;&nbsp; do that, so I’ll probably do it tomorrow, but no&nbsp; one solved it. It’s sad putting out problems that&nbsp;&nbsp;

are hard or like I don’t we could put out a bunch&nbsp; of problems that we think might be really hard.&nbsp; But what was that famous case of that statistician&nbsp; who it was like, some PhD student who showed up&nbsp;&nbsp; late to a class and he saw some problems on the&nbsp;

board and he thought they were homework, and then&nbsp;&nbsp; they were actually just open problems, and then he&nbsp; solved them because he thought they were homework.&nbsp; Right, yeah. I mean, we have much less&nbsp; information that these problems are hard. Again,&nbsp;&nbsp;

I expect the solution to most of our problems to&nbsp; not be that complicated. And we’ve been working on&nbsp;&nbsp; it in some sense for a really long time. Total&nbsp; years of full time equivalent work across the&nbsp;&nbsp; whole team is like probably like 3 years of&nbsp;

full time equivalent work in this area spread&nbsp;&nbsp; across a couple of people. But that’s very little&nbsp; compared to a problem. It is very easy to have a&nbsp;&nbsp; problem where you put in 3 years of full time&nbsp; equivalent work. But in fact, there’s still an&nbsp;&nbsp;

approach that’s going to work quite easily&nbsp; with like, 3 to six months if you come at&nbsp;&nbsp; a new angle. And we’ve learned a fair amount&nbsp; from that that we could share, and we probably&nbsp;&nbsp; will be sharing more over the coming months.

As far as funding goes, is this something where,&nbsp;&nbsp; I don’t know, if somebody gave you a whole bunch&nbsp; of money that would help? Or does it not matter&nbsp;&nbsp; how many people are working on this, by the way? So we have been right now, there’s 4 of us full&nbsp;&nbsp;

time, and we’re hiring for more people. And then is funding that would matter?&nbsp; I mean, funding is always good. We’re not super&nbsp; funding constrained right now. The main effect of&nbsp;&nbsp; funding is it will cause me to continuously&nbsp;

and perhaps indefinitely delay fundraising.&nbsp;&nbsp; Periodically. I’ll set out to be interested&nbsp; in fundraising and someone will be like,&nbsp;&nbsp; offer a grant, and then I will get to delay for&nbsp; another six months or fundraising or nine months,&nbsp;&nbsp;

or you can you can delay the time at which Paul&nbsp; needs to think for some time about fundraising.&nbsp; Well, one question I think would be interesting&nbsp; to ask, you know, I think people can talk vaguely&nbsp;&nbsp; about the value of theoretical research and how&nbsp;

it contributes to real world applications and you&nbsp;&nbsp; can look at historical examples or something, but&nbsp; you are somebody who actually has done this in a&nbsp;&nbsp; big way. Like Rlhf is something you developed and&nbsp; then it actually has got into an application that&nbsp;&nbsp;

has been used by millions of people. Tell me about&nbsp; just that pipeline. How can you reliably identify&nbsp;&nbsp; theoretical problems that will matter for real&nbsp; world applications? Because it’s one thing to&nbsp;&nbsp; read about touring or something and the Halting&nbsp;

problem, but here you’d have the real thing.&nbsp; Yeah, I mean, it is definitely exciting to have&nbsp; worked on a thing that has a real world impact.&nbsp;&nbsp; The main caveat I’d provide is, like, Rlhf is&nbsp; very simple compared to many things. And so the&nbsp;&nbsp;

motivation for working on that problem was, like,&nbsp; look, this is how it probably should work, or this&nbsp;&nbsp; is a step in some progression. It’s unclear&nbsp; if it’s, like, the final step or something,&nbsp;&nbsp; but it’s a very natural thing to do that people&nbsp;

probably should be and probably will be doing.&nbsp;&nbsp; I’m saying, if you want to talk about crazy stuff,&nbsp; it’s good to help make those steps happen faster,&nbsp;&nbsp; and it’s good to learn about. There’s&nbsp; lots of issues that occur in practice,&nbsp;&nbsp;

even for things that seem very simple on paper,&nbsp; but mostly, like, the story of it’s just like,&nbsp;&nbsp; yeah, I think my sense of the world is things&nbsp; that look like good ideas on paper, just, like,&nbsp;&nbsp; often are harder than they look. But the world&nbsp;

isn’t that far from what makes sense on paper.&nbsp;&nbsp; Like, large language models look really good&nbsp; on paper, and RLH looks really good on paper.&nbsp;&nbsp; And these things, I think, just work out in a way&nbsp; that’s yeah, I think people maybe overestimate or,&nbsp;&nbsp;

like, maybe it’s kind of a trope, but people&nbsp; talk about, like, it’s easy to underestimate&nbsp;&nbsp; how much gap there is to practice, like, how many&nbsp; things will come up that don’t come up in theory.&nbsp;&nbsp; But it’s also easy to overestimate how inscrutable&nbsp;

the world is. Like, the things that happen mostly&nbsp;&nbsp; are things that do just kind of make sense.&nbsp; Yeah, I feel like most ML implementation does&nbsp;&nbsp; just come down to a bunch of detail, though, of,&nbsp; like, build a very simple version of the system,&nbsp;&nbsp;

understand what goes wrong, fix the things that&nbsp; go wrong, scale it up, understand what goes&nbsp;&nbsp; wrong. And I’m glad I have some experience doing&nbsp; that, but I think that does cause me to be better&nbsp;&nbsp; informed about what makes sense in ML and what&nbsp;

can actually work. But I don’t think it caused&nbsp;&nbsp; me to have a whole lot of deep expertise&nbsp; or deep wisdom about how to close the gap.&nbsp; Yeah, but is there some tip on identifying&nbsp; things like Rlhf which actually do matter,&nbsp;&nbsp;

versus making sure you don’t get stuck in some&nbsp; theoretical problem that doesn’t matter? Or&nbsp;&nbsp; is it just coincidence? Or I mean, is&nbsp; there something you can do in advance&nbsp;&nbsp; to make sure that the thing is useful?

I don’t know if the RLHS story is, like,&nbsp;&nbsp; the best success case or something, but because&nbsp; the capabilities maybe I’d say more profoundly,&nbsp;&nbsp; like, again, it’s just not that hard a case.&nbsp; It’s a little bit unfair to be like, I’m going&nbsp;&nbsp;

to predict the thing, which I pretty much think it&nbsp; was going to happen at some point. And so it was&nbsp;&nbsp; mostly a case of acceleration, whereas the work&nbsp; we’re doing right now is specifically focused&nbsp;&nbsp; on something that’s kind of crazy enough that it&nbsp;

might not happen. Even if it’s a really good idea&nbsp;&nbsp; or challenging enough, it might not happen. But&nbsp; I’d say in general, and this draws a little bit&nbsp;&nbsp; on more broad experience more broadly in theory,&nbsp; it’s just like a lot of the times when theory&nbsp;&nbsp;

fails to connect with practice. It’s just kind&nbsp; of clear it’s not going to connect. If you like,&nbsp;&nbsp; try if you actually think about it and you’re&nbsp; like, what are the key constraints in practice?&nbsp;&nbsp; Is theoretical problem we’re working on actually&nbsp;

connected to those constraints? Is there something&nbsp;&nbsp; that is possible in theory that would actually&nbsp; address real world issues? I think the vast&nbsp;&nbsp; majority as a theoretical computer scientist, the&nbsp; vast majority of theoretical computer science has&nbsp;&nbsp;

very little chance of ever affecting practice.&nbsp; But also it is completely clear in theory that&nbsp;&nbsp; has very little chance of affecting practice.&nbsp; Most of theory fails to affect practice,&nbsp;&nbsp; not because of all the stuff you don’t think of,&nbsp;

but just because you could call it like dead on&nbsp;&nbsp; arrival, but you could also be like, it’s not&nbsp; really the point. It’s just like mathematicians&nbsp;&nbsp; also are like, they’re not trying to affect&nbsp; practice and they’re not like, why does my&nbsp;&nbsp;

number theory not affect practice? It was kind of&nbsp; obvious. I think the biggest thing is just like,&nbsp;&nbsp; actually caring about that and then learning at&nbsp; least what’s basically going on in the actual&nbsp;&nbsp; systems you care about and what are actually&nbsp;

the important constraints. And is this a real&nbsp;&nbsp; theoretical problem? The basic reason most theory&nbsp; doesn’t do that is just like, that’s not where the&nbsp;&nbsp; easy theoretical problems are. So I think theory&nbsp; is instead motivated by like, we’re going to&nbsp;&nbsp;

build up the edifice of theory and sometimes&nbsp; there’ll be Opportunistic. Opportunistically&nbsp;&nbsp; we’ll find a case that comes close to practice,&nbsp; or we’ll find something practitioners are already&nbsp;&nbsp; doing and try and bring into our framework or&nbsp;

something. But theory of change is mostly not&nbsp;&nbsp; this thing is going to make into practice. It’s&nbsp; mostly this is going to contribute to the body of&nbsp;&nbsp; knowledge that will slowly grow. And sometimes&nbsp; opportunistically yields important results.&nbsp;

How big do you think a seed AI would be? What&nbsp; is the minimum sort of encoding of something&nbsp;&nbsp; that is as smart as a human? I think it depends a lot what&nbsp;&nbsp; substrate it gets to run on. So if you tell&nbsp;

me how much computation does it get before or&nbsp;&nbsp; what kind of real world infrastructure does it&nbsp; get? You could ask what’s the shortest program,&nbsp;&nbsp; which if you run it on a million h 100s connected&nbsp; in a nice network with a hospitable environment&nbsp;&nbsp;

will eventually go to the stars. But that&nbsp; seems like it’s probably on the order of&nbsp;&nbsp; tens of thousands of bytes or I don’t know if I&nbsp; had to guess the median, I’d guess 10,000 bytes.&nbsp; Wait, the specification or the&nbsp;

compression of just the program?&nbsp; A program which went wrong. Oh, got it. But that’s&nbsp; going to be like, really Cheatsy. So they ask,&nbsp;&nbsp; what’s the thing that has values and will&nbsp; expand and roughly preserve its value? Because&nbsp;&nbsp;

that thing, the 10,000 byte thing, will just lean&nbsp; heavily on evolution and natural selection to get&nbsp;&nbsp; there for that. Like, I don’t know, million bytes,&nbsp; million bytes, 100,000 bytes, something like that.&nbsp; Do you think AI lie detectors will work where&nbsp;

you kind of just look at the activations and&nbsp;&nbsp; not find explanations in the way you were talking&nbsp; about with Heuristics, but literally just like,&nbsp;&nbsp; here’s what truth looks like, here’s what&nbsp; lies look like. Let’s just segregate the&nbsp;&nbsp;

lane space and see if we can identify the two. Yeah, I think to separate the like just train a&nbsp;&nbsp; classifier to do it is a little bit complicated&nbsp; for a few reasons and may not work. But if you&nbsp;&nbsp; just brought them to space and say like, hey,&nbsp;

it’s like you want to know if someone’s lying,&nbsp;&nbsp; you get to interrogate them, but also you get&nbsp; to rewind them arbitrarily and make a million&nbsp;&nbsp; copies of them. I do think it’s pretty hard to lie&nbsp; successfully. You get to look at their brain even&nbsp;&nbsp;

if you don’t quite understand what’s happening.&nbsp; You get to rewind them a million times. You get&nbsp;&nbsp; to run all those parallel copies into gradient&nbsp; descent or whatever. I think there’s a pretty good&nbsp;&nbsp; chance that you can just tell if someone is lying,&nbsp;

like a brain emulation or an AI or whatever,&nbsp;&nbsp; unless they were aggressively selected. If it’s&nbsp; just they are trying to lie well rather than it’s&nbsp;&nbsp; like they were selected over many generations to&nbsp; be excellent at lying or something, then your ML&nbsp;&nbsp;

system hopefully didn’t train it a bunch to lie.&nbsp; And you want to be careful about whether your&nbsp;&nbsp; training scheme effectively does that. Yeah, that&nbsp; seems like it’s more likely than not to succeed.&nbsp; And how possible do you think it will be for us&nbsp;

to specify human verifiable rules for reasoning&nbsp;&nbsp; such that even if the AI is super intelligent,&nbsp; we can’t really understand why it does certain&nbsp;&nbsp; things. We know that the way in which it arises&nbsp; at these conclusions is valid. Like, if it’s&nbsp;&nbsp;

trying to persuade us to something, we can&nbsp; be like, I don’t understand all the steps,&nbsp;&nbsp; but I know that this is something that’s&nbsp; valid and you’re not just making shit up.&nbsp; That seems very hard if you wanted to&nbsp;

be competitive with learned reasoning,&nbsp;&nbsp; it depends a little bit exactly how you set&nbsp; it up. But for the ambitious versions of that,&nbsp;&nbsp; let’s say it would address the alignment problem,&nbsp; they seem pretty unlikely, like 5% kind of thing.&nbsp;

Is there an upper bound on intelligence? Not in&nbsp; the near term, but just like super intelligence&nbsp;&nbsp; at some point. How far do you think that can go? It seems like it’s going to depend a little bit&nbsp;&nbsp; on what is meant by intelligence. It kind of reads&nbsp;

as a question that’s similar to is there an upper&nbsp;&nbsp; bound on strength or something? There are a lot&nbsp; of forms. I think it’s like the case that I think&nbsp;&nbsp; there are sort of arbitrarily smart input output&nbsp; functionalities and then if you hold fixed the&nbsp;&nbsp;

amount of compute, there is some smartest one if&nbsp; you’re just like, what’s the best set of ten to&nbsp;&nbsp; the 40th operations? There’s only finitely many of&nbsp; them. So some best one for any particular notion&nbsp;&nbsp; of best that you have in mind? So I guess I’m&nbsp;

just like for the unbounded question where you’re&nbsp;&nbsp; allowed to use arbitrary description complexity&nbsp; and compute, like probably no and for the I mean,&nbsp;&nbsp; there is some optimal conduct if you’re like&nbsp; I have some goal in mind and I’m just like,&nbsp;&nbsp;

what action best achieves it? If you imagine&nbsp; like a little box embedded in the universe,&nbsp;&nbsp; I think there is kind of just like an optimal&nbsp; input output behavior. So I guess in that sense&nbsp;&nbsp; I think there is an upper bound, but it’s not&nbsp;

saturatable in the physical universe because&nbsp;&nbsp; it’s definitely exponentially slow, right? Yeah. Because of comms or other things or&nbsp;&nbsp; heat. It just might be physically impossible&nbsp; to instagram something smarter than this.&nbsp;

Yeah, I mean, like, for example, if you imagine&nbsp; what the best thing is, it would almost certainly&nbsp;&nbsp; involve just like simulating every possible&nbsp; universe. It might be in modular moral&nbsp;&nbsp; constraints, which I don’t know if you want to&nbsp;

include like so that would be very slow. It would&nbsp;&nbsp; involve simulating like, I don’t know exactly&nbsp; how slow, but like double exponential very slow.&nbsp; Carl Schulman laid out his picture of the&nbsp; intelligence explosion in the seven hour episode.&nbsp;&nbsp;

I know you guys have talked a lot. What about his&nbsp; basic is? Do you have some main disagreements? Is&nbsp;&nbsp; there some crux that you guys have explored? It’s related to our timelines discussion from&nbsp;&nbsp; yeah, I think the biggest issue is probably error&nbsp;

bars where Carl has a very software focused,&nbsp;&nbsp; very fast kind of takeoff picture. And I think&nbsp; that is plausible, but not that likely. I think&nbsp;&nbsp; there’s a couple of ways you could perturb the&nbsp; situation and my guess is one of them applies.&nbsp;&nbsp;

So maybe I have like I don’t know exactly what&nbsp; Carl’s probability is. I feel like Carl’s going&nbsp;&nbsp; to have like a 60% chance on some crazy thing&nbsp; that I’m only going to assign like a 20% chance&nbsp;&nbsp; to or 30% chance or something. And I think those&nbsp;

kinds of perturbations are like one, how long a&nbsp;&nbsp; period is there of complementarity between AI&nbsp; capabilities and human capabilities which will&nbsp;&nbsp; tend to soften takeoff? Two, how much diminishing&nbsp; returns are there on software progress,&nbsp;&nbsp;

such that is a broader takeoff involving scaling,&nbsp; electricity production and hardware production.&nbsp;&nbsp; Is that likely to happen during takeoff, where&nbsp; I’m more like 50 50 or more stuff like this?&nbsp; Yeah. Okay, so is it that you think the alternate&nbsp;

constraints will be more hard? The basic case he’s&nbsp;&nbsp; laid out is that you can just have a sequence of&nbsp; things like flash attention or Moe, and you can&nbsp;&nbsp; just keep stacking these kinds of things on. I’m very unsure if you can keep stacking them&nbsp;&nbsp;

or like it’s kind of a question of what’s&nbsp; like, the returns curve and Carl has some&nbsp;&nbsp; inference from historical data or some way he’d&nbsp; extrapolate the trend. I am more like 50 50 on&nbsp;&nbsp; whether the software only intelligence explosion&nbsp;

is even possible, and then like a somewhat higher&nbsp;&nbsp; probability that it’s slower than why. Do you think it might not be possible?&nbsp; Well, the entire question is like, if you&nbsp; double R and D effort, do you get enough&nbsp;&nbsp;

additional improvement to further double the&nbsp; efficiency? And that question will itself be&nbsp;&nbsp; a function of your hardware base, like how much&nbsp; hardware you have. And the question is like,&nbsp;&nbsp; at the amount of hardware we’re going to have and&nbsp;

the level of sophistication we have as the process&nbsp;&nbsp; begins. Is it the case that each doubling of&nbsp; actually the initial only depends on the hardware,&nbsp;&nbsp; or like, each level of hardware will have some&nbsp; place at this dynamic asymptotes so the question&nbsp;&nbsp;

is just like, for how long? Is it the case that&nbsp; each doubling of R and D at least doubles the&nbsp;&nbsp; effective output of your AI research population?&nbsp; And I think I have a higher probability on that.&nbsp;&nbsp; I think it’s kind of close. If you look at&nbsp;

the Empirics, I think the Empirics benefit a&nbsp;&nbsp; lot from continuing hardware scale up so that&nbsp; the effective R and D stock is significantly&nbsp;&nbsp; smaller than it looks, if that makes sense. What are the Empirics you’re referring to?&nbsp;

So there’s kind of two sources of evidence. One&nbsp; is like, looking across a bunch of industries&nbsp;&nbsp; at like, what is the general improvement with&nbsp; each doubling of either R and D investment or&nbsp;&nbsp; experience, where it is quite exceptional to&nbsp;

have a field with not anyway. It’s pretty good&nbsp;&nbsp; to have a field where each time you double R and D&nbsp; investment, you get a doubling of efficiency. The&nbsp;&nbsp; second source of evidence is on actual algorithmic&nbsp; improvement in ML, which is obviously much,&nbsp;&nbsp;

much scarcer. And there you can make a case that&nbsp; it’s been like each doubling of R and D has given&nbsp;&nbsp; you roughly a forex or something increase in&nbsp; computational efficiency. But there’s a question&nbsp;&nbsp; of how much that benefits. When I say the effect&nbsp;

of R D stock is smaller, I mean we scale up.&nbsp;&nbsp; You’re doing a new task like every couple years,&nbsp; you’re doing a new task because you’re operating a&nbsp;&nbsp; scale much larger than the previous scale. And so&nbsp; a lot of your effort is how to make use of the new&nbsp;&nbsp;

scale. So if you’re not increasing your installed&nbsp; hardware base or just flat at a level of hardware,&nbsp;&nbsp; I think you get much faster diminishing returns&nbsp; than people have gotten historically. I think Carl&nbsp;&nbsp; agrees, in principle, this is true. And then&nbsp;

once you make that adjustment, I think it’s,&nbsp;&nbsp; like, very unclear where the empirics shake out. I&nbsp; think Carl has thought about these more than I am,&nbsp;&nbsp; so I should maybe defer more. But&nbsp; anyway, I’m at like 50 50 on that.&nbsp;

How have your timelines&nbsp; changed over the last 20 years?&nbsp; Last 20 years? Yeah. How long&nbsp;&nbsp; have you been working on anything related to AI?

So I started thinking about this stuff in 2010&nbsp;&nbsp; or so. So I think my earliest timeline prediction&nbsp; will be in 2011. I think in 2011, my rough picture&nbsp;&nbsp; was like, we will not have insane AI in the next&nbsp; ten years. And then I get increasingly uncertain&nbsp;&nbsp;

after that. But we converged to 1% per year or&nbsp; something like that. And then probably in 2016,&nbsp;&nbsp; my take was, like, we won’t have crazy AI in the&nbsp; next five years, but then we converged to, like,&nbsp;&nbsp; one or 2% per year after that. Then in 2019,&nbsp;

I guess I made a round of forecasts where I&nbsp;&nbsp; gave like 30% or something to 25% to crazy Eye by&nbsp; 2040 and like 10% by 2030 or something like that.&nbsp;&nbsp; So I think my 2030 probability has been kind of&nbsp; stable, and my 2040 probability has been going&nbsp;&nbsp;

up. And I would guess it’s too sticky. I guess&nbsp; that 40% I gave at the beginning is just, like,&nbsp;&nbsp; from not having updated recently enough, and I&nbsp; maybe just need to sit down. I would guess that&nbsp;&nbsp; should be even higher. I think, like 15% in 2030.&nbsp;

I’m not feeling that bad about this is just like,&nbsp;&nbsp; each passing year is, like, a big update against&nbsp; 2030. We don’t have that many years left,&nbsp;&nbsp; and that’s roughly counterbalanced with AI&nbsp; going pretty well. Whereas for the 2040 thing,&nbsp;&nbsp;

the passing years are not that big a deal. And&nbsp; as we see that things are basically working,&nbsp;&nbsp; that’s like, cutting out a lot of the probability&nbsp; of not having AI by 2040. My 2030 probability&nbsp;&nbsp; up a little bit, like, maybe twice as high as&nbsp;

it used to be or something like that. My 2040&nbsp;&nbsp; probability up much more significantly. How fast do you think we can keep&nbsp;&nbsp; building Fabs to keep up with the eye demand? Yeah, I don’t know much about any of the relevant&nbsp;&nbsp;

areas. My best guess is my understanding is right&nbsp; now, like 5% or something of the next year’s total&nbsp;&nbsp; or best process. Fabs will be making AI hardware,&nbsp; of which only a small fraction will be going into&nbsp;&nbsp; very large training runs. Like, only a couple.&nbsp;

So maybe a couple of percent of total output,&nbsp;&nbsp; and then that represents maybe like 1% of total&nbsp; possible output. A couple of percent of leading&nbsp;&nbsp; process 1% of total or something. I don’t&nbsp; know if that’s right, but I think it’s like&nbsp;&nbsp;

the rough ballpark we’re in. I think things will&nbsp; be pretty fast. You scale up for the next order&nbsp;&nbsp; of magnitude or two from there because you’re&nbsp; basically just shifting over other stuff. My&nbsp;&nbsp; sense is it would be like years of delay.&nbsp;

There’s like, multiple reasons that you&nbsp;&nbsp; expect years of delay for going past that,&nbsp; maybe even at that you start having. Yeah,&nbsp;&nbsp; there’s just a lot of problems. Like building new&nbsp; fabs is quite slow and I don’t think there’s like,&nbsp;&nbsp;

TSMC is not like, planning on increases in total&nbsp; demand driven by AI. Like kind of conspicuously&nbsp;&nbsp; not planning on it. I don’t think anyone else is&nbsp; really ramping up production in anticipation think&nbsp;&nbsp; and then similarly just building data centers&nbsp;

of that size seems like very, very hard and also&nbsp;&nbsp; probably has multiple years of delay. What does your portfolio look like?&nbsp; I’ve tried to get rid of most of the&nbsp; AI stuff that’s Plausibly implicated&nbsp;&nbsp;

in policy work or like CEG advocacy on the&nbsp; RSP stuff for my involvement with Anthropic.&nbsp; What would it look like if you. Had no conflicts of interest and&nbsp;&nbsp; no inside? Like, I also still have a bunch of&nbsp;

hardware investments which I need to think about,&nbsp;&nbsp; but I don’t know a lot of TSMC. I have a chunk&nbsp; of Nvidia, although I just keep betting against&nbsp;&nbsp; Nvidia constantly since 2016 or something. I’ve&nbsp; been destroyed on that bet. Although AMD has also&nbsp;&nbsp;

done fine. The case now is even easier, but it’s&nbsp; similar to the case in the old days, just a very&nbsp;&nbsp; expensive company. Given the total amount of R&nbsp; and D investment they’ve made, they have like,&nbsp;&nbsp; whatever, a trillion dollar valuation or something&nbsp;

that’s like very high. So the question is,&nbsp;&nbsp; how expensive is it to make a TPU? So it actually&nbsp; outcompetes H 100 or something. And I’m like, wow,&nbsp;&nbsp; it’s real level, high level of incompetence if&nbsp; Google can’t catch up fast enough to make that&nbsp;&nbsp;

trillion dollar valuation not justified. Whereas with TSMC they have&nbsp;&nbsp; a harder remote, you think? Yeah, I think it’s a lot harder, especially&nbsp;&nbsp; if you’re in this regime where you’re trying&nbsp;

to scale up. So if you’re unable to build fabs,&nbsp;&nbsp; I think what will take a very long time to build&nbsp; as many fabs as people want, the effect of that&nbsp;&nbsp; will be to bid up the price of existing fabs and&nbsp; existing semiconductor manufacturing equipment.&nbsp;&nbsp;

And so just those hard assets will become&nbsp; spectacularly valuable, as will the existing GPUs&nbsp;&nbsp; and the actual yeah, I think it’s just hard. That&nbsp; seems like the hardest asset to scale up quickly.&nbsp;&nbsp; So it’s like the asset, if you have like a rapid&nbsp;

run up, it’s the one that you’d expect to most&nbsp;&nbsp; benefit. Whereas Nvidia’s stuff will ultimately&nbsp; be replaced by either better stuff made by humans&nbsp;&nbsp; or stuff made by with AI assistance. Like the gap&nbsp; will close even further as you build AI systems.&nbsp;

Right. Unless Nvidia is using those systems. Yeah, the point is just like anybody will so&nbsp;&nbsp; dwarf past R D and there’s like just not that&nbsp; much stickiness. There’s less stickiness in the&nbsp;&nbsp; future than there has been in the yeah, I don’t&nbsp;

know. So I don’t want to not commenting for any&nbsp;&nbsp; private information just in my gut having&nbsp; caveatted, this is like the single bet I’ve&nbsp;&nbsp; most okay not including Nvidia in that portfolio. And final question, there’s a lot of schemes out&nbsp;&nbsp;

there for alignment and I think just like a lot&nbsp; of general takes and a lot of this stuff is over&nbsp;&nbsp; my head where I think I literally it took me like&nbsp; weeks to understand the mechanistic anomaly stuff&nbsp;&nbsp; you work on without spending weeks.

How do you detect bullshit?&nbsp; People have explained their schemes to me&nbsp; and I’m like, honestly, I don’t know if it&nbsp;&nbsp; makes sense or not with you. I’m just like&nbsp; I trust Paul enough that I think there’s&nbsp;&nbsp;

probably something here if I try to understand&nbsp; this enough. But how do you detect bullshit?&nbsp; Yeah, so I think it’s depends on the kind of&nbsp; work. So for the kind of stuff we’re doing, my&nbsp;&nbsp; guess is like most people there’s just not really&nbsp;

a way you’re going to tell whether it’s bullshit.&nbsp;&nbsp; So I think it’s important that we don’t spend&nbsp; that much money on the people we want to hire&nbsp;&nbsp; are probably going to dig in in depth. I don’t&nbsp; think there’s a way you can tell whether it’s&nbsp;&nbsp;

bullshit without either spending a lot of effort&nbsp; or leaning on deference with empirical work. It’s&nbsp;&nbsp; interesting in that you do have some signals of&nbsp; the quality of work. You can be like, does it work&nbsp;&nbsp; in practice? Does the story? I think the stories&nbsp;

are just radically simpler and so you probably&nbsp;&nbsp; can evaluate those stories on their face. And then&nbsp; you mostly come down to these questions of like,&nbsp;&nbsp; what are the key difficulties? Yeah, I tend to be&nbsp; optimistic when people dismiss something because&nbsp;&nbsp;

this doesn’t deal with a key difficulty or this&nbsp; runs into the following insurable obstacle. I&nbsp;&nbsp; tend to be a little bit more skeptical about those&nbsp; arguments and tend to think, like, yeah, something&nbsp;&nbsp; can be bullshit because it’s not addressing a&nbsp;

real problem that’s I think the easiest way this&nbsp;&nbsp; is a problem someone’s interested in that’s&nbsp; just not actually an important problem, and&nbsp;&nbsp; there’s no story about why it’s going to become&nbsp; an important problem. E g, like it’s not a problem&nbsp;&nbsp;

now and won’t get worse or it is maybe a problem&nbsp; now, but it’s clearly getting better. That’s like&nbsp;&nbsp; one way and then conditioned on passing that bar,&nbsp; like dealing with something that actually engages&nbsp;&nbsp; with important parts of the argument for concern&nbsp;

and then actually making sense empirically. So I&nbsp;&nbsp; think most work is anchored by source of feedback&nbsp; is like actually engaging with real models. So&nbsp;&nbsp; it’s like, does it make sense how to engage with&nbsp; real models? And does the story about how it deals&nbsp;&nbsp;

with key difficulties actually make sense? I’m&nbsp; pretty liberal past there. I think it’s really&nbsp;&nbsp; hard to, like, eg. People look at mechanistic,&nbsp; interpretability and be like, well, this obviously&nbsp;&nbsp; can’t succeed. And I’m like, I don’t know. How&nbsp;

can you tell? It obviously can’t succeed. I think&nbsp;&nbsp; it’s reasonable to take total investment in the&nbsp; field. How fast is it making progress? How does&nbsp;&nbsp; that pencil I think most things people work on,&nbsp; though, actually pencil pretty fine. They look&nbsp;&nbsp;

like they could be reasonable investments.&nbsp; Things are not, like, super out of whack.&nbsp; Okay, great. This is, I think, a good place to&nbsp; close. Paul, thank you so much for your time.&nbsp; Yeah, thanks for having me. It was good chatting.

Yeah, absolutely.

<!-- YOUTUBE_TRANSCRIPT_END -->
