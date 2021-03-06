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

  SkillList: [
    ["HTML/CSS", "80"],
    ["C/C++", "90"],
    ["Javascript", "95"],
    ["Python", "90"],
  ],
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PROFILE:
      return { ...state, ...action.payload };

    case types.EDIT_ABOUT_ME:
      return {
        ...state,
        AboutMe: { ...action.payload },
      };

    case types.ADD_NEW_DEGREE:
      return {
        ...state,
        Education: [...action.payload.newList],
      };

    case types.DELETE_DEGREE:
      return {
        ...state,
        Education: [...action.payload.newList],
      };

    case types.ADD_NEW_SKILL:
      return {
        ...state,
        SkillList: [...action.payload.newList],
      };

    case types.DELETE_SKILL:
      return {
        ...state,
        SkillList: [...action.payload.newList],
      };

    default:
      return state;
  }
};

export default profileReducer;
