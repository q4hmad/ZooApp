Zoo Animal Tracker

An application that allows a user to keep track of information relating to zoo animals, 10.29.2017

By Qudsia ahmad

Description

This application allows users to store and edit information about individual zoo animals, including name, species, age, and more. Animals can be viewed in a list, which can be filtered by animal age.

Setup/Installation Requirements

Run the following commands in Terminal:

$ git clone
$ cd angular-zoo
$ npm install
$ bower install
$ gulp build
$ npm start
User Stories

A user can log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
A user can view a list of animals they have logged.
A user can view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
A user can click an animal to edit its name, age or caretakers.
Specifications

Spec	Input	Output
Log a new animal and see it in the list.	---------
Species: "Arctic Fox"
Name: "Moon"
Age: 2
Diet: "Carnivore"
Location: "Northern Trail"
Caretakers: 5
Sex: "Female"
Likes: "Cool shade"
Dislikes: "Loud noises"
---------

---------
Species: "Ocelot"
Name: "Prince"
Age: 4
Diet: "Carnivore"
Location: "Tropical Rain Forest Building"
Caretakers: 6
Sex: "Male"
Likes: "Laying in the sunshine"
Dislikes: "Toys that are not rope-based"
---------

---------
Species: "Northwest Black Tailed Deer"
Name: "Tinkerbell"
Age: 8
Diet: "Herbivore"
Location: "Northern Trail"
Caretakers: 2
Sex: "Female"
Likes: "Delicate roots and leaves"
Dislikes: "Loud Noises"
---------
Known Bugs

Accepts empty inputs.

In the future, this application will be able to display further details on each animal, and sort them by various features other than their age.

Support and contact details

If you have any updates or suggestions please contact q4hmad@gmail.com or make a contribution yourself.

Technologies Used

JavaScript
Angular 2
Node
Bower
License

MIT License

Copyright (c) 2017 Qudsia Ahmad
