export const createLike = (like) => {
    return $.ajax({
        method: 'POST',
        url: `/api/likes`,
        data: { like }
    })
}

// export const createPostLike = (like) => {
//     return $.ajax({
//         method: 'POST',
//         url: `/api/posts/${like.likeable_id}/likes`,
//         data: { like }
//     })
// }

export const deleteLike = (likeId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
}

export const fetchLikes = () => {
    return $.ajax({
        method: 'GET',
        url: "/api/likes"
    })
}
