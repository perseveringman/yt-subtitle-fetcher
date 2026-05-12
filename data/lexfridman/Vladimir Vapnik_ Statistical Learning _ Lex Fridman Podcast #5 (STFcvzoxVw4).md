---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "STFcvzoxVw4"
title: "Vladimir Vapnik: Statistical Learning | Lex Fridman Podcast #5"
video_url: "https://www.youtube.com/watch?v=STFcvzoxVw4"
thumbnail_url: "https://i.ytimg.com/vi/STFcvzoxVw4/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=STFcvzoxVw4"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-11-16T15:52:20.000Z"
upload_date: "2018-11-16"
duration_seconds: 3242
duration_human: "54:02"
view_count: 104672
like_count: 2287
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:16:42.406Z"
---

# Vladimir Vapnik: Statistical Learning | Lex Fridman Podcast #5

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=STFcvzoxVw4
- video_id: STFcvzoxVw4
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-11-16T15:52:20.000Z
- upload_date: 2018-11-16
- duration: 54:02
- view_count: 104672
- like_count: 2287
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:03
The following is a conversation with Vladimir Vapnik.

00:00:02 --> 00:00:09
He is the co-inventor of support vector machines, support vector clustering, VC theory, and

00:00:08 --> 00:00:11
many foundational ideas in statistical learning.

00:00:11 --> 00:00:17
He was born in the Soviet Union and worked at the Institute of Control Sciences in Moscow.

00:00:16 --> 00:00:24
Then in the United States, he worked at AT&T, NEC Labs, Facebook Research, and now

00:00:23 --> 00:00:26
is a professor at Columbia University.

00:00:25 --> 00:00:30
His work has been cited over 170,000 times.

00:00:30 --> 00:00:35
He has some very interesting ideas about artificial intelligence and the nature of learning, especially

00:00:34 --> 00:00:40
, on the limits of our current approaches and the open problems in the field.

00:00:40 --> 00:00:45
This conversation is part of the MIT course on Artificial General Intelligence

00:00:44 --> 00:00:47
and the Artificial Intelligence Podcast.

00:00:46 --> 00:00:53
If you enjoy it, please subscribe on YouTube or rate it on iTunes or your podcast provider of choice

00:00:52 --> 00:00:58
or simply connect with me on Twitter or other social networks at Lex Fridman,

00:00:57 --> 00:01:00
spelled F-R-I-D.

00:01:00 --> 00:01:04
And now, here's my conversation with Vladimir Vapnik.

00:01:04 --> 00:01:09
Lex: Einstein famously said that God doesn't play dice.

00:01:08 --> 00:01:10
Vladimir: Yeah.

00:01:09 --> 00:01:15
Lex: You have studied the world through the eyes of statistics, so let me ask you in terms

00:01:14 --> 00:01:20
of the nature of reality--fundamental nature of reality.

00:01:19 --> 00:01:21
Does God play dice?

00:01:21 --> 00:01:25
Vladimir: We don't know some factors.

00:01:25 --> 00:01:35
And because we don't know some factors, which could be important, it looks like God plays dice,

00:01:34 --> 00:01:38
but you should describe.

00:01:37 --> 00:01:45
In philosophy, they distinguish between two positions: positions of instrumentalism,

00:01:44 --> 00:01:48
where you're creating theories of prediction

00:01:48 --> 00:01:52
and position of realism, where you're trying to

00:01:51 --> 00:01:55
understand what God did.

00:01:54 --> 00:01:58
Lex: Can you describe instrumentalism and realism a little bit?

00:01:58 --> 00:02:04
For example, if you have some mechanical laws,

00:02:04 --> 00:02:06
what is that?

00:02:06 --> 00:02:12
Is it law which is true always and everywhere

00:02:11 --> 00:02:16
or is it a law which allows you to predict a position

00:02:15 --> 00:02:20
of moving elements?

00:02:21 --> 00:02:23
What do you believe?

00:02:22 --> 00:02:31
Do you believe that it is God's law, that God created the world which is this

00:02:31 --> 00:02:37
physical law, or is it just law for predictions?

00:02:36 --> 00:02:39
Lex: And which one is instrumentalism?

00:02:38 --> 00:02:40
For predictions.

00:02:39 --> 00:02:47
If you believe that this is the law of God and it is always true everywhere,

00:02:47 --> 00:02:50
that means that you're a realist.

00:02:49 --> 00:02:56
You're trying to understand God's thought.

00:02:55 --> 00:02:59
Lex: So the way you see the world is as an instrumentalist?

00:02:59 --> 00:03:03
Vladimir: You know I'm working from some models--

00:03:03 --> 00:03:07
Models of Machine Learning.

00:03:06 --> 00:03:12
So in this model, you can see settings

00:03:12 --> 00:03:18
and you try to resolve the problem.

00:03:18 --> 00:03:24
And you can do it in two different ways from the point of view of the instrumentalist,

00:03:23 --> 00:03:32
and that's what everybody does now because the goal of machine learning

00:03:31 --> 00:03:37
is to find the rule for classification.

00:03:36 --> 00:03:41
That is true, but it is an instrument for prediction.

00:03:40 --> 00:03:51
But I can say, the goal of machine learning is to learn about conditional probability,

00:03:50 --> 00:03:54
so how God play and use.

00:03:53 --> 00:03:58
Does he play what is the probability for one and what is the probability for another

00:03:57 --> 00:04:00
in a given situation?

00:03:59 --> 00:04:03
But for prediction, I don't need this.

00:04:02 --> 00:04:04
I need the rule.

00:04:04 --> 00:04:09
But for understanding, I need conditional probability.

00:04:08 --> 00:04:14
Lex: So let me just step back a little bit first to talk about, you mentioned which I read

00:04:13 --> 00:04:21
last night the parts of the 1960 paper by Eugene Wigner,

00:04:20 --> 00:04:24
Unreasonable Effectiveness of Mathematics

00:04:23 --> 00:04:25
in the Natural Sciences.

00:04:24 --> 00:04:29
It's such a beautiful paper, by the way.

00:04:31 --> 00:04:39
To be honest, to confess my own work in the past two years on deep learning heavily applied,

00:04:38 --> 00:04:45
it made me feel that I was missing out on some of the beauty of nature in the way that

00:04:44 --> 00:04:46
math can uncover.

00:04:45 --> 00:04:51
So let me just step away from the poetry of that for a second.

00:04:50 --> 00:04:53
How do you see the role of math in your life?

00:04:52 --> 00:04:54
Is it a tool?

00:04:53 --> 00:04:56
Is it poetry?

00:04:55 --> 00:04:58
Where does it sit?

00:04:57 --> 00:05:00
And does math, for you, have limits?

00:05:01 --> 00:05:08
Vladimir: Some people are saying that Math is language which use god.

00:05:10 --> 00:05:13
Lex: Speak to god or use god?

00:05:12 --> 00:05:14
- Use God.

00:05:13 --> 00:05:14
Lex: Use God

