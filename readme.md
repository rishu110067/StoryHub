# StoryHub

StoryHub is a place to create your public and private stories <br> and see stories of other people.

Link: https://story-hub-0.herokuapp.com/ <br>

Refresh a few times if the page doesn't load.


## Tech Stack used: 
* Node.js
* Express.js
* MongoDB
* Google OAuth  
* HTML
* CSS  

## Features:

* login/logout with your google account
* create public stories (visible to other users) or private stories (not visible to others)
* edit or delete your stories
* view public stories of other users
* view public stories from a specific user
* mark a story as Favourite and view all your favourite stories

## Run in Local:

To run in your local machine, add your mongoDB URI and Google OAuth credentials to the config.env file, <br> 
and run the following commands in the project directory

```
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
```


### Login Page
<img src="/images/login.png" align="center" width="750px" height="450px"> </img>

### Dashboard
Click on `+` Button to create a story.

<img src="/images/dashboard.png" align="center" width="750px" height="450px"> </img>

### Add Story Page
<img src="/images/add-story.png" align="center" width="750px" height="450px"> </img>

### Public Stories Page
<img src="/images/public-stories.png" align="center" width="750px" height="450px"> </img>

### View a Story
<img src="/images/story-view.png" align="center" width="750px" height="450px"> </img>

### Favourite Stories Page
<img src="/images/fav-stories.png" align="center" width="750px" height="450px"> </img>
