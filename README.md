# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

++++++++++++++++++++++++++++++++++++++++++++++++

## Add schematic apollo-angular-cli , @apollo/client, graphql

```sh
ng add apollo-angular
```

## Module for pages (homePage)

```sh
ng g m components/pages/home/home -m=app --route home --flat
```

## Module, component => shared with header

```sh
ng g m shared/components/header
ng g c shared/components/header
```

## Module Episodes - with routes

```sh
ng g m components/pages/episodes/episodes -m=app --route episodes --flat
```

## Module for 404 responses

```sh
ng g m components/pages/notFound -m=app --route not
```

## Module for characters, Component characters

```sh
ng g m components/pages/characters/characters-card
ng g c components/pages/characters/characters-card
```

## Module characters lits

```sh
ng g m components/pages/characters/characters-list -m=app --route character-list
```

## Module characters details

```sh
ng g m components/pages/characters/characters-details -m=app --route characters-details
```

## Module about

```sh
ng g m components/pages/about -m=app --route about
```

### Add alias to gety paths

```json
"paths": {
  "@app/*": [
    "src/app/*"
  ],
  "@shared/*": [
    "src/app/shared/*"
  ],
  "@characters/*": [
    "src/app/components/pages/characters/*"
  ],
  "@pages/*": [
    "src/app/components/pages/*"
  ],
  "@enviroment/*": [
    "src/environments/*"
  ],
},
```

## Create shared service for data

```sh
ng g s shared/services/data --skip-tests
```
