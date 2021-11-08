export const fetchNewsfeedContent = (num1, num2) => {
    return $.ajax({
        method: 'GET',
        url: '/api/newsfeed'
    })
}