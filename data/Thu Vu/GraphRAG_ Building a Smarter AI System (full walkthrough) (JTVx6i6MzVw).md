---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "video"
video_id: "JTVx6i6MzVw"
title: "GraphRAG: Building a Smarter AI System (full walkthrough)"
video_url: "https://www.youtube.com/watch?v=JTVx6i6MzVw"
channel: "Thu Vu"
channel_name: "Thu Vu"
channel_id: "UCJQJAI7IjbLcpsjWdSzYz0Q"
uploader_id: "@Thuvu5"
published_at: "2026-04-14T08:04:31.000Z"
upload_date: "2026-04-14"
duration_seconds: 2146
duration_human: "35:46"
view_count: 16141
like_count: 743
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-20T03:57:50.471Z"
---

# GraphRAG: Building a Smarter AI System (full walkthrough)

## Video Summary
- source_type: video
- video_url: https://www.youtube.com/watch?v=JTVx6i6MzVw
- video_id: JTVx6i6MzVw
- channel_name: Thu Vu
- channel_id: UCJQJAI7IjbLcpsjWdSzYz0Q
- uploader_id: @Thuvu5
- uploader_url: https://www.youtube.com/@Thuvu5
- published_at: 2026-04-14T08:04:31.000Z
- upload_date: 2026-04-14
- duration: 35:46
- view_count: 16141
- like_count: 743
- has_subtitle: true
- language: en-US
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

📈 Get started with SerpApi for free 👉 https://serpapi.link/thu-vu

💻 Git repo for this tutorial 👉 https://github.com/thu-vu92/graphRAG
📝 Original Microsoft's GraphRAG paper 👉 https://arxiv.org/pdf/2404.16130

🌟 Master Python and Build Awesome AI Projects 👉 https://python-course-earlybird.framer.website/?&utm_source=lessonsdegree

📩 My FREE weekly AI & data insights 👉 https://thu-vu.ck.page/49c5ee08f6

🔑 TIMESTAMPS
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
0:00 - Today's project
1:10 - SerpApi
1:35 - The problem with standard RAG
4:01 - What is GraphRAG
4:50 - When to use GraphRAG vs. standard RAG
5:54 - How GraphRAG works
6:41 - Scraping article data with SerpApi
15:01 - GraphRAG pipeline
15:27 - 1. Importing libraries
16:04 - 2. Configuration
17:14 - 3. Defining ontology
18:37 - 4. Graph extraction prompt
20:40 - 5. Pydantic data model
22:21 - 6. Extracting entities & relationships (and descriptions)
23:45 - 7. GraphRAGStore
24:46 - 8. Querying engine
26:10 - 9+10. Load article data
27:03 - 11. Build knowledge graph
29:44 - 12. Build communities & Generate summaries
30:24 - 13. Visualize graph with d3.js
32:01 - 14. Query the GraphRAG system
35:24 - Conclusions


#graphrag #ai #ThuVu

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

Knowledge graphs aren't just fancy way to represent information. They are a powerful way to help AI actually reason over it. In today's video, we're building a graph rack system to ask

question and understand the topic of AI copyright. This topic is a mess, and I mean that in the most interesting way possible. It's one of the complex topics that everyone talks about, but no one

actually understand what's going on. The information isn't sitting in one place. is scattered across hundreds of news articles, court filings, policy documents, and hot takes published

across the web. So in this video, we are going to build a system that scripts that information live from Google News, turns it into a structured knowledge graph, and then use graph rack to ask

questions no search engine or standard AI could reliably answer. For example, which companies are at the center of these disputes and how are they all connected? By the end of this video, you

know exactly what GraphRack is, why it got all the hype, how it works, and when to use it. And finally, I'll show you how to build it yourself on a real complex document data set you may have.

I'll share a code walkthrough later in this video for this project. Before we jump in, a quick thanks to SER API for sponsoring this video. SER API is what we're using to script Google News

results for our data set in this project. It gives you real time structured clean search results from Google and other search engines through a simple API. So no browser automation

needed and trust me that makes your life a lot easier. I'll link it in description below for you to check out. Let's get into it. Now let's start with a quick recap of how standard or naive

