# Phase 1: user auth, routes, post model and api (2 days)

## Rails
### Models
* User
* Post

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::PostsController (index, show)
* Api::UsersController (index, show)
* PostsController (create, destroy, edit, update, new)

## Flux
### Views (React Components)
posts index
header
user show page

### Stores
post

### Views
* users/new.html.erb
* session/new.html.erb

### Actions
* ApiActions.receiveAllPosts

### ApiUtil
* ApiUtil.fetchAllPosts

## Gems/Libraries
* BCrypt
* better errors
* byebug
* binding_of_caller
