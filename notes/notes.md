[Udemy: Angular - The Complete Guide (2023 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2/)

# Table of content 

[1. Basics](#sections-1-2-4-basics--debugging)
[2. Components & Data Binding](#section-5-components--data-binding)
[3. Directives](#section-7-directives)
[4. Services](#section-8-10-services--dependency-injection)
[5. Routing](#section-11-12-routing)
[6. Observables](#section-13-14-observable)
[7. Form Handling](#section-15-16-form-handling)
[8 Pipes](#section-17-pipes)
[9 Pipes](#section-18-19-http-requests)
[10 Authentication](#section-20-authentication)


# Sections 1, 2, 4 Basics & Debugging

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

# Section 5 Components & Data binding

## Data binding

**Areas**
1. HTML (Native properties & events)
2. Directives (Custom properties & events)
3. Components (Custom properties & events)

**Types**
1. string interpolation
2. property binding
3. event binding

### String interpolation & property binding 

Component -> HTML

**String interpolation** is referencing in a html template to a variable or a method with specific syntax ```{{ ... }}```.
Everything that can be resolved to a string can be put into ```{{}}```, even literals.

**Property binding** is the ability to dynamically bind a property (HTML element (DOM), Directives, Components) to a particular variable or a method: ```[property]="expression"```.

*String interpolation* and *Property binding* are interchangeable as we can set in property what we are going to render but don't mix them: ```[property]={{...}}``` doesn't work as angular expects TS code for property not a string interpolation.

### Events

HTML -> Component

**Event binding** is the way how to connect events from user with actions on the server side: ```(event type)="action"```
- event type name: onClick = click
- angular syntax of the expression left side: ```(event type name)```
- expression right side: actions in TS code, e.g. calling a method, changing a property etc.

List of properties nd events to bind can be googled or check them by ```console.log(element)```

```$event``` is a reserved variable for passing data about a user event from browser to a backend: ```(input)="onServerNameInput($event)"```

### Two-way binding

To allow this form of communication we need to enable the ```ngModel```  directive by adding the ```FormsModule```  to the ```imports[]```  array in the ```AppModule```.

Property binding through attribute: ```[(ngModel)]="serverName"```, update of the element on both sides (variable serverName | html elements with this attribute) will update another one.

### Communication between components

**```@Input('alias')```** allows to expose the property of the current component to another component  

**Data flow**: HTML -> Component
```html
<current-component *ngFor="let serverElement of serverElements" 
                    [server]="serverElement"></current-component>
<!-- server is an alias of the property of the CurrentComponent -->
```

**```Output()```**  allows to send events from one component to another one.  

**Data flow**: Component -> Component:
- catch a change at one component (call from an HTML element)
- emit a custom event (```EventEmitter```)
- catch this custom event on another element (where the first element is placed)
```html
<child-element
    (customEvent)="eventHandler($event)"
  ></child-element>
```
- handle this event in a parent component

### Local references 

Local reference is a reference in a HTML template (```#name```) which can be set to an element and allows to reference this element everywhere in this HTML document. 

*References* can be:
- passed to a component TS code.  
    ```html
    <input type="text" class="form-control" #serverName>
    ...
    (click)="onAddServer(serverName)">Add Server</button>
    ```
- accessed through ```@ViewChild``` (two-way binding, but it's a bad practice to change DOM that way) || ```@ContentChild``` (for ```ngContent```)
  ```typescript
    @ViewChild('name', {static:true}) serverContentElementRef: ElementRef;
  ```
  
##  View encapsulation

**CSS** styles are applied only to the component they are defined. It's achieved by tagging HTML elements of the component with a specific tag.   
This is regulated by the property ```encapsulation``` of the ```@Component```:
- Emulated - default
- None - css styles of this element defined globally
- ShadowDom - equals to Emulated in browsers that supports this technology

## Projecting content into a component

Add the directive ```<ng-content>``` into a component to allow processing of the HTML content that is passed to the usage of this component. 
```html
<component *ngFor="let serverElement of serverElements" [server]="serverElement">
<!--  content that will be processed with the directive <ng-content>  -->
  <p>
    <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
    <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
  </p>
</component>
```

## Component lifecycle

Hooks:
- *ngOnChanges* - any changes to ```@Input``` properties
- *ngOnInit* - component initialization
- *ngDoCheck* - any change detection run (extremely often, any actions on the page or in the component)
- *ngAfterContentInit* - any content inside a component (```ng-init```) initialized
- *ngAfterContentCheck* - content inside a component checked (each change detection cycle, after *ngDoCheck*)
- *ngAfterViewInit* - after a component view (including child views) has been initialized 
- *ngAfterViewChecked* - every time a component view (including child views) has been checked (each change detection cycle, after *ngDoCheck*)
- *ngOnDestroy* - once a component is about to destroy 

# Section 7 Directives

**Directives** are instructions in the DOM. Components are basically directives.
- as an attribute of an HTML element | CSS class
- as a template (component)

Types:
- structural directives - add/remove HTML elements including components, star syntax (```*ngIf ... ; else ...```, ```*ngFor```, ```ngSwitch```)
- attribute directives - change the element they're placed on, no star syntax
  - ```ngStyle``` - take a js key-value structure where a key is a css type and a value is its value (or function to define it)
  - ```ngClass``` - take a js key-value pair where a key is a css class name (e.g. defined in the component declaration) and a value is a condition to use it.

We can use a tag ```<ng-template>``` to create a named template in the HTML code and use it as a separate HTML block.

Don't mess up a directive (```ngStyle```) and binding a property of the object with the same name (```[ngStyle]="..."```).

No more than 1 structural directive are available for a component. 

## How to create your own directive?

1. Create a ts file (name.directive.ts) and declare class with ```@Directive``` here. 
2. Pass the element and other required classes to a constructor. 
3. Add some logic to this class using a link to the HTML element directly or the render.  
4. Register the element in ```app.module.ts```
5. Apply it in an HTML template

**How to pass element through a constructor?**

1) parameter of a type: ```ElementRef```
2) parameters of types: ```ElementRef```, ```Renderer2```,
3) ```@HostBinding(attribute name)``` to bind a component class variable to an HTML element property.

- In the first approach we change the DOM directly which is worse because in some cases the DOM may be not available. 
- In the second approach, we use ```Renderer``` for custom rendering: by default, Angular renders a template into DOM,  but with ```Renderer``` we can intercept rendering calls, or to render to something other than DOM.
- the third approach: 
  ```typescript
  @HostBinding('style.background') backgroundColor: string = 'transparent'
  ```

**What kind of logic we can implement in a directive?**

We can listen to events from the HTML page with ```@HostListener('name')```. 
It applies to a method to listen to events and takes an event as a method parameter. It's possible to react on regular and custom events.

**How to apply the directive in an HTML template?**

Use ```selector``` which is an attribute of the ```@Directive``` to declare how to reference to it in a template.
Name it as *`[name]`* to reference as to an attribute of an HTML-element.

**Example**
```typescript
import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";
import {Event} from "@angular/router";

@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');

  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
```

## How to create a structural directive?

Structural directive syntax (```*directive```) in a HTML module is transformed into ```<ng-content [directive]="logic"></ng-content>```.

1. Add a regular directive (like in the chapter above)
2. Pass 2 parameters into the constructor: 
   - what to render: type ```TemplateRef<any>```
   - where to render: type ```ViewContainerRef```
3. Declare the ```@Input()``` variable with the name equal to the selector and add the setter for it 
4. Based in the value of this variable implement some logic on the inbound HTML components (constructor)

**Example**
```typescript
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {

    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}
```

## Using ngSwitch

- declare a value (```[ngSwitch]="value"```) ina high-level HTML block through property binding with a variable in the component 
- declare cases with ```*ngSwitchCase``` and ```*ngSwitchDefault``` in the blocks which we need alternatively to render. 

# Section 8-10 Services & Dependency injection 

**Service** - a code unit to reduce code duplication and centralize some functions. 

1) Create an ordinary ts class (naming convention - ```name.service.ts```, class name - ```NameService```)
2) Add the ```providers``` block in the Component declaration where we use the service and add the service here. 
3) Add a variable and set it in a constructor (or use ts shortcut declaring the variable in a constructor)
4) Use the service through the variable. 

Services are injected by **Angular Injector**.

### Injection hierarchy
Angular injector use **hierarchical approach**: it injects the same service to all subcomponents of the one where we declare it (in ```providers```).
But this behaviour can be overridden (new instance of the service is injected) if we declare the service again below in the component hierarchy.  
Hierarchy:
1) AppModule (one service instance for the whole application)
2) AppComponent (one service instance for the main component and all child components, but not for other services)
3) Particular component

### Service-to-service injection

Two approaches:
1) Root declaration:
   - declare all services at the top level (AppModule)
   - add ```@Injectable``` for the service you want to inject in
   - pass the injecting service into the constructor of the service you are going to inject
2) Lazy loading (Angular 6+):
  - mark all services with ```@Injectable```
  - add ```@Injectable({providedIn: 'root'})``` to the service you want to inject in (an equivalent of declaring at AppModule)