00:05:17 --> 00:05:23
Vladimir: I believe that this article

00:05:23 --> 00:05:31
about Unreasonable Effectiveness of Math is that if you look

00:05:30 --> 00:05:33
at mathematical structures,

00:05:33 --> 00:05:37
they know something about reality.

00:05:37 --> 00:05:45
And most scientists from Natural Science, they look at an equation

00:05:44 --> 00:05:47
in trying to understand reality,

00:05:48 --> 00:05:51
so the same with machine learning.

00:05:51 --> 00:06:01
If you try to very carefully look on all the equations which define conditional probability,

00:06:00 --> 00:06:08
you can understand something about reality more than from your fantasy.

00:06:08 --> 00:06:14
Lex: So math can reveal the simple underlying principles of reality, perhaps.

00:06:13 --> 00:06:20
Vladimir: You know, what may seem simple, it is very hard to discover them.

00:06:20 --> 00:06:26
But then, when you discover them and look at them, you see how beautiful they are.

00:06:26 --> 00:06:36
And it is surprising why people did not see that before when you look at an equation and

00:06:35 --> 00:06:38
erive it from the equations.

00:06:37 --> 00:06:45
For example, I talked yesterday about the Least Squares Method and people had a lot

00:06:44 --> 00:06:48
of fantasies about improving least squares method.

00:06:48 --> 00:06:56
But if you look, going step by step by solving some equations, you suddenly will get some terms

00:06:56 --> 00:07:04
which after thinking; you understand it, the described position of an observation point.

00:07:04 --> 00:07:09
Least squares method, they throw out a lot of information.

00:07:08 --> 00:07:12
You don't look at the composition of point of observations.

00:07:11 --> 00:07:15
We're looking only on the details.

00:07:14 --> 00:07:22
But, when you understood that very simple idea, which is not too simple to understand

00:07:21 --> 00:07:26
you can derive this just from equations.

00:07:25 --> 00:07:32
Lex: So some simple Algebra, so a few steps will take you to something surprising that when

00:07:31 --> 00:07:33
you think about--

00:07:32 --> 00:07:34
Vladimir: Absolutely, yes.

00:07:34 --> 00:07:41
And that is proof that human intuition is not too rich

00:07:40 --> 00:07:44
and very primitive, and it does not see

00:07:43 --> 00:07:49
very simple situations.

00:07:48 --> 00:07:54
Lex: So let me take a step back, in general, yes.

00:07:54 --> 00:08:04
What about human ingenuity as opposed to intuition, the moments of brilliance?

00:08:06 --> 00:08:10
Do you have to be so hard on human intuition?

00:08:09 --> 00:08:15
Are there moments of brilliance on human intuition that can leap ahead of math,

00:08:14 --> 00:08:17
and then the math will catch up?

00:08:17 --> 00:08:20
Vladimir: I don't think so.

00:08:19 --> 00:08:29
I think the best human intuition, it is putting in axioms, then it is technical

00:08:28 --> 00:08:30
where you have to arrive.

00:08:29 --> 00:08:31
Lex: See where the axioms take you.

00:08:31 --> 00:08:32
Vladimir: Yeah.

00:08:31 --> 00:08:35
But if they correctly take axioms.

00:08:36 --> 00:08:45
Axioms are polished during generations of scientists and this is integral wisdom.

00:08:46 --> 00:08:48
Lex: That's beautifully put.

00:08:51 --> 00:08:59
When you think of Einstein and especially, relativity, what is the role of imagination

00:08:59 --> 00:09:04
coming first there in the moment of discovery of an idea?

00:09:04 --> 00:09:11
So, that's obviously a mix of math and out of the box imagination there.

00:09:10 --> 00:09:12
Vladimir: That, I don't know.

00:09:12 --> 00:09:21
Whatever I did, I exclude any imagination because whatever I saw in machine learning

00:09:20 --> 00:09:28
that come from imagination, like features, like deep learning, they're not really one

00:09:27 --> 00:09:29
to the problem.

00:09:29 --> 00:09:37
When you're looking very clearly from a mathematical equation, you'd arrive in very simple story

00:09:36 --> 00:09:43
which goes far beyond, theoretically, than whatever people can imagine because it is

00:09:42 --> 00:09:45
not good fantasies.

00:09:44 --> 00:09:47
It is just interpretation.

00:09:46 --> 00:09:52
It is just fantasy, but it is not what you need.

00:09:51 --> 00:10:00
You don't need any imagination to derive mind principle of machine learning.

00:09:59 --> 00:10:05
Lex: When you think about learning and intelligence, maybe thinking about the human brain in trying

00:10:04 --> 00:10:12
to describe mathematically the process of learning that is something like what happens

00:10:11 --> 00:10:16
in the human brain, do you think we have the tools, currently?

00:10:17 --> 00:10:22
Do you think we will ever have the tools to try to describe that process of learning?

00:10:22 --> 00:10:26
Vladimir: It is not description what's going on.

00:10:25 --> 00:10:28
It is interpretation.

00:10:27 --> 00:10:30
It is your interpretation.

00:10:29 --> 00:10:32
Your vision can be wrong.

00:10:32 --> 00:10:39
You know, when the guy who invented the microscope, Leeuwenhoek, for the first time,

00:10:38 --> 00:10:44
only he got this instrument and he kept it secret.

00:10:45 --> 00:10:49
But he wrote a report in the London Academy of Science.

00:10:49 --> 00:10:55
In his report, when he's looking on the blood, he looked everywhere--on the water, on the

00:10:54 --> 00:11:04
blood on those film, but he described blood like a fight between queens and kings.

00:11:04 --> 00:11:12
So he saw blood cells, red cells and he imagines it is like an army fighting each other.

00:11:12 --> 00:11:16
And it was his interpretation of the situation.

00:11:17 --> 00:11:21
And he sent it as a report in the Academy of Science.

00:11:20 --> 00:11:25
They very carefully looked because they believe that he is right.

00:11:24 --> 00:11:28
He saw something, but he gave a wrong interpretation.

00:11:28 --> 00:11:32
And I believe the same can happen with the brain.

00:11:33 --> 00:11:39
The most important part, you know, I believe in human language.

00:11:38 --> 00:11:43
In some proverbs, there's so much wisdom.

00:11:43 --> 00:11:52
For example, people say that it is better than a thousand days of diligent study

00:11:51 --> 00:11:54
is one day with a great teacher.

00:11:54 --> 00:11:59
But if you'll ask what the teacher does, nobody knows.

00:11:59 --> 00:12:01
And that is intelligence.

00:12:01 --> 00:12:09
But we know from history, and now from machine learning

00:12:08 --> 00:12:13
is that a teacher can do a lot.

00:12:12 --> 00:12:17
Lex: So what from a mathematical point of view is a great teacher?

00:12:16 --> 00:12:25
Vladimir: I don't know, but we can say what a teacher can do.

00:12:25 --> 00:12:33
He can introduce some invariants, some predicate for creating invariants.

