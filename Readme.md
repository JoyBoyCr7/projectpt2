# Project 1
Ronard Nyongkah

### Project Description
This Trivia game is focused on Testing your basketball knowledge. It's a two player game, so you can play with a friend. when you see a player you don't know you can search them up and get a bit of info on them.


## API Description

- The API I'm using is https://www.balldontlie.io/home.html#getting-started

- This is an example of me testing the API
``` js
$.ajax("https://www.balldontlie.io/api/v1/players/?search=lebron")
.then((response)=>{
    console.log(response)
    console.log(response.data)
    let firstName = response.data[0].first_name
    let lastName = response.data[0].last_name
    console.log(`The Goat, ${firstName} ${lastName} has been summoned`)
})
 ```
### Mockup

![](https://i.imgur.com/e6NS7L1.png)

## Technologies
* HTML
* CSS
* Javascript 
* Jqeury
* Balldontlie API

## Installation
* At the far right of the username of the github account on this page you'll find Fork. Click it.
* To the far right of main you'll see Code. Click code and Clone using SSH is you can. Copy the link you see.
* Open Terminal and CD into a folder you want to save this file in.
* Type "Git clone" followed it up with pasting the link you copied from github in the terminal.
* You should see it cloning

## My
Test your NBA Knowledge at https://sportsflash.onrender.com

### Daily Schedule
| day | TODO|
|-----|-----|
| 1 | Set everything up along with the APi|
| 2 | Get input from users|
| 3 | Create responses and return them using the API|
| 4 | Organize all components of the page with CSS|
| 5 | Go through and add finishing touches making sure everything is working as it should|


### Details about Difficulties
There balldontlie API doesnt have up to date data on older retired player or players that are 
not popular. So at times, older players wont have data on thier physical attributes.

