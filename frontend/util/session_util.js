export const signup = (formData) => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: formData,
        contentType: false,
        processData: false
    })
}

export const login = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
}

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
}

export const edit = (formData) => {
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${parseInt(formData.get("user[id]"))}`,
        data: formData,
        contentType: false,
        processData: false
    })
}