### Cross component communication using services

1) Declare ```Emitter``` on the service level
2) call this emitter from the component that emits an event 
3) subscribe for this event in the component processing this event

# Section 11-12 Routing

Routing allow SPA to look like multiple page application that's mean to have several URL for its parts (but it still has just one page).

## To set up routes

1. Add a constant with a list of routes (type ```Routes```: paths + components) to ```app.module.ts``` (with attributes).
2. Add a ```RouterModule``` to the *import* section and register routes with the ```forRoot()``` method
3. Replace current component occurrence with ```<router-outlet>```

**Alternative**: to set up routes in different module and import it to the ```app.module.ts``` as pre-configured element (imports). 
It makes code structure cleaner. 
```typescript
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
  })
export class AppRoutingModule {}
```

## Path types

Paths can be:
1) *absolute* (```/servers```).
2) *relative* (```servers```).
It's always in the context of the module where it's used: it may serve as an absolute path at the root component, or append to the current path if it's used in the subcomponents.
3) *relative with shifting* (```../servers```).
It eliminates one or more parts of the path. 

## Navigation with routes

### RouterLink 

**Wrong way** - to set the ```href``` attribute to a route (each click on the element the whole app is reloaded) 
**Right ways**
- to set the ```routerLink``` attribute to a router path 
- to bind ```[routerLink]``` property to an array of routes: ```[routerLink]="['/users']"```

