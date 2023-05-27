
const initialState = {
  subscribed: false
};

const newsletterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SUBSCRIBE_TO_NEWSLETTER':
      return {
        ...state,
        subscribed: true
      };
    default:
      return state;
  }
};

export default newsletterReducer;