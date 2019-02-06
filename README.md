# Simple Ecommerce App

A prototype ecommerce app that renders a list of items and allows users to build a shopping cart and make a test transaction with the Stripe API. Total time to build: 5-8 hrs

## Dependencies

This app was built using:
* Node v11.8.0
* React/Express
* Stripe v3 SDK
* Stripe's React Elements

You can install the app dependencies using `npm install`

## Server

Go into the `server` folder and duplicate `sample.env`. Rename the duplicated file `.env` and include the test Secret Key for your Stripe account (don't worry, this is gitignored.) Once dependencies are installed and your configuration is set up, you can use the command `npm start:server` to run the app. It should appear on `localhost:9000`.

## Web

In the `web/constants` folder, duplicate `StripeInfo_TEMPLATE.js` and rename it `StripeInfo.js`. Include the path to your server (I recommend using ngrok to tunnel into this, rather than using localhost) as well as the Publishable Key for your Stripe Account. This is gitignored for the sake of easy transferability; additional work would be necessary to make this production-ready. Once dependencies are installed and your configuration is set up, you can use the command `npm start:web` to run the app. It should appear on `localhost:8080`.

## Other commands

`npm run lint` will run a linter on the application and make fun of your syntax. Linting rules are based on my personal preferences - namely, my preference for avoiding semicolons and double quotes in my code.

`npm run lint:fix` will try to automate the correction of some linting errors, like indentation, quotes, and semicolons.

## Design Approach
I've been interested in serverless architectures, and so my original intent was to create a totally serverless version of this using a Lambda Function for the Stripe integration. I ended up building a server for the purposes of easily sharing my code (copy/pasting into Lambda isn't as fun or accessible) and for extensibility.

As a result, I built out most of my functionality in a React application. The site has enough problems with state management that React and Redux ended up being quite helpful. This also helps keep the front end and back end decoupled, meaning that a person could reasonably connect this app to an app in any language supported by the Stripe API without much problem (and, again - you could go serverless!) I built out the node server as a single Express script rather than creating a fully-fleshed out server architecture as a result; the server simply isn't the star of the show.

## TODO

### State Architecture

I need to rethink the entire architecture of my state, honestly. I decoupled the cart and the items, so it ended up being messier to clear the cart than I would have liked once a purchase actually goes through.

### Transaction History

Currently, you can see that a transaction was completed, but there's no way to look at transaction history; So hopefully people screenshot their order ID, because they're not going to see it again until this is extended.

### Edge Case Handling

There are a ton of edge cases that aren't accounted for in the current application - for example, while I require that something be in the cart in order to get started with checkout, there's a similar state architecture issue with clearing a purchase. So, technically, you need to refresh the page in order to keep shopping. :(

### Testing

My TDD is rusty, so I didn't write a suite of unit tests for this application. Moving forward, this would pretty much be my first step before doing any significant refactoring (e.g., I would write a suite of unit tests before tackling the rearchitecture of application state.)
