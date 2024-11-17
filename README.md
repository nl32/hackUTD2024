# HackUTD 2024 - [Carbon Gauge](https://carbongauge.tech/)

## Members

- Emma Schaumann
- Annie N
- Tyler Hill
- Ethan Bickel

## Inspiration

We wanted to create a tool to influence the commercial building space in a meaningfully sustainable way. We had the idea to create a product that any property managers can use to compare and improve upon their buildings in areas of energy usage, water usage, and types of lighting or heating. We knew that this could create real world change by allowing property managers to know exactly what changes in their buildings could have the largest effect on their buildings environmental impact.

## What it does

Carbon Gauge provides a one-stop place for property managers to compare each and all of their properties to a nationwide baseline. This baseline is built from a subset of 6,436 buildings across the country, filtered to be in the same region and within a margin of square feet of the building in question. Carbon Gauge uses the data to provide actionable recommendations, each of which is tailored to a different type of sustainability: energy, water, and lighting.

## How we built it

Carbon Gauge was designed using Figma ([project](https://www.figma.com/community/file/1439999822234979121)) and is built with React, Next.js, Material UI, ApexCharts, and Tailwind on the front end and Neon and SQLite on the backend. The whole team worked on the site collectively using GitHub and trunk-based development as well as CI/CD checks for formatting and linting using Prettier and ESLint. The site is deployed on Vercel and connect to a .tech domain: https://carbongauge.tech/

## Challenges we ran into

Finding real world nationwide data, especially water usage data, for commercial buildings was a challenge we faced at the start of the project. Data like the data from the U.S. Energy Information Administration (EIA) is not widely advertised. Luckily this was our main hurdle and once we found this data, we knew we could power through the rest of the project.

The graphs did however pose a challenge for us. We started out with the visx library from Airbnb for its flashy demos and unopinionated customization potential. This library however turned out to be much too complicated as often defaults for features like tooltips on hover or a key were not provided and expected to be built from scratch. We pivoted to using ApexCharts which, while not as customizable, does provide defaults for all common features that we tweaked to blend in with our website’s style.

## Accomplishments that we're proud of

We've implemented a comprehensive dashboard for each building in a portfolio as well as an overall dashboard listing the properties and their sum data. Users are able to add and remove listed buildings, adding their own data for the building they add to compare against nationwide data.

## What we learned

We refined our skills in the areas of database management and aggregation, UI development, and data visualization. Our product consists of 2 databases: one that stores the nationwide data with which single builds are compared, and one that stores info on those single buildings. Managing two databases and fetching from each was a new experience; each database is hosted differently as one needs to be written and the other does not. Our UI was designed on Figma and transferred over to React with Tailwind and Material UI. This transfer is always an interesting process of finding out what exactly is feasible with a given set of libraries and of course resulted in a deviation from the original design. We learned along the way how to adapt a design and make changes without reducing function. Data visualization was a familiar frontier but we were able to dive deeper into different graph features like annotations and color generation. Overall, the hackathon was a great learning experience for all of us and we're coming away with a new set of skills applicable to the real world.

## What's next for Go green teams~!

We have yet to implement user accounts, so this would be the most imminent next step. Being able to sign in as a property manager, access your properties securely, and share your properties with other users are the main goals. We’d likely use NextAuth.js and allow username+password and Google OAuth 2.0 sign in as well as creating a profile management and sharing page. After that we’d start looking for more data sources. This would allow us to display more relevant data and comparisons to property managers and provide more types or more detailed recommendations. Ideally, we would like to connect live data streams from property utility meters to our app.

## Data Sources

Commercial Buildings Energy Consumption Survey (CBECS)

- [2018 CBECS Survey Data](https://www.eia.gov/consumption/commercial/data/2018/index.php?view=microdata)
- [2012 Commercial Buildings Energy Consumption Survey: Water Consumption in Large Buildings Summary](https://www.eia.gov/consumption/commercial/reports/2012/water/)
