import types from "./publications.types";

const INITIAL_STATE = {
  PublicationList: [
    {
      title:
        "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
      date: "February 2020",
      location: "Springer, Singapore (Scopus Indexed)",
      description:
        "Artificial Intelligence and Evolutionary Computations in Engineering Systems. Advances in Intelligent Systems and Computing,  vol. 1056, ISBN: 978-981-15-0199-9.",
      authors: ["S.Kaliraj", "D.Vivek", "M. Uma", "P. Balasubramanie"],
      viewLink: "#",
      downloadLink: "#",
    },
    {
      title:
        "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
      date: "February 2020",
      location: "Springer, Singapore (Scopus Indexed)",
      description:
        "Artificial Intelligence and Evolutionary Computations in Engineering Systems. Advances in Intelligent Systems and Computing,  vol. 1056, ISBN: 978-981-15-0199-9.",
      authors: ["S.Kaliraj", "D.Vivek", "M. Uma", "P. Balasubramanie"],
      viewLink: "#",
      downloadLink: "#",
    },
    {
      title:
        "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
      date: "February 2020",
      location: "Springer, Singapore (Scopus Indexed)",
      description:
        "Artificial Intelligence and Evolutionary Computations in Engineering Systems. Advances in Intelligent Systems and Computing,  vol. 1056, ISBN: 978-981-15-0199-9.",
      authors: ["S.Kaliraj", "D.Vivek", "M. Uma", "P. Balasubramanie"],
      viewLink: "#",
      downloadLink: "#",
    },
  ],
};

const publicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PUBLICATIONS:
      return {
        ...state,
        ...action.payload,
      };

    case types.ADD_NEW_PUBLICATION:
      return {
        ...state,
        PublicationList: [action.payload, ...state.PublicationList],
      };

    case types.DELETE_PUBLICATION:
      return {
        ...state,
        PublicationList: [...action.payload.newList],
      };

    default:
      return state;
  }
};

export default publicationReducer;
