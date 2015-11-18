# Phase 1: user auth, routes, post model and api (2 days)

## Rails
### Models
* User
* Post

### Controllers
* UsersController (create, new)
* Api::UsersController (index, show)
* Api::PostsController (index, show)
* static_pages_controller
* SessionsController (create, new, destroy)
<!-- * PostsController (create, destroy, edit, update, new) -->

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
