export const fetchNewsfeedPosts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/newsfeed'
    })
}