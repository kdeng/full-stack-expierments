# Post Solution Demo

[![Actions Status](https://github.com/kdeng/solution-post-demo/workflows/Main%20Workflow/badge.svg)](https://github.com/kdeng/solution-post-demo/actions)

## Overview

This is a sample solution for Westpac.

## Requirements

* Create a RESTful API to handle communication between the data source (https://jsonplaceholder.typicode.com/) and the front-end.
* Create a front-end to display the posts.
* Provide instructions to run the application you submit.

## Prerequisites

* latest Oracle jdk 11.x (>= 11.0.6)
* latest maven (>= 3.6.3)
* latest node (>= v13.8.0)
* latest npm (>= 6.13.7)
* latest google chrome

## Implementation technologies

* angular 9
* java 11
* spring-boot 2.3.3
* spring webflux + netty

## How to launch applications locally

Before launch the application on your local, please make sure both port 4200 and 9090 are available.

Also, following scripts only can be executed in Bash terminal.

### Prepare

Open a Bash terminal, and run following command.

```bash

./make init

```

This step will install all Node dependencies for frontend application


### Launch backend application

In the same Bash terminal, run following command.

```bash

./make run api

```

Then, the backend application will be launched and listens on port 9090.

### Launch frontend application

Open another Bash terminal, and run following command.

```bash

./make run web

```

Then, the frontend application will be launched and listens on port 4200.

**Now, you can access application via http://localhost:4200.**
