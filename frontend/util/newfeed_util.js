export const fetchNewsfeedContent = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/newsfeed'
    })
}