00:12:32 --> 00:12:38
How is he doing it, I don't know, because a teacher knows reality and can describe from

00:12:37 --> 00:12:42
his reality a predicate and invariants.

00:12:41 --> 00:12:46
But we know when you're using invariant, you can decrease the number of observations

00:12:45 --> 00:12:48
a hundred times.

00:12:50 --> 00:12:56
Lex: Maybe try to pull that apart a little bit, but I think you mentioned that like a piano

00:12:55 --> 00:13:00
teacher saying to the student, "Play like a butterfly."

00:12:59 --> 00:13:01
I played piano.

00:13:00 --> 00:13:03
I played the guitar for a long time

00:13:07 --> 00:13:11
and maybe it's romantic and poetic, but it feels like

00:13:10 --> 00:13:16
there's a lot of truth in that statement, like there's a lot of instruction to that statement.

00:13:15 --> 00:13:19
Can you pull that apart?

00:13:18 --> 00:13:20
What is that?

00:13:19 --> 00:13:23
The language itself may not contain this information.

00:13:22 --> 00:13:27
Vladimir: It's not blah, blah, blah because it affects you.

00:13:26 --> 00:13:28
It's what?

00:13:27 --> 00:13:30
Affects you, affects your playing.

00:13:29 --> 00:13:31
Lex: Yes it does,

00:13:35 --> 00:13:39
but what is the information being exchanged there?

00:13:38 --> 00:13:40
What is the nature of information?

00:13:39 --> 00:13:42
What is the representation in that information?

00:13:41 --> 00:13:46
Vladimir: I believe that it is a sort of predicate, but I don't know.

00:13:45 --> 00:13:50
That is exactly what intelligence in machine learning should be

00:13:50 --> 00:13:53
cause the rest is just mathematical technique.

00:13:53 --> 00:14:03
I think that what was discovered recently is that there are two mechanisms of learning.

00:14:03 --> 00:14:09
One is called strong convergence mechanism and big convergence mechanism.

00:14:08 --> 00:14:12
Before, people used only one convergence.

00:14:11 --> 00:14:16
In big convergence, you can use predicate.

00:14:15 --> 00:14:24
That's what "fly like butterfly" is and if you immediately effect your plan.

00:14:23 --> 00:14:32
You know there is an English proverb which is "If it looks like a duck, sleeps like a duck,

00:14:31 --> 00:14:36
and quack like a duck, then it is probably a duck."

00:14:36 --> 00:14:40
But this is exact about predicate.

00:14:40 --> 00:14:43
It looks like a duck, what does it mean?

00:14:42 --> 00:14:48
So, you saw many ducks--that's your training data.

00:14:47 --> 00:14:57
You have a description that looks like ducks.

00:14:56 --> 00:15:01
Lex: Yeah, the visual characteristics of a duck, yeah.

00:15:00 --> 00:15:05
Vladimir: Yeah, and you have a model for recognizing ducks.

00:15:04 --> 00:15:11
So you would like that theoretical description from the model to coincide.

00:15:10 --> 00:15:14
There's empirical description which you saw.

00:15:14 --> 00:15:19
So, about "it looks like a duck," it is general.

00:15:18 --> 00:15:21
But, what about swims like a duck?

00:15:21 --> 00:15:24
You should know that ducks swim.

00:15:23 --> 00:15:27
You can't say it plays chess like a duck.

00:15:26 --> 00:15:29
Okay, ducks doesn't play chess.

00:15:28 --> 00:15:35
It's a completely legal predicate but it is useless.

00:15:35 --> 00:15:41
So, how can a teacher recognize a non-useless predicate?

00:15:41 --> 00:15:47
So, up to now, we don't use this predicate in existing machine learning,

00:15:47 --> 00:15:50
so why do we need zillions of data?

00:15:50 --> 00:15:57
But this English proverb say use only three predicates--looks like a duck,

00:15:56 --> 00:16:00
swims like a duck and quack like a duck.

00:15:59 --> 00:16:06
Lex: So you can't deny the fact that swims like a duck and quacks like a duck has humor

00:16:05 --> 00:16:09
in it, has ambiguity?

00:16:08 --> 00:16:12
Vladimir: Let's talk about "swims like a duck."

00:16:12 --> 00:16:18
It does not say jumps like a duck, why?

00:16:17 --> 00:16:20
Lex: It's not relevant.

00:16:20 --> 00:16:27
Vladimir: It means that you know ducks and you know different birds.

00:16:26 --> 00:16:33
You know animals and you derived from this that it is relevant to say "swim like a duck."

00:16:34 --> 00:16:39
Lex: So in order for us to understand "swims like a duck," it feels like we need to know

00:16:38 --> 00:16:45
millions of other little pieces of information we pick up along the way.

00:16:44 --> 00:16:46
You don't think so?

00:16:45 --> 00:16:53
That doesn't need to be this knowledge-based, in those statements, carry some rich information

00:16:52 --> 00:16:56
that helps us understand the essence of duck?

00:16:55 --> 00:16:56
Vladimir: Yeah.

00:16:57 --> 00:17:02
Lex: How far are we from integrating predicates?

00:17:01 --> 00:17:10
Vladimir: You know that when you can see the complete story of machine learning, so what it does,

00:17:09 --> 00:17:12
you have a lot of functions,

00:17:12 --> 00:17:17
and then you're talking it looks like a duck.

00:17:17 --> 00:17:21
You see your training data.

00:17:20 --> 00:17:31
From the training data, you recognize what the expected duck should look like.

00:17:31 --> 00:17:39
Then, you remove all functions which do not look like what you think it should look from

00:17:38 --> 00:17:40
the training data.

00:17:40 --> 00:17:46
So, you decrease the amount of function from which you pick up one.

00:17:45 --> 00:17:52
Then, you give a second predicate and again, they create a set of functions.

00:17:51 --> 00:17:56
And after that, you pick up the best function you can.

00:17:55 --> 00:17:58
It is standard machine learning.

00:17:57 --> 00:18:02
So, why do you need not too many examples?

00:18:03 --> 00:18:06
Lex: Because your predicates are very good.

00:18:05 --> 00:18:15
Vladimir: Yeah, that's exactly basic predicate because every predicate is invented to decrease the

00:18:14 --> 00:18:17
admissible set of functions.

00:18:17 --> 00:18:23
Lex: So you talk about admissible set of functions and you talk about good functions.

00:18:22 --> 00:18:25
So what makes a good function?

00:18:24 --> 00:18:33
Vladimir: So admissible set of function is a set of function which has a small capacity or small

00:18:32 --> 00:18:38
diversity, a small dimension, which contains good functions inside.

00:18:37 --> 00:18:43
Lex: By the way, for people who don't know VC, you're the V in the VC.

00:18:44 --> 00:18:50
So how would you describe to a lay person what VC theories are?

00:18:50 --> 00:18:52
How would you describe VC?

