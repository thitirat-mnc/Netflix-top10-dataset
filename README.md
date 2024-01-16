# Netflix Data Storytelling 🎬
We've created a website dedicated to shaping narratives around Netflix content. <br>
By combining [**Netflix's top-10 movies 🍿 & TV shows 📺**](https://www.netflix.com/tudum/top10/) dataset with data from [**TMDB API**](https://developer.themoviedb.org/reference/intro/getting-started), our aim is to offer strategic guidance for Netflix in developing successful global and local original content.

## 🔗 Table of Contents
- [Work Process ⚙️](#work-process)
- [Story 💭](#our-story)
  - [Global strategy 🌏](#global-strategy)
  - [Local strategy 📍](#local-strategy)


## 🎞️ Visit: [Storytelling Website](https://netflixvis.my.canva.site/)

> [!TIP]
> Please use google chrome, certain visualizations may encounter limitations when rendered on alternative web browsers


Dataset and Code available at :
https://github.com/thitirat-mnc/Netflix-top10-dataset/tree/main

> [!NOTE]
> If you come across a 502 Bad Gateway error while viewing our visualizations, try refreshing the webpage. 

## Work Process
```
Data Preparation
```
As we decided to incorporate external data, after exploring Netflix 10-top movies and TV shows dataset, our task starts with finding the proper data to match the 10-top dataset. <br>Our initial focus was on sourcing genres and budgets for each title. <br>

❶ *Approach 1* : We tried finding datasets from kaggle, most of which are scraped from imdb website and gather from other web-scraping methods <br>
❷ *Approach 2* : We tried scraping data from what’s on Netflix website, which gathers several Netflix titles with their genres, budget and several other information <br>
❸ *Approach 3* : We tried scraping data from several wiki tables in the wikipedia page. Wiki tables mostly contain genres, runtime, languages spoken, premiere year, countries where the movies/TV shows are available, number of seasons, etc. <br>
❹ *Approach 4* : We tried calling wikipedia api. Details of the data from api call are mostly the same as Approach 3 <br>
> [!NOTE]
> - After gathering and cleaning data from different sources using OpenRefine, we faced an issue with missing data when trying to match it with our Netflix top-10 dataset. This happened because titles had alternate spellings and different names internationally. To tackle this, we normalize the title names to get as many matching values as possible. However, the missing titles were still more than 20% of all the titles.
> - Alongside title inconsistencies, there are still other formatting problems. Budget figures varied in currencies across sources and the budget data were missing for more than 60% of our entire top-10 dataset. Different sources have their own criteria in categorizing different genres, making it challenging to combine them seamlessly.

### FINAL Approach : [**TMDB API**](https://developer.themoviedb.org/reference/intro/getting-started)
- We explored more and encountered TMDB api, which was settled on as our final choice. We decided to incorporate our top-10 dataset exclusively with the TMDB data as it could solve genre inconsistency issues. This resulted in approximately 2-3% of titles being missing. Still, because TMDB's API doesn't differentiate between individual seasons when accessed, we've had to consider shows with multiple seasons as a single entry within our dataset. 
- Despite more than 50% of the budget data still being missing from the entire top 10 dataset, the TMDB API enhances our dataset with additional details like overviews for movies/TV shows and information on the original language. We consequently shifted our focus away from the budget aspect.
<br>

```
Visualizing Data
```
- As we use vega, vega-lite, and tableau to create our visualizations. Our attempt is to incorporate the visualizations into the storytelling website we initially drafted. 
- We explored incorporating compressed Vega JSON within HTML into website builders like vev and canva.
- Through research, we found the [Flourish SDK](https://developers.flourish.studio/sdk/introduction/), designed for developers. This SDK allows us to personalize visualization templates by authoring our HTML code locally and subsequently publishing the visualization as a new Flourish template. This led us to choose to integrate our Vega and Tableau visualizations via Flourish.
- We also utilized Python's wordcloud library and TF-IDF analysis to generate Word Clouds from overviews (concise synopsis) of movies and TV shows collected from TMDB.
<br>

```
Validation Process
```
- For testing the usability of our visualizations and storytelling, we gathered 5 people including those who have some familiarity with data and visualization concepts and those who don’t by convenience sampling. All of them were to perform every task. Through observation, we assessed their abilities to complete these tasks and identified the areas where they encountered challenges or struggled.

## Our story 
- Beginning with the expansion of the **streaming services market**, particularly subscription video on demand.
- Delving into Netflix's *financial growth and subscription growth by region 🗺*. 
- We discuss Netflix cash spending on content over the years and allow the users to explore the success of original shows and movies. Users can view posters of the most popular Netflix originals films and TV shows (ranked by view count in the first 91 days) to see if they are familiar with any of them.
- Then, we introduce the 2 approaches Netflix can use for creating new original content to be successful, **Global 🌏** and **Local strategy 📍**. 
### **Global strategy**
This involves creating TV shows or films with a drama genre, a universally most favorite genre. Alternatively, Netflix can adapt films from books 📚📒 that have been well-known for many ages in many countries. Users also can see trends of each genre through time to see the relationship between genre and time by country and see what words that each genre mostly use in their overviews by word cloud.
### **Local strategy**
When we look beyond drama which is 1st ranked and consider the 2nd to 4th favorite genres in each country, we notice unique patterns and shared preferences. To capture this, we create a world map chart displaying the group of 2nd to 4th ranked genres in each country, revealing popular genre combinations in different regions. Additionally, users can view the popularity of the genre in each country in world maps. 
- In summary, we suggest Netflix to maintain producing their original contents in 2 ways depending on the genre of their products and the target country they aim to.
