# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

user1 = User.create(first_name: "stella", last_name: "kang", password: "password", email: "stella@email.com")

post1 = Post.create(content: "post1", author_id: 1)
post1 = Post.create(content: "post2", author_id: 1)
post1 = Post.create(content: "post3", author_id: 1)
post1 = Post.create(content: "post4", author_id: 1)
post1 = Post.create(content: "post5", author_id: 1)
