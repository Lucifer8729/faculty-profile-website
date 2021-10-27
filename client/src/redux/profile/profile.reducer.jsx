import types from "./profile.types";

const INITIAL_STATE = {
  AboutMe: {
    header: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut sagittis mollis.`,
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra neque tellus.`,
    detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut sagittis mollis Etiam viverra, eros in venenatis eleifend, tortor purus fringilla orci, in pulvinar lectus sem vel ligula. In elementum id ipsum vel scelerisque.`,
  },
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EDIT_ABOUT_ME:
      return {
        ...state,
        AboutMe: { ...action.payload },
      };

    default:
      return state;
  }
};

export default profileReducer;
