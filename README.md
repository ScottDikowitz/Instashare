# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Snapr clone of Instagram written in Ruby on Rails
utilizing React/flux architecture that mimics key aspects of the site,
including:

-signing up
-signing in
-authorization
-posting photos
-viewing other user's photos
-following other users
-photo feed for followed users
-adding comments to photos
-liking photos
-user/tag search

FresherNote is a web application inspired by Evernote built using Ruby on Rails
and React.js. FresherNote allows users to:

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: user auth, routes, models and api (2 days)
I will design landing page, the user signup/signin, models and api for the site,
 and make sensible routes. Then I will design an api for pulling post
 information from the database. I suspect that I will need to use AWS for
 storing images.

[Details][phase-one]

## Phase 2: Comments, follows, likes (2 days)
In this phase I will make ability for the user to create a new post, and have
the ability for users to comment on posts. Then I will let a user to follow
another user. When the user follows the other user, the other user's
recent posts will show up in their index feed. Additionally, I will add
minimal styling in CSS here and proper semantic tags and group things in classes.
[Details][phase-two]

## Phase 3: tagging and location (2 days)
When users have the ability to make new posts, they should also have the ability
to add a tag, and a location for where the photo was taken. When a user types in some
location, it should have autocomplete suggestions for locations already
in the system. Afterwards, the location show page should populate with posts
that have been tagged at that location, and the post show page should have a
link to the location index page.
[Details][phase-three]

## Phase 4: Search(1 day)
Here I will implement search. A user can search for another user or search
for a tag.
[Details][phase-four]

##Phase 5: Styling and refactoring, explore page(2)
I will make it look really good and fix some bugs that have been
bothering me. Then, I will make an explore page, that lists the most liked
posts for the month or so.



### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Tagging people in photos
- [ ] Tagging people in comments
- [ ] Direct messaging
- [ ] Edit password
- [ ] Load more (infinite scrolling)
- [ ] Followers, following lists for users.

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
