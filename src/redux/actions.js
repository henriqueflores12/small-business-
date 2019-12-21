// export const addBuisness = "add_buisness";
// export const removeBuisness = "remove_buisness";
export const handleLogIn = boolean => ({
    type: 'SET_LOGIN_STATUS',
    payload: boolean // true or false
  })

export const add_Buisness = (newBuisness) => {
    return {
        type: 'add_buisness',
        value: newBuisness
    }
}

export const remove_Buisness = (index) => {
    return {
        type: 'remove_buisness',
        value: index
    }
}
