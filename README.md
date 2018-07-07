# Welcome to the Build

**The Build** is a complete static build system that uses Gulp, Metalsmith and Webpack to create performant, standards-compliant websites. Development of The Build was created around the following core prinicpals:

- It should make life easier for developers by reducing boilerplate and other redundancies. 
- It should utilize many of the best practices for website performance by default.
- It should be modular by design, allowing the developer to add, modify or remove plugins without affecting overall functionality.
- It should integrate smoothly with both API and Git-based Content Management Systems.

## Dependencies
The Build requires the following software dependencies to be installed on your system:

- git
- NodeJS
- npm
- gulp-cli (installed globally via npm)
- eslint (installed globally via npm)
- graphicsmagick

## Installation
1. Clone the build from the [github repository](https://github.com/michaelkornblum/the-build).
2. From the command-line, `cd` into the newly cloned directory.
3. Install project dependencies by entering `npm install`.

### Maintainer's Note
As of npm version 6.0, you may notice that many of the packages that you downloaded from the node package repositories come with a message regarding security vulnerabilities. At the time of this writing, the Build has 21 such vulnerabilities. I find many of these issues to be negligible at this time, since the only part of the Build that needs to go online are output files that consist solely of static HTML, CSS and JavaScript.

With this being said, I realize that it would still be hard to convince you boss or clients to use the build if four of those vulnerabilities are considered high risk. I will be patching as many of those vulnerabilities as I can, and sending the appropriate pull requests to project maintainers. This however, will occur once the first solid release of the Build is finished.

## Quickstart

### Run Development Server

Make sure you are in your projects root directory. From the command-line enter the following:

```
$ ~ npm run dev
```

The Build will run through a series of gulp tasks, create a [browser-sync](https://www.browsersync.io/) development server, and open a very simple webpage in your browser.

### Change Page Content

Open the project folder in your text editor of choice. And select `src/index.md `. With the development server still running, change the `Hello World!` message to say `Hello, <your name>!` and resave the file. In response, the development server will reload the webpage with newly created content.

#### What Happened Here?
After you saved the newly edited `src/index.md` file, an event triggered the gulp task called `watch:metalsmith:compile`. This task called an additional task named, `metalsmith:compile` which recompiled the webpage from markdown to HTML. Finally, another task, `server:reload` was called to refresh the webpage.

### Edit CSS
Select the file, `styles/main.styl` and enter the following:

```styl
body
  color: #333
  font-family: "trebuchet ms", sans-serif
```

Resave the file, and once again the development server will reload the webpage. This time, new styling will be applied. 

#### What Happened Here?
After you saved the newly edited `styles/main.styl` file, another event triggered a gulp task called `watch:stylus:compile`. This task called three additional tasks; `stylus:compile`, `metalsmith:compile` and `server:reload`. 

We've already covered what `metalsmith:compile` and `server:reload` does, so let's talk about `stylus:compile`. This task compiles CSS from the stylus preprocessing language, and drops the files off into the `assets/styles` directory. 

After CSS compilation completes, the `metalsmith:compile` task takes the content in `asset/styles` and rebuilds the webpage. Finally, the page is once again reloaded with the `server:reload` task.

### Minify Images













