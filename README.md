# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

< THIS INSTAGRAM CLONE > is a clone of Instagram written in Ruby on Rails
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
I will design landing page, the user signup/signin, models and api for the site, and make
make sensible routes. Then I will design an api for pulling information
from the database.

[Details][phase-one]

## Phase 2: Comments, follows, likes (3 days)
In this phase I will make ability for the user to create a new post, and have
the ability for users to comment on posts. Then I will let a user to follow
another user. When the user follows the other user, the other user's
recent posts will show up in their index feed. Additionally, I will add
minimal styling in CSS here and proper semantic tags and group things in classes.

## Phase 3: Location tagging (2 days)
When users have the ability to make new posts, they should also have the ability
to add a location for where the photo was taken. When a user types in some
location, it should have autocomplete suggestions for locations already
in the system. Afterwards, the location show page should populate with posts
that have been tagged at that location, and the post show page should have a
link to the location index page.

## Phase 5? Styling, bug fixing and refactoring
This is a phase where i will make it look really good and optimize it a little
bit, and fix some bugs that have been bothering me.

[Details][phase-two]


[Details][phase-three]

[Details][phase-four]

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Tagging people in photos
- [ ] Direct messaging
- [ ] Edit password
- [ ] Load more (infinite scrolling)

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
