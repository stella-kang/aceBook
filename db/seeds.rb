require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
# coverpic4 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/spongebob.jpeg')
user4.profile_picture.attach(io: propic4, filename: 'spiderman.png')
# user4.cover_photo.attach(io: coverpic4, filename: 'spongebob.jpg')

user5 = User.create(first_name: "Dabi", last_name: "The Doggie", password: "password", email: "user5@email.com")
propic5 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/dabi.jpeg')
# coverpic5 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/spongebob.jpeg')
user5.profile_picture.attach(io: propic5, filename: 'dabi.jpg')
# user5.cover_photo.attach(io: coverpic5, filename: 'spongebob.jpg')

user6 = User.create(first_name: "Messy Makeup", last_name: "Girl", password: "password", email: "user6@email.com")
propic6 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/makeup.jpeg')
# coverpic6 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/spongebob.jpeg')
user6.profile_picture.attach(io: propic6, filename: 'makeup.jpg')
# user6.cover_photo.attach(io: coverpic6, filename: 'spongebob.jpg')

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
# coverpic9 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/blinking_guy_frames.jpeg')
user9.profile_picture.attach(io: propic9, filename: 'this_is_fine.jpg')
# user9.cover_photo.attach(io: coverpic8, filename: 'blinking_guy_grames.jpg')

user10 = User.create(first_name: "That's My", last_name: "Opinion", password: "password", email: "user10@email.com")
propic10 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/opinion.jpeg')
coverpic10 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/opinion_reaction.jpeg')
user10.profile_picture.attach(io: propic10, filename: 'opinion.jpg')
user10.cover_photo.attach(io: coverpic10, filename: 'opinion_reaction.jpg')

user11 = User.create(first_name: "Noodle", last_name: "The Pug", password: "password", email: "user11@email.com")
propic11 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/bones.jpeg')
# coverpic11 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/opinion_reaction.jpeg')
user11.profile_picture.attach(io: propic11, filename: 'opinion.jpg')
# user11.cover_photo.attach(io: coverpic10, filename: 'opinion_reaction.jpg')

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

# comment1 = Comment.create(content: "comment1", author_id: user1.id, post_id: post1.id)
# comment2 = Comment.create(content: "comment2", author_id: user1.id, post_id: post2.id)
# comment3 = Comment.create(content: "comment3", author_id: user1.id, post_id: post3.id)

# friend1 = Friend.create(user_id: user2.id, friend_id: user1.id, status: false)
# friend1 = Friend.create(user_id: user2.id, friend_id: user3.id, status: true)
# friend1 = Friend.create(user_id: user3.id, friend_id: user2.id, status: true)