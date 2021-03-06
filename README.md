# Simple-React-Router-Practice
A simple project to get better at using react router


###Setting Things Up (and understanding Babel and Webpack)
First things first: let's set up all the things we need to make our code work.

Let's start off with intializing Node:

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
var fancyFunc = function fancyFunc() {
  return console.log("I love ES6!!!");
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

[Using this online Babel compiler you can see for yourself how some specific JSX is converted into JavaScript](https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-0&code=function%20hello()%20%7B%0A%20%20return%20%3Cdiv%3EHello%20world!%3C%2Fdiv%3E%3B%0A%7D "BabelJS REPL")

Next is Webpack

![alt text](http://i.imgur.com/wfQHwCg.png "Hopefully this makes things clearer")

Webpack is both a build tool and a module bundler. Basically what it does is that, starting with the 'entry' in the `webpack.config.js` file, it starts grabbing all the relevant files and smooshes them together into a custom `bundle.js` file. This is nice because it lets us keep all our code nicely seperated into different files to keep things organized while in development and then makes our life (and the computer's) easier by having everything necessary in one place when actually testing our applications out or putting them into production.

It also lets us use `require()` on non-code files, like a png file (a.k.a. picture), as well. It treats all the files as 'modules' as well, not just the javascript files. CSS, any image files, etc.

Honestly, I'm still unsure of all the things webpack is doing. I'd recommend reading these blogs for some more insight:

http://blog.andrewray.me/webpack-when-to-use-and-why/

https://blog.madewithlove.be/post/webpack-your-bags/

Also, check out the webpack dev docs:

http://webpack.github.io/docs/what-is-webpack.html


Now that we have a better idea of the tools we're using, let's intall them!

```
npm install webpack babel-core babel-loader babel-preset-es2015 babel-preset-react --save
```

We should discuss what routing

There are two parts to a route: there's a map and a action.

The map could take the forms of a physical map, or even street signs.

if you're driving from point a to point b, you need to find the best route possible right? but the action tells you what you need to do to get from the source to the destination

in the context of web app or website; the map is defined in our applications. Using what's called a DNS(a Domain Specific Language). Every router system(framework, or libraray) asks you to map routes in their own specific way. React asks you to 

It's important to understand first what React Router is (and isn't). 

