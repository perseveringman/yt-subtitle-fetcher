---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "8pLZkbN9h_s"
title: "The Promise of AI"
video_url: "https://www.youtube.com/watch?v=8pLZkbN9h_s"
thumbnail_url: "https://i.ytimg.com/vi/8pLZkbN9h_s/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=8pLZkbN9h_s"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-16T04:28:32.000Z"
upload_date: "2017-07-16"
duration_seconds: 2779
duration_human: "46:19"
view_count: 13804
like_count: null
has_subtitle: true
language: null
availability: "public"
fetched_at: "2026-04-21T16:24:17.870Z"
---

# The Promise of AI

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=8pLZkbN9h_s
- video_id: 8pLZkbN9h_s
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-16T04:28:32.000Z
- upload_date: 2017-07-16
- duration: 46:19
- view_count: 13804
- like_count: _none_
- has_subtitle: true
- language: _none_
- availability: public
- tags: #artificial intelligence, #machine learning, #relational databases, #product management
- categories: Science & Technology

## Description

Building on our popular primer on artificial intelligence [a16z.com/2016/06/10/ai-deep-learning-machines/] -- and a companion microsite [aiplaybook.a16z.com/] to help newcomers get started with AI -- this presentation shares more about the promise of artificial intelligence, beyond the hype. It's a ~45-minute narrated walkthrough of what companies are doing with AI today and what’s bubbling up from the research community that’s just a few years out.
Because AI is going to have as big (if not bigger) an impact as relational database technologies did from the 1970s onwards: Much like databases are inside just about every important piece of software we use every day, we're in the early years of putting AI in all our software -- and the full maturing of this trend will unfold over decades...
I hope the real world examples spark ideas for you on how to use AI in your own organization.
by Frank Chen (@withfries2)

***
The views expressed here are those of the individual AH Capital Management, L.L.C. (“a16z”) personnel quoted and are not the views of a16z or its affiliates. Certain information contained in here has been obtained from third-party sources, including from portfolio companies of funds managed by a16z. While taken from sources believed to be reliable, a16z has not independently verified such information and makes no representations about the enduring accuracy of the information or its appropriateness for a given situation.
 
This content is provided for informational purposes only, and should not be relied upon as legal, business, investment, or tax advice. You should consult your own advisers as to those matters. References to any securities or digital assets are for illustrative purposes only, and do not constitute an investment recommendation or offer to provide investment advisory services. Furthermore, this content is not directed at nor intended for use by any investors or prospective investors, and may not under any circumstances be relied upon when making a decision to invest in any fund managed by a16z. (An offering to invest in an a16z fund will be made only by the private placement memorandum, subscription agreement, and other relevant documentation of any such fund and should be read in their entirety.) Any investments or portfolio companies mentioned, referred to, or described are not representative of all investments in vehicles managed by a16z, and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. A list of investments made by funds managed by Andreessen Horowitz (excluding investments and certain publicly traded cryptocurrencies/ digital assets for which the issuer has not provided permission for a16z to disclose publicly) is available at https://a16z.com/investments/.

Charts and graphs provided within are for informational purposes solely and should not be relied upon when making any investment decision. Past performance is not indicative of future results. The content speaks only as of the date indicated. Any projections, estimates, forecasts, targets, prospects, and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others. Please see https://a16z.com/disclosures for additional important information.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
hi, my name is Frank chen and I've got a follow-up presentation to the

00:00:05 --> 00:00:09
Fundamentals presentation I did about artificial intelligence a little while ago

00:00:08 --> 00:00:11
You can find out on our website

00:00:10 --> 00:00:17
For this presentation what I want to do is take you on a whirlwind tour of what people are doing with AI in their actual

00:00:17 --> 00:00:20
Applications, so we'll see some real apps

00:00:19 --> 00:00:24
We'll see some stuff bubbling in the research labs, and I hope you're going to have a fun time

00:00:23 --> 00:00:29
I certainly had a fun time learning about all of them, and I'm excited to share them with you

00:00:30 --> 00:00:34
So one of the ways I've been thinking about artificial intelligence is very

00:00:34 --> 00:00:43
Similarly to how I think about relational databases so ef Cod invented the term relational database working at IBm research in

00:00:42 --> 00:00:45
1970 and then oracle

00:00:44 --> 00:00:51
Implemented a relational database in the late 70s and early 80's and basically since that time

00:00:50 --> 00:00:57
We've watched the relational database get into every important piece of software that you write, so if you think about what you did today

00:00:57 --> 00:01:00
You've got coffee. You booked a flight

00:00:59 --> 00:01:04
You bought something on Amazon all of those things are enabled by the relational database

00:01:03 --> 00:01:10
And it was one of these fundamental pieces of computer science that had such broad applicability

00:01:09 --> 00:01:16
It just got into every important piece of software, and I think Ai is going to be like that as well

00:01:16 --> 00:01:22
Which is it's going to get into every important piece of software and one way to think about

00:01:21 --> 00:01:29
relational databases is they made it very cheap to store and sort and count information and Ai

00:01:28 --> 00:01:30
Will do the same thing

00:01:29 --> 00:01:32
It will make a class of things cheap

00:01:31 --> 00:01:36
But what Ai makes cheap is very different than what the relational database?

00:01:35 --> 00:01:41
Made cheap and what I'm going to do to organize this presentation is walk through a couple

00:01:40 --> 00:01:42
categories of

00:01:41 --> 00:01:46
things that a I will make cheap and when Ai makes stuff cheap

00:01:45 --> 00:01:50
It's going to get into every application and become ubiquitous, and we're very excited about

00:01:49 --> 00:01:55
Where that's going to happen, and we think it's going to be across all categories of software

00:01:56 --> 00:02:02
So the first category of things that they I will make cheap is that it will make it cheap for

00:02:01 --> 00:02:06
vehicles to drive or fly or sail themselves

00:02:07 --> 00:02:10
when it becomes cheap to drive

00:02:09 --> 00:02:17
You'll have beer drive itself from the brewery to the store which our friends at Auto

00:02:16 --> 00:02:19
already showed in October of 2016

00:02:20 --> 00:02:26
Once it gets to the store it will drive itself from the store to your house over the sidewalks

00:02:25 --> 00:02:29
This is a startup called dispatch robotics

00:02:28 --> 00:02:35
Which is basically building an autonomous shopping cart that will go the last mile between the Safeway or Whole foods?

00:02:34 --> 00:02:37
All the way to your house

00:02:36 --> 00:02:40
when it becomes cheap for AI to

00:02:40 --> 00:02:46
control vehicles will have drones that can basically follow you as

00:02:46 --> 00:02:51
You do your everyday activities whether that's running or biking or whatever

00:02:50 --> 00:02:57
And I'm just going to show you this fun clip from our friends at sky do that are building a drone just like that

00:02:57 --> 00:03:02
Think of it as the drone that will create the most awesome video selfies ever

