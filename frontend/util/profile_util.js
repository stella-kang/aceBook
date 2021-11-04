export const fetchProfileContent = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/profile`
    })
}