00:18:51 --> 00:18:54
Vladimir: When you have a machine,

00:18:54 --> 00:18:59
a machine capable to pick up one function

00:18:58 --> 00:19:02
from the admissible set of function.

00:19:03 --> 00:19:07
But the set of admissible functions can be big.

00:19:07 --> 00:19:12
They contain all continuous functions and theories.

00:19:11 --> 00:19:15
You don't have so many examples to pick up functions.

00:19:14 --> 00:19:17
But it can be small--

00:19:20 --> 00:19:28
what we call capacity, but maybe diversity-- so not very different functions in the settings,

00:19:27 --> 00:19:31
an infinite set of functions but not very diverse.

00:19:30 --> 00:19:37
So, if it's a small VC dimension and when the VC dimension is small,

00:19:36 --> 00:19:41
you need a small amount of training data.

00:19:41 --> 00:19:52
So the goal is to create admissible set of functions which have small VC dimension

00:19:51 --> 00:19:54
and contains good functions.

00:19:53 --> 00:20:01
Then, you'll be able to pick up the function using a small amount of observations.

00:20:02 --> 00:20:12
Lex: So that is the task of learning is creating a set of admissible functions

00:20:11 --> 00:20:13
that has a small VC dimension

00:20:12 --> 00:20:19
and then you figure out a clever way of picking up the good.

00:20:18 --> 00:20:23
Vladimir: That is the goal of learning which I formulated yesterday.

00:20:22 --> 00:20:31
Statistical learning theory does not involve creating admissible set of functions.

00:20:30 --> 00:20:38
In classical learning theory everywhere, in 100% of textbooks, the admissible set of functions

00:20:37 --> 00:20:45
is given, but this is telling us about nothing because the most difficult problem is to create

00:20:44 --> 00:20:49
admissible set of functions given, say,

00:20:49 --> 00:20:54
a lot of functions, a continuous set of functions.

00:20:53 --> 00:21:01
Create admissible set of functions, that means that the finite VC dimension, small VC dimension

00:21:00 --> 00:21:02
and contains good functions.

00:21:01 --> 00:21:06
So, this was out of consideration.

00:21:05 --> 00:21:09
Lex: So what's the process of doing that, I mean, that's fascinating?

00:21:08 --> 00:21:14
What is the process of creating this admissible set of functions?

00:21:13 --> 00:21:15
Vladimir: That is invariance.

00:21:14 --> 00:21:16
Lex: That's invariance.

00:21:15 --> 00:21:18
Can you describe invariance?

00:21:17 --> 00:21:19
Vladimir: Yeah.

00:21:18 --> 00:21:31
You have to think of properties of the training data and properties means they have some function

00:21:30 --> 00:21:39
and you just count what is the average value of function of training data.

00:21:39 --> 00:21:45
You have a model and what is the expectation of this function on the model

00:21:44 --> 00:21:47
and they should coincide.

00:21:46 --> 00:21:52
So, the problem is about how to pick up functions.

00:21:51 --> 00:21:54
It can be any function.

00:21:56 --> 00:22:00
In fact, it is true for all functions,

00:22:02 --> 00:22:09
but when I say a duck doesn't jump, so you don't

00:22:08 --> 00:22:14
ask a question on "jumps like a duck" because it is trivial.

00:22:13 --> 00:22:16
It does not jump, so it does not help you at all.

00:22:16 --> 00:22:25
But you know something on which questions to ask like when you ask "swims like a duck."

00:22:24 --> 00:22:28
But "looks like a duck," it is a general situation.

00:22:27 --> 00:22:38
But, looks like, say, a guy who has this illness, this disease, it is legal.

00:22:38 --> 00:22:48
So, there is a general type of predicate, "It looks like," and a special type of predicate

00:22:47 --> 00:22:51
which is related to this specific problem.

00:22:50 --> 00:22:57
And that is the intelligence part of this business and that is where a teacher is involved.

00:22:56 --> 00:23:00
Lex: Incorporating the specialized predicates.

00:22:59 --> 00:23:01
Vladimir: Yes.

00:23:00 --> 00:23:02
Lex: Okay.

00:23:01 --> 00:23:09
What do you think about deep learning as neural networks, these architectures,

00:23:08 --> 00:23:14
as helping accomplish some of the tasks you're thinking about?

00:23:13 --> 00:23:16
Their effectiveness or lack thereof,

00:23:15 --> 00:23:18
what are the weaknesses

00:23:17 --> 00:23:20
and what are the possible strengths?

00:23:19 --> 00:23:29
Vladimir: You know, I think that this is fantasy, everything like deep learning, like features.

00:23:29 --> 00:23:33
Let me give you this example.

00:23:33 --> 00:23:39
One of the greatest books is Churchill's book about the history of the Second World War.

00:23:39 --> 00:23:47
He starts in his book describing that in the old times when a war is over,

00:23:49 --> 00:23:53
the great kings,

00:23:52 --> 00:24:01
they gather together--and most of them are relatives--and they discuss what should be

00:24:00 --> 00:24:05
done to create peace and they come to an agreement.

00:24:04 --> 00:24:08
And what happens in the First World War?

00:24:10 --> 00:24:14
The general public came in power.

00:24:13 --> 00:24:18
They were so greedy that robbed Germany.

00:24:18 --> 00:24:25
It was clear for everybody that it is not peace, that peace will only last for 20 years

00:24:24 --> 00:24:29
because they were not professionals.

00:24:28 --> 00:24:32
I see the same in machine logic.

00:24:32 --> 00:24:41
There are mathematicians looking for the problem from a very deep mathematical point of view

00:24:40 --> 00:24:47
and there are computer scientists that mostly do not know mathematics.

00:24:46 --> 00:24:53
They just have interpretations of that and they invented a lot of blah, blah interpretations

00:24:52 --> 00:24:54
like deep learning.

00:24:53 --> 00:24:56
Why did you do deep learning?

00:24:55 --> 00:24:58
Mathematics does not know deep learning.

00:24:57 --> 00:25:03
Mathematics does not know neurons; it is just functions.

00:25:02 --> 00:25:07
If you like to say piecewise linear function, say that

00:25:06 --> 00:25:11
and do it in a class of piecewise linear function.

00:25:10 --> 00:25:19
But they invented something and then they tried to prove the advantage of that

00:25:18 --> 00:25:23
hrough interpretations, which was mostly wrong.

00:25:22 --> 00:25:28
And when it is not enough, they appeal to the brain and they say they know nothing about that.

00:25:27 --> 00:25:31
Nobody knows what's going in the brain.

00:25:30 --> 00:25:35
So, I think it is more reliable to work on math.

00:25:34 --> 00:25:40
This is a mathematical problem, do your best to solve this problem.

00:25:39 --> 00:25:45
Try to understand that there is not only one way of convergence,

00:25:44 --> 00:25:47
which is the strong way of convergence.

00:25:46 --> 00:25:50
There is a big way of convergence which requires predicates.

