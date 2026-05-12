---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Ow25mjFjSmg"
title: "Complete Statistical Theory of Learning (Vladimir Vapnik) | MIT Deep Learning Series"
video_url: "https://www.youtube.com/watch?v=Ow25mjFjSmg"
thumbnail_url: "https://i.ytimg.com/vi/Ow25mjFjSmg/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Ow25mjFjSmg"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-02-15T15:11:09.000Z"
upload_date: "2020-02-15"
duration_seconds: 4761
duration_human: "1:19:21"
view_count: 84250
like_count: 2245
has_subtitle: true
language: "ru"
availability: "public"
fetched_at: "2026-04-23T15:53:32.813Z"
---

# Complete Statistical Theory of Learning (Vladimir Vapnik) | MIT Deep Learning Series

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Ow25mjFjSmg
- video_id: Ow25mjFjSmg
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-02-15T15:11:09.000Z
- upload_date: 2020-02-15
- duration: 1:19:21
- view_count: 84250
- like_count: 2245
- has_subtitle: true
- language: ru
- availability: public
- tags: statistical learning theory, vladimir vapnik, deep learning, artificial intelligence, mit deep learning
- categories: Science & Technology

## Description

Lecture by Vladimir Vapnik in January 2020, part of the MIT Deep Learning Lecture Series.
Slides: http://bit.ly/2ORVofC
Associated podcast conversation: https://www.youtube.com/watch?v=bQa7hpUpMzM
Series website: https://deeplearning.mit.edu
Playlist: http://bit.ly/deep-learning-playlist

OUTLINE:
0:00 - Introduction
0:46 - Overview: Complete Statistical Theory of Learning
3:47 - Part 1: VC Theory of Generalization
11:04 - Part 2: Target Functional for Minimization
27:13 - Part 3: Selection of Admissible Set of Functions
37:26 - Part 4: Complete Solution in Reproducing Kernel Hilbert Space (RKHS)
53:16 - Part 5: LUSI Approach in Neural Networks
59:28 - Part 6: Examples of Predicates
1:10:39 - Conclusion
1:16:10 - Q&A: Overfitting
1:17:18 - Q&A: Language

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:03
- Today, we're happy and honored

00:00:02 --> 00:00:05
to have Vladimir Vapnik with us,

00:00:04 --> 00:00:08
co-inventor of supported vector machines, support vector

00:00:07 --> 00:00:10
clustering, VC theory of statistical learning,

00:00:09 --> 00:00:13
and author of "Statistical Learning Theory".

00:00:12 --> 00:00:17
He's one of the greatest and most impactful

00:00:16 --> 00:00:20
statisticians and computer scientists of our time.

00:00:19 --> 00:00:23
Plus, he grew up in the Soviet Union,

00:00:22 --> 00:00:25
eventually heading the Computer Science Department,

00:00:24 --> 00:00:28
Institute of Controlled Sciences in Moscow.

00:00:27 --> 00:00:31
So he will give today's lecture in Russian

00:00:30 --> 00:00:32
d I will translate.

00:00:32 --> 00:00:35
Just kidding, right.

00:00:34 --> 00:00:38
(laughing) (audience laughs)

00:00:37 --> 00:00:41
It's an honor and a pleasure to have Vladimir with us today,

00:00:40 --> 00:00:43
so please give him a warm welcome.

00:00:42 --> 00:00:46
(audience applauds)

00:00:46 --> 00:00:48
- Thank you.

00:00:50 --> 00:00:55
About 50 years ago, Professor Chervonenkis and me

00:00:56 --> 00:00:59
started statistical learning theory.

00:00:58 --> 00:01:03
The problem was to answer the question

00:01:02 --> 00:01:07
when if we will do well with training data

00:01:06 --> 00:01:11
if you will have small amount of our own training data,

00:01:10 --> 00:01:14
you will do well also on the test data.

00:01:14 --> 00:01:19
You will minimize expectation of error.

00:01:20 --> 00:01:23
So this solves this problem.

00:01:25 --> 00:01:29
There are this theory in most in all books

00:01:28 --> 00:01:32
they might be written in different languages,

00:01:31 --> 00:01:35
but mostly they follow this line.

00:01:34 --> 00:01:37
The line is that just

00:01:38 --> 00:01:42
law of large numbers is not enough,

00:01:41 --> 00:01:44
then you need uniform law of large number,

00:01:43 --> 00:01:45
you need convergence, and so on,

00:01:45 --> 00:01:51
but because we started this discussion about empirical error

00:01:52 --> 00:01:56
how good you do on the training data,

00:01:55 --> 00:02:00
and bounds shows the better you do in the training data,

00:01:59 --> 00:02:02
you will be better on test data.

00:02:01 --> 00:02:07
People decided that this is only way to have a training data

00:02:08 --> 00:02:11
nd do something with this training data,

00:02:10 --> 00:02:16
to minimize number of error and all algorithm

00:02:15 --> 00:02:19
was constructed based on this principle.

00:02:19 --> 00:02:24
About five years ago I found that there exists

00:02:23 --> 00:02:29
another principle, even more interesting than this one,

00:02:28 --> 00:02:33
because in this principle it is brute force principle,

00:02:32 --> 00:02:36
give me more data, you give better answer with.

00:02:35 --> 00:02:40
So the second principle is intelligent principle

00:02:39 --> 00:02:44
and I will talk today about this.

00:02:43 --> 00:02:48
So I will start with statistical learning theory

00:02:47 --> 00:02:51
and then I will introduce this new theory,

00:02:50 --> 00:02:56
but because there are only two ways for generalization,

00:02:55 --> 00:02:58
one is data, another I will show

00:02:58 --> 00:03:02
hat I call the complete statistical learning theory

00:03:01 --> 00:03:04
because there are more,

00:03:06 --> 00:03:09
another way to do something.

00:03:08 --> 00:03:12
There is no short way for generalization.

00:03:11 --> 00:03:17
You should use both of them, so that is complete theory.

00:03:17 --> 00:03:20
But it is not so bad

00:03:19 --> 00:03:25
because you will see that learning theory

00:03:25 --> 00:03:28
move in different direction.

00:03:27 --> 00:03:32
In direction of intelligence to understanding

00:03:31 --> 00:03:34
what is intellence.

00:03:33 --> 00:03:37
It is not the same but Turing explained.

00:03:36 --> 00:03:42
Turing told that you should imitate intelligent person

00:03:41 --> 00:03:45
but now, question what is intelligence,

00:03:44 --> 00:03:47
and we will discuss this.

00:03:46 --> 00:03:48
So let me start.

00:03:49 --> 00:03:54
The first part is, this is theory of generalization,

00:03:55 --> 00:03:58
and that is the question,

00:03:58 --> 00:04:03
when in set of given set of function,

00:04:02 --> 00:04:04
you can minimize functional.

00:04:05 --> 00:04:08
This is pretty general functional.

00:04:07 --> 00:04:13
Instead of y, f of x, and L is loss function,

00:04:13 --> 00:04:19
I can consider difference between y and function.

00:04:19 --> 00:04:24
It is what they're doing in regression

00:04:23 --> 00:04:26
and pattern recognition and all this stuff,

00:04:25 --> 00:04:28
but this is more general setting.

00:04:27 --> 00:04:29
But this is more important

00:04:28 --> 00:04:34
hat when we consider minimization of functional,

00:04:34 --> 00:04:38
we should say in which set of fucntions.

00:04:37 --> 00:04:40
In the given set of function,

00:04:39 --> 00:04:41
you have to minimize functional.

00:04:42 --> 00:04:45
If probability measure is unknown,

00:04:44 --> 00:04:48
but we are given iid data pairs.

00:04:50 --> 00:04:55
That exact setting of both pattern recognition

00:04:54 --> 00:04:58
and regression estimation problem

00:04:57 --> 00:05:01
of pattern recognition set of function

00:05:00 --> 00:05:06
is indicated functions

00:05:06 --> 00:05:12
for regression function because continuous function,

00:05:11 --> 00:05:17
but the statement is the same,

00:05:16 --> 00:05:18
but the answer is very simple.

00:05:17 --> 00:05:23
We can minimize this functional using data

00:05:23 --> 00:05:28
if and only if this dimension h

00:05:27 --> 00:05:31
of set of function is finite.

00:05:30 --> 00:05:33
Everything depend on which set of function

00:05:32 --> 00:05:36
you have to minimize this functional,

00:05:35 --> 00:05:38
and you can not avoid that.

00:05:38 --> 00:05:43
So we call it capacity, but maybe better called,

00:05:42 --> 00:05:46
diversity of the set of function,

00:05:45 --> 00:05:51
but measure of this capacity, diversity, is VC-dimension.

00:05:51 --> 00:05:55
And what is VC dimension, I will give you definition.

00:05:56 --> 00:05:59
First for your set of indicator functions,

00:05:58 --> 00:06:04
t is step function you consider continuous function f,

00:06:04 --> 00:06:09
and in front of it, you're looking for indicator.

00:06:08 --> 00:06:14
If function is positive you say one,

00:06:14 --> 00:06:18
if not positive you say zero, that is indicator.

00:06:19 --> 00:06:24
The VC-dimension of set indicator function equals h

00:06:24 --> 00:06:30
if h is the maximal number of vectors

00:06:31 --> 00:06:35
that can be shattered, separated in all possible

00:06:34 --> 00:06:38
two h subsets

00:06:38 --> 00:06:43
using indicator functions from this set.

00:06:43 --> 00:06:49
So you have set, you should find h vectors

00:06:50 --> 00:06:53
which you can shatter in all possible way,

00:06:52 --> 00:06:55
in the l possible way.

00:06:54 --> 00:07:00
But you cannot shatter in h plus one vector.

00:06:59 --> 00:07:05
Then VC-dimension of this set of function will be h.

00:07:04 --> 00:07:08
This is purely a rhetorical definition.

00:07:07 --> 00:07:12
And if you can shatter for any l,

00:07:12 --> 00:07:15
then this says the VC dimension is infinite.

00:07:15 --> 00:07:20
And then I will give you two theorems which we will use,

00:07:19 --> 00:07:24
and then the main theorem, probably of this theory.

00:07:25 --> 00:07:28
If set of function has VC-dimension h,

00:07:28 --> 00:07:33
then this probability one minus eta for all functions

