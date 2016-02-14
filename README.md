# Instashare
[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://instashareapp.herokuapp.com/

## Minimum Viable Product
Instashare is a social media platform centered around sharing
interesting photos with friends. It was built with Ruby on Rails
on the backend, utilizing React/flux architecture on the frontend.
Instashare mimics key Instagram functionality, namely the ability
to share photos and create captions. Additionally, you can comment
on and like posts, create tags, tag locations (using geolocation api),
 and subscribe to users to have their posts show up in your feed.

## How to run this project
1. `bundle install`
2.  run `bundle exec figaro install`
3. open up newly created `application.yml` file and fill in these details
to link up your AWS s3 buckets, Faceboook developer keys, geocode api key,
and google maps api key.

```yaml
development:
  s3_bucket: "myapp-dev"

production:
  s3_bucket: "myapp-pro"

s3_access_key_id: "ad69caf9a44dcac1fb28"
s3_secret_access_key: "83ca7aa160fedaf3b350"

FACEBOOK_KEY: "ad69caf9a44dcac1fb28"
FACEBOOK_SECRET:  "83ca7aa160fedaf3b350"

GEOCODE_API_KEY:  "ad69caf9a44dcac1fb28"
MAPS_KEY: "83ca7aa160fedaf3b350"
```

4. Finally, create your db and run migrations. ImageMagick is required
for uploading photos.

### Bonus Features (TBD)
- [ ] Load previous comments button
- [✓] Hover over pics shows likes/comments numbers
- [✓] Redesign users page
- [ ] Create useful explore page
- [✓] Prettify transitions
- [ ] Direct messaging
- [ ] Edit password
- [✓] Load more (infinite scrolling)
- [ ] Followers, following lists for users
- [ ] Photo Filters
- [✓] Paginate user's list
- [ ] Edit location option on posts
- [✓] Autocomplete location search