00:25:49 --> 00:25:56
And if you will go through all this stuff, you will see that you don't need deep learning.

00:25:56 --> 00:26:04
Even more, I would say one of the theorems, which is called Representer theorem,

00:26:03 --> 00:26:12
it says that optimal solution of mathematical problems,

00:26:11 --> 00:26:20
which describe learning, is on a shallow network,

00:26:19 --> 00:26:21
not on deep learning.

00:26:20 --> 00:26:23
Lex: On a shallow network.

00:26:22 --> 00:26:25
Yeah, the problem is there.

00:26:24 --> 00:26:29
Absolutely. So, in the end, what you're saying is exactly right.

00:26:29 --> 00:26:38
The question is, you have no value for throwing something on the table, playing with it--not math.

00:26:37 --> 00:26:44
It's like a neural network where you said throwing something in the bucket or the biological

00:26:43 --> 00:26:48
example in looking at kings and queens or the cells on the microscope, you don't see

00:26:47 --> 00:26:56
value in imagining the cells or the kings and queens and using that as inspiration,

00:26:55 --> 00:27:00
an imagination for where the math will eventually lead you?

00:26:59 --> 00:27:06
Do you think that interpretation basically deceives you in a way that's not productive?

00:27:06 --> 00:27:15
Vladimir: I think that if you're trying to analyze this business of learning

00:27:14 --> 00:27:19
and especially, the discussion about deep learning,

00:27:18 --> 00:27:23
it is a discussion about interpretations and not about things,

00:27:22 --> 00:27:26
about what you can say about things.

00:27:26 --> 00:27:27
Lex: That's right.

00:27:26 --> 00:27:34
But, aren't you surprised by the beauty of it, not mathematical beauty but the fact

00:27:33 --> 00:27:36
hat it works at all?

00:27:35 --> 00:27:45
Or, are you criticizing that very beauty, our human desire to interpret,

00:27:44 --> 00:27:49
to find our silly interpretations in these constructs?

00:27:49 --> 00:27:58
Like, let me ask you this, are you surprised or does it inspire you, how do you feel about

00:27:57 --> 00:28:03
he success of a system like AlphaGo at beating the game of Go

00:28:03 --> 00:28:06
using neural networks to estimate

00:28:06 --> 00:28:10
the quality of a board?

00:28:11 --> 00:28:15
Vladimir: That is your interpretation--quality of the board.

00:28:14 --> 00:28:16
Lex: Yes.

00:28:16 --> 00:28:20
It is not our interpretation.

00:28:20 --> 00:28:25
The fact is a neural network system--it doesn't matter--a learning system

00:28:25 --> 00:28:30
that we don't, I think, mathematically, understand that well, beats the best human player,

00:28:29 --> 00:28:32
that's something that was thought impossible.

00:28:31 --> 00:28:35
Vladimir: That means it's not a very difficult problem. That's it.

00:28:34 --> 00:28:41
Lex: So we've empirically have discovered that this is not a very difficult problem.

00:28:42 --> 00:28:43
That's true.

00:28:46 --> 00:28:48
I can't argue.

00:28:50 --> 00:28:59
Vladimir: Even more, I would say, if they used deep learning, it is not the most effective way

00:28:58 --> 00:29:00
of learning theory.

00:28:59 --> 00:29:08
And usually, when people use deep learning, they're using zillions of training data,

00:29:09 --> 00:29:13
but you don't need this.

00:29:13 --> 00:29:21
So when I describe a challenge, can we do some problems that you did well

00:29:20 --> 00:29:24
with deep learning method, with deepnet,

00:29:23 --> 00:29:28
using a hundred times less training data?

00:29:27 --> 00:29:37
Even more, there are some problems that deep learning cannot solve because it's not necessarily

00:29:36 --> 00:29:41
that they created admissible set of functions.

00:29:40 --> 00:29:46
To create deep architecture means to create admissible set of functions.

00:29:45 --> 00:29:50
You cannot say that you're creating good admissible set of functions.

00:29:50 --> 00:29:53
It's your fantasy.

00:29:52 --> 00:29:55
It does not come from us.

00:29:54 --> 00:30:02
But, it is possible to create admissible set of functions because you have your training data

00:30:01 --> 00:30:09
Actually, for mathematicians, when you consider a variant,

00:30:08 --> 00:30:12
you need to use the law of large numbers.

00:30:11 --> 00:30:21
When you make a training in existing algorithms, you need a uniform law of large numbers,

00:30:20 --> 00:30:23
which is much more difficult.

00:30:22 --> 00:30:25
It requires VC dimension and all that stuff.

00:30:25 --> 00:30:34
But nevertheless, if you use both big and strong way of convergence, you can decrease

00:30:33 --> 00:30:35
a lot of training data.

00:30:34 --> 00:30:40
Lex: Yeah, you could do the three--that swims like a duck and quacks like a duck.

00:30:41 --> 00:30:48
So let's step back and think about human intelligence in general.

00:30:48 --> 00:30:51
And clearly, that has evolved

00:30:50 --> 00:30:53
in a non-mathematical way.

00:30:55 --> 00:31:05
Lex: As far as we know, God or whoever didn't come up with a model and placed in our brain

00:31:04 --> 00:31:07
of admissible functions; it kind of evolved.

00:31:06 --> 00:31:16
I don't know your view on this but Alan Turing in the 50's in his paper asked and interjected

00:31:15 --> 00:31:18
the question: Can machines think?

00:31:17 --> 00:31:24
It's not a very useful question, but can you briefly entertain this useless question

00:31:24 --> 00:31:26
"Can machines think?"

00:31:25 --> 00:31:29
So, talk about intelligence and your view of it.

00:31:28 --> 00:31:30
Vladimir: I don't know that.

00:31:29 --> 00:31:40
I know that Turing described imitation--if a computer can imitate a human being.

00:31:39 --> 00:31:47
Let's call it intelligence and he understands that it is not a thinking computer.

00:31:46 --> 00:31:54
He completely understands what he was doing, but he set up a problem of imitation.

00:31:53 --> 00:31:58
So now we understand it as a problem of not an imitation.

00:31:57 --> 00:32:04
I'm not sure that intelligence is just inside of us.

00:32:04 --> 00:32:07
It may also be outside of us.

00:32:06 --> 00:32:09
I have several observations,

00:32:09 --> 00:32:15
so when I prove some theorems, it's very difficult theorems.

00:32:16 --> 00:32:23
In a couple of years, in several places, people will prove the same theorem, say,

00:32:22 --> 00:32:26
saw a dilemma after ours was done,

00:32:25 --> 00:32:29
then another guy proves the same theorem.

00:32:28 --> 00:32:32
In the history of science, it has happened all the time.

00:32:32 --> 00:32:38
For example, geometry, it happens simultaneously.

00:32:37 --> 00:32:44
First is Lobachevsky and then Gauss and Bolyai and then other guys, and approximately,

00:32:43 --> 00:32:49
in a ten-year period of time,

