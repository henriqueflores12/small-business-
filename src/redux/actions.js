export const setLogin = boolean => ({
  type: "SET_LOGIN_STATUS",
  value: boolean // true or false
});

export const AddBusiness = newBusiness => {
  return {
    type: "ADD_BUSINESS",
    value: newBusiness
  };
};

export const removeBusiness = index => {
  return {
    type: "REMOVE_BUSINESS",
    value: index
  };
};

export const setUser = user => {
  return {
    type: "SET_USER",
    value: user
  };
};
