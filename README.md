# DevLinQ

## Core features Implemented
***When Google Searching***:
* Separate Official Docs results
* Separate StackOverflow results from StackExchange API
* No repetition between results

## User Stories
```
As a user,
So that can immediately see relevant StackOverflow links,
I want to see them in a separate section of my page.

As a user,
So that can find more effective links,
I want to see StackOverflow links with answers.

As a user,
So that can find more effective links,
I want to see StackOverflow links with higher scores.

As a user,
So that can immediately see relevant official docs links,
I want to see them in a separate section of my page.

As a user,
So that can immediately see relevant official docs links,
I want to see the documentation link for the most recent version available.

As a user,
So that I don't miss anything important,
I would like to see all other links in another section.

As a user,
So that I don't waste time,
I want to see all other links without repetition.

```
## Screen Shot

![not found](https://github.com/pedrocastanheira77/devlinq/blob/master/public/images/devlinqmockup.png)


## Technologies Used

Framework:
 - Chrome Extension structure
 - Javascript
 - Node.js
 - React.js
 - Browserify
 - HTML & CSS

Testing:
 - Selenium
 - Sinon, Mocha, Chai

## Installation & Usage
* Clone this repo
* Run in the command line
```
npm install
browserify src/static/js/DevlinqEvent.js -o bundle.js
```
* Open Google Chrome
* Visit *chrome://extensions*
* Enable Developer Mode
* Upload the 'unpacked' folder containing this repo
* Enable the Extension
* Google Search!

## Additional Features to Implement in the Future
* Expand [React Standalone App](https://devlinq.herokuapp.com/)
* Deploy to Chrome Web Stories
* Improve Efficiency and Load Time

## Collaborators
* [Ekaterina Loshchinina](https://github.com/kateloschinina)
* [Frankie Shaw](https://github.com/frankiefy/)
* [Lauren Rosie]( https://github.com/laurenrosie/ )
* [Pedro Castanheira](https://github.com/pedrocastanheira77/)
