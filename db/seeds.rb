# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users') 
Post.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('posts') 
Comment.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('comments') 

user1 = User.create(first_name: "stella", last_name: "kang", password: "password", email: "stella@email.com")
user2 = User.create(first_name: "heajin", last_name: "Jeong", password: "password", email: "heajin@email.com")
user3 = User.create(first_name: "Michelle", last_name: "Lee", password: "password", email: "michelle@email.com")

post1 = Post.create(content: "post1", author_id: 1)
post2 = Post.create(content: "post2", author_id: 1)
post3 = Post.create(content: "post3", author_id: 1)
post4 = Post.create(content: "post4", author_id: 1)
post5 = Post.create(content: "post5", author_id: 1)

comment1 = Comment.create(content: "comment1", author_id: 1, post_id: 1)
comment2 = Comment.create(content: "comment2", author_id: 1, post_id: 1)
comment3 = Comment.create(content: "comment3", author_id: 1, post_id: 1)