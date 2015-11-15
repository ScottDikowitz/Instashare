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
-'following' other users
-photo feed for followed users
-adding comments to photos
-direct messaging
-premium styling

FresherNote is a web application inspired by Evernote built using Ruby on Rails
and React.js. FresherNote allows users to:

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: user auth, routes, models and api
I will design landing page, the user signup/signin, models and api for the site, and make
make sensible routes. Then I will design an api for pulling information
from the database

[Details][phase-one]

## Phase 2: Comments, follow list, UI
In this phase I will create the comment system, add a follow list and
complete the fancy UI stuff using a flux architecture.  ## details of specifics
in regard to UI stuff here ##. ## more specifics about comments and follow list##.
Addintionally, I will add minimal styling in CSS here and use proper semantic tags
and group things in classes.

## Phase 3: Location tagging
When users have the ability to make new posts, they should also have the ability
to add a location for where the photo was taken. When a user types in some
location, it should have autocomplete suggestions for locations already
in the system. Afterwards, the location show page should populate with posts
that have been tagged at that location.

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

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
