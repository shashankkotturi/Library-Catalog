const booksReducer = (state = {Hello: "idiot"}, action) => {
  switch(action.type) {
    // case :
    //   return action.payload;

    default:
      return state
  }
}

export default booksReducer;