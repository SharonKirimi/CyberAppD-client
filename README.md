## Project Idea

```md
My project idea is an app that allows individuals or companies create checkpoint on the cybersecurity measures they have implemented into their companies or even personal lives.
The idea came up from my desire to implement cyber security measures into my personal life. 
This app can be used by individuals as well as companies to keep track of the cyber security measures they have implemented and clearly evaluate its effects.
```

## Write between 3-5 user stories


```md
* As a user I want to be able to sign up/in/out and change password
* As a user I want to be able to create, read, update and delete data in a database

```

## Wireframes


```md
![Wireframe](https://ibb.co/Q94dG3Q)
```

## Plan your resources


```md
* Account
* User
When someone new signs up, a POST to /account will create an account. The relationship between Account and User as follows:

* User belongs to Account
* Account has many users
* User is a foreign key constraint in Account (i.e. I cannot create account without a User)
As such, a POST request to /account will create an Account and a User. 

```

## Create an ERD ([entity relationship diagram](https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/))

These are the diagrams that show how your resources are related to one another
(one to many, many to many, etc).

Include an image (or a link to image) below.

```md
![ERD](https://ibb.co/K6Ndxbb)
```

## Routing

What routes will you need to make the proper request to your API?

```md
<!-- your answer here -->
```

## Timetable


```md
# Getting Started

Most importantly, remember to **go slowly and be methodical**. That means you
should be testing your changes in-browser as you write each line or so of code.
Always be commiting. Deploy early and often.

Here's a rough sketch of what you should do and in what order:

## Day 1 (Suggested completion by 11/20)

### Planning
1.  [ ] Review [full-stack-project-practice](https://git.generalassemb.ly/seir-flex-831/full-stack-project-practice)
1.  [ ] Review [full-stack-project-modeling-lab](https://git.generalassemb.ly/seir-flex-831/full-stack-project-modeling-lab)
1.  [ ] Create User Stories
1.  [ ] Create Wire Frames
1.  [ ] Create ERD

### Set Up

API

1.  [ ] [Download Express API Template](https://git.generalassemb.ly/seir-flex-831/express-api-template)
1.  [ ] Create a Github Repository

Client

1.  [ ] [Download Browser Template](https://git.generalassemb.ly/seir-flex-831/browser-template)
1.  [ ] Create a Github Repository

### API
1.  [ ] Review [express-api-crud](https://git.generalassemb.ly/seir-flex-831/express-api-crud), [express-api-relationships](https://git.generalassemb.ly/seir-flex-831/express-api-relationships), and [express-api-auth](https://git.generalassemb.ly/seir-flex-831/express-api-auth)
1.  [ ] CRUD your resource
1.  [ ] Test your resource's end points with curl scripts
1.  [ ] Add the relationship to a User
1.  [ ] Add User ownership to resource controller
1.  [ ] Test your resource's end points with curl scripts

## Day 2 (Suggested completion by end of 11/23)

### Client Auth
1.  [ ] Review [api-token-auth](https://git.generalassemb.ly/seir-flex-831/jquery-ajax-token-auth)
1.  [ ] Sign Up
1.  [ ] Sign In
1.  [ ] Change Password
1.  [ ] Sign Out
1.  [ ] All API calls have success or failure messages

## Day 3 (Suggested completion by end of 11/30)

### Client Create
1.  [ ] Review [query-ajax-post](https://git.generalassemb.ly/seir-flex-831/jquery-ajax-post)
3.  [ ] Create resource

## Day 4 (Suggested completion by end of 12/1)
### Client Index & Delete
4.  [ ] Get all of their owned resources
5.  [ ] Delete single resource

## Day 5 (Suggested completion by end of 12/4)
### Client Update
6.  [ ] Update single resource

### Deploy
1.  [ ] [Deploy to Heroku](https://git.generalassemb.ly/seir-flex-831/express-api-deployment-guide)
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/seir-flex-831/gh-pages-deployment-guide)

### Final Touches
1.  [ ] README
2.  [ ] Troubleshoot/Debug
3.  [ ] Style
```

# API REPO

```md
![API REPO](https://github.com/Sharonkkk/CyberAppD-project)
```
# API DEPLOYED

```md
![API DEPLOYED](https://calm-spire-01958.herokuapp.com)
```

# CLIENT REPO

```md
![CLIENT REPO](https://github.com/Sharonkkk/CyberAppD-client)
```

# CLIENT DEPLOYED

```md
![CLIENT DEPLOYED](https://sharonkkk.github.io/CyberAppD-client/)
```