00:07:33 --> 00:07:38
in the set the bound holds true.

00:07:38 --> 00:07:42
And because this bound holds true for all function,

00:07:41 --> 00:07:47
and you would like to have minimal estimate,

00:07:47 --> 00:07:49
minimal right hand side,

00:07:50 --> 00:07:54
you will choose function which minimize empirical loss.

00:07:56 --> 00:08:02
And the second theorem, if you have set of linear functions,

00:08:01 --> 00:08:05
indicator from the set of linear function,

00:08:04 --> 00:08:09
it so happen that your vector x inside of circle

00:08:08 --> 00:08:14
for radius one, and w inside of C, then we see the dimension

00:08:14 --> 00:08:19
is bounded by maximum of two radius C

00:08:20 --> 00:08:24
and n, n is the dimensionality of the object plus one.

00:08:25 --> 00:08:31
That means exactly that VC-dimension can be smaller

00:08:30 --> 00:08:34
than dimensionality of the space.

00:08:33 --> 00:08:37
And you can control some part of VC-dimension,

00:08:36 --> 00:08:39
and I will show you afterwards how to do it,

00:08:38 --> 00:08:41
it is very important theorem.

00:08:43 --> 00:08:48
But, what is the general way suggest the VC-dimension for

00:08:48 --> 00:08:51
searching for functions.

00:08:50 --> 00:08:54
You have set of function, maybe set of function

00:08:53 --> 00:08:56
have infinite VC-dimension.

00:08:55 --> 00:09:00
Then you make a structure of this set of function.

00:08:59 --> 00:09:05
You choose subset of function, the small subset of function,

00:09:04 --> 00:09:09
with VC-dimension h, then another subset of function

00:09:08 --> 00:09:12
which includes a small one, VC-dimension h two,

00:09:11 --> 00:09:17
so this last VC, we have last VC type of function.

00:09:16 --> 00:09:19
It's loss to VC dimension.

00:09:18 --> 00:09:22
And then, when you minimize exist functional,

00:09:21 --> 00:09:24
you're doing two things.

00:09:23 --> 00:09:27
You choose appropriate subset,

00:09:27 --> 00:09:32
and then in this subset, you pick up function

00:09:31 --> 00:09:36
which minimize empirical loss.

00:09:37 --> 00:09:41
But, you can see,

00:09:40 --> 00:09:44
that epsilon in this depend

00:09:43 --> 00:09:47
on VC-dimension of subset you choose,

00:09:47 --> 00:09:51
at VC-dimension over L.

00:09:50 --> 00:09:55
And also, it depend on empirical loss which you achieve.

00:09:55 --> 00:10:00
So you can do as soon as you make a structure,

00:09:59 --> 00:10:02
you can do whatever you want,

00:10:01 --> 00:10:06
even if you have infinite VC-dimension

00:10:05 --> 00:10:08
in initial set of function.

00:10:11 --> 00:10:17
But, now, this is more or less, all what contain

00:10:16 --> 00:10:19
the main result of VC theory.

00:10:19 --> 00:10:25
But VC theory does not answer four very important questions.

00:10:26 --> 00:10:29
How to choose loss function L y f?

00:10:30 --> 00:10:33
I told that any function

00:10:33 --> 00:10:37
how to select admissible set of function f of x?

00:10:37 --> 00:10:42
I told you that given set of function,

00:10:41 --> 00:10:45
but when there's a stupid set of function,

00:10:44 --> 00:10:49
how to construct good set of function?

00:10:50 --> 00:10:56
How to construct structure on admissible set of function?

00:10:55 --> 00:10:57
And then, how to minimize function

00:10:56 --> 00:10:59
and how to construct the structure.

00:11:00 --> 00:11:04
In this talk I will try to answer all those questions.

00:11:04 --> 00:11:07
Target functional for minimization.

00:11:09 --> 00:11:14
And this is important slide, God plays dice.

00:11:15 --> 00:11:20
What is setting of pattern recognition problem?

00:11:19 --> 00:11:24
I will consider in this talk, just pattern recognition

00:11:23 --> 00:11:28
problem for two class specification,

00:11:27 --> 00:11:30
but generalization is straightforward.

00:11:31 --> 00:11:37
So, what is setting of pattern-recognition problem?

00:11:37 --> 00:11:42
Given generator, given nature we generate randomly,

00:11:42 --> 00:11:48
independently, citation x which come on the object,

00:11:47 --> 00:11:53
and this object is conditional probability of y.

00:11:52 --> 00:11:58
Given x, say that y equals one, given x,

00:11:58 --> 00:12:02
and y equals zero given x.

00:12:01 --> 00:12:05
This object knows this conditional probability,

00:12:05 --> 00:12:08
and plays dice.

00:12:07 --> 00:12:12
So he has the function of conditional probability,

00:12:11 --> 00:12:17
he has x on the input, he plays dice, and say y.

00:12:17 --> 00:12:21
That is the most general setting of logic problem,

00:12:20 --> 00:12:24
deterministical particular case of this set.

00:12:24 --> 00:12:27
And what does learning machine,

00:12:26 --> 00:12:30
learning machine has a set of functions,

00:12:29 --> 00:12:34
and it can choose any function from this set.

00:12:33 --> 00:12:39
The problem with observing l observations,

00:12:38 --> 00:12:43
x one y one, x l y l,

00:12:42 --> 00:12:47
to pick up the function

00:12:48 --> 00:12:50
for classification.

00:12:50 --> 00:12:53
That means, given observations

00:12:54 --> 00:13:00
generated by a kind of conditional probability P x, y

00:12:59 --> 00:13:05
equal P y given x on P of x, that's our theorem,

00:13:05 --> 00:13:09
finds the rule that minimize function l.

00:13:08 --> 00:13:13
So in my case when I have y zero or one,

00:13:12 --> 00:13:18
or in theta, also zero, one, it is indicator function,

00:13:17 --> 00:13:23
so last function l, just collect how many errors I do,

00:13:22 --> 00:13:26
but I have probability measure,

00:13:25 --> 00:13:29
it collect expectation of error.

00:13:28 --> 00:13:33
I would like to find function which guarantee

00:13:32 --> 00:13:35
the smallest expectation of l.

00:13:35 --> 00:13:38
But this is not very good.

00:13:38 --> 00:13:40
Why it not very good?

00:13:39 --> 00:13:44
Because my function l, this model

00:13:43 --> 00:13:48
is just, it is everywhere zero

00:13:47 --> 00:13:52
except for some points where it is one or minus one,

00:13:54 --> 00:13:57
and if I could model it is one.

00:13:56 --> 00:14:01
So, it is zero everywhere in defined,

00:14:01 --> 00:14:06
and one in some point.

00:14:05 --> 00:14:10
So I cannot use gradient in this case.

00:14:09 --> 00:14:13
So I should to do something smarter.

00:14:12 --> 00:14:16
And what people doing is they replace

00:14:15 --> 00:14:19
model and indicator function

00:14:18 --> 00:14:24
with just y minus f of x.

00:14:23 --> 00:14:25
This create error.

00:14:26 --> 00:14:31
Instead of whatever I formulated before.

00:14:30 --> 00:14:35
It's not so bad choice because it so happen

00:14:34 --> 00:14:38
that minimum of this function l

00:14:37 --> 00:14:41
gives conditional probability function,

00:14:40 --> 00:14:45
probability of y equal one given x,

00:14:45 --> 00:14:50
and then when we can find this probability

00:14:49 --> 00:14:55
of y equal one given x, we easily can construct

00:14:54 --> 00:15:00
our decision or rule, we just consider function

00:15:00 --> 00:15:06
if our conditional probability exceed .5,

00:15:05 --> 00:15:10
say first class, if it's less than .5, second class,

00:15:09 --> 00:15:12
and this is optimal solution.

00:15:14 --> 00:15:18
But something wrong with this replacement.

00:15:18 --> 00:15:22
Let us rewrite the first line.

00:15:22 --> 00:15:28
I will subtract from bracket inside on the first term.

00:15:28 --> 00:15:32
Regression is an odd regression,

00:15:31 --> 00:15:36
so I have two brackets instead of one,

00:15:36 --> 00:15:39
and then I make a square.

00:15:38 --> 00:15:43
So the last integral show me the first integral

00:15:42 --> 00:15:48
does not depend on function, which I looking for,

00:15:48 --> 00:15:53
and I have to minimize my function l over f

00:15:52 --> 00:15:55
over set of function,

00:15:54 --> 00:15:59
just sum of two last terms.

00:16:00 --> 00:16:05
Have a good it is just normal binome for two terms.

00:16:07 --> 00:16:11
Square of one, square of second,

00:16:10 --> 00:16:15
and two terms is multiplications.

00:16:16 --> 00:16:22
But our goal is to minimize first integral,

00:16:21 --> 00:16:25
to find function which is close

00:16:24 --> 00:16:27
to conditional probability of function,

00:16:26 --> 00:16:29
not sum of two integrals.

00:16:28 --> 00:16:32
We can show the second integral eventually will go,

00:16:31 --> 00:16:34
it goes to the, it'll go to zero,

00:16:33 --> 00:16:37
but it will slow down rate of convergence.

00:16:38 --> 00:16:42
To have a rate of convergence big,

00:16:43 --> 00:16:48
we need to find way, how to minimize first integral,

00:16:47 --> 00:16:50
not sum of these two.

00:16:49 --> 00:16:54
And that means that not this square loss,

00:16:53 --> 00:16:56
but something else.

00:16:55 --> 00:16:57
What they can do?

00:16:58 --> 00:17:00
There exists,

00:17:04 --> 00:17:10
first of all, when y, it is zero or one,

00:17:09 --> 00:17:15
probability of y equal one given x

00:17:15 --> 00:17:20
is some real valued function between zero and one,

00:17:20 --> 00:17:26
because from Bayesian formula,

00:17:26 --> 00:17:31
we know that conditional probability of y

00:17:30 --> 00:17:35
equals one given x, and then p of x,

00:17:34 --> 00:17:40
it is joint density with y given now comma x.

00:17:39 --> 00:17:45
That is just always true.

00:17:45 --> 00:17:50
Now, if I will multiply on some function,

00:17:49 --> 00:17:54
G of x minus x, star,

00:17:54 --> 00:18:00
which belong to L two space.

00:17:59 --> 00:18:03
And the integral, I will have this equation.

