# Micro Frontend Base

This is an Angular template to be used to build Micro Frontends based on Angular Elements. 

It includes the following capabilities:

- Angular v10
- i18n using ngx-translate [ngx-translate](https://github.com/ngx-translate/core)
- Security capabilities using [@auth0/angular-jwt](https://github.com/auth0/angular2-jwt)
- Web Components interaction using [@angular-extensions/elements](https://angular-extensions.github.io/elements)
- Included [@ng-bootstrap/ng-bootstrap](https://ng-bootstrap.github.io/#/home)
- Single-bundle package using [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus)
- Mock Server to expose APIs


## How to use it?

### Set the micro frontend name first
This template uses "microfrontend-base" as micro frontend name in all the files where is necessary, for instance, environments,
angular.json, etc...

So, the first step is to perfom a replace all of "microfrontend-base" in all the files. You can do it using your IDE or by
command line. It's up to you.


### Development lifecycle
Building a micro frontend isn't different from building an application. So, there are several scripts in __package.json__ file similar to 
every Angular application:

- __start (and watch)__: initializes the mock server in port 3000 and the micro frontend in port 4200
- __build__: builds the development version of the micro frontend
- __build:prod__: builds the production version of the micro frontend. The output is located in 'dist' folder

