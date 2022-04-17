# What is Data Science

* describe the current state of an organization or process
* detect anomalous events
* diagnose the causes of events and behaviors
* predict future events (forecasting)

1. Data collection and storage
2. Data Preparation
3. Exploration and Visualization
4. Experimentation and Prediction

# Applications of Data Science

1. traditional machine learning 

2. internet of things (IoT)
    - smart watches
    - internet-connected home security systems
    - electronic toll collection systems
    - building energy management systems
    - using a physical device

3. deep learning
    - many neurons work together (mini alogrithms)
    - requires much more training data
    - used in complex problems
        - image classification
        - language learning/understanding
    - text summary and image classification


# Data Science Roles and Tools

**Roles**

- **Data Engineer** (data collection and storage)
    - information architects
    - build data pipelines and storage solutions
    - maintain data access    
        - SQL
            - to store and organize data
        - Java, Scala, or Python
            - programming languages to process data
        - Shell
            - command line to automate and run tasks
        - Cloud computing
            - AWS, Azure, Google Cloud Playform
- **Data Analyst** (data preparation and exploration/visualization)
    - perform simpler analyses that describe data
    - create reports and dashboards to summarize data
    - clean data for analysis
        - SQL
            - retrieve and aggregate data
        - Spreadsheets (Excel or Google Sheets)
            - simple analysis
        - BI tools (tableau, Power BI, Looker)
            - dashboards and visualizations
        - ***May have:*** Python or R
            - to clean and analyze data
- **Data Scientist** (data preparation, exploration/visualization, and experimentation/prediction)
    - Versed in statistical methods
    - run experiments and analyses for insights
    - traditional machine learning
        - SQL
            - retrieve and aggregate data
        - Python and/or R
            - data science libraries, eg. pandas (python) and tidyverse (R)
- Machine Learning Scientist (data preparation, exploration/visualization, and experimentation/prediction)
    - predictions and extrapolations
    - classification
    - deep learning (image processing, natural language processing)
        - Python and/or R
            - machine learning libraries, eg. TensorFlow or Spark


# Data Sources

**Data collection and storage**

- Company data
    - collected by companies
    - helps make data driven decisions
        - web events (events, timestamps, user info)
        - survey data (face-to-face interview, online questionnaire)
        - customer data
        - logistics data
        - financial transactions
- Open data 
    - free, open data sources
    - can be used, shared, and built-on by anyone
        - Data APIs (twitter, wikipedia, yahoo, google maps etc)
            - application programming interface
            - requested data over the internet 
        - public records
            - international organizations (world bank, UN, WTO)
            - national statistical offices (censuses, surveys)
            - government agencies (weather, environment, population)

# Data Types

Important for:
- storing the data
- visualizing/analyzing data

Quantitative data
- deals with numbers
- data can be measured

Qualitative data
- deals with descirptions
- can be observed, but not measured

Data that uses a mix of quantitative and qualitative data
- image 
- text
- geospatial
- network

# Data Storage and Retrieval

- location
    - cluster or server for storing data
    - cloud storage
- data type
    - unstructured (email, text, video and audio files, web pages, social media)
        - document database 
    - tabular data
        - relational database
- retrieval 
    - Document database (NoSQL)
    - Relational database (SQL)

# Data Pipelines
- moves data into defined stages
- automated collection and storage
    - scheduled
    - triggered by an event
- monitored with generated alerts
- necessary for big data projects
- data engineers worl to customize solutions

- (ETL) Extract Transform Load
    - Extract Data from IOT device or API
    - Transform data to make sure data stays organized
        - joining data sources into one data set
        - converting data structure to fit database schemas
        - removing irrelevant data
    - Load into storage to be used for visualization and analysis

# Data Preparation
Why prepare data?
- Real-life data is messy
- preparation is done to prevent:
    - errors
    - incorrect results
    - biasing algorithms

# Exploratoy Data Analysis
What is EDA?
> promoted by John Tukey

- exploring tha data
- formulating hypotheses
- assessing characteristics 

# Interactive Dashboards
- mindful of colors, fonts
- keep in mind colorblindness
- LABEL

BI tools
- tableau, looker and power BI
- python, R and Java
- interactive

# A/B testing
**Champion/challenger testing**

What are experiments in data science?

_experiments help drive decisions and draw conclusions_
1. form a question
2. form a hypothesis
3. collect data
4. test the hypothesis with a statistical test
5. interpret results

**Terminology Review**
- sample size: number of data points used
- statistical significance: result is likely not due to chance
    - given assumptions of statistical model
    - use statistical tests to calc
        - t-test, Z-test, ANOVA, Chi-square test

Steps
1. picking a metric to track
2. calculate a sample size
3. run the experiment
4. checking for significance

# Time Series Forecasting
What is a statistical model?
- represent a real-worl process with statistics
- mathematical relationships between variables, including random variables
- based on statistical assumptions and historical data

Predictive Modeling

Time Series data - a series of data points sequenced by time
- stock prices
- gas prices
- unemployment rates
- heart rate
- CO2 levels
- height of tides

Seasonality

Forecasting
- derive a model from historical data to generate predictions
- modeling methods use a combination of statistical and machine learning methods

# Supervised Machine Learning
subset of machine learning

**Machine Learning:** predictions from data

**Supervised Machine Learning:** predictions from data with _labels_ and _features_

- labels: what we want to predict
- features: data that might predict the label

Model Evaluation

# Clustering
What is clustering?
- divide data into categories
- uses cases
    - customer segmentation
    - image segmentation
    - anomaly detection

Unsupervised machine learning

**Clustering Review**
- divide unlabeled dataset into different categories
**Steps**
1. select features
2. select number of clusters
3. use clusters to solve problems