00:03:03 --> 00:03:06
on a little more serious application a

00:03:05 --> 00:03:10
Company called shield AI is working on drones that will go into

00:03:09 --> 00:03:15
Buildings where you don't know who's in there and create a map of that building so if you think about?

00:03:14 --> 00:03:21
First responders either Soldiers or police officers or swat teams the danger of building into an unmapped?

00:03:21 --> 00:03:25
Building where you don't know who's in there is very high and so drones

00:03:24 --> 00:03:29
That are able to fly themselves will be able to fly in these buildings

00:03:29 --> 00:03:36
Generate a map in real time of that building and also figure out who's in that

00:03:35 --> 00:03:42
Building whether they're friendly or hostile, and we're very excited about drones being used to save lives in this way

00:03:42 --> 00:03:50
Protecting civilians and protecting the first responders and soldiers that need to do this on a daily basis putting themselves in harm's way

00:03:51 --> 00:03:58
Once drones can fly themselves they can do life-saving work like delivering blood where blood is needed

00:03:57 --> 00:04:04
so there's a start-up out here in Silicon Valley called zipline which is working with the folks at ups to

00:04:03 --> 00:04:10
Deliver blood in Western Rwanda, so there's one collection Center in Rwanda

00:04:09 --> 00:04:17
And there's many distribution centers all over western Rwanda and sometimes the roads to the distribution centers are

00:04:16 --> 00:04:20
Flooded or it's dangerous to get through them

00:04:20 --> 00:04:28
So what people can do now at the blood transfusion centers is to order blood so there's literally an iPhone app

00:04:27 --> 00:04:33
Where they can order a specific type of blood and a specific amount?

00:04:32 --> 00:04:40
The blood gets loaded up at the collection center put on to a zipline drone which can fly up to 90 Miles round-trip

00:04:39 --> 00:04:42
The blood just gets there

00:04:41 --> 00:04:49
It's amazing the blood is actually delivered by parachute at the very end and the accuracy on this thing is amazing

00:04:48 --> 00:04:53
It's so fun to watch that crowds Gather both on the takeoff and landing

00:04:52 --> 00:04:59
When the drone goes and it's been known to fly as many as 150 trips in a single day

00:04:58 --> 00:05:03
So that's what's going to happen when AI makes it cheap for

00:05:02 --> 00:05:11
Things to drive themselves or fly themselves the technology will become pervasive, and it will seem odd to our children or our grandchildren

00:05:11 --> 00:05:16
That something moves, but can't move itself and can't get itself from Point a to point B

00:05:15 --> 00:05:21
All by itself, so that's the first class of things that a I will make cheap

00:05:22 --> 00:05:28
The second class of things that a I will make cheap is seeing and understanding the world

00:05:28 --> 00:05:31
So I love showing this picture to illustrate

00:05:31 --> 00:05:33
one of the most

00:05:32 --> 00:05:39
exciting AI technologies that's been invented in the last Few years so what you see here is a picture off of iMager and

00:05:39 --> 00:05:47
it's a picture of dogs that look like blueberry muffins or if you're a blueberry muffin fan blueberry muffins that look like dogs and

00:05:47 --> 00:05:52
I share this picture because obviously there's pretty high similarity between

00:05:52 --> 00:06:00
Blueberry muffins and dogs one of the exciting techniques that the AI community has invented in the last Few years is a mouthful

00:05:59 --> 00:06:02
But it's called a generative

00:06:01 --> 00:06:07
Adversarial Network and the way this works is imagine there are two neural networks

00:06:06 --> 00:06:12
There's one whose job it is to classify dogs, and then there's another whose job

00:06:11 --> 00:06:18
It is is to try to trick the dog classifier, and so it's going to generate pictures that look a lot like dogs

00:06:17 --> 00:06:24
but aren't quite and this back and forth competition between these two networks makes the

00:06:24 --> 00:06:26
classifier Network

00:06:25 --> 00:06:29
extremely accurate in fact the most accurate

00:06:28 --> 00:06:32
Image classifiers as these are called are

00:06:31 --> 00:06:39
Basically better than humans at classifying the objects in a picture the way we know is we run contests

00:06:38 --> 00:06:46
So Feifei Lee at stanford set up this thing called image net it's a labelled set of many many pictures and we have

00:06:46 --> 00:06:50
computer algorithms compete with humans for accuracy

00:06:50 --> 00:06:56
Humans are about 95 percent accuracy in other words they get five percent of the

00:06:56 --> 00:07:03
Classifications wrong the best computer algorithms now are below five percent error rates and headed down

00:07:03 --> 00:07:06
so given a picture

00:07:05 --> 00:07:13
When you are asked the question, what is in this picture the AI algorithms are already more accurate than most people

00:07:13 --> 00:07:19
because the accuracy and the cost of doing this type of classification is

00:07:18 --> 00:07:24
So low you're starting to see applications with this image recognition technology inside

00:07:23 --> 00:07:28
So for users of pinterest you already know that you can highlight any

00:07:27 --> 00:07:34
Region of a photo in Pinterest and it will tell you where you can buy that

00:07:34 --> 00:07:37
Object so in this case. We're looking at tea Kettle

00:07:38 --> 00:07:43
pinterest recently added this capability to the live camera

00:07:42 --> 00:07:49
So you can just turn on your video camera inside the pinterest app and point it around and it will

00:07:48 --> 00:07:54
Classify objects as you're spitting your camera around if you notice one of the labels on this table

00:07:53 --> 00:07:56
You'll see that it says eames

00:07:55 --> 00:08:04
Which is for Charles ian's the designer of the table in this picture, and this gives you a sense an intuition of how?

00:08:04 --> 00:08:08
Computer algorithms can actually be more accurate than humans

00:08:07 --> 00:08:14
Most people who aren't designers would look at that picture and not realize that Charles eames was the designer

00:08:13 --> 00:08:16
but if a computer has seen enough examples of

00:08:16 --> 00:08:19
Charles II design

00:08:18 --> 00:08:23
Tables or chairs, it'll be able to make that classification very very accurately

00:08:24 --> 00:08:26
Here's another example

00:08:25 --> 00:08:31
And it's one of my favorites so the fellow in the picture you see in the back is a guy named

00:08:31 --> 00:08:37
makoto Kiki he used to be an embedded systems designer, but decided to go back home and

00:08:37 --> 00:08:42
Work on his family farm and his family farmed cucumbers

00:08:41 --> 00:08:47
I can just imagine him as a kid being required as one of his chores to Sort the cucumbers into

00:08:46 --> 00:08:51
One of the sixteen grades that cucumbers are sorted in

00:08:50 --> 00:08:59
Japan each grade commands a different price at market and so what he did was - he built himself a cucumber Sorter and

00:08:58 --> 00:09:05
I'm going to run the video so you can watch this as I describe it and so the computer here is a raspberry Pi

00:09:04 --> 00:09:08
He has a robotic arm actuator

