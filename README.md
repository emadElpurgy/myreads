# MyReads Project

MyReads is a personal library organizer application built with react platform for applying the main react fundamentals in the real-life application as a graduation project for Udacity nano degree program (react development cross-skilling)

#Project Description
The main idea of the project is to have a simulation of your library that contain three shelves. 
1- Currently reading (contains books you reading now)
2- Want to read (contains books you plan to read after ending your currently reading books)
3- Read (which contains books you finished reading)
Each book take its place in the library based on its state which you can change that will make the book change its place.

For Example 
After you finish reading (Javascript fundamentals book) you can change its state from currently reading to read.
That makes the book moves from (Currently reading shelf) to (Read) shelf 
You may next 
Change the state of (React fundamentals book) from (Want to read) to (Currently reading) that makes the book moves from (Want to read) shelf to (Currently reading) shelf.


Project also includes easy to use search window you can use to search for new books to read.
The search window acts as public library. you can navigate and search for books that match your search term.

The search window consists of a text box in which you can write your search term
and display area which will display the matching books.
Each book has a control that makes you able to add the book to your library. 
The book control lists you library shelves makes you able to add the book to your library at specific shelf. 
-Note -
In case the book is already in your library the control will remeber that and mark the shelf which the book in addition you can change the state of the book from search window and the change will reflect in your library at the same time.


#Planned Features
1- adding categorizing feature : 
make user able to categorize his books based on its specialization (art, finance or computer science)
2-local search feature
make user able to search for a book in his library using its name category 
3-multi display arrangement
make user able to display his books in one of two methods (shelves or categories)
4-book information control
when user clicks a book object redirect to book information window which has a some information about the book and author and book physical location and dates when you're began and finished reading


#Installation
1- create  a new folder (myreads)
2- copy all files to the new folder
3- open new terminal and navigate to the new folder (myreads)
4- run npm install (to install all dependencies)

#Running the application
1- open new terminal and navigate to the application folder (myreads)
2- run npm start

#Using the application
open your browser and navigate to then the url given to you from the previous step the main window is your library

1- moving books across shelves 
click the down arrow attached to each book to open shelves list select the desired shelf or select none to remove the book from your library
2-open search window 
click the plus sign at the bottom of screen to redirect to search screen
3-searching for books
type your search term in the text box and result will appear in display area 
4-adding book to your library
click the down arrow attached to each book to open shelves list select the desired shelf to add the book into
5-navigate back to main screen
click on left arrow beside search box to navigate to main page



#thanks to udacity team for providing me with interface materials including design and fonts and styles as part of starter template for the project myreads


