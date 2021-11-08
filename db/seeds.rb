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

user1 = User.create(first_name: "stella", last_name: "kang", password: "password", email: "stella@email.com")
file1 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/pikachu.jpeg')
user1.profile_picture.attach(io: file1, filename: 'pikachu.jpg')

user2 = User.create(first_name: "heajin", last_name: "Jeong", password: "password", email: "heajin@email.com")
file2 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/heajin.jpeg')
user2.profile_picture.attach(io: file2, filename: 'heajin.jpg')

user3 = User.create(first_name: "Michelle", last_name: "Lee", password: "password", email: "michelle@email.com")
file3 = URI.open('https://acebook-profilepicture-seeds.s3.us-east-2.amazonaws.com/michelle.jpeg')
user3.profile_picture.attach(io: file3, filename: 'michelle.jpg')

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