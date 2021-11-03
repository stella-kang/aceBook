export const createPost = (formData) => {
    return $.ajax({
        method: 'POST',
        url: "/api/posts",
        data: formData,
        contentType: false,
        processData: false
    })
}

export const updatePost = (formData) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${parseInt(formData.get("post[id]"))}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const deletePost = (postId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${postId}`
    })
}