export const fetchUser = (userId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${userId}`
    })
}