00:18:04 --> 00:18:08
And they can say that conditional probability

00:18:07 --> 00:18:10
solution of this equation.

00:18:11 --> 00:18:14
It was constructed like that,

00:18:13 --> 00:18:19
because you should put

00:18:18 --> 00:18:22
conditional probability, I did something like that.

00:18:21 --> 00:18:27
But, I would like to solve this equation

00:18:27 --> 00:18:33
to find function when I don't know probability measure,

00:18:32 --> 00:18:38
but I'm given data, given observations

00:18:37 --> 00:18:43
generated according to p x, p y,x,

00:18:43 --> 00:18:47
I would like to solve this equation.

00:18:46 --> 00:18:50
But solving equation, it is ill-posed problem.

00:18:50 --> 00:18:52
OK, let's do that.

00:18:52 --> 00:18:57
But before I will do that, I would like to mention

00:18:56 --> 00:18:59
that in classical statistics,

00:18:59 --> 00:19:02
there is a way

00:19:04 --> 00:19:06
how to replace

00:19:08 --> 00:19:11
unknown probability measure

00:19:11 --> 00:19:14
with empirical measure.

00:19:13 --> 00:19:17
And that is the most important part,

00:19:16 --> 00:19:20
is main inductive step statistics.

00:19:19 --> 00:19:22
In statistics, we're given data

00:19:21 --> 00:19:24
nd would like to know function,

00:19:23 --> 00:19:26
and it doesn't matter how many data.

00:19:25 --> 00:19:29
We will see, it is not equivalent to function.

00:19:29 --> 00:19:34
So in classical statistics,

00:19:33 --> 00:19:39
people suggest to approximate

00:19:38 --> 00:19:41
cumulative distribution function

00:19:40 --> 00:19:45
by empirical cumulative distribution function,

00:19:44 --> 00:19:48
and that is empirical cumulative distribution function.

00:19:47 --> 00:19:53
And 30 years, mathematicians tried to prove,

00:19:52 --> 00:19:58
that it is good idea that we can do that,

00:19:57 --> 00:20:02
and in '33, Komogorov found exact bound

00:20:01 --> 00:20:06
which is on the last line,

00:20:05 --> 00:20:08
almost the same like in the last line,

00:20:07 --> 00:20:13
and then people prove that you can bound like that.

00:20:13 --> 00:20:19
Now, if we can replace unknown measure

00:20:18 --> 00:20:20
with empirical measure,

00:20:19 --> 00:20:24
we can construct our problem,

00:20:26 --> 00:20:30
our constructive problem, what we should do.

00:20:29 --> 00:20:33
Let us replace in this function now

00:20:32 --> 00:20:35
hich we would like to minimize

00:20:34 --> 00:20:40
instead of a real mirror our measure, empirical measure.

00:20:39 --> 00:20:41
And then you have,

00:20:42 --> 00:20:48
empirical, real square root functional

00:20:47 --> 00:20:50
which you have to minimize

00:20:49 --> 00:20:55
to find our problem,

00:20:55 --> 00:20:59
to find our conditional probability of this

00:20:58 --> 00:21:00
whatever you want.

00:21:01 --> 00:21:04
But let me consider new constructive setting,

00:21:05 --> 00:21:09
where we also will replace unknown probability measure

00:21:09 --> 00:21:12
with empirical probability measure,

00:21:12 --> 00:21:15
obtained on the training data.

00:21:14 --> 00:21:19
And you will see the last equation

00:21:18 --> 00:21:23
to find conditional probability,

00:21:22 --> 00:21:27
we have to solve this equation

00:21:26 --> 00:21:29
in set of function f of x,

00:21:30 --> 00:21:35
right hand side is known because our function G is known.

00:21:34 --> 00:21:40
In left hand side you don't know f of x or it is our goal

00:21:39 --> 00:21:43
to set a function to find this function.

00:21:43 --> 00:21:49
In classical statistics, it was one algorithm

00:21:48 --> 00:21:53
called Watson-Nadaraya estimator

00:21:52 --> 00:21:56
which show how to estimate conditional probability

00:21:55 --> 00:21:57
or integration of function.

00:21:56 --> 00:22:01
They just somehow defined this.

00:22:00 --> 00:22:05
And this is, I show function which is

00:22:05 --> 00:22:08
have a numerator, and denominator.

00:22:08 --> 00:22:14
So, G is special kernel, say, Gaussian.

00:22:15 --> 00:22:20
So this is estimate of regression,

00:22:19 --> 00:22:23
a very general way of estimation regression,

00:22:22 --> 00:22:26
conditional probability, and all this business,

00:22:25 --> 00:22:31
how to find, if Gaussian, how to find the best value

00:22:30 --> 00:22:36
of variance to approximate conditional probability well.

00:22:35 --> 00:22:39
So they spent a lot of time on this subject

00:22:38 --> 00:22:41
and they have this.

00:22:40 --> 00:22:46
But you can see the line in middle,

00:22:45 --> 00:22:51
this is Watson, Nadaraya-Watson estimator

00:22:51 --> 00:22:55
comes from corrupted equation,

00:22:54 --> 00:22:57
not from equation which we derive.

00:22:56 --> 00:23:02
Here, it is in the middle is f of x,

00:23:01 --> 00:23:05
not of f of x, i

00:23:04 --> 00:23:09
like in last, like in kernel, so then you can put out

00:23:08 --> 00:23:13
of sum f of x and you will get this function.

00:23:12 --> 00:23:17
So, actually classical Nadaraya-Watson estimator,

00:23:16 --> 00:23:22
it is solution of corrupted equation which we obtained.

00:23:24 --> 00:23:27
But what means to solve equation?

00:23:27 --> 00:23:33
To solve equation means I just take the difference

00:23:32 --> 00:23:36
between left hand side and right hand side.

00:23:35 --> 00:23:39
Define area where I would like

00:23:38 --> 00:23:43
that my function will operate,

00:23:42 --> 00:23:44
take the square,

00:23:46 --> 00:23:50
and sum, and integrate over sum probability measure,

00:23:49 --> 00:23:52
and minimize this functional.

00:23:53 --> 00:23:58
So let us do that, and if you will do simple algebra,

00:23:57 --> 00:24:03
it is just very simple, and you can check it,

00:24:02 --> 00:24:08
you will have this R f function which is y minus f of x,

00:24:10 --> 00:24:16
y j minus f of x j

00:24:16 --> 00:24:22
multiply on some coefficients, where x y, x j.

00:24:23 --> 00:24:28
So, we can estimate this value,

00:24:27 --> 00:24:33
and this value is j x y, x i,

00:24:32 --> 00:24:37
j x i, x g over measure,

00:24:36 --> 00:24:41
and this is matrix, if you know from Watson-Nadaraya

00:24:40 --> 00:24:46
exact formula, we know this matrix, this element of matrix.

00:24:49 --> 00:24:54
So, what is V-matrix?

00:24:53 --> 00:24:59
If we will replace this integral with empirical integral,

00:24:59 --> 00:25:02
we will have this estimate of the matrix.

00:25:02 --> 00:25:07
If we will use just, say,

00:25:08 --> 00:25:12
line between minus one and one,

00:25:11 --> 00:25:16
and new f x is uniformly distributed over this line,

00:25:15 --> 00:25:17
we will have,

00:25:20 --> 00:25:22
we will have

00:25:24 --> 00:25:29
n G's Gaussian distribution,

00:25:28 --> 00:25:30
we will have this V-matrix.

00:25:29 --> 00:25:34
So V-matrix is easy to find.

00:25:34 --> 00:25:39
Now, I would like to use vector notation.

00:25:38 --> 00:25:44
What I will do, I will call Y vectors

00:25:43 --> 00:25:46
of elements of training data,

00:25:45 --> 00:25:50
y one, y l, I am given l pairs,

00:25:49 --> 00:25:55
so I create Y, vector Y,

00:25:54 --> 00:25:58
which is vector of all Ys.

00:25:57 --> 00:26:02
I will create F, capital from f,

00:26:01 --> 00:26:05
which is also all dimensional vector

00:26:04 --> 00:26:09
of I will pick up function f,

00:26:08 --> 00:26:12
and this is really of this function,

00:26:11 --> 00:26:16
endpoint x one, and the last is value of this function,

00:26:15 --> 00:26:19
is a point x l.

00:26:18 --> 00:26:23
So this is f, and I have V-matrix.

00:26:22 --> 00:26:27
So, and I can rewrite this functional in the way

00:26:26 --> 00:26:32
that in matrix form I have y minus F, capital from f,

00:26:32 --> 00:26:35
V, y minus F, capital from f.

00:26:37 --> 00:26:42
But if I will write this notation in least squares method,

00:26:41 --> 00:26:45
I will have Y minus F capital from f,

00:26:49 --> 00:26:53
and here, instead of Y, identity matrix.

00:26:53 --> 00:26:58
So, I got some improvement

00:26:58 --> 00:27:02
over least squares method.

00:27:01 --> 00:27:05
And I hope that it will

00:27:06 --> 00:27:09
give me a rate of convergence

00:27:08 --> 00:27:12
better than this least squares method,

00:27:11 --> 00:27:15
but, let's see.

00:27:14 --> 00:27:18
But it is not major stuff.

00:27:17 --> 00:27:21
Because, OK, I am prove rate of convergence,

00:27:20 --> 00:27:24
but is still this square method good?

00:27:23 --> 00:27:26
But now, the most important part,

00:27:25 --> 00:27:30
selection of admissible set of functions.

00:27:29 --> 00:27:31
What it means?

00:27:32 --> 00:27:36
When you construct a neural network,

00:27:37 --> 00:27:41
you talking that you are doing smart structure,

00:27:40 --> 00:27:46
what it means, you're talking that you're constructing

00:27:45 --> 00:27:50
smart, admissible set of functions.

00:27:49 --> 00:27:53
You know something, you are smart guys,

00:27:52 --> 00:27:56
you're just constructing, and then you minimize

00:27:55 --> 00:27:58
over the set of functions.

00:27:59 --> 00:28:05
But, let me consider from a theoretical perspective,

00:28:04 --> 00:28:06
what it is.

00:28:06 --> 00:28:09
If you consider Hilbert space,

00:28:09 --> 00:28:13
and also Euclidean space,

