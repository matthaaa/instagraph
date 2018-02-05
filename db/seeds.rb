# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  id: 1,
  username: "demo_lovati",
  password: "password",
  email: "demo@instagraph.com",
  full_name: "Demo Lovati",
  img_url: "",
)

matt = User.create(
  id: 2,
  username: "matt",
  password: "password",
  email: "matt@instagraph.com",
  full_name: "Matt Ha",
  img_url: "",
)
matt.posts.create!(
  id: 1,
  description: "Miss this place.",
  author_id: 2,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/IMG_8769.jpg",
)
matt.posts.create!(
  id: 2,
  description: "Miss this place. Reposting cuz i felt like it lol",
  author_id: 2,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/IMG_8769.jpg",
)

User.create(
  id: 3,
  username: "oski",
  password: "password",
  email: "oski@instagraph.com",
  full_name: "Oski",
  img_url: "",
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
  id: 42,
  username: "davedoingthings",
  password: "password",
  email: "davedoingthings@instagraph.com",
  full_name: "Dave",
  img_url: "",
)
