export const fetchProfilePosts = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/profile`
    })
}