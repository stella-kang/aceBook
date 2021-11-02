json.partial! 'api/users/user', user: @user
json.profile_picture @user.profile_picture if (@user.profile_picture.attached?)