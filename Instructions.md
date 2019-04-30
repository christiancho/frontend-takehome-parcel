# Teachable frontend takehome

If you're reading this, you're likely a candidate for a frontend job at Teachable. You're going to be building a search application that takes a user's search query, hits the [Ruby Gems](https://rubygems.org/) search API endpoint, and displays the results in a list view with some added functionality (detailed below).

The application, once completed, should meet the following criteria:

1. It have a search box that lets users search for Ruby Gems.
2. It should display the results of the search in a list.
3. Each Gem should have a button that lets users "save" and "unsave" Gems.
4. It should have a way to view saved Gems, even after the browser window is refreshed (localStorage is a fine for this).

Here's a few things we'll look for in our evaluation.

1. Clean, well-organized code.
2. Sensisble architecture choices that could scale well.
3. A clean, functioning UI.
4. Bonus points if you write tests.

## Getting started

### Step 1: Fork this repo and clone it

### Step 2: Install dependencies

We have a few dependencies necessary to run the build and proxy server, the rest are up to you.

```bash
npm install
```

### Step 3: Start the development server

```bash
npm run dev
```

### Step 4: Start coding

We want to judge your ability to program UIs, not configure build tools. That's why we chose [Parcel](https://parceljs.org/) as a bundler, please consult the [documentation](https://parceljs.org/getting_started.html) if you run into any trouble.

We added a CSS file as an example, feel free to delete that.

### Step 5: Network requests

You may have noticed the server.js file at the root of this application, that's there to solve cross-origin issues when making network requests. The server automatically starts up when running "npm run dev" or "npm run start".

To see a sample request in action, run the following in your command line.

```bash
curl http://localhost:3000/api/v1/search.json?query=rails
```