00:09:07 --> 00:09:14
And then what he did was he trained an AI using Google's tensor flow to recognize

00:09:14 --> 00:09:17
specific types of Cucumbers as

00:09:16 --> 00:09:22
The Cucumber is fed into the vision system the AI takes a look decides

00:09:21 --> 00:09:26
What grade cucumber it is and pushes it into the right box I?

00:09:25 --> 00:09:28
love this creativity

00:09:27 --> 00:09:32
To realize look the tech makes this possible for a single person to do now

00:09:31 --> 00:09:38
and I love how inexpensive it was for him to create this cucumber Sorter and

00:09:37 --> 00:09:44
So as I think about the promise of AI I think about thousands of applications getting written like this

00:09:43 --> 00:09:49
and if you want to pause for a moment, and think about what application in my organization

00:09:48 --> 00:09:56
whether I work in a company, or a foundation or a government organization, what application would get better if

00:09:56 --> 00:10:02
The algorithms could recognize what was happening in the world make a classification and do something

00:10:01 --> 00:10:08
And I'm sure you can think of one in the next five seconds where that would make somebody's life a lot better

00:10:07 --> 00:10:10
So I love this very

00:10:09 --> 00:10:16
Inexpensive super creative use of AI and I think we're going to see thousands and tens of thousands of applications like this

00:10:15 --> 00:10:18
over the next decades

00:10:17 --> 00:10:25
So if you scale that example up a little here is an example from a company called Blue River technologies out in Sunny Bill

00:10:24 --> 00:10:32
they've mounted cameras on the back of the tractor and as the tractor travels over a lettuce leaf field it takes a picture of

00:10:31 --> 00:10:37
The lettuce head, and it will squirt precisely the right amount of fertilizer

00:10:36 --> 00:10:40
onto that lettuce head given its state of development

00:10:39 --> 00:10:45
And so when Ai makes a cheap for us to see and understand what's going on in the world

00:10:44 --> 00:10:48
We won't fertilize Fields anymore. We will fertilize

00:10:47 --> 00:10:50
individual heads of lettuce you

00:10:50 --> 00:10:57
Probably saw the coverage that Amazon got when it announced that it was building physical stores right the irony of ironies

00:10:57 --> 00:10:58
but of course

00:10:57 --> 00:11:02
they're physical store is going to be tech enabled and

00:11:01 --> 00:11:06
One of the things that they'll have in their stores is cameras in the stores that will recognize

00:11:06 --> 00:11:07
what the

00:11:06 --> 00:11:13
Shoppers are actually buying so you'll never have to go through a checkout counter because as soon as you pull something off the shelf

00:11:12 --> 00:11:21
It will know and automatically. Tally the results, so another great example of what will happen when it becomes cheap to recognize

00:11:20 --> 00:11:23
What's happening in the world?

00:11:22 --> 00:11:29
We're going to see these techniques show up in places that they haven't shown up before and so I've got three examples of robots here

00:11:28 --> 00:11:33
the top one is an orchard Supply robot and if you ever visit, Silicon Valley

00:11:33 --> 00:11:38
Fly through San Jose once the orchard supply store nears the San Jose airport

00:11:38 --> 00:11:40
Actually has this greeter

00:11:39 --> 00:11:41
Slash

00:11:40 --> 00:11:47
Recognizer robot and in the picture you'll see the woman is holding up a nail to the camera and the robots job is to recognize

00:11:46 --> 00:11:53
That nail and walk the user the shopper all the way into the aisle where that nail is

00:11:52 --> 00:11:56
You can sort of see that the robot has a screen in its belly

00:11:55 --> 00:12:03
And if it can't recognize the thing that the shopper is holding up then it will open up a teleconference

00:12:02 --> 00:12:09
So the shopper can show the nail or whatever it is to a human in the lower left

00:12:08 --> 00:12:16
This is a robot from a Mountain view based company called Knightsbridge, and it's a robotic guard

00:12:16 --> 00:12:22
So the good news is if you are a robot security guard you can do some things that

00:12:21 --> 00:12:25
Humans can't do like you can detect trace amounts of carbon monoxide

00:12:25 --> 00:12:32
You can put all kinds of sensors in the robot you can record the video of what's happening and so on now

00:12:31 --> 00:12:36
That's the good news the bad news is there are still things that a human?

00:12:36 --> 00:12:42
Armed guard can do that. The robot can like open a door doorknob or go upstairs

00:12:42 --> 00:12:51
But it's exciting to see that. We're going to have applications of robots like this because it can maneuver its way around the world and

00:12:50 --> 00:12:58
What's happening in it the last example of a robot that I'm going to talk about here is in lower right corner?

00:12:57 --> 00:13:02
That's a robot from a company called Bossa Nova Robotics out in Pittsburgh, Pennsylvania

00:13:02 --> 00:13:10
The robot is wandering up and down the aisles of a supermarket making sure that there is inventory on the shelf

00:13:09 --> 00:13:11
so

00:13:10 --> 00:13:16
Supermarkets lose a certain percentage of revenue every year just because they had it in the back

00:13:15 --> 00:13:23
But it wasn't on the shelf so robots consult that and then the other thing the robot can do is sometimes

00:13:22 --> 00:13:27
product managers pay for special treatment inside the aisle

00:13:26 --> 00:13:32
So you've probably seen the flashing coupon kiosk or you've seen an attractive display of the product in

00:13:32 --> 00:13:38
Retail land what that display should look like is governed by this thing called the planogram

00:13:37 --> 00:13:43
And so what the robot can do is verify the correctness of the planogram?

00:13:42 --> 00:13:50
There's literally a start-up today where you can have people run into a store and take a picture of the display with their phone

00:13:50 --> 00:13:55
but if you think about it for a second that really is a great job for a robot and

00:13:54 --> 00:13:57
not so great job for a human and

00:13:56 --> 00:14:02
So we're going to see more and more of these robots in different environments that they hadn't been before

00:14:02 --> 00:14:08
Primarily because now it's cheap for them to see and understand. What's happening in the world

00:14:07 --> 00:14:13
So if algorithms are already better at humans at recognizing. What's in a picture?

00:14:12 --> 00:14:18
What's the next frontier this next slide gives you a sense of what researchers are working on now?

00:14:18 --> 00:14:21
Which is instead of just looking at a single picture?

00:14:20 --> 00:14:28
They will look at a sequence of pictures and try to come up with the story that ties the pictures together

00:14:28 --> 00:14:35
So if you eyeball these pictures for a little bit and try to figure out what ties these pictures together into a coherent narrative?

00:14:35 --> 00:14:38
I bet you'll come up with it, so

00:14:38 --> 00:14:41
What's going on in these pictures is?

00:14:40 --> 00:14:46
Somebody's got a frisbee stuck on the roof, but he doesn't have a ladder and so he has this bright idea that

