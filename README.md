This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## About this porject

This is a final project at Udacity Frontend nano-degree. the porject is in react and present a map with predefined locations that the uder can
interact with.



## Folder Structure
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    locationList.js
    locationLists.css
    mapContainer.js
    venueCard.js
    locationInfoWindow.js
    regusterServiceWorker.js
    errorBoundary.js
   
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## How to start this project

In the project directory, you can run:

### `npm install`( this is to install all the dependencies in the project)
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
### offline use (instructions from react docs):
Service workers require HTTPS, although to facilitate local testing, that policy does not apply to localhost. If your production web server does not support HTTPS, then the service worker registration will fail, but the rest of your web app will remain functional.

Service workers are not currently supported in all web browsers. Service worker registration won't be attempted on browsers that lack support.

The service worker is only enabled in the production environment, e.g. the output of npm run build. 

If you need to test your offline-first service worker locally, build the application (using npm run build) and run a simple http server from your build directory. After running the build script, create-react-app will give instructions for one way to test your production build locally and the deployment instructions have instructions for using other methods. Be sure to always use an incognito window to avoid complications with your browser cache.

###Deployment
npm run build creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file.

###Static Server
for environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:

npm install -g serve
serve -s build

### used API's:

This app is using:
[foursquare API](https://foursquare.com/developers/explore#req=users%2Fself) to fetch information about locations
[Google Maps](https://enterprise.google.com/intl/en_uk/maps/?utm_source=cpc&utm_medium=google&utm_campaign=2016-geo-emea-endor-gmedia-search-gb-homepage&utm_content=gb%7Cen%7Chybr%7C1001878%7C%7Cbk%7Cbrand%7C%7Chomepage&ds_lpt_start=&ds_lpt_end=&dclid=CLWFqPWRydwCFcq_dwodzfwNnA)
### dependencies:
to render the map: react-googl-maps
for ui elements: semantic- ui -react 
for search and filter: escape-string-regexp, sort-by

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.





