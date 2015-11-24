# Instashare

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://instashareapp.herokuapp.com/

## Minimum Viable Product

Instashare is a clone of Instagram written in Ruby on Rails
utilizing React/flux architecture. You will be able to make posts with
images and a caption, comment on posts, follow other users, see
recent posts in your feed, add tags in your caption, include a location
in your post, and like posts. Here area  list of itemized features:

- [✓] signing up
- [✓] signing in
- [✓] authorization
- [✓] photo feed for followed users
- [✓] posting photos
- [✓] viewing other user's photos
- [✓] viewing tag page
- [✓] viewing location page
- [✓] following other users
- [✓] adding comments to photos
- [ ] liking photos
- [ ] user/tag search

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: user auth, routes, models and api (2 days)
 I will design landing page, the user signup/signin, models and api for the site,
 and make routes for posts api and user pages. I will have the posts index and
 the user show page nested in a react router. Then I will design an api for
 pulling post information from the database. I will also create a basic header,
 and links for navigation.

[Details][phase-one]

## Phase 2: Posts, Comments, likes (2 days)
In this phase I will make ability for the user to create a new post, and have
the ability for users to comment on posts. Then I will let a user to follow
another user. When the user follows the other user, the other user's
recent posts will show up in their index feed. Additionally, I will add
minimal styling in CSS here and proper semantic tags and group things in classes.

[Details][phase-two]

## Phase 3: tagging and location (2 days)
When users make a new post, they should have the ability to add a tag, and a
location for where the photo was taken.
Afterwards, the location show page should populate with posts that have been
tagged at that location, and the post show page should have a link to the
location index page.

[Details][phase-three]

## Phase 4: Search and liking(1 day)
First I will allow a user to like a post. Then I will implement search. A user
can search for another user or search for a tag.
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
- [ ] Photo Filters
- [ ] Autocomplete location search

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