00:14:46 --> 00:14:53
Instead of going to get the ladder. He's going to try to kick a soccer ball up onto the roof and dislodge the frisbee

00:14:52 --> 00:14:58
So that he can continue playing with his frisbee and of course this has happened to me

00:14:57 --> 00:15:03
The result is actually he gets both the ball and the frisbee stuck on the roof right, so there is a narrative

00:15:02 --> 00:15:06
There's a before-and-after there and a caused B

00:15:05 --> 00:15:08
and said one of the next frontiers

00:15:07 --> 00:15:16
In Ai research is to reconstruct the narrative from a set of pictures and not just to figure out. What's in a specific picture

00:15:16 --> 00:15:25
seeing and understanding the world will enable your favorite search engine to answer queries that it really can't answer today and

00:15:24 --> 00:15:27
So on this slide. I'm showing four examples of

00:15:27 --> 00:15:30
technologies that Google is hard at work on

00:15:30 --> 00:15:37
These examples. Got shared by Jeff Dean who runs the Google brain project. I'm just so excited about these

00:15:36 --> 00:15:45
I mean Just look at the queries that will be answerable in the near future that just aren't answerable today because it's still

00:15:44 --> 00:15:50
Relatively expensive to be able to answer questions like this my personal favorite is one in the lower left

00:15:49 --> 00:15:52
I can't wait for a robot to go into the kitchen

00:15:51 --> 00:15:54
make me a cup of tea and bring it to me, so

00:15:54 --> 00:16:00
That gives you a sense of what is possible now with algorithms that see and understand the world

00:15:59 --> 00:16:04
I want to move on to our third category of things that a I will make cheap

00:16:05 --> 00:16:08
a I will make it cheap to create content

00:16:09 --> 00:16:15
Content so let's start off with basic newspaper articles tweets stories

00:16:15 --> 00:16:18
during the last Olympics two

00:16:17 --> 00:16:25
professional journalism outfits won the Washington post and then another the Chinese news aggregator called tokyo

00:16:25 --> 00:16:32
Both Ran experiments where they had a eyes write coverage about sporting events in the Olympics

00:16:32 --> 00:16:40
So in the Washington post case they tried doing simple things like you know a defeated b and here with the times

00:16:39 --> 00:16:43
Touji, L. Was a little more aggressive and wrote

00:16:43 --> 00:16:50
Full-length articles about what happened in the game based on the results of the game and video footage of the game

00:16:49 --> 00:16:56
So ais are getting to the point where they can write basic coverage who what when where why articles of this sort?

00:16:57 --> 00:17:01
one of my favorite genres of video is the

00:17:00 --> 00:17:07
Cooking tutorial you might have seen videos from tasty from our friends at buzzfeed in your Facebook newsfeed at one point

00:17:06 --> 00:17:10
Or you might just find them on YouTube all by yourself

00:17:10 --> 00:17:15
Algorithms are now able to watch the exact same videos that you're watching on YouTube or Facebook

00:17:14 --> 00:17:20
And they're basically able to retro actively create the cookbook

00:17:20 --> 00:17:29
Instructions for that recipe so in other words they can segment the video into the discrete actions that are being performed mix flour

00:17:28 --> 00:17:33
Add eggs put it in the oven, and they're able to

00:17:32 --> 00:17:41
Figure out the sequence of steps that it took for the people in the video to create that culinary Masterpiece

00:17:41 --> 00:17:46
Another great example of what you can do if you can create content

00:17:46 --> 00:17:53
Another example of the type of content AI algorithms are now able to create our photorealistic pictures

00:17:53 --> 00:18:01
The input is the sentence on the top of each of these columns, so it's a text description of a picture

00:18:00 --> 00:18:07
So for instance the first one in the first column the text reads the bird is red and brown in color

00:18:06 --> 00:18:11
With a stubby beak and the output is the last row

00:18:10 --> 00:18:18
The bottom row where you get exactly what you described in the picture now if you look carefully at the pictures

00:18:17 --> 00:18:22
you'll see they don't quite look realistic yet, or

00:18:21 --> 00:18:25
Some birds are more realistic looking than others

00:18:24 --> 00:18:27
But this area of research is very

00:18:26 --> 00:18:32
Exciting it uses that technique we mentioned earlier when we saw the picture of the blueberry muffins called generative

00:18:32 --> 00:18:38
Adversarial networks, and it's using the networks to actually create these photo realistic pictures

00:18:37 --> 00:18:43
So this is a very exciting area of research which will allow us to

00:18:43 --> 00:18:46
generate pictures from text descriptions

00:18:46 --> 00:18:51
We can also instead of taking text as an input

00:18:50 --> 00:18:57
We can take what looks like a hand sketch as an input and also ask the algorithms to generate a photorealistic picture

00:18:57 --> 00:19:01
So that's exactly what you're seeing here on the left side is the input on

00:19:01 --> 00:19:08
The middle Column of each set is the actual item and then on the right side is the algorithm

00:19:07 --> 00:19:15
Creating a photorealistic picture based on the sketch, and you can see with some purses it does better than others

00:19:14 --> 00:19:18
But it's pretty exciting to think that just given a sketch

00:19:17 --> 00:19:25
We'll be able to fill in all of the details that you would expect in a photo of a bag with that sketched outline

00:19:26 --> 00:19:30
the next type of content that AI algorithms are

00:19:29 --> 00:19:35
Generating is actual music and so we're going to do something fun here

00:19:35 --> 00:19:41
I'm going to play you two musical samples one is generated by an AI and the other is written by a human and

00:19:40 --> 00:19:49
So take a listen and then after you take a listen guess which one was which and then once I come back

00:19:48 --> 00:19:51
I'm going to tell you what it was

00:20:10 --> 00:20:13
you

00:20:39 --> 00:20:42
So now that you've listened to the examples

00:20:41 --> 00:20:47
I'll tell you that the first fragment was generated by an AI

00:20:46 --> 00:20:52
By a company called jib deck out in the uk and the second was written by a human

00:20:51 --> 00:20:58
So, it's pretty exciting to think that we're getting to the point where that's actually a hard question to answer

00:20:57 --> 00:21:02
Which one was generated by an AI and which one was generated by humans?

00:21:01 --> 00:21:07
I've already seen maybe half a dozen startups that are working on this very problem that we'll be able to generate

00:21:07 --> 00:21:11
music on the fly and think of all the places where

00:21:11 --> 00:21:19
Music would be necessary if you're a corporation or an organization with a distinctive jingle or a theme you can iterate on that theme?

00:21:18 --> 00:21:24
You can feed the theme to the algorithm and have it generate a completely new song

00:21:23 --> 00:21:29
for your conferences or your podcasts or your commercials and

00:21:28 --> 00:21:31
That day is coming soon

00:21:31 --> 00:21:37
The next type of content I want to talk about is movie trailers everybody loves a good movie trailer

00:21:36 --> 00:21:44
I'm going to show you one. That's basically generated by a computer. This is for a movie called Morgan and after you watch it

