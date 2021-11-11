require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all
Like.destroy_all
Comment.destroy_all
Post.destroy_all
Friend.destroy_all
User.destroy_all

user1 = User.create(first_name: "Confused", last_name: "Pikachu", password: "password", email: "demo@email.com")
propic1 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/pikachu.jpeg')
coverpic1 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/pikachu_cover_photo.jpeg')
user1.profile_picture.attach(io: propic1, filename: 'pikachu.jpg')
user1.cover_photo.attach(io: coverpic1, filename: 'pikachu_cover_photo.jpg')

user2 = User.create(first_name: "Cat", last_name: "Getting Yelled At", password: "password", email: "user2@email.com")
propic2 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/cat.jpeg')
coverpic2 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/yelling.jpeg')
user2.profile_picture.attach(io: propic2, filename: 'cat.jpg')
user2.cover_photo.attach(io: coverpic2, filename: 'yelling.jpg')

user3 = User.create(first_name: "Patrick", last_name: "Star", password: "password", email: "user3@email.com")
propic3 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/patrick.jpeg')
coverpic3 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/spongebob.jpeg')
user3.profile_picture.attach(io: propic3, filename: 'patrick.jpg')
user3.cover_photo.attach(io: coverpic3, filename: 'spongebob.jpg')

user4 = User.create(first_name: "Spiderman", last_name: "Imposter", password: "password", email: "user4@email.com")
propic4 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/spiderman.png')
user4.profile_picture.attach(io: propic4, filename: 'spiderman.png')

user5 = User.create(first_name: "Dabi", last_name: "The Doggie", password: "password", email: "user5@email.com")
propic5 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/dabi.jpeg')
user5.profile_picture.attach(io: propic5, filename: 'dabi.jpg')

user6 = User.create(first_name: "Messy Makeup", last_name: "Girl", password: "password", email: "user6@email.com")
propic6 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/makeup.jpeg')
user6.profile_picture.attach(io: propic6, filename: 'makeup.jpg')

user7 = User.create(first_name: "Kim", last_name: "Kardashian (Crying)", password: "password", email: "user7@email.com")
propic7 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/crying.jpeg')
coverpic7 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/kim_kardashian.png')
user7.profile_picture.attach(io: propic7, filename: 'crying.jpg')
user7.cover_photo.attach(io: coverpic7, filename: 'kim_kardashian.png')

user8 = User.create(first_name: "Blinking", last_name: "Guy", password: "password", email: "user8@email.com")
propic8 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/blinking_guy.jpeg')
coverpic8 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/blinking_guy_frames.jpeg')
user8.profile_picture.attach(io: propic8, filename: 'blinking_guy.jpg')
user8.cover_photo.attach(io: coverpic8, filename: 'blinking_guy_grames.jpg')

user9 = User.create(first_name: "ThisIs", last_name: "Fine", password: "password", email: "user9@email.com")
propic9 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/this_is_fine.jpeg')
user9.profile_picture.attach(io: propic9, filename: 'this_is_fine.jpg')

user10 = User.create(first_name: "That's My", last_name: "Opinion", password: "password", email: "user10@email.com")
propic10 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/opinion.jpeg')
coverpic10 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/opinion_reaction.jpeg')
user10.profile_picture.attach(io: propic10, filename: 'opinion.jpg')
user10.cover_photo.attach(io: coverpic10, filename: 'opinion_reaction.jpg')

user11 = User.create(first_name: "Noodle", last_name: "The Pug", password: "password", email: "user11@email.com")
propic11 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/bones.jpeg')
user11.profile_picture.attach(io: propic11, filename: 'opinion.jpg')

user12 = User.create(first_name: "Blank", last_name: "User", password: "password", email: "user12@email.com")

user13 = User.create(first_name: "I am", last_name: "Drake", password: "password", email: "user12@email.com")
propic13 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/drake.jpeg')
coverpic13 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/drake_cover.jpeg')
user13.profile_picture.attach(io: propic13, filename: 'drake.jpg')
user13.cover_photo.attach(io: coverpic13, filename: 'drake_cover.jpg')

user14 = User.create(first_name: "Tuxedo Winnie", last_name: "The Pooh", password: "password", email: "user13@email.com")
propic14 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/tuxedo.jpeg')
user14.profile_picture.attach(io: propic14, filename: 'tuxedo.jpg')

