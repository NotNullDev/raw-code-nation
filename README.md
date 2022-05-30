# RawCodeNation

Table of contents:

- [Overview](#Overview)
- [Modules](#Modules)
- [Tech stack](#Stack)

## Overview

    RCN is a platform to learn how to code by 
    watching and practicing newly aquired knowledge.
    
    User will watch short, up to 20 minutes 
    video clip and then solve practical problem
    based on previous chapters.

    All will be done in the browser
    thanks to embeded visual studio code.

    Main idea of the app is to explore cloud native environment.

## Modules

### FrontendNg
    Single Page Application to serve content to the end-users.
    For UI we will use open source library PrimeNG.

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

## Stack
    Backend is mainly made with Spring Cloud and Spring Boot frameworks.
    Frontend is made using Angular.