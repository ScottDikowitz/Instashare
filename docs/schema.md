# Schema Information

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image       | string    | not null
comment     | text      | not null
user_id     | integer   | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, indexed
post_id     | integer   | not null, indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, indexed
name        | string    | not null, indexed

<!-- ## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key -->

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, indexed
content     | text      | not null

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, indexed
user_id     | integer   | not null, indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_pic     | string    | not null
bio             | text      |