00:32:48 --> 00:32:52
and I saw a lot of examples like that.

00:32:51 --> 00:32:58
And when a mathematician thinks it, when they develop something, they develop something

00:32:57 --> 00:33:01
in general which affects everybody.

00:33:01 --> 00:33:08
So, maybe our model of intelligence is only inside of us is incorrect.

00:33:07 --> 00:33:10
Lex: It's our interpretation. Yeah.

00:33:09 --> 00:33:16
Vladimir: It may be that they exist with some connection with world intelligence.

00:33:15 --> 00:33:17
I don't know that.

00:33:16 --> 00:33:19
Lex: You're almost like plugging in into...

00:33:18 --> 00:33:21
Vladimir: Yeah, exactly.

00:33:20 --> 00:33:23
Lex: ...and contributing to this.

00:33:22 --> 00:33:25
Vladimir: ...into a big network.

00:33:24 --> 00:33:27
Lex: Into a big, maybe a neural network.

00:33:28 --> 00:33:38
On the flip side of that, maybe you can comment on the big O complexity and how you see classifying

00:33:37 --> 00:33:42
algorithms by worst-case running time in relation to their input.

00:33:41 --> 00:33:48
So, that way of thinking about functions, do you think P equals un-P?

00:33:47 --> 00:33:50
Do you think that's an interesting question?

00:33:49 --> 00:33:52
Vladimir: Yeah, it is an interesting question.

00:33:51 --> 00:34:00
But let me talk about complexity and about worst-case scenario.

00:34:01 --> 00:34:05
There is a mathematical setting.

00:34:04 --> 00:34:10
When I came to the United States in 1991, people did not know this.

00:34:09 --> 00:34:13
They did not know statistical learning theorem.

00:34:13 --> 00:34:21
In Russia, it was published in our monographs, but in America, they did not know,

00:34:20 --> 00:34:22
and then, they learned it.

00:34:22 --> 00:34:28
Somebody told me that it was worst-case theory and they will create real-case theory,

00:34:28 --> 00:34:31
but until now, they haven't.

00:34:30 --> 00:34:38
Because it is a mathematical tool, you can do only what you can do using mathematics,

00:34:38 --> 00:34:44
which is clear understanding and clear description.

00:34:46 --> 00:34:51
For this reason, we introduced complexity.

00:35:01 --> 00:35:05
In VC dimension you can prove some theorems.

00:35:05 --> 00:35:13
But we also create theory for cases when you know probability measure

00:35:12 --> 00:35:16
and that is the best case it can happen.

00:35:17 --> 00:35:23
So from a mathematical point of view, you know the best possible case

00:35:22 --> 00:35:25
is the worst possible case.

00:35:25 --> 00:35:31
You can derive different models in the middle, but it's not so interesting.

00:35:30 --> 00:35:34
Lex: Do you think the edges are interesting?

00:35:33 --> 00:35:45
Vladimir: The edges are interesting because it is not so easy to get the exact bounds.

00:35:44 --> 00:35:52
It's not, in many cases where you have the bounds are not exact, but interesting principles

00:35:51 --> 00:35:55
are discovered the most.

00:35:54 --> 00:36:01
Lex: Do you think it's interesting because it's challenging and reveals interesting principles

00:36:00 --> 00:36:05
that allow you to get those bounds or do you think it's interesting because it's actually

00:36:04 --> 00:36:11
very useful for understanding the essence of a function of an algorithm?

00:36:10 --> 00:36:18
So, it's like me judging your life as a human being by the worst thing you did and the best

00:36:17 --> 00:36:21
hing you did versus all the stuff in the middle.

00:36:21 --> 00:36:25
It seems not productive.

00:36:25 --> 00:36:34
Vladimir: I don't think so because you cannot describe situations in the middle or it will not be general.

00:36:34 --> 00:36:45
So you can describe edge cases and it is clear it has some models, but you cannot describe

00:36:44 --> 00:36:47
a model for every new case.

00:36:47 --> 00:36:54
So, you'll never be accurate when you're using models.

00:36:53 --> 00:36:59
Lex: But, from a statistical point of view, the way you studied functions

00:36:58 --> 00:37:02
and the nature of learning and the world,

00:37:01 --> 00:37:07
don't you think that the real world has a very long tail

00:37:07 --> 00:37:13
that the edge cases are very far away from the mean,

00:37:14 --> 00:37:18
the stuff in the middle, or no?

00:37:19 --> 00:37:22
Vladimir: I don't know that.

00:37:21 --> 00:37:28
I think that from my point of view,

00:37:30 --> 00:37:34
if youwill use formal statistics,

00:37:34 --> 00:37:39
you need uniform law of large numbers,

00:37:40 --> 00:37:48
if you will use this invariance business,

00:37:48 --> 00:37:52
you don't need just law of large numbers.

00:37:51 --> 00:37:57
And there's a huge difference between uniform law of large numbers and large numbers.

00:37:56 --> 00:38:02
Lex: Is it useful to describe that a little more or shall we just take it at...

00:38:01 --> 00:38:08
Vladimir: No. For example, when I'm talking about ducks, I get three predicates and that was enough.

00:38:09 --> 00:38:15
But, if you will try to do formally distinguish,

00:38:14 --> 00:38:18
you will need a lot of observations.

00:38:19 --> 00:38:28
So that means that information about "looks like a duck" contained a lot of bit of information

00:38:27 --> 00:38:30
formal bits of information.

00:38:29 --> 00:38:40
So we don't know how much bit of information is contained from intelligence

00:38:39 --> 00:38:43
and that is a subject of analysis.

00:38:42 --> 00:38:44
Until now,

00:38:45 --> 00:38:55
on business, I don't have people consider artificial intelligence.

00:38:54 --> 00:39:01
They consider it as some codes which imitate activities of human beings.

00:39:01 --> 00:39:03
It is not science.

00:39:02 --> 00:39:04
It is applications.

00:39:03 --> 00:39:06
You would like to imitate Go.

00:39:05 --> 00:39:10
Okay, it's very useful and a good problem,

00:39:09 --> 00:39:16
but you need to learn something more

00:39:15 --> 00:39:22
on how people came to develop, say,

00:39:21 --> 00:39:28
predicates "sleeps like a duck" or "fly like a butterfly"

00:39:27 --> 00:39:29
or something like that.

00:39:28 --> 00:39:38
It's not that the teacher tells you how it came to his mind, how he chooses the image.

00:39:37 --> 00:39:40
That is a problem of intelligence.

00:39:39 --> 00:39:42
Lex: That is the problem of intelligence.

00:39:41 --> 00:39:46
And you see that connected to the problem of learning?

00:39:45 --> 00:39:47
Are they?

00:39:46 --> 00:39:52
Vladimir: Absolutely, because you immediately give this predicate like specific predicates

00:39:51 --> 00:39:54
"swims like a duck" or "quacks like a duck."

00:39:54 --> 00:39:58
It was chosen somehow.

