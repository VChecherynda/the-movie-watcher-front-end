# the-movie-watcher-front-end

# Install:

node version < 14

To start this app:
  1. Create .env ( for development ) files and set ASSET_PATH and API variables
  2. npm install && npm start
  
# Production build:

To create build:
  1. Create .env.production file and set into it ASSET_PATH and API variables
  2. npm run build

In this app we for bundle all our assets we use webpack ( dev / build .env )

# Libs:

  - axios ( for simplify work with requests )
  - react-bootstrap ( for simplify customizing app )
  - react-router-dom ( for routing )
  - react-redux ( for global store )
  - prop-types ( for checking types which transmits into components )
  - formik ( for simplify input validation )
  - reselect ( simple selector library to make complex selector and compute derived data )
  ...

# Structure:

- views ( consist of implemenation of different domains, here i collect all logic )
  - view ( 1 unit, here we divide logic and mark-up for this we use hoc )
    - view.js ( here we put mark-up )
    - types ( here we put all props which we want to check and which transmits to the component )
    - index.js ( this is custom hook where I put all logic )

- components ( block for constructing views, here i collect mostly dumb components 'mark-up' )
  - component ( 1 unit, here we divide logic and mark-up for this we use hoc )
    - index.js ( here we put mark-up )
    - types ( here we put all props which we want to check and which transmits to the component )
    - useHooks ( this is custom hook where I put all logic )

- asstes ( for adding fonts / images / styles )
  - styles ( css / scss styles for views )
  - images
  - fonts

- api ( here we inplement logic for different requests GET / POST / PUT / DELETE )

- configs ( different configs: for inputs, initialState, etc )

- helpers ( additional functionality which could be reusable in different part of the app )
  - filter ( for filtering elements on specila parameters )

- router ( for routing )

- store ( here we keep all logic which connects to the reducers / middleware / selectors )
  - modules ( all logic divide by domains, exp: users / movies / etc )
    - movies
      - middleware.js ( here we keep logic for make requests to the server, also here could other logic for working with localstorage etc )
      - reducer.js ( part of amin reducer, for dividing logic for different domains )
      - selectors.js ( functions that helps us to get special data from global store )
    - index.js ( here we glue all our logic for working with global store )
    
- validations
  - movie.js ( for validation, in this part we keep all logic for validation creation of the movie )

index.html ( here we add all our main js / css files )
index.jsx ( entry point for connect react to the our app )