rack retrieval augmented generation works because understanding its limitations is what makes graph rack click. In a typical rack pipeline, you take your documents, so PDFs, articles,

text files, transcripts, and split them into chunks. Each chunk gets converted into a numerical vector using an embedding model. These vectors capture the meaning of the text. So, chunks

about similar topics end up close together in what we call the vector space. Then when a user asks a question, the system converts that question into a vector too, finds the chunks closest to

it and pulls those chunks and feeds them into the LM as context. And the LM then generates an answer based on the question and the context that it was given. This system is great because it

allows the LLM to answer questions about data it was never trained on. things like your company's internal documents, your research papers, your customer tickets, whatever. But here's the

problem. As you have more and more data, the accuracy drops. One study found that vector search accuracy starts degrading at just 10,000 pages, reaching a 12% accuracy drop by 100,000 pages. The more

documents you add, the more overlap you get in the embedding space and the harder it becomes for the system to retrieve the right chunks. But scaling isn't even the main issue. Standard rack

has two more fundamental blind spots. The number one is each chunk is treated as an isolated fragment. Once documents are split and embedded, every chunk exists on its own, disconnected from the

chunks around it and from related information in other documents. The system may find text that sounds related to your question but has no understanding of how those fragments

connect to form a complete picture. The blind spot number two of the standard rack system is that it has no ability to reason across documents. When an answer requires linking information scattered

across multiple sources or when the question is about the data set as a whole like what are the main legal arguments around this topic or what are the main themes emerge from these

documents then standard rack has no mechanism for it this is the problem graph rack was built to solve graph rack adds a structural layer on top here's a core idea it uses an LLM to read its

chunk and extract the entity For example, people, companies, technologies, events, legal cases, and the relationships between them. These entities become notes in a knowledge

graph, and the relationships become edges connecting them. The result is a structured graph of your entire data set that reflects how the information actually relates across documents.

Microsoft research who originally published the GraphRack paper calls this sensemaking the ability to understand connections, patterns and themes across a large body of information rather than

just retrieving isolated facts. Using a knowledge graph has been shown to improve LM response accuracy. Now I want to be clear with you about something. Graph rack doesn't replace standard

vector rack. They're good at different things. Here's the simple rule. At GraphRack, when you're working with hundreds or thousands of interconnected documents or questions require

connecting facts, tracing relationships, or identifying patterns, or you need big picture answers, for example, themes, trends, summaries across an entire data set. You also want transparency and

ability. You need to trace how the system arrived at an answer. And so in general using graph rack approach for your Q&amp;A system makes sense if you are working in domain like law policy or

research where accuracy on complex queries is critical. On the other hand, you can use standard vector rack when the questions are direct fact lookups. For example, when was this law passed or

who filed this lawsuit? Also, when the answer lives inside a single document or chunk and speed and cost are the priority and your data set is small and doesn't have dense across document

relationships. All right, now let's get into how graph rack actually works under the hood. There are two main phases in a graphrack system. The first one is indexing where you build the knowledge

graph from your database and the second one is querying where you actually retrieve information from it. This is a general pipeline. Microsoft's approach which our project follows extends it

into two additional steps. So community detection we are grouping related entities into clusters and the other step is community summarization where we generate LM summaries for each cluster

or each community. At query time, these summaries are queried instead of the raw graph, which is what makes it particularly effective and fast for big picture questions. All right, let's head

over to VS Code and I'll show you step by step how this project works. In this project, I've prepared two Jupyter notebooks. The first one is script info.ipinb.

This is where we script information uh the Google search results for this topic AI copyright and governance. and the other notebook is solely dedicated to implementing the graph rack uh pipeline.

So let me walk you through first how I script the Google search results with SER API. SER API is really cool. If you look at their website and look at the APIs here, there's a list of all

different kinds of APIs that you can use to collect data from the web. So, this is going to be really, really handy if you want to collect data yourself on any topic out there. In my case, I'm going

to use Google search API. And here's the playground where you can test it out for free. So, for example, if I search a query, for example, how to make capuccino. Here's a location. And we