00:21:43 --> 00:21:47
I'll talk to you a little bit about who did it and what they did?

00:21:52 --> 00:22:00
It's first birthday. This is our wildest expectations

00:22:04 --> 00:22:07
Nice to meet you Morgan I

00:22:10 --> 00:22:13
Have to meet you things

00:22:19 --> 00:22:26
I'm a 13 year old daughter. We don't get to hear much anymore

00:22:42 --> 00:22:46
Don't go in okay. What don't you go down there skips?

00:22:46 --> 00:22:49
Something is great. Amy I

00:22:51 --> 00:22:54
Have to go say goodbye to my hair

00:22:57 --> 00:23:03
So kind of creepy right a good movie trailer put you into the mood shows you the suspense

00:23:02 --> 00:23:06
So this trailer was created by Ibm Watson

00:23:05 --> 00:23:10
and it selected all of the scenes that you saw in the trailer the

00:23:09 --> 00:23:15
Soundtrack was actually composed by human although as you heard a few minutes ago

00:23:15 --> 00:23:19
that is also something increasingly possible for an AI

00:23:18 --> 00:23:22
One of the things I think this example highlights is

00:23:22 --> 00:23:27
It might be a while before a eyes can create a movie trailer

00:23:26 --> 00:23:31
That's good enough that a movie executive or a producer would want to show

00:23:31 --> 00:23:36
but it can save a lot of time for the human editor who has that job today, so

00:23:36 --> 00:23:40
Even if they just got candidate scene selections

00:23:39 --> 00:23:45
And then there's a human involved in the final edit with the mixing of sound and so on and so forth

00:23:44 --> 00:23:49
That's a big load off any human movie editors plate

00:23:48 --> 00:23:57
And I think this idea of AI is helping humans you might call that intelligence augmentation is going to be a huge trend

00:23:56 --> 00:24:00
And I'm going to come back to this idea towards the end of the presentation

00:24:01 --> 00:24:07
We're just now starting the experiments to actually write software with artificial intelligence

00:24:07 --> 00:24:13
Microsoft has a system called deep coder that creates software in much

00:24:12 --> 00:24:20
The same way that human developers do which is they go find some sample code and they sort of remix it for their purposes?

00:24:19 --> 00:24:22
so if you talk to a developer

00:24:21 --> 00:24:29
they will usually just tell you that they find all of their great code samples on github and stack exchange and they sort of

00:24:29 --> 00:24:33
Combine it in a creative way based on the needs of their application

00:24:32 --> 00:24:40
And so the ais are also doing that so once they've absorbed all of the content they can actually create

00:24:39 --> 00:24:47
the software program that given a specific input generates a specific output and so even

00:24:47 --> 00:24:53
Programming is going to be something that ais can at least do part of as we mature

00:24:53 --> 00:25:01
So that gives you a sense of the type of content that ais can create so newspaper articles tweets

00:25:00 --> 00:25:05
oftware music movie trailers and So on

00:25:05 --> 00:25:10
Alright another category of things that a I will make cheap is that it will make it cheap to predict the future

00:25:10 --> 00:25:16
In fact I got this whole idea of organizing the presentation this way from a harvard business review article

00:25:16 --> 00:25:23
Where they said hey I was going to in fact reduce the cost of making predictions. Which I think is absolutely true

00:25:23 --> 00:25:25
I'll talk about a few examples here

00:25:24 --> 00:25:30
And you can think of this entire presentation is just sort of a riff on that idea

00:25:29 --> 00:25:34
What else well Ai make cheap so let's talk about predictions?

00:25:33 --> 00:25:37
Our friends at buzzfeed have a whole framework that

00:25:36 --> 00:25:42
Identify videos that are performing well in one country that might perform well in another country

00:25:41 --> 00:25:48
and so they have an automated pipeline that highlights videos that seem to be getting a lot of views and say English and

00:25:48 --> 00:25:54
Suggest to a body of human editors. Hey, we should translate this one to French or Spanish or Chinese

00:25:54 --> 00:25:58
Because we're predicting that it will do well in those countries

00:25:58 --> 00:26:06
Here maybe one of my favorite applications of Ai of all time, which is to replace the password, so if I could take as input

00:26:06 --> 00:26:12
Things about you like the way you walk, or the way you type or the way you swipe on your phone?

00:26:11 --> 00:26:15
And I could reliably predict whether that was you or not

00:26:14 --> 00:26:20
I could replace the password and that's exactly what our Portfolio company unify

00:26:19 --> 00:26:23
Id is doing they do this great?

00:26:22 --> 00:26:27
Demo where you're carrying your iphone and you authenticate into a website?

00:26:26 --> 00:26:29
And it doesn't challenge you for password

00:26:28 --> 00:26:37
because it already knows you're you you walk like you and then they hand the iphone to somebody else that the phone doesn't belong to

00:26:36 --> 00:26:43
In fact they tried to do this with somebody same height and you know to the human observer walked the exact same way

00:26:42 --> 00:26:46
the person walked around the table tried to login to the website and

00:26:46 --> 00:26:54
The website refused the way you walk is one of the factors they can use to predict whether you are you and so today

00:26:53 --> 00:26:58
We use passwords and sometimes with sophisticated web sites you have two-factor authentication

00:26:58 --> 00:27:02
We all know that eventually the algorithms will get so good at using

00:27:02 --> 00:27:06
Biometric Factors like the way you walk, or the way you type

00:27:05 --> 00:27:12
Or the way, you swipe and predict that you are you and I can't wait for the password list feature

00:27:12 --> 00:27:16
here's another scenario that I can't wait for so

00:27:15 --> 00:27:23
Think back to the last time you called your merchant or your bank the first 15 minutes of that call were probably something like this

00:27:23 --> 00:27:28
We're glad you called who are you please prove to us that you are a customer?

00:27:27 --> 00:27:34
and then you go through this rigmarole of your social security number or your customer id or something off your last account statement and

00:27:33 --> 00:27:38
Then the next part of the conversation is okay what seems to be the problem today?

00:27:37 --> 00:27:41
How can we help so I can get you to the right second level support rep?

00:27:41 --> 00:27:46
Well once we get very good at predictions both of those will be completely automated

00:27:45 --> 00:27:49
So the first part is you know whether you're a customer or not?

00:27:48 --> 00:27:52
We already saw how companies like unify Id

00:27:51 --> 00:27:57
Could predict with very high accuracy that you are who you claim to be and then for the second problem?

00:27:56 --> 00:28:01
Imagine that you were just using the app or you were on their website

00:28:00 --> 00:28:04
Let's say that it's your 401k provider

00:28:03 --> 00:28:08
And you were on the part of the site where you're going to change your allocation in other words

00:28:07 --> 00:28:12
for the retirement money that I'm contributing which funds do I buy

00:28:12 --> 00:28:14
And you kind of got stuck?

