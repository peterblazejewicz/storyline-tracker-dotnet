# Storyline Tracker on Dotnet Core

A John Papa's Storyline Tracker app with Dotnet backed service

## About

The project uses `angular-cli` command line tool to scaffold Angular 2.* client code and `dotnet` and `generator-aspnet` to scaffold C# kestrel based hosting page and Web API services.

The client side code uses `Material Design Lite` and `Material Design Icons` managed by `angular-cli` and SystemJS.


```
cd StorylineTracker.Client
npm install
ng build
```
```
dotnet restore
dotnet run
```

The C# code contains middleware configuration for using CORS, so you could:
```
cd StorylineTracker.Client
dotnet restore
dotnet run
```
to start service in C# and in next cmd session:
```
ng serve
```

## Author

@peterblazejewicz
