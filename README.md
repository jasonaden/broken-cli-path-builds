## Repro of [#7714](https://github.com/angular/angular-cli/issues/7714)

This project simulates someone wanting to have a library next to their CLI application. The library
sources are in the `lib` folder and can be built using [`ng-packagr`](https://github.com/dherges/ng-packagr).

Steps to reproduce:

* `npm run build:lib` - this will create `dist/lib` which is the library code in Angular Package Format
* `npm run build:cli` - this command fails due to not being able to find the library. However, this project
  is set up very similarly to Angular itself, which works with this type of relationship between dev and
  build sources.
* `npm run build:ngc` - shows that running `ngc` directly using the `tsconfig.app.json` works fine

NOTE: The `npm run build:cli` can be made to work by changing the `paths` property in `tsconfig.app.json`
to point to the dev sources: `"paths": ["../lib"]`.