To set an HTML-element active based in the router path (*styling links*):
- add ```routerLinkActive="css class"``` to the required element 
- set options if it needs: ```[routerLinkActiveOptions]="{exact: true}"``` (e.g. to mark only one element, duplication of the root ```/```). 

### Router object 

**Programmatic navigation** is a navigation from ts-code is made through the constructor injection of ```Router```. 
By default, Router doesn't know about the current component path and resolve the given path from the root but this behavior can be changed by adding the second parameter ({options}).
This default behavior is opposite to the default logic of ```routerLink``` (where, by default, we resolve the relative path to the current component). 
```typescript
    this.router.navigate(['/servers'], {relativeTo: path});
```

### Child routes
if we have some routes with the same base path, we can combine them into *group of routes* (main route + nested routes).
Don't forget to remove duplicates in paths: */servers/:id -> :id*
```typescript
    // app.module.ts Routes
    {path: 'servers', component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]}
```
With that in place, we also need to replace usages of the components in the nested paths with ```<router-outlet>``` to allow router to load them. 

### Redirection & Wildcards

**Redirection** - sending a user from one URL to another one, defined in the route declaration (```app.module.ts```) instead of a linked component. 
```typescript

```
**Use-case**: redirect users from any URL that is not declared to a default one. 
Solution: use a wildcard "**" but pay attention that this route must be the last one as the routes are matched consequently. 
```typescript
{path: 'not-found', component: NotFoundComponent},
{path: '**', redirectTo: '/not-found'}
```

