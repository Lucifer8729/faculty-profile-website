export const editAboutMe = (input) => {
  return {
    header: input.header,
    quote: input.quote,
    detail: input.detail,
  };
};

export const addNewDegree = (input) => {
  return {
    degree: input.degree,
    startDate: input.startDate,
    endDate: input.endDate,
    institute: input.institute,
  };
};