00:39:57 --> 00:40:05
Lex: So what is the line of work, would you say, if you were to formulate as a set of open problems

00:40:06 --> 00:40:12
that will take us there, to fly like a butterfly, we'll get a system to be able to?

00:40:11 --> 00:40:19
Vladimir: Let's separate two stories--one mathematical story that if you have predicates

00:40:18 --> 00:40:20
you can do something,

00:40:20 --> 00:40:23
and another story on how to get predicates.

00:40:23 --> 00:40:32
It is an intelligence problem and people even did not start understanding intelligence.

00:40:31 --> 00:40:38
Because to understand intelligence, first of all, try to understand what they will teach us,

00:40:39 --> 00:40:44
how a teacher teach, why one teacher is better than another one.

00:40:44 --> 00:40:51
Lex: Yeah. And so, do you think we really even haven't started on the journey of generating the predicates?

00:40:50 --> 00:40:53
Vladimir: No. We don't understand.

00:40:52 --> 00:40:56
We even don't understand that this problem exists.

00:40:57 --> 00:40:59
Lex: You do.

00:40:59 --> 00:41:02
Vladimir: No. I just know a name.

00:41:02 --> 00:41:08
I won't understand why one teacher is better than another

00:41:08 --> 00:41:13
and how the teacher affects the student.

00:41:13 --> 00:41:18
It is not because he is repeating the problem which is in the textbooks.

00:41:18 --> 00:41:20
He makes some remarks.

00:41:20 --> 00:41:24
He makes some philosophy of reasoning.

00:41:23 --> 00:41:26
Lex: Yeah, that's beautiful.

00:41:25 --> 00:41:32
It is a formulation of a question that is the open problem:

00:41:31 --> 00:41:34
Why is one teacher better than another?

00:41:33 --> 00:41:35
Vladimir: Right.

00:41:35 --> 00:41:37
What he does about it.

00:41:39 --> 00:41:42
Lex: "Why" at every level.

00:41:42 --> 00:41:45
How did they get better?

00:41:44 --> 00:41:47
What does it mean to be better?

00:41:49 --> 00:41:53
Vladimir: Yeah. From whatever model I have,

00:41:53 --> 00:41:57
one teacher can give a very good predicate.

00:41:56 --> 00:42:03
One teacher can say "swims like a duck" and another can say "jumps like a duck."

00:42:03 --> 00:42:08
And jumps like a duck carries zero information.

00:42:09 --> 00:42:16
Lex: So what is the most exciting problem in statistical learning you ever worked on or are working on now?

00:42:17 --> 00:42:22
Vladimir: I just finished this invariance story

00:42:22 --> 00:42:26
and I'm happy that I believe that

00:42:25 --> 00:42:30
it is an ultimate learning story.

00:42:30 --> 00:42:36
At least, I can show that there are no other mechanisms.

00:42:35 --> 00:42:45
There are only two mechanisms but they separate statistical parts from intelligence parts

00:42:44 --> 00:42:48
and I know nothing about the intelligence part.

00:42:48 --> 00:42:57
And if you will know there's the intelligence part, it will help us a lot in teaching

00:42:57 --> 00:43:00
and in learning.

00:42:59 --> 00:43:03
Lex: And we'll know it when we see it?

00:43:02 --> 00:43:07
So for example, in my talk, in the last slide was a challenge.

00:43:06 --> 00:43:11
So you have a NIST digit recognition problem

00:43:11 --> 00:43:17
and deep learning claims that they did it very well

00:43:16 --> 00:43:22
say 99.5% correct answers,

00:43:21 --> 00:43:25
but they used 60,000 observations.

00:43:25 --> 00:43:32
Can you do the same using a hundred times less but incorporating invariants,

00:43:31 --> 00:43:35
what it means, you know, digit 1, 2, 3?

00:43:34 --> 00:43:46
Just looking on that, explain the vision variant I should keep, to use a hundred times less

00:43:45 --> 00:43:47
examples, to do the same job.

00:43:48 --> 00:43:57
Lex: Yeah, that last slide, unfortunately, your talk ended quickly, but that last slide was

00:43:56 --> 00:44:03
a powerful open challenge and a formulation of the essence there.

00:44:02 --> 00:44:13
Vladimir: That is the exact problem of intelligence because everybody, when machine learning started

00:44:12 --> 00:44:18
and it was developed by mathematicians, they immediately recognized that they use much

00:44:17 --> 00:44:22
more training data than humans needed.

00:44:22 --> 00:44:27
But now, again, we came to the same story of how to decrease.

00:44:27 --> 00:44:31
That is a problem of learning.

00:44:30 --> 00:44:36
It is not like in deep learning, they use zillions of training data

00:44:35 --> 00:44:39
because maybe zillions are not enough

00:44:38 --> 00:44:44
if you have a good invariance.

00:44:44 --> 00:44:50
Maybe, you'll never collect some number of observations.

00:44:49 --> 00:44:55
But now, it is a question of intelligence on how to do that

00:44:55 --> 00:44:58
because the statistical part is ready.

00:44:58 --> 00:45:04
As soon as you supply us this predicate, we can do a good job

00:45:03 --> 00:45:07
with the small amount of observations

00:45:06 --> 00:45:13
and the very first challenges of a long digital cognition and you know digits

00:45:12 --> 00:45:16
and 12 invariants.

00:45:15 --> 00:45:23
I'm thinking about that and I can say for digit 3, I would introduce the concept

00:45:22 --> 00:45:34
of horizontal symmetry, so digit 3 has horizontal symmetry more than digit 2 or something like that.

00:45:34 --> 00:45:42
But as soon as I get the horizontal symmetry, I can mathematically invent a lot of measure

00:45:41 --> 00:45:48
of horizontal symmetry or the vertical symmetry or the diagonal symmetry, whatever,

00:45:47 --> 00:45:50
if I have the ideal symmetry.

00:45:49 --> 00:45:51
What would it tell us?

00:45:52 --> 00:46:07
Looking on digits, I see that it is a meta-predicate which is not shaped into something like symmetry,

00:46:06 --> 00:46:12
like how dark is the whole picture, something like that,

00:46:13 --> 00:46:16
which can certify as a predicate.

00:46:16 --> 00:46:28
Lex: Do you think such a predicate could rise out of something that's not general,

00:46:27 --> 00:46:36
meaning, it feels like for me to be able to understand the difference between the two and the three,

00:46:35 --> 00:46:47
I would need to have had a childhood of 10 to 15 years playing with kids, going to school,

00:46:47 --> 00:46:50
being yelled at by parents,

00:46:50 --> 00:46:56
all of that, walking, jumping, looking at ducks.

00:46:56 --> 00:47:02
And now, then, I would be able to generate the right predicate for telling the difference

00:47:01 --> 00:47:07
between a two and a three, or do you think there's a more efficient way?

00:47:06 --> 00:47:08
Vladimir:I don't know.

00:47:07 --> 00:47:13
I know for sure that you must know something more than digits.

