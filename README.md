# Redux-Tutorial
A quick guide to get started with Redux

This is mean to be a quick guide for people who are new to Redux and want to learn how to refactor a current working React app to work with Redux. This repo is designed for people are comfortable with Redux and wants a challenge and really understand the nitty gritty by the end of the day.

Currently a basic application is being made, but once the React is completed, a solutions code will be designed along with test for people to pass in order to guide them.

Some future plans:
1. Add the solution code for Redux Refactor in a solutions branch
2. Implementing Redux Saga testing

---

## Why did I make this repo?

I didn't get a lot of practice with Redux, and I believed it would have been useful to get more practice, especially in refactoring a single code base to use Redux.

---

## HOW TO APPROACH THIS TUTORIAL

So far the current goal of this repo is to get someone who is experienced with React, but has no idea how to use Redux (or has little experience), refactor a current React codebase to utilize Redux.

Before we start there are a few things that you need to know:
1. Read your docs
2. Work in progress
3. Read your docs
4. There are so many styles to use Redux
5. READ YOUR DOCS

This repo is designed to make you **READ THE DOCS**, and question your progress. You won't learn unless you think about what you are doing, so take the time to reflect.

There will be more to come, but for now your goal is to turn the main React component (**Todos**) into a container that will pass the needed methods and data down to the children components.

You will need to:
1. Create the actions you need
2. Design multiple reducers and combine them into a single reducer
3. Create the store
4. Refactor the Todos *Component* to a *Container*
5. Connect the Container to the store

It sounds simple, and it really is, however, you will get stuck from time to time, and wonder why you even decided to use this tutorial. Fret not, the fact that you learned React, means that you are at least comfortable with One-Way Data Binding. Passing props is familiar for you, and now you just need to add a little spice to have a component connect to the store.

Some very useful links for you to look over:
1. https://redux.js.org/introduction/coreconcepts
2. https://redux.js.org/introduction/threeprinciples
3. https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

Overall Redux is an amazing library. There are many others out there, but no need to worry about that now. Focus on getting good with Redux.

God willing, I plan to add more detailed explanations, connecting React Router, React Saga, and adding ImmutableJS. I really do like ImmutableJS.

Now go eat your vegetables~

---

## Getting Started

1. Fork the repo
2. Clone it down

---

### Prerequisites

What things you need to install the software and how to install them

**Install Homebrew**

``` /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ```

You'll be using this to install any major tech such as Node or Postgres. Real rangers use Homebrew~

**Install node via Homebrew**

``` brew install node```

This will add node and npm. Neat~

**This app runs on PORT 5000**

---

### Installing

A step by step series of examples that tell you how to get a development env running

After forking and cloning to your local computer:

1. Install dependencies with ``` npm install```
2. Build the bundle with webpack ```npm run buildDev```
3. Start the server with ```npm start```

## Running the tests

To see if the tests are passing:
``` npm test ```

The tests utilize **JEST** and **ENZYME** with the intention of providing you the appropriate guidance to complete this repo.

## Built With

* [Node](http://www.nodejs.org) - The server language
* [Express](https://www.expressjs.com) - The server framework
* [React](https://www.reactjs.org/) - Dependency Management
* [Redux](https://redux.js.org) - Global store management
* [Jest](https://jestjs.io) - Facebook's testing framework (great with React)
* [Enzyme](https://airbnb.io/enzyme/) - AirBnB's testing framework for testing rendering (pairs great with Jest)

## Contributing

If you'd like to contribute please contact [Busy](oro1919@gmail.com)

## Versioning

**not yet implemented**

## Authors

* **Makan Azarshahy** - *Initial work* - [BardsBallad](https://github.com/Busyreadingsomething)

If you would like to contribute please see the **Contributing** section above

## License

**No licensing at the moment**

## Acknowledgments

* Redux team for an awesome tech