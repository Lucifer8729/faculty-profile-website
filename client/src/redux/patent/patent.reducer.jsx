import types from "./patent.types";

const INITIAL_STATE = {
  PatentList: [
    {
      title:
        "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
      date: "October 2021",
      location: "Springer, Singapore (Scopus Indexed)",
      viewLink: "#",
      downloadLink: "#",
    },
    {
      title:
        "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
      date: "February 2020",
      location: "Springer, Singapore (Scopus Indexed)",
      viewLink: "#",
      downloadLink: "#",
    },
    {
      title:
        "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
      date: "February 2020",
      location: "Springer, Singapore (Scopus Indexed)",
      viewLink: "#",
      downloadLink: "#",
    },
    {
      title:
        "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
      date: "February 2020",
      location: "Springer, Singapore (Scopus Indexed)",
      viewLink: "#",
      downloadLink: "#",
    },
    {
      title:
        "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
      date: "February 2020",
      location: "Springer, Singapore (Scopus Indexed)",
      viewLink: "#",
      downloadLink: "#",
    },
  ],
};

const patentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_NEW_PATENT:
      return {
        ...state,
        PatentList: [action.payload, ...state.PatentList],
      };

    case types.DELETE_PATENT:
      return {
        ...state,
        PatentList: [...action.payload.newList],
      };

    default:
      return state;
  }
};

export default patentReducer;
