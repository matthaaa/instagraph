# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Demo --------------------------------------------------
debugger;
User.create!(
  username: "demo_lovati",
  password: "password",
  email: "demo@instagraph.com",
  full_name: "Demo Lovati",
  img_url: "",
)

# Matt --------------------------------------------------
matt = User.create!(
  username: "matt",
  password: "password",
  email: "matt@instagraph.com",
  full_name: "Matt Ha",
  img_url: "",
)
matt.posts.create!(
  description: "Miss this place.",
  author_id: matt.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/IMG_8769.jpg",
)
matt.posts.create!(
  description: "Miss this place. Reposting cuz i felt like it lol",
  author_id: matt.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/IMG_8769.jpg",
)

# Oski --------------------------------------------------
User.create!(
  username: "oski",
  password: "password",
  email: "oski@instagraph.com",
  full_name: "Oski",
  img_url: "",
)

# Wanderer --------------------------------------------------
wanderer = User.create!(
  username: "wanderer",
  password: "password",
  email: "cameraman@instagraph.com",
  full_name: "Cam Rahman",
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_5875-1.jpg",
)
wanderer.posts.create!(
  description: "Had a great time here.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9957.jpg",
)
wanderer.posts.create!(
  description: "Amazing sights.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_2150-1.jpg"
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_2199-1.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_2239-1.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_2401-1.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_4518-1.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_5875-1.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_5971-1.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9627.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9646.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9663.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9760.jpg",
)
wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/IMG_9775.jpg",
)

User.create!(
  username: "dobryninstagram",
  password: "password",
  email: "dave@instagraph.com",
  full_name: "David",
  img_url: "",
)
User.create!(
  username: "taylor",
  password: "password",
  email: "taylor@instagraph.com",
  full_name: "Taylor",
  img_url: "",
)
User.create!(
  username: "sadielady",
  password: "password",
  email: "sadie@instagraph.com",
  full_name: "Sadie",
  img_url: "",
)
User.create!(
  username: "davedoingthings",
  password: "password",
  email: "davedoingthings@instagraph.com",
  full_name: "Dave",
  img_url: "",
)