00:28:12 --> 00:28:18
in this space, there are two ways of convergence.

00:28:18 --> 00:28:22
Strong convergence, it is convergence of functions,

00:28:21 --> 00:28:24
it is first line.

00:28:23 --> 00:28:29
My set of, my sequence of function f l converge to f zero,

00:28:29 --> 00:28:35
if f l is integral converged from f l goes to infinity.

00:28:36 --> 00:28:39
But there exists weak convergence.

00:28:39 --> 00:28:45
We say that my set of, my sequence of function f l

00:28:46 --> 00:28:52
converge for f zero, if this inner product

00:28:51 --> 00:28:56
converged to this inner product for all function phi,

00:28:57 --> 00:28:59
from Hilbert space.

00:28:59 --> 00:29:04
You can see that this is an inner product

00:29:03 --> 00:29:08
described property of function,

00:29:07 --> 00:29:12
if for all functions, property is the same,

00:29:11 --> 00:29:14
that will be convergence.

00:29:17 --> 00:29:23
So it is easy to show that if you have strong convergence,

00:29:22 --> 00:29:25
you also have weak convergence,

00:29:24 --> 00:29:29
just from Watson, from Schwarz inequality,

00:29:29 --> 00:29:33
Cauchy-Schwarz inequality.

00:29:32 --> 00:29:38
But also, one can prove that if you have weak convergence,

00:29:38 --> 00:29:42
and your set of function belong to compact,

00:29:41 --> 00:29:45
you also have strong convergence.

00:29:44 --> 00:29:50
So, in some sense, the both convergence are equivalent.

00:29:50 --> 00:29:56
In our consideration of machine logic,

00:29:55 --> 00:30:00
you can see the strong convergence everywhere, 100%.

00:29:59 --> 00:30:02
But what about weak convergence?

00:30:01 --> 00:30:04
Let's explore this opportunity.

00:30:09 --> 00:30:14
Let us consider pattern recognition case.

00:30:13 --> 00:30:17
For pattern recognition case, the first line,

00:30:16 --> 00:30:21
I just write in the definition of weak convergence

00:30:20 --> 00:30:26
quals second, and that is I use

00:30:26 --> 00:30:29
bias in the equation,

00:30:28 --> 00:30:33
it is phi from dP equal one over phi

00:30:32 --> 00:30:34
for all functions from phi.

00:30:36 --> 00:30:41
So it converge,

00:30:40 --> 00:30:45
it must converge for all functions from phi.

00:30:44 --> 00:30:48
If it converge for all functions from phi,

00:30:48 --> 00:30:54
I will have one function which is desired one.

00:30:54 --> 00:30:57
But it is not realistic.

00:30:56 --> 00:30:59
Let us do following.

00:30:58 --> 00:31:03
Let us select from set of Hilbert space,

00:31:02 --> 00:31:05
m function phi.

00:31:05 --> 00:31:09
We will talk a lot how to select these functions.

00:31:09 --> 00:31:13
So, and then we will consider equality,

00:31:14 --> 00:31:19
not for all function, but just for this m function.

00:31:19 --> 00:31:23
And we will call admissible set of functions,

00:31:23 --> 00:31:27
the set of functions which satisfies this equality.

00:31:27 --> 00:31:31
We know that our function must satisfy

00:31:33 --> 00:31:37
this equality for any phi,

00:31:36 --> 00:31:40
because of the convergence,

00:31:40 --> 00:31:44
but we select something which we want.

00:31:46 --> 00:31:52
OK, if you will use, instead of our

00:31:55 --> 00:32:00
cumulative distribution function, an empirical estimate,

00:31:59 --> 00:32:04
we will have instead of integral property like here,

00:32:05 --> 00:32:10
the property written by the sum.

00:32:09 --> 00:32:14
Again, let me use the same notation

00:32:13 --> 00:32:18
for matrix m, I will use Y vector,

00:32:19 --> 00:32:25
I will use function F capital from f, which is f from x one,

00:32:24 --> 00:32:28
f from x l, which is vector,

00:32:27 --> 00:32:30
for any function f I have vector,

00:32:30 --> 00:32:36
and also, I introduce new vector,

00:32:36 --> 00:32:39
vector of predicates

00:32:38 --> 00:32:43
on the value x one, x l.

00:32:42 --> 00:32:45
Because phi is function,

00:32:45 --> 00:32:50
I can consider value of function in this case.

00:32:49 --> 00:32:55
Then, I can write

00:32:55 --> 00:33:00
my equation in this form.

00:33:00 --> 00:33:06
I would like that my admissible set of function

00:33:05 --> 00:33:09
satisfy in vector form, these m equations.

00:33:11 --> 00:33:12
Now,

00:33:16 --> 00:33:21
let me explain what we talking about.

00:33:23 --> 00:33:26
There is a duck test logic.

00:33:29 --> 00:33:33
If it looks like a duck, swims like a duck,

00:33:32 --> 00:33:37
and quack like a duck, then it probably is a duck.

00:33:38 --> 00:33:42
What this means, we have these statistical invariants

00:33:41 --> 00:33:45
in vector form like this, this line.

00:33:44 --> 00:33:49
What it does, it collect admissible function

00:33:48 --> 00:33:54
which identify animals as a duck

00:33:53 --> 00:33:57
if it looks, swims and quack like a duck.

00:33:58 --> 00:34:03
So if you will choose predicate which explains

00:34:02 --> 00:34:07
what means, looks, swims, and quack,

00:34:07 --> 00:34:12
then your admissible function will be a function,

00:34:11 --> 00:34:17
such function for which classify animals

00:34:18 --> 00:34:24
that swim, quack, and looks like a duck.

00:34:25 --> 00:34:30
Concept of predicate, it is very different from feature.

00:34:30 --> 00:34:33
Why so?

00:34:32 --> 00:34:36
With increasing number of predicates,

00:34:36 --> 00:34:40
the VC-dimension of admissible set of function is decreased.

00:34:40 --> 00:34:43
Why does it decrease?

00:34:42 --> 00:34:45
Because we have set of function,

00:34:44 --> 00:34:50
then we from this set of function, select function

00:34:49 --> 00:34:52
which satisfy new predicate.

00:34:52 --> 00:34:55
Not all of function will satisfy,

00:34:54 --> 00:34:58
and consider only set of function which satisfy

00:34:57 --> 00:35:00
all these predicates.

00:34:59 --> 00:35:03
But with increasing number of features,

00:35:02 --> 00:35:06
VC-dimension increase because your decisions

00:35:05 --> 00:35:10
are all becoming more and more diverse.

00:35:11 --> 00:35:16
So what is exact setting of complete learning problem?

00:35:17 --> 00:35:23
Minimize functional which is this V matrix.

00:35:23 --> 00:35:27
A little bit improved of the square functional,

00:35:26 --> 00:35:29
subject to this constraint.

00:35:29 --> 00:35:35
And this constraint is what you would like to see

00:35:34 --> 00:35:38
in the set of admissible functions.

00:35:40 --> 00:35:45
But, existing classical method of pattern recognition,

00:35:45 --> 00:35:49
they just minimize this functional,

00:35:48 --> 00:35:52
the least square functional.

00:35:51 --> 00:35:57
So, minimizing this functional subject to this constraint,

00:35:56 --> 00:35:58
that is our set.

00:35:59 --> 00:36:03
That was exact setting,

00:36:02 --> 00:36:06
which is in mathematical is called

00:36:10 --> 00:36:13
conditional optimization,

00:36:12 --> 00:36:15
optimization of functional under conditions.

00:36:15 --> 00:36:20
But the approximation is unconditional optimization.

00:36:19 --> 00:36:22
I would like minimize this functional

00:36:21 --> 00:36:25
subject to this constraint, but I will do following.

00:36:24 --> 00:36:30
I will make sum of this functional,

00:36:29 --> 00:36:35
and I will take square of difference

00:36:34 --> 00:36:40
between this constraint and make a sum,

00:36:40 --> 00:36:44
the sum weight, weight, it should be one.

00:36:43 --> 00:36:49
So I would like to do both, to minimize over both,

00:36:49 --> 00:36:53
and both weights have important for me to minimize,

00:36:53 --> 00:36:59
they can have important for me to minimize constraint.

00:36:59 --> 00:37:02
And then if I will do that,

00:37:03 --> 00:37:06
I can rewrite this function in this way

00:37:07 --> 00:37:12
where you have to minimize this functional,

00:37:13 --> 00:37:17
and where P

00:37:16 --> 00:37:21
is just covariance matrix of your predicate.

00:37:21 --> 00:37:24
And everything is simple compute.

00:37:27 --> 00:37:33
So that is concept, what we have to do.

00:37:33 --> 00:37:38
We have to solve our problem

00:37:37 --> 00:37:40
using both big and strong,

00:37:39 --> 00:37:45
strong convergence that means, using invariance

00:37:45 --> 00:37:49
and minimizing functionals,

00:37:50 --> 00:37:55
and we can do it in exact way,

00:37:55 --> 00:37:59
and in approximation.

00:37:58 --> 00:38:04
But, here it was written for any set of functions.

00:38:03 --> 00:38:08
I did not talk how I will minimize that.

00:38:07 --> 00:38:10
So it is true how as the least squares method,

00:38:09 --> 00:38:13
you can minimize the least square functional

00:38:12 --> 00:38:16
for any set of functions, that is the same here.

00:38:17 --> 00:38:21
But now, let me see

00:38:22 --> 00:38:26
how I can find the solution.

00:38:26 --> 00:38:30
And first of all, I will do it for reproducing

00:38:29 --> 00:38:31
kernel Hilbert space.

00:38:32 --> 00:38:37
This is the definition of reproducing kernel Hilbert space.

00:38:36 --> 00:38:40
You have some kernel which is Mercer kernel,

00:38:39 --> 00:38:42
you multiply, you're taking the product

00:38:41 --> 00:38:47
his function f of x, and you have the same function,

00:38:46 --> 00:38:49
it is important to use the same function

00:38:48 --> 00:38:52
it is called reproducing kernel of Hilbert space.

00:38:53 --> 00:38:57
And it is known that kernel, Mercer kernel,

00:38:56 --> 00:39:00
have expansion of lambda where lambda

00:38:59 --> 00:39:03
is there's no negative values,

00:39:02 --> 00:39:05
and psi is orthonormal functions.

