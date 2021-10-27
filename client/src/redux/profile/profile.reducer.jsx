import types from "./profile.types";

const INITIAL_STATE = {
  AboutMe: {
    header: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut sagittis mollis.`,
    quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra neque tellus.`,
    detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut sagittis mollis Etiam viverra, eros in venenatis eleifend, tortor purus fringilla orci, in pulvinar lectus sem vel ligula. In elementum id ipsum vel scelerisque.`,
  },

  Education: [
    {
      degree: "Master of Engineering (M.E) in Software Engineering",
      year: "2011 - 2013",
      institute:
        "Bannari Amman Institute of Technology (BIT) - Sathy. Anna University, Tamil Nade, India",
    },
    {
      degree: "Master of Engineering (M.E) in Software Engineering",
      year: "2011 - 2013",
      institute:
        "Bannari Amman Institute of Technology (BIT) - Sathy. Anna University, Tamil Nade, India",
    },
    {
      degree: "Master of Engineering (M.E) in Software Engineering",
      year: "2011 - 2013",
      institute:
        "Bannari Amman Institute of Technology (BIT) - Sathy. Anna University, Tamil Nade, India",
    },
  ],
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EDIT_ABOUT_ME:
      return {
        ...state,
        AboutMe: { ...action.payload },
      };

    case types.ADD_NEW_DEGREE:
      return {
        ...state,
        Education: [action.payload, ...state.Education],
      };

    default:
      return state;
  }
};

export default profileReducer;
