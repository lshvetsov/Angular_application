[Udemy: Angular - The Complete Guide (2023 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)

# Table of content 

// TODO

# Lesson 1 & 2 Basics

**Angular** is a framework which allows you to create reactive Single Page Applications (SPA) which means that you don't need to bring a new HTML page from a server for every page rendered for a user in browser.   

Angular change DOM at runtime. 

**Versioning**
- AngularJS - old, recommended to not use it
- Angular 2+ - actual framework (update in every 6 months)

**General process**
1. Entrypoint: ```main.ts``` which reference a root angular module and declare the error processing mechanism. 
2. Declaration: ```app.modules.ts``` declares all components and set the bootstrapping root component. 
3. Elements: components is marked with a *selector* and registered in ```app.modules.ts```
4. Representation: in ```index.html``` and other html pages (inside components) required selectors are referenced. 
5. Code is added to the single page in form of imported js scripts which are executed by a browser.

**Hierarchy: Applications -> Modules -> Components**

## Module

**Module** is declared in ```app.modules.ts```, which is a simple TS class annotated with ```@NgModule```.
Annotation parameters: 
- declarations - all components declared
- imports - importing other modules
- providers - TBD
- bootstrap - entrypoint declaration.

## Component

**Component** - a bundle of html page, css styles and js code. Components can be nested.
**The most challenging part** of the design process is to split the page into components.  
```spec.ts``` file is for testing.  

```@Components``` parameters:
- template | templateURL (*) - inline html code or link to a html file,
- selector - for rendering at html pages, routing,
- styles | styleURL - inline css code or link to a css file.  

Inline html and css code can be written in '' (without \n) or in `` (with \n). 
Inline code | component css-style file in a particular component take precedence over the setting of the components above in the hierarchy. 

Selector:
- by element (main): `name` -> `<name></name>`
- by attribute: `[name]` -> `<div name></div>`
- by class: `.name` -> `<div class='name'></div>`

## Data binding

1) Backend to user:
   - string interpolation
   - property binding
2) User to Backend
   - event binding
3) Two-way binding

### Backend to user 

**String interpolation** is referencing in a html template to a variable or a method with specific syntax ```{{ ... }}```. 
Everything that can be resolved to a string can be put into ```{{}}```, even literals. 

**Property binding** is the ability to dynamically bind a property (HTML element (DOM), Directives, Components) to a particular variable or a method: ```[property]="expression"```.

*String interpolation* and *Property binding* are interchangeable as we can set in property what we are going to render but don't mix them: ```[property]={{...}}``` doesn't work as angular expects TS code for property not a string interpolation. 

### User to backend

**Event binding** is the way how to connect events from user with actions on the server side: ```(event type)="action"```
- event type name: onClick = click
- angular syntax of the expression left side: ```(event type name)```
- expression right side: actions in TS code, e.g. calling a method, changing a property etc.  

List of properties nd events to bind can be googled or check them by ```console.log(element)```

```$event``` is a reserved variable for passing data about a user event from browser to a backend: ```(input)="onServerNameInput($event)"```

### Two-way binding

To allow this form of communication we need to enable the ```ngModel```  directive by adding the ```FormsModule```  to the ```imports[]```  array in the ```AppModule```. 

Property binding through attribute: ```[(ngModel)]="serverName"```, update of the element on both sides (variable serverName | html elements with this attribute) will update another one. 

## Directives

Instructions in the DOM. Components are basically directives. 
- as an attribute of an HTML element | CSS class
- as a template (component)

Types:
- structural directives - add/remove HTML elements including components, star syntax (```*ngIf ... ; else ...```, ```*ngFor```)
- attribute directives - change the element they're placed on, no star syntax
  - ```ngStyle``` - take a js key-value structure where a key is a css type and a value is its value (or function to define it)
  - ```ngClass``` - take a js key-value pair where a key is a css class name (e.g. defined in the component declaration) and a value is a condition to use it. 

We can use a tag ```<ng-template>``` to create a named template in the HTML code and use it as an separate HTML block.

Don't mess up a directive (```ngStyle```) and binding a property of the object with the same name (```[ngStyle]="..."```).
