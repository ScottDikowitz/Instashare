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

## Phase 5? Styling, bug fixing and refactoring
This is a phase where i will make it look really good and optimize it a little
bit, and fix some bugs that have been bothering me.

## Phase 6: deploy
put it out on the internets 

### Phase 2: Flux Architecture and Note CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Note store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Notes `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Notes can be created, read, edited and destroyed in the browser. Notes should
save to the database when the form loses focus or is left idle after editing.
Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]

### Phase 3: Notebooks and Tags (2 days)

Phase 3 adds organization to the Notes. Notes belong to a Notebook, which has
its own `Index` view. Create JSON API for Notebooks. Notes can also now be
tagged with multiple tags. Users can bring up notes in a separate `SearchIndex`
view by searching for their tags. Once the tag search is implemented, I will
extend this to a fuzzy search through every Note's content.

[Details][phase-three]

### Phase 4: Allow Complex Styling in Notes (1 day)

Using quill.js, allow for complex styling of notes.

[Details][phase-four]

### Phase 5: Reminders and Garbage Collection (1 day)

Phase 5 introduces two new features. First, users can set reminders on notes
which will at the time they are set for prompt the user to review and edit the
given note. In addition, I will implement a feature that asks users to review
notes once they reach a certain age and ask whether they should be kept,
archived, or deleted.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements (like
the NotebookForm).

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Changelogs for Notes
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
