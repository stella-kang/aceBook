json.friend_requests do
    @friend_requests.each do |request|
        json.set! request.id do
            json.extract! request, :friend_id, :user_id, :status, :id
        end
    end
end

# json.friends do
#     @friends.each do |friend|
#         json.set! friend.id do
#             json.partial! 'api/users/user', user: friend
#         end
#     end
# end