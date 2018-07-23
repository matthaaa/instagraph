# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Demo --------------------------------------------------
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
  img_url: "http://res.cloudinary.com/instagraph/image/upload/c_scale,w_50/v1518171255/IMG_9646-min.jpg",
)

david = User.create!(
  username: "dobryninstagram",
  password: "password",
  email: "dave@instagraph.com",
  full_name: "David",
  img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
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

davedoingthings = User.create!(
  username: "davedoingthings",
  password: "password",
  email: "davedoingthings@instagraph.com",
  full_name: "Dave",
  img_url: "",
)

# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
david.posts.create!(
  description: "It me!",
  author_id: david.id,
  img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
)
wanderer.posts.create!(
  description: "Views through trees, Yosemite.",
  author_id: wanderer.id,
  img_url: "http://res.cloudinary.com/instagraph/image/upload/c_scale,w_828/v1518171256/IMG_5971-1-min.jpg",
)
# davedoingthings.posts.create!(
#   description: "hello?",
#   author_id: davedoingthings.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/c_fit,h_650,w_2356/v1518169290/IMG_4824-1.jpg",
# )
# wanderer.posts.create!(
#   description: "On the road again.",
#   author_id: wanderer.id,
#   img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/small/IMG_9627.jpg",
# )
davedoingthings.posts.create!(
  description: "Just making some business calls",
  author_id: davedoingthings.id,
  img_url: "http://res.cloudinary.com/instagraph/image/upload/c_scale,w_886/v1528246577/instagraph_seed/IMG_4827-1.jpg",
)
wanderer.posts.create!(
  description: "Had a great time here.",
  author_id: wanderer.id,
  img_url: "http://res.cloudinary.com/instagraph/image/upload/c_scale,w_735/v1518171254/IMG_2239-1-min.jpg",
)
# davedoingthings.posts.create!(
#   description: "hello?",
#   author_id: davedoingthings.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/c_scale,h_600/v1518169297/IMG_4827-1.jpg",
# )
davedoingthings.posts.create!(
  description: "football!",
  author_id: davedoingthings.id,
  img_url: "http://res.cloudinary.com/instagraph/image/upload/c_scale,w_1328/v1528245060/instagraph_seed/IMG_5007-1.jpg",
)
# wanderer.posts.create!(
#   description: "What a great roadtrip.",
#   author_id: wanderer.id,
#   img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/small/IMG_9646.jpg",
# )
# wanderer.posts.create!(
#   description: "Trying to be artsy...",
#   author_id: wanderer.id,
#   img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/small/IMG_9957.jpg",
# )
# wanderer.posts.create!(
#   description: "Havent been to this bridge in a while.",
#   author_id: wanderer.id,
#   img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/small/IMG_2401-1.jpg",
# )
# david.posts.create!(
#   description: "It me! Again! Again!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )
wanderer.posts.create!(
  description: "Beautiful coastlines.",
  author_id: wanderer.id,
  img_url: "http://res.cloudinary.com/instagraph/image/upload/c_scale,w_608/v1518171254/IMG_2239-1-min.jpg",
)
# wanderer.posts.create!(
#   description: "Things are looking up!",
#   author_id: wanderer.id,
#   img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/small/IMG_9775.jpg",
# )
matt.posts.create!(
  description: "Miss this place.",
  author_id: matt.id,
  img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518171255/IMG_9646-min.jpg",
)
# matt.posts.create!(
#   description: "Miss this place. Reposting cuz i felt like it lol",
#   author_id: matt.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518171255/IMG_9646-min.jpg",
# )
# wanderer.posts.create!(
#   description: "Love quiet nights here.",
#   author_id: wanderer.id,
#   img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/small/IMG_4518-1.jpg",
# )
wanderer.posts.create!(
  description: "Best. Milkshake. Ever.",
  author_id: wanderer.id,
  img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/small/IMG_2150-1.jpg",
)
# wanderer.posts.create!(
#   description: "Windmills",
#   author_id: wanderer.id,
#   img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/small/IMG_5875-1.jpg",
# )
david.posts.create!(
  description: "It me! Again!",
  author_id: david.id,
  img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
)
# davedoingthings.posts.create!(
#   description: "It's like a duck, but a phone",
#   author_id: davedoingthings.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170408/IMG_4829-1-min.jpg",
# )
#
# wanderer.posts.create!(
#   description: "Gotta get the shot.",
#   author_id: wanderer.id,
#   img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/wanderer/small/IMG_9760.jpg",
# )
#
# david.posts.create!(
#   description: "It me!",
#   author_id: david.id,
#   img_url: "http://res.cloudinary.com/instagraph/image/upload/v1518170753/David.jpg",
# )

wanderer.posts.create!(
  description: "Miss this place.",
  author_id: wanderer.id,
  img_url: "http://res.cloudinary.com/instagraph/image/upload/c_scale,w_878/v1518171255/IMG_9646-min.jpg",
)