00:28:13 --> 00:28:16
Now just looking at the web logs

00:28:15 --> 00:28:20
We can make a pretty good prediction that when you call in having had that experience

00:28:19 --> 00:28:27
I got stuck making changed my allocation for my 401k that that's exactly the specialist that you want to talk to so imagine how

00:28:26 --> 00:28:33
Liberating and how awesome it will be when you call your bank the next time they don't ask for a customer

00:28:32 --> 00:28:37
Id and you're already talking to the specialist that can help you with the problem you had and

00:28:36 --> 00:28:41
that's all based on being able to make predictions accurately and

00:28:41 --> 00:28:44
inexpensively

00:28:43 --> 00:28:50
here's some fun research from mit where they had algorithms watch some soap operas in sitcoms and

00:28:49 --> 00:28:57
The job of the Algorithm was to predict whether the characters in the scene are going to handshake or hug or high-five?

00:28:56 --> 00:28:59
or kiss in the next few minutes

00:28:58 --> 00:29:05
o imagine that algorithms were good at predicting what people were going to do and

00:29:04 --> 00:29:10
The many many applications whether you're a government analyst or you're an e-Commerce

00:29:09 --> 00:29:17
Person looking to optimize flow if you could predict based on what people are doing what their next behavior is going to be

00:29:16 --> 00:29:20
obviously that has lots of commercial and

00:29:19 --> 00:29:22
intelligence applications

00:29:22 --> 00:29:27
Here's another great example of what happens when we can predict the future

00:29:27 --> 00:29:34
The company free gnome is working on a cancer diagnostic by reading the Dna that's free-floating in your bloodstream

00:29:33 --> 00:29:39
So compare that today to the state of the art in cancer diagnosis

00:29:38 --> 00:29:43
Which is will do a tissue biopsy, we're going to find a suspicious lump

00:29:42 --> 00:29:47
We're going to take a tissue sample, we'll send it to the lab to do analysis

00:29:47 --> 00:29:53
Imagine that you could get a higher accuracy read just from doing a blood sample

00:29:53 --> 00:30:00
So when you were giving blood for your cholesterol screen anyway, you could also get screened for cancer

00:29:59 --> 00:30:05
that's exactly what freedom is doing and as your doctor will tell you the earlier you get a

00:30:04 --> 00:30:08
diagnosis the higher your survival rate for cancer

00:30:07 --> 00:30:13
So if it was inexpensive enough to do a cancer diagnosis every time you got a blood screen

00:30:13 --> 00:30:20
We're going to save a lot of lives and a lot of dollars out of healthcare costs because we caught the cancer early

00:30:20 --> 00:30:23
Here's another healthcare

00:30:22 --> 00:30:26
Example this one from a company called Cardiogram

00:30:25 --> 00:30:33
Using the data that comes off an apple watch they can predict whether you're having one of these abnormal cardiac events

00:30:32 --> 00:30:35
When you're having a heart attack, it's pretty obvious

00:30:34 --> 00:30:40
But when you're having one of these other events which I'm not even going to try to pronounce you can read it off the slide

00:30:39 --> 00:30:47
It's not always obvious to the person having that that they're having it and so having the application predict that

00:30:47 --> 00:30:55
Using the sensor Data coming off an iPhone has already saved lives and so I'm super excited about these classes

00:30:55 --> 00:30:59
Applications that can predict the future are you going to have a heart attack?

00:30:58 --> 00:31:01
are you going to have cancer and

00:31:00 --> 00:31:07
Do that in a very inexpensive way so we can get these diagnoses early when the treatment is most effective?

00:31:07 --> 00:31:13
So that gives you a sense of what kinds of things are possible when we can predict things inexpensively

00:31:13 --> 00:31:15
All right

00:31:14 --> 00:31:22
I've got two other categories the next of the last category is AI is going to make a cheap to automatically optimize complex systems

00:31:21 --> 00:31:25
It's a bit of a mouthful. So let's go straight to the examples

00:31:25 --> 00:31:28
Some of you may use ways which

00:31:28 --> 00:31:32
Routes to take if your main route is busy

00:31:31 --> 00:31:37
And you can think of this as the perfect example of a system that optimizes complex Behavior

00:31:36 --> 00:31:41
we've got thousands of people taking thousands of Streets and

00:31:41 --> 00:31:49
With some intelligence at the right point we can get people off congested routes onto uncongested routes, and so it's automatically

00:31:49 --> 00:31:55
Optimizing the driving behavior of people in a particular region great example of what Ai can do

00:31:56 --> 00:31:59
another example is

00:31:58 --> 00:32:06
Getting players on a soccer field to be in just the right place, so this is research from Caltech mit

00:32:06 --> 00:32:09
and Disney research and

00:32:09 --> 00:32:16
Since soccer players are now wearing sensors that record their exact location on the soccer field at all times

00:32:15 --> 00:32:18
This is increasingly common in Sports

00:32:17 --> 00:32:21
we now have this beautiful data stream of

00:32:20 --> 00:32:28
Here's where all the soccer players are at any given second in the game and now we can do the analysis and so the analysis

00:32:27 --> 00:32:30
that this research team did was

00:32:29 --> 00:32:36
Can we suggest different places for people to be to minimize the chances of getting scored on?

00:32:35 --> 00:32:43
so this was a defensive analysis and what they did was they compared a specific team on the far left which had a

00:32:42 --> 00:32:49
69% chance of getting scored on given the location of the players with a very good team in this case

00:32:48 --> 00:32:55
Manchester city on the right side and you'll see that the arrangement of players on the Manchester City team?

00:32:55 --> 00:32:59
resulted in only a 41% chance of being scored on and

00:32:58 --> 00:33:07
So algorithms can now predict and optimize this incredibly complex system of where our players. Where is the ball?

00:33:06 --> 00:33:13
What's the situation where is the goalie and take all of these variables into account and figure out where people should be?

00:33:13 --> 00:33:16
instead of where people actually are

00:33:16 --> 00:33:20
Here's another example of optimizing a complex system

00:33:19 --> 00:33:27
and that complex system is something that computer people use all day long and that's a compiler the compiler turns a

00:33:26 --> 00:33:29
High-level language like python or Java

00:33:29 --> 00:33:37
Into assembly code that the computer can run what you're looking at here is AI optimized assembler code

00:33:36 --> 00:33:39
so it takes as input the

00:33:39 --> 00:33:47
Assembly language that a normal compiler writes, and it rewrites it in a completely optimized way

00:33:46 --> 00:33:53
Not only is the instruction set much much shorter, but the resulting code runs 1.6

00:33:52 --> 00:33:57
Times faster than the code that's spit out by the compiler today

00:33:56 --> 00:34:05
And so we're going to see AI optimize these incredibly complex things even programming compilers using machine learning tanks

00:34:05 --> 00:34:10
More and more companies are using mathematical models to predict things