00:39:06 --> 00:39:09
So, set of function

00:39:11 --> 00:39:14
is inner product and norm.

00:39:15 --> 00:39:19
This is inner product, and that is norm.

00:39:18 --> 00:39:21
Forms reproducing kernel Hilbert space,

00:39:20 --> 00:39:24
it is very easy to check.

00:39:23 --> 00:39:26
It means that if you will use

00:39:29 --> 00:39:35
some function psi,

00:39:34 --> 00:39:37
orthonormal function psi,

00:39:37 --> 00:39:40
and its expansion of c,

00:39:39 --> 00:39:43
and if you will have this set of function,

00:39:43 --> 00:39:48
and if you will introduce special inner product,

00:39:49 --> 00:39:52
inner product of this type,

00:39:53 --> 00:39:56
and then you will have the definition.

00:39:55 --> 00:39:59
So you will have reproduction kernel Hilbert space.

00:39:58 --> 00:40:01
It is pretty general space.

00:40:03 --> 00:40:08
But, in reproducing kernel Hilbert space,

00:40:07 --> 00:40:11
you have a great theorem called representer theorem.

00:40:11 --> 00:40:15
And representer theorem says

00:40:14 --> 00:40:18
if you would like to minimize this functional,

00:40:17 --> 00:40:21
you subset the function, and subset of function,

00:40:20 --> 00:40:24
it's norm of your function

00:40:23 --> 00:40:29
in reproducing kernel Hilbert space is bounded,

00:40:28 --> 00:40:34
so then your solution has a linear representation,

00:40:33 --> 00:40:37
over kernel with finite number of parameters.

00:40:38 --> 00:40:44
So, let's introduce matrix, vector of functions

00:40:45 --> 00:40:50
f K x one effects, it is vector expansion,

00:40:51 --> 00:40:53
and then

00:40:53 --> 00:40:56
square of our norm

00:40:58 --> 00:41:04
will be A, and this is A over K, this is what is,

00:41:05 --> 00:41:09
how it looks, your function which you're looking for,

00:41:08 --> 00:41:13
A K A is norm of your function

00:41:14 --> 00:41:17
from reproducing kernel Hilbert space,

00:41:18 --> 00:41:24
K is matrix K xi xj,

00:41:23 --> 00:41:27
and this is F of f

00:41:26 --> 00:41:30
rom reproducing kernel Hilbert space

00:41:29 --> 00:41:32
is just linear function.

00:41:33 --> 00:41:39
Subset of function is bounded norm inside of VC-dimension,

00:41:39 --> 00:41:44
the smaller C, the smaller VC-dimension.

00:41:43 --> 00:41:47
And that is according to second theorem with j,

00:41:46 --> 00:41:49
show you before.

00:41:50 --> 00:41:56
To control VC-dimension, you should control just C.

00:41:55 --> 00:42:01
You should be looking for norm of this function.

00:42:01 --> 00:42:05
So the conditional minimization in producing

00:42:04 --> 00:42:10
kernel Hilbert space, has closed form solution

00:42:09 --> 00:42:13
to minimize this functional subject to this constraint.

00:42:12 --> 00:42:17
And constraint on bound of the norm

00:42:17 --> 00:42:23
will give you, and this is your solution,

00:42:22 --> 00:42:28
linear expansion of this vector of functions,

00:42:27 --> 00:42:30
and value of coefficients

00:42:33 --> 00:42:36
is like that

00:42:36 --> 00:42:40
where it is just in closed form

00:42:39 --> 00:42:44
with this function of matrix, this multiplication of matrix,

00:42:43 --> 00:42:49
this is gamma c, C is depends on this ,

00:42:49 --> 00:42:53
where you see gamma of c depends on this C,

00:42:52 --> 00:42:58
this is identical matrix, or you have the solution.

00:42:57 --> 00:43:03
And to find u over here, you have to solve linear equation.

00:43:02 --> 00:43:06
So, you're solving linear equation,

00:43:05 --> 00:43:08
and then you have closed form solution.

00:43:08 --> 00:43:14
So the complete problem in reproducing kernel Hilbert space

00:43:14 --> 00:43:18
have closed form solution.

00:43:19 --> 00:43:25
But what about unconditional minimization,

00:43:24 --> 00:43:27
approximate minimization like that

00:43:27 --> 00:43:30
in this constraint?

00:43:29 --> 00:43:33
It also has closed form solution,

00:43:32 --> 00:43:36
and this is how it looks, closed form solution.

00:43:35 --> 00:43:40
Your solution is coefficients over this expansion,

00:43:39 --> 00:43:43
and you have this equation

00:43:42 --> 00:43:46
you have to find A,

00:43:45 --> 00:43:49
so everything is computable.

00:43:53 --> 00:43:57
But very special rule play in explanation

00:43:56 --> 00:43:59
support vector machine.

00:44:00 --> 00:44:03
What is support vector machine?

00:44:02 --> 00:44:05
Given data, I would

00:44:06 --> 00:44:10
like when reproducing kernel Hilbert space,

00:44:12 --> 00:44:17
this bounded norm minimize this functional.

00:44:18 --> 00:44:22
Then, when they're minimizing this functional,

00:44:21 --> 00:44:27
that is exactly you will get support vector machine.

00:44:28 --> 00:44:33
If you look there I've supported the machine,

00:44:32 --> 00:44:35
it is just minimization this function now,

00:44:34 --> 00:44:37
this set of function.

00:44:36 --> 00:44:39
But here, you'll do something else.

00:44:39 --> 00:44:45
I will do data like in support vector machine,

00:44:45 --> 00:44:51
y i minus A theta A,

00:44:50 --> 00:44:53
that is I would like approximate data.

00:44:52 --> 00:44:57
It's unknown like here, but also I would like to

00:44:56 --> 00:45:02
that my invariant will be good enough,

00:45:02 --> 00:45:04
will be close.

00:45:03 --> 00:45:06
Left hand side and right hand side,

00:45:05 --> 00:45:08
often invariant will be close.

00:45:07 --> 00:45:11
So I would like minimize this functional

00:45:10 --> 00:45:13
under the same constraint.

00:45:12 --> 00:45:14
And this is the solution.

00:45:13 --> 00:45:17
The solution is like A,

00:45:17 --> 00:45:22
A is function which is phi from t,

00:45:23 --> 00:45:28
and phi from t, as you remember,

00:45:27 --> 00:45:31
it is vector of predicate,

00:45:31 --> 00:45:35
and this is indicator vector.

00:45:34 --> 00:45:37
If I would like, here

00:45:37 --> 00:45:43
to make strong for

00:45:44 --> 00:45:50
invariants and not too strong for approximation function,

00:45:51 --> 00:45:55
I just want to use just weak convergence.

00:45:59 --> 00:46:01
I will have

00:46:01 --> 00:46:06
that my A is defined by invariants,

00:46:06 --> 00:46:09
by function of predicate.

00:46:09 --> 00:46:14
But, my function of predicate, how I choose predicate?

00:46:13 --> 00:46:17
I can choose any function I want.

00:46:17 --> 00:46:23
That means that if I can choose one function

00:46:22 --> 00:46:26
which will give me optimal solution,

00:46:25 --> 00:46:28
then there exists a smart predicate

00:46:29 --> 00:46:32
that I will not need a lot of data.

00:46:32 --> 00:46:35
I need what, why I need data,

00:46:34 --> 00:46:39
I need data for expansion of our kernel.

00:46:38 --> 00:46:43
But for estimating coefficients, I don't need data.

00:46:42 --> 00:46:48
I use my predicate and that means that

00:46:49 --> 00:46:52
what is, what means predicate?

00:46:51 --> 00:46:54
It is property,

00:46:53 --> 00:46:57
it is explanation about what I want.

00:46:56 --> 00:46:59
I will talk about this later.

00:46:58 --> 00:47:04
So, this example of support vector machine show

00:47:04 --> 00:47:10
that philosophy of this learning is very different.

00:47:10 --> 00:47:13
According to representer theorem,

00:47:12 --> 00:47:16
solution of learning problem in reproducing

00:47:15 --> 00:47:19
kernel Hilbert space have a property.

00:47:18 --> 00:47:22
It defined linear parametric function

00:47:21 --> 00:47:25
in form of expansion of kernel function.

00:47:27 --> 00:47:30
That means that optimal expansion

00:47:29 --> 00:47:35
belong to one layer network, not multi-layer network,

00:47:35 --> 00:47:41
but because of reproducing kernel Hilbert space,

00:47:41 --> 00:47:45
is richer than this.

00:47:44 --> 00:47:47
Maybe it is not the best idea to use

00:47:48 --> 00:47:52
deep network, deep network,

00:47:51 --> 00:47:54
OK, we will discuss this deep net.

00:47:55 --> 00:48:00
Observation vectors and kernel define basis for expansion

00:47:59 --> 00:48:04
for optimal l parametric solution.

00:48:03 --> 00:48:09
But parameters is defined by invariants,

00:48:10 --> 00:48:13
but you could use these invariants,

00:48:14 --> 00:48:19
and what it means if you will write in the form,

00:48:18 --> 00:48:22
that you have K which is matrix,

00:48:22 --> 00:48:25
depending on your training data,

00:48:24 --> 00:48:30
phi is predicate matrix, so you have vector over here,

00:48:30 --> 00:48:36
and this is Y vector, F is vector,

00:48:35 --> 00:48:41
so you have element, you have different

00:48:44 --> 00:48:46
formulation of learning problem

00:48:46 --> 00:48:52
in term of this vector and these values.

00:48:52 --> 00:48:57
So since function in Hilbert space can be,

00:48:58 --> 00:49:03
since any function from Hilbert space can be used,

00:49:03 --> 00:49:07
because when we talked about weak convergence,

00:49:06 --> 00:49:11
it converged for all functions in the case of Hilbert space.

00:49:10 --> 00:49:13
So any function can be used.

00:49:13 --> 00:49:19
So we have a chance to pick up several smart functions,

00:49:18 --> 00:49:24
or maybe even one, and it will be enough for our training,

00:49:23 --> 00:49:27
and then we will talk about what means smart,

00:49:26 --> 00:49:29
it is intelligent learning,

00:49:28 --> 00:49:31
not just brute force learning.

00:49:33 --> 00:49:38
So, let me give you an illustration to have a feeling.

