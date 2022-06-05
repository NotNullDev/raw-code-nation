# RawCodeNation

Table of contents:

- [Overview](#Overview)
- [Modules](#Modules)
- [Tech stack](#Stack)
- [About profiles](#Profiles)
- [ROADMAP](#ROADMAP)

## Overview

    RCN is a platform to learn how to code by 
    watching and practicing newly aquired knowledge.
    
    User will watch short, up to 20 minutes 
    video clip and then solve practical problem
    based on previous chapters.

    All will be done in the browser
    thanks to embeded visual studio code.

    Main idea of the app is to explore cloud native environment.

    Application is going to be in docker compose files.
    After that, we will move it to k8s.

    Project will be created as frontend first because it's easier
    to create backend when you know what
    will be neededthan change something in backend.

## Modules

### FrontendNg
    Single Page Application to serve content to the end-users.
    For UI we will use open source library PrimeNG.

### FrontendReact
    SPA with MUI as UI library

### NextJS
    Frontend made with React and MUI using NextJS framework

### ResourceServer
    Server to store and receive videos and files for courses.


### AuthenticationServer
    Server to handle user authentication and authorization.


### CodeInterpreterServer
    Server that compile/interpret code and returns result.
    Code is going to run inside the docker container
    with prepared environment.
  
### CommunicationServer
    Server for hanlding chats and in-app posts/comments.

### Database
    Postgress database that lives in container.

### ConfigServer
    Server to serve configuration stored on git repository.

## Stack
    Backend is mainly made with Spring Cloud and Spring Boot frameworks.
    Frontend is made using Angular.
    Apache kafka is going to be tool for async communication between microservices.

## Profiles
- 'rs': resource server
- 'pg': postgresql env

## TODO:
[ ] Learn about React ecosystem (in progress)
[ ] Use NextJS instead of create-react-app