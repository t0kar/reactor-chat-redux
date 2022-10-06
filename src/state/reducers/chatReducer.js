import DUMMY_DATA from '../../data/chat.json';

const chatReducer = (state = DUMMY_DATA.data.comments, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE': {
      return [
        ...state,
        {
          id: state.length + 1,
          author: {
            name: action.username,
            picture: action.picture,
          },
          text: action.message,
          timestamp: Date.now(),
        },
      ];
    }
    case 'SEND_COMMENT': {
      return [
        ...state,
        {
          id: state.length + 1,
          parent_id: action.parent_id,
          author: {
            name: action.username,
            picture: action.picture,
          },
          text: action.message,
          timestamp: Date.now(),
        },
      ];
    }
    default:
      return state;
  }
};

export default chatReducer;