**Default strategy** "prefix" matches routes from the beginning which may lead to confusion so in some cases it's reasonable to change it to "full" for exact matching. 

## Params

### Path params

1) Declare params in the path declaration (```app.module.ts```): ```{path: 'user/:id/:name', component: UserComponent}```
2) Access them through an ```ActivatedRoute``` object passed as a parameter to a component. 
On init, get access to a current state of the active route (snapshot) (```activeRoute.snapshot.params['name']```) to get a list of parameters.
3) If parameters can be dynamically changed with an action within the component 9from the page you currently on), use an observable on parameter list:
```typescript
this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )
```

### Query params & fragments

1) Access through the same object ```ActivatedRoute``` object passed as a parameter to a component. 
2) Passing through:
   - ```[routerLink]``` - extra parameters ```[queryParams]``` and ```fragment```
   - programmatically: extra parameters of ```route.navigate()```:
   ```typescript
    this.router.navigate(['/servers', 5, 'edit'], {queryParams: {allowEdit: '1'}});
   ```

## Guards

**Guards** are services that can be used to perform some checks before showing the component (CanActivate, CanActivateChild) or before discard it (CanDeactivate) to decide whether to show/close the component or not. 

**Implementation** 
- regular service implementing pertinent interfaces (don't forget to add to ```app.module.ts```)
- add to routes with parameter: 
  - canActivate - if we want to make some check before rendering the component
  - canActivateChild - if we want to make some before showing components on child routes. 
  - canDeactivate - if we want to make some checks before we leave the component
```typescript
const appRoutes: Routes = [
  {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', canDeactivate: [CanDeactivateGuardService], component: EditServerComponent}
    ]}
]
```

## Static and dynamic data to routes

**Static data** - add a property data to the route declaration (```{name}:data```) and address this data by the *name* in the component. 
```typescript
{path: 'not-found', component: ErrorComponent, data: {message: "Page not found"}},
```

**Dynamic data**: 
- declare a resolver (service implementing ```Resolve<type>```)
- register resolver to the route declaration: ```{path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]}```
- resolver will fetch data and put them into the variable with the given name.   
Using Resolver is pretty similar with using onInit() but with one difference that in case of the Resolver data is uploaded BEFORE the component initialization. 

## Other

**Problem with routes in old servers** -> turn on **Hash mode** so that a server knows that it should manage only URL before hash and a client (Angular) should use the path after: ```https://some_path_for_server/#/some_path_for_client```

# Section 13-14 Observable

Consists of:
- *observable* - data source emitting events
- *observer* - event handler that is *subscribed* to the observable (through *subscription*)
- *events* - regular, error, completion 

1) Each subscription (```observer.subscribe()```) must be stored (e.g. in variable) because otherwise each method call will produce a new subscription (old ones haven't closed) which can lead to a memory leak. 
2) Each subscription (unless it's endless) should be closed (```subscription.unsubscribe()```). If *observable* is implemented by Angular, it does closing for you. 
3) *Custom observable*:
   - package ```rxjs```
   - ```interval(number)``` - a build-in function that emit events (numbers) per interval (input parameter)
   - ```Observable.create(observer) | new Observable(observer => {...})``` - create an observable with some logic sending events through ```observer.next(event)```, ```observer.error(new Error())``` and ```observer.complete()```.
   - *Complete* stops observable, *Error* stops observable skipping completion.  

**Operators** - intermediate operators to process data before observer consume it, like Stream operations in Java. Useful when Observable is out of your control.
From package ```rxjs/operators```
```typescript
this. subscription = observable.pipe(operator1, operator2 ...).subscribe(eventHandler, errorHandler, completionHandler)
```

**Subject** - replacement for *EventEmitter* in case if we subscribe to it. 
It works the same way as a regular Subscription (Observable) but in more "active" way as we emit new events programmatically ```subscription.next()```. 

