# FWD-Backend

## About:
In this project I have made a small API that resize image.

## Details:
### 1. Available routes/controllers:
- (http://localhost:700)
- (http://localhost:700/images?filename=smileface&width=200&height=200)

### 2. Property of each rout:
- [main page](http://localhost:700): 
  Here just open the main pages that tells you to choose an image name from the options(don't forget to put the desired width and height).
  
- [Resizing page](http://localhost:700/images?filename=smileface&width=200&height=200):
  In this page after entering the proper parameters the image with the desired size appears.
  
### 3.Dependencies script:
- Build the ts file: ("build": "npx tsc")
- Run Eslint: ("lint": "eslint \"src/**/*.js\"")
- Run Prettier: ("prettier": "prettier --config .prettierrc \"src/**/*.js\" --write")
- Run the app: ("start": "nodemon src/app.ts" )
- Testing: ("test": "npm run build && npm run jasmine")

### 4. Project structure:

├───.vscode

Main & resized Images' folders
├───images
│ └───thumbs

Jasmin configuration
├───spec
│ └───support
| | └─── jasmine.json

here are all the TS files, app.ts is the start of the project has the listen functions
└───src

    modules has the utilities, modules is more diverse of a name so I used it.
    here you'll find the images.ts file has the middleware and the resize function
    ├───modules

    here is the routing system that starts with index.ts. the in the api folder there is the getImage which has all the magic in it
    ├───routes
    │   └───api

    here are all jasmine based tests
    └───tests
        ├───helpers
        ├───modules
        └───routes
            └───api

all the js files
├───build
│ ├───modules
│ ├───routes
│ │ └───api
│ └───tests
│ ├───helpers
│ ├───modules
│ └───routes
│ └───api