post1 = Post.create(content: "this is the first post... :o", author_id: user1.id)
post2 = Post.create(content: "ITS PROUNOUNCED GIF, NOT JIF!!!", author_id: user10.id, profile_id: user2.id)
post3 = Post.create(content: "Spongebob told me that Squidward likes krabby patties >:)", author_id: user3.id)
post4 = Post.create(content: "Does anyone have chicken breast to share? Please? Pleaseeee?", author_id: user5.id)
post5 = Post.create(content: "Hi! So I heard it's a bones day... does that mean you have chicken breast to share?", author_id: user5.id, profile_id: user11.id)
post6 = Post.create(content: "Does anyone know what imposter syndrome is? Asking for a friend.", author_id: user4.id)
post7 = Post.create(content: "lol", author_id: user6.id)
post8 = Post.create(content: "i dropped my diamond earring in the ocean T.T", author_id: user7.id)
post9 = Post.create(content: "It's a bones day!!! YAY!", author_id: user11.id)
post10 = Post.create(content: "I think tomorrow is going to be a no bones day though. Reminder: no hard pants!", author_id: user11.id)
post11 = Post.create(content: "everything is fine. *eye twitch*", author_id: user9.id)
post12 = Post.create(content: "i only post my opinions. THAT'S JUST MY OPINION!", author_id: user10.id)
post13 = Post.create(content: "*blinks*", author_id: user8.id)
post14 = Post.create(content: "Hi! Are you sure everything is fine? Let me know how I can help!", author_id: user5.id, profile_id: user9.id)
post15 = Post.create(content: "Pineapple 100% belongs on pizza", author_id: user10.id)

friend1 = Friend.create(user_id: user12.id, friend_id: user1.id, status: false)
friend2 = Friend.create(user_id: user1.id, friend_id: user2.id, status: true)
friend3 = Friend.create(user_id: user2.id, friend_id: user1.id, status: true)
friend4 = Friend.create(user_id: user1.id, friend_id: user3.id, status: true)
friend5 = Friend.create(user_id: user3.id, friend_id: user1.id, status: true)
friend6 = Friend.create(user_id: user1.id, friend_id: user4.id, status: true)
friend7 = Friend.create(user_id: user4.id, friend_id: user1.id, status: true)
friend8 = Friend.create(user_id: user1.id, friend_id: user5.id, status: true)
friend9 = Friend.create(user_id: user5.id, friend_id: user1.id, status: true)
friend10 = Friend.create(user_id: user1.id, friend_id: user6.id, status: true)
friend11 = Friend.create(user_id: user6.id, friend_id: user1.id, status: true)
friend12 = Friend.create(user_id: user1.id, friend_id: user7.id, status: true)
friend13 = Friend.create(user_id: user7.id, friend_id: user1.id, status: true)
friend14 = Friend.create(user_id: user1.id, friend_id: user8.id, status: true)
friend15 = Friend.create(user_id: user8.id, friend_id: user1.id, status: true)
friend16 = Friend.create(user_id: user1.id, friend_id: user9.id, status: true)
friend17 = Friend.create(user_id: user9.id, friend_id: user1.id, status: true)
friend18 = Friend.create(user_id: user1.id, friend_id: user10.id, status: true)
friend19 = Friend.create(user_id: user10.id, friend_id: user1.id, status: true)
friend20 = Friend.create(user_id: user1.id, friend_id: user11.id, status: true)
friend21 = Friend.create(user_id: user11.id, friend_id: user1.id, status: true)
friend22 = Friend.create(user_id: user1.id, friend_id: user13.id, status: true)
friend23 = Friend.create(user_id: user13.id, friend_id: user1.id, status: true)
friend24 = Friend.create(user_id: user1.id, friend_id: user14.id, status: true)
friend25 = Friend.create(user_id: user14.id, friend_id: user1.id, status: true)
friend26 = Friend.create(user_id: user2.id, friend_id: user10.id, status: true)
friend27 = Friend.create(user_id: user10.id, friend_id: user2.id, status: true)
friend28 = Friend.create(user_id: user5.id, friend_id: user11.id, status: true)
friend29 = Friend.create(user_id: user11.id, friend_id: user5.id, status: true)
friend30 = Friend.create(user_id: user5.id, friend_id: user9.id, status: true)
friend31 = Friend.create(user_id: user9.id, friend_id: user5.id, status: true)