# Section 15-16 Form handling

Two approaches:
- Template-driven (Angular infers a Form Object from DOM)
- Reactive (Form is created programmatically and synchronized with DOM)

## Template-driven approach (TDA)

In nutshell, we pass or bind an object from the DOM to the TS model to process it. 

Main functionality - ```FormsModule``` imported to ```app.module.ts```. Angular recognize form by the tag ```<form>``` (selector). 

1) we need to mark controls in the html-template: ```ngModel``` directive and html-attribute ```<name>```
2) we need to add a method to process submitting and tie it with the ```<form>``` by processing ```(ngSubmit)```
3) we need to pass an element to TS-component:
   - through passing an object of type ```NgForm``` into the created method with a html-element reference: 
  ```html
    <form (ngSubmit)="onSubmit(f) #f="ngForm"></form>
  ```
  - though ```@ViewChild``` binding
  ```typescript
    @ViewChild('form') signupForm: NgForm;
  ```

**NgModel attributes**
- touched - user has clicked on it
- dirty - user has changed a value
- valid - value has passed validation

**Form binding** - how the HTML form is connected to a TS-component
- no binding - get data only by submitting a form 
- one-way binding - get default data from a TS-component
- two-way binding - get a default + online update a variable based on used input. 

## Form validation

*Build-in validators* (Angular directives)
- TDA, all directives and validators are among them [https://angular.io/api?type=directive]
- Reactive: [https://angular.io/api/forms/Validators]

Angular add custom CSS classes to mark html-elements, and they can be used for binding CSS settings. 
```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```

## Other features

1) *Combining input values into groups* within the NgModel object(value) by marking html objects (```div```) with ```ngModelGroup="name"```.
2) *Populating input* from a TS component: ```NgForm.setValue()```(update the whole form) or ```NgForm.form.patchValue()```(update a specific fiend), pass a JSON representing a form structure into these methods. 

## Reactive approach

In a nutshell, we create a form in TS code and bind it to the HTML form. 

1. Create a variable of ```FormGroup```
2. Populate it with ```FormControl(initial value, validators)```: *forms/reactive/ReactiveFormComponent.signupForm*
3. Bind the form to the HTML-form (```[formGroup]="signupForm"```) and all inputs to ```FormControls``` (```formControlName="username"```)
4. Submitting: 
   - process ```ngSubmit``` event on the HTML form
   - use internal link to the ```FormGroup``` to get data from the form
5. Validation: 
   - Sync validators: 
     - pass a single build-in validator, custom validator or an array of them (static class ```Validator```) as a second parameter to a ```FormControl```.
     - custom validator is a method that returns key-value pairs like ```{[s: string]: boolean}```. 
   - Async validator: 
     - the same as sync validator, but we need to pass them into the third argument. 
     - return type ```Promise<any>``` or ```Observable<any>```
     - add css-class ```ng-pending``` while getting an answer from a server. 

**Getting access to control** in the HTML code through access the TS property: ```signupForm.get('username').invalid```.

**Groping** of controls can be done via nested ```FormGroup``` elements (inside the main ```FormGroup```). 

**FormArray** allows to gather multiple noname controls in the array: 
- add ```FormArray``` to the ```FormGroup```
- bind it to the HTML-element by ```formArrayName```
- bind each HTML-element for the item of the array to its value by ```[formControlName]```
- implement a mechanism to add a value to the array (e.g. a button)
Look at *projects/learning/src/app/forms/reactive/reactive-form.component.html:24*

**Subscribe to changes**: ```signupForm.statusChages``` or ```signupForm.valueChanges``` (applicable to particular controls aw well). 

**Set/patch/reset values**: ```signupForm.setValues(json form object)```, ```signupForm.patchValues(changed fields)```

# Section 17 Pipes

Pipes is a way to transform data in a HTML-template. Literally it's just a chain of **built-in** and custom operators: ```{{ server.started | date: 'fullDate' | uppercase }}```. 