don't need to select location. So, let's search for this query. And here you can see there's a bunch of uh search results that that comes back. And here's the rest of the search results. And you can

see that there's a bunch of um websites. And on the right side, we can see this is the uh JSON response that we would get if we call the API for this search query. So API has a free tier. So you

can try it out for free. In my case, I have a free plan as well and you can generate your own API key for your project. All right, back to the project. First, I'm going to install some

dependencies for this project. So, the three big ones here are firstly Google search results. So, this is the Python client for SER API. That's a service that lets us search Google

programmatically. And uh next we have the draft Lura. This is a library that we use for extracting article text from web pages and YouTube transcript API which grabs transcripts from YouTube

videos. So these are the main libraries that we will be using. Next we go to the import and configuration. So here are just um importing all these uh modules that we need. I've already saved my API

keys in this env file. So we just need to load them instead of hard- coding the API key in the notebook. We also set the maximum number of results to 10 which is how many search results we want per

query. So normally you will get yeah you you'll actually get 10 um articles for the first page of the Google search. But if you want to have only five or seven uh first articles, you can also specify

it here. On the other hand, if you want to collect results from multiple pages from Google search, then you have to call the API multiple times. Next, I defined a function called collect search

results that basically takes a query or list of queries. For example, how to make a cappuccino or in our case AI copyright lawsuits. Then we also take the number of results. So I defaulted to

the maximum number of results for each query. And then this function basically loop over all the queries and uh call the API with with with this basically with this uh lines of code. So use the

Google search module here and apply the parameters that we defined here. So we define the engine as Google query is the query. Google domain is google.com and the language is English etc. And

finally the API key that is our API key. So here we get back the search results and finally I'll just um get back the dictionary and then we just need to append the results for each query to the

raw results variable. And really the rest is just bookkeeping and just uh keeping all the results in in a certain format. In this case, this is um uh I turn it into a data frame and in the end

remove the duplicated URLs. So the same article, same website may appear in the search results for different queries. So I want to avoid that. And so I remove all the duplicates and return the data

frame together with the raw results. And let's just run this. And here we actually run this function collect search results for these two queries. AI intellectual property and copyright

generative AI. You can swap out these out for whatever topic you are researching. So I'll just quickly run this and the output is basically a to table with 10 articles collected.

Actually it's 20. So 10 articles each. And here I just want to give a quick peek at the full raw API response that we actually got. So this is a list of the search results for these two

different queries. So this is useful for debugging and it's not really critical at all. Uh just know that this is the raw results that we actually got um to produce this table. Now the next step is

to actually scrape text from articles and videos that we got from the Google search results. So based on all these different URLs for all these different articles and videos, we can actually

scrape the text from them. So the full article text and not only the uh short snippets here that show up on the Google search. So these scrapers are really the core of this notebook. And here for the

scraping of the uh articles, I'm using the traura library. Oh my god, this is such a difficult library name. And this module basically downloads a web page and

strips away all the junk. For example, the navigation bars, the ads, the footers to give you just the article text. So it's way better than trying to pass the HTML yourself with beautiful

soup or whatever other library for web scraping. And then for the YouTube transcripts, I just extract all the video ids from the URL with a regax. So here is a reck that allows me to extract

the video ID from an URL and then the get transcript function basically take the um video ID that we got and call the YouTube transcript API to get back the transcript. So the whole thing is tied

together in this enrich search results function. It takes the data frame that contains the information for the articles and for the videos and then add the full text column with the results.

So here if I just run it for you and let's see this in action. So here we go. The output here is a data frame again with all the 20 articles and videos that we got from Google search. But the

difference is now we have the full text column that contains the text or the transcripts from articles and videos. So note that I also have to remove some of the articles here that maybe some

articles might be behave or they have bought protection or some videos just don't have captions. So we only keep the results that have the status success. So this gives us only the usable results.

This is the final final output and we can take a look at this. And finally I just save it into a um CSV file called AI copyright data set. And the idea is we will use this full text the full text

column or the text from the articles that we scraped to create the knowledge graph and build a graph rack pipeline on top of it. That is it for collecting real world data. The next step is to

