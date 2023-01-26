# FWD-Backend

## About:
In this project, I created a small API that resizes images.

## Details:
### 1. Available routes/controllers:
- (http://localhost:7000)
- (http://localhost:7000/images?name=smileface&width=200&height=200)

### 2. Property of each rout:
- [main page](http://localhost:7000): 
  Simply open the main pages that instruct you to select an image name from the options (don't forget to include the desired width and height).
  
- [Resizing page](http://localhost:7000/images?filename=smileface&width=200&height=200):
After entering the appropriate parameters, the image with the desired size appears on this page.

### 3.Dependencies script:
- Build the ts file: ("build": "npx tsc")
- Run Eslint: ("lint": "eslint \"dist/**/*.js\"")
- Run Prettier: ("prettier": "prettier --config .prettierrc \"dist/**/*.js\" --write")
- Run the app: ("start": "nodemon src/app.ts" )
- Testing: ("test": "npm run build && npm run jasmine")

### 4. Project structure:

    .
    ├── images
    |     └──thumb
    ├── spec
    |     └──support
    |           └──jasmine.json
    |
    ├── src                    
    │   ├── controller  
    |   |       ├──images.ts
    |   |       └── main.ts
    │   ├── routes
    |   |     └── index.ts
    |   ├── services
    |   |     └──image.ts
    │   ├── validations 
    |   |        └── images.ts
    |   └──app.ts
    ├── tests
    |   ├── helpers
    |   |     └── reporter.ts
    |   └──indexSpec.ts
    ├── .eslintrc
    ├── .prettierrc
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json