00:47:12 --> 00:47:15
Lex: Yes, and that's a powerful statement.

00:47:15 --> 00:47:25
Vladimir: Yeah, but maybe there are several languages of description around these elements of digits.

00:47:24 --> 00:47:30
So, I'm talking about symmetry, about some properties of geometry.

00:47:29 --> 00:47:33
I'm talking about something abstract.

00:47:32 --> 00:47:39
I don't know about that, but it is a problem of intelligence.

00:47:38 --> 00:47:48
So in one of our articles, it is trivial to show that every example can carry not more

00:47:47 --> 00:47:58
than one bit of information because when you show an example and you say, this is a one,

00:47:57 --> 00:48:03
you can remove functions which doesn't tell you one.

00:48:02 --> 00:48:09
The best strategy if you can do it perfectly is to remove half of that.

00:48:09 --> 00:48:16
But when you use one predicate which is "looks like a duck," you can remove

00:48:15 --> 00:48:18
much more functions in half,

00:48:18 --> 00:48:25
and that means it contains a lot of bit of information from a formal point of view.

00:48:25 --> 00:48:32
But, when you have a general picture,

00:48:31 --> 00:48:34
on whatyou want to recognize

00:48:33 --> 00:48:36
and a general picture of the world,

00:48:36 --> 00:48:40
can you invent this predicate?

00:48:40 --> 00:48:46
And, that predicate carries a lot of information.

00:48:47 --> 00:48:49
Lex: Beautifully put.

00:48:48 --> 00:48:56
Maybe it's just me, but in all the math you show in your work, which is some of the most

00:48:55 --> 00:49:01
profound mathematical work in the field of learning AI and just math, in general,

00:49:01 --> 00:49:05
I hear a lot of poetry and philosophy.

00:49:04 --> 00:49:10
You really kind of talk about philosophy of science.

00:49:09 --> 00:49:14
There's a poetry in music to a lot of the work you're doing and the way you're thinking

00:49:13 --> 00:49:17
about it, so where does that come from?

00:49:16 --> 00:49:19
Do you escape to poetry?

00:49:18 --> 00:49:21
Do you escape to music?

00:49:20 --> 00:49:24
Vladimir: I think that there exists ground truths

00:49:26 --> 00:49:30
and that can be seen everywhere.

00:49:30 --> 00:49:38
The smart guy philosopher, sometimes I'm surprised how they see deeply.

00:49:38 --> 00:49:44
Sometimes I see that some of them are completely out of subject.

00:49:45 --> 00:49:50
But the ground truths, I see in music.

00:49:50 --> 00:49:52
Lex: Music are the ground truth?

00:49:51 --> 00:49:53
Vladimir: Yeah.

00:49:53 --> 00:50:01
And in poetry, many poetry, they believe that they take dictation.

00:50:01 --> 00:50:13
Lex: So what piece of music as a piece of empirical evidence gave you a sense that they are touching

00:50:12 --> 00:50:14
something in the ground truth?

00:50:14 --> 00:50:16
Vladimir: It is structure.

00:50:16 --> 00:50:19
Lex: The structure, the math of music.

00:50:18 --> 00:50:25
Vladimir: Because when you're listening to Bach, you see the structure--very clear, very classic,

00:50:24 --> 00:50:26
very simple.

00:50:25 --> 00:50:33
And the same it was when you have axioms in geometry, you have the same feeling.

00:50:33 --> 00:50:36
And in poetry, sometimes, this is the same.

00:50:35 --> 00:50:37
Lex: Yeah.

00:50:38 --> 00:50:43
And if you look back to your childhood, you grew up in Russia.

00:50:42 --> 00:50:48
You maybe were born as a researcher in Russia, you developed as a researcher in Russia.

00:50:47 --> 00:50:52
You came to the United States and a few places.

00:50:51 --> 00:50:59
If you look back, what were some of your happiest moments as a research?

00:50:59 --> 00:51:02
Some of the most profound moments,

00:51:02 --> 00:51:06
not in terms of their impact on society,

00:51:05 --> 00:51:12
but in terms of their impact on how damn good

00:51:11 --> 00:51:15
you feel that day and you remember that moment?

00:51:15 --> 00:51:20
Vladimir: You know, every time when you found something,

00:51:20 --> 00:51:24
it is the greatest moments in life,

00:51:23 --> 00:51:27
every simple thing.

00:51:26 --> 00:51:32
But, my general feelings most of the time was wrong.

00:51:32 --> 00:51:39
You should go again and again and again and try to be honest in front of yourself,

00:51:39 --> 00:51:47
not to my interpretation, but try to understand that it is related to ground rules

00:51:46 --> 00:51:53
and it is not my blah, blah, blah interpretation or something like that.

00:51:52 --> 00:51:57
Lex: But, you're allowed to get excited at the possibility of discovery.

00:51:56 --> 00:51:58
Vladimir: Oh, yeah.

00:51:57 --> 00:52:00
Lex: You have to double check it.

00:52:00 --> 00:52:05
Vladimir: No, but how it's relates to the ground rules.

00:52:04 --> 00:52:11
Is it just temporary or is it forever?

00:52:10 --> 00:52:17
You know, you always have a feeling when you found something.

00:52:17 --> 00:52:19
How big is that?

00:52:19 --> 00:52:26
So 20 years ago, when we discovered statistical learning theory, nobody believed

00:52:25 --> 00:52:30
except for one guy, Dudley from MIT.

00:52:31 --> 00:52:40
And then, in 20 years, it became in fashion, and the same with Support Vector Machines.

00:52:41 --> 00:52:48
Lex: So, with support vector machines and learning theory, when you were working on it,

00:52:48 --> 00:52:51
you had a sense,

00:52:51 --> 00:53:01
a sense of the profundity of it, how this seems to be right, this seems to be powerful?

00:53:00 --> 00:53:04
Vladimir: Right. Absolutely. Immediately.

00:53:03 --> 00:53:08
I recognized that it will last forever.

00:53:08 --> 00:53:16
And now, when I found this invariant story,

00:53:16 --> 00:53:21
I have a feeling that this is complete learning

00:53:21 --> 00:53:25
because I have proved that there are no different mechanisms.

00:53:24 --> 00:53:34
You can have some cosmetic improvements that you can do, but in terms of invariants,

00:53:34 --> 00:53:41
you need more invariants in statistical learning organization work together.

00:53:41 --> 00:53:51
But, also, I'm happy that you can formulate what is intelligence from that

00:53:51 --> 00:53:55
and to separate from the technical point.

00:53:55 --> 00:53:57
That is completely different.

00:53:57 --> 00:53:58
Lex: Absolutely.

00:53:57 --> 00:54:01
Well, Vladimir, thank you so much for talking today.

00:54:00 --> 00:54:02
Vladimir: Thank you.

00:54:01 --> 00:54:02
Lex: It's an honor.

<!-- YOUTUBE_TRANSCRIPT_END -->
