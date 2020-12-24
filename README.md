# Website for Data Tracer

# Jekyll Bootstrap 4.5.2

[deploys from Github to Github pages]()

Jekyll + Gulp 4 + Bootstrap 4
and Browser-sync + 

## Steps to start
- [Install Jekyll](https://jekyllrb.com/docs/installation/)
- [NodeJS](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)
- [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/)

## Installation
1. Clone or download this respository.
2. Run `npm install` * *this step is optional if you update content only: images/text/data files*
3. Run `bundle install` * required for Jekyll

## Running
* **For Development** Run `gulp` to bundle assets (js/styles) and generate website into *_site* folder
* **For Editing** should be using `bundle exec jekyll serve` to run server or *Option with force livereload browser `bundle exec jekyll serve --livereload`*

*Dev Note:* Check gulpfile.js for automated tasks, like `gulp purgecss` to udpate critical css