00:49:37 --> 00:49:41
This is least square method, what it does.

00:49:41 --> 00:49:44
This is V-matrix method,

00:49:44 --> 00:49:47
it will do a little bit improvement.

00:49:46 --> 00:49:49
It's a little bit better.

00:49:48 --> 00:49:54
Here, if I will introduce invariants, I will do better.

00:49:53 --> 00:49:59
Here, if I will use both invariant and V-matrix,

00:49:59 --> 00:50:05
so you can see there's difference for 48 points,

00:50:04 --> 00:50:10
and to be sure that it is difficult problem,

00:50:10 --> 00:50:16
we took 16 from one class and 32 from another class,

00:50:15 --> 00:50:18
it is not difficult.

00:50:17 --> 00:50:20
This is 98 points, the same story,

00:50:19 --> 00:50:23
this is 192 points, the same story,

00:50:24 --> 00:50:28
and this is multidimensional case,

00:50:27 --> 00:50:31
so we check something and we did it.

00:50:30 --> 00:50:35
And that very interesting case.

00:50:34 --> 00:50:39
We introduce some invariants

00:50:38 --> 00:50:44
and what 22.73 error rate for diabetes.

00:50:44 --> 00:50:48
And we decided can we find invariant

00:50:47 --> 00:50:50
o improve it, performance.

00:50:49 --> 00:50:53
And what we did, we're just looking for area

00:50:52 --> 00:50:57
where our invariants does not take place,

00:50:56 --> 00:50:59
they violate it.

00:50:59 --> 00:51:04
Then we just took predicate which

00:51:04 --> 00:51:08
just doing with this area

00:51:07 --> 00:51:12
which can't have one when your,

00:51:13 --> 00:51:16
when point belong to this area,

00:51:15 --> 00:51:18
and zero when it doesn't belong.

00:51:17 --> 00:51:21
And we improve using this invariant

00:51:23 --> 00:51:25
from 73, .73

00:51:26 --> 00:51:28
to .07.

00:51:30 --> 00:51:34
So, that means that if you have smart way

00:51:36 --> 00:51:42
to looking for invariants, then you can have a chance

00:51:41 --> 00:51:44
to improve your performance,

00:51:43 --> 00:51:48
but this is exactly the same philosophy which use physicist.

00:51:48 --> 00:51:53
Find the solution, the box in figure,

00:51:52 --> 00:51:58
where the existing solution, find situation, the box,

00:51:58 --> 00:52:04
where existing solution, the approximation which we obtained

00:52:03 --> 00:52:08
contradicts evidence, does not keep invariants,

00:52:09 --> 00:52:13
contradicts invariance inside the box.

00:52:12 --> 00:52:17
And then modify the solution, obtain new approximation

00:52:17 --> 00:52:20
which resolves this contradiction,

00:52:20 --> 00:52:23
which doesn't have this contradiction.

00:52:22 --> 00:52:27
So you're just looking, you inventing invariants,

00:52:26 --> 00:52:29
looking where you have contradiction,

00:52:28 --> 00:52:32
and that is exactly the same principle

00:52:31 --> 00:52:36
that use physicists to discover law of nature.

00:52:35 --> 00:52:37
To discover law of nature,

00:52:36 --> 00:52:40
physicists first trying to find situation

00:52:39 --> 00:52:43
where existing theory contradict observations.

00:52:44 --> 00:52:45
So invariant fail.

00:52:46 --> 00:52:50
Theoretical predictions do not supported by experiments,

00:52:49 --> 00:52:51
that means invariant, but.

00:52:52 --> 00:52:55
Then they trying to reconstruct theory

00:52:54 --> 00:52:58
to remove contradiction, they construct new approximation

00:52:57 --> 00:53:03
of theory which does not contain contradiction observed.

00:53:02 --> 00:53:06
But the most important part in physics

00:53:05 --> 00:53:10
like in here is the more difficult part

00:53:09 --> 00:53:12
in scientific discovery,

00:53:11 --> 00:53:15
how to find contradictive situation.

00:53:17 --> 00:53:21
Let me show something about neural net.

00:53:20 --> 00:53:23
I am not fond of neural nets,

00:53:22 --> 00:53:27
but we can use

00:53:28 --> 00:53:31
our theory from neural net as well.

00:53:30 --> 00:53:32
What is neural net?

00:53:31 --> 00:53:36
That is neural net, you're minimizing least square error.

00:53:37 --> 00:53:43
I would minimize this approximation of invariants

00:53:44 --> 00:53:50
which is contained VP matrix, V plus P matrix,

00:53:50 --> 00:53:52
matrix P with invariant,

00:53:54 --> 00:53:56
and then I will do the same back propagation.

00:53:58 --> 00:54:03
It so happen that I easily can do back propagation,

00:54:02 --> 00:54:08
not just for this matrix, but also for this matrix.

00:54:07 --> 00:54:11
And if I will do back propagation,

00:54:10 --> 00:54:15
I need the back propagation to do only one correction.

00:54:15 --> 00:54:19
Instead of back propagation error

00:54:18 --> 00:54:24
where is y minus what you have on the last layer,

00:54:24 --> 00:54:28
and you have all l observations.

00:54:27 --> 00:54:32
You just have this matrix and you multiply

00:54:33 --> 00:54:37
our vector of propagation on this matrix,

00:54:36 --> 00:54:39
you're correcting your propagation.

00:54:41 --> 00:54:46
So that is what is back propagation about.

00:54:45 --> 00:54:50
You do for one step, it is OK, the same.

00:54:49 --> 00:54:55
You have back propagation, it is border condition,

00:54:54 --> 00:54:58
in back propagation step you should do some correction,

00:54:57 --> 00:55:03
only one on the very last level, and then update your steps.

00:55:03 --> 00:55:05
So I came to NSC

00:55:06 --> 00:55:10
and ask guys who have a neural network

00:55:09 --> 00:55:15
to incorporate this, just this improvement,

00:55:15 --> 00:55:18
small improvement this.

00:55:19 --> 00:55:25
I took just one invariant, a very trivial invariant.

00:55:24 --> 00:55:28
C of x equals one, c of x equals one,

00:55:27 --> 00:55:30
I will show you that it's not so simple invariant,

00:55:29 --> 00:55:34
we will discuss what it, what invariant does.

00:55:33 --> 00:55:39
And then, we set V equal I, we did not use V matrix.

00:55:39 --> 00:55:42
Here it is just identity matrix.

00:55:41 --> 00:55:47
We used 1,000 examples, 100 per class, batch six.

00:55:49 --> 00:55:55
And this is this line

00:55:54 --> 00:55:59
is what does neural network,

00:55:58 --> 00:56:03
deep neural network, they have a good deep neural network.

00:56:04 --> 00:56:09
And that's what this does improve neural network.

00:56:08 --> 00:56:10
Instead of 3.1 they got 2.9.

00:56:13 --> 00:56:15
OK, let's do just one,

00:56:17 --> 00:56:21
not very important cosine coefficient.

00:56:20 --> 00:56:26
I have a picture of my, my digit.

00:56:26 --> 00:56:29
I make cosine expansion,

00:56:28 --> 00:56:34
so I have Fourier coefficients

00:56:34 --> 00:56:40
for one coefficient for here, and I will use this predicate

00:56:42 --> 00:56:46
so I will use predicate with this one coefficient.

00:56:45 --> 00:56:49
And again, you will see just one invariant

00:56:48 --> 00:56:54
with stupid cosine makes improvement, OK?

00:56:53 --> 00:56:56
Then we decide, let's do more.

00:56:55 --> 00:56:59
Let's do 16 coefficients of Fourier.

00:56:59 --> 00:57:04
Four from x one and four for x two.

00:57:04 --> 00:57:09
And we got .6 bigger,

00:57:08 --> 00:57:13
but I can do whatever I want, I can do 1600 invariants.

00:57:16 --> 00:57:20
And I can make, it's a lot of game can be played.

00:57:21 --> 00:57:26
But, let's also, but in neural net,

00:57:25 --> 00:57:30
we use approximation

00:57:30 --> 00:57:34
of exact solution but it works.

00:57:37 --> 00:57:40
The statistical part of learning theory is complete.

00:57:41 --> 00:57:44
Why is it complete?

00:57:43 --> 00:57:47
Because there exist only two ways for convergence

00:57:47 --> 00:57:50
in Hilbert space.

00:57:50 --> 00:57:55
Convergence in functions, convergence in functionals.

00:57:54 --> 00:57:59
There are no third way of convergence.

00:57:59 --> 00:58:02
So, from a conceptual point of view,

00:58:01 --> 00:58:05
you can play one of two game or two games together.

00:58:05 --> 00:58:10
So why I call this complete,

00:58:09 --> 00:58:13
you cannot imagine something else.

00:58:12 --> 00:58:16
If you would like to do

00:58:17 --> 00:58:19
something

00:58:19 --> 00:58:25
what is improved learning, you should ask yourself

00:58:24 --> 00:58:27
how to choose invariants,

00:58:26 --> 00:58:29
and that's what I will talk about.

00:58:36 --> 00:58:40
Invariant, it is something about intelligence,

00:58:41 --> 00:58:47
when they talk about duck test,

00:58:47 --> 00:58:52
I use looks like a duck, swims like a duck,

00:58:51 --> 00:58:55
quack like a duck, but I can say play chess like a duck.

00:58:55 --> 00:58:58
I can say whatever I want

00:58:59 --> 00:59:03
and it should be invariant equality,

00:59:03 --> 00:59:07
or say singing can not be like a duck, OK?

00:59:08 --> 00:59:13
But, among all these stupid predicate,

00:59:13 --> 00:59:15
there exists smart predicate,

00:59:15 --> 00:59:20
and subject of learning

00:59:19 --> 00:59:22
and subject of intelligent learning,

00:59:21 --> 00:59:25
some have to pick up the smart invariants.

00:59:26 --> 00:59:28
Let us discuss

00:59:28 --> 00:59:32
what is predicate.

00:59:31 --> 00:59:33
I don't know, exactly,

00:59:32 --> 00:59:36
I think this is for many hundred years theory,

00:59:35 --> 00:59:39
I will show you that it is continuation

00:59:38 --> 00:59:42
of major philosophy from Plato to Hegel

00:59:42 --> 00:59:46
to Wigner and so on, I will show you.

