## Nocom App

### Getting Started
To start developing `cd app` run `npm install` and then `npm start`. This should open a local server on port 3000 and generate the application. Since we are using webpack, we have CSS/JS hot reloading. Changes should be pushed to the browser.

To test a production build run `npm run production`. This will create a build (minified, uglified) and start a simple Node.js server. POST requests with `data` to `:8001/app` will be converted into JSON props. The request should return static markup with external CSS and JS Build files reflecting the passed props.
