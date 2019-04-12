# Reiterating through the basics of Angluar
#### Goals 

- Angular Forms 
- Built in directives 
- App architecture  
- Develop muscle memory to master Angular on the front end 
- Learn enough to finish full-stack Angular projects 

#### Step 1: Package Manager

To install the project dependencies, you will need to either use `npm` or `yarn`. To install `yarn`, run the following in your terminal:

```bash
npm install -g yarn
```

Mac users can alternatively use `brew` to install `yarn`.

```bash
brew update
brew install yarn
```

If you experience any issues when installing/using `yarn` you can checkout the installation instructions [here](https://yarnpkg.com/en/docs/install).

##### Project Dependencies

Install the project dependencies. You can do this by running:

```bash
yarn install

# OR

npm install
```

This will install our dependencies for running our Angular application.

#### Running the project

To start the project in development, run:

```
yarn start

# OR

npm start
```

Open your browser to [localhost:4000](http://localhost:4000) to start running the code.

### Project Tooling

The project uses `webpack` to build and compile all of our assets. This will do the following for us: 

- Compile all our TypeScript code into JavaScript (starting from `main.ts` and branching outwards from imported files)
- Bundle all our JavaScript into one file to use
- Allow us to use SASS for our component's CSS files
- Provide the polyfills needed to run our app in all modern browsers
- Mock a JSON backend using [json-server](https://github.com/typicode/json-server)