00:59:45 --> 00:59:50
But it is in predicate, so my claim

00:59:49 --> 00:59:54
that when you're talking not about imitation,

00:59:53 --> 00:59:59
but what is essence of intelligence, essence in predicate.

00:59:59 --> 01:00:02
Predicate is something extra.

01:00:02 --> 01:00:05
OK, I will show you later.

01:00:04 --> 01:00:09
Let's say predicate, that is

01:00:11 --> 01:00:15
that invariant holds true, mathematically.

01:00:14 --> 01:00:17
So let's take f of x equals one.

01:00:18 --> 01:00:20
What does this predicate?

01:00:21 --> 01:00:27
Expected number of element of class y equals one

01:00:26 --> 01:00:30
computed using this predicate,

01:00:30 --> 01:00:35
equal to number of training example of the first class.

01:00:36 --> 01:00:39
When you will use this predicate,

01:00:39 --> 01:00:44
you will pick up function which will give you

01:00:43 --> 01:00:46
on this training data,

01:00:46 --> 01:00:50
the number of represents

01:00:50 --> 01:00:54
of the first class, exactly the same

01:00:53 --> 01:00:55
like in your training data.

01:01:00 --> 01:01:02
And that is this predicate.

01:01:01 --> 01:01:05
And you saw how strong this predicate for neural net

01:01:04 --> 01:01:07
in terms of class of recognition

01:01:06 --> 01:01:09
because they have something.

01:01:09 --> 01:01:14
Let's take another stupid predicate, just x.

01:01:13 --> 01:01:18
It looks like a duck, it is center of mass.

01:01:18 --> 01:01:22
I want the expected center of mass,

01:01:21 --> 01:01:25
expected to be the respect the conditional probability

01:01:25 --> 01:01:31
will be equal to average to center of mass which I see

01:01:31 --> 01:01:35
on my training data.

01:01:36 --> 01:01:39
That looks like a duck.

01:01:39 --> 01:01:42
But you can do smart looks like a duck.

01:01:43 --> 01:01:48
So, I can consider x x transport

01:01:49 --> 01:01:51
which makes matrix,

01:01:50 --> 01:01:52
it is correlation, covariation matrix,

01:01:53 --> 01:01:58
and I can see n squared

01:01:57 --> 01:02:01
over two predicate of this type

01:02:01 --> 01:02:05
that's covariation which I will get

01:02:05 --> 01:02:08
using this predicate

01:02:09 --> 01:02:15
using function which, sorry.

01:02:14 --> 01:02:20
Predication which I will get with obtained solution

01:02:19 --> 01:02:24
will be the same like covariation which I observed

01:02:23 --> 01:02:25
on my training data.

01:02:25 --> 01:02:27
That means this predicate.

01:02:30 --> 01:02:32
So, but,

01:02:33 --> 01:02:38
I sense that we should not go for general predicate,

01:02:37 --> 01:02:41
and we can imagine when your predicate, I am not so smart,

01:02:40 --> 01:02:44
that to construct very general predicate,

01:02:43 --> 01:02:48
but let's do for 2D image predicate.

01:02:47 --> 01:02:53
Like u x one, x two, the function of two variables,

01:02:53 --> 01:02:58
it is image of digits, say, in our case.

01:02:57 --> 01:03:01
And we have this function, y, this function, y.

01:03:00 --> 01:03:06
And let's consider predicate like I will take image,

01:03:05 --> 01:03:10
I will consider coefficients for Fourier,

01:03:09 --> 01:03:11
it is my predicate.

01:03:10 --> 01:03:15
I want expected value with respect to this

01:03:14 --> 01:03:18
over my predicate, will be the same

01:03:17 --> 01:03:21
like I show my training data.

01:03:23 --> 01:03:27
I can consider convolution,

01:03:26 --> 01:03:31
because convolution neural network is one predicate.

01:03:30 --> 01:03:34
I will show you which is predicate.

01:03:36 --> 01:03:39
And this is this convolution of point x y,

01:03:38 --> 01:03:42
x of different points.

01:03:43 --> 01:03:47
You can use value, you can use whatever you want,

01:03:47 --> 01:03:50
because whatever is coming from inner product

01:03:49 --> 01:03:54
it is you who decided what you should use.

01:03:55 --> 01:04:01
And the understanding of image recognition,

01:04:00 --> 01:04:04
it means understand which predicate involved in that.

01:04:04 --> 01:04:10
But also, the difference between predicate and invariant,

01:04:10 --> 01:04:13
predicate is abstract concept,

01:04:13 --> 01:04:17
but invariant is from your training data,

01:04:17 --> 01:04:22
it's what makes specific your abstract concept.

01:04:21 --> 01:04:24
It's also general, but it is specific.

01:04:28 --> 01:04:29
And that is,

01:04:31 --> 01:04:34
I want you to show

01:04:35 --> 01:04:38
instruments for special predicates.

01:04:41 --> 01:04:46
Let us consider vector x y, x j,

01:04:45 --> 01:04:47
just the digit recognition,

01:04:46 --> 01:04:50
keep in mind, your digit recognition.

01:04:49 --> 01:04:53
And suppose x is your pixel space,

01:04:54 --> 01:04:58
and you may clean your transformation,

01:04:57 --> 01:05:01
small linear transformation of your pixel space.

01:05:02 --> 01:05:08
And if you have small linear transformation of pixel space,

01:05:07 --> 01:05:11
you transform your picture.

01:05:10 --> 01:05:13
But you can transform picture,

01:05:12 --> 01:05:15
you can also transform using Lie derivative,

01:05:14 --> 01:05:17
I will show you what is that.

01:05:16 --> 01:05:21
But, to see what is that, I took this picture

01:05:20 --> 01:05:24
from paper by Simard et al.

01:05:24 --> 01:05:30
Show you, this is transformation, the first line.

01:05:31 --> 01:05:35
In pixel space, you may clean your transformation.

01:05:34 --> 01:05:37
And here, you make the same transformation

01:05:36 --> 01:05:40
as Lie derivative, this is Lie derivative,

01:05:40 --> 01:05:42
this black one.

01:05:42 --> 01:05:45
It just computed Lie derivative,

01:05:44 --> 01:05:47
I will show you how to compute.

01:05:46 --> 01:05:51
And alpha is coefficient, and using different coefficients,

01:05:50 --> 01:05:55
a equals minus two, you just have this pair,

01:05:55 --> 01:05:59
a equals minus one, you can have this,

01:05:58 --> 01:06:01
this, and all this stuff.

01:06:02 --> 01:06:07
So, you can create clone,

01:06:06 --> 01:06:09
clones of digit two,

01:06:09 --> 01:06:15
which is transformed with respect to Lie derivative.

01:06:14 --> 01:06:19
You don't need to have a lot of data.

01:06:19 --> 01:06:24
You need to have for digital recognition,

01:06:23 --> 01:06:28
you need to have predicate, and from any data

01:06:27 --> 01:06:30
you can get this predicate.

01:06:29 --> 01:06:35
And OK, I will show you invariant with this predicate.

01:06:34 --> 01:06:37
And this is what is Lie derivative.

01:06:36 --> 01:06:40
It is horizontal translation,

01:06:39 --> 01:06:43
x, first coordinate, plus a,

01:06:42 --> 01:06:48
you just move it in direction a x one.

01:06:47 --> 01:06:50
Then vertical transformation.

01:06:49 --> 01:06:54
This is rotation, this standard from geometry,

01:06:53 --> 01:06:58
for full rotation, for small rotation, you have that.

01:06:57 --> 01:07:03
And this is d dx,

01:07:02 --> 01:07:05
this is d dx two and so on.

01:07:04 --> 01:07:07
You have all this stuff here.

01:07:08 --> 01:07:12
And this is a big illustration from Patrick Simard.

01:07:12 --> 01:07:18
Clones, you have this three and you create all these clones.

01:07:19 --> 01:07:23
Just you choose, one, two, three, four,

01:07:22 --> 01:07:28
five Lie derivatives, two different coefficients,

01:07:27 --> 01:07:30
and then you have all this stuff.

01:07:35 --> 01:07:39
But this is smart guy, why you not taking,

01:07:38 --> 01:07:43
like predicate, just Lie derivative of it?

01:07:43 --> 01:07:48
And we'll take invariant with respect to Lie derivative,

01:07:47 --> 01:07:53
it is, I would like to learn if using statistical invariant

01:07:53 --> 01:07:59
ry to estimate such conditional probability,

01:07:58 --> 01:08:03
which keep invariant with respect to all derivatives.

01:08:08 --> 01:08:13
But even more, it's again from what was done.

01:08:12 --> 01:08:16
So suppose I have

01:08:15 --> 01:08:20
this set of clones of my digit.

01:08:20 --> 01:08:26
This is set of clones of another digit.

01:08:27 --> 01:08:32
I call tangent distance the closest element

01:08:31 --> 01:08:34
from these two clones, what that means.

01:08:33 --> 01:08:38
I have two digits, they are different, say, two, three.

01:08:37 --> 01:08:41
Then I massage them with linear transformation

01:08:40 --> 01:08:43
to make it as close as is possible,

01:08:42 --> 01:08:46
and measure closeness of them.

01:08:45 --> 01:08:48
That's called Lie invariant.

01:08:49 --> 01:08:52
That's called tangent distance.

01:08:52 --> 01:08:58
And now, I believe that this is general concept

01:08:57 --> 01:09:02
of predicate symmetry.

01:09:03 --> 01:09:08
When you have any picture, you can say

01:09:07 --> 01:09:11
what is measure of symmetry of these two pictures.

01:09:10 --> 01:09:15
So for example, you have three, what I can do,

01:09:14 --> 01:09:19
I have, this is my digit three,

01:09:19 --> 01:09:23
I will have for horizontal symmetry,

01:09:22 --> 01:09:26
I will take first line here, second line here,

01:09:25 --> 01:09:29
last line here, then I will do the following.

01:09:28 --> 01:09:31
I will make another digit.

01:09:30 --> 01:09:35
I will make last line the first line.

01:09:34 --> 01:09:37
This line, the second line.

01:09:36 --> 01:09:39
So what I am doing.

01:09:43 --> 01:09:45
I take three,

01:09:46 --> 01:09:50
so I leave it like vector like that.

01:09:49 --> 01:09:52
Now I will do this.

