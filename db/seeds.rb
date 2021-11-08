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

user1 = User.create(first_name: "Confused", last_name: "Pikachu", password: "password", email: "stella@email.com")
file1 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/pikachu.jpeg')
user1.profile_picture.attach(io: file1, filename: 'pikachu.jpg')

user2 = User.create(first_name: "Table", last_name: "Cat", password: "password", email: "heajin@email.com")
file2 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/heajin.jpeg')
user2.profile_picture.attach(io: file2, filename: 'heajin.jpg')

user3 = User.create(first_name: "Patrick", last_name: "Star", password: "password", email: "michelle@email.com")
file3 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/michelle.jpeg')
user3.profile_picture.attach(io: file3, filename: 'michelle.jpg')

# user4 = User.create(first_name: "TheReal", last_name: "Spiderman", password: "password", email: "michelle@email.com")
# file4 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/michelle.jpeg')
# user4.profile_picture.attach(io: file3, filename: 'michelle.jpg')

# user5 = User.create(first_name: "Dabi", last_name: "theDoggie", password: "password", email: "michelle@email.com")
# file5 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/michelle.jpeg')
# user5.profile_picture.attach(io: file3, filename: 'michelle.jpg')

# user6 = User.create(first_name: "Messy", last_name: "Makeup", password: "password", email: "michelle@email.com")
# file6 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/michelle.jpeg')
# user6.profile_picture.attach(io: file3, filename: 'michelle.jpg')

# user7 = User.create(first_name: "Big", last_name: "Brain", password: "password", email: "michelle@email.com")
# file7 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/michelle.jpeg')
# user7.profile_picture.attach(io: file3, filename: 'michelle.jpg')

# user8 = User.create(first_name: "ThisIs", last_name: "Fine", password: "password", email: "michelle@email.com")
# file8 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/michelle.jpeg')
# user8.profile_picture.attach(io: file3, filename: 'michelle.jpg')

# user9 = User.create(first_name: "SnoopDogg", last_name: "Kid", password: "password", email: "michelle@email.com")
# file9 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/michelle.jpeg')
# user9.profile_picture.attach(io: file3, filename: 'michelle.jpg')

# user10 = User.create(first_name: "Michelle", last_name: "Lee", password: "password", email: "michelle@email.com")
# file10 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/michelle.jpeg')
# user10.profile_picture.attach(io: file3, filename: 'michelle.jpg')

post1 = Post.create(content: "post1", author_id: user1.id)
post2 = Post.create(content: "post2", author_id: user2.id)
post3 = Post.create(content: "post3", author_id: user3.id)
post4 = Post.create(content: "post4", author_id: user1.id)
post5 = Post.create(content: "post5", author_id: user3.id, profile_id: user2.id)

comment1 = Comment.create(content: "comment1", author_id: user1.id, post_id: post1.id)
comment2 = Comment.create(content: "comment2", author_id: user1.id, post_id: post2.id)
comment3 = Comment.create(content: "comment3", author_id: user1.id, post_id: post3.id)

friend1 = Friend.create(user_id: user2.id, friend_id: user1.id, status: false)
friend1 = Friend.create(user_id: user2.id, friend_id: user3.id, status: true)
friend1 = Friend.create(user_id: user3.id, friend_id: user2.id, status: true)