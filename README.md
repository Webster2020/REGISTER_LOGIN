# REGISTER / LOGIN

REGISTER / LOGIN is simple aplication to creating requests and responses to API built in json-server.

## How it works
![](REGISTER_LOGIN.gif)

## Link
https://webster2020.github.io/REGISTER_LOGIN/

## Getting Started
1. git clone git@github.com:Webster2020/REGISTER_LOGIN.git
2. npm run install
3. npm run watch - run the project and than You can see it on Your device

*...or use link if You only want to check how it works

## Used technologies:
 1. Vanilla JS
 2. SCSS for styling
 3. HTML5 for content
 4. Handlebars to HTML templates
 5. JSON Server to simulating the operation of the server
 5. Eslint to control bugs

## Implemented solutions:

  ** REGISTRATION: **
  - form with name, email and password
  - when user try to chose existing name it shows modal with registration reject 
  - when data are correct it show modal with registration confirm
  - every new users data go to app.json file (database)
  - after registration every form elements are clearing
  ** LOGIN: **
  - form with name and password
  - when user try to input name which is not in the database it shows modal with login reject 
  - when data are correct it show modal with login confirm
  - after login every form elements are clearing
  - in aside bar is genereted list of every registred users (without current logged user)
  ** LOGOUT: **
  - button to logout user
  - after logout app goes back to default state
  ** USERS BAR: **
  - it is genereted thanks to Handlebars templates every time when user logs in
  - it contains names and emails every registred users
  - in future in will be able to sending messages to every users from this list

## Project architecture

 1. content in index.html file
 2. templates with Handlebars
 3. styles in scss files - general file with import styles from partials
 4. JS files divided into:
  - app.js - main file
  - fetchData.js - functions to requests and response
  - genTemp.js - functions to generate HTML templates (with Handlebars)
  - modal.js - handling for modals
  - settings.js - select, class and DOM elemenst objects
  - usersBar.js - empty in this moment - in future all logic for users bar services
  - ustils.js - other functions
 5. server simulation:
  - server.js - simple server
  - db / app.json - data base with all registred users
 6. configuration files: gitignore, package.json, stylelintrc etc.
 7. no images and vendors in this moment

## How did I create this project?

Project was prepared based on my own idea and using my current knowledge and skills.

## Plan for future development

 - Sending messages to other users (using server and app.json)
 - Form full validation when user tries to log in 

## Authors

* **Michal Szwajgier** - *Webster2020* - 

## License
Free licence