01:09:53 --> 01:09:57
It is two different images.

01:09:57 --> 01:10:02
And now, I will say, let me massage them,

01:10:01 --> 01:10:05
this tangent distance, these two different pictures,

01:10:04 --> 01:10:06
how close they are.

01:10:07 --> 01:10:10
If they are very close, I can say

01:10:09 --> 01:10:14
this is coefficient of symmetry of this three.

01:10:13 --> 01:10:19
But I can say horizontal symmetry, vertical symmetry,

01:10:18 --> 01:10:21
antisymmetry, what means antisymmetry?

01:10:20 --> 01:10:26
Digit s, it has vertical antisymmetry.

01:10:27 --> 01:10:32
I can have vertical symmetry, everything.

01:10:31 --> 01:10:35
So you can play many games with symmetry,

01:10:34 --> 01:10:37
and this is just one predicate.

01:10:39 --> 01:10:42
I have conclusion remarks.

01:10:42 --> 01:10:48
What we did, is that we can minimize this functional

01:10:47 --> 01:10:51
which is slightly better than, say, least square

01:10:52 --> 01:10:55
subject to this constraint which is serious,

01:10:54 --> 01:11:00
because this constraint means admissible set of functions

01:11:00 --> 01:11:05
which are trying to construct being smart.

01:11:05 --> 01:11:11
So I can consider, say, all continuous functions.

01:11:11 --> 01:11:14
And then from these continuous functions,

01:11:13 --> 01:11:19
select by smart predicate, admissible set of functions.

01:11:18 --> 01:11:24
And I can do it, because according to weak convergence,

01:11:24 --> 01:11:29
any invariant take place with any function,

01:11:28 --> 01:11:32
invariant take place with any predicate.

01:11:35 --> 01:11:40
So, and also, this provide unique solution

01:11:39 --> 01:11:43
for reproducing kernel Hilbert space,

01:11:44 --> 01:11:49
and approximation for neural network, approximate solution.

01:11:49 --> 01:11:55
But further progress goes beyond statistical reasoning.

01:11:56 --> 01:12:00
It goes in direction of searching of predicate

01:11:59 --> 01:12:02
which forms basis for understanding of problems

01:12:01 --> 01:12:03
existing in the world.

01:12:04 --> 01:12:07
And what means understanding?

01:12:06 --> 01:12:11
It means that, in say,

01:12:10 --> 01:12:13
2D image recognition,

01:12:12 --> 01:12:16
there exists concept of symmetry,

01:12:15 --> 01:12:19
there exists concept of structure,

01:12:18 --> 01:12:22
and if you will know these concepts,

01:12:21 --> 01:12:23
I believe that it's not a lot,

01:12:22 --> 01:12:26
I will show you why I say it is not a lot,

01:12:25 --> 01:12:29
you will understand this problem.

01:12:31 --> 01:12:35
And I think that this line, it's very old line.

01:12:34 --> 01:12:39
It start from Plato, what says Plato?

01:12:38 --> 01:12:41
Plato says that there is a vault of ideas,

01:12:40 --> 01:12:46
and vault of things, and vault of ideas

01:12:46 --> 01:12:49
make vault of things.

01:12:49 --> 01:12:55
But you see that I have ideas

01:12:55 --> 01:12:57
which is predicate,

01:12:56 --> 01:13:01
which abstract can be applied to different situations,

01:13:01 --> 01:13:04
but I have vault of things.

01:13:04 --> 01:13:10
But then, in 300 years ago,

01:13:09 --> 01:13:13
it was classical German philosophy

01:13:12 --> 01:13:17
about that, what it means, ideas, what means things.

01:13:16 --> 01:13:21
And Hegel told, whatever is reasonable, it exists.

01:13:20 --> 01:13:24
It is exactly what we said about predicate.

01:13:23 --> 01:13:26
And whatever exists, it is reasonable.

01:13:27 --> 01:13:29
So there is two connections.

01:13:30 --> 01:13:33
But recently, 60 years ago,

01:13:32 --> 01:13:36
Wigner wrote an article

01:13:36 --> 01:13:42
about unreasonable effectiveness of mathematics.

01:13:42 --> 01:13:46
It just says that mathematics knows something about reality.

01:13:46 --> 01:13:49
If you would like to understand reality,

01:13:48 --> 01:13:52
you should look in equation and you will see how it works.

01:13:53 --> 01:13:56
So predicate, it's abstract idea,

01:13:56 --> 01:14:02
while invariants that are built using them

01:14:01 --> 01:14:03
form elements of solution.

01:14:04 --> 01:14:09
These two concepts reflect essence of intelligence,

01:14:08 --> 01:14:14
not just its imitation which is in artificial intelligence.

01:14:14 --> 01:14:20
But, that is subject which we should attack.

01:14:19 --> 01:14:25
And also, I have two more slides, one slide is challenge.

01:14:26 --> 01:14:31
I know that people from deep network

01:14:30 --> 01:14:34
get .5% of error rate

01:14:33 --> 01:14:37
using 60,000 observations.

01:14:36 --> 01:14:40
The challenge is, use 1% of this data

01:14:39 --> 01:14:42
nd get the same result.

01:14:41 --> 01:14:47
But even smart predicate and all these clones which exist,

01:14:49 --> 01:14:51
I think that it is doable.

01:14:51 --> 01:14:54
And the very last slide.

01:14:56 --> 01:15:02
In 1928, guy Valdimir Propp published book

01:15:01 --> 01:15:07
"Morphology of Folk Tale" where he describes 31 predicates

01:15:08 --> 01:15:13
that allow to synthesize all Russian folk tales.

01:15:14 --> 01:15:20
Later, his morphology, the 31 predicates,

01:15:20 --> 01:15:25
was applied to literature, to theater,

01:15:24 --> 01:15:29
to film, to television, to television series,

01:15:29 --> 01:15:32
to games, et cetera,

01:15:31 --> 01:15:34
and this 31 was enough.

01:15:34 --> 01:15:38
And this I read from Wikipedia, you can check it,

01:15:37 --> 01:15:41
with Wikipedia of the book.

01:15:40 --> 01:15:43
Propp found 31 predicates which describe

01:15:42 --> 01:15:47
different actions of people in real world.

01:15:47 --> 01:15:51
Probably there exist a small amount of predicates

01:15:50 --> 01:15:53
that describe 2D images.

01:15:53 --> 01:15:59
And that is intelligence, that is how to find them.

01:15:59 --> 01:16:03
That what I believe should be learning about.

01:16:03 --> 01:16:06
Thank you.

01:16:05 --> 01:16:09
(audience applauds)

01:16:11 --> 01:16:15
- [Host] I think we have time for a few questions.

01:16:14 --> 01:16:18
- [Man in Audience] Hello, thank you, I have two questions.

01:16:17 --> 01:16:21
First one is, do you know of any

01:16:20 --> 01:16:23
predicates that you recommend for

01:16:23 --> 01:16:26
language classification tasks, specifically?

01:16:25 --> 01:16:29
And the second question is, do you have any strategies

01:16:28 --> 01:16:31
for hedging against over fitting?

01:16:30 --> 01:16:34
Like if you specify too many predicates,

01:16:33 --> 01:16:35
then you might be sort of--

01:16:34 --> 01:16:37
Sorry, I not hear you well,

01:16:36 --> 01:16:40
but second question is about over fitting?

01:16:39 --> 01:16:41
- [Man in Audience] Over fitting, yes.

01:16:40 --> 01:16:42
- Yes, let me answer this.

01:16:41 --> 01:16:43
- [Man in Audience] Sure.

01:16:42 --> 01:16:48
- The more predicate, you have why over fitting can happen.

01:16:47 --> 01:16:50
Because your set of function is big,

01:16:50 --> 01:16:55
and you have small amount of data in selecting function.

01:16:54 --> 01:16:57
So you can select whatever you want.

01:16:56 --> 01:17:00
But if you increase number of predicate,

01:17:00 --> 01:17:04
you decrease set of function.

01:17:03 --> 01:17:09
So the more predicate, the less over fitting happened.

01:17:08 --> 01:17:12
And if you will, a theory of mathematics says,

01:17:11 --> 01:17:15
that if you have infinite number of predicate,

01:17:14 --> 01:17:17
you are left with one function, if you want.

01:17:18 --> 01:17:21
- [Host] He also asked about natural language.

01:17:20 --> 01:17:25
Recommendations for predicates for language,

01:17:24 --> 01:17:29
natural language processing, the Turing test,

01:17:28 --> 01:17:30
any good predicates.

01:17:31 --> 01:17:35
- You know it is very complicated story,

01:17:34 --> 01:17:38
natural language, I don't know.

01:17:40 --> 01:17:43
- Questions? - You know, it is,

01:17:42 --> 01:17:47
whatever I am talking it is very trivial, simple.

01:17:49 --> 01:17:53
Everyone familiar with 2D images.

01:17:54 --> 01:17:58
And we can think, like this guy Vladimir Propp,

01:17:59 --> 01:18:01
what is predicate in these images.

01:18:02 --> 01:18:05
Can we formulate, if you're smart guy,

01:18:04 --> 01:18:09
say, couple of dozens, or maybe one dozen predicate,

01:18:08 --> 01:18:10
it should be enough.

01:18:13 --> 01:18:16
- [Host] But language is harder than images.

01:18:15 --> 01:18:18
- Oh yeah, absolutely.

01:18:17 --> 01:18:20
(audience laughs)

01:18:19 --> 01:18:24
Yeah, but don't do the immediately hard problem.

01:18:23 --> 01:18:26
Try to-- - Try?

01:18:25 --> 01:18:30
- Yeah, I tried a very simple, just step-by-step.

01:18:30 --> 01:18:36
It so happens that is main line of philosophy

01:18:38 --> 01:18:44
from Plato to this guy

01:18:43 --> 01:18:48
who says that ideas is not too much.

01:18:48 --> 01:18:51
There's not too many ideas that are existing

01:18:50 --> 01:18:52
in world of ideas.

01:18:52 --> 01:18:55
It could be like that.

01:18:55 --> 01:18:58
- Vladimir, thank you so much for coming today,

01:18:57 --> 01:19:00
and please give him a big hand.

01:19:00 --> 01:19:04
(audience applauding)

<!-- YOUTUBE_TRANSCRIPT_END -->
