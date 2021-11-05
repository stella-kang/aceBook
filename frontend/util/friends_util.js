export const fetchFriends = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/friends`
    })
}