actually build the graph rack pipeline. All right. So in this part I'm going to walk you through a full graph rack pipeline from scratch. And what we're building here is a knowledge graph on

top of the data set that we just scripted with SER API about AI copyright and governance and then build a knowledge graph and detect communities within this graph and then generate

community summaries and visualize this graph and finally query using graph rack. So the key packages that we are going to need here is llama index which is the framework we are building on. We

also have grasper logic. So this is a library that gives us the lighten algorithm for community detection. And for visualization we're going to be using d3.js and not bis sorry. So going

to remove this here. All right. So we go to imports and configuration. So basically import all the things that we need and also load the API keys for OpenAI because I'm going to use OpenAI

models. So we're going to need OpenAI API key over here. All right, moving on to configuration. We use two different models and this is simply for cost optimization. GBD 40 mini handles all

the heavy lifting. So the extraction and community summarization because that work is repetitive and high volume. You certainly don't need the smartest model for that. But for the final query

synthesis we switch to GPD40 which has better reasoning quality and here larger model is better. So the rest of this cell is basically it's pretty self-explanatory. So we have the

extraction LLM being GBD 40 mini. The query lm is uh GPD40. We process up to 50 articles and we extract up to 20 entity relationship entity triplets per chunk. Here I call it per chunk but

actually it's per article because I didn't actually split the articles into chunks because I found that the articles are not super long. So I just skip this uh chunking step. And we also run four

parallel workers for the extraction to speed things up. All right, moving on to the next step which is to define the ontology. And this is one of the most important steps that people often skip.

The ontology as I mentioned earlier is the schema of our knowledge graph and it tells the LLM exactly what types of energies and what types of relationships it's allowed to extract. So it's really

really important and for this particular use case about researching um on the AI copyright and governance I defined below in this cell entity types and eight relationship types. Uh and here we just

basically put it in a list like so. The entity types include the organization uh like companies or labs or in industry groups. And here we have the list of relationship types that we want to

extract. So for example, filed against or defendant in for example OpenAI is the defendant in the New York Times lawsuit uh or regulates or trained on or part of. So one person can be part of an

organization. So how you define ontology really depends on your particular use case or your domain knowledge. And here is just a very basic example of how you might want to do that. So let me run

this cell. And so here we have the entity types and relationship types printed out. The next step is the extraction prompt. In this step, we basically specify an uh a a prompt

template. And this prompt template is going to take the allowed entity types and allowed relationship type that we defined in our ontology. And then it specify the goal given a news article

about AI copyright governance and intellectual property. Identify all entities mentioned in the article and their relationships. Extract up to how many triplets or relationship entity

triplets that um we have defined before that is 20. And um steps is first identify all entities and for each entity extract these different fields. Firstly name uh the type and the

description. For example, openAI um being an organization and description. So for example, this is an AI provider so on and so on. The second step is to identify relationships between those

entities. And for each relationship extract the source of the relationship. So the name of the source entity and then the target entity and the actual relationship. So for example it can be

defendant in so openai is defendant in the New York Times lawsuit and the description of this relationship. So just one sentence explaining why and how these energies are related. And the

reason why we want to get all these descriptions here for the energies and relationships is because that is going to provide extra context um for us later when we generate the community

summaries. It's going to enrich those summaries. And finally we just pass in the real article text here for the extraction. Now let's run this cell. And here is just a preview of this uh this

prompt printed out. Now in the next step we have the pantic extraction models. So instead of passing raw LLM text with regax. So for example it gives an output like this which is fragile and very

annoying to pass. We define three models. The first one is extracted entity which has the name, the type and the description corresponding to the information we want to extract for each

entity. And then we have the extracted relationship which has source target relation and description. And the third data model is the extraction result that basically wraps a list of extracted

entity and a list of extracted relationship together in one data data object. All right. So let's run this one. And so we have these models defined. Now the beautiful thing about

using these pidantic schemas is that later when we pass these schemas to OpenAI as a function calling schema, the output that is returned from the LM will be automatically validated and typed. We

