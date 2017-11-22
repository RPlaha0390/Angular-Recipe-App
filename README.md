# Angular-Recipe-App

An Angular app which allows you to create a recipe and add items to a shopping list. The app talks to a backend database (_Google Firebase_), which allows you to save your recipes and store your user credentials. The app is hosted on [Amazon S3 Bucket](http://angular-recipe-book.s3-website.eu-west-2.amazonaws.com/), so you can play around with the app before you decide to take a look at the source code.  

### Getting Started

To get started make sure you follow the prerequisites to ensure you have the right tools to get this project up and running. To download this repository type ```git clone https://github.com/RPlaha0390/Angular-Recipe-App.git``` in your command line application, and begin downloading the source code. 


### Prerequisites

To begin using this project it is important to have ```node.js``` installed on your machine. If you don't have this installed go ahead and download it from here; [Node.js](https://nodejs.org). To run an Angular project you need to have Angular CLI installed. First you must check if your node has installed successfully by using ```node -v```. If you have node installed then go on and install Angular CLI by typing ```npm install -g @angular/cli``` in your command line application. To check if Angular has been installed type ```ng -v```. 

### Installing

Once the Prerequisites are installed `cd` into the cloned repository and run `npm install`. This will install all the dependencies required to run this project locally. Once finished in the command line type `ng serve` to spin up a development server that serves the app.  

### Deployment ###

To deploy an angular app run ```ng build```. 

### Built With ###

* Angular 4
* TypeScript
* ES6
* Bootstrap
* Google Firebase

