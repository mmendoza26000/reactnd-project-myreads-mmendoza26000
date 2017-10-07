# MyReads App

This is the first App developed for Udacity's React Nanodegree, by Manuel Mendoza (mmendoza26000@gmail.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

In order to use the App in this repository you must have in your computer:

```
git (download from https://git-scm.com/)
```

and 
```
npm (download from https://www.npmjs.com/get-npm)
```


### Installing

To install this app in your computer,

clone the repository

```
git clone https://github.com/mmendoza26000/reactnd-project-myreads-mmendoza26000.git
```

'cd' into the new directory, and install dependencies with npm

```
npm install
```

Start the server with:
```
npm start
```

### Running the App

If your browser doesn't open automatically with the app, start your browser and point it to:
```
http://localhost:3000
```

## Technical comments
The shelves are defined as an object in the App's state, so it will be easier to add or remove shelves. Just add them in the state's object, and the rest of the App will handle the new shelves.

This object could be created from the BooksAPI by fetching the server, if such method was implemented someday.