don't need to manually pass the outputs which can be really really annoying and messy. the structured output or the structured JSON that gets returned by the LLM will be automatically validated

and typed. So we don't need to manually pass those outputs and do some messy string manipulation ourselves and which can be very very annoying. Also if the LM tries to return for example an

extracted entity that doesn't fit the schema that output just gets automatically rejected. So that is a huge benefit of using pyantic for output validation. Next we go to the graph rack

extractor. So this is really really the core of the knowledge graph extraction engine. This is quite a big class and there's a bit of code in there. So let me just explain this for you in uh plain

English. Here's what it does for each article. So the first step it is to call the LM and sends it to the LM using a structured predict function here and together with our extraction result the

bidantic schema that we defined in the last step and then the result would be a validated extraction result with entities and relationships. And in step two we are going to convert these

extracted entity into um entity note object. And in step three we also do the same for the relationship. Basically taking all the relationships that we extracted and convert them into

relation object. And the entity note and relation objects are basically just the way that llama index store data for entities and relationships. That's just the data model that they they use. And

representing the entities and relationships that way makes our data compatible with uh llama index later. And in step seven, we define the graph rack store. So this is where we convert

our knowledge graph to a network graph. Then we run the community detection algorithm called hierarchical lighten to find entity clusters. And then for each cluster we collect all the entities and

relationships and ask the LM to write a summary for each of those clusters. So it's like writing a briefing note to present what this community is about. Just a quick note here if you're not

familiar with the concept of property graph. Property graph is just a knowledge graph where relationships not only are connections between entities but they also carry a name which is a

type of relationship and some other properties. So in this case we might have description of the relationship or some other properties. All right let's go ahead and define this class and we'll

see how how it works in a bit. And then the next step we have the graph rack query engine and this is where query actually gets answered. So it use a two-step approach. The first step is per

community answering. For each community summary we ask a cheaper model. So here in this case GBD 40 mini whether it can answer the question based on that summary. If the summary isn't relevant

to the question, it will return no relevant information and we just skip it. And we just do this for all community summaries. This is smart because most communities won't be

relevant to any given question and so we don't want to waste tokens on them. And in the step two, we take all the relevant partial answers based on all the different community summaries and

send them to a stronger model. And in in this case this is TBD 40 to synthesize into one final and clean uh response. So this is the code for this graph rack query engine. And here you can see that

we have um two steps here. Step one is to get the partial answer from each community summary and step two is to aggregate those answers in one final answer. So that is it for this graph

query engine. Now that we've got all the configuration and all the necessary classes, we now will start loading our actual article data set um that we've seen before. And this is the article

data set containing the full text for the articles. And then we wrap articles as document. We have the article text goes in as the main content and we have the meta data here being containing the

title, source and date. So no chunking is needed here because the articles are short enough um to fit in the LM's context window as is. So I skip the chunking part. So here is all the text

in this fourth document in our notes list. So here is the actual article text and so let's move on to building the knowledge graph. This is where it all comes together. We instantiate the graph

rack extractor and the graph rack store and then we will pass the graph rack extractor and the graph store into the llama index property graph index. The index here handles the full workflow

automatically. It takes the documents so the nodes passes it through our extractor so the knowledge graph extractor and the extractor calls the RLMS and gets back the structured

entities and relationships and stores them in the graph store. So this is where everything happens and this is actually the most time consuming step in the whole notebook. It's making lm codes

for every single article. So let me quickly run this cell. All right, now this is running and we are building the knowledge graph from all the documents that we have. This may take a few

minutes, so let me just speed this up. All right, we've just finished building the knowledge graph. So let's print out an example article. Here is an example article together with all the extracted

entities and relationships that that were identified from this article only. So one organization is Darrow Everett LLP, the government, the US copyright office, AI system creativity machine, AI

system chatbt um AI system midjourney and so on. And then we have the relationships they are um the US copyright office references um creativity machine um and regulates

copyright act uh so on and so on. So these are all the relationships among all these different entities. It's a nice sanity check to make sure that the extraction is working properly and you

can also print out all the unique entities that were identified just to be sure that we don't have any weird stuff going on over here. So for each different type of entities we have um

