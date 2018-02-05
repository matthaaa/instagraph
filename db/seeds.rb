# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Demo --------------------------------------------------
User.create(
  id: 1,
  username: "demo_lovati",
  password: "password",
  email: "demo@instagraph.com",
  full_name: "Demo Lovati",
  img_url: "",
)

# Matt --------------------------------------------------
matt = User.create(
  id: 2,
  username: "matt",
  password: "password",
  email: "matt@instagraph.com",
  full_name: "Matt Ha",
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/IMG_8769.jpg",
)
matt.posts.create!(
  id: 21,
  description: "Miss this place.",
  author_id: 2,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/IMG_8769.jpg",
)
matt.posts.create!(
  id: 22,
  description: "Miss this place. Reposting cuz i felt like it lol",
  author_id: 2,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/IMG_8769.jpg",
)

# Oski --------------------------------------------------
User.create(
  id: 3,
  username: "oski",
  password: "password",
  email: "oski@instagraph.com",
  full_name: "Oski",
  img_url: "",
)

# Wanderer --------------------------------------------------
wanderer = User.create(
  id: 7,
  username: "wanderer",
  password: "password",
  email: "cameraman@instagraph.com",
  full_name: "Cam Rahman",
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_5875-1.jpg",
)
wanderer.posts.create!(
  id: 701,
  description: "Had a great time here.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9957.jpg",
)
wanderer.posts.create!(
  id: 702,
  description: "Amazing sights.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_2150-1.jpg"
)
wanderer.posts.create!(
  id: 703,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_2199-1.jpg",
)
wanderer.posts.create!(
  id: 704,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_2239-1.jpg",
)
wanderer.posts.create!(
  id: 705,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_2401-1.jpg",
)
wanderer.posts.create!(
  id: 706,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_4518-1.jpg",
)
wanderer.posts.create!(
  id: 707,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_5875-1.jpg",
)
wanderer.posts.create!(
  id: 708,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_5971-1.jpg",
)
wanderer.posts.create!(
  id: 709,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9627.jpg",
)
wanderer.posts.create!(
  id: 710,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9646.jpg",
)
wanderer.posts.create!(
  id: 711,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9663.jpg",
)
wanderer.posts.create!(
  id: 712,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9760.jpg",
)
wanderer.posts.create!(
  id: 713,
  description: "Miss this place.",
  author_id: 7,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9775.jpg",
)

User.create(
  id: 4,
  username: "dobryninstagram",
  password: "password",
  email: "dave@instagraph.com",
  full_name: "David",
  img_url: "",
)
User.create(
  id: 5,
  username: "taylor",
  password: "password",
  email: "taylor@instagraph.com",
  full_name: "Taylor",
  img_url: "",
)
User.create(
  id: 42,
  username: "sadielady",
  password: "password",
  email: "sadie@instagraph.com",
  full_name: "Sadie",
  img_url: "",
)
User.create(
  id: 6,
  username: "davedoingthings",
  password: "password",
  email: "davedoingthings@instagraph.com",
  full_name: "Dave",
  img_url: "",
)
