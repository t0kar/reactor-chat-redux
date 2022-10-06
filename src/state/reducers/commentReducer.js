const commentReducer = (state = [], action) => {
  switch (action.type) {
    case 'REPLY': {
      return { id: action.id, user: action.user };
    }
    default:
      return state;
  }
};

export default commentReducer;