these different things. Some of the entities were not extracted properly. So it falls back to just call it entity and for example here 10,000 responsive comments generative AI copyright

disclosure act. I'm not sure why it was not categorized properly but these really didn't happen very often. So I didn't bother. The rest of the entities look pretty okay to me. So I just go on

with the next step. In step 12 we start building the communities and generate summaries for them. And this line basically runs the lighten community detection clusters the entities and then

we generate the summaries for each cluster. Let's run this cell. And I'm also printing out all the summaries from the communities as well. So here you can see community zero. This cluster

encompasses key entities and concepts related to AI copyright and governance including blah blah blah. Community one on the other hand centers around the European AI EU's AI act so on and so on.

Cool. Once that's done, we move on to the next step which is really fun that is about visualizing the knowledge graph that we've got here. I'm using D3.js and we basically this cell basically exports

the graph that we have to a JSON file called graph data.json. I've already run this so that's why you see it here. And then we inject it into a D3.js HTML template. So this is the graph

template. Claude uh did this for me and it's really nice now that AI can do a pretty decent job at this. Now the visualization has been saved to the AI copyright graph. HTML file. So let me

quickly go live here and show you what it does. And here is the visualization. Uh this is HTML file. This is network graph. It looks pretty cool, right? And you can see that we have different

entity types that are coded in different colors. I've also instructed claw to make the size of the nodes correspond to the number of connections that it has. So for example, here we can see that we

have open AAI here. And if we click on here, we can see that these are the different connections that it has. Open AAI has one legal case that is connected to New York Times. It's good to note

that the visualization itself is not essential for the graph rack to work, but it's great for presentations and for understanding what your graph actually looks like. Finally, we get to query the

system. This is really the end goal that we want to reach. Here we create a query engine that contains the graph store and the query lm which is GPT40 for final synthesis. So let's define this query

engine and then we can start asking question to this query engine. The first question I want to test is a big picture kind of thematic question. What are the main legal arguments being made around

AI copyright and training data? So let's run this one. We pass this query to the query engine and basically call this custom query method and just wait and see what comes back. And in this

question, no single article has the full answer. Standard rack pipeline will struggle here. But graph rack synthesizes across multiple communities and it should be able to give a more

comprehensive answer. All right, here's the answer. The main legal arguments around AI copyright and training data focus on several key issues. Authorship and ownership, use of training data,

fair use doctrine, regulatory frameworks, legal reform, economic and ethical implications. So these are five main arguments. So it's pretty cool. And moving on to the next test I want to do

that is a question that concerning cross entity relationships. For example, which companies are involved in AI copyright and governance dis disputes and what are their positions? The answer comes back

with several companies involved in disputes, stability against artist and lawsuit from Getty Images, Midjourney against Daro Everett LLP and OpenAI facing and Microsoft facing copyright

infringement lawsuit from the New York Times and so on and so on. So this is an example of cross energy relationships. Traditional rack pipeline would really struggle to give a complete answer.

Question number three is about comparative policy question. For example, how different governments are approaching AI governance and the answer is I don't have enough information in

the knowledge graph to answer that question. This actually surprised me, but I'm guessing that most articles are about the US and not about other governments like EU or the UK. So

probably there's really not enough information for comparison. So that's the full pipeline. And to recap, we defined an ontology to keep things consistent. We built a custom graph rack

extractor to extract entities and relationships alongside their descriptions. And then we run the community detection algorithm on the graph and generate summaries using an

LM. And then we visualize the graph and build a query engine that reasons over those community summaries. While building this project, I noticed a couple of different things that didn't

go quite well. For example, some entities come back with slightly different names. For example, the US Copyright Office versus Copyright Office. So a lot of those energies can

be dduplicated and normalized to make it more consistent and more useful. And there you have it, a full working graph system built on live data you script yourself reasoning over one of the most

complex and opaque topics right now in tech. You can find the full code in the link in description along with SER API if you want to try this on your own research topic. You can also scan the QR

here to get the link.

<!-- YOUTUBE_TRANSCRIPT_END -->
