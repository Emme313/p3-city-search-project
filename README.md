# CITY FYNDR

City Fyndr is a browser-based MERN (MongoDB, Express.js,
React.js, Node.js) application with full CRUD capability. It allows users to explore relevant data about the top 50 cities to live in the United States.

<img src="https://i.imgur.com/tQhjJTc.png" alt="Cover Photo"
	title="Cover Photo" width="65%"/>

## FEATURE LIST

**Header**

- Displays on all pages and links to Main

**Footer**

- Displays on all pages and links to About and contributors' github pages

**Main Page**

- List of 50 cities in order of rank
- Search bar that filters based on city or state name
- Cities listed as links to view more details

**Individual City Page**  
<img src="https://i.imgur.com/79ZwrE5.png" alt="City View Page"
	title="City View Page" width="65%"/>

- Data for selected city is organized into sections
- Sections are accordion buttons to hide and show selected data
- Reviews accordion shows user submitted reviews
- Each review has an edit link
- "Leave a Review" accordion displays a form where users can submit new reviews
- Reviews can be left anonymously or with a specified name without refreshing the page

<img src="https://i.imgur.com/DprMwJH.png" alt="City Fyndr review page"
	title="Review Page" width="65%"/>

## INSTALLATION

City Fyndr can be accessed in any browser <a href="https://wdixon2186.github.io/City-Search-Front-End/#/" target="_blank">here</a>.
You may also choose to copy this code and make edits of your own. To do so, follow the steps in <a href="https://help.github.com/en/articles/fork-a-repo" target="_blank">this article</a>.

Additionally, you will need to install all this app's dependencies by running `npm install` from the `city-search` folder.

Once these are each successfully installed, you may then access the app through your localhost by running `npm start` in your terminal.

## THOUGHT PROCESS

We worked together to create a game plan as outlined in our deck.
<a href="https://drive.google.com/file/d/1UtXnnO7tGSyEVjjmojrOZ7j-oaO9vRPL/view?usp=sharing" target="_blank">View Deck</a>

In addition to our project planning deck we also worked on discovering the best way to work together with everyone's strengths and weaknesses, as well as desired areas of growth and outcomes.
<a href="https://docs.google.com/document/d/1icLScqzJZ1bxbCFSLdmZBIA2UNQZvN7DSNFawPUBfS0/edit?usp=sharing">Team Planning & Post-Project Assessment</a>

### User Story

<img src="https://i.imgur.com/eh3hnE0.jpg" alt="City Fyndr app user story"
	title="User Story" width="65%"/>

### Front-End (ReactJS)

We approached React with a divide and conquer mentality.
The entire project began with the front end and back end sitting down and creating wireframes for what we wanted the site to look like, and what functionality it would have.

<img src="https://i.imgur.com/oSHGX0A.jpg" alt="Wireframe for City Fyndr App"
	title="Wireframe" width="65%"/>

From there, we defined each component that would be needed, and then built them out in their own category.

We then confirmed with the back-end on the format of the data, and the routes they were building, then implemented sample data and routes so we could build out both ends at the same time.

Once the backend was deployed, we installed axios to access it, and removed our sample data.

### Back-End (Express and MongoDB)

For the back-end, we first exported Census data for the top 50 cities ranked by U.S. News' and built an API. Next, we set up all necessary routes for full CRUD functionality (included in picture below).

<img src="https://i.imgur.com/Lrdj8Vr.jpg" alt="Client/Server model for City Fyndr App"
	title="Client/Server Model" width="80%"/>

## UNRESOLVED PROBLEMS & ToDo's

- Adjust each data point to have a helpful title as opposed to the current camel case titles
- Clean up file structure

## BUILT WITH

    - React.js
    - Bootstrap
    - Node.Js
    - Express

## AUTHORS

- <a href="https://github.com/bonniepeters" target="_blank">Bonnie Peters</a>

- <a href="https://github.com/jaredsmorgan" target="_blank">Jared Morgan</a>

- <a href="https://github.com/Emme313" target="_blank">Melaina Valentine</a>

- <a href="https://github.com/wdixon2186" target="_blank">William Dixon</a>

## ACKNOWLEDGMENTS

We would like to thank and acknowledge our instructor <a href="https://www.alispit.tel/" target="_blank">Ali Spittel</a> for her help in building this full-stack application.
