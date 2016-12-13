# simple-react-router-practice
A project to get better at using react router


##Setting Things Up (and understanding Babel and Webpack)
First things first: let's set up all the things we need to make our code work.

Let's start off with setting up Node:

```
npm init -y
```

The `-y` is to save us some hassle and just answers yes to all of the setup questions. Convenient!

Next we need to set up our React (and friends) modules:

```
npm install react react-dom react-router --save
```

Now you may have noticed that I actually left out two important dev dependencies: Webpack and Babel. That's because first I want to briefly explain what these things are before asking you to start using them.

Babel is a compiler. Specifically, a transpiler. What does that mean? Basically it means it takes the fancy javascript we put in like:

```
let fancyFunc = () => console.log("I love ES6!!!");
```

and translates it to something most web browsers can universally understand:

```
var fancyFunc = function() {
    console.log("I love ES6!!!");
};
```

In other words, it lets us use ES6 and all it's features during development and then transpiles our code into ES5 so we don't have to worry about non-ES6 friendly browsers. Woo!

What's more, Babel is what enables us to use JSX inside of our React components. When we create a custom HTML tag in JSX that looks something like this:

```
<NavBar color="blue" fontSize={2}>
  Click Me
</NavBar>
```

Babel compiles that into:

```
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

Or when we use self-closing tags on elements with no children, like so:

```
<div className="sidebar" />
```

Babel compiles this into:

```
React.createElement(
  'div',
  {className: 'sidebar'},
  null
)
```

Next is Webpack

```
npm install webpack babel-core babel-loader babel-preset-es2015 babel-preset-react --save
```

[Using this online Babel compiler you can see for yourself how some specific JSX is converted into JavaScript](https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-0&code=function%20hello()%20%7B%0A%20%20return%20%3Cdiv%3EHello%20world!%3C%2Fdiv%3E%3B%0A%7D "BabelJS REPL")

It's important to understand first what React Router is (and isn't). 