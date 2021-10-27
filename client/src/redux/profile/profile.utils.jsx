export const editAboutMe = (input) => {
  return {
    header: input.header,
    quote: input.quote,
    detail: input.detail,
  };
};

export const addNewDegree = (input, from, to) => {
  const startDate = new Date(from);
  const endDate = new Date(to);
  const yearRange = `${startDate.getFullYear()} - ${endDate.getFullYear()}`;

  return {
    degree: input.degree,
    year: yearRange,
    institute: input.institute,
  };
};

export const deleteDegree = (index, array) => {
  array.splice(index, 1);

  return {
    newList: array,
  };
};
