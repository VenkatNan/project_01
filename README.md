# project_01
[project deployment](https://Spell_Binder.surge.sh)

# API used
This project is styled as a Spell Library. Using the D&D API: https://www.dnd5eapi.co i will be able to generate a list of spells based off of the users class preference, and level.

#### Level select
![Postman spell](/css/img/postmanLevel.png)

#### Class select
![Postman spell](/css/img/postmanClass.png)

#### School select
![Postman spell](/css/img/postmanSchool.png)

#
# Setup / Layout
this is the wire frame 
![wireframe](/css/img/project01%20-%20Window.png)
this was the tentative color pallette 
![Color Pallette](/css/img/pallette.png)

#
## PsuedoCode

* When the user first loads the page, all the potential spells are given in alphabetical order.
* In the nav bar user has four options. three of them are dropdowns, one for Spell Classes, Spell Schools, and Spell Levels.
* When clicked, there is a fetch to the API, and all the spells for that option is rendered on the page.
* There is a home button that will list out all of the spells again.

this project will utilize Java Script, HTML, and CSS.

#
## Final Thoughts

this is the final product![app Photo](/css/img/screenShot.png)

* I ran into some trouble with getting the tables to generate, so I had the user input what exactly they want to generate. 
* The header would stay on the page even though no table had been generated yet, so I decided to generate all spells when the page loaded.
* I was really exited for the sticky headers, and wanted to try and add animation to that, but ran out of time.
  
#
## IceBox

* In the future, I want to be able to get spells that have multiple variables applied to them. ie: all level 9 spells, for clerics, that are abjuration.

* I want to add a search bar so that users can find the specific spell they want

* I want to get some animations on the buttons and inputs.

* I also want to make the borders of the table a little pretier, and add some fancy filagre to them.