00:34:09 --> 00:34:18
like how shelf-stable will this beer be or what's the likelihood of this plane wing surviving turbulence or

00:34:18 --> 00:34:24
What's the likelihood that I get better than average stock market returns using this algorithm?

00:34:24 --> 00:34:30
so there's all kinds of things that people have built models on there's a company called cig off that can take that model and

00:34:31 --> 00:34:37
Tune the model so that it gets to be an even better predictor of whatever it was that you were trying to predict

00:34:37 --> 00:34:42
So for people who have existing models where you're trying to predict behavior

00:34:41 --> 00:34:46
Are you likely to buy this next thing if I recommend it to you?

00:34:45 --> 00:34:50
are you likely to fall on your credit card payments if I offer you a credit card and

00:34:50 --> 00:34:58
So on and so forth if you already have a model you can try sig opt that will make that model even more powerfully predictive

00:34:57 --> 00:35:00
with machine learning

00:35:01 --> 00:35:07
Our friends at Google tried their hand at optimizing electricity consumption in their data centers

00:35:06 --> 00:35:12
Now as you might imagine Google like many of the public cloud providers consume a lot of electricity

00:35:12 --> 00:35:17
They consume so much electricity in fact they make their data center

00:35:16 --> 00:35:20
location decisions around the availability of

00:35:19 --> 00:35:24
Cheap electricity so they'll put them right next to the hydroelectric Dam

00:35:23 --> 00:35:28
Where you don't suffer a lot of transmission losses getting that electricity to your data center?

00:35:27 --> 00:35:33
So it would be a big deal if they could power the exact same workloads that are already running

00:35:32 --> 00:35:38
Answering all our queries and showing us all the youtube videos that we want but consume less electricity

00:35:38 --> 00:35:45
That's exactly what the google deepmind team was able to do so they took something like a hundred and twenty variables

00:35:45 --> 00:35:48
Which is is this server busy?

00:35:47 --> 00:35:53
Or is it getting hot or is the chiller on or is the fan of this air conditioner unit on?

00:35:53 --> 00:35:56
All of these variables fed into a system

00:35:55 --> 00:36:04
And they were able to take 20 to 25 percent of the electricity out of the equation serving the exact same workload that

00:36:04 --> 00:36:07
May not sound like a lot, but if you are a data center

00:36:06 --> 00:36:11
nerd getting twenty to twenty five percent of your electricity cost out of the equation is a

00:36:11 --> 00:36:17
Huge deal and it illustrates one of the things that machine learning algorithms are very good at which is

00:36:16 --> 00:36:23
Humans are notoriously bad at trying to predict what will cause what and after about three or four?

00:36:23 --> 00:36:30
Dimensions your mind just kind of gives up your brain isn't programmed or optimized for that type of mathematical optimization

00:36:29 --> 00:36:37
But machine learning algorithms love lots of data and are able to do this in a way that human brains are not wired to do

00:36:37 --> 00:36:44
ur friends at instacart applied the exact same technique trying to minimize the amount of time it would take for a

00:36:43 --> 00:36:48
grocery Shopper and driver to get your groceries to your house, so

00:36:48 --> 00:36:51
using a variety of Machine learning techniques

00:36:50 --> 00:36:58
They were able to shave eight percent of the time that it took for a shopper to get through a supermarket and to your house

00:36:57 --> 00:37:00
So it's a very complex

00:36:59 --> 00:37:05
Set of decisions that every shopper has to make about which aisle to go to and in what order and then of course

00:37:04 --> 00:37:10
Getting to your house is a maze unto itself and so using optimization techniques

00:37:09 --> 00:37:15
They were able to save 8 percent of the total time it took for a shopper to get to your house

00:37:15 --> 00:37:22
So the last category, and this is my personal favorite the last category of things that a I will make cheap is

00:37:22 --> 00:37:29
Language understanding, so we'll be able to understand each other better. We'll be able to understand our computers our computers

00:37:28 --> 00:37:32
We'll be able to talk to us and again. This is one of my favorite categories

00:37:32 --> 00:37:38
So stanford research has already shown that it's faster to talk to your phone than to type on it

00:37:37 --> 00:37:40
This effect is more pronounced in Chinese

00:37:39 --> 00:37:42
Which is very difficult to type?

00:37:41 --> 00:37:49
but it's also true in English where speed type is can go pretty fast that that small keyboard on your iPhone or

00:37:48 --> 00:37:57
Android device is still pretty hard to type on and so accuracy rates have gotten so good that people who talk to their phones can

00:37:56 --> 00:37:59
communicate messages three times faster than typing

00:38:00 --> 00:38:06
I love this example of natural language understanding it's from the inbox team at Google

00:38:05 --> 00:38:10
the Inbox team launched a feature called Smart Reply which

00:38:10 --> 00:38:16
Suggested replies based on the content of an email it launched originally as an april

00:38:15 --> 00:38:23
Fool's joke in 2009 and in February when I heard Jeff dean talking about it. He pointed out that smart Reply was

00:38:23 --> 00:38:28
Generating 10% of all mobile Inbox Replies, which is amazing

00:38:27 --> 00:38:34
It's gotten so accurate that it's right 10 percent of the time and it's probably right

00:38:33 --> 00:38:41
More than that people just don't choose to use it so it's already generating 10 percent of all replies based on its

00:38:40 --> 00:38:46
understanding of the context of the message and what the likely replies should be

00:38:47 --> 00:38:50
Here's another good example of natural language understanding

00:38:49 --> 00:38:54
And this one is about trading summaries for multiple documents

00:38:53 --> 00:38:58
When I was a product manager at oracle a long time ago

00:38:58 --> 00:39:05
Oracle had this product called oracle context which would generate summaries based on text and it had this genius demo

00:39:04 --> 00:39:13
Where you could slide a slider bar and the more you slid it the shorter the summary got and it was just this mind-blowing?

00:39:12 --> 00:39:18
application of AI and all of those applications have gotten much much better with the advent of

00:39:17 --> 00:39:24
Deep learning techniques a new york-based company called a go low is using those techniques to generate summaries

00:39:23 --> 00:39:27
You can give it as input one or more documents

00:39:26 --> 00:39:32
And it will do its best to preserve the meaning of that document as it generates a summary

00:39:31 --> 00:39:34
Anybody who has ever had a job where they had to summarize?

00:39:34 --> 00:39:40
What's in an email or in a document or in a combination of those the email and the document is?

00:39:39 --> 00:39:45
Obviously super excited about the possibility of having vai do it instead of themselves

00:39:46 --> 00:39:50
Here's another example of AI powering natural language

00:39:50 --> 00:39:58
Applications and in this case it's a company called tech co and what it does is it helps you write the optimal job description

00:39:57 --> 00:40:01
So as hiring managers we might think that we write very good

00:40:00 --> 00:40:06
Job descriptions that appeal to the people most likely to do a good job in our roles

00:40:05 --> 00:40:09
but the reality is we bring all kinds of biases and

00:40:09 --> 00:40:16
Blind spots to writing the job description what text eo does is remove that bias it will?

00:40:16 --> 00:40:22
Suggest changes to your document to your job description as you write it in order to appeal to

00:40:21 --> 00:40:26
The person who's most likely to do a good job at that job

00:40:26 --> 00:40:35
A company called everlaw out in Berkeley is applying this natural language understanding magic to the trial process

00:40:34 --> 00:40:39
So what it can do is can look at all the documents that

00:40:39 --> 00:40:44
surface during the so-called ediscovery process of a trial where

00:40:43 --> 00:40:45
metaphorically

00:40:44 --> 00:40:51
What somebody does is dump a truckload of documents on your desk and your job is to go through them and prepare for the trial?

00:40:50 --> 00:40:54
So whatever law can do is

00:40:53 --> 00:41:01
Automatically categorize the documents and show you more documents about a specific topic that you might be interested in based on

00:41:00 --> 00:41:06
Natural language understanding of the actual content of the document that saves a lot of time

00:41:05 --> 00:41:10
And it helps make sure that you don't miss something that would be very

00:41:09 --> 00:41:16
Important in the Trial that you just couldn't get to because you couldn't hire enough paralegals to read the documents

00:41:17 --> 00:41:22
As Ai systems get increasingly sophisticated at understanding us

00:41:21 --> 00:41:26
I think one of the things that will become important from a user experience point of view is

00:41:26 --> 00:41:29
ystems that understand our emotions and

00:41:29 --> 00:41:32
can simulate emotions in

00:41:32 --> 00:41:37
Interacting with us so our friends at Anki built this awesome

00:41:37 --> 00:41:41
ducational robot called Cosmo and they literally hired a

00:41:41 --> 00:41:44
Pixar Animator to design the

00:41:44 --> 00:41:49
motional interaction Style of the Robot I

00:41:48 --> 00:41:53
Don't know if emotional design is going to get folded into the overall user experience

00:41:53 --> 00:41:56
Designers job or if it becomes a specialty of its own?

00:41:56 --> 00:42:03
But I am excited about this idea that computer systems will become so sophisticated that we're going to have to bring

00:42:03 --> 00:42:11
emotional design tools to the job to design systems that feel natural to interact with

00:42:12 --> 00:42:18
anybody who's seen Star trek is anxiously awaiting the day of the universal communicator the

00:42:17 --> 00:42:21
automatic language translator that just sits in your ear and

00:42:21 --> 00:42:25
I've literally heard this demo from startups

00:42:24 --> 00:42:30
and so we're very close to the time that we can just pop something into our ear and

00:42:30 --> 00:42:38
Hear another language being translated in real time the demo. I heard had me sitting across from a woman who spoke Spanish

00:42:37 --> 00:42:40
I don't speak any Spanish

00:42:39 --> 00:42:46
She was speaking to me in Spanish and in about a second or two seconds after she was talking

00:42:45 --> 00:42:50
I heard a real-time translation in English in my ear. It was just mind-blowing

00:42:51 --> 00:42:58
And I'm going to wrap up our tour of examples with another example of life-saving technology

00:42:58 --> 00:43:03
So there are two studies here that I want to highlight study one basically looks through

00:43:03 --> 00:43:06
electronic health records and

00:43:05 --> 00:43:12
based on the data in Electronic health records is able to predict people who are likely to commit suicide and

00:43:11 --> 00:43:15
These people might be two or three years away

00:43:14 --> 00:43:21
from that event but they are able to predict with pretty high accuracy in the 80% range of

00:43:21 --> 00:43:28
people who are likely to commit suicide and then study two is from my friend Yuri Alekseyevich, who is a

00:43:28 --> 00:43:33
professor at Stanford and also Chief scientists at Pinterest

00:43:32 --> 00:43:37
he did a study where he analyzed the text coming out of

00:43:37 --> 00:43:44
Crisis counseling support centers in my day used to call somebody if you were feeling down

00:43:43 --> 00:43:46
These days the kids of course

00:43:45 --> 00:43:48
Texts we can take that text corpus

00:43:47 --> 00:43:54
And analyze it for best practices in other words the people who are successful at their interventions. What are they saying?

00:43:53 --> 00:43:56
What are their what are they doing?

00:43:55 --> 00:44:01
What is the strategy that they're using compared to people who are less effective in their interventions?

00:44:00 --> 00:44:09
And so applying AI in this way will one help us identify who's at risk of committing suicide and then two what?

00:44:08 --> 00:44:13
Effective strategies can we use to intervene in that person's life

00:44:12 --> 00:44:15
super exciting

00:44:14 --> 00:44:20
So hopefully you're as excited as I am about the promise of Ai as I said at the top

00:44:19 --> 00:44:25
I think Ai is going to get into every important piece of software that we write in the

00:44:24 --> 00:44:31
Exact same way that the relational database got into just about every important piece of software that we wrote

00:44:31 --> 00:44:38
That relational database ark has been playing out for the last 40 years and I'm excited for the next 40 or 50 years

00:44:38 --> 00:44:46
When Ai goes through the same arc of getting inside every important application. So here's how some thoughts on how to get started

00:44:46 --> 00:44:54
First thought is get to know the tools the tools are improving everyday, so step one get to know the tools

00:44:53 --> 00:44:57
there are a lot of open source tools in fact one of the big differences between

00:44:57 --> 00:45:04
the relational database and AI tools is that a lot of the AI tools are actually open source and

00:45:03 --> 00:45:10
So it's very easy to get started to see how much intelligence you can put inside your applications

00:45:09 --> 00:45:13
Shameless plug here as a companion to this presentation

00:45:12 --> 00:45:19
We're publishing an AI cookbook that will guide you through some of the tools that are available today and point you to more resources

00:45:19 --> 00:45:25
The second is trainer people, so the tools are getting better all the time

00:45:24 --> 00:45:28
But obviously it's people that will use those tools to write applications

00:45:28 --> 00:45:33
There are great moocs there are great online tutorials

00:45:32 --> 00:45:40
and so your job as a leader is to make sure that people in your organization are trained on what's possible and

00:45:40 --> 00:45:48
The tool sets and then finally let a thousand Cucumber's bloom by that I mean give your people room

00:45:47 --> 00:45:55
So that we can collectively let a thousand cucumbers bloom you saw the awesome creativity of the cucumber shorter

00:45:54 --> 00:45:59
That whole project cost less than a thousand dollars. Which is pretty mind-blowing

00:45:58 --> 00:46:07
Give yourself the creativity and the room to figure out where artificial intelligence can really move the needle for your company in

00:46:06 --> 00:46:12
Designing software that people love to use and want to use over and over again

00:46:11 --> 00:46:19
Hope you've enjoyed this tour of what Ai makes possible, and I look forward to meeting with you again on the next podcast

<!-- YOUTUBE_TRANSCRIPT_END -->
