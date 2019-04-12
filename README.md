<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/client-management-111c5.appspot.com/o/angular.png?alt=media&token=e5d1b1a0-96c4-4828-8e80-cb594a554da1">
</p>

# Reiterating through the basics of Angluar
#### Goals 

- Angular Forms 
- Built in directives 
- App architecture  
- Develop muscle memory to master Angular on the front end 
- Learn enough to finish full-stack Angular projects 

#### Notes on typescript 

Strictly types notice the type of groceries member of class must be declared 

``` javascript 
class ShoppingList{
  // Define the type ... line 3
  groceries: String[];
  constructor(){
    this.groceries = []
  }
  addItem(item:string){
    this.groceries.push(...this.groceries, item)
  }
  removeItem(item: string){
    this.groceries = this.groceries.filter((grocery) =>  grocery !== item)
  }
}

const basket = new ShoppingList();

console.log('adding two items');

basket.addItem("Apple");
basket.addItem("Pizza");

console.log(basket.groceries);

basket.removeItem('Apple');
console.log('removed item ');

console.log(basket.groceries)

```

#### Package Manager

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
