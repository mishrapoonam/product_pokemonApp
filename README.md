# PokemonApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##
Implemented the below scope -

Create a web application to list all Pokémon and show paginated results ( Product List Page) - Responsive card based layout
Each card contain the image and name
Sort by Name implmented
Number of product per page can be changed
User can navigate to previous and next page by clicking on arrow image
On click of Product Detail page user can navigate to Product Deatil page

User will be taken to the details page and present all the information available for 
that Pokémon. The user can go back to the previous page by clicking 'Go To Product Page'



Not able to include these feature due to below reason -

Product list sort - Is only by name as the below api is not returning height and weight 
https://pokeapi.co/api/v2/pokemon?limit=20&offset=0

Search functionality not implemented