- List of **built-in** pipe operators: https://angular.io/api?type=pipe. 
- Arguments can be passed to the pipe ('fullDate' in the example above), each argument after ```:```
- Several pipes can be chained but order of them matter (input to the pipe could be of improper type). 

## Custom pipe
1) Class implementing PipeTransform.
2) Implement ```transform()```, input is the value to transform and a list of parameters
3) Add ```@Pipe```, specify parameters of the pipe:
   - name
   - pure - whether pipe should be updated when any change in the page is made (can decline performance). 
4) Register in the ```declaration``` section of ```app.module.ts```
5) Use it in the HTML code. 

## Async pipe
Sync pipes badly work with async tasks (Promise, Observable) just showing them as Object. 
However, if we use ```async``` built-in pipe, it catches events and resolve the Promise | Observable. 

# Section 18-19 Http requests

1. Add ```HttpClientModule``` to ```app.module.ts```
2. Use ```HttpClient``` methods to call a remote service (get, post) -> generic method, it needs to specify a return type. 
3. Subscribe and process the call result.

Usually, it's reasonable to move the ```HttpClient``` logic to a service returning ```Observable```(if the call result is important) or processing the result in the service. 

## Error handling

Several approaches:
1) add the second argument to ```subscribe()``` of ```Observable``` to process errors where you process the response
2) distribute information about an error through ```Subject``` when several components are needed to be informed. 
3) ```catchError``` in a ```pipe()```, it's possible also to re-throw the error with the ```throwError``` operator. 

## Http options
*Http options* can be set as an argument in ```HttpClient``` method (get, post, etc).  
**Options**
1) **Header** (```HttpHeader```), key-value pairs
2) **Query params** (```HttpParams```), immutable object, so for multiple values we need to use ```append``` and assign the result to a variable. 
3) **Observe**, what we extract from the response.   
Default = 'body', but we can also extract 'response' (the whole response, ```HttpResponse```) and 'event' (```HttpEventType```, catching such events as sending, response, download etc). 
4) **Response type**. Default = 'json', but it's possible to set 'text' (if want to parse it later or we don't need the response to be parsed). 

## Http Interceptors

1) ordinary Angular service implemented ```HttpInterceptor```
2) should be registered in ```app.module.ts``` as a provider
    ```typescript
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterseptorService,
        multi: true
    }
    ```
3) request can be modified in the interceptor by cloning the original one and passing updates (as it immutable): ```const newRequest = req.clone({headers: req.headers.append('Auth', 'XYZ')})```.
4) multiple interceptors can be registered and in this case, the order is matter
5) it's possible to intercept a response, for this purpose we need to apply operators (```pipe```) to the return value (```next.handle(req)```)

# Section 20 Authentication

Implemented as a service which uses ```HttpClient``` to call a backend. 
Service process response (```pipe```): 
- handling errors
- returning ```Observable``` to a component (AuthComponent), which implements a login form,
- store the authenticated user (User is an introduced **interface** for object to communicate with backend)

Store user data: 
- Options - local storage | cookie
- Local storage: 
  - we need to serialize the object by converting it to string: ```JSON.stringify(user)``` and back when we get it from the storage ```JSON.parse(user string)```.
  - communication with *local storage** is through ```localStorage``` with ```set(key, string value)``` and ```get(key)```
- implement **AutoLogin** by getting the user from the local storage once the application is loaded and sending it regularly to other components.
- implement **AutoLogout** by setting a timer for the ```logout()``` method with time token expiration time and treat this time when we reload the components (page) and do a manual logout. 
- guard sensitive routes by implementing a [route guard](#guards). 

General notes:
- ```BehaviorSubject``` works like a subject but with the ability to give access to the current Object state (not when it has been changed). 
- ```rxjs``` -> pipe operators:
  - exhaustMap - convert one Observable to another one
  - map - apply a function
  - take - limit the number of elements to proceed in the pipe
  